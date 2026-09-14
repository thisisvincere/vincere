---
version: 1
slug: "concepts-apex-index-html"
primary_target: "concepts/apex/index.html"
related_targets: ["concepts/apex/apex.css","concepts/apex/apex.js"]
---

# Surface brief — concepts/apex/index.html (Apex Auto, full concept site)

Scope: a complete one-page independent auto-service shop site for Apex Auto, VINCERE's fictional
automotive concept. Second reusable base in the internal template library ("one structure, many
skins") and the live target of "Open the full concept" for the Apex card on the home page. Visitor
mode: **Persuade**.

Audience and job: a driver who found Apex on Google Maps, on a phone, often in a parking lot with
a warning light on, deciding within a minute whether to book here. Their questions, in order: do
you work on my car, what will it cost, can I get in soon, where are you and can I drop it off.
Action: Schedule service (form, phone). Secondary: Call, Directions.

Proof and content: Apex is fictional; every fact, price, and person is illustrative and the footer
says so. Photography is Unsplash placeholders (verified URLs) the client replaces. No reviews,
ratings, certifications, or press are shown: the page must not fabricate proof.

Constraints: static HTML/CSS/vanilla JS, no build step, own stylesheet (no VINCERE tokens); Google
Fonts only; AA contrast; reduced motion; `noindex`; skins are token blocks on `[data-skin]` and
match the three skins in the home-page switcher (graphite default, signal, racing); `?skin=`
selects one. The identity is inherited from the `.pv--apex` preview already in `index.html` /
`styles.css`: graphite ground, one orange signal, tight heavy sans headline, 6px corners, a
four-tile bay grid.

## Direction contract

THESIS: A shop site that behaves like a posted price board: the cost of the common jobs is on the
wall before you ask, the bays are visibly bookable, and every step is approved by text. It refuses
the category default: a hero slideshow of shiny cars, "call for a quote", a stock-photo handshake,
and a phone number as the only next step.

OWN-WORLD: Graphite ground (#16181C→#0C0E11) with cool light ink (#E8EAED) and one orange signal
(#FF5A1F) worn only by the action, the live status, the open bay, and the price column. Barlow
Semi Condensed 700 for headlines at tight tracking; Barlow for everything read; tabular numerals
everywhere a number sits. 6px corners on controls and tiles, 1px hairlines at 20% ink, photography
under a graphite gradient. Signature material: the bay board, a strip of four tiles that reads as a
schedule and highlights the next open slot. Removing the content you would still recognize:
graphite, one orange, squared-off controls, the tile strip.

STORY: The visitor sees, in one viewport, that Apex is open now, what the next open bay is, and an
orange "Schedule service"; scrolls into posted prices that read like a price board; learns the four
steps and that nothing starts before a text approval; confirms hours and drop-off; and books, from
the fixed mobile bar or the form, without phone tag.

FIRST VIEWPORT: Sticky graphite nav: APEX AUTO wordmark (AUTO in orange) left, three links
(Services, How it works, Visit), orange 6px button right. Hero fills the viewport with the engine
bay photograph under a bottom-heavy graphite gradient. Bottom-left: H1 "Book the bay. Skip the
wait." in Barlow Semi Condensed 700 at clamp(3rem, 9vw, 7rem); under it the live status line
("● Open until 6 pm · next open bay 2:30 pm · 1480 Brannan Rd") in orange sentence case, never a
tracked-caps eyebrow; one lede line; then "Schedule service" (orange, 6px) and "See service
pricing" (text link). Directly under the actions, the bay board: four tiles (Bay 1–4) with a time
each, the next open one in orange; tapping a tile scrolls to the form with that time prefilled. On
mobile a fixed bottom bar carries Schedule / Call / Directions from the first paint.

FORM: Shaped directly as a precisely specified local base (no concept-seed roll): structure was
set by the user's own brief (hero, quick answers, services with posted prices, how it works, the
shop, visit/hours, schedule form, footer) and the Apex identity already in code. Signature
interaction: the bay board and status line are computed from the hours table and change with the
clock; the hero photo drifts 4% over 12s; sections rise 12px once on scroll. Motion grammar:
ease-out expo, 400–800 ms, one clock.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the
verdict, DESIGN.md, and every shipping raster carrying its provenance.
