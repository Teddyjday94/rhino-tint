# Rhino Window Tint Website Design Specification

Date: 2026-10-01
Repository: Teddyjday94/rhino-tint
Status: Approved design, pending implementation plan

## 1. Project Goal

Build a custom four-page marketing website for Rhino Window Tint that feels specific to the business rather than a stock tint template. The site should use Rhino's real photography, logo, supplied Facebook reels, public business information, and curated real customer reviews to present the shop as a strong local choice for automotive, residential, and commercial window tinting.

The first release is a client-facing mockup that can be deployed to Vercel. It should already feel production-ready from a design, performance, SEO, accessibility, and mobile standpoint. Lead delivery and live Google review syncing can be connected after client approval.

## 2. Success Criteria

The build succeeds when:

- The site contains four polished pages with clear navigation and distinct content goals.
- The visual direction feels custom to Rhino and uses Rhino's actual imagery instead of generic stock assets.
- The design works equally well for automotive customers and residential or commercial customers.
- Mobile layouts are purpose-built rather than simple desktop reductions.
- The supplied six Facebook reels are integrated in a polished, lazy-loaded media experience.
- A curated set of real public customer reviews is shown without fabricating names, copy, ratings, or claims.
- The quote experience changes fields based on automotive versus property tint requests.
- The site is technically ready for Vercel, local SEO, Search Console, analytics, live review integration, and lead delivery later.
- Copy avoids generic AI-style marketing language, emojis, unnecessary em dashes, invented awards, unsupported statistics, and template-like filler.

## 3. Current Public Business Information

Use the following current public details unless the client later supplies newer information:

- Business name: Rhino Window Tint
- Address: 44014 LA-431, St. Amant, LA 70774
- Phone: 225-210-7353
- Hours: Monday through Saturday, 8:00 AM to 5:00 PM
- Sunday: Closed
- Public Google rating at design time: 5.0
- Public Google review count at design time: 327

Because ratings and review counts change, centralize them in a business data file so they can be updated without editing multiple components.

## 4. Approved Visual Direction

### Rhino Hybrid

The approved direction combines a darker automotive performance aesthetic with a cleaner architectural treatment for residential and commercial work.

Core visual language:

- Near-black and charcoal foundations
- Rhino red as the primary accent
- Crisp white and soft gray typography
- Restrained metallic and glass effects
- Large authentic photography
- Irregular editorial image layouts rather than repeated card grids
- Strong but controlled scroll motion
- Brightened architectural sections for residential and commercial content
- No decorative circles around the Rhino logo unless the source logo itself includes one

The site should feel locally grounded, confident, technical, and premium without becoming overly corporate or luxury-fashion styled.

## 5. Information Architecture

### Page 1: Home `/`

Primary job: establish credibility quickly and route visitors into the right service path.

Sections:

1. Full-screen hero using strong Rhino photography
2. Primary calls to action: Get a Quote and Call Rhino
3. Reputation strip with rating, review count, location, and key service categories
4. Automotive showcase with staggered real project imagery
5. Interactive tint benefit section
6. Transition from automotive styling into home and business tint
7. Residential and commercial preview using supplied property imagery
8. Meet Rhino section using the family/shop photograph
9. Curated customer review wall
10. Facebook reel showcase
11. Recent work gallery
12. Final contact and quote section with business details

### Page 2: Automotive Tint `/automotive`

Primary job: convert drivers seeking automotive tint.

Sections:

1. Automotive hero
2. Why tint section focused on comfort, glare, privacy, appearance, and UV protection only where supportable
3. Tint option explainer without invented film specifications or unsupported product claims
4. Installation process
5. Large automotive project gallery
6. Relevant Facebook reels
7. Automotive FAQs
8. Quote CTA

### Page 3: Home & Business `/home-business`

Primary job: sell residential and commercial film as a serious service, not an afterthought.

Sections:

1. Architectural hero using supplied residential photography
2. Home window film benefits
3. Commercial window film benefits
4. Heat, glare, privacy, and UV protection explanations written conservatively
5. Window-shaped image compositions using real jobs
6. Project gallery
7. Property estimate CTA

### Page 4: Gallery & Contact `/gallery-contact`

Primary job: provide proof of work and an easy final conversion path.

Sections:

1. Filterable project gallery
2. Automotive, residential, commercial, shop/team filters
3. Video reel area
4. Curated reviews
5. Business details and hours
6. Map or map link section
7. Adaptive quote form
8. Direct phone CTA

## 6. Homepage Interaction Design

The homepage should feel like a guided sales experience instead of a stack of generic sections.

### Hero

- Large real Rhino image with strong focal crop
- Dark gradient only where needed for text readability
- Rhino logo in the navigation or hero lockup
- Short local headline, not inflated brand language
- Get a Quote primary action
- Call Rhino secondary action
- Subtle depth or tint-glass motion on capable devices

### Automotive to Architectural Transition

The site should visually transition from dark automotive presentation into a brighter architectural environment. This creates a natural change in mood while showing that Rhino serves more than vehicle owners.

