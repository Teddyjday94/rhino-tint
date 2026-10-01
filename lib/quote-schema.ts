export type QuoteServiceType = "automotive" | "residential" | "commercial";
export type QuoteValues = {
  service: QuoteServiceType; name: string; phone: string; email: string; preferredContact: "phone" | "text" | "email";
  vehicleYear?: string; vehicleMake?: string; vehicleModel?: string; tintInterest?: string;
  propertyType?: string; windowCount?: string; goals?: string; message?: string;
};
export type QuoteValidationResult = { valid: boolean; errors: Record<string,string> };
export function validateQuote(values: QuoteValues): QuoteValidationResult {
  const errors: Record<string,string> = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!/^\+?[\d\s().-]{10,}$/.test(values.phone)) errors.phone = "Enter a valid phone number.";
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Enter a valid email address.";
  if (values.service === "automotive") {
    if (!values.vehicleYear?.trim()) errors.vehicleYear = "Enter the vehicle year.";
    if (!values.vehicleMake?.trim()) errors.vehicleMake = "Enter the vehicle make.";
    if (!values.vehicleModel?.trim()) errors.vehicleModel = "Enter the vehicle model.";
  } else {
    if (!values.propertyType?.trim()) errors.propertyType = "Choose a property type.";
    if (!values.windowCount?.trim()) errors.windowCount = "Estimate the number of windows.";
    if (!values.goals?.trim()) errors.goals = "Tell us what you want the film to improve.";
  }
  return { valid: Object.keys(errors).length === 0, errors };
}
