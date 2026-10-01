import { REVIEWS } from "@/data/reviews";
export function ReviewWall() {
  return <div className="review-wall">
    {REVIEWS.map((review,i) => <a key={i} className="review-quote" href={review.sourceUrl} target="_blank" rel="noreferrer">
      <span className="stars" aria-hidden="true">★★★★★</span><blockquote>“{review.excerpt}”</blockquote><span>{review.reviewerName} · {review.source}</span>
    </a>)}
  </div>;
}
