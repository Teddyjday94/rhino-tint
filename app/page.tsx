import { Hero } from "@/components/hero/hero";
import { ReviewStrip } from "@/components/reviews/review-strip";
import { AutomotiveShowcase } from "@/components/home/automotive-showcase";
import { ArchitecturalTransition } from "@/components/home/architectural-transition";
import { MeetRhino } from "@/components/home/meet-rhino";
import { ReviewWall } from "@/components/reviews/review-wall";
import { ReelShowcase } from "@/components/reels/reel-showcase";
import { RecentWork } from "@/components/home/recent-work";
import { QuoteForm } from "@/components/quote/quote-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Rhino Window Tint | St. Amant, LA","Window tinting for vehicles, homes, and businesses from Rhino Window Tint in St. Amant, Louisiana.");

export default function HomePage() {
  return <>
    <Hero eyebrow="St. Amant, Louisiana" title="Tint built for the way Louisiana sun hits." body="Automotive, residential, and commercial window film with real local work behind every page."/>
    <ReviewStrip/>
    <AutomotiveShowcase/>
    <ArchitecturalTransition/>
    <MeetRhino/>
    <section className="section reviews-section"><div className="section-inner"><SectionHeading eyebrow="Customer feedback" title="Five-star proof from people who have been in the shop." body="A small sample of public Google review highlights."/><ReviewWall/></div></section>
    <section className="section reels-section"><div className="section-inner"><SectionHeading eyebrow="Rhino in motion" title="See the work moving, not just posed." body="Select a reel to load the Facebook player. The rest stay lightweight until you choose them."/><ReelShowcase/></div></section>
    <RecentWork/>
    <section id="quote" className="section quote-section"><div className="section-inner split-grid"><SectionHeading eyebrow="Start a quote" title="Tell Rhino what you need tinted." body="Vehicle, home, or business. The form changes to match the job so you only fill out what matters."/><QuoteForm/></div></section>
  </>;
}
