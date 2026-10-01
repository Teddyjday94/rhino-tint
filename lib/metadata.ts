import type { Metadata } from "next";
const SITE = "https://rhinowindowtint.com";
export function pageMetadata(title: string, description: string, path = ""): Metadata {
  return { title, description, alternates: { canonical: `${SITE}${path}` }, openGraph: { title, description, type: "website", url: `${SITE}${path}`, siteName: "Rhino Window Tint" } };
}
