'use client';

import Image from 'next/image';
import { useState } from 'react';
import { MEDIA, type MediaKey } from '@/data/media';

/**
 * Drag (or arrow-key) comparison of plain glass vs. darkened glass.
 * The right side is a simulated shade, not a photo of a specific film.
 */
export function TintCompare({ k = 'stuccoWindow', note }: { k?: MediaKey; note?: string }) {
  const [pos, setPos] = useState(50);
  const a = MEDIA[k];

  return (
    <div>
      <div className="compare" style={{ ['--pos' as string]: `${pos}%` }}>
        <Image src={a.src} alt={a.alt} sizes="(min-width: 900px) 50vw, 100vw" placeholder="blur" />
        <div className="tinted" aria-hidden="true">
          <Image src={a.src} alt="" sizes="(min-width: 900px) 50vw, 100vw" />
        </div>
        <span className="label l">Clear glass</span>
        <span className="label r">With film</span>
        <div className="handle" aria-hidden="true" />
        <label className="sr-only" htmlFor="tint-range">
          Slide to compare clear glass and tinted glass
        </label>
        <input
          id="tint-range"
          type="range"
          min={5}
          max={95}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-valuetext={`${100 - pos}% of the image shown with film`}
        />
      </div>
      <p className="compare-note">
        {note ?? 'Drag the bar. The darker side is a simulation to show the idea, not a specific film or shade.'}
      </p>
    </div>
  );
}
