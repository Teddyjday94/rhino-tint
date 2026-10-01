export function SectionHeading({ eyebrow, title, body, light = false }: { eyebrow: string; title: string; body?: string; light?: boolean }) {
  return <div className={`section-heading ${light ? "section-heading--light" : ""}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{body && <p className="section-copy">{body}</p>}</div>;
}
