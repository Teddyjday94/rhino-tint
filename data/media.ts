import type { StaticImageData } from 'next/image';

import logo from '@/public/images/brand/rhino-tint-logo.jpg';
import storefront from '@/public/images/shop/rhino-storefront-black-ford-truck.jpg';
import shopLot from '@/public/images/shop/shop-lot-hyundai-palisade.jpg';
import family from '@/public/images/team/rhino-family-in-shop.jpg';
import heroSierra from '@/public/images/hero/gmc-sierra-elevation-tint-bay.jpg';
import heroSilverado from '@/public/images/hero/chevy-silverado-tint-bay-vertical.jpg';

import bmw from '@/public/images/automotive/bmw-3-series-white.jpg';
import forester from '@/public/images/automotive/subaru-forester-wilderness.jpg';
import elantra from '@/public/images/automotive/hyundai-elantra-n-line-red.jpg';
import tacoma from '@/public/images/automotive/toyota-tacoma-red.jpg';
import f150TwoTone from '@/public/images/automotive/ford-f150-two-tone-bay.jpg';
import f150Gray from '@/public/images/automotive/ford-f150-gray.jpg';
import accord from '@/public/images/automotive/honda-accord-black-bay.jpg';
import durango from '@/public/images/automotive/dodge-durango-white-bay.jpg';
import tesla from '@/public/images/automotive/tesla-model-3-gray-bay.jpg';
import grandCherokee from '@/public/images/automotive/jeep-grand-cherokee-l-bay.jpg';
import silveradoBlack from '@/public/images/automotive/chevy-silverado-black-bay.jpg';
import sierraWhite from '@/public/images/automotive/gmc-sierra-white-bay.jpg';
import sequoia from '@/public/images/automotive/toyota-sequoia-white-bay.jpg';
import f250 from '@/public/images/automotive/ford-f250-flatbed-red-bay.jpg';
import santaFe from '@/public/images/automotive/hyundai-santa-fe-navy-bay.jpg';
import civic from '@/public/images/automotive/honda-civic-black-bay.jpg';
import sentra from '@/public/images/automotive/nissan-sentra-maroon-bay.jpg';
import f150White from '@/public/images/automotive/ford-f150-white-bay.jpg';
import rogue from '@/public/images/automotive/nissan-rogue-gray-bay.jpg';
import silveradoHd from '@/public/images/automotive/chevy-silverado-hd-blue-bay.jpg';
import a5 from '@/public/images/automotive/audi-a5-sportback-white-bay.jpg';
import escalade from '@/public/images/automotive/cadillac-escalade-white-bay.jpg';
import silveradoDark from '@/public/images/automotive/chevy-silverado-dark-bay.jpg';

import brickHome from '@/public/images/residential/brick-home-front-yard.jpg';
import stuccoWindow from '@/public/images/residential/stucco-double-window.jpg';
import brickWindow from '@/public/images/residential/brick-single-hung-window.jpg';
import frontEntry from '@/public/images/residential/front-entry-and-window.jpg';
import sunroom from '@/public/images/residential/sunroom-window-wall.jpg';
import brickRanch from '@/public/images/residential/brick-ranch-home.jpg';
import transomReflective from '@/public/images/residential/brick-transom-window-reflective.jpg';
import sidingWindow from '@/public/images/residential/siding-double-hung-window.jpg';
import frenchDoors from '@/public/images/residential/arched-french-doors.jpg';
import porchTransom from '@/public/images/residential/porch-transom-window.jpg';

import officeStorefront from '@/public/images/commercial/office-storefront-glass.jpg';

export type MediaCategory = 'brand' | 'shop' | 'team' | 'automotive' | 'residential' | 'commercial';

export interface MediaAsset {
  src: StaticImageData;
  alt: string;
  category: MediaCategory;
  /** Short caption shown in galleries. Only says what is visible in the photo. */
  caption: string;
}

function m(src: StaticImageData, category: MediaCategory, caption: string, alt: string): MediaAsset {
  return { src, category, caption, alt };
}

