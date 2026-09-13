---
name: Sasso
description: VINCERE's fictional trattoria concept and first template base. Warm near-black ground, cream ink, one bronze action, Bodoni Moda italic over Hanken Grotesk; one structure, three skins.
colors:
  ground: "#14100E"
  ground-2: "#1B1512"
  ground-3: "#221B16"
  ink: "#EDE3D6"
  ink-soft: "#C9BCAB"
  ink-muted: "#A89C8C"
  accent: "#C2A87E"
  accent-ink: "#14100E"
  accent-hover: "#D3BC95"
  line: "rgba(237, 227, 214, 0.16)"
  line-strong: "rgba(237, 227, 214, 0.32)"
  error: "#F0A48E"
  focus: "#E4CFA6"
  daylight-ground: "#F6F1E7"
  daylight-ground-2: "#EFE8DA"
  daylight-ground-3: "#FFFFFF"
  daylight-ink: "#26211B"
  daylight-ink-soft: "#4E4438"
  daylight-ink-muted: "#6B5F51"
  daylight-accent: "#7A4A2C"
  daylight-accent-ink: "#F6F1E7"
  daylight-accent-hover: "#8D5A39"
  daylight-line: "rgba(38, 33, 27, 0.14)"
  daylight-line-strong: "rgba(38, 33, 27, 0.32)"
  daylight-error: "#A63A1E"
  daylight-focus: "#7A4A2C"
  verde-ground: "#172A20"
  verde-ground-2: "#1D3327"
  verde-ground-3: "#24402F"
  verde-ink: "#EEF1E6"
  verde-ink-soft: "#C6CEB9"
  verde-ink-muted: "#A3AD98"
  verde-accent: "#D6C48E"
  verde-accent-ink: "#172A20"
  verde-accent-hover: "#E3D4A6"
  verde-line: "rgba(238, 241, 230, 0.16)"
  verde-line-strong: "rgba(238, 241, 230, 0.32)"
  verde-error: "#F0A48E"
  verde-focus: "#E3D4A6"
typography:
  display:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, Times New Roman, serif"
    fontSize: "clamp(3.1rem, 9.5vw, 7.25rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, Times New Roman, serif"
    fontSize: "clamp(2.4rem, 5.2vw, 4rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, Times New Roman, serif"
    fontSize: "clamp(1.75rem, 2.6vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "normal"
  wordmark:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, Times New Roman, serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.32em"
  lede:
    fontFamily: "Hanken Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.1rem, 1.4vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  body:
    fontFamily: "Hanken Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body-sm:
    fontFamily: "Hanken Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  button:
    fontFamily: "Hanken Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "normal"
  label:
    fontFamily: "Hanken Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.14em"
rounded:
  sm: "3px"
  pill: "999px"
spacing:
  sp-2: "0.5rem"
  sp-3: "0.75rem"
  sp-4: "1rem"
  sp-5: "1.25rem"
  sp-6: "1.5rem"
  sp-7: "2rem"
  sp-8: "2.25rem"
  card-pad: "clamp(1.5rem, 3vw, 2.25rem)"
  gutter: "clamp(1.25rem, 4vw, 2.5rem)"
  section: "clamp(4.5rem, 9vw, 8rem)"
components:
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "1rem 1.75rem"
  button-accent-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.accent-ink}"
  button-sm:
    rounded: "{rounded.pill}"
    padding: "0.7rem 1.2rem"
  text-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
  text-link-hover:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
  label:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    typography: "{typography.label}"
  nav:
    backgroundColor: "rgba(20, 16, 14, 0.55)"
    textColor: "{colors.ink-soft}"
    height: "72px"
  nav-stuck:
    backgroundColor: "rgba(20, 16, 14, 0.86)"
    textColor: "{colors.ink-soft}"
  input:
    backgroundColor: "{colors.ground-3}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "0.9rem 1rem"
    height: "3.25rem"
  hours-card:
    backgroundColor: "{colors.ground-3}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "{spacing.card-pad}"
  status-box:
    backgroundColor: "rgba(var(--accent-rgb), 0.08)"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "1rem 1.25rem"
  bar-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    height: "46px"
  bar-button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    height: "46px"
