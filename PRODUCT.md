# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Owners and decision-makers of small and growing businesses in the United States — restaurants,
barber shops, dental practices, automotive services and similar local businesses — who know their
current web presence looks dated or templated and want it to look significantly more professional.
They are not technical. They evaluate the company from a phone as often as from a desktop, and they
decide whether to make contact within the first minute of reading.

## Product Purpose

VINCERE is a technology company that designs and builds websites and digital products for growing
businesses. The website exists to generate qualified project inquiries: a visitor should understand
what VINCERE does, believe it could make their business look better online, and start a project
through the form or by email. Success is a sent inquiry.

## Positioning

"Digital products that move businesses forward." VINCERE is positioned as a technology company that
happens to start with websites — never as a freelancer, template shop, marketing agency, or IT
consultancy. The brand must be able to expand into custom software, SaaS, automation, web
applications, and internal tools without a rebrand. It is deliberately small and focused: the people
who design a project are the people who build it.

## Operating Context

Single-page marketing site, static HTML/CSS/vanilla JS, no build step. Copy is American English.
Company is based in Brazil and serves the US; Brazil is not emphasized and no physical location,
US office, address, or phone number exists or may be shown. Contact happens only through the site
form (no backend yet; falls back to a prefilled email) and hello@thisisvincere.com. Instagram: @_thisisvincere.
Domain: thisisvincere.com (no www — that subdomain isn't configured and doesn't resolve). Pricing is quoted per project after a conversation; no fixed
or starting prices are published.

## Capabilities and Constraints

- Current primary service: website design and development. Secondary: landing pages. Custom digital
  products are offered selectively and must be described honestly, not as a mature operation.
- Sections (approved, keep content and copy in a restyle): navigation, hero, credibility, what we
  build, why VINCERE, selected concepts, process, about, FAQ, contact form, footer.
- The six portfolio pieces (Sasso, Halston & Co., Northline Dental, Apex Auto, Auburn & Ash,
  Kestrel Plumbing & Heating) are self-initiated concepts and must always be labeled as such,
  never as client work. The public site shows one concept per segment, never a catalog of
  variants; variety is shown through the detail panel's skin switcher (one structure, several
  token blocks). Full concept sites under `concepts/` are the internal template library: fictional
  businesses, labeled as such, `noindex`, never in the sitemap.
- Contact form fields: name, business name, email, website (optional), what do you need, project
  description. Submit label: "Start a project".
- Performance and accessibility are product requirements, not upgrades: semantic HTML, keyboard
  navigation, visible focus, AA contrast, reduced-motion support, no heavy libraries.

## Brand Commitments

- Name: VINCERE (Latin, "to win"). Tagline: "Digital products that move businesses forward."
- Logo: the "Ascendente" wordmark — a drawn V whose right arm rises past the cap line, followed by
  INCERE in Archivo 800 wide. Monochrome only (black on light, white on dark). Source files in
  `brand/04-ascendente/`; alternative "Amêndoa" (almond in the V, a nod to the founder's surname)
  kept in `brand/01-amendoa/`.
- Voice: confident, modern, clear, minimal, human. No buzzwords ("innovative", "cutting-edge",
  "leverage", "seamless", "empower", "revolutionary"). Short sentences, American English.
- Primary CTA: "Start a project". Secondary: "View our work".
- Standing visual preference (chosen in the 2026-09-11 direction round): the category standard —
  the bright agency page — executed at the craft level of smultron.software (warmth, composition),
  Linear and Stripe (precision). Convention is the commitment, not a fallback.

## Evidence on Hand

- Approved copy for every section, in `index.html`.
- Six concept projects rendered as HTML/CSS interfaces (not screenshots of real sites); Sasso also
  exists as a full page in `concepts/sasso/` with verified Unsplash placeholder photography.
- Logo files (SVG with embedded font, PNG, symbol, tiles) in `brand/`.
- **Absent, and must not be fabricated:** clients, client logos, testimonials, reviews, ratings,
  project counts, revenue, years in business, team size or photos, awards, certifications,
  partnerships, case-study results, offices, addresses, phone numbers.

## Product Principles

1. Credibility comes from the quality of the work on screen and from candor, never from invented proof.
2. Websites today, software tomorrow: every surface must leave room for the company to grow into
   products without a rebrand.
3. One clear next action per screen; the path to "Start a project" is never more than one tap away.
4. Mobile is a first-class layout, designed intentionally rather than shrunk.
5. Fast, accessible, and honest by default.

## Accessibility & Inclusion

WCAG AA as a baseline: 4.5:1 for body text, visible focus states, keyboard-operable navigation,
labeled form controls with described errors, `prefers-reduced-motion` respected.
