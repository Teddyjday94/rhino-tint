import Image from 'next/image';
import { MEDIA, type MediaKey } from '@/data/media';

interface PhotoProps {
  k: MediaKey;
  className?: string;
  sizes?: string;
  caption?: boolean | string;
  priority?: boolean;
  reveal?: boolean;
  parallax?: number;
}

export function Photo({ k, className, sizes = '(min-width: 900px) 50vw, 100vw', caption, priority, reveal, parallax }: PhotoProps) {
  const a = MEDIA[k];
  const text = typeof caption === 'string' ? caption : caption ? a.caption : null;
  return (
    <figure className={['figure', className].filter(Boolean).join(' ')} data-reveal={reveal ? '' : undefined}>
      <Image
        src={a.src}
        alt={a.alt}
        sizes={sizes}
        placeholder="blur"
        priority={priority}
        data-parallax={parallax}
        style={parallax ? { height: '115%' } : undefined}
      />
      {text && <figcaption>{text}</figcaption>}
    </figure>
  );
}

export function WindowPhoto({ k, className, sizes = '(min-width: 900px) 33vw, 50vw', mullion = false }: { k: MediaKey; className?: string; sizes?: string; mullion?: boolean }) {
  const a = MEDIA[k];
  return (
    <figure className={className} style={{ margin: 0 }} data-reveal="">
      <div className={`window${mullion ? '' : ' no-mull'}`} style={{ height: '100%' }} data-wipe="">
        <Image src={a.src} alt={a.alt} sizes={sizes} placeholder="blur" />
      </div>
    </figure>
  );
}
