import type { Metadata, Viewport } from 'next';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import { MobileCta } from '@/components/mobile-cta';
import { Motion } from '@/components/motion';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { JsonLd } from '@/components/bits';
import { localBusinessSchema, SITE_URL } from '@/lib/site';
import './globals.css';

const display = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '800'],
  style: ['italic'],
  variable: '--font-display',
  display: 'swap',
});
const body = Barlow({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-body', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Rhino Window Tint | St. Amant, LA', template: '%s | Rhino Window Tint' },
  description:
    'Car, truck, home, and storefront window tint in St. Amant, Louisiana. Geoshield pro dealer on LA-431. Call (225) 210-7353.',
  formatDetection: { telephone: true },
};

export const viewport: Viewport = { themeColor: '#0b0b0d', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <MobileCta />
        <Motion />
        <JsonLd data={localBusinessSchema()} />
      </body>
    </html>
  );
}
