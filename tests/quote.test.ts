import { describe, expect, it } from 'vitest';
import { EMPTY_QUOTE, cleanQuote, validateQuote, type QuoteValues } from '@/lib/quote';

const base: QuoteValues = { ...EMPTY_QUOTE, name: 'Pat Doe', phone: '(225) 555-0134' };

describe('validateQuote', () => {
  it('requires a service', () => {
    expect(validateQuote(base).service).toBeDefined();
  });

  it('requires vehicle fields only for automotive', () => {
    const auto = validateQuote({ ...base, service: 'automotive' });
    expect(auto.vehicleYear).toBeDefined();
    expect(auto.vehicleMake).toBeDefined();
    expect(auto.propertyType).toBeUndefined();

    const home = validateQuote({ ...base, service: 'residential' });
    expect(home.vehicleYear).toBeUndefined();
    expect(home.propertyType).toBeDefined();
    expect(home.windowCount).toBeDefined();
  });

  it('does not keep vehicle errors after switching to a property job', () => {
    const v: QuoteValues = { ...base, service: 'commercial', vehicleYear: 'abc', propertyType: 'Office', windowCount: '1 to 3' };
    expect(validateQuote(v)).toEqual({});
  });

  it('rejects bad phones and emails', () => {
    const e = validateQuote({ ...base, service: 'residential', propertyType: 'House', windowCount: '1 to 3', phone: '555', email: 'nope' });
    expect(e.phone).toBeDefined();
    expect(e.email).toBeDefined();
  });

  it('requires email when email is the contact method', () => {
    const e = validateQuote({ ...base, service: 'residential', propertyType: 'House', windowCount: '1 to 3', contactMethod: 'email' });
    expect(e.email).toBeDefined();
  });

  it('accepts a complete automotive request', () => {
    const v: QuoteValues = { ...base, service: 'automotive', vehicleYear: '2024', vehicleMake: 'Chevy', vehicleModel: 'Silverado' };
    expect(validateQuote(v)).toEqual({});
  });
});

describe('cleanQuote', () => {
  it('drops fields from the other mode', () => {
    const v = cleanQuote({ ...base, service: 'residential', vehicleMake: 'Ford', propertyType: 'House' });
    expect(v.vehicleMake).toBe('');
    expect(v.propertyType).toBe('House');
  });
});
