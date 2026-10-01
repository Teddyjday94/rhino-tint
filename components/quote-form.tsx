'use client';

import { useId, useRef, useState } from 'react';
import { BUSINESS } from '@/data/business';
import {
  COVERAGE_OPTIONS,
  EMPTY_QUOTE,
  PROPERTY_GOALS,
  cleanQuote,
  validateQuote,
  type QuoteErrors,
  type QuoteService,
  type QuoteValues,
} from '@/lib/quote';

const SERVICES: { value: QuoteService; label: string; hint: string }[] = [
  { value: 'automotive', label: 'Vehicle', hint: 'Car, truck, SUV' },
  { value: 'residential', label: 'Home', hint: 'House windows, doors' },
  { value: 'commercial', label: 'Business', hint: 'Storefront, office' },
];

export function QuoteForm({ initialService }: { initialService?: QuoteService }) {
  const uid = useId();
  const [v, setV] = useState<QuoteValues>({ ...EMPTY_QUOTE, service: initialService ?? '' });
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'failed'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const set = <K extends keyof QuoteValues>(key: K, value: QuoteValues[K]) => {
    setV((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const switchService = (s: QuoteService) => {
    setV((prev) => ({ ...prev, service: s }));
    // errors for the other mode's fields no longer apply
    setErrors((e) => ({ name: e.name, phone: e.phone, email: e.email }));
  };

  const toggleGoal = (g: string) =>
    set('goals', v.goals.includes(g) ? v.goals.filter((x) => x !== g) : [...v.goals, g]);

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const found = validateQuote(v);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"], [data-err="service"] input');
      first?.focus();
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cleanQuote(v)),
      });
      setStatus(res.ok ? 'done' : 'failed');
    } catch {
      setStatus('failed');
    }
  }

  const id = (name: string) => `${uid}-${name}`;
  const errProps = (name: keyof QuoteValues) =>
    errors[name]
      ? { 'aria-invalid': true as const, 'aria-describedby': id(`${name}-err`) }
      : { 'aria-invalid': false as const };
  const Err = ({ name }: { name: keyof QuoteValues }) =>
    errors[name] ? (
      <span className="err" id={id(`${name}-err`)}>
        {errors[name]}
      </span>
    ) : null;

  if (status === 'done') {
    return (
      <div className="quote" role="status" aria-live="polite">
        <div className="done">
          <p className="eyebrow">Request received</p>
          <h3>Thanks, {v.name.split(' ')[0]}.</h3>
          <p>
            We’ll reach out by {v.contactMethod === 'email' ? 'email' : v.contactMethod === 'text' ? 'text' : 'phone'} during shop
            hours, Monday to Saturday, 8 to 5.
          </p>
          <p>
            Need an answer today? Call <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>.
          </p>
          <button type="button" className="btn btn-ghost" onClick={() => { setV({ ...EMPTY_QUOTE, service: initialService ?? '' }); setStatus('idle'); }}>
            Send another
          </button>
        </div>
      </div>
    );
  }

  const isAuto = v.service === 'automotive';
  const isProperty = v.service === 'residential' || v.service === 'commercial';

  return (
    <form className="quote" ref={formRef} onSubmit={onSubmit} noValidate aria-label="Quote request">
      {status === 'failed' && (
        <p className="form-error" role="alert">
          That didn’t go through. Try again, or call us at <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>.
        </p>
      )}

      <fieldset data-err="service" aria-describedby={errors.service ? id('service-err') : undefined}>
        <legend>What are we tinting?</legend>
        <div className="svc">
          {SERVICES.map((s) => (
            <label key={s.value}>
              <input
                type="radio"
                name={id('service')}
                value={s.value}
                checked={v.service === s.value}
                onChange={() => switchService(s.value)}
              />
              <span>{s.label}</span>
              <small>{s.hint}</small>
            </label>
          ))}
        </div>
        <Err name="service" />
      </fieldset>

      {isAuto && (
        <fieldset>
          <legend>The vehicle</legend>
          <div className="fields three">
            <div className="field">
              <label htmlFor={id('year')}>Year</label>
              <input id={id('year')} inputMode="numeric" maxLength={4} autoComplete="off" value={v.vehicleYear} onChange={(e) => set('vehicleYear', e.target.value.replace(/\D/g, ''))} {...errProps('vehicleYear')} />
              <Err name="vehicleYear" />
            </div>
            <div className="field">
              <label htmlFor={id('make')}>Make</label>
              <input id={id('make')} placeholder="Chevy" value={v.vehicleMake} onChange={(e) => set('vehicleMake', e.target.value)} {...errProps('vehicleMake')} />
              <Err name="vehicleMake" />
            </div>
            <div className="field">
              <label htmlFor={id('model')}>Model</label>
              <input id={id('model')} placeholder="Silverado" value={v.vehicleModel} onChange={(e) => set('vehicleModel', e.target.value)} {...errProps('vehicleModel')} />
              <Err name="vehicleModel" />
            </div>
          </div>
          <div className="field" style={{ marginTop: 16 }}>
            <label htmlFor={id('coverage')}>
              What do you want done? <span className="opt">(optional)</span>
            </label>
            <select id={id('coverage')} value={v.coverage} onChange={(e) => set('coverage', e.target.value)}>
              <option value="">Choose one</option>
              {COVERAGE_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
        </fieldset>
      )}

      {isProperty && (
        <fieldset>
          <legend>The building</legend>
          <div className="fields two">
            <div className="field">
              <label htmlFor={id('ptype')}>Type</label>
              <select id={id('ptype')} value={v.propertyType} onChange={(e) => set('propertyType', e.target.value)} {...errProps('propertyType')}>
                <option value="">Choose one</option>
                {(v.service === 'residential'
                  ? ['House', 'Townhome or condo', 'Sunroom or porch', 'Other']
                  : ['Storefront', 'Office', 'Restaurant', 'Warehouse or shop', 'Other']
                ).map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
              <Err name="propertyType" />
            </div>
            <div className="field">
              <label htmlFor={id('wcount')}>About how many windows?</label>
              <select id={id('wcount')} value={v.windowCount} onChange={(e) => set('windowCount', e.target.value)} {...errProps('windowCount')}>
                <option value="">Choose one</option>
                {['1 to 3', '4 to 10', '11 to 25', 'More than 25', 'Not sure'].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
              <Err name="windowCount" />
            </div>
          </div>
          <div className="field" style={{ marginTop: 16 }}>
            <span className="lbl" id={id('goals')}>
              What’s bugging you? <span className="opt">(pick any)</span>
            </span>
            <div className="chips" role="group" aria-labelledby={id('goals')}>
              {PROPERTY_GOALS.map((g) => (
                <label key={g}>
                  <input type="checkbox" checked={v.goals.includes(g)} onChange={() => toggleGoal(g)} />
                  {g}
                </label>
              ))}
            </div>
          </div>
        </fieldset>
      )}

      <fieldset>
        <legend>How do we reach you?</legend>
        <div className="fields two">
          <div className="field">
            <label htmlFor={id('name')}>Name</label>
            <input id={id('name')} autoComplete="name" value={v.name} onChange={(e) => set('name', e.target.value)} {...errProps('name')} />
            <Err name="name" />
          </div>
          <div className="field">
            <label htmlFor={id('phone')}>Phone</label>
            <input id={id('phone')} type="tel" autoComplete="tel" inputMode="tel" value={v.phone} onChange={(e) => set('phone', e.target.value)} {...errProps('phone')} />
            <Err name="phone" />
          </div>
          <div className="field">
            <label htmlFor={id('email')}>
              Email <span className="opt">{v.contactMethod === 'email' ? '' : '(optional)'}</span>
            </label>
            <input id={id('email')} type="email" autoComplete="email" value={v.email} onChange={(e) => set('email', e.target.value)} {...errProps('email')} />
            <Err name="email" />
          </div>
          <div className="field">
            <label htmlFor={id('method')}>Best way to reach you</label>
            <select id={id('method')} value={v.contactMethod} onChange={(e) => set('contactMethod', e.target.value as QuoteValues['contactMethod'])}>
              <option value="call">Phone call</option>
              <option value="text">Text</option>
              <option value="email">Email</option>
            </select>
          </div>
        </div>
        <div className="field" style={{ marginTop: 16 }}>
          <label htmlFor={id('msg')}>
            Anything else? <span className="opt">(optional)</span>
          </label>
          <textarea
            id={id('msg')}
            value={v.message}
            onChange={(e) => set('message', e.target.value)}
            placeholder={isAuto ? 'Shade you’re thinking about, old tint to remove, when you want to come in…' : 'Which rooms or sides of the building bother you most…'}
          />
        </div>
      </fieldset>

      <div className="form-foot">
        <button className="btn" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send my request'}
        </button>
        <p>
          Or call <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>
        </p>
      </div>
    </form>
  );
}
