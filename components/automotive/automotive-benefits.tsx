import { AUTOMOTIVE_BENEFITS } from "@/data/services";
export function AutomotiveBenefits() {
  return <div className="benefit-list">{AUTOMOTIVE_BENEFITS.map(([title,body],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div>;
}
