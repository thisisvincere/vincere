---
version: 1
slug: "concepts-halston-index-html"
primary_target: "concepts/halston/index.html"
related_targets: ["index.html"]
---

# Surface brief — concepts/halston/index.html (Halston & Co., full concept site)

Scope: a complete one-page barber-shop site for Halston & Co., VINCERE's fictional barber concept.
Sixth reusable base in the internal template library ("one structure, many skins") and the live
target of "Open the full concept" for the Halston card on the home page. Visitor mode: **Persuade**,
with one action only: book a chair.

Audience and job: a man on a phone, between things, who needs a cut this week and wants to know,
in this order: can I get in, with whom, what it costs, and when you're open. He does not want a
story. Action: Book a chair (a request form tied to a barber and a service). Secondary: Call, walk
in.

Proof and content: Halston is fictional; the barbers, prices, and times are illustrative and the
footer says so. **No photography at all**: the card sells "a type-led layout that needs no
photography to feel finished", so the page proves it. Barbers are represented by tracked
monogram blocks, not portraits. No reviews, ratings, or "voted best": the page must not fabricate
proof.

Constraints: static HTML/CSS/vanilla JS, no build step, own stylesheet (no VINCERE tokens); Google
Fonts only; AA contrast at minimum; reduced motion; `noindex`; skins are token blocks on
`[data-skin]` and match the three skins in the home-page switcher (mono default, ivory, oxblood);
`?skin=` selects one. The identity is inherited from the `.pv--halston` preview already in
`index.html` / `styles.css`: near-black ground, off-white ink that is also the action, 2px corners
on every control, uppercase tracked labels, an all-caps three-line headline at -0.04em / 0.92, a
hairline hours bar at 60% opacity.

## Direction contract

THESIS: A barber site that is one button and everything a man needs to press it: the barbers,
their prices, and the hours, each within one scroll, and "Book" repeated on purpose at every point
where the decision could be made. It refuses the category default: a moody photo of a straight
razor, an Instagram embed instead of a menu, "prices vary", and a booking link that opens someone
else's app.

OWN-WORLD: Mono skin: a near-black ground (#101012 at the top of the page settling to #08080A)
with off-white ink (#F2F2F0) that is also the only action color, worn by the filled BOOK button
and nothing else that is not text; ink at 62% for secondary copy, at 18% for hairlines. No second
hue anywhere. Archivo throughout: 800 for the headline and section titles, uppercase, -0.04em,
line-height 0.92; 500 for labels, uppercase, tracked 0.10–0.16em; 400 for the little running
text there is. Tabular numerals on every price and time. 2px corners on buttons, chips, fields,
and the barber monograms; hairlines separate rows instead of cards; no shadows, no gradients but
the ground's, no photographs. Signature material: the service list as a price ledger with dotted
leaders, the four barber monograms in a row each with its own "Book with", and the hours bar,
a single tracked line that is also live ("OPEN · CLOSES 7 PM · NEXT CHAIR 3:40"). Removing the
content you would still recognize: black, one off-white block button, uppercase tracked hairline
labels, a headline the size of the screen.

STORY: The visitor sees the name, the headline "THE CLASSIC CUT.", two chips (Walk-ins, Hot
shave), the live hours line, and a filled BOOK A CHAIR; scrolls into the ledger of services with
one price each, reads the four barbers and their specialties and taps "Book with Ray"; lands in
the form with Ray and the service already chosen, picks a day and a time band, sends, and reads
a confirmation that names the barber. Hours and address sit between the barbers and the form for
the visitor who only wanted to check them. On mobile a fixed bottom bar carries BOOK / CALL from
the first paint.

FIRST VIEWPORT: Sticky black nav with a hairline once scrolled: "HALSTON & CO." (700, tracked
0.16em) left, four links (Services, Barbers, Hours, Visit) tracked uppercase small, filled 2px
"BOOK" right. Hero fills the viewport: H1 "THE / CLASSIC / CUT." in Archivo 800 at clamp(6rem, 12.5vw,
11.25rem) on desktop and clamp(4.25rem, 19vw, 10rem) below 900px, line-height 0.92, three explicit
lines spanning the wrap; tucked into the room right of "CUT." on desktop (below on mobile) the two chips "Walk-ins welcome" and "Hot towel shave", a short sentence ("Four chairs, no
gimmicks. Cuts from $38, in and out in forty minutes."), and BOOK A CHAIR (filled) beside CALL
(outline). Along the bottom of the hero, the hours bar: a hairline above a single tracked line,
left "MON–SAT · 9–7", center the live status, right "412 CANAL ST"; below 700px the bar stacks with the live line first. No eyebrow kicker above
the headline. Mobile adaptation (under 900px): the fixed bottom bar is the one repeat of BOOK A
CHAIR / CALL, so the hero pair, the nav BOOK, and the section-level "Book a chair" links are
desktop-only; the "Book with <barber>" and ledger-row "Book" buttons stay on every width because
they carry data into the form.

FORM: Shaped directly as a precisely specified local base (no concept-seed roll): structure was
set by the user's confirmed answers (nav → typographic hero with status and BOOK → services with
fixed prices → four barbers each linking into booking → hours and visit → request form tied to
barber and service → footer; every price fixed; no photography) and the Halston identity already
in code. Signature interaction: "Book with <barber>" and each service row's "Book" carry their
values into the form's barber and service selects and scroll to it; the hours line is computed
from an hours table and shows the next open chair; the day select lists only open days; the
confirmation names the barber and the day. Motion: the headline's three lines rise once on load,
staggered 60 ms; nothing else animates but hover states. Ease-out expo, 160–600 ms, one clock.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the
verdict, DESIGN.md, and no rasters to carry provenance since the page ships none.
