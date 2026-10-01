import type { StaticImageData } from 'next/image';
import { MEDIA } from '@/data/media';
import reel1 from '@/public/images/reels/reel-1.jpg';
import reel2 from '@/public/images/reels/reel-2.jpg';
import reel3 from '@/public/images/reels/reel-3.jpg';
import reel4 from '@/public/images/reels/reel-4.jpg';
import reel5 from '@/public/images/reels/reel-5.jpg';

export interface Reel {
  id: string;
  url: string;
  /** Frame from the reel, shown until someone presses play. Cropped to drop Facebook's buttons and caption. */
  poster: StaticImageData;
}

const reels: [string, StaticImageData][] = [
  ['1535001428431755', reel1],
  ['1106391468941547', reel2],
  ['1658033342606390', reel3],
  ['2561948400915459', reel4],
  ['1103224149083449', reel5],
  // Shop photo until a frame from this reel is added as public/images/reels/reel-6.jpg.
  ['1646891020128191', MEDIA.tesla.src],
];

export const REELS: Reel[] = reels.map(([id, poster]) => ({ id, poster, url: `https://www.facebook.com/reel/${id}/` }));

export function reelEmbedSrc(reel: Reel) {
  const href = encodeURIComponent(reel.url);
  return `https://www.facebook.com/plugins/video.php?height=476&href=${href}&show_text=false&width=267&t=0`;
}
