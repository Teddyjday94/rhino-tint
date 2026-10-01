export type QuoteService = 'automotive' | 'residential' | 'commercial';

export interface QuoteValues {
  service: QuoteService | '';
  name: string;
  phone: string;
  email: string;
  contactMethod: 'call' | 'text' | 'email';
  // automotive
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  coverage: string;
  // property
  propertyType: string;
  windowCount: string;
  goals: string[];
  message: string;
}

export type QuoteErrors = Partial<Record<keyof QuoteValues, string>>;

export const EMPTY_QUOTE: QuoteValues = {
  service: '',
  name: '',
  phone: '',
  email: '',
  contactMethod: 'call',
  vehicleYear: '',
  vehicleMake: '',
  vehicleModel: '',
  coverage: '',
  propertyType: '',
  windowCount: '',
  goals: [],
  message: '',
};

export const COVERAGE_OPTIONS = [
  'Full vehicle (sides and back)',
  'Front two windows to match',
  'Windshield strip',
  'Full windshield',
  'Remove old tint and redo',
  'Not sure yet',
];

export const PROPERTY_GOALS = ['Heat', 'Glare', 'Privacy', 'Fading furniture or floors', 'Look from the street'];

const digits = (s: string) => s.replace(/\D/g, '');

export function validateQuote(v: QuoteValues): QuoteErrors {
  const e: QuoteErrors = {};
  if (!v.service) e.service = 'Pick what you want tinted.';
  if (v.name.trim().length < 2) e.name = 'Add your name so we know who to ask for.';

  const phone = digits(v.phone);
  if (!(phone.length === 10 || (phone.length === 11 && phone.startsWith('1')))) {
    e.phone = 'Enter a 10-digit phone number.';
  }
  if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) {
    e.email = 'That email doesn’t look right.';
  }
  if (v.contactMethod === 'email' && !v.email.trim()) {
    e.email = 'Add an email if you want us to reply that way.';
  }

  if (v.service === 'automotive') {
    const year = Number(v.vehicleYear);
    const max = new Date().getFullYear() + 2;
    if (!/^\d{4}$/.test(v.vehicleYear) || year < 1950 || year > max) e.vehicleYear = 'Enter the 4-digit year.';
    if (!v.vehicleMake.trim()) e.vehicleMake = 'Add the make.';
    if (!v.vehicleModel.trim()) e.vehicleModel = 'Add the model.';
  }

  if (v.service === 'residential' || v.service === 'commercial') {
    if (!v.propertyType) e.propertyType = 'Pick the type of building.';
    if (!v.windowCount) e.windowCount = 'A rough count is fine.';
  }
  return e;
}

/** Drops fields that don't apply to the chosen service so stale values never get sent. */
export function cleanQuote(v: QuoteValues): QuoteValues {
  if (v.service === 'automotive') {
    return { ...v, propertyType: '', windowCount: '', goals: [] };
  }
  return { ...v, vehicleYear: '', vehicleMake: '', vehicleModel: '', coverage: '' };
}

export function quoteSummary(v: QuoteValues): string {
  const lines = [
    `Service: ${v.service}`,
    `Name: ${v.name}`,
    `Phone: ${v.phone}`,
    `Email: ${v.email || 'not given'}`,
    `Best way to reach: ${v.contactMethod}`,
  ];
  if (v.service === 'automotive') {
    lines.push(`Vehicle: ${v.vehicleYear} ${v.vehicleMake} ${v.vehicleModel}`, `Coverage: ${v.coverage || 'not given'}`);
  } else {
    lines.push(
      `Property: ${v.propertyType}`,
      `Windows: ${v.windowCount}`,
      `Goals: ${v.goals.length ? v.goals.join(', ') : 'not given'}`,
    );
  }
  lines.push('', v.message || '(no message)');
  return lines.join('\n');
}