export const MEDIA = {
  logo: m(logo, 'brand', 'Rhino Tint Ascension logo', 'Rhino Tint Ascension logo'),
  storefront: m(storefront, 'shop', 'The shop on LA-431', 'Black Ford pickup parked in front of the Rhino Window Tint storefront sign showing 225-210-7353'),
  shopLot: m(shopLot, 'shop', 'Out front of the shop', 'White Hyundai Palisade parked outside the Rhino Window Tint storefront'),
  family: m(family, 'team', 'The Rhino crew', 'Rhino Window Tint team member in a Rhino polo standing with a woman in a Rhino shirt and a baby in a car seat inside the shop lobby'),
  heroSierra: m(heroSierra, 'automotive', 'GMC Sierra Elevation in the bay', 'Gray GMC Sierra Elevation inside the Rhino tint bay under hexagon shop lights'),
  heroSilverado: m(heroSilverado, 'automotive', 'Chevy Silverado in the bay', 'Gray Chevy Silverado inside the Rhino tint bay under hexagon shop lights'),

  bmw: m(bmw, 'automotive', 'BMW 3 Series', 'White BMW 3 Series sedan with tinted windows parked on a driveway'),
  forester: m(forester, 'automotive', 'Subaru Forester Wilderness', 'Gray Subaru Forester Wilderness with tinted windows on a concrete pad'),
  elantra: m(elantra, 'automotive', 'Hyundai Elantra N Line', 'Red Hyundai Elantra N Line with tinted windows'),
  tacoma: m(tacoma, 'automotive', 'Toyota Tacoma', 'Red Toyota Tacoma crew cab with tinted windows'),
  f150TwoTone: m(f150TwoTone, 'automotive', 'Ford F-150', 'White and bronze two-tone Ford F-150 inside the Rhino tint bay'),
  f150Gray: m(f150Gray, 'automotive', 'Ford F-150', 'Gray Ford F-150 with tinted windows parked on a driveway'),
  accord: m(accord, 'automotive', 'Honda Accord', 'Black Honda Accord inside the Rhino tint bay'),
  durango: m(durango, 'automotive', 'Dodge Durango', 'White Dodge Durango inside the Rhino tint bay'),
  tesla: m(tesla, 'automotive', 'Tesla Model 3', 'Gray Tesla Model 3 inside the Rhino tint bay'),
  grandCherokee: m(grandCherokee, 'automotive', 'Jeep Grand Cherokee L', 'Black Jeep Grand Cherokee L inside the Rhino tint bay'),
  silveradoBlack: m(silveradoBlack, 'automotive', 'Chevy Silverado', 'Black Chevy Silverado inside the Rhino tint bay'),
  sierraWhite: m(sierraWhite, 'automotive', 'GMC Sierra', 'White GMC Sierra inside the Rhino tint bay'),
  sequoia: m(sequoia, 'automotive', 'Toyota Sequoia', 'White Toyota Sequoia inside the Rhino tint bay'),
  f250: m(f250, 'automotive', 'Ford F-250 flatbed', 'Red Ford F-250 flatbed with a grille guard inside the Rhino tint bay'),
  santaFe: m(santaFe, 'automotive', 'Hyundai Santa Fe', 'Navy Hyundai Santa Fe inside the Rhino tint bay'),
  civic: m(civic, 'automotive', 'Honda Civic', 'Black Honda Civic sedan inside the Rhino tint bay'),
  sentra: m(sentra, 'automotive', 'Nissan Sentra', 'Maroon Nissan Sentra inside the Rhino tint bay'),
  f150White: m(f150White, 'automotive', 'Ford F-150', 'White Ford F-150 inside the Rhino tint bay'),
  rogue: m(rogue, 'automotive', 'Nissan Rogue', 'Gray Nissan Rogue inside the Rhino tint bay'),
  silveradoHd: m(silveradoHd, 'automotive', 'Chevy Silverado HD', 'Blue lifted Chevy Silverado HD inside the Rhino tint bay'),
  a5: m(a5, 'automotive', 'Audi A5 Sportback', 'White Audi A5 Sportback inside the Rhino tint bay'),
  escalade: m(escalade, 'automotive', 'Cadillac Escalade', 'White Cadillac Escalade inside the Rhino tint bay'),
  silveradoDark: m(silveradoDark, 'automotive', 'Chevy Silverado', 'Dark blue Chevy Silverado inside the Rhino tint bay'),

  brickHome: m(brickHome, 'residential', 'Brick home, front windows', 'Single-story brick and siding home behind a large oak tree'),
  stuccoWindow: m(stuccoWindow, 'residential', 'Double window on a stucco wall', 'Tinted double window on a white stucco wall reflecting the yard'),
  brickWindow: m(brickWindow, 'residential', 'Window in a brick wall', 'Tinted single window set in red brick, reflecting trees'),
  frontEntry: m(frontEntry, 'residential', 'Front entry and side window', 'Front porch with a blue door and a tinted side window'),
  sunroom: m(sunroom, 'residential', 'Sunroom window wall', 'Full sunroom wall of tinted windows on a brick home'),
  brickRanch: m(brickRanch, 'residential', 'Brick ranch home', 'Brick ranch-style home with shuttered front windows'),
  transomReflective: m(transomReflective, 'residential', 'Tall window with transom', 'Tall gridded window with a transom in a brick wall, reflective film mirroring the backyard'),
  sidingWindow: m(sidingWindow, 'residential', 'Double-hung window', 'Tinted double-hung window with grids on pink lap siding'),
  frenchDoors: m(frenchDoors, 'residential', 'Arched French doors', 'Cream French doors under a brick arch with reflective film on the glass panels'),
  porchTransom: m(porchTransom, 'residential', 'Porch window with transom', 'Tall gridded porch window with transom in brick, film reflecting the driveway and a work trailer'),

  officeStorefront: m(officeStorefront, 'commercial', 'Office storefront glass', 'Single-story office building entrance with a wall of tinted storefront glass'),
} satisfies Record<string, MediaAsset>;

export type MediaKey = keyof typeof MEDIA;

export type GalleryFilter = 'automotive' | 'residential' | 'commercial' | 'shop-team';

export interface GalleryItem {
  key: MediaKey;
  filter: GalleryFilter;
}

const filterFor = (key: MediaKey): GalleryFilter => {
  const c = MEDIA[key].category;
  if (c === 'shop' || c === 'team' || c === 'brand') return 'shop-team';
  return c;
};

// Order matters: it is the order visitors see on the gallery page.
const GALLERY_ORDER: MediaKey[] = [
  'heroSierra', 'transomReflective', 'silveradoHd', 'frenchDoors', 'tesla', 'storefront',
  'a5', 'sunroom', 'escalade', 'officeStorefront', 'bmw', 'porchTransom', 'f250', 'family',
  'sequoia', 'stuccoWindow', 'grandCherokee', 'sidingWindow', 'elantra', 'santaFe', 'brickWindow',
  'sierraWhite', 'frontEntry', 'tacoma', 'civic', 'shopLot', 'rogue', 'brickHome', 'f150White',
  'durango', 'forester', 'accord', 'silveradoBlack', 'sentra', 'f150TwoTone', 'f150Gray',
  'silveradoDark', 'brickRanch', 'heroSilverado',
];

export const GALLERY: GalleryItem[] = GALLERY_ORDER.map((key) => ({ key, filter: filterFor(key) }));
