import { BUSINESS } from "@/data/business";
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org", "@type": "AutomotiveBusiness", name: BUSINESS.name,
    telephone: "+1-225-210-7353", address: { "@type": "PostalAddress", streetAddress: BUSINESS.address, addressLocality: "St. Amant", addressRegion: "LA", postalCode: "70774", addressCountry: "US" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: BUSINESS.rating, reviewCount: BUSINESS.reviewCount },
    openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "08:00", closes: "17:00" }]
  };
}
