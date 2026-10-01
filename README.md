# Rhino Window Tint website

Four-page site for Rhino Window Tint, 44014 LA-431, St. Amant, LA.

| Page | Path | Job |
| --- | --- | --- |
| Home | `/` | Show the shop, route people to auto or property, collect quotes |
| Automotive | `/automotive` | Car and truck tint: benefits, options, process, gallery, FAQ, quote |
| Home & Business | `/home-business` | Residential and commercial film on a lighter "architectural" theme |
| Gallery & Contact | `/gallery-contact` | Filterable photo gallery, reels, reviews, hours, map, quote form |

Built with Next.js 15 (App Router), TypeScript, and GSAP for scroll motion. Deploys to Vercel with no extra config.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm test           # unit tests: quote validation, review import, media and copy checks
npm run build
```

## Where things live

- `data/business.ts` holds phone, address, hours, Google rating and review count. Change facts here only.
- `data/media.ts` lists every photo on the site with its caption and alt text. Photos are in `public/images/<category>/` with descriptive file names.
- `data/reviews.ts` has real Google reviews copied word for word. They show whenever live reviews are off.
- `data/reels.ts` has the six Facebook reels and the shop photo shown as each one's cover. The player loads only when someone presses play. To use a real frame from a reel, save it to `public/images/`, add it to `data/media.ts`, and point that reel's `poster` at it.
- `lib/google-reviews.ts` pulls live Google reviews.
- `lib/quote.ts` and `app/api/quote/route.ts` handle the quote form.
- `components/motion.tsx` runs the scroll animations. It tags headings, photos, and list items automatically (see the `AUTO` and `STAGGER` lists at the top), and the styles for each reveal are under "motion" in `app/globals.css`. Visitors who turn on reduced motion get a still page.

## Live Google reviews

1. In Google Cloud, enable **Places API (New)** and create an API key. Restrict it to that API.
2. In Vercel, add `GOOGLE_PLACES_API_KEY`. Optionally add `GOOGLE_PLACE_ID`; if you skip it, the site finds the listing by name and address.
3. Redeploy. The site fetches the current rating, review count, and Google's five most recent reviews once a day. Live reviews show first, followed by the saved ones in `data/reviews.ts`.

If the key is missing or Google errors, the site falls back to the saved reviews and the rating in `data/business.ts`, so nothing breaks.

## Quote form email

Requests are validated in the browser and again on the server. To get them by email:

1. Create a free [Resend](https://resend.com) account and verify the sending domain.
2. Add `RESEND_API_KEY`, `QUOTE_TO_EMAIL`, and `QUOTE_FROM_EMAIL` in Vercel.

Until those are set, preview and local builds log requests on the server and show the confirmation so the form can be demoed. The production site instead tells the visitor the request didn't go through and to call, so no quote is lost without anyone knowing.

## Before launch

- Set `NEXT_PUBLIC_SITE_URL` to the real domain so canonical links, the sitemap, and Open Graph tags point at it.
- Confirm hours with the shop. They were taken from the Google listing on 2026-10-01.
- Add the domain to Google Search Console and submit `/sitemap.xml`.
