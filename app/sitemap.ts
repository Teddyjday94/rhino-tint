import type { MetadataRoute } from 'next';
import { NAV } from '@/data/business';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return NAV.map((n) => ({
    url: `${SITE_URL}${n.href === '/' ? '' : n.href}`,
    changeFrequency: 'monthly',
    priority: n.href === '/' ? 1 : 0.8,
  }));
}
