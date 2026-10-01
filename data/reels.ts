import type { MediaKey } from '@/data/media';

export interface Reel {
  id: string;
  url: string;
  /** Cover photo shown until someone presses play. Swap for a frame grab from the reel if you have one. */
  poster: MediaKey;
}

const reels: [string, MediaKey][] = [
  ['1535001428431755', 'heroSilverado'],
  ['1106391468941547', 'escalade'],
  ['1658033342606390', 'silveradoBlack'],
  ['2561948400915459', 'sequoia'],
  ['1103224149083449', 'durango'],
  ['1646891020128191', 'tesla'],
];

export const REELS: Reel[] = reels.map(([id, poster]) => ({ id, poster, url: `https://www.facebook.com/reel/${id}/` }));

export function reelEmbedSrc(reel: Reel) {
  const href = encodeURIComponent(reel.url);
  return `https://www.facebook.com/plugins/video.php?height=476&href=${href}&show_text=false&width=267&t=0`;
}
