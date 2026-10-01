import { NextResponse } from 'next/server';
import { cleanQuote, quoteSummary, validateQuote, type QuoteValues } from '@/lib/quote';

// Sends quote requests by email through Resend when RESEND_API_KEY and QUOTE_TO_EMAIL are set.
// Without them, preview and local builds log the request so the form can be demoed, but production
// returns an error so the visitor is told to call instead of seeing a thank-you for a lost request.
export async function POST(req: Request) {
  let body: QuoteValues;
  try {
    body = (await req.json()) as QuoteValues;
  } catch {
    return NextResponse.json({ ok: false, error: 'Bad request' }, { status: 400 });
  }

  const values = cleanQuote({ ...body, goals: Array.isArray(body.goals) ? body.goals : [] });
  const errors = validateQuote(values);
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL;
  if (!key || !to) {
    console.info('[quote] email delivery not configured\n' + quoteSummary(values));
    if (process.env.VERCEL_ENV === 'production') {
      return NextResponse.json({ ok: false, error: 'Email delivery not configured' }, { status: 503 });
    }
    return NextResponse.json({ ok: true, delivered: false });
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.QUOTE_FROM_EMAIL || 'Rhino Website <onboarding@resend.dev>',
      to: [to],
      reply_to: values.email || undefined,
      subject: `Quote request: ${values.service} from ${values.name}`,
      text: quoteSummary(values),
    }),
  });

  if (!res.ok) {
    console.error('[quote] resend failed', res.status, await res.text());
    return NextResponse.json({ ok: false }, { status: 502 });
  }
  return NextResponse.json({ ok: true, delivered: true });
}
