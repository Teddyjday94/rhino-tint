'use client';

import Image from 'next/image';
import { useState } from 'react';
import { REELS, reelEmbedSrc, type Reel } from '@/data/reels';

/**
 * One Facebook player at a time. Nothing from Facebook loads until someone presses play,
 * and the poster stays up if the embed is slow or blocked.
 */
export function ReelShowcase({ reels = REELS, title = 'Watch the work' }: { reels?: Reel[]; title?: string }) {
  const [active, setActive] = useState(0);
  const [started, setStarted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const pick = (i: number) => {
    setActive(i);
    setLoaded(false);
    setStarted(true);
  };

  const reel = reels[active];
  const showFrame = started;

  return (
    <div className="reels">
      <div>
        <div className="reel-stage">
          {showFrame && (
            <iframe
              key={reel.id}
              src={reelEmbedSrc(reel)}
              title={`Rhino Window Tint reel ${active + 1} on Facebook`}
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              onLoad={() => setLoaded(true)}
            />
          )}
          {!loaded && (
            <div className="reel-poster">
              <Image src={reel.poster} alt="" fill sizes="320px" placeholder="blur" />
              <div className="reel-poster-ui">
                <button type="button" className="reel-play" onClick={() => pick(active)} aria-label={`Play reel ${active + 1}`}>
                  <svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                    <path d="M6 4l14 8-14 8z" />
                  </svg>
                </button>
                <p style={{ fontSize: '0.9rem', margin: 0 }}>{showFrame ? 'Loading from Facebook…' : 'Tap to play'}</p>
              </div>
            </div>
          )}
        </div>
        <p className="reel-fallback">
          Not loading?{' '}
          <a className="text-link" href={reel.url} target="_blank" rel="noopener">
            Watch it on Facebook
          </a>
        </p>
      </div>

      <div>
        <h3 style={{ marginBottom: 12 }}>{title}</h3>
        <p className="lead" style={{ marginBottom: 24 }}>
          Short clips from the bay, posted to Rhino’s Facebook. Pick one to play it here.
        </p>
        <ul className="reel-list">
          {reels.map((r, i) => (
            <li key={r.id}>
              <button
                type="button"
                className="reel-chip"
                aria-pressed={i === active}
                aria-label={`Play reel ${i + 1}`}
                onClick={() => pick(i)}
              >
                <Image src={r.poster} alt="" fill sizes="110px" />
                <span>
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6 4l14 8-14 8z" />
                  </svg>
                  {i === active && started ? 'Playing' : 'Play'}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
