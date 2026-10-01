"use client";
import { FormEvent, useState } from "react";
import { validateQuote, type QuoteServiceType, type QuoteValues } from "@/lib/quote-schema";
import { QuoteFieldsAutomotive } from "./quote-fields-automotive";
import { QuoteFieldsProperty } from "./quote-fields-property";

export function QuoteForm({ initialService = "automotive" }: { initialService?: QuoteServiceType }) {
  const [service,setService] = useState<QuoteServiceType>(initialService);
  const [errors,setErrors] = useState<Record<string,string>>({});
  const [sent,setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const values: QuoteValues = {
      service, name: String(fd.get("name")||""), phone:String(fd.get("phone")||""), email:String(fd.get("email")||""),
      preferredContact: String(fd.get("preferredContact")||"text") as QuoteValues["preferredContact"],
      vehicleYear:String(fd.get("vehicleYear")||""),vehicleMake:String(fd.get("vehicleMake")||""),vehicleModel:String(fd.get("vehicleModel")||""),tintInterest:String(fd.get("tintInterest")||""),
      propertyType:String(fd.get("propertyType")||""),windowCount:String(fd.get("windowCount")||""),goals:String(fd.get("goals")||""),message:String(fd.get("message")||"")
    };
    const result = validateQuote(values);
    setErrors(result.errors);
    if (result.valid) setSent(true);
  }
  if (sent) return <div className="quote-success" role="status"><p className="eyebrow">Quote request ready</p><h3>Your quote details are ready.</h3><p>Call Rhino now for immediate help, or use the form again for another project.</p><button onClick={()=>setSent(false)}>Start another request</button></div>;
  return <form className="quote-form" onSubmit={submit} noValidate>
    <fieldset><legend>What needs tint?</legend><div className="service-switch">
      {(["automotive","residential","commercial"] as QuoteServiceType[]).map(type=><label key={type}><input type="radio" name="service" value={type} checked={service===type} onChange={()=>{setService(type);setErrors({})}}/><span>{type==="automotive"?"Vehicle":type==="residential"?"Home":"Business"}</span></label>)}
    </div></fieldset>
    <div className="form-grid form-grid--three">
      <label>Name<input name="name" autoComplete="name"/>{errors.name && <span role="alert">{errors.name}</span>}</label>
      <label>Phone<input name="phone" autoComplete="tel" inputMode="tel"/>{errors.phone && <span role="alert">{errors.phone}</span>}</label>
      <label>Email<input name="email" autoComplete="email" inputMode="email"/>{errors.email && <span role="alert">{errors.email}</span>}</label>
    </div>
    {service==="automotive" ? <QuoteFieldsAutomotive errors={errors}/> : <QuoteFieldsProperty errors={errors}/>}
    <div className="form-grid form-grid--two">
      <label>Preferred contact<select name="preferredContact" defaultValue="text"><option value="text">Text</option><option value="phone">Phone</option><option value="email">Email</option></select></label>
      <label>Photo (optional)<input type="file" name="photo" accept="image/*"/><small>Photo upload will activate when lead delivery is connected.</small></label>
      <label className="span-all">Anything else?<textarea name="message" rows={4}/></label>
    </div>
    <button className="submit-button" type="submit">Prepare Quote Request</button>
  </form>;
}
