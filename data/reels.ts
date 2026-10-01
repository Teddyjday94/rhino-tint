export type ReelItem = { id: string; url: string; label: string };
export const REELS: ReelItem[] = [
  ["1535001428431755","Shop reel 1"],["1106391468941547","Shop reel 2"],["1658033342606390","Shop reel 3"],["2561948400915459","Shop reel 4"],["1103224149083449","Shop reel 5"],["1646891020128191","Shop reel 6"]
].map(([id,label]) => ({ id, label, url: `https://www.facebook.com/reel/${id}/` }));
