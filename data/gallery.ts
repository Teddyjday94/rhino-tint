import type { MediaKey } from "./media";
export type GalleryCategory = "automotive" | "residential" | "commercial" | "shop-team";
export type GalleryItem = { id: string; mediaKey: MediaKey; category: GalleryCategory; caption: string };
export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "auto-black-suv", mediaKey: "blackSuv", category: "automotive", caption: "SUV tint project in the Rhino install bay" },
  { id: "auto-sedan", mediaKey: "blackSedan", category: "automotive", caption: "Sedan tint project" },
  { id: "auto-white-suv", mediaKey: "whiteSuv", category: "automotive", caption: "White SUV tint project" },
  { id: "auto-truck", mediaKey: "whiteTruck", category: "automotive", caption: "Pickup tint project" },
  { id: "auto-maroon", mediaKey: "maroonSuv", category: "automotive", caption: "Maroon SUV tint project" },
  { id: "home-door", mediaKey: "frontDoor", category: "residential", caption: "Residential door glass project" },
  { id: "home-brick", mediaKey: "brickGrid", category: "residential", caption: "Residential brick window project" },
  { id: "home-yard", mediaKey: "yardReflection", category: "residential", caption: "Residential window with reflective finish" },
  { id: "home-shade", mediaKey: "shadedWindow", category: "residential", caption: "Residential window project" },
  { id: "commercial-glass", mediaKey: "storefront", category: "commercial", caption: "Large commercial glass project" },
  { id: "team", mediaKey: "familyShop", category: "shop-team", caption: "Inside Rhino Window Tint" }
];
