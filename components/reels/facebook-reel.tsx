"use client";
import { useState } from "react";
import type { ReelItem } from "@/data/reels";
export function FacebookReel({ reel, active }: { reel: ReelItem; active: boolean }) {
  const [failed,setFailed] = useState(false);
  if (!active || failed) return <div className="reel-fallback"><span>{reel.label}</span><a href={reel.url} target="_blank" rel="noreferrer">Open on Facebook</a></div>;
  const embed = `https://www.facebook.com/plugins/video.php?height=476&href=${encodeURIComponent(reel.url)}&show_text=false&width=267&t=0`;
  return <div className="reel-frame-wrap"><iframe title={reel.label} src={embed} width="267" height="476" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen onError={() => setFailed(true)} /><a href={reel.url} target="_blank" rel="noreferrer">Open reel on Facebook</a></div>;
}
