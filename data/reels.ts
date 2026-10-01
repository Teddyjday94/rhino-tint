export interface Reel {
  id: string;
  url: string;
}

const ids = [
  '1535001428431755',
  '1106391468941547',
  '1658033342606390',
  '2561948400915459',
  '1103224149083449',
  '1646891020128191',
];

export const REELS: Reel[] = ids.map((id) => ({ id, url: `https://www.facebook.com/reel/${id}/` }));

export function reelEmbedSrc(reel: Reel) {
  const href = encodeURIComponent(reel.url);
  return `https://www.facebook.com/plugins/video.php?height=476&href=${href}&show_text=false&width=267&t=0`;
}
