---
version: 1
slug: "concepts-northline-index-html"
primary_target: "concepts/northline/index.html"
related_targets: ["concepts/northline/northline.css","concepts/northline/northline.js"]
---

# Surface brief — concepts/northline/index.html (Northline Dental, full concept site)

Scope: a complete one-page dental-practice site for Northline Dental, VINCERE's fictional dental
concept. Fifth reusable base in the internal template library ("one structure, many skins") and
the live target of "Open the full concept" for the Northline card on the home page. Visitor mode:
**Persuade**.

Audience and job: a patient who has been putting this off, on a phone, often with something that
hurts, who found the practice on Maps or a plan directory. Their questions, in order: can I get in
soon, do you take my insurance, will it hurt, what will it cost, where do I park. Action: Find a
time (request form with insurance). Secondary: Call, start the new-patient forms.

Proof and content: Northline is fictional; the dentist, plans, prices, and openings are
illustrative and the footer says so. Photography is Unsplash placeholders (verified URLs) of
rooms, never of mouths or instruments. No reviews, ratings, or "voted best": the page must not
fabricate proof.

Constraints: static HTML/CSS/vanilla JS, no build step, own stylesheet (no VINCERE tokens); Google
Fonts only; AA contrast at minimum and larger-than-usual body type (accessibility is one of the
card's four selling points); reduced motion; `noindex`; skins are token blocks on `[data-skin]`
and match the three skins in the home-page switcher (sky default, slate, warm); `?skin=` selects
one. The identity is inherited from the `.pv--northline` preview already in `index.html` /
`styles.css`: mist ground, deep teal-navy ink, one teal action, pill buttons (the nav pill filled
with ink), a tight semibold headline, three availability tiles.

## Direction contract

THESIS: A dental site that answers the two questions before the scroll, "can I get in soon" and
"do you take my insurance", and then spends the rest of the page taking the dread out: forms done
on the phone before the visit, comfort options named, prices for the common visits posted, a
written estimate promised before any treatment. It refuses the category default: a stock smile
hero, "we accept most insurance" with no list, a phone number as the only next step, and a PDF of
forms to print.

OWN-WORLD: Sky skin: mist ground (#EFF6F8 to #E3EEF3) with deep teal-navy ink (#10373F) and one
teal (#17798A) worn by the action, the availability dots, the insurance chips' check, and the
"in-network" text (a deeper #146A79 wherever teal is small running text). Atkinson Hyperlegible
Next throughout, 700 for headlines at -0.032em, 400 to 500 for everything read, body at 1.125rem
and never below 1rem; tabular numerals. Pills (999px) for every action, the nav pill filled with
ink; 12px corners on tiles, cards, and fields; 1px hairlines at 16% ink; flat surfaces, white
tiles at 72% over the mist, no shadows except the fixed mobile bar. Photography of light rooms
under a mist veil; generous spacing (section rhythm at the top of the clamp). Signature material:
the three availability tiles, each a real next opening computed from the schedule, and the
insurance strip under them. Removing the content you would still recognize: mist ground, one
teal pill, three white tiles with a teal dot, hyperlegible type at a generous size.

STORY: The visitor sees, in one viewport, the promise, that the practice is open and when it
answers the phone, three real openings this week, the plans it takes, and a teal "Find a time";
scrolls into what a visit costs without insurance, checks their plan, learns the forms take eight
minutes on the phone and that they can raise a hand to stop; meets the dentist and the room;
confirms hours and parking; and requests one of the three times with their plan already filled in,
from the fixed mobile bar or the form.

FIRST VIEWPORT: Sticky mist nav: "Northline Dental" wordmark (700, -0.02em) left, four links
(Services, Insurance, New patients, Visit), ink-filled pill "Book online" right. Hero fills most of
the viewport with the two-chair operatory photograph under a mist veil that becomes the ground at
the bottom. Bottom-left: H1 "Dentistry without the dread." in Atkinson 700 at clamp(2.75rem, 8vw,
6rem); under it the live status line ("● Open today until 5 pm · phones answered until 5:30") in
deep teal 500 sentence case, never a tracked-caps eyebrow; the sub line "Same-week appointments.
Most insurance accepted."; then "Find a time" (teal pill) and "Call (218) 555-0163" (outline).
Under the actions, the availability board: three white tiles ("Tomorrow · 8:10 am", "Thu ·
2:40 pm", "Fri · 9:00 am"), a teal dot on each, tapping one carries that day and time into the
form; under the tiles a one-line insurance strip: "In-network: Delta Dental · BCBS Minnesota ·
HealthPartners · Cigna · Aetna · MetLife" with "Don't see yours? Text us the card." On mobile a
fixed bottom bar carries Find a time / Call / Forms from the first paint.

FORM: Shaped directly as a precisely specified local base (no concept-seed roll): structure was
set by the user's confirmed answers (hero with tiles and insurance strip, services with
without-insurance prices for the common visits, insurance list, new patients with online forms
and comfort options, the practice, visit, request form with insurance, footer) and the Northline
identity already in code. Signature interaction: the availability tiles are computed from the
hours table and a fictional schedule and change with the clock; tapping a tile or "Start your
forms" prefills and scrolls to the form; the hero photo drifts 4% over 12s; sections rise 12px
once on scroll. Motion grammar: ease-out expo, 160–700 ms, one clock.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the
verdict, DESIGN.md, and every shipping raster carrying its provenance.
