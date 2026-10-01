import Image from "next/image";
import { MEDIA } from "@/data/media";
import { SectionHeading } from "@/components/ui/section-heading";
export function RecentWork() {
  const items=[MEDIA.maroonSuv,MEDIA.whiteSuvWide,MEDIA.brickWindow,MEDIA.shadedWindow];
  return <section className="section recent-work"><div className="section-inner">
    <SectionHeading eyebrow="Recent work" title="Vehicles and glass, without the template grid."/>
    <div className="mosaic">{items.map((m,i)=><figure key={m.src} className={`mosaic-${i+1}`}><Image src={m.src} alt={m.alt} fill sizes="(max-width: 800px) 100vw, 50vw"/></figure>)}</div>
  </div></section>;
}
