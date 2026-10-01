import Image from 'next/image';
import { MEDIA, type MediaKey } from '@/data/media';

interface HeroProps {
  desktop: MediaKey;
  mobile?: MediaKey;
  eyebrow: string;
  title: React.ReactNode;
  lead: React.ReactNode;
  children?: React.ReactNode;
  tall?: boolean;
  tag?: string;
}

export function Hero({ desktop, mobile, eyebrow, title, lead, children, tall = true, tag }: HeroProps) {
  const d = MEDIA[desktop];
  const m = MEDIA[mobile ?? desktop];
  return (
    <section className={`hero${tall ? '' : ' hero-sub'}`}>
      <div className="hero-media">
        <Image className="d-only" src={d.src} alt={d.alt} fill priority sizes="100vw" placeholder="blur" style={{ objectFit: 'cover' }} />
        <Image className="m-only" src={m.src} alt={m.alt} fill priority sizes="100vw" placeholder="blur" style={{ objectFit: 'cover' }} />
      </div>
      {tag && <span className="hero-tag">{tag}</span>}
      <div className="wrap" data-hero="">
        <p className="eyebrow" style={{ color: '#e2e2e2' }}>
          {eyebrow}
        </p>
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
        {children}
      </div>
    </section>
  );
}
