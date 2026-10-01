import Image from 'next/image';
import Link from 'next/link';
import { CtaBand, Faq, faqSchema, JsonLd } from '@/components/bits';
import { Hero } from '@/components/hero';
import { Photo } from '@/components/photo';
import { QuoteForm } from '@/components/quote-form';
import { ReelShowcase } from '@/components/reel-showcase';
import { BUSINESS } from '@/data/business';
import { GALLERY, MEDIA } from '@/data/media';
import { REELS } from '@/data/reels';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Car & Truck Window Tint in St. Amant, LA',
  description:
    'Automotive window tint for cars, trucks, and SUVs at Rhino Window Tint on LA-431 in St. Amant. Windshield strips, old tint removal, Geoshield film. Call (225) 210-7353.',
  path: '/automotive',
});

const FAQ = [
  {
    q: 'How long will my vehicle be at the shop?',
    a: 'It depends on the vehicle and whether old tint has to come off first. Call with the year, make, and model and we’ll give you a time when you book.',
  },
  {
    q: 'Can you take off my old tint?',
    a: 'Yes. Removal is charged separately, because scraping off old film and the glue under it takes real time, especially on a back glass with defrost lines.',
  },
  {
    q: 'How dark can I go in Louisiana?',
    a: 'Louisiana sets different limits for the windshield, the front side windows, and the back. Tell us what look you want and we’ll go over what’s legal for your vehicle before anything goes on.',
  },
  {
    q: 'Do you do windshield strips?',
    a: 'Yes. A strip across the top of the windshield is one of the most common add-ons we do, and it helps a lot with low sun on the drive home.',
  },
  {
    q: 'When can I roll my windows down?',
    a: 'Give the film a few days to cure before you roll the windows down. We’ll tell you the exact wait for your film when you pick up.',
  },
];

const AUTO_GALLERY = GALLERY.filter((g) => g.filter === 'automotive').slice(0, 16);