---

# Design System: Sasso

## Overview

**Creative North Star: "The Good Host"**

Sasso is a one-page trattoria site that answers a Maps visitor's questions in the order they ask them (open?, where?, what's the food?, can I get a table?) and keeps the reservation within thumb reach on every screen. The world is a dim dining room: warm near-black ground, cream ink, one bronze action, and a Bodoni Moda italic that only ever speaks at large sizes. Nothing decorates; the photography, the veil over it, and the hairlines do the atmospheric work. Remove the copy and you would still recognize it: black ground, bronze pill, italic serif, cream hairlines.

It is also VINCERE's first template base ("one structure, many skins"). Every color on the page lives in one token block at the top of `sasso.css`; a skin is a second, complete token block on `html[data-skin]` and nothing structural changes beneath it. Two alternate skins ship (Daylight, Verde) and match the three-way switcher in the VINCERE home page's concept panel. Sasso is fictional, carries `noindex, nofollow`, and is never listed in the sitemap.

Density is editorial rather than airy: sections breathe on a clamp(4.5rem, 9vw, 8rem) rhythm, copy is capped at 40 to 60ch, and data (facts, menu, hours) sits on hairline rows rather than in cards. Confirmed rejections: a hero slideshow, a PDF menu, a "Welcome to our restaurant" paragraph, hours hidden in the footer, and a tracked-caps eyebrow above the headline.

