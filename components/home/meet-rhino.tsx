import Image from "next/image";
import { MEDIA } from "@/data/media";
import { BUSINESS } from "@/data/business";
import { SectionHeading } from "@/components/ui/section-heading";
export function MeetRhino() {
  return <section className="section meet-rhino"><div className="section-inner split-grid split-grid--image">
    <div className="portrait-card"><Image src={MEDIA.familyShop.src} alt={MEDIA.familyShop.alt} fill sizes="(max-width: 800px) 100vw, 48vw"/></div>
    <div><SectionHeading eyebrow="Local shop" title="A real place, a real team, and work you can see." body={`Rhino Window Tint is based at ${BUSINESS.address} in ${BUSINESS.cityLine}. Call ahead, stop by, or send the details of your project through the quote form.`}/><div className="contact-lines"><strong>{BUSINESS.phone}</strong><span>{BUSINESS.hours[0]}</span></div></div>
  </div></section>;
}
