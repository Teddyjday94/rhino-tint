'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ADDRESS_LINE, BUSINESS, NAV } from '@/data/business';
import { MEDIA } from '@/data/media';

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const cls = ['site-header', solid && 'solid', open && 'open'].filter(Boolean).join(' ');

  return (
    <header className={cls}>
      <div className="wrap">
        <Link href="/" className="brand" aria-label={`${BUSINESS.name} home`}>
          <Image src={MEDIA.logo.src} alt="" width={46} height={46} priority />
          <span>
            Rhino Tint
            <small>St. Amant, LA</small>
          </span>
        </Link>

        <nav className="nav-desktop" aria-label="Main">
          <ul>
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} aria-current={pathname === n.href ? 'page' : undefined}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a className="btn header-call" href={BUSINESS.phoneHref}>
          {BUSINESS.phone}
        </a>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <b className="sr-only">{open ? 'Close menu' : 'Open menu'}</b>
        </button>
      </div>

      <nav id="mobile-nav" className="nav-mobile" aria-label="Mobile" hidden={!open}>
        {NAV.map((n) => (
          <Link key={n.href} className="big" href={n.href} aria-current={pathname === n.href ? 'page' : undefined}>
            {n.label}
          </Link>
        ))}
        <div className="btn-row" style={{ marginTop: 28 }}>
          <a className="btn" href={BUSINESS.phoneHref}>Call {BUSINESS.phone}</a>
          <Link className="btn btn-ghost" href="/gallery-contact#quote">Get a quote</Link>
        </div>
        <p className="meta">
          {ADDRESS_LINE}
          <br />
          Mon to Sat, 8 AM to 5 PM
        </p>
      </nav>
    </header>
  );
}
