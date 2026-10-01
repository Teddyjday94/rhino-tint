import Link from 'next/link';
import { Hero } from '@/components/hero';
import { Photo, WindowPhoto } from '@/components/photo';
import { QuoteForm } from '@/components/quote-form';
import { ReelShowcase } from '@/components/reel-showcase';
import { GoogleRating, ReviewWall } from '@/components/review-wall';
import { TintCompare } from '@/components/tint-compare';
import { ContactCard } from '@/components/contact-card';
import { BUSINESS } from '@/data/business';
import type { MediaKey } from '@/data/media';
import { pageMetadata } from '@/lib/site';

export const revalidate = 86400;

export const metadata = pageMetadata({
  title: 'Rhino Window Tint | Car, Home & Business Tint in St. Amant, LA',
  description:
    'Window tint for cars, trucks, homes, and storefronts on LA-431 in St. Amant. Geoshield pro dealer, 5.0 on Google. Call (225) 210-7353 or request a quote.',
  path: '/',
});

const RECENT: MediaKey[] = ['silveradoHd', 'frenchDoors', 'sequoia', 'f250', 'porchTransom', 'santaFe', 'elantra', 'durango'];

export default function HomePage() {
  return (
    <>
      <Hero
        desktop="heroSierra"
        mobile="heroSilverado"
        eyebrow="St. Amant, Louisiana"
        tag="44014 LA-431"
        title={
          <>
            Window tint <span className="red">in St. Amant</span>
          </>
        }
        lead="Cars, trucks, SUVs, homes, and storefronts. Every vehicle gets done inside our own bay on LA-431, and we’re a Geoshield pro dealer."
      >
        <div className="btn-row">
          <Link className="btn" href="/gallery-contact#quote">
            Get a quote
          </Link>
          <a className="btn btn-ghost" href={BUSINESS.phoneHref}>
            Call {BUSINESS.phone}
          </a>
        </div>
        <div className="badge-line">
          <span>Open Monday to Saturday</span>
          <span>Old tint removal</span>
          <span>Windshield strips</span>
        </div>
      </Hero>

      <section className="rep" aria-label="At a glance">
        <div className="wrap" style={{ paddingInline: 0 }}>
          <ul>
            <li>
              <a href={BUSINESS.google.mapsUrl} target="_blank" rel="noopener">
                <GoogleRating />
              </a>
            </li>
            <li>
              <strong>8 to 5</strong>
              <span>Monday to Saturday</span>
            </li>
            <li>
              <strong>LA-431</strong>
              <span>St. Amant, LA 70774</span>
            </li>
            <li>
              <strong>Geoshield</strong>
              <span>Pro dealer film</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="head-row">
            <div>
              <p className="eyebrow">From the bay</p>
              <h2>
                Every kind of
                <br />
                vehicle <span className="red">rolls through</span>
              </h2>
            </div>
            <p className="lead">
              A lifted Silverado HD, a Tesla, an Escalade, a Grand Cherokee L. These are customer vehicles photographed in the shop.
            </p>
          </div>
          <div className="showcase">
            <Photo k="escalade" className="a" caption reveal sizes="(min-width: 900px) 58vw, 100vw" />
            <Photo k="tesla" className="b" caption reveal sizes="(min-width: 900px) 40vw, 50vw" />
            <Photo k="grandCherokee" className="c" caption reveal sizes="(min-width: 900px) 25vw, 50vw" />
            <Photo k="a5" className="d" caption reveal sizes="(min-width: 900px) 42vw, 100vw" />
            <Photo k="silveradoHd" className="e" caption reveal sizes="(min-width: 900px) 17vw, 50vw" />
          </div>
          <p style={{ marginTop: 32 }}>
            <Link className="text-link" href="/automotive">
              Automotive tint, options, and FAQs
            </Link>
          </p>
        </div>
      </section>

      <section className="section steel hex-bg">
        <div className="wrap split split-wide-right">
          <div data-reveal="">
            <p className="eyebrow">Why people tint</p>
            <h2>
              What film does
              <br />
              <span className="red">to a window</span>
            </h2>
            <ol className="points">
              <li>
                <strong>Less heat coming through</strong>
                <p>Film cuts the sun load through the glass, so the cab or the room heats up slower in a Louisiana summer.</p>
              </li>
              <li>
                <strong>Less glare</strong>
                <p>Easier on the eyes driving into a low sun, and fewer washed-out TV and computer screens at home.</p>
              </li>
              <li>
                <strong>Privacy</strong>
                <p>People walking past your truck or your front window see less of what’s inside.</p>
              </li>
              <li>
                <strong>Slower fading</strong>
                <p>Window film blocks most UV, which is what fades seats, dashboards, floors, and furniture.</p>
              </li>
            </ol>
          </div>
          <div data-reveal="">
            <TintCompare />
          </div>
        </div>
      </section>

      <div className="fade-to-paper" aria-hidden="true" />

      <section className="section paper" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split split-wide-left" style={{ alignItems: 'end', marginBottom: 'clamp(36px, 5vw, 64px)' }}>
            <div>
              <p className="eyebrow">Not only vehicles</p>
              <h2>
                Homes and
                <br />
                <span className="red">storefronts</span> too
              </h2>
            </div>
            <div>
              <p className="lead">
                Rhino also tints house windows, French doors, sunrooms, and commercial glass. Reflective film cuts glare and makes it
                harder to see in from outside during the day.
              </p>
              <Link className="btn btn-dark" href="/home-business">
                Home &amp; business film
              </Link>
            </div>
          </div>
          <div className="arch-grid">
            <WindowPhoto k="frenchDoors" className="tall" />
            <WindowPhoto k="transomReflective" className="tall lift" />
            <WindowPhoto k="sidingWindow" className="tall" />
          </div>
        </div>
      </section>

      <section className="section paper" style={{ paddingTop: 0 }} aria-labelledby="meet">
        <div className="wrap split">
          <div className="meet-photo" data-reveal="">
            <Photo k="family" sizes="(min-width: 900px) 45vw, 100vw" parallax={12} />
          </div>
          <div data-reveal="">
            <p className="eyebrow">Meet Rhino</p>
            <h2 id="meet">
              The people
              <br />
              <span className="red">doing the work</span>
            </h2>
            <p className="lead" style={{ marginTop: 22 }}>
              Rhino is a local shop in the strip on LA-431. There’s a lobby up front and a bright bay in back under the hexagon lights
              you’ll see in our photos. Stop by and talk it over before you book.
            </p>
            <blockquote className="callout">
              <p className="big-quote">“The team was professional, kind, and genuinely cared about making sure I was happy with the results.”</p>
              <p style={{ margin: '10px 0 0', color: 'var(--paper-muted)' }}>Nicole Norwood, Google review</p>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="reviews">
        <div className="wrap">
          <div className="head-row">
            <div>
              <p className="eyebrow">Google reviews</p>
              <h2 id="reviews">
                Straight from
                <br />
                <span className="red">customers</span>
              </h2>
            </div>
            <p className="lead">Word for word from Rhino’s Google listing.</p>
          </div>
          <ReviewWall limit={6} />
        </div>
      </section>

      <section className="section steel" aria-labelledby="reels">
        <div className="wrap">
          <p className="eyebrow">On Facebook</p>
          <h2 id="reels" style={{ marginBottom: 'clamp(32px, 5vw, 56px)' }}>
            Reels from <span className="red">the shop</span>
          </h2>
          <ReelShowcase />
        </div>
      </section>

      <section className="section-tight" aria-labelledby="recent">
        <div className="wrap">
          <div className="head-row" style={{ marginBottom: 28 }}>
            <h2 id="recent">Recent work</h2>
            <Link className="text-link" href="/gallery-contact">
              See the full gallery
            </Link>
          </div>
          <div className="strip" tabIndex={0} aria-label="Recent work, scroll sideways">
            {RECENT.map((k) => (
              <Photo key={k} k={k} caption sizes="(min-width: 900px) 32vw, 78vw" />
            ))}
          </div>
        </div>
      </section>

      <section className="section steel" id="contact" aria-labelledby="contact-h">
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <div>
            <p className="eyebrow">Get on the schedule</p>
            <h2 id="contact-h" style={{ marginBottom: 28 }}>
              Tell us what
              <br />
              <span className="red">you’re tinting</span>
            </h2>
            <ContactCard />
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
