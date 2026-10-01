import { BUSINESS } from '@/data/business';
import { getReviewFeed } from '@/lib/google-reviews';

function Stars({ n }: { n: number }) {
  const full = Math.round(n);
  return (
    <span className="stars" aria-label={`${n} out of 5 stars`}>
      {'★'.repeat(full)}
      {'☆'.repeat(5 - full)}
    </span>
  );
}

export async function ReviewWall({ limit = 6 }: { limit?: number }) {
  const feed = await getReviewFeed();
  const reviews = feed.reviews.slice(0, limit);

  return (
    <>
      <div className="reviews">
        {reviews.map((r) => (
          <figure className="review" key={r.author + r.text.slice(0, 20)}>
            <Stars n={r.rating} />
            <blockquote>
              <p style={{ margin: 0 }}>
                {r.text}
                {r.truncated ? ' …' : ''}
              </p>
            </blockquote>
            <footer>
              {r.photoUrl && (
                // Google profile photos: plain img so we don't proxy them
                // eslint-disable-next-line @next/next/no-img-element
                <img src={r.photoUrl} alt="" width={36} height={36} loading="lazy" referrerPolicy="no-referrer" />
              )}
              <div>
                <cite>
                  {r.authorUrl ? (
                    <a href={r.authorUrl} target="_blank" rel="noopener nofollow">
                      {r.author}
                    </a>
                  ) : (
                    r.author
                  )}
                </cite>
                <span className="src">
                  Google review{r.when ? ` · ${r.when}` : ''}
                </span>
              </div>
            </footer>
          </figure>
        ))}
      </div>
      <div className="review-more">
        <span className="g-badge">
          <b>{feed.rating.toFixed(1)}</b>
          <span>
            <Stars n={feed.rating} />
            <br />
            {feed.count} reviews on Google
          </span>
        </span>
        <a className="btn btn-ghost" href={BUSINESS.google.mapsUrl} target="_blank" rel="noopener">
          Read them all on Google
        </a>
      </div>
    </>
  );
}

/** Rating line for the reputation strip, using live numbers when available. */
export async function GoogleRating() {
  const feed = await getReviewFeed();
  return (
    <>
      <strong>
        {feed.rating.toFixed(1)} <span className="stars" style={{ fontSize: '0.6em' }} aria-hidden="true">★★★★★</span>
      </strong>
      <span>{feed.count} Google reviews</span>
    </>
  );
}
