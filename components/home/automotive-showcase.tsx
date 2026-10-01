import Image from "next/image";
import { MEDIA } from "@/data/media";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function AutomotiveShowcase() {
  const shots = [MEDIA.blackSuv, MEDIA.whiteTruck, MEDIA.blackSedan];
  return <section className="section dark-section">
    <div className="section-inner">
      <SectionHeading eyebrow="Automotive tint" title="Clean lines. Dark glass. A finish that belongs on the vehicle." body="Rhino’s shop work speaks louder than stock photography. Every image here comes from the supplied project library."/>
      <div className="editorial-grid">
        {shots.map((m,i)=><Reveal key={m.src} className={`editorial-shot shot-${i+1}`}><Image src={m.src} alt={m.alt} fill sizes="(max-width: 900px) 100vw, 40vw"/></Reveal>)}
      </div>
    </div>
  </section>;
}
