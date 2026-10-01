# Rhino Window Tint Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and verify a custom four-page Rhino Window Tint marketing site using Rhino's real media, curated public reviews, supplied Facebook reels, adaptive quote UX, strong local SEO, and a responsive Rhino Hybrid visual system.

**Architecture:** Use a Next.js App Router application with TypeScript. Keep mutable business facts and content in typed data modules, render pages from reusable service, gallery, review, reel, and quote components, and isolate high-impact GSAP motion behind reusable client-side wrappers so static content remains accessible without JavaScript motion.

**Tech Stack:** Next.js App Router, React, TypeScript, GSAP + ScrollTrigger, Next/Image, CSS Modules plus global design tokens, Vitest, React Testing Library, Playwright, Vercel.

**Spec:** `docs/superpowers/specs/2026-10-01-rhino-window-tint-design.md`

## Global Constraints

- Four routes: `/`, `/automotive`, `/home-business`, `/gallery-contact`.
- Use Rhino's real supplied media. Do not replace core brand imagery with generic stock photography.
- Use the approved Rhino Hybrid visual direction: near-black/charcoal, Rhino red, white/gray typography, restrained metallic/glass effects, brighter architectural sections.
- Do not fabricate customer reviews, names, awards, warranty claims, years in business, film specifications, service areas, or product performance percentages.
- Copy must avoid emojis, generic AI-style filler, and unnecessary em dashes.
- Facebook content must lazy-load and provide a useful fallback instead of a blank iframe.
- Quote UI must work without private email credentials and may end in a polished local confirmation state.
- Respect `prefers-reduced-motion`; do not use scroll hijacking.
- Mobile layouts are first-class layouts, not scaled-down desktop layouts.
- No paid service, domain purchase, private API key, or client credential is required for this mockup.
- Centralize mutable public business facts such as phone, address, hours, rating, and review count.

## Review Focus

1. Facebook embeds blocked, slow, or unavailable: users must still see an intentional preview state and a working link to the original reel. Test in Task 4.
2. Reduced-motion users: all major content must remain visible and usable with motion disabled. Test in Tasks 3 and 11.
3. Quote form mode switching: stale automotive fields must not remain required after switching to property tint, and vice versa. Test in Task 5.
4. Media/data drift: every selected local media path must exist and every informative image must have a non-empty label/alt description. Test in Task 2.
5. Route and metadata consistency: each page must have one H1, unique title/description, valid canonical-ready metadata, and working navigation at direct-load URLs. Test in Tasks 10 and 11.

---

## File Structure

```text
app/
  layout.tsx
  page.tsx
  automotive/page.tsx
  home-business/page.tsx
  gallery-contact/page.tsx
  sitemap.ts
  robots.ts
  globals.css
components/
  brand/site-header.tsx
  brand/site-footer.tsx
  brand/mobile-cta.tsx
  hero/hero.tsx
  home/automotive-showcase.tsx
  home/architectural-transition.tsx
  home/meet-rhino.tsx
  home/recent-work.tsx
  automotive/automotive-benefits.tsx
  automotive/install-process.tsx
  property/property-benefits.tsx
  property/window-gallery.tsx
  gallery/gallery-filter.tsx
  reviews/review-strip.tsx
  reviews/review-wall.tsx
  reels/reel-showcase.tsx
  reels/facebook-reel.tsx
  quote/quote-form.tsx
  quote/quote-fields-automotive.tsx
  quote/quote-fields-property.tsx
  motion/reveal.tsx
  motion/parallax-media.tsx
  motion/tint-comparison.tsx
  ui/section-heading.tsx
  ui/call-link.tsx
  ui/button-link.tsx
data/
  business.ts
  services.ts
  media.ts
  reviews.ts
  reels.ts
  gallery.ts
lib/
  metadata.ts
  schema.ts
  quote-schema.ts
public/images/
  brand/
  hero/
  automotive/
  residential/
  commercial/
  shop/
  team/
  gallery/
tests/
  business-data.test.ts
  media-data.test.ts
  site-header.test.tsx
  reel-showcase.test.tsx
  quote-form.test.tsx
  home-page.test.tsx
  automotive-page.test.tsx
  home-business-page.test.tsx
  gallery-contact-page.test.tsx
  metadata.test.ts
  schema.test.ts
  e2e/site.spec.ts
vitest.config.ts
playwright.config.ts
```