**Key Characteristics:**
- Three ground steps (#14100E, #1B1512, #221B16) do the sectioning; hairlines at 16% and 32% cream do the ruling
- One bronze (#C2A87E) worn by actions, prices, labels, the live status line, and today's row; never a ground, never running text
- Bodoni Moda italic 400 for every heading; the wordmark alone is upright 500 at 0.32em tracking
- Hanken Grotesk for everything read, at 1.0625rem base
- 3px corners on every surface; pills only for actions
- A skin is a token block on `html[data-skin]`, selected by `?skin=<id>`
- One easing (out-expo) and three durations (160/320/700ms); the hero photo drifts 4% over 12s

## Colors

A warm, dim palette where three ground steps carry structure, cream carries text, and one bronze carries every action and every piece of data worth noticing.

### Primary
- **Bronze** (`{colors.accent}`): the one action color. Fills the reserve pill and the mobile bar's Reserve button, colors the live status line and its dot, dish prices, the tracked data labels, today's row in the hours table, selection highlight, the form-status border, the focused field border, and every link on hover. The build's own note: 8.2:1 on Ground.
- **Bronze Ink** (`{colors.accent-ink}`): text on the bronze fill; the ground color itself, so the pill reads as cut from the page.
- **Bronze Hover** (`{colors.accent-hover}`): the lighter bronze the accent pill turns on hover, with a 1px rise.
- **Focus** (`{colors.focus}`): the global 2px focus outline at 3px offset. A pale bronze rather than the accent so it reads on both the ground and on a bronze pill.

### Neutral
- **Ground** (`{colors.ground}`): page, nav and mobile bar chrome (as the `--chrome` RGB triplet at 55% resting, 86% stuck), the hero veil (as the `--veil` triplet), and the `theme-color`.
- **Ground 2** (`{colors.ground-2}`): the alternating band: facts strip, menu, reserve.
- **Ground 3** (`{colors.ground-3}`): raised surfaces: form fields and the hours card.
- **Ink** (`{colors.ink}`): headings, body, dish names, fact values, the wordmark.
- **Ink Soft** (`{colors.ink-soft}`): ledes, nav links, story and visit copy, hours values, footer. 8.6:1 on Ground.
- **Ink Muted** (`{colors.ink-muted}`): notes, fine print, placeholders, the "Optional" mark, the dish `em`. 5.9:1 on Ground.
- **Line** and **Line Strong** (`{colors.line}`, `{colors.line-strong}`): 16% and 32% cream. Line rules dish rows, facts, hours rows, section edges, field borders, and the stuck nav; Line Strong underlines course titles and text links, borders the mobile bar's secondary buttons, and is the field hover border.
- **Error** (`{colors.error}`): a salmon that stays legible on the dark ground for invalid field borders and messages; the status box's error state uses it at 8%.

### Skins
A skin is a second token block on `html[data-skin="<id>"]` that redefines the same names. `?skin=daylight` or `?skin=verde` on the URL sets the attribute from an inline script in `<head>`, before first paint, so the home page's "Open the full concept" link opens the same look the visitor chose in the switcher.

- **Daylight** (`{colors.daylight-*}`): cream ground, near-black ink, a deep umber accent with cream text on it; `color-scheme` flips to light and the shadow softens to 35% umber. The hero is the one place the skin does not reach: the photograph stays dark, so hero text, the status line, and the hero link are pinned to cream and pale bronze in skin-specific rules.
- **Verde** (`{colors.verde-*}`): bottle-green grounds, warm off-white ink, a pale straw accent. Inherits the default shadow.

### Named Rules
**The One Bronze Rule.** The accent is worn by actions and by data the visitor is scanning for (status, prices, labels, today). It never fills a section, never colors running text, and never appears as a second tint.

**The Token Block Rule.** Every color on the page resolves to a token in section 1 of `sasso.css`. A skin redefines that block and nothing else; the only skin-scoped selectors below it are the hero (dark photo regardless of skin) and the native date-picker icon. A brand that needs a structural override is a new base, not a skin.

**The Cream Hairline Rule.** Rules are 1px of ink at 16% (Line) or 32% (Line Strong); there are no solid divider colors and no borders in the accent except on a focused field or the sent-form status box.

## Typography

**Display Font:** Bodoni Moda (with Bodoni 72, Didot, Times New Roman)
**Body Font:** Hanken Grotesk (with -apple-system, Segoe UI, Helvetica, Arial)

Both load from Google Fonts: Bodoni Moda at optical size 6..96 in upright 400, italic 400, and italic 500; Hanken Grotesk at 400, 500, 600.

**Character:** A Parma face for the voice and a plain grotesk for the reading. Bodoni appears only where it can be large and italic; the moment text has to be read at length it is Hanken. No tracked-caps eyebrow ever sits above a headline; the tracked label voice is reserved for naming data.

### Hierarchy
- **Display** (italic 400, clamp(3.1rem, 9.5vw, 7.25rem), 0.98, -0.015em): the hero H1 only, capped at 11ch, with a 28px veil-tinted text shadow so it holds on the photograph.
- **Headline** (italic 400, clamp(2.4rem, 5.2vw, 4rem), 1.02, -0.01em): section H2s, capped at 14ch, balanced.
- **Title** (italic 400, clamp(1.75rem, 2.6vw, 2.25rem)): course titles over a Line Strong rule; the hours card title is the same face at a fixed 1.75rem. The owners' sign-off is italic Bodoni at 1.2rem.
- **Wordmark** (upright 500, 1.25rem, 0.32em, uppercase): "SASSO" in the nav and footer, with 0.32em left padding to balance the trailing tracking. The only upright, tracked Bodoni.
- **Lede** (400, clamp(1.1rem, 1.4vw, 1.25rem), 1.55): the paragraph under each H2, Ink Soft, capped at 46ch (40ch in the hero and menu head).
- **Body** (400, 1.0625rem, 1.6): the base; story paragraphs are Ink Soft at 54ch. Facts, footer, notes, and nav links run at Body Small (0.9375rem).
- **Button** (600, 1rem, line-height 1): the pill; `btn--sm` drops to 0.875rem; mobile bar buttons are 0.9375rem.
- **Label** (600, 0.75rem, 0.14em, uppercase, Bronze): the data labels in the facts strip and the visit list; the " · today" suffix on the hours row and the "Optional" mark reuse the size at 0.08em in Ink Muted.
- **Status line** (600, 1rem, tabular figures, Bronze): the live line under the H1, led by a 9px dot that dims to 40% when closed.

### Named Rules
**The Italic-Only Display Rule.** Bodoni Moda is italic 400 wherever it is a heading. The one upright use is the wordmark at 500 with wide tracking; there is no upright Bodoni body text and no bold Bodoni.

**The Label-Names-Data Rule.** The tracked bronze label introduces a fact (Hours, Where, Parking, Address); it never precedes a headline. The hero carries its context below the H1 as a sentence-case status line.

**The Tabular Rule.** Anything that lines up (prices, hours, the status line, the footer hours) sets `font-variant-numeric: tabular-nums`.

## Layout

A single 1120px wrap (`min(100% - 2 * gutter, 1120px)`) with a fluid gutter (clamp(1.25rem, 4vw, 2.5rem)) and a fluid section rhythm (clamp(4.5rem, 9vw, 8rem)). Bands alternate Ground and Ground 2 with a Line hairline at each seam. The nav is sticky at 72px; the hero pulls up under it (`margin-top: -72px; padding-top: 72px`) and fills `min(100svh, 920px)`, with its content aligned to the bottom. `scroll-padding-top` is 84px.

Breakpoints are content-specific: 600px (form rows go to 1.2fr/1fr/0.8fr and 1fr/1fr; menu photos leave the 2-up stack), 700px (nav links appear, facts 2-up, menu courses 2-up), 900px (nav pill appears, mobile bar hides and the body's bottom padding drops, story 0.8fr/1fr, menu head 1fr/1fr, visit 1.1fr/0.9fr with the hours card sticky at 96px, reserve 0.8fr/1.2fr, footer 1.2fr/1fr), and 1000px (facts 4-up with Line rules between columns instead of between rows). Below 900px the body reserves `64px + safe-area-inset-bottom` for the fixed action bar (Reserve / Call / Directions, 1.4fr/1fr/1fr).

Photography is full-bleed in the hero (object-position 60% 50%), a 4:5 figure in the story, and a three-up strip in the menu (4:3, 3:4, 1:1; 16:10 over two 1:1 below 600px). Grid children carry `min-width: 0` so an image's intrinsic width cannot blow out a column.

## Elevation & Depth

Tonal first. Depth comes from the three ground steps (page, band, raised surface) and from cream hairlines; the only shadow token is one deep, offset, negative-spread drop (`--shadow`) worn by the story figure and the hours card, with a smaller sibling under the accent pill. The hero's depth is a veil: two gradients built from the `--veil` RGB triplet (a bottom-heavy vertical from 55% to 97%, a left-heavy horizontal from 72% to 0%) so the photograph darkens toward the text. Nav and mobile bar are translucent chrome (55% resting, 86% stuck or fixed) with `blur(14px)`.

### Shadow Vocabulary
- **Surface** (`box-shadow: 0 24px 48px -24px rgba(0, 0, 0, 0.6)`; Daylight: `rgba(38, 33, 27, 0.35)`): story figure, hours card.
- **Accent pill** (`box-shadow: 0 10px 24px -14px rgba(0, 0, 0, 0.6)`): the bronze button at rest.
- **Display text** (`text-shadow: 0 2px 28px rgba(veil, 0.55)`): the hero H1 over the photograph.
- **Field focus** (`0 0 0 3px rgba(var(--accent-rgb), 0.22)` with a Bronze border): the only zero-offset ring, and it is state, not elevation. `--accent-rgb` is the accent as an RGB triplet, redefined by every skin, so the halo and the status-box wash follow the skin.

### Named Rules
**The Veil, Not Glow Rule.** Darkness sits over the photograph, not around the objects. Shadows are single, deep, and offset; there are no colored glows and no shadow on text except the hero H1.

## Shapes

Two radii. Every surface, field, image, and status box is cut at 3px (`--radius`); the focus outline inherits it. Actions are pills (999px): the reserve button, the nav pill, the skip link, the three mobile bar buttons, and the scrollbar thumb. Circles appear only as the 9px status dot. Borders are 1px hairlines in Line (surfaces, fields, seams) or Line Strong (course-title underline, mobile bar secondary buttons); the pill's border is transparent so the accent and any ghost variant align. Photographs are clipped to 3px and never framed.

## Components

### Buttons
Quiet everywhere except the one bronze.
- **Shape:** full pill (999px), 1px transparent border, 1rem/1.75rem padding at 1rem 600 (`btn--sm`: 0.7rem/1.2rem at 0.875rem).
- **Accent:** Bronze Ink on Bronze with the pill shadow. Used for "Reserve a table" in the hero, the nav (from 900px), the mobile bar, and the form submit ("Request a table", which reads "Sending..." while disabled).
- **Hover / Active:** hover to Bronze Hover with a 1px rise; active presses 1px down. Focus is the global 2px Focus outline at 3px offset.
- **Text link:** inherits color, 1px underline in Line Strong at 0.2em offset; hover turns text and underline Bronze. Used for "See this week's menu", directions, phone, email, and the footer credit.

### Labels and Facts
- **Label:** 0.75rem 600 uppercase at 0.14em in Bronze, block, 0.5rem below. Names a fact.
- **Fact:** a Body Small block in Ink Soft with the lead line in 600 Ink, separated by Line rules (rows below 1000px, columns above). Four of them (Hours, Where, Parking, Reservations) sit on the Ground 2 band directly under the hero.

### Cards / Containers
- **Hours card:** Ground 3, 1px Line, 3px radius, clamp(1.5rem, 3vw, 2.25rem) padding, Surface shadow; sticky at 96px from 900px. Holds an italic Bodoni title, a two-column table with Line rules, tabular figures, values right-aligned in Ink Soft, and a note in Ink Muted at 0.875rem. The row matching `new Date().getDay()` gets `is-today`: Bronze, 600, and a " · today" suffix.
- **Story figure:** 4:5, 3px radius, Surface shadow.

### Inputs / Fields
- **Style:** Ground 3 fill, 1px Line, 3px radius, 0.9rem/1rem padding, 3.25rem min height, inherits body type; label above at 0.875rem 600 with an optional uppercase "Optional" mark in Ink Muted.
- **Hover:** border to Line Strong.
- **Focus:** border to Bronze, 3px bronze halo at 22%, no outline.
- **Error:** Error border, message below at 0.8125rem in Error; the field also sets `aria-invalid` and `aria-describedby`. Date input rejects closed days and past dates against the same `HOURS` table.
- **Select:** native appearance removed, a chevron SVG at right 1rem, placeholder option in Ink Muted.
- **Status box:** 1rem/1.25rem, Bronze border on an 8% bronze fill, Ink text, 3px radius; error state swaps to Error border on 8% error fill. On success the form hides its rows and focuses the box.

### Navigation
- **Style:** sticky 72px bar on 55% Ground chrome with `blur(14px) saturate(140%)`; after 24px of scroll (`is-stuck`) it deepens to 86% and gains a Line bottom rule. Wordmark left, three links (Menu, Story, Visit) at 0.9375rem 500 Ink Soft hovering to Bronze from 700px, small accent pill right from 900px.
- **Mobile action bar (signature):** fixed to the bottom on 86% chrome with a Line top rule, safe-area padded, 46px pill buttons: Reserve (accent), Call and Directions (Ink on a Line Strong border). Present from first paint; hidden from 900px.

### Menu
Courses are sections with an italic Bodoni title over a Line Strong rule; each dish is a flex row (name left in Ink, price right in Bronze 500 tabular) on a Line rule at 0.85rem vertical padding. A dish `em` (e.g. "ask") is italic Ink Muted at 0.9em. Notes run at 0.9375rem Ink Muted, 60ch.

### Live Status Line (signature)
`sasso.js` holds the `HOURS` table (JS weekday keys, 24h decimal ranges, `null` for closed) and derives the hero line from `new Date()`: "Open tonight until 10 pm", "Open · kitchen closes soon" inside the last hour, "Opens today at 5 pm", or "Closed now · opens tomorrow at 5 pm", always followed by " · 412 Wickenden St". The line is Bronze 600 tabular with a 9px dot that dims to 40% when closed, sits under the H1 with `aria-live="polite"`, and the same table marks today's row in the hours card and validates the reservation date. The HTML hours table is the visible copy; the JS table is the copy the page reasons from. Keep both in sync.

### Motion
One easing (`cubic-bezier(0.16, 1, 0.3, 1)`) and three durations (160ms, 320ms, 700ms), gated behind a `.js` class so nothing is hidden without script. The hero title, status, lede, and actions rise 14px over 700ms with an 80ms stagger; the hero photo settles from 1.04 to 1 scale over 12s. Sections rise 12px over 700ms once, on intersection (8% threshold, -8% bottom margin), staggered 60ms in groups of four. `prefers-reduced-motion` removes every animation, collapses transitions, and disables smooth scroll.

## Do's and Don'ts

### Do:
- **Do** put every color in the section 1 token block and add a client's brand as a new `html[data-skin="<id>"]` block that redefines all of them; test it against the hero, which stays dark.
- **Do** keep Bodoni Moda italic 400 for headings only, at display sizes; the wordmark is the sole upright 500 use.
- **Do** keep the tracked bronze label for naming facts, and keep the hero's context below the H1 as a sentence-case status line.
- **Do** rule with cream hairlines (16% and 32%) and section with the three ground steps; cut surfaces at 3px and actions as pills.
- **Do** keep Reserve, Call, and Directions in the fixed bar below 900px and the accent pill in the nav above it.
- **Do** drive hours from the one `HOURS` table: status line, today's row, and date validation.
- **Do** cap running copy at 40 to 60ch and headings at 11 to 14ch.

### Don't:
- **Don't** add a second accent or use bronze as a ground, a band, or running text.
- **Don't** put a tracked-caps eyebrow above the H1 or an H2, and don't set Bodoni upright, bold, or at body sizes.
- **Don't** add hero slideshows, a PDF menu, ratings, reviews, press, or any proof device; Sasso is fictional and the page must not fabricate.
- **Don't** add radii beyond 3px and pills, colored glows, or zero-offset shadows on surfaces.
- **Don't** write skin-specific selectors below the token block except for the hero and native picker; if a skin needs one, it is a new base.
- **Don't** index this page: keep `noindex, nofollow` and keep it out of `sitemap.xml`.

## Reusing this base for a client

Sasso is the base; a client site is a copy of `concepts/sasso/` with these replaced.

- **Tokens:** either overwrite the `:root` block in `sasso.css` (the client becomes the default) or add `html[data-skin="<client>"]` with all thirteen color tokens plus `--veil`, `--chrome`, and `--shadow`, and set the attribute in the `<head>` script (or accept it via `?skin=`). Check Ink Soft and Ink Muted contrast on the new ground; check the hero overrides if the ground is light.
- **Photography:** the hero, story, and three menu images are Unsplash placeholders (`images.unsplash.com`, with `srcset`). Replace with the client's rasters at the same aspect ratios (hero landscape, story 4:5, menu 4:3 / 3:4 / 1:1) and write real `alt` text for the story figure.
- **Hours:** edit `HOURS` in `sasso.js` (keys 0 to 6, `[open, close]` in 24h decimal, `null` for closed) and the visible `<table data-hours>` rows, the facts strip, the footer line, and the `ADDRESS` constant.
- **Address and phone:** the `tel:` links (hero facts, visit, reserve, footer, bar), the Google Maps `destination` in the directions links, the visit list, and the footer.
- **Copy:** `<title>`, `meta description`, the H1 and lede, the story, the menu courses and prices, the visit list, the reservation fine print, the `time` and `party` options, and the wordmark text in the nav and footer.
- **Form endpoint:** replace `send()` in `sasso.js` with a POST to the reservation system (Resy, OpenTable, Tock) or a mail relay, remove the "Concept form" note, and keep the validation.
- **Meta:** replace `theme-color` with the client's ground, remove `noindex` and the footer's fictional-restaurant line, add the page to the sitemap, and update `color-scheme` if the default skin is light.
