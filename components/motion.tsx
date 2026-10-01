'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Elements that animate in on their own, and the reveal style each one gets.
const AUTO: [selector: string, variant: string][] = [
  ['main .eyebrow', 'eyebrow'],
  ['main h2', 'title'],
  ['main .head-row > .lead, main .split > div > .lead, main .btn-row, main .review-more, main .contact-card', ''],
  ['main .meet-photo', 'frame'],
  ['main .figure', 'photo'],
];

// Lists and grids whose items come in one after another.
const STAGGER: [selector: string, variant: string][] = [
  ['.points > li', 'side'],
  ['.route > li', 'route'],
  ['.options > *', ''],
  ['.reviews > *', ''],
  ['.reel-list > li', 'pop'],
  ['.masonry > *', 'photo'],
  ['.faq > *', ''],
  ['.tag-list > li', 'pop'],
  ['.paths > *', 'photo'],
  // A sideways scroller reveals as one piece; its off-screen items would never intersect.
  ['.strip', 'photo'],
];

/** Tags elements for reveal unless they already sit inside something that reveals or animates on load. */
function tag(root: ParentNode) {
  const skip = (el: Element) =>
    (el.closest('[data-hero], .hero, [data-reveal]') !== null && !el.hasAttribute('data-reveal')) || el.closest('.strip') !== null;
  for (const [sel, variant] of STAGGER) {
    root.querySelectorAll(sel).forEach((el) => {
      if (!el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', variant);
    });
  }
  for (const [sel, variant] of AUTO) {
    root.querySelectorAll(sel).forEach((el) => {
      if (skip(el)) return;
      if (!el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', variant);
      else if (variant === 'photo' && el.getAttribute('data-reveal') === '') el.setAttribute('data-reveal', 'photo');
    });
  }
}

/**
 * Scroll reveals, a scroll-linked header, and light parallax.
 * Reveals are CSS transitions toggled by IntersectionObserver, so nothing depends on
 * requestAnimationFrame to become visible. GSAP only drives parallax, which never hides content.
 * Everything is skipped when the visitor prefers reduced motion.
 */
export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;
    const root = document.documentElement;

    tag(document);
    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal], [data-wipe], .route'));

    // Anything already on screen shows immediately; only below-the-fold content animates in.
    const vh = window.innerHeight;
    targets.forEach((el) => {
      if (el.getBoundingClientRect().top < vh * 0.92) el.classList.add('in');
    });
    root.classList.add('motion');

    // Delay only the entrance, so hover transitions afterwards stay instant.
    const clearDelay = (e: TransitionEvent) => {
      const el = e.currentTarget as HTMLElement;
      el.style.transitionDelay = '';
      el.removeEventListener('transitionend', clearDelay);
    };

    const io = new IntersectionObserver(
      (entries) => {
        let i = 0;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.style.transitionDelay = `${Math.min(i++, 6) * 90}ms`;
          el.addEventListener('transitionend', clearDelay);
          el.classList.add('in');
          io.unobserve(el);
        });
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    targets.forEach((el) => !el.classList.contains('in') && io.observe(el));

    let ctx: { revert: () => void } | undefined;
    let cancelled = false;
    const parallax = document.querySelectorAll('[data-parallax], .hero-media');
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
          // The hero photo drifts down and the copy lifts away as the page scrolls past it.
          gsap.utils.toArray<HTMLElement>('.hero').forEach((hero) => {
            const media = hero.querySelector('.hero-media');
            const copy = hero.querySelector('[data-hero]');
            const st = { trigger: hero, start: 'top top', end: 'bottom top', scrub: true };
            if (media) gsap.to(media, { yPercent: 18, ease: 'none', scrollTrigger: st });
            if (copy) gsap.to(copy, { yPercent: -12, opacity: 0.2, ease: 'none', scrollTrigger: st });
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