---

### Task 1: Scaffold the application and test harness

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `eslint.config.mjs`
- Create: `vitest.config.ts`
- Create: `playwright.config.ts`
- Create: `tests/setup.ts`
- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Create: `app/globals.css`
- Create: `.gitignore`

**Interfaces:**
- Produces: a bootable Next.js App Router project with `npm run dev`, `npm run build`, `npm test`, and `npm run test:e2e` scripts.
- Produces: shared `RootLayout({ children }: { children: React.ReactNode })`.

- [ ] **Step 1: Write the initial smoke test**

Create `tests/app-smoke.test.tsx` that renders the initial home page and asserts a visible `Rhino Window Tint` heading or brand label.

- [ ] **Step 2: Run the test and verify it fails before the app exists**

Run: `npm test -- tests/app-smoke.test.tsx`

Expected: FAIL because the app modules or test environment are not present yet.

- [ ] **Step 3: Scaffold Next.js, TypeScript, Vitest, Testing Library, and Playwright**

Use App Router. Add dependencies for `next`, `react`, `react-dom`, `gsap`; dev dependencies for TypeScript, ESLint, Vitest, jsdom, Testing Library, and Playwright.

- [ ] **Step 4: Add the minimal root layout and placeholder home page**

The page only needs enough markup to satisfy the smoke test. Do not begin visual design yet.

- [ ] **Step 5: Run the test suite and production build**

Run: `npm test && npm run build`

Expected: PASS and successful Next.js production build.

- [ ] **Step 6: Commit**

```bash
git add package.json tsconfig.json next.config.ts eslint.config.mjs vitest.config.ts playwright.config.ts tests app .gitignore
git commit -m "chore: scaffold Rhino Tint site"
```

---

### Task 2: Ingest, classify, and validate Rhino media and business data

**Files:**
- Create: `data/business.ts`
- Create: `data/media.ts`
- Create: `data/gallery.ts`
- Create: `tests/business-data.test.ts`
- Create: `tests/media-data.test.ts`
- Populate: `public/images/brand/`
- Populate: `public/images/hero/`
- Populate: `public/images/automotive/`
- Populate: `public/images/residential/`
- Populate: `public/images/commercial/`
- Populate: `public/images/shop/`
- Populate: `public/images/team/`
- Populate: `public/images/gallery/`

**Interfaces:**
- Produces: `BUSINESS: BusinessInfo` with `name`, `phone`, `phoneHref`, `address`, `hours`, `rating`, `reviewCount`, and optional social/map URLs.
- Produces: `MEDIA: Record<MediaKey, MediaAsset>` where `MediaAsset = { src: string; alt: string; category: MediaCategory; width?: number; height?: number }`.
- Produces: `GALLERY_ITEMS: GalleryItem[]` where `GalleryItem = { id: string; mediaKey: MediaKey; category: 'automotive' | 'residential' | 'commercial' | 'shop-team'; caption: string }`.

- [ ] **Step 1: Write business-data tests**

Assert the approved phone, address, hours, rating, and review count are present exactly once in `BUSINESS`, and that `phoneHref` is `tel:+12252107353`.

- [ ] **Step 2: Write media integrity tests**

For every `MEDIA` entry, assert `src` starts with `/images/`, `alt.trim().length > 0` for informative imagery, and the referenced file exists under `public`. For every `GALLERY_ITEMS` entry, assert its `mediaKey` exists in `MEDIA` and its category is valid.

- [ ] **Step 3: Run tests and verify failure**

Run: `npm test -- tests/business-data.test.ts tests/media-data.test.ts`

Expected: FAIL because data modules and selected media are not present.

- [ ] **Step 4: Review the uploaded archive and separate uploads, select the strongest non-duplicate images, and copy them into descriptive public paths**

Use the supplied logo, family/shop image, automotive install imagery, and separately supplied residential/window photos. Avoid using photographs whose subject cannot be confidently labeled.

- [ ] **Step 5: Implement typed business, media, and gallery data**

Keep captions factual. Do not infer services from an image alone.

- [ ] **Step 6: Run the media and data tests**

