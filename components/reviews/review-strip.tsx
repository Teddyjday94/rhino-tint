import { BUSINESS } from "@/data/business";
export function ReviewStrip() {
  return <div className="review-strip" aria-label="Google review summary">
    <strong>{BUSINESS.rating.toFixed(1)}</strong><span className="stars" aria-label="5 out of 5 stars">★★★★★</span><span>{BUSINESS.reviewCount} Google reviews</span><span>St. Amant, Louisiana</span>
  </div>;
}
