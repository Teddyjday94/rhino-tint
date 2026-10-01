import { describe, expect, it } from 'vitest';
import { mergeReviews, normalizePlacesReviews } from '@/lib/google-reviews';
import { CURATED_REVIEWS } from '@/data/reviews';

describe('Google Places review import', () => {
  it('maps Places API reviews and skips incomplete or low ones', () => {
    const out = normalizePlacesReviews({
      reviews: [
        {
          rating: 5,
          originalText: { text: 'Great job on my truck' },
          relativePublishTimeDescription: 'a week ago',
          authorAttribution: { displayName: 'Sam R', uri: 'https://maps.google.com/x', photoUri: 'https://lh3.googleusercontent.com/a' },
        },
        { rating: 5, text: { text: '' }, authorAttribution: { displayName: 'Empty' } },
        { rating: 2, text: { text: 'meh' }, authorAttribution: { displayName: 'Low' } },
      ],
    });
    expect(out).toHaveLength(1);
    expect(out[0]).toMatchObject({ author: 'Sam R', rating: 5, text: 'Great job on my truck', when: 'a week ago', source: 'Google' });
  });

  it('puts live reviews first without duplicating curated ones', () => {
    const live = [{ ...CURATED_REVIEWS[0], when: 'a month ago' }];
    const merged = mergeReviews(live);
    expect(merged[0].when).toBe('a month ago');
    expect(merged.filter((r) => r.author === CURATED_REVIEWS[0].author)).toHaveLength(1);
    expect(merged).toHaveLength(CURATED_REVIEWS.length);
  });
});
