import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/data/business";
import { MEDIA } from "@/data/media";
export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-grid">
      <div><Image src={MEDIA.logo.src} alt={MEDIA.logo.alt} width={220} height={74}/><p>Automotive, residential, and commercial window tinting in St. Amant, Louisiana.</p></div>
      <div><p className="footer-label">Visit</p><a href={BUSINESS.mapUrl} target="_blank" rel="noreferrer">{BUSINESS.address}<br/>{BUSINESS.cityLine}</a></div>
      <div><p className="footer-label">Hours</p>{BUSINESS.hours.map(h => <p key={h}>{h}</p>)}</div>
      <div><p className="footer-label">Explore</p><Link href="/automotive">Automotive</Link><Link href="/home-business">Home & Business</Link><Link href="/gallery-contact">Gallery & Contact</Link></div>
    </div>
    <div className="footer-bottom"><span>Rhino Window Tint</span><a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a></div>
  </footer>;
}
