import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/brand/site-header";
import { SiteFooter } from "@/components/brand/site-footer";
import { MobileCta } from "@/components/brand/mobile-cta";
import { localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { default: "Rhino Window Tint | St. Amant, LA", template: "%s | Rhino Window Tint" },
  description: "Automotive, residential, and commercial window tinting in St. Amant, Louisiana."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = localBusinessSchema();
  return <html lang="en"><body>
    <SiteHeader/>
    <main>{children}</main>
    <SiteFooter/>
    <MobileCta/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/>
  </body></html>;
}
