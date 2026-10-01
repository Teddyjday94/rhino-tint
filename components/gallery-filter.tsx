'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { GALLERY, MEDIA, type GalleryFilter as Filter } from '@/data/media';

const FILTERS: { value: Filter | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'automotive', label: 'Vehicles' },
  { value: 'residential', label: 'Homes' },
  { value: 'commercial', label: 'Business' },
  { value: 'shop-team', label: 'Shop & crew' },
];

export function GalleryFilter() {
  const [filter, setFilter] = useState<Filter | 'all'>('all');
  const items = useMemo(() => (filter === 'all' ? GALLERY : GALLERY.filter((g) => g.filter === filter)), [filter]);

  return (
    <div>
      <div className="filters" role="group" aria-label="Filter photos">
        {FILTERS.map((f) => {
          const count = f.value === 'all' ? GALLERY.length : GALLERY.filter((g) => g.filter === f.value).length;
          return (
            <button key={f.value} type="button" className="filter-btn" aria-pressed={filter === f.value} onClick={() => setFilter(f.value)}>
              {f.label}
              <span>{count}</span>
            </button>
          );
        })}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {items.length} photos
      </p>
      <div className="masonry">
        {items.map(({ key }) => {
          const a = MEDIA[key];
          return (
            <figure className="figure" key={key}>
              <Image src={a.src} alt={a.alt} sizes="(min-width: 900px) 25vw, 50vw" placeholder="blur" />
              <figcaption>{a.caption}</figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}