Run: `npm test -- tests/business-data.test.ts tests/media-data.test.ts`

Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add data public/images tests/business-data.test.ts tests/media-data.test.ts
git commit -m "feat: add Rhino business data and media library"
```

---

### Task 3: Build the shared Rhino Hybrid design system and site shell

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`
- Create: `components/brand/site-header.tsx`
- Create: `components/brand/site-footer.tsx`
- Create: `components/brand/mobile-cta.tsx`
- Create: `components/ui/section-heading.tsx`
- Create: `components/ui/call-link.tsx`
- Create: `components/ui/button-link.tsx`
- Create: `components/motion/reveal.tsx`
- Create: `components/motion/parallax-media.tsx`
- Create: `tests/site-header.test.tsx`

**Interfaces:**
- Produces: `SiteHeader()`, `SiteFooter()`, `MobileCta()`, `SectionHeading(props)`, `ButtonLink(props)`, and `CallLink()`.
- Produces: `Reveal({ children, className? })` and `ParallaxMedia({ children, strength? })`, both rendering content normally when reduced motion is enabled.

- [ ] **Step 1: Write navigation and reduced-motion tests**

Assert desktop/mobile navigation exposes links for Home, Automotive, Home & Business, and Gallery & Contact; the call link uses `BUSINESS.phoneHref`; motion wrappers never hide children when `matchMedia('(prefers-reduced-motion: reduce)')` is true.

- [ ] **Step 2: Run tests and verify failure**

Run: `npm test -- tests/site-header.test.tsx`

Expected: FAIL because components do not exist.

- [ ] **Step 3: Define global design tokens and responsive foundations**

Implement Rhino red, charcoal/near-black surfaces, warm white/gray text, glass borders, spacing scale, type scale, focus styles, and architecture-light section tokens. Avoid a generic card-heavy system.

- [ ] **Step 4: Implement responsive header, footer, mobile CTA, and UI primitives**

Use the supplied Rhino brand asset without adding a decorative circle around it.

- [ ] **Step 5: Implement motion wrappers with reduced-motion fallbacks**

GSAP should be client-side only and optional to content comprehension.

- [ ] **Step 6: Run component tests and build**

Run: `npm test -- tests/site-header.test.tsx && npm run build`

Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add app components tests/site-header.test.tsx
git commit -m "feat: add Rhino Hybrid site shell"
```

---

### Task 4: Build real review and Facebook reel systems

**Files:**
- Create: `data/reviews.ts`
- Create: `data/reels.ts`
- Create: `components/reviews/review-strip.tsx`
- Create: `components/reviews/review-wall.tsx`
- Create: `components/reels/facebook-reel.tsx`
- Create: `components/reels/reel-showcase.tsx`
- Create: `tests/reel-showcase.test.tsx`

**Interfaces:**
- Produces: `REVIEWS: ReviewItem[]`, where each item includes `reviewerName`, `rating`, `excerpt`, `source: 'Google'`, and `sourceUrl`.
- Produces: `REELS: ReelItem[]` using the six approved Facebook reel URLs.
- Produces: `FacebookReel({ reel, active }: { reel: ReelItem; active: boolean })` and `ReelShowcase({ reels?: ReelItem[] })`.

- [ ] **Step 1: Gather a small representative set of real public Google review excerpts**

Record only verifiable public names, ratings, short excerpts, and source URLs. Keep excerpts concise and do not rewrite them into stronger claims.

- [ ] **Step 2: Write reel fallback tests**

Assert that before activation the component renders a preview/open-on-Facebook action rather than an iframe; after activation it renders the embed; when an embed error state is simulated it retains a visible fallback link.

- [ ] **Step 3: Run the test and verify failure**

Run: `npm test -- tests/reel-showcase.test.tsx`

Expected: FAIL because reel components do not exist.

- [ ] **Step 4: Implement centralized review and reel data**

Use all six supplied Facebook reel URLs. Keep review count/rating out of `reviews.ts`; overall rating/count continue to come from `BUSINESS`.

- [ ] **Step 5: Implement review strip/wall and lazy reel showcase**

Do not create six eager Facebook iframes. The featured reel may load on user intent or near-viewport observation; inactive reels remain lightweight previews.

- [ ] **Step 6: Run tests and build**

Run: `npm test -- tests/reel-showcase.test.tsx && npm run build`

Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add data/reviews.ts data/reels.ts components/reviews components/reels tests/reel-showcase.test.tsx
git commit -m "feat: add reviews and reel showcase"
```

---

### Task 5: Build the adaptive quote form

