import Image from "next/image";
import { Hero } from "@/components/hero/hero";
import { PropertyBenefits } from "@/components/property/property-benefits";
import { WindowGallery } from "@/components/property/window-gallery";
import { TintComparison } from "@/components/motion/tint-comparison";
import { QuoteForm } from "@/components/quote/quote-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { MEDIA } from "@/data/media";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Home & Business Window Tint","Residential and commercial window film in St. Amant, Louisiana. Explore real property projects and request an estimate.","/home-business");

export default function HomeBusinessPage() {
  return <>
    <Hero mediaKey="frontDoor" eyebrow="Home & business tint" title="Better control over what comes through the glass." body="Explore real residential work from Rhino and see how film can support comfort, glare control, privacy, and UV filtering."/>
    <section className="section light-section"><div className="section-inner"><SectionHeading light eyebrow="Property film" title="Built around the room, not around a one-size-fits-all pitch."/><PropertyBenefits/></div></section>
    <section className="section light-section comparison-section"><div className="section-inner split-grid"><div><SectionHeading light eyebrow="See the difference" title="A visual way to think about treated glass." body="Drag the control across the image. This is a visual treatment, not a measured performance claim."/><p className="fine-print">Exact film performance depends on the film selected and the glass it is installed on.</p></div><TintComparison/></div></section>
    <section className="section light-section"><div className="section-inner"><SectionHeading light eyebrow="Residential work" title="Windows, doors, and larger glass areas from real projects."/><WindowGallery/></div></section>
    <section className="section property-feature"><div className="section-inner split-grid split-grid--image"><div className="portrait-card"><Image src={MEDIA.storefront.src} alt={MEDIA.storefront.alt} fill sizes="(max-width: 800px) 100vw, 48vw"/></div><SectionHeading eyebrow="Commercial glass" title="Storefronts and workspaces deserve the same careful finish." body="Commercial film can support glare management, privacy goals, and a more comfortable space. Rhino can review the glass and talk through the right approach for the property."/></div></section>
    <section id="quote" className="section quote-section"><div className="section-inner split-grid"><SectionHeading eyebrow="Property estimate" title="Tell Rhino what the building needs." body="Choose home or business, estimate the number of windows, and describe the main goal."/><QuoteForm initialService="residential"/></div></section>
  </>;
}
