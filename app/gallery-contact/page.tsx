import { GalleryFilter } from "@/components/gallery/gallery-filter";
import { ReviewWall } from "@/components/reviews/review-wall";
import { ReelShowcase } from "@/components/reels/reel-showcase";
import { QuoteForm } from "@/components/quote/quote-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { BUSINESS } from "@/data/business";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Gallery & Contact","Browse Rhino Window Tint automotive and property projects, watch recent reels, and request a quote in St. Amant, Louisiana.","/gallery-contact");

export default function GalleryContactPage() {
  return <>
    <section className="page-intro"><div className="section-inner"><p className="eyebrow">Gallery & contact</p><h1>Start with the work. Finish with a quote.</h1><p>Filter real Rhino projects, watch supplied reels, read review highlights, and send the details of your own job.</p></div></section>
    <section className="section"><div className="section-inner"><SectionHeading eyebrow="Project gallery" title="Automotive, residential, commercial, and shop life."/><GalleryFilter/></div></section>
    <section className="section reels-section"><div className="section-inner"><SectionHeading eyebrow="Video" title="Six Rhino reels, loaded only when you ask for them."/><ReelShowcase/></div></section>
    <section className="section"><div className="section-inner"><SectionHeading eyebrow="Reviews" title={`${BUSINESS.rating.toFixed(1)} stars across ${BUSINESS.reviewCount} Google reviews.`}/><ReviewWall/></div></section>
    <section className="section contact-panel"><div className="section-inner contact-grid"><div><p className="eyebrow">Visit Rhino</p><h2>{BUSINESS.address}<br/>{BUSINESS.cityLine}</h2><a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>{BUSINESS.hours.map(h=><p key={h}>{h}</p>)}<a className="button-link button-link--ghost" href={BUSINESS.mapUrl} target="_blank" rel="noreferrer">Open in Maps</a></div><div id="quote"><QuoteForm/></div></div></section>
  </>;
}