**Files:**
- Create: `lib/quote-schema.ts`
- Create: `components/quote/quote-form.tsx`
- Create: `components/quote/quote-fields-automotive.tsx`
- Create: `components/quote/quote-fields-property.tsx`
- Create: `tests/quote-form.test.tsx`

**Interfaces:**
- Produces: `QuoteServiceType = 'automotive' | 'residential' | 'commercial'`.
- Produces: `validateQuote(values: QuoteValues) -> QuoteValidationResult`.
- Produces: `QuoteForm({ initialService? }: { initialService?: QuoteServiceType })`.

- [ ] **Step 1: Write conditional rendering and validation tests**

Test that automotive selection reveals year/make/model and hides property-only fields; residential/commercial reveals property type/window count/goals and hides vehicle-only fields; switching modes clears irrelevant required-state errors; invalid email/phone produce inline accessible errors; valid mock submission renders confirmation without network credentials.

- [ ] **Step 2: Run tests and verify failure**

Run: `npm test -- tests/quote-form.test.tsx`

Expected: FAIL because quote modules do not exist.

- [ ] **Step 3: Implement quote types and validation**

Keep the schema dependency-light unless the implementation clearly benefits from a small validation library. No server-side delivery is required in this mockup.

- [ ] **Step 4: Implement adaptive form UI and polished local confirmation state**

Optional photo input may be present as UI, but must not claim the file has been delivered anywhere.

- [ ] **Step 5: Run quote tests**

Run: `npm test -- tests/quote-form.test.tsx`

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add lib/quote-schema.ts components/quote tests/quote-form.test.tsx
git commit -m "feat: add adaptive quote experience"
```

---

### Task 6: Build the Home page as the main guided sales experience

**Files:**
- Replace: `app/page.tsx`
- Create: `components/hero/hero.tsx`
- Create: `components/home/automotive-showcase.tsx`
- Create: `components/home/architectural-transition.tsx`
- Create: `components/home/meet-rhino.tsx`
- Create: `components/home/recent-work.tsx`
- Create: `components/motion/tint-comparison.tsx`
- Create: `tests/home-page.test.tsx`

**Interfaces:**
- Consumes: `BUSINESS`, `MEDIA`, `GALLERY_ITEMS`, `REVIEWS`, `REELS`, `QuoteForm`, and shared site shell components.
- Produces: complete Home route with one H1 and the approved section order.

- [ ] **Step 1: Write home-page structure tests**

Assert one H1, Get a Quote and Call Rhino actions, reputation strip using centralized business data, automotive showcase, tint comparison, home/business preview, Meet Rhino section, reviews, reels, recent work, and final quote section.

- [ ] **Step 2: Run the test and verify failure**

Run: `npm test -- tests/home-page.test.tsx`

Expected: FAIL because the full page is not implemented.

- [ ] **Step 3: Implement the hero and reputation section**

Use a real Rhino image with intentional desktop/mobile crops and minimal overlaying text.

- [ ] **Step 4: Implement automotive showcase and tint comparison**

The comparison communicates untreated versus tinted glass conceptually and must not present unverified numeric performance claims.

- [ ] **Step 5: Implement architectural transition, Meet Rhino, review, reel, recent work, and quote sections**

Use the supplied family/shop photo specifically as trust-building content.

- [ ] **Step 6: Run page tests and build**

Run: `npm test -- tests/home-page.test.tsx && npm run build`

Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add app/page.tsx components/hero components/home components/motion/tint-comparison.tsx tests/home-page.test.tsx
git commit -m "feat: build Rhino home page"
```

---

### Task 7: Build the Automotive Tint page

**Files:**
- Create: `app/automotive/page.tsx`
- Create: `components/automotive/automotive-benefits.tsx`
- Create: `components/automotive/install-process.tsx`
- Create: `tests/automotive-page.test.tsx`

**Interfaces:**
- Consumes: automotive `MEDIA`/`GALLERY_ITEMS`, `ReelShowcase`, and `QuoteForm({ initialService: 'automotive' })`.
- Produces: complete `/automotive` route.

- [ ] **Step 1: Write automotive-page tests**

Assert one H1, automotive hero, comfort/glare/privacy/appearance content, conservative UV language, install process, automotive gallery, reels, FAQs, and automotive-prefilled quote CTA. Assert no unsupported percentage/warranty placeholder copy is present.

- [ ] **Step 2: Run the test and verify failure**

