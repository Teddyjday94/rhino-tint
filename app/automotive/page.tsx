import Image from "next/image";
import { Hero } from "@/components/hero/hero";
import { AutomotiveBenefits } from "@/components/automotive/automotive-benefits";
import { InstallProcess } from "@/components/automotive/install-process";
import { QuoteForm } from "@/components/quote/quote-form";
import { ReelShowcase } from "@/components/reels/reel-showcase";
import { ReviewWall } from "@/components/reviews/review-wall";
import { SectionHeading } from "@/components/ui/section-heading";
import { MEDIA } from "@/data/media";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Automotive Window Tint","Automotive window tinting in St. Amant, Louisiana. Explore Rhino Window Tint vehicle projects and request a quote.","/automotive");

export default function AutomotivePage() {
  const gallery=[MEDIA.blackSuv,MEDIA.whiteTruck,MEDIA.blackSedan,MEDIA.maroonSuv,MEDIA.darkSuv,MEDIA.whiteSuvWide];
  return <>
    <Hero mediaKey="blackSuv" eyebrow="Automotive window tint" title="A cleaner look starts at the glass." body="See real vehicles from Rhino’s shop, learn what tint can improve, and send the details of your own ride."/>
    <section className="section"><div className="section-inner"><SectionHeading eyebrow="Why tint" title="Comfort, glare control, privacy, and a finished look."/><AutomotiveBenefits/></div></section>
    <section className="section install-section"><div className="section-inner"><SectionHeading eyebrow="The process" title="Simple from first question to pickup."/><InstallProcess/></div></section>
    <section className="section dark-section"><div className="section-inner"><SectionHeading eyebrow="Shop gallery" title="Actual vehicles. Actual Rhino installs."/><div className="auto-gallery">{gallery.map((m,i)=><figure key={m.src} className={i%3===0?"wide":""}><Image src={m.src} alt={m.alt} fill sizes="(max-width: 800px) 100vw, 50vw"/></figure>)}</div></div></section>
    <section className="section"><div className="section-inner"><SectionHeading eyebrow="Customer feedback" title="Why people keep bringing vehicles back."/><ReviewWall/></div></section>
    <section className="section reels-section"><div className="section-inner"><SectionHeading eyebrow="Video" title="A closer look at Rhino projects."/><ReelShowcase/></div></section>
    <section id="quote" className="section quote-section"><div className="section-inner split-grid"><SectionHeading eyebrow="Vehicle quote" title="Tell us the year, make, model, and what you want done."/><QuoteForm initialService="automotive"/></div></section>
  </>;
}
