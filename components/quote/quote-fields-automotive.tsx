export function QuoteFieldsAutomotive({ errors }: { errors: Record<string,string> }) {
  return <div className="form-grid form-grid--three">
    <label>Year<input name="vehicleYear" inputMode="numeric"/>{errors.vehicleYear && <span role="alert">{errors.vehicleYear}</span>}</label>
    <label>Make<input name="vehicleMake"/>{errors.vehicleMake && <span role="alert">{errors.vehicleMake}</span>}</label>
    <label>Model<input name="vehicleModel"/>{errors.vehicleModel && <span role="alert">{errors.vehicleModel}</span>}</label>
    <label className="span-all">What are you looking for?<textarea name="tintInterest" rows={3} placeholder="Example: front two windows, full vehicle, windshield strip"/></label>
  </div>;
}