### Interactive Tint Visual

Create a visual comparison that communicates the idea of untreated versus tinted glass. It may use scroll progress or drag interaction. It must remain understandable without animation and must not imply a precise heat rejection percentage unless Rhino provides verified product data.

### Meet Rhino

Use the supplied family/shop photograph as a trust-building section. The copy should emphasize a local, real-shop presence without inventing company history or personal biography that has not been supplied.

## 7. Media Strategy

The uploaded archive contains 167 image files plus the root folder entry. The website should not display every image.

During implementation, assets should be reviewed and categorized into:

- Brand
- Hero candidates
- Automotive
- Residential
- Commercial
- Shop
- Team
- Gallery support

Prominent placements should favor high-resolution originals, clean framing, strong subject clarity, and visual variety.

Near-duplicates should be excluded from the visible experience.

Selected public filenames should be renamed to descriptive, maintainable names such as:

- `rhino-shop-team.jpg`
- `residential-front-door-tint.jpg`
- `residential-brick-window-tint.jpg`
- `automotive-truck-side-window.jpg`

Suggested public structure:

```text
public/
  images/
    brand/
    hero/
    automotive/
    residential/
    commercial/
    shop/
    team/
    gallery/
```

The five separately uploaded architectural photos belong primarily on the Home & Business page and supporting homepage sections. The family/shop photo belongs primarily in Meet Rhino and may also appear on the contact page if needed.

## 8. Facebook Reel Integration

The six supplied Facebook reel embeds should be represented as centralized site data rather than duplicated iframe markup.

Reel URLs:

- https://www.facebook.com/reel/1535001428431755/
- https://www.facebook.com/reel/1106391468941547/
- https://www.facebook.com/reel/1658033342606390/
- https://www.facebook.com/reel/2561948400915459/
- https://www.facebook.com/reel/1103224149083449/
- https://www.facebook.com/reel/1646891020128191/

Desktop treatment:

- One featured reel area
- Smaller selectable previews
- Lazy-load actual Facebook embed only when the section approaches the viewport or a reel is selected

Mobile treatment:

- Swipeable vertical reel cards or compact selectable previews
- Avoid loading all six players on initial page load

Fallback behavior:

- If Facebook blocks or delays an embed, keep a designed preview state with a link to the original reel
- Never show a large empty iframe box as the final experience

## 9. Reviews Strategy

Approved approach: curated real reviews for the client mockup, with the component architecture ready for a future live Google Places source.

Rules:

- Do not fabricate review text
- Do not fabricate customer names
- Do not alter star ratings
- Do not claim a review count that is no longer current when updating the site
- Use public review wording only within reasonable excerpt lengths
- Attribute the review source clearly as Google when applicable
- Use reviewer names only when they are publicly available from the source being used

Implementation model:

```text
Public review source
  -> curated review data
  -> review components
  -> future Google Places adapter
```

The first mockup should include a representative mix of themes such as workmanship, speed, service, professionalism, and value rather than multiple near-identical reviews.

## 10. Quote Experience

Build one reusable adaptive quote component.

### Automotive flow

Fields:

- Name
- Phone
- Email
- Preferred contact method
- Service type
- Vehicle year
- Vehicle make
- Vehicle model
- Tint interest or notes
- Message
- Optional photo upload UI if practical for the mockup

### Residential or Commercial flow

Fields:

- Name
- Phone
- Email
- Preferred contact method
- Property type
- Approximate number of windows
- Main goal or goals
- Message
- Optional photo upload UI if practical for the mockup

Behavior:

- Relevant fields appear only after service selection
- Clear inline validation
- Accessible error messaging
- No private mail credentials required for the client mockup
- Mockup submission can end in a polished confirmation state

Future integration targets may include Resend, business email, CRM, or another lead destination.

## 11. Technical Architecture

Recommended stack:

- Next.js with App Router
- TypeScript
- React
- CSS Modules or a focused global/component styling system
- GSAP with ScrollTrigger for selected high-impact motion
- Next.js Image for responsive image optimization
- Vercel deployment target

Suggested route structure:

```text
app/
  page.tsx
  automotive/page.tsx
  home-business/page.tsx
  gallery-contact/page.tsx
```

Suggested shared modules:

```text
components/
  navigation/
  footer/
  hero/
  gallery/
  reviews/
  reels/
  quote-form/
  motion/
  seo/

data/
  business.ts
  reviews.ts
  reels.ts
  gallery.ts
  services.ts
```

The exact file structure may be adjusted during implementation if a simpler boundary is clearer.

## 12. Motion System

Use animation to reinforce hierarchy, not to animate every element.

GSAP and ScrollTrigger may be used for:

- Hero entrance
- Masked image reveals
- Light parallax
- Architectural window reveals
- Gallery progression
- Scroll-based tint comparison
- Section transition effects

CSS should handle smaller interactions such as:

- Buttons
- Navigation hover states
- Gallery hover states
- Mobile menu transitions
- Focus states

