"use client";
import { useState } from "react";
import { REELS, type ReelItem } from "@/data/reels";
import { FacebookReel } from "./facebook-reel";
export function ReelShowcase({ reels = REELS }: { reels?: ReelItem[] }) {
  const [selected,setSelected] = useState(0);
  const [active,setActive] = useState(false);
  return <div className="reel-showcase">
    <div className="featured-reel">
      {!active && <button className="reel-play" onClick={()=>setActive(true)}>Play selected reel</button>}
      <FacebookReel reel={reels[selected]} active={active} />
    </div>
    <div className="reel-selector" aria-label="Choose a Rhino reel">
      {reels.map((r,i)=><button key={r.id} className={selected===i ? "active":""} onClick={()=>{setSelected(i);setActive(false)}}>{String(i+1).padStart(2,"0")}</button>)}
    </div>
  </div>;
}
