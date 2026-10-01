import Link from 'next/link';
import { BUSINESS } from '@/data/business';

export function CtaBand({ title, text, quoteHref = '/gallery-contact#quote' }: { title: React.ReactNode; text: string; quoteHref?: string }) {
  return (
    <section className="cta-band" aria-label="Get in touch">
      <div className="wrap">
        <div>
          <h2>{title}</h2>
          <p style={{ marginTop: 16, fontSize: '1.1rem', maxWidth: '48ch' }}>{text}</p>
        </div>
        <div className="btn-row">
          <a className="btn" href={BUSINESS.phoneHref}>
            Call {BUSINESS.phone}
          </a>
          <Link className="btn btn-ghost" href={quoteHref}>
            Get a quote
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Faq({ items }: { items: { q: string; a: React.ReactNode }[] }) {
  return (
    <div className="faq">
      {items.map((it) => (
        <details key={it.q}>
          <summary>{it.q}</summary>
          <p>{it.a}</p>
        </details>
      ))}
    </div>
  );
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