export default function AutomotivePage() {
  return (
    <>
      <Hero
        desktop="sierraWhite"
        mobile="silveradoHd"
        tall={false}
        eyebrow="Automotive"
        title={
          <>
            Car &amp; truck <span className="red">window tint</span>
          </>
        }
        lead="Sedans, half-tons, three-row SUVs, and work trucks. Done inside a clean, well-lit bay in St. Amant, not out in a parking lot."
      >
        <div className="btn-row">
          <a className="btn" href="#quote">
            Quote my vehicle
          </a>
          <a className="btn btn-ghost" href={BUSINESS.phoneHref}>
            Call {BUSINESS.phone}
          </a>
        </div>
      </Hero>

      <section className="section">
        <div className="wrap split split-wide-left">
          <div data-reveal="">
            <p className="eyebrow">Why tint your vehicle</p>
            <h2>
              A cooler cab
              <br />
              <span className="red">and a cleaner look</span>
            </h2>
            <ol className="points">
              <li>
                <strong>Comfort</strong>
                <p>Film cuts the heat coming through the glass, so the cab cools down faster after the truck sits in a parking lot all day.</p>
              </li>
              <li>
                <strong>Glare</strong>
                <p>Less squinting into a low sun on the drive home, and a windshield strip handles the worst of it.</p>
              </li>
              <li>
                <strong>Privacy</strong>
                <p>Tools, bags, and car seats are harder to see from outside.</p>
              </li>
              <li>
                <strong>UV</strong>
                <p>Window film blocks most UV light, which slows fading and cracking on seats and dashboards.</p>
              </li>
            </ol>
          </div>
          <div className="meet-photo" data-reveal="">
            <Photo k="silveradoHd" sizes="(min-width: 900px) 42vw, 100vw" caption parallax={12} />
          </div>
        </div>
      </section>

      <section className="section steel hex-bg" aria-labelledby="options">
        <div className="wrap">
          <div className="head-row">
            <div>
              <p className="eyebrow">Your options</p>
              <h2 id="options">
                Three choices
                <br />
                <span className="red">to make</span>
              </h2>
            </div>
            <p className="lead">These are the three things we’ll ask about when you book. Not sure yet? We’ll help you sort it out.</p>
          </div>
          <div className="options">
            <div className="option" data-reveal="">
              <div className="shade-bar" aria-hidden="true" />
              <h3>Shade</h3>
              <p>
                How dark you want it. Lighter shades keep the factory look and still cut glare. Darker shades add privacy. Louisiana law caps how
                dark the front windows can go, and we’ll show you where that line is.
              </p>
            </div>
            <div className="option" data-reveal="">
              <div className="shade-bar" aria-hidden="true" style={{ background: 'linear-gradient(90deg, #d8232a, #2a2d33)' }} />
              <h3>Film</h3>
              <p>
                Rhino is a {BUSINESS.filmDealer} pro dealer. Film lines differ in how much heat they block and how they look from outside. Ask
                which line fits what you care about most and your budget.
              </p>
            </div>
            <div className="option" data-reveal="">
              <div className="shade-bar" aria-hidden="true" style={{ background: 'repeating-linear-gradient(90deg, #fff 0 18%, transparent 18% 22%)' }} />
              <h3>Coverage</h3>
              <p>
                Full sides and back, just the front two to match the factory privacy glass, a windshield strip, or a full windshield. Old tint
                removal can be added to any of them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="process">
        <div className="wrap">
          <p className="eyebrow">How it goes</p>
          <h2 id="process" style={{ marginBottom: 'clamp(32px, 5vw, 56px)' }}>
            From call <span className="red">to pickup</span>
          </h2>
          <ol className="process">
            <li data-reveal="">
              <b>01</b>
              <h3>Call or send a quote</h3>
              <p>Give us the year, make, and model and what you want done. We’ll get you a price and a time.</p>
            </li>
            <li data-reveal="">
              <b>02</b>
              <h3>Drop it off</h3>
              <p>Bring it to {BUSINESS.address.street} at your scheduled time and we’ll pull it into the bay.</p>
            </li>
            <li data-reveal="">
              <b>03</b>
              <h3>In the bay</h3>
              <p>Glass gets cleaned, film gets cut to your windows, and it goes on inside, out of the wind and dust.</p>
            </li>
            <li data-reveal="">
              <b>04</b>
              <h3>Let it cure</h3>
              <p>Keep the windows up for a few days. Some haze or small water spots are normal while the film dries out.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section-tight" aria-labelledby="auto-gallery">
        <div className="wrap">
          <div className="head-row" style={{ marginBottom: 28 }}>
            <h2 id="auto-gallery">Out of the bay</h2>
            <Link className="text-link" href="/gallery-contact">
              All photos
            </Link>
          </div>
          <div className="masonry">
            {AUTO_GALLERY.map(({ key }) => (
              <figure className="figure" key={key}>
                <Image src={MEDIA[key].src} alt={MEDIA[key].alt} sizes="(min-width: 900px) 25vw, 50vw" placeholder="blur" />
                <figcaption>{MEDIA[key].caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section steel" aria-labelledby="reels">
        <div className="wrap">
          <h2 id="reels" style={{ marginBottom: 'clamp(32px, 5vw, 56px)' }}>
            Watch a <span className="red">tint job</span>
          </h2>
          <ReelShowcase reels={REELS} title="Clips from Facebook" />
        </div>
      </section>

      <section className="section" aria-labelledby="faq">
        <div className="wrap split split-wide-right" style={{ alignItems: 'start' }}>
          <div>
            <p className="eyebrow">Questions</p>
            <h2 id="faq">
              Before you
              <br />
              <span className="red">book</span>
            </h2>
          </div>
          <Faq items={FAQ} />
        </div>
        <JsonLd data={faqSchema(FAQ)} />
      </section>

      <section className="section steel" id="quote" aria-labelledby="quote-h">
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <div>
            <p className="eyebrow">Quote</p>
            <h2 id="quote-h">
              Price out
              <br />
              <span className="red">your vehicle</span>
            </h2>
            <p className="lead" style={{ marginTop: 20 }}>
              Year, make, model, and what you want done. We’ll get back to you during shop hours.
            </p>
          </div>
          <QuoteForm initialService="automotive" />
        </div>
      </section>

      <CtaBand title="Rather just call?" text="Monday to Saturday, 8 to 5. Tell us what you drive and what you want done." />
    </>
  );
}
