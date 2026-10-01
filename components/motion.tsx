'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Scroll reveals and light parallax.
 * Reveals are CSS transitions toggled by IntersectionObserver, so nothing depends on
 * requestAnimationFrame to become visible. GSAP only drives parallax, which never hides content.
 * Everything is skipped when the visitor prefers reduced motion.
 */
export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const root = document.documentElement;
    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal], [data-wipe]'));

    if (!('IntersectionObserver' in window)) return;

    // Anything already on screen shows immediately; only below-the-fold content animates in.
    const vh = window.innerHeight;
    targets.forEach((el) => {
      if (el.getBoundingClientRect().top < vh) el.classList.add('in');
    });
    root.classList.add('motion');

    const io = new IntersectionObserver(
      (entries) => {
        let i = 0;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.style.transitionDelay = `${Math.min(i++, 4) * 80}ms`;
          el.classList.add('in');
          io.unobserve(el);
        });
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    targets.forEach((el) => !el.classList.contains('in') && io.observe(el));

    let ctx: { revert: () => void } | undefined;
    let cancelled = false;
    const parallax = document.querySelectorAll('[data-parallax]');
    if (parallax.length) {
      (async () => {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);
        ctx = gsap.context(() => {
          gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
            const amount = Number(el.dataset.parallax || 10);
            gsap.fromTo(
              el,
              { yPercent: -amount / 2 },
              {
                yPercent: amount / 2,
                ease: 'none',
                scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
              },
            );
          });
        });
      })();
    }

    return () => {
      cancelled = true;
      io.disconnect();
      ctx?.revert();
    };
  }, [pathname]);

  return null;
}
