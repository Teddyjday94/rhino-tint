// Real Google reviews copied word for word from the public listing on 2026-10-01.
// These show when live Google syncing is off or unavailable. Do not edit the wording.
// Overall rating and count live in data/business.ts.

export interface Review {
  author: string;
  authorUrl?: string;
  photoUrl?: string;
  rating: number;
  text: string;
  when: string;
  source: 'Google';
  truncated?: boolean;
}

export const CURATED_REVIEWS: Review[] = [
  {
    author: 'kevindunbar91',
    rating: 5,
    when: 'September 2026',
    source: 'Google',
    text:
      'To say that I’m happy with my service is an understatement! I am amazed and my new car looks amazing with the window tint job. Not to mention I was able to get in the same day!!! Thanks so much you guys!! 100/10 recommend!!!!!',
  },
  {
    author: 'Nicole Norwood',
    rating: 5,
    when: 'August 2026',
    source: 'Google',
    truncated: true,
    text:
      "I don't usually write reviews, but this place deserves one. The team was professional, kind, and genuinely cared about making sure I was happy with the results. My windows look fantastic, and the tint was done perfectly.",
  },
  {
    author: 'mikki Hancock',
    rating: 5,
    when: 'September 2026',
    source: 'Google',
    text:
      'If you are looking for amazing customer service and tint for your vehicle this is your place. They did an amazing job!!! Definitely will use them for all my vehicles.',
  },
];
