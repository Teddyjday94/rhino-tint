import { BUSINESS } from '@/data/business';
import { CURATED_REVIEWS, type Review } from '@/data/reviews';

export interface ReviewFeed {
  rating: number;
  count: number;
  reviews: Review[];
  live: boolean;
}

// Shape of the parts of a Places API (New) response we use.
interface PlacesReview {
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  relativePublishTimeDescription?: string;
  authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
}
interface PlacesDetails {
  rating?: number;
  userRatingCount?: number;
  reviews?: PlacesReview[];
}

const PLACES = 'https://places.googleapis.com/v1';
const ONE_DAY = 60 * 60 * 24;

export function fallbackFeed(): ReviewFeed {
  return {
    rating: BUSINESS.google.rating,
    count: BUSINESS.google.reviewCount,
    reviews: CURATED_REVIEWS,
    live: false,
  };
}

export function normalizePlacesReviews(details: PlacesDetails): Review[] {
  return (details.reviews ?? [])
    .map((r): Review | null => {
      const text = (r.originalText?.text ?? r.text?.text ?? '').trim();
      const author = r.authorAttribution?.displayName?.trim();
      if (!text || !author || typeof r.rating !== 'number') return null;
      return {
        author,
        authorUrl: r.authorAttribution?.uri,
        photoUrl: r.authorAttribution?.photoUri,
        rating: r.rating,
        text,
        when: r.relativePublishTimeDescription ?? '',
        source: 'Google',
      };
    })
    .filter((r): r is Review => r !== null && r.rating >= 4);
}

/** Live reviews first, then curated ones that are not already shown. */
export function mergeReviews(live: Review[], curated: Review[] = CURATED_REVIEWS): Review[] {
  const seen = new Set(live.map((r) => r.author.toLowerCase()));
  return [...live, ...curated.filter((r) => !seen.has(r.author.toLowerCase()))];
}

async function resolvePlaceId(key: string): Promise<string | null> {
  if (process.env.GOOGLE_PLACE_ID) return process.env.GOOGLE_PLACE_ID;
  const res = await fetch(`${PLACES}/places:searchText`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': key,
      'X-Goog-FieldMask': 'places.id',
    },
    body: JSON.stringify({ textQuery: BUSINESS.google.reviewSearchQuery }),
    next: { revalidate: ONE_DAY * 7 },
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { places?: { id: string }[] };
  return data.places?.[0]?.id ?? null;
}

/**
 * Pulls the current rating, review count, and up to five recent reviews from Google.
 * Cached for a day. Falls back to the curated list if no key is set or Google errors.
 */
export async function getReviewFeed(): Promise<ReviewFeed> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key) return fallbackFeed();

  try {
    const placeId = await resolvePlaceId(key);
    if (!placeId) return fallbackFeed();

    const res = await fetch(`${PLACES}/places/${placeId}`, {
      headers: {
        'X-Goog-Api-Key': key,
        'X-Goog-FieldMask': 'rating,userRatingCount,reviews',
      },
      next: { revalidate: ONE_DAY },
    });
    if (!res.ok) return fallbackFeed();

    const details = (await res.json()) as PlacesDetails;
    const live = normalizePlacesReviews(details);
    return {
      rating: details.rating ?? BUSINESS.google.rating,
      count: details.userRatingCount ?? BUSINESS.google.reviewCount,
      reviews: mergeReviews(live),
      live: live.length > 0,
    };
  } catch {
    return fallbackFeed();
  }
}
