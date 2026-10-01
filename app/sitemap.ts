import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rhinowindowtint.com";
  return ["","/automotive","/home-business","/gallery-contact"].map(path=>({ url:`${base}${path}`, lastModified:new Date(), changeFrequency:"monthly" as const, priority:path===""?1:.8 }));
}