Motion requirements:

- Respect `prefers-reduced-motion`
- Avoid scroll hijacking
- Avoid long blocking intro animations
- Keep text readable during motion
- Keep interaction responsive on lower-powered mobile devices

## 13. Mobile Design

Mobile is a dedicated layout target.

Requirements:

- Compact branded header
- Large touch targets
- Mobile-first quote form spacing
- Strong image crops chosen specifically for narrow screens
- Swipe-friendly gallery or reel controls
- No desktop-only hover dependency
- Sticky Call and Get Quote controls only where they do not obscure important content
- Lazy-loaded media below the fold
- No oversized parallax or animation that causes scroll jank

The supplied vertical residential imagery should be used intentionally on mobile rather than cropped into wide desktop ratios.

## 14. SEO and Local Search

Each page needs unique metadata tied to its purpose.

Include:

- Unique page titles
- Unique meta descriptions
- Proper H1 through H3 structure
- LocalBusiness structured data
- Service schema where accurate and useful
- Descriptive image alt text
- Open Graph metadata
- Sitemap
- Robots file
- Canonical URL support once the production domain exists
- Strong internal linking between service pages
- Location and service-area language that reads naturally
- Search Console readiness
- Analytics readiness

Do not keyword-stuff copy or invent service areas that Rhino has not confirmed.

## 15. Performance

Performance goals:

- Prioritize hero media only
- Lazy-load below-the-fold media
- Do not ship the complete 167-image library to a visitor
- Set image dimensions to avoid layout shift
- Use responsive image sizes
- Load Facebook content on demand
- Keep GSAP scope controlled
- Avoid unnecessary third-party scripts
- Keep fonts limited and optimized

Target a strong Lighthouse experience on mobile and desktop, with particular attention to LCP, CLS, and interaction responsiveness.

## 16. Accessibility

Requirements:

- Semantic landmarks and headings
- Keyboard-accessible navigation and interactive controls
- Visible focus states
- Accessible form labels and validation
- Meaningful alt text for informative imagery
- Empty alt text for purely decorative imagery
- Sufficient contrast
- Reduced-motion support
- Proper button and link semantics
- No information conveyed only through animation or color

## 17. Content Rules

Copy should sound like a real local shop.

Avoid:

- Emojis
- Unnecessary em dashes
- Generic phrases such as "where quality meets excellence"
- Fake awards
- Invented years in business
- Unsupported product performance percentages
- Unsupported warranty claims
- Fake testimonials
- Artificially inflated location coverage
- Repetitive SEO filler

Prefer:

- Short direct sentences
- Concrete service language
- Local references only when verified
- Real customer proof
- Real project imagery
- Clear calls to action

## 18. Data and Claim Safety

Public business data can change. Centralize all mutable facts in a single business data module.

Claims about heat rejection, UV protection, warranties, film brands, tint percentages, or installation certifications must not be added unless Rhino supplies verified product information or the claim is clearly supported by a reliable source.

Do not infer services from photographs alone.

## 19. Testing Plan

Before push or deployment, verify:

### Functional

- All four routes load directly
- Navigation works on desktop and mobile
- Quote form conditional fields work correctly
- Validation states are understandable
- Phone links work
- External reel fallbacks work
- Gallery filters work
- Review components render correctly

### Responsive

Test representative widths including:

- Small iPhone
- Modern iPhone
- Large phone
- Tablet portrait
- Tablet landscape
- Laptop
- Wide desktop

### Performance

- Confirm lazy loading below the fold
- Confirm no mass loading of all gallery originals
- Check layout shift
- Check hero image sizing and priority
- Confirm Facebook players do not load eagerly

### Accessibility

- Keyboard navigation pass
- Focus visibility pass
- Reduced-motion pass
- Form-label pass
- Contrast check

### Content

- Verify image labels match what is actually pictured
- Verify automotive images are not mislabeled as residential or commercial
- Verify business details against current public information
- Verify review text is real and correctly attributed
- Search final copy for unwanted placeholder language, emojis, and unnecessary em dashes

## 20. Deployment and Repository Strategy

The existing `rhino-tint` repository is currently empty, so implementation will establish the project structure on the `main` branch.

The first implementation should:

1. Scaffold the application
2. Add the design system and shared layout
3. Organize selected media
4. Build reusable components
5. Build all four pages
6. Add motion and responsive behavior
7. Add curated reviews and reel integration
8. Add the adaptive quote experience
9. Add SEO and structured data
10. Run functional, responsive, performance, and accessibility verification
11. Commit the complete build to the repository

No paid service, domain purchase, private API key, or client credential is required for the mockup.

## 21. Deferred Until Client Approval

The following are intentionally deferred unless requested earlier:

- Live Google Places review syncing
- Production email delivery
- CRM integration
- Analytics account connection
- Search Console ownership verification
- Production domain configuration
- Client-specific film brand data and performance claims
- Appointment scheduling integration

The site architecture should make these additions straightforward without requiring a visual rebuild.
