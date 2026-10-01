import Image from 'next/image';
import { CtaBand, Faq, faqSchema, JsonLd, Points } from '@/components/bits';
import { Hero } from '@/components/hero';
import { Photo, WindowPhoto } from '@/components/photo';
import { QuoteForm } from '@/components/quote-form';
import { BUSINESS } from '@/data/business';
import { GALLERY, MEDIA } from '@/data/media';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Home & Commercial Window Film in St. Amant, LA',
  description:
    'Residential and commercial window film from Rhino Window Tint in St. Amant. Cut heat, glare, and fading on house windows, French doors, sunrooms, and storefronts.',
  path: '/home-business',
});

const FAQ = [
  {
    q: 'Will film make my house dark inside?',
    a: 'Not like a car. Most home film is chosen to keep the view and daylight while cutting heat and glare. Reflective film looks like a mirror from outside in daylight and stays easy to see through from inside.',
  },
  {
    q: 'Does reflective film give privacy at night?',
    a: 'No. Reflective film works when it’s brighter outside than inside. At night with the lights on, people can see in, so you’ll still want blinds or curtains for bedrooms and bathrooms.',
  },
  {
    q: 'Can you do just one problem room?',
    a: 'Yes. A lot of jobs start with the one west-facing room or the sunroom that’s unbearable after lunch. Tell us which windows bother you most.',
  },
  {
    q: 'What do you need from me for a quote?',
    a: 'A rough window count, which rooms or sides of the building bother you, and photos if you have them. Call the shop or use the form below.',
  },
];

const PROPERTY_GALLERY = GALLERY.filter((g) => g.filter === 'residential' || g.filter === 'commercial');

export default function HomeBusinessPage() {
  return (
    <>
      <Hero
        desktop="sunroom"
        mobile="frenchDoors"
        tall={false}
        eyebrow="Residential & commercial"
        title={
          <>
            Home &amp; business <span className="red">window film</span>
          </>
        }
        lead="Film for house windows, French doors, sunrooms, offices, and storefronts, from the same St. Amant shop that tints the trucks."
      >
        <div className="btn-row">
          <a className="btn" href="#quote">
            Get a property quote
          </a>
          <a className="btn btn-ghost" href={BUSINESS.phoneHref}>
            Call {BUSINESS.phone}
          </a>
        </div>
      </Hero>

      <section className="section paper" aria-labelledby="home">
        <div className="wrap split split-wide-right">
          <div>
            <p className="eyebrow">For your home</p>
            <h2 id="home">
              The room you
              <br />
              <span className="red">avoid after lunch</span>
            </h2>
            <p className="lead" style={{ marginTop: 22 }}>
              Every house has one: the west-facing living room, the sunroom, the front door that turns the foyer into an oven. Film on those
              windows takes the edge off without blocking the view.
            </p>
            <ul className="tag-list">
              <li>Single and double-hung windows</li>
              <li>Transoms</li>
              <li>French doors</li>
              <li>Sunrooms</li>
              <li>Arched and specialty glass</li>
            </ul>
          </div>
          <div className="arch-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <WindowPhoto k="porchTransom" className="tall" />
            <WindowPhoto k="brickWindow" className="tall lift" />
          </div>
        </div>
      </section>

      <section className="section paper" style={{ paddingTop: 0 }} aria-labelledby="explain">
        <div className="wrap">
          <div className="head-row">
            <div>
              <p className="eyebrow">What it helps with</p>
              <h2 id="explain">
                Heat, glare,
                <br />
                <span className="red">privacy, fading</span>
              </h2>
            </div>
            <p className="lead">How much each one improves depends on the film you pick. We’ll match the film to the problem.</p>
          </div>
          <div className="split" style={{ alignItems: 'start' }}>
            <Points
              style={{ marginTop: 0 }}
              items={[
                { icon: 'heat', title: 'Heat', text: 'Film reflects and absorbs part of the sun’s energy before it gets into the room, so it heats up slower and the AC runs less hard.' },
                { icon: 'glare', title: 'Glare', text: 'Cuts the bright patch on the TV, the monitor, and the kitchen counter.' },
                { icon: 'privacy', title: 'Daytime privacy', text: 'Reflective film mirrors the yard back at anyone looking in during the day. You can see the brick-and-yard reflection in the photos on this page.' },
                { icon: 'uv', title: 'Fading', text: 'Window film blocks most UV light, one of the main causes of faded floors, rugs, and furniture.' },
              ]}
            />
            <div>
              <Photo k="transomReflective" className="still" caption sizes="(min-width: 900px) 50vw, 100vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="biz">
        <div className="wrap split split-wide-left">
          <figure className="figure" style={{ aspectRatio: '4 / 3' }} data-reveal="">
            <Image src={MEDIA.officeStorefront.src} alt={MEDIA.officeStorefront.alt} fill sizes="(min-width: 900px) 55vw, 100vw" placeholder="blur" style={{ objectFit: 'cover' }} />
            <figcaption>{MEDIA.officeStorefront.caption}</figcaption>
          </figure>
          <div>
            <p className="eyebrow">For your business</p>
            <h2 id="biz">
              Storefronts
              <br />
              <span className="red">and offices</span>
            </h2>
            <p className="lead" style={{ marginTop: 22 }}>
              A wall of west-facing glass makes a lobby hot and a front desk hard to work at. Film evens out the light and keeps
              the front of the building looking uniform from the parking lot.
            </p>
            <Points
              items={[
                { icon: 'people', title: 'Comfort for staff and customers', text: 'Fewer hot spots by the windows.' },
                { icon: 'screen', title: 'Screens you can read', text: 'Less glare on registers and monitors.' },
                { icon: 'storefront', title: 'A cleaner front', text: 'Mismatched or peeling old film comes off and the whole storefront gets one even look.' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section paper" aria-labelledby="pgallery">
        <div className="wrap">
          <p className="eyebrow">Recent property work</p>
          <h2 id="pgallery" style={{ marginBottom: 'clamp(32px, 5vw, 56px)' }}>
            Homes &amp; <span className="red">buildings</span>
          </h2>
          <div className="masonry">
            {PROPERTY_GALLERY.map(({ key }) => (
              <figure className="figure" key={key}>
                <Image src={MEDIA[key].src} alt={MEDIA[key].alt} sizes="(min-width: 900px) 25vw, 50vw" placeholder="blur" />
                <figcaption>{MEDIA[key].caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section paper" style={{ paddingTop: 0 }} aria-labelledby="faq">
        <div className="wrap split split-wide-right" style={{ alignItems: 'start' }}>
          <div>
            <p className="eyebrow">Questions</p>
            <h2 id="faq">
              Good to
              <br />
              <span className="red">know</span>
            </h2>
          </div>
          <Faq items={FAQ} />
        </div>
        <JsonLd data={faqSchema(FAQ)} />
      </section>

      <section className="section paper" id="quote" style={{ background: 'var(--paper-2)' }} aria-labelledby="quote-h">
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <div>
            <p className="eyebrow">Estimate</p>
            <h2 id="quote-h">
              Tell us about
              <br />
              <span className="red">your windows</span>
            </h2>
            <p className="lead" style={{ marginTop: 20 }}>
              A rough count and what’s bothering you is plenty to start. We’ll follow up during shop hours.
            </p>
          </div>
          <QuoteForm initialService="residential" />
        </div>
      </section>

      <CtaBand title="Got a hot room?" text="Call and tell us which windows. We’ll figure out the right film from there." />
    </>
  );
}
