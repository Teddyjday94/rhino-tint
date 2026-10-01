import Link from "next/link";
import { BUSINESS } from "@/data/business";
export function MobileCta() { return <div className="mobile-cta"><a href={BUSINESS.phoneHref}>Call Rhino</a><Link href="/gallery-contact#quote">Get a Quote</Link></div>; }