Run: `npm test -- tests/automotive-page.test.tsx`

Expected: FAIL.

- [ ] **Step 3: Implement page sections using real automotive media**

Avoid repetitive equal-sized card grids. Use staggered/editorial compositions with clear captions only where image subject is known.

- [ ] **Step 4: Add accessible FAQ markup and automotive quote entry point**

- [ ] **Step 5: Run tests and build**

Run: `npm test -- tests/automotive-page.test.tsx && npm run build`

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add app/automotive components/automotive tests/automotive-page.test.tsx
git commit -m "feat: build automotive tint page"
```

---

### Task 8: Build the Home & Business page

**Files:**
- Create: `app/home-business/page.tsx`
- Create: `components/property/property-benefits.tsx`
- Create: `components/property/window-gallery.tsx`
- Create: `tests/home-business-page.test.tsx`

**Interfaces:**
- Consumes: residential/commercial `MEDIA` and `GALLERY_ITEMS`, shared motion, and `QuoteForm` initialized to residential or service selection.
- Produces: complete `/home-business` route.

- [ ] **Step 1: Write page structure tests**

Assert one H1, residential benefits, commercial benefits, heat/glare/privacy/UV sections, real property imagery, gallery, and property quote CTA. Assert no unverified numeric heat-rejection or UV percentage appears.

- [ ] **Step 2: Run the test and verify failure**

Run: `npm test -- tests/home-business-page.test.tsx`

Expected: FAIL.

- [ ] **Step 3: Implement the brighter architectural visual treatment**

Use the separately supplied residential door/window images as major content, including window-like masks or vertical layouts that still work when motion is disabled.

- [ ] **Step 4: Implement property benefits, gallery, and quote CTA**

- [ ] **Step 5: Run tests and build**

Run: `npm test -- tests/home-business-page.test.tsx && npm run build`

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add app/home-business components/property tests/home-business-page.test.tsx
git commit -m "feat: build home and business tint page"
```

---

### Task 9: Build Gallery & Contact with filtering and final conversion flow

**Files:**
- Create: `app/gallery-contact/page.tsx`
- Create: `components/gallery/gallery-filter.tsx`
- Create: `tests/gallery-contact-page.test.tsx`

**Interfaces:**
- Produces: `GalleryFilter({ items }: { items: GalleryItem[] })` with category values `all | automotive | residential | commercial | shop-team`.
- Consumes: `GALLERY_ITEMS`, `ReviewWall`, `ReelShowcase`, `QuoteForm`, and `BUSINESS`.

- [ ] **Step 1: Write gallery/contact tests**

Assert the `all` view renders the complete curated gallery; each filter shows only matching categories; reviews and reels are present; business phone/address/hours come from `BUSINESS`; quote form is present.

- [ ] **Step 2: Run tests and verify failure**

Run: `npm test -- tests/gallery-contact-page.test.tsx`

Expected: FAIL.

- [ ] **Step 3: Implement accessible filter controls and responsive gallery**

Use buttons with `aria-pressed` or equivalent state. Do not rely on hover for discovery.

- [ ] **Step 4: Implement contact/reviews/reels/quote sections**

Use a map link or lightweight map treatment rather than introducing a heavy third-party script unless clearly justified.

- [ ] **Step 5: Run tests and build**

Run: `npm test -- tests/gallery-contact-page.test.tsx && npm run build`

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add app/gallery-contact components/gallery tests/gallery-contact-page.test.tsx
git commit -m "feat: build gallery and contact page"
```

---

### Task 10: Add page metadata, structured data, sitemap, and robots

**Files:**
- Create: `lib/metadata.ts`
- Create: `lib/schema.ts`
- Create: `app/sitemap.ts`
- Create: `app/robots.ts`
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`
- Modify: `app/automotive/page.tsx`
- Modify: `app/home-business/page.tsx`
- Modify: `app/gallery-contact/page.tsx`
- Create: `tests/metadata.test.ts`
- Create: `tests/schema.test.ts`

**Interfaces:**
- Produces: `buildPageMetadata(page: PageMetadataInput): Metadata`.
- Produces: `buildLocalBusinessSchema(): Record<string, unknown>` using centralized `BUSINESS` values.

- [ ] **Step 1: Write metadata tests**

Assert each route has a unique title and description, titles include Rhino Window Tint naturally, and canonical URL handling can be configured from one base URL value rather than being hard-coded throughout pages.

