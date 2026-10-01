import { ContactCard } from '@/components/contact-card';
import { GalleryFilter } from '@/components/gallery-filter';
import { Photo } from '@/components/photo';
import { QuoteForm } from '@/components/quote-form';
import { ReelShowcase } from '@/components/reel-showcase';
import { ReviewWall } from '@/components/review-wall';
import { BUSINESS } from '@/data/business';
import { pageMetadata } from '@/lib/site';

export const revalidate = 86400;

export const metadata = pageMetadata({
  title: 'Gallery & Contact',
  description:
    'Photos of cars, trucks, homes, and storefronts tinted by Rhino Window Tint, plus hours, directions, and a quote form. 44014 LA-431, St. Amant, LA.',
  path: '/gallery-contact',
});

const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(`${BUSINESS.name}, ${BUSINESS.google.reviewSearchQuery}`)}&output=embed`;

export default function GalleryContactPage() {
  return (
    <>
      <section className="section hex-bg" style={{ paddingTop: 'calc(var(--header-h) + clamp(48px, 8vw, 110px))' }} aria-labelledby="g-h">
        <div className="wrap">
          <div className="head-row" data-hero="">
            <div>
              <p className="eyebrow">Gallery &amp; contact</p>
              <h1 id="g-h">
                The work,
                <br />
                <span className="red">and how to reach us</span>
              </h1>
            </div>
            <div className="btn-row">
              <a className="btn" href="#quote">
                Get a quote
              </a>
              <a className="btn btn-ghost" href={BUSINESS.phoneHref}>
                {BUSINESS.phone}
              </a>
            </div>
          </div>
          <GalleryFilter />
        </div>
      </section>

      <section className="section steel" aria-labelledby="reels">
        <div className="wrap">
          <h2 id="reels" style={{ marginBottom: 'clamp(32px, 5vw, 56px)' }}>
            Video <span className="red">reels</span>
          </h2>
          <ReelShowcase />
        </div>
      </section>

      <section className="section paper" aria-labelledby="reviews">
        <div className="wrap">
          <div className="head-row">
            <div>
              <p className="eyebrow">Google reviews</p>
              <h2 id="reviews">
                What customers
                <br />
                <span className="red">wrote</span>
              </h2>
            </div>
          </div>
          <ReviewWall limit={6} />
        </div>
      </section>

      <section className="section" aria-labelledby="visit">
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <div>
            <p className="eyebrow">Visit</p>
            <h2 id="visit" style={{ marginBottom: 28 }}>
              On LA-431 in
              <br />
              <span className="red">St. Amant</span>
            </h2>
            <ContactCard />
          </div>
          <div style={{ display: 'grid', gap: 14 }}>
            <Photo k="storefront" caption="Look for the red Rhino sign" sizes="(min-width: 900px) 45vw, 100vw" />
            <iframe className="map" src={MAP_SRC} title={`Map to ${BUSINESS.name}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <section className="section steel" id="quote" aria-labelledby="quote-h">
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <div>
            <p className="eyebrow">Quote</p>
            <h2 id="quote-h">
              Request
              <br />
              <span className="red">a quote</span>
            </h2>
            <p className="lead" style={{ marginTop: 20 }}>
              Pick vehicle, home, or business and the form asks only what we need for that job.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
