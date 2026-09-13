---
version: 1
slug: "concepts-sasso-index-html"
primary_target: "concepts/sasso/index.html"
related_targets: ["concepts/sasso/sasso.css","concepts/sasso/sasso.js"]
---

# Surface brief — concepts/sasso/index.html (Sasso, full concept site)

Scope: a complete one-page restaurant site for Sasso, VINCERE's fictional trattoria concept. It is
the first reusable base in VINCERE's internal template library ("one structure, many skins") and the
live target of "Open the full concept" on the home page. Visitor mode: **Persuade**.

Audience and job: a diner who found Sasso on Google Maps, on a phone, deciding within a minute
whether to come tonight. Their questions, in order: is it open, where is it and can I park, what is
the food like, can I get a table. Action: Reserve a table (form, phone). Secondary: Directions, Call.

Proof and content: Sasso is fictional; every fact on the page is illustrative and the footer says so.
Photography is sourced from Unsplash (verified URLs) as placeholders the client replaces. No reviews,
ratings, or press are shown: the page must not fabricate proof, even for a fictional business.

Constraints: static HTML/CSS/vanilla JS, no build step, own stylesheet (no VINCERE tokens); Google
Fonts only; AA contrast; reduced motion; `noindex` (a fictional restaurant must not be indexed);
skins are token blocks on `[data-skin]` and match the three skins in the home-page switcher
(editorial default, daylight, verde); `?skin=` selects one.

## Direction contract

THESIS: A trattoria site that behaves like a good host: it answers the four questions a Maps visitor
has before they ask, in that order, and keeps the reservation within thumb reach on every screen.
It refuses the category default: a hero slideshow, a PDF menu, a "Welcome to our restaurant"
paragraph, and a footer where the hours hide.

OWN-WORLD: Warm near-black ground (#14100E) with cream ink (#EDE3D6) and one bronze action
(#C2A87E). Display in Bodoni Moda italic (Parma, Italy's own face) at large sizes; Hanken Grotesk
for everything read. Tracked uppercase bronze labels (0.12em) as the only secondary voice. Full-bleed
photography under a warm dark gradient; hairlines at 18% cream; pills for the action, 3px corners on
everything else. Removing the content you would still recognize: black ground, bronze pill,
italic serif, cream hairlines.

STORY: The visitor sees, in one viewport, that Sasso is open tonight, where it is, and a bronze
"Reserve a table"; scrolls into a menu that reads like a menu; confirms hours and parking; and
reserves, from the fixed mobile bar or the form, without ever looking for a phone number.

FIRST VIEWPORT: Sticky dark nav: SASSO tracked wordmark left, three links (Menu, Story, Visit),
bronze pill right. Hero fills the viewport with the plated-dish photograph under a bottom-heavy
gradient. Bottom-left: the H1 "Slow food, quietly done." in Bodoni italic at clamp(3rem, 9vw, 7rem);
directly under it a live status line ("● Open tonight until 10 pm · 412 Wickenden St") in bronze
sentence case, never a tracked-caps eyebrow above the headline; one lede line; then "Reserve a
table" (bronze pill) and "See this week's menu" (text link). On mobile a fixed bottom bar
carries Reserve / Call / Directions from the first paint.

FORM: Shaped directly as a precisely specified local base (no concept-seed roll): structure was
set by the user's own brief (hours, address/map, phone, menu, CTA) and the Sasso identity already
in code. Signature interaction: the status line is computed from the hours data and changes as
the day does; the hero photo drifts 4% over 12s; sections rise 12px once on scroll. Motion grammar:
ease-out expo, 400–800 ms, one clock.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the
verdict, DESIGN.md, and every shipping raster carrying its provenance.
