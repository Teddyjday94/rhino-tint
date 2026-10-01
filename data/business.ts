export type BusinessInfo = {
  name: string;
  phone: string;
  phoneHref: string;
  address: string;
  cityLine: string;
  hours: string[];
  rating: number;
  reviewCount: number;
  mapUrl: string;
};

export const BUSINESS: BusinessInfo = {
  name: "Rhino Window Tint",
  phone: "(225) 210-7353",
  phoneHref: "tel:+12252107353",
  address: "44014 LA-431",
  cityLine: "St. Amant, LA 70774",
  hours: ["Monday-Saturday: 8:00 AM-5:00 PM", "Sunday: Closed"],
  rating: 5.0,
  reviewCount: 327,
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Rhino+Window+Tint+44014+LA-431+St+Amant+LA+70774",
};
