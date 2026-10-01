import Link from 'next/link';
import { ADDRESS_LINE, BUSINESS, NAV } from '@/data/business';

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <p className="display" style={{ fontSize: '2.4rem', color: 'var(--text)', marginBottom: 12 }}>
              Rhino <span className="red">Tint</span>
            </p>
            <p style={{ maxWidth: '36ch' }}>
              Window tint for cars, trucks, homes, and storefronts. {BUSINESS.filmDealer} pro dealer on LA-431 in{' '}
              {BUSINESS.address.city}.
            </p>
          </div>
          <div>
            <h2>Pages</h2>
            <ul>
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Visit</h2>
            <p>
              <a href={BUSINESS.google.directionsUrl} target="_blank" rel="noopener">
                {ADDRESS_LINE}
              </a>
            </p>
            <p>
              Mon to Sat, 8 AM to 5 PM
              <br />
              Closed Sunday
            </p>
          </div>
          <div>
            <h2>Call or text</h2>
            <p>
              <a href={BUSINESS.phoneHref} style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1.2rem' }}>
                {BUSINESS.phone}
              </a>
            </p>
            <p>
              <a href={BUSINESS.google.mapsUrl} target="_blank" rel="noopener">
                Read our Google reviews
              </a>
            </p>
          </div>
        </div>
        <div className="foot-base">
          <span>© {year} {BUSINESS.name}. {BUSINESS.address.city}, Louisiana.</span>
          <span>Ask us about Louisiana tint limits before going darker on the front windows.</span>
        </div>
      </div>
    </footer>
  );
}
