import Image from "next/image";
import { MEDIA } from "@/data/media";
export function WindowGallery() {
  const items=[MEDIA.frontDoor,MEDIA.brickGrid,MEDIA.yardReflection,MEDIA.shadedWindow,MEDIA.sunroom,MEDIA.storefront];
  return <div className="window-gallery">{items.map((m,i)=><figure key={m.src} className={`window-gallery-${(i%3)+1}`}><Image src={m.src} alt={m.alt} fill sizes="(max-width: 800px) 100vw, 33vw"/></figure>)}</div>;
}
