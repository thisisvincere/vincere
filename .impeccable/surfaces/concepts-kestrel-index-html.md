---
version: 1
slug: "concepts-kestrel-index-html"
primary_target: "concepts/kestrel/index.html"
related_targets: ["concepts/kestrel/kestrel.css","concepts/kestrel/kestrel.js"]
---

# Surface brief — concepts/kestrel/index.html (Kestrel Plumbing & Heating, full concept site)

Scope: a complete one-page service-contractor site for Kestrel Plumbing & Heating, VINCERE's
fictional plumbing and heating concept. Third reusable base in the internal template library
("one structure, many skins") and the live target of "Open the full concept" for the Kestrel card
on the home page. Visitor mode: **Persuade**.

Audience and job: a homeowner standing in a flooded kitchen or a cold house, on a phone, who found
Kestrel on Google Maps and will decide within thirty seconds whether to call. Their questions, in
order: can I call right now, will someone come today, what does it cost, are you licensed and
insured, do you cover my street. Action: Call (tel:) and Text (sms:). Secondary: Request a quote
(form). There is nothing to read before tapping.

Proof and content: Kestrel is fictional; every fact, price, license number, and person is
illustrative and the footer says so. Photography is Unsplash placeholders (verified URLs) the
client replaces; the hero carries no photograph by decision (instant paint, the Call button is the
protagonist). No reviews, ratings, or badges walls: the page must not fabricate proof.

Constraints: static HTML/CSS/vanilla JS, no build step, own stylesheet (no VINCERE tokens); Google
Fonts only; AA contrast; reduced motion; `noindex`; skins are token blocks on `[data-skin]` and
match the three skins in the home-page switcher (safety default, navy, forest); `?skin=` selects
one. The identity is inherited from the `.pv--kestrel` preview already in `index.html` /
`styles.css`: warm off-white ground, near-black ink, one high-visibility yellow, uppercase heavy
wordmark with the trade in a lighter weight, 6px corners, a dotted price list. LocalBusiness
JSON-LD with hours and service area is part of the concept (the fourth selling point on the card).

## Direction contract

THESIS: A contractor site that behaves like a dispatcher picking up the phone: call and text are
the first two things on the screen, the license number and the price of the common jobs are
visible before any pitch, and there is nothing to read before tapping. It refuses the category
default: a slideshow of smiling vans, "call for a free estimate" with no prices, a wall of badges,
and a contact form as the only way in.

OWN-WORLD: Safety skin: warm off-white ground (#F6F5F0 to #ECEBE4) with near-black ink (#1C1F26)
and one high-visibility yellow (#FFC531) worn only as fill (the Call button, the emergency band,
the price-list dots, the mobile bar) with ink set on it, never as text on the light ground. Public
Sans throughout, 800 for headlines at tight tracking, 400 to 600 for everything read; tabular
numerals wherever a number sits. 6px corners on every control, 1px hairlines at 16% ink, flat
surfaces with no shadows except the fixed mobile bar. Signature material: the dispatch line, a
live "next truck" time computed from the hours and a fictional dispatch board, and the two
thumb-width actions under it. Removing the content you would still recognize: off-white ground,
one yellow block, black type, dotted price rows.

STORY: The visitor sees, in one viewport, that Kestrel is open now and when the next truck can
roll, a yellow "Call" and an outlined "Text" under their thumb, the license and insurance line, and
the price of the three most common jobs; scrolls into flat prices with the after-hours rate stated
plainly, learns that the quote arrives by text before a truck moves, confirms the service area and
hours; and calls, texts, or requests a quote with four fields, from the fixed mobile bar or the
form, without hunting for a number.

FIRST VIEWPORT: Sticky light nav: KESTREL wordmark (uppercase 800; "Plumbing & Heating" beside it
in 500 at 60% opacity) left, three links (Prices, Service area, About), yellow 6px "Call now"
button right. Hero on the plain ground, no photograph. Top-left: H1 "Same-day service. Upfront
pricing." in Public Sans 800 at clamp(3rem, 9vw, 6.5rem); under it the live dispatch line
("● Open now · next truck 2:15 pm · Fort Collins") in ink 600 sentence case, never a tracked-caps
eyebrow; one lede line; then two actions side by side: "Call (970) 555-0147" (yellow fill, ink
label) and "Text us" (ink outline); under them a hairline trust strip in one row: "Lic. #MP-00481
· Insured to $2M · Fort Collins + 25 miles"; then the three-row price list from the preview
(Drain cleaning $149 · Water heater install from $1,250 · Emergency call-out $189, 24/7) with
yellow dots and prices at the right edge. On mobile a fixed bottom bar carries Call / Text / Quote
from the first paint.

FORM: Shaped directly as a precisely specified local base (no concept-seed roll): structure was
set by the user's confirmed answers (hero with call/text and trust strip, emergency band, flat
prices with "from" only on installs, how a call goes, service area and hours, the company, quote
form, footer with JSON-LD) and the Kestrel identity already in code. Signature interaction: the
dispatch line's status and next-truck time are computed from the hours table and a fictional
dispatch board and change with the clock; Call and Text are fixed from first paint on mobile;
sections rise 12px once on scroll. Motion grammar: ease-out expo, 160–700 ms, one clock; no hero
drift because there is no hero photograph.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the
verdict, DESIGN.md, and every shipping raster carrying its provenance.
