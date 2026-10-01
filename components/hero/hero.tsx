import Image from "next/image";
import { MEDIA, type MediaKey } from "@/data/media";
import { ButtonLink } from "@/components/ui/button-link";
import { CallLink } from "@/components/ui/call-link";

export function Hero({ mediaKey = "heroTruck", eyebrow, title, body }: { mediaKey?: MediaKey; eyebrow: string; title: string; body: string }) {
  const media = MEDIA[mediaKey];
  return <section className="hero">
    <Image src={media.src} alt={media.alt} fill priority sizes="100vw" className="hero-image"/>
    <div className="hero-shade"/>
    <div className="hero-content">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{body}</p>
      <div className="hero-actions"><ButtonLink href="/gallery-contact#quote">Get a Quote</ButtonLink><CallLink/></div>
    </div>
  </section>;
}
