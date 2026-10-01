import type { Metadata } from 'next';
import { BUSINESS } from '@/data/business';

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '');

export function pageMetadata(opts: { title: string; description: string; path: string; image?: string }): Metadata {
  const url = `${SITE_URL}${opts.path}`;
  const image = opts.image ?? '/og.jpg';
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: BUSINESS.name,
      title: opts.title,
      description: opts.description,
      images: [{ url: image, width: 1200, height: 630, alt: 'Truck inside the Rhino Window Tint bay' }],
      locale: 'en_US',
    },
    twitter: { card: 'summary_large_image', title: opts.title, description: opts.description, images: [image] },
  };
}

export function localBusinessSchema(rating?: { value: number; count: number }) {
  const a = BUSINESS.address;
  return {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    additionalType: 'https://schema.org/HomeAndConstructionBusiness',
    '@id': `${SITE_URL}/#business`,
    name: BUSINESS.name,
    url: SITE_URL,
    telephone: '+1-225-210-7353',
    image: `${SITE_URL}/og.jpg`,
    logo: `${SITE_URL}/icon.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: a.street,
      addressLocality: a.city,
      addressRegion: a.region,
      postalCode: a.postalCode,
      addressCountry: a.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: BUSINESS.geo.lat, longitude: BUSINESS.geo.lng },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    hasMap: BUSINESS.google.mapsUrl,
    makesOffer: ['Automotive window tint', 'Residential window film', 'Commercial window film', 'Tint removal'].map(
      (name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } }),
    ),
    ...(rating
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: rating.value.toFixed(1),
            reviewCount: rating.count,
          },
        }
      : {}),
  };
}
