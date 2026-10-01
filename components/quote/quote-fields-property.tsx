export function QuoteFieldsProperty({ errors }: { errors: Record<string,string> }) {
  return <div className="form-grid form-grid--three">
    <label>Property type<select name="propertyType" defaultValue=""><option value="" disabled>Choose one</option><option>Home</option><option>Office</option><option>Retail</option><option>Other</option></select>{errors.propertyType && <span role="alert">{errors.propertyType}</span>}</label>
    <label>Approx. windows<input name="windowCount" inputMode="numeric"/>{errors.windowCount && <span role="alert">{errors.windowCount}</span>}</label>
    <label>Main goal<select name="goals" defaultValue=""><option value="" disabled>Choose one</option><option>Heat control</option><option>Glare control</option><option>Privacy</option><option>UV filtering</option><option>Multiple goals</option></select>{errors.goals && <span role="alert">{errors.goals}</span>}</label>
  </div>;
}
