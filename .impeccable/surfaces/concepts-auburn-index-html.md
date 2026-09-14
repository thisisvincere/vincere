---
version: 1
slug: "concepts-auburn-index-html"
primary_target: "concepts/auburn/index.html"
related_targets: ["concepts/auburn/auburn.css","concepts/auburn/auburn.js"]
---

# Surface brief — concepts/auburn/index.html (Auburn & Ash, full concept site)

Scope: a complete one-page hair-salon site for Auburn & Ash, VINCERE's fictional salon concept.
Fourth reusable base in the internal template library ("one structure, many skins") and the live
target of "Open the full concept" for the Auburn & Ash card on the home page. Visitor mode:
**Persuade**.

Audience and job: someone who found the salon on Instagram or Maps, on a phone, about to send the
DM every salon gets: "how much for X, and do you have anything Thursday?" Their questions, in
order: what does it cost, who would do it, when can I get in, where do I park. Action: Book a
chair (form tied to a stylist and a service). Secondary: Call, Directions.

Proof and content: Auburn & Ash is fictional; every price, stylist, and policy is illustrative
and the footer says so. Photography is Unsplash placeholders (verified URLs) the client replaces;
stylist cards show the work, not headshots. No reviews, ratings, or "as seen in": the page must
not fabricate proof.

Constraints: static HTML/CSS/vanilla JS, no build step, own stylesheet (no VINCERE tokens); Google
Fonts only; AA contrast; reduced motion; `noindex`; skins are token blocks on `[data-skin]` and
match the three skins in the home-page switcher (sage default, blush, noir); `?skin=` selects
one. The identity is inherited from the `.pv--auburn` preview already in `index.html` /
`styles.css`: soft sage ground, deep green-black ink, one copper action, pill buttons, a lowercase
medium-weight headline at tight tracking ("good hair, no drama."), the price list with "from" in
copper.

## Direction contract

THESIS: A salon site that answers the DM before it is sent: the price list is on the first
screen, each stylist links straight to their own chair, and the hours, parking, and cancellation
policy are stated before anyone has to ask. It refuses the category default: a full-bleed
moodboard hero, "DM for prices", a Booksy button as the only content, and a gallery of headshots
with no way to book the person in them.

OWN-WORLD: Sage skin: soft sage ground (#E9EDE4 to #DDE3D8) with deep green-black ink (#1F2A22)
and one copper (#B4552D) worn by the action, the ampersand, the "from" on color prices, and the
list dots; a deeper copper (#9A4622) wherever copper becomes running text on the light ground.
Figtree throughout, 500 for lowercase headlines at -0.045em, 400 to 600 for everything read;
tabular numerals on prices and hours. Pills (999px) for every action and chip, 12px corners on
cards and photographs, 1px hairlines at 16% ink, flat surfaces with one soft offset shadow under
photographs only. Photography under a light sage veil in the hero; stylist photos show hair being
done, framed 4:5. Signature material: the chair, a stylist card whose action is "Book with <name>"
and carries that stylist and their first service into the form. Removing the content you would
still recognize: sage ground, one copper pill, lowercase headline, dotted price rows with copper
"from".

STORY: The visitor sees, in one viewport, the lowercase promise, that the salon is open today and
until when walk-ins are taken, a copper "Book a chair", and the three prices the preview promised;
scrolls into the full menu with color prices honestly "from", meets four stylists by their work
and taps the one they want, confirms hours, parking, and the cancellation policy; and books, from
the fixed mobile bar or the form, with the stylist and the service already filled in.

FIRST VIEWPORT: Sticky sage nav: "Auburn & Ash" wordmark (500, copper ampersand) left, three links
(Prices, Stylists, Visit), copper pill "Book a chair" right. Hero fills most of the viewport with
the salon-interior photograph under a light sage veil that fades to the ground at the bottom.
Bottom-left: H1 "good hair, no drama." in Figtree 500 lowercase at clamp(3rem, 9vw, 6.75rem);
under it the live status line ("● Open today until 7 pm · walk-ins until 5 pm · Haywood Rd") in
deep copper 600 sentence case, never a tracked-caps eyebrow; one sub line ("Cut · Color · Blowout
— walk in or book ahead"); then "Book a chair" (copper pill) and "See prices" (text link). Directly
under the actions, the three-row price teaser from the preview (Cut & style $65 · Balayage from
$180 · Blowout $45), copper "from". On mobile a fixed bottom bar carries Book / Call / Directions
from the first paint.

FORM: Shaped directly as a precisely specified local base (no concept-seed roll): structure was
set by the user's confirmed answers (hero with status and Book a chair, service menu with prices,
four stylist cards linking to their chair, booking form tied to stylist + service, visit with
hours/parking/cancellation, footer) and the Auburn & Ash identity already in code. Signature
interaction: tapping a stylist card or a menu row prefills the booking form (stylist, service) and
scrolls to it; the status line is computed from the hours table and the walk-in cutoff and changes
with the clock; the hero photo drifts 4% over 12s; sections rise 12px once on scroll. Motion
grammar: ease-out expo, 160–700 ms, one clock.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the
verdict, DESIGN.md, and every shipping raster carrying its provenance.
