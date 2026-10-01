// Every fact that can change lives here. Update this file, not the pages.
// Last checked against the Google Business listing on 2026-10-01.

export const BUSINESS = {
  name: 'Rhino Window Tint',
  shortName: 'Rhino Tint',
  phone: '(225) 210-7353',
  phoneHref: 'tel:+12252107353',
  smsHref: 'sms:+12252107353',
  address: {
    street: '44014 LA-431',
    city: 'St. Amant',
    region: 'LA',
    postalCode: '70774',
    country: 'US',
  },
  geo: { lat: 30.2850391, lng: -90.8700608 },
  hours: [
    { days: 'Monday to Saturday', open: '8:00 AM', close: '5:00 PM' },
    { days: 'Sunday', open: null, close: null },
  ],
  // schema.org openingHours format
  openingHours: ['Mo-Sa 08:00-17:00'],
  google: {
    rating: 5.0,
    reviewCount: 361,
    checkedOn: '2026-10-01',
    mapsUrl:
      'https://www.google.com/maps/place/Rhino+Window+Tint/@30.2850391,-90.8700608,17z/data=!4m6!3m5!1s0x8626bb47e51a3639:0xd63b02315dd350ac!8m2!3d30.2850391!4d-90.8700608!16s%2Fg%2F11qbrbl9xs',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Rhino+Window+Tint+44014+LA-431+St+Amant+LA+70774',
    reviewSearchQuery: 'Rhino Window Tint 44014 LA-431 St Amant LA 70774',
  },
  filmDealer: 'Geoshield',
  parish: 'Ascension Parish',
} as const;

export const ADDRESS_LINE = `${BUSINESS.address.street}, ${BUSINESS.address.city}, ${BUSINESS.address.region} ${BUSINESS.address.postalCode}`;

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/automotive', label: 'Automotive' },
  { href: '/home-business', label: 'Home & Business' },
  { href: '/gallery-contact', label: 'Gallery & Contact' },
] as const;
