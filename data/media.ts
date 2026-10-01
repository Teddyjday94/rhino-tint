export type MediaCategory = "brand" | "hero" | "automotive" | "residential" | "commercial" | "team";
export type MediaAsset = { src: string; alt: string; category: MediaCategory; width?: number; height?: number };
export const MEDIA = {
  logo: { src: "/images/brand/rhino-logo.webp", alt: "Rhino Window Tint logo", category: "brand" },
  heroTruck: { src: "/images/hero/rhino-hero-truck.webp", alt: "Tinted gray pickup truck inside the Rhino Window Tint installation shop", category: "hero" },
  blackSuv: { src: "/images/automotive/black-suv-shop.webp", alt: "Dark SUV with tinted windows inside Rhino Window Tint", category: "automotive" },
  blackSedan: { src: "/images/automotive/black-sedan-shop.webp", alt: "Black sedan after window tint installation in the Rhino shop", category: "automotive" },
  whiteSuv: { src: "/images/automotive/white-suv-shop.webp", alt: "White SUV with dark window tint inside the installation bay", category: "automotive" },
  whiteTruck: { src: "/images/automotive/white-truck-shop.webp", alt: "White pickup truck inside Rhino Window Tint", category: "automotive" },
  maroonSuv: { src: "/images/automotive/maroon-suv-shop.webp", alt: "Maroon SUV displayed inside Rhino Window Tint", category: "automotive" },
  darkSuv: { src: "/images/automotive/dark-suv-shop.webp", alt: "Dark SUV parked in front of the Rhino shop wall", category: "automotive" },
  whiteSuvWide: { src: "/images/automotive/white-suv-wide.webp", alt: "White SUV with completed tint in the Rhino installation bay", category: "automotive" },
  brickWindow: { src: "/images/residential/brick-window.webp", alt: "Tinted window set in a brick exterior wall", category: "residential" },
  sunroom: { src: "/images/residential/sunroom-wide.webp", alt: "Wide bank of residential windows across a brick sunroom", category: "residential" },
  storefront: { src: "/images/commercial/storefront-glass.webp", alt: "Commercial glass storefront with large window panels", category: "commercial" },
  familyShop: { src: "/images/team/rhino-family-shop.webp", alt: "Rhino Window Tint team members with their baby inside the shop", category: "team" },
  frontDoor: { src: "/images/residential/front-door-glass.webp", alt: "Residential double front doors with glass panels", category: "residential" },
  brickGrid: { src: "/images/residential/brick-window-grid.webp", alt: "Large residential grid window set in a brick wall", category: "residential" },
  yardReflection: { src: "/images/residential/yard-reflection-window.webp", alt: "Residential window reflecting a green yard and trees", category: "residential" },
  shadedWindow: { src: "/images/residential/shaded-window.webp", alt: "Tall shaded residential window beside landscaping", category: "residential" }
} as const;
export type MediaKey = keyof typeof MEDIA;
