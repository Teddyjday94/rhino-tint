'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BUSINESS } from '@/data/business';

/** Call and quote buttons pinned to the bottom on phones once the hero is out of view. */
export function MobileCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const nearBottom = window.innerHeight + window.scrollY > document.body.scrollHeight - 260;
      setShow(window.scrollY > window.innerHeight * 0.6 && !nearBottom);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`mobile-cta${show ? ' show' : ''}`} aria-hidden={!show}>
      <a className="btn" href={BUSINESS.phoneHref} tabIndex={show ? 0 : -1}>
        Call now
      </a>
      <Link className="btn btn-ghost" href="/gallery-contact#quote" tabIndex={show ? 0 : -1}>
        Get a quote
      </Link>
    </div>
  );
}