- [ ] **Step 2: Write structured-data tests**

Assert LocalBusiness schema contains Rhino's name, phone, postal address, and opening hours from `BUSINESS`. Do not assert invented service areas or awards.

- [ ] **Step 3: Run tests and verify failure**

Run: `npm test -- tests/metadata.test.ts tests/schema.test.ts`

Expected: FAIL.

- [ ] **Step 4: Implement metadata helpers and per-page metadata**

Use natural titles/descriptions for Home, Automotive, Home & Business, and Gallery & Contact.

- [ ] **Step 5: Implement JSON-LD, sitemap, and robots**

Make production base URL configurable so deployment previews do not falsely claim the future custom domain as canonical.

- [ ] **Step 6: Run tests and build**

Run: `npm test -- tests/metadata.test.ts tests/schema.test.ts && npm run build`

Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add lib app tests/metadata.test.ts tests/schema.test.ts
git commit -m "feat: add local SEO and structured data"
```

---

### Task 11: Complete motion, responsive polish, accessibility, and end-to-end verification

**Files:**
- Modify: relevant page/component CSS and motion components
- Create: `tests/e2e/site.spec.ts`
- Modify: `playwright.config.ts`

**Interfaces:**
- Consumes all site routes and shared components.
- Produces verified browser behavior across representative desktop/mobile viewports.

- [ ] **Step 1: Write end-to-end route and navigation tests**

For `/`, `/automotive`, `/home-business`, and `/gallery-contact`, direct-load each route, assert exactly one visible H1, verify header navigation, Call Rhino action, and no horizontal page overflow at mobile viewport.

- [ ] **Step 2: Add end-to-end quote and gallery interactions**

Verify service switching, required fields, successful mock confirmation, and gallery filter state.

- [ ] **Step 3: Add reduced-motion and reel fallback checks**

Launch a reduced-motion context and verify core hero/page content remains visible; verify reel previews remain actionable without requiring an iframe to load.

- [ ] **Step 4: Run end-to-end tests before final polish and record failures**

Run: `npm run test:e2e`

Expected: failing tests identify remaining behavior/responsive issues rather than configuration errors.

- [ ] **Step 5: Apply final GSAP and CSS polish**

Add masked reveals, light parallax, section progression, and tint comparison motion only where they improve hierarchy. Keep animations interruptible and avoid scroll hijacking.

- [ ] **Step 6: Perform responsive pass at small phone, modern phone, large phone, tablet portrait, tablet landscape, laptop, and wide desktop widths**

Correct clipping, text wrapping, gallery crops, navigation, sticky controls, and tap-target issues.

- [ ] **Step 7: Perform accessibility/content pass**

Check keyboard navigation, visible focus, labels, contrast, alt text, reduced motion, one H1 per page, accurate image labels, no placeholders, no emojis, no unsupported claims, and no unnecessary em dashes in marketing copy.

- [ ] **Step 8: Run the complete verification suite**

Run: `npm test && npm run test:e2e && npm run build`

Expected: all tests PASS and production build succeeds.

- [ ] **Step 9: Commit**

```bash
git add .
git commit -m "test: verify Rhino Tint site across routes and devices"
```

---

## Final Verification Checklist

Before considering the implementation complete:

- [ ] All four routes direct-load successfully.
- [ ] All selected media files resolve and are correctly labeled.
- [ ] The family/shop image is used as trust-building content, not mislabeled as a service job.
- [ ] Residential images appear in architectural contexts rather than automotive sections.
- [ ] All six supplied Facebook reels are represented in centralized data.
- [ ] Reel experience remains useful if Facebook fails to embed.
- [ ] Curated reviews are real, short, attributable, and not rewritten into stronger claims.
- [ ] Business details are sourced from `BUSINESS`, not duplicated across components.
- [ ] Quote mode switching clears irrelevant validation requirements.
- [ ] Mobile pages have no horizontal overflow or desktop-only hover dependency.
- [ ] Reduced-motion mode remains visually complete.
- [ ] No private keys, paid services, or client credentials are introduced.
- [ ] `npm test` passes.
- [ ] `npm run test:e2e` passes.
- [ ] `npm run build` passes.
- [ ] Final repository state contains the spec, implementation plan, application code, curated public assets, tests, and no temporary extraction artifacts.
