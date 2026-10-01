import Image from "next/image";
import { MEDIA } from "@/data/media";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { TintComparison } from "@/components/motion/tint-comparison";
export function ArchitecturalTransition() {
  return <section className="section light-section architectural-transition">
    <div className="section-inner split-grid">
      <div>
        <SectionHeading light eyebrow="Home & business" title="The same attention to glass, moved beyond the driveway." body="Residential and commercial film can help with glare, privacy, and the feel of sun-heavy rooms without turning the space into a blackout box."/>
        <ButtonLink href="/home-business">Explore property tint</ButtonLink>
      </div>
      <TintComparison/>
    </div>
    <div className="window-ribbon">
      {[MEDIA.frontDoor,MEDIA.brickGrid,MEDIA.yardReflection].map(m=><div key={m.src} className="window-tile"><Image src={m.src} alt={m.alt} fill sizes="33vw"/></div>)}
    </div>
  </section>;
}
