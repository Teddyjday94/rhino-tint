export type ReviewItem = { reviewerName: string; rating: number; excerpt: string; source: "Google"; sourceUrl: string };
const GOOGLE_URL = "https://www.google.com/maps/search/?api=1&query=Rhino+Window+Tint+St+Amant+LA";
export const REVIEWS: ReviewItem[] = [
  { reviewerName: "Google reviewer", rating: 5, excerpt: "Good price, fast work, quality work, friendly employees.", source: "Google", sourceUrl: GOOGLE_URL },
  { reviewerName: "Google reviewer", rating: 5, excerpt: "Customer service and professionalism in addition to a flawless application.", source: "Google", sourceUrl: GOOGLE_URL },
  { reviewerName: "Google reviewer", rating: 5, excerpt: "No water marks, no haziness. Crystal clear right from the start.", source: "Google", sourceUrl: GOOGLE_URL },
  { reviewerName: "Google reviewer", rating: 5, excerpt: "Same day installs, couldn't be happier with the service.", source: "Google", sourceUrl: GOOGLE_URL }
];
