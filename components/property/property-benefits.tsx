import { PROPERTY_BENEFITS } from "@/data/services";
export function PropertyBenefits() { return <div className="benefit-list benefit-list--light">{PROPERTY_BENEFITS.map(([t,b],i)=><article key={t}><span>{String(i+1).padStart(2,"0")}</span><h3>{t}</h3><p>{b}</p></article>)}</div>; }
