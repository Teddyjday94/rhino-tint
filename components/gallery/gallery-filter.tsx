"use client";
import { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS, type GalleryCategory } from "@/data/gallery";
import { MEDIA } from "@/data/media";
const FILTERS: Array<["all"|GalleryCategory,string]>=[["all","All"],["automotive","Automotive"],["residential","Residential"],["commercial","Commercial"],["shop-team","Shop & Team"]];
export function GalleryFilter() {
  const [filter,setFilter]=useState<"all"|GalleryCategory>("all");
  const visible=filter==="all"?GALLERY_ITEMS:GALLERY_ITEMS.filter(i=>i.category===filter);
  return <div>
    <div className="gallery-filters">{FILTERS.map(([v,l])=><button key={v} className={filter===v?"active":""} onClick={()=>setFilter(v)}>{l}</button>)}</div>
    <div className="gallery-grid">{visible.map(item=>{const m=MEDIA[item.mediaKey];return <figure key={item.id}><div className="gallery-image"><Image src={m.src} alt={m.alt} fill sizes="(max-width: 800px) 100vw, 33vw"/></div><figcaption>{item.caption}</figcaption></figure>})}</div>
  </div>;
}
