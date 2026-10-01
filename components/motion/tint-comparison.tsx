"use client";
import Image from "next/image";
import { useState } from "react";
import { MEDIA } from "@/data/media";
export function TintComparison() {
  const [value,setValue] = useState(58);
  return <div className="tint-comparison">
    <div className="tint-visual">
      <Image src={MEDIA.brickGrid.src} alt={MEDIA.brickGrid.alt} fill sizes="(max-width: 800px) 100vw, 50vw" />
      <div className="tint-layer" style={{ width: `${value}%` }} aria-hidden="true" />
      <div className="tint-divider" style={{ left: `${value}%` }} aria-hidden="true" />
    </div>
    <label>Compare the look<input aria-label="Tint comparison" type="range" min="12" max="88" value={value} onChange={e=>setValue(Number(e.target.value))}/></label>
  </div>;
}
