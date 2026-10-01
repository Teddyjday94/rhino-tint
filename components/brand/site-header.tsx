"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MEDIA } from "@/data/media";
import { CallLink } from "@/components/ui/call-link";

const NAV = [
  ["/", "Home"], ["/automotive", "Automotive"], ["/home-business", "Home & Business"], ["/gallery-contact", "Gallery & Contact"]
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="nav-shell">
      <Link href="/" className="brand-mark" aria-label="Rhino Window Tint home">
        <Image src={MEDIA.logo.src} alt={MEDIA.logo.alt} width={210} height={70} priority />
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {NAV.map(([href,label]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <div className="desktop-call"><CallLink compact /></div>
      <button className="menu-button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
    </div>
    <nav id="mobile-menu" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile navigation">
      {NAV.map(([href,label]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      <CallLink />
    </nav>
  </header>;
}
