---
name: Apex Auto
description: VINCERE's fictional auto-service concept and second template base. Graphite ground, cool light ink, one orange signal, Barlow Semi Condensed 700 over Barlow; 6px corners, a four-tile bay board; one structure, three skins.
colors:
  ground: "#121418"
  ground-2: "#0C0E11"
  ground-3: "#1A1D22"
  ink: "#E8EAED"
  ink-soft: "#B9BEC6"
  ink-muted: "#8E949D"
  accent: "#FF5A1F"
  accent-text: "#FF5A1F"
  accent-hero: "#FF5A1F"
  accent-ink: "#0C0E11"
  accent-hover: "#FF7040"
  line: "rgba(232, 234, 237, 0.2)"
  line-strong: "rgba(232, 234, 237, 0.36)"
  error: "#FF9B7A"
  focus: "#FFB38A"
  signal-ground: "#F3F4F6"
  signal-ground-2: "#E7E9EE"
  signal-ground-3: "#FFFFFF"
  signal-ink: "#14161A"
  signal-ink-soft: "#3D4148"
  signal-ink-muted: "#5F6570"
  signal-accent: "#D2321A"
  signal-accent-text: "#C42E14"
  signal-accent-hero: "#FF7A45"
  signal-accent-ink: "#FFFFFF"
  signal-accent-hover: "#B92B16"
  signal-hero-button: "#E2391B"
  signal-hero-button-hover: "#F04A2C"
  signal-line: "rgba(20, 22, 26, 0.18)"
  signal-line-strong: "rgba(20, 22, 26, 0.34)"
  signal-error: "#B4321B"
  signal-focus: "#C42E14"
  racing-ground: "#0F2A1F"
  racing-ground-2: "#0B2019"
  racing-ground-3: "#16382B"
  racing-ink: "#E6F2EA"
  racing-ink-soft: "#B6CBBE"
  racing-ink-muted: "#8FA899"
  racing-accent: "#BDF24A"
  racing-accent-text: "#BDF24A"
  racing-accent-hero: "#BDF24A"
  racing-accent-ink: "#0B2019"
  racing-accent-hover: "#CDF873"
  racing-line: "rgba(230, 242, 234, 0.18)"
  racing-line-strong: "rgba(230, 242, 234, 0.34)"
  racing-error: "#FFA98A"
  racing-focus: "#D7F58C"
typography:
  display:
    fontFamily: "Barlow Semi Condensed, Barlow, Arial Narrow, -apple-system, sans-serif"
    fontSize: "clamp(3rem, 9vw, 7rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Barlow Semi Condensed, Barlow, Arial Narrow, -apple-system, sans-serif"
    fontSize: "clamp(2.2rem, 4.8vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Barlow Semi Condensed, Barlow, Arial Narrow, -apple-system, sans-serif"
    fontSize: "clamp(1.5rem, 2.4vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  tile:
    fontFamily: "Barlow Semi Condensed, Barlow, Arial Narrow, -apple-system, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  wordmark:
    fontFamily: "Barlow Semi Condensed, Barlow, Arial Narrow, -apple-system, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.1em"
  lede:
    fontFamily: "Barlow, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.1rem, 1.4vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  body:
    fontFamily: "Barlow, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body-sm:
    fontFamily: "Barlow, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  button:
    fontFamily: "Barlow, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "normal"
  label:
    fontFamily: "Barlow, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.12em"
rounded:
  base: "6px"
  dot: "50%"
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
    rounded: "{rounded.base}"
    padding: "1rem 1.6rem"
  button-accent-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.accent-ink}"
  button-sm:
    rounded: "{rounded.base}"
    padding: "0.7rem 1.1rem"
  text-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
  text-link-hover:
    backgroundColor: "transparent"
    textColor: "{colors.accent-text}"
  label:
    backgroundColor: "transparent"
    textColor: "{colors.accent-text}"
    typography: "{typography.label}"
  nav:
    backgroundColor: "rgba(12, 14, 17, 0.55)"
    textColor: "{colors.ink-soft}"
    height: "72px"
  nav-stuck:
    backgroundColor: "rgba(12, 14, 17, 0.88)"
    textColor: "{colors.ink-soft}"
  input:
    backgroundColor: "{colors.ground-3}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.base}"
    padding: "0.9rem 1rem"
    height: "3.25rem"
  hours-card:
    backgroundColor: "{colors.ground-3}"
    textColor: "{colors.ink}"
    rounded: "{rounded.base}"
    padding: "{spacing.card-pad}"
  bay-tile:
    backgroundColor: "rgba(12, 14, 17, 0.55)"
    textColor: "{colors.ink}"
    typography: "{typography.tile}"
    rounded: "{rounded.base}"
    padding: "0.85rem 0.95rem"
  bay-tile-open:
    backgroundColor: "rgba(255, 90, 31, 0.16)"
    textColor: "{colors.accent-hero}"
    rounded: "{rounded.base}"
    padding: "0.85rem 0.95rem"
  status-box:
    backgroundColor: "rgba(255, 90, 31, 0.08)"
    textColor: "{colors.ink}"
    rounded: "{rounded.base}"
    padding: "1rem 1.25rem"
  bar-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.base}"
    height: "46px"
  bar-button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.base}"
    height: "46px"
---

# Design System: Apex Auto

## Overview

**Creative North Star: "The Posted Price Board"**

Apex Auto is a one-page independent auto-service site that answers a Maps visitor's questions in the order a driver with a warning light asks them (open now?, next open bay?, what does it cost?, where do I drop it?) and keeps "Schedule" within thumb reach on every screen. The world is a service bay after hours: graphite ground, cool light ink, one orange signal, and a heavy semi-condensed sans that only speaks in headlines, tile times, and step numbers. Nothing decorates; the photograph under its graphite veil, the hairlines, and the bay board do the atmospheric work. Remove the copy and you would still recognize it: graphite, one orange, squared-off 6px controls, the four-tile strip.

It is VINCERE's second template base ("one structure, many skins") and the sibling of Sasso. Every color on the page lives in one token block at the top of `apex.css`; a skin is a second, complete token block on `html[data-skin]` and nothing structural changes beneath it. Two alternate skins ship (Signal, Racing) and match the three-way switcher in the VINCERE home page's concept panel. What Apex adds to the Sasso pattern is a three-way accent split: `--accent` for fills, `--accent-text` for text on the ground, `--accent-hero` for the status line and open tile over the veiled photograph. Graphite and Racing set all three to one value; the light Signal skin needs three different reds to clear AA in each place. Apex is fictional, carries `noindex, nofollow`, and is never listed in the sitemap; its palette and type are deliberately not VINCERE tokens.

Density is that of a price list rather than a brochure: sections breathe on a clamp(4.5rem, 9vw, 8rem) rhythm, copy is capped at 42 to 60ch, and data (jobs, steps, hours, facts) sits on hairline rows rather than in cards. Confirmed rejections: a hero slideshow of shiny cars, "call for a quote", a stock handshake, a phone number as the only next step, ratings or certifications, and a tracked-caps eyebrow above any headline.

**Key Characteristics:**
- Three graphite steps (#121418, #0C0E11, #1A1D22) do the sectioning; hairlines at 20% and 36% ink do the ruling
- One orange (#FF5A1F) worn by actions, the status line, the open bay, prices, step numbers, data labels, and today's row; never a ground, never running text
- Barlow Semi Condensed 700 at tight tracking for every headline, tile time, step title, and step number; the wordmark alone is 500 at 0.1em with AUTO in the accent at 700
- Barlow 400/500/600 for everything read, at 1.0625rem base
- One radius: 6px on every control, tile, field, surface, and photo; no pills anywhere; circles only as 8px and 9px status dots
- Tabular numerals on every number that lines up: prices, times, hours, the status line, step counters
- A skin is a token block on `html[data-skin]`, selected by `?skin=<id>`, with the accent split three ways
- One easing (out-expo) and three durations (160/320/700ms); the hero photo drifts 4% over 12s; the four tiles rise in a 70ms cascade

## Colors

A cool, dim palette where three graphite steps carry structure, near-white ink carries text, and one orange carries every action and every piece of data a driver is scanning for.

### Primary
- **Signal Orange** (`{colors.accent}`): the fill accent. Fills the "Schedule service" button in the hero, nav, and form, the mobile bar's Schedule button, the skip link, text selection, the caret, and the focused field border; washes the open bay tile (16%) and the sent-form status box (8%) through the `--accent-rgb` triplet. Marked in the build as 5.9:1 on Ground.
- **Signal Text** (`{colors.accent-text}`): the same orange as text on the ground: the price column, step numbers, the tracked visit labels, today's row in the hours table, the AUTO half of the wordmark, and every link and nav item on hover. Split from the fill so a light skin can darken it independently.
- **Signal Hero** (`{colors.accent-hero}`): the orange used over the veiled photograph: the live status line and its dot, the open bay's border, time, and dot, the tile hover border, and the hero text link on hover. Split from the others so a light skin can brighten it against the dark hero.
- **Signal Ink** (`{colors.accent-ink}`): text on the orange fill; the deepest graphite step, so the button reads as cut from the band.
- **Signal Hover** (`{colors.accent-hover}`): the lighter orange the accent button turns on hover, with a 1px rise.
- **Focus** (`{colors.focus}`): the global 2px focus outline at 3px offset, cut at 6px. A pale peach rather than the accent so it reads on both the ground and an orange fill.

### Neutral
- **Graphite** (`{colors.ground}`): page ground.
- **Graphite Deep** (`{colors.ground-2}`): the alternating band (facts, how it works, visit, footer), the `theme-color`, and the source of the `--veil` and `--chrome` RGB triplets (12, 14, 17) that build the hero gradient, the photo overlays, the bay tiles, the nav, and the mobile bar.
- **Graphite Raised** (`{colors.ground-3}`): raised surfaces: form fields and the hours card.
- **Ink** (`{colors.ink}`): headings, body, job names, fact lead lines, the wordmark. The hero pins its text, lede, caption, and tiles to this literal value in every skin, because the photograph stays dark.
- **Ink Soft** (`{colors.ink-soft}`): ledes, nav links, step text, shop and visit copy, hours values, footer. Marked 10.9:1 on Ground.
- **Ink Muted** (`{colors.ink-muted}`): notes, fine print, placeholders, the "Optional" mark, the job qualifier (`each`, `credited to the repair`), the select chevron, the concept credit. Marked 5.7:1 on Ground.
- **Line** and **Line Strong** (`{colors.line}`, `{colors.line-strong}`): 20% and 36% ink. Line rules job rows, facts, steps, hours rows, section seams, field borders, and the stuck nav; Line Strong underlines group titles and text links, borders the mobile bar's secondary buttons, is the field hover border, and colors the scrollbar thumb.
- **Error** (`{colors.error}`): a salmon that stays legible on graphite for invalid field borders, error messages, and the status box's error border.

### Skins
A skin is a second token block on `html[data-skin="<id>"]` that redefines the same names. `?skin=signal` or `?skin=racing` on the URL sets the attribute from an inline script in `<head>`, before first paint, so the home page's "Open the full concept" link opens the look the visitor chose in the switcher.

- **Signal** (`{colors.signal-*}`): light steel-grey grounds, near-black ink, and three reds: a fill red (`signal-accent`, white label at 4.9:1), a darker text red (`signal-accent-text`, 5.1:1 on the light ground), and a brighter hero orange (`signal-accent-hero`) over the dark veil. `color-scheme` flips to light, the shadow softens to 35% ink, `--chrome` becomes the light ground so the nav and bar go pale, and the native date-picker icon drops its invert. The hero is the one place the skin does not reach: the photograph and veil stay dark, hero text stays Ink, and the hero button gets its own pair (`signal-hero-button`, `signal-hero-button-hover`) so the red holds against the veil.
- **Racing** (`{colors.racing-*}`): British-green grounds, mint-white ink, a lime accent set to one value across all three accent roles. Inherits the default shadow.

### Named Rules
**The One Orange Rule.** The accent is worn by actions and by data the driver is scanning for (status, open bay, prices, step numbers, labels, today). It never fills a section, never colors running text, and never appears as a second tint.

**The Three-Way Accent Rule.** Every use of the accent names which of the three it is: `--accent` on a fill, `--accent-text` as text on the ground, `--accent-hero` over the veiled photograph. Dark skins may set all three to one value; a light skin must be able to set three. A new element that uses `--accent` as text is a bug.

**The Token Block Rule.** Every color on the page resolves to a token in section 1 of `apex.css`. A skin redefines that block and nothing else; the only skin-scoped selectors below it are `color-scheme`, the hero's accent button, and the native date-picker icon. A brand that needs a structural override is a new base, not a skin.

**The Graphite Hairline Rule.** Rules are 1px of ink at 20% (Line) or 36% (Line Strong); there are no solid divider colors and no borders in the accent except on a focused field, the open bay tile, and the sent-form status box.

## Typography

**Display Font:** Barlow Semi Condensed (with Barlow, Arial Narrow)
**Body Font:** Barlow (with -apple-system, Segoe UI, Helvetica, Arial)

Both load from Google Fonts: Barlow Semi Condensed at 500, 600, 700; Barlow at 400, 500, 600, 700.

**Character:** One family in two widths. The condensed cut is heavy, tight, and short-lined wherever it appears; it never runs at body size and never goes light. The normal width does all the reading. The pairing reads like a shop sign over a printed price list.

### Hierarchy
- **Display** (700, clamp(3rem, 9vw, 7rem), 0.95, -0.025em): the hero H1 only, capped at 15ch, balanced, with a 28px veil-tinted text shadow so it holds on the photograph.
- **Headline** (700, clamp(2.2rem, 4.8vw, 3.6rem), 1, -0.02em): section H2s, capped at 16ch, balanced.
- **Title** (700, clamp(1.5rem, 2.4vw, 2rem), -0.01em): service group titles over a Line Strong rule; the hours card title is the same face at a fixed 1.6rem.
- **Tile** (700, 1.35rem, 1.1, -0.01em, tabular): the time on each bay tile and every step title; the step counter is the same face at 1.5rem in Signal Text with `decimal-leading-zero`.
- **Wordmark** (500, 1.125rem, 0.1em, uppercase): "APEX AUTO" in the nav and footer, with AUTO as a `<b>` in Signal Text at 700. The only tracked display use.
- **Sign-off** (600, 1.15rem, 0.02em): the owner's line under the shop copy, in Ink.
- **Lede** (400, clamp(1.1rem, 1.4vw, 1.25rem), 1.55): the paragraph under each H2, Ink Soft, capped at 46ch (42ch in the hero and services head).
- **Body** (400, 1.0625rem, 1.6): the base; shop paragraphs are Ink Soft at 54ch. Facts, step text, notes, footer, and nav links run at Body Small (0.9375rem).
- **Button** (600, 1rem, line-height 1): the accent button; `btn--sm` drops to 0.875rem; mobile bar buttons are 0.9375rem.
- **Label** (600, 0.75rem, 0.12em, uppercase): the bay name on each tile (Ink at 70%) and the visit list terms (Signal Text). The " · today" suffix and the "Optional" mark reuse the size at 0.08em.
- **Status line** (600, 1rem, tabular, Signal Hero): the live line under the H1, led by a 9px dot that dims to 40% when closed.
- **Caption** (400, 0.8125rem): the board caption and bay state at 70 to 75% Ink; the demo note and concept credit in Ink Muted.

### Named Rules
**The Condensed-Only-Loud Rule.** Barlow Semi Condensed appears at 700 in headlines, titles, tile times, step titles, and step numbers, and at 500 or 600 only in the wordmark and sign-off. It never sets a paragraph, a label, a button, or a link.

**The Label-Names-Data Rule.** The tracked label names a fact (Address, Phone, Key drop) or a tile (Bay 1); it never precedes a headline. The hero carries its context below the H1 as a sentence-case status line, and the facts strip has no labels at all: its lead lines are 600 Ink.

**The Tabular Rule.** Anything that lines up (prices, tile times, the status line, the hours table, the footer hours, step counters) sets `font-variant-numeric: tabular-nums`. Prices carry a "$" via `::before` at 500 and 80% opacity; "Free" drops it.

## Layout

A single 1120px wrap (`min(100% - 2 * gutter, 1120px)`) with a fluid gutter (clamp(1.25rem, 4vw, 2.5rem)) and a fluid section rhythm (clamp(4.5rem, 9vw, 8rem)). Bands alternate Graphite and Graphite Deep with a Line hairline at each seam. The nav is sticky at 72px; the hero pulls up under it (`margin-top: -72px; padding-top: 72px`), fills `min(100svh, 940px)`, and aligns its content to the bottom. `scroll-padding-top` is 84px.

The hero stacks H1, status line, lede, actions, then the bay board (2-up below 600px, 4-up above, max 720px). Breakpoints are content-specific: 600px (bays 4-up; form rows go to 1fr/0.8fr/1.2fr and 1fr/1fr; the form foot splits button and note; the mobile job qualifier returns inline), 700px (nav links appear, facts 2-up, service groups 2-up), 900px (nav button appears, mobile bar hides and the body's bottom padding drops, services head 1fr/1fr with the lede right-aligned, how 1.05fr/0.95fr, shop 0.8fr/1fr, visit 1.1fr/0.9fr with the hours card sticky at 96px, schedule 0.8fr/1.2fr, footer 1.2fr/1fr), and 1000px (facts 4-up with Line rules between columns instead of between rows). Below 900px the body reserves `64px + safe-area-inset-bottom` for the fixed action bar (Schedule / Call / Directions, 1.4fr/1fr/1fr).

Photography is full-bleed in the hero (object-position 55% 50%), a 3:4 pair in how-it-works (the first offset down by clamp(1.5rem, 5vw, 4rem)), and a 4:5 figure in the shop. Grid children carry `min-width: 0` so an image's intrinsic width cannot blow out a column.

## Elevation & Depth

Tonal first. Depth comes from the three graphite steps (page, band, raised surface) and from ink hairlines; the only shadow token is one deep, offset, negative-spread drop (`--shadow`) worn by the shop figure and the hours card, with a smaller sibling under the accent button. The hero's depth is a veil: two gradients built from the `--veil` RGB triplet (a bottom-heavy vertical from 50% to 98%, a 100deg diagonal from 70% to 0%) so the photograph darkens toward the text. Every secondary photograph wears the same graphite: the image is desaturated (`saturate(0.35) contrast(1.05)`) and a lighter vertical veil sits over it, so the one orange stays the only color on the page. Nav and mobile bar are translucent chrome (55% resting, 88% stuck or fixed) with `blur(14px)`; the bay tiles are 55% veil with `blur(6px)` over the photograph.

### Shadow Vocabulary
- **Surface** (`box-shadow: 0 24px 48px -24px rgba(0, 0, 0, 0.7)`; Signal: `rgba(20, 22, 26, 0.35)`): shop figure, hours card.
- **Accent button** (`box-shadow: 0 10px 24px -14px rgba(0, 0, 0, 0.7)`): the orange button at rest.
- **Display text** (`text-shadow: 0 2px 28px rgba(veil, 0.6)`): the hero H1 over the photograph.
- **Hero veil** (`linear-gradient(180deg, rgba(veil, 0.5) 0%, rgba(veil, 0.25) 28%, rgba(veil, 0.82) 60%, rgba(veil, 0.98) 100%), linear-gradient(100deg, rgba(veil, 0.7) 0%, rgba(veil, 0.35) 45%, rgba(veil, 0) 78%)`): the hero photograph's darkening toward the bottom-left text.
- **Photo veil** (`linear-gradient(180deg, rgba(veil, 0.18) 0%, rgba(veil, 0.55) 100%)` on the how-it-works pair; `rgba(veil, 0.12)` to `0.5` on the shop figure) over `filter: saturate(0.35) contrast(1.05)`: every photograph that is not the hero.
- **Field focus** (`0 0 0 3px rgba(var(--accent-rgb), 0.22)` with an accent border): the only zero-offset ring, and it is state, not elevation. `--accent-rgb` follows the skin.

### Named Rules
**The Veil, Not Glow Rule.** Darkness sits over the photograph, not around the objects. Shadows are single, deep, and offset; there are no colored glows and no shadow on text except the hero H1.

**The Desaturated Photo Rule.** Every photograph except the hero runs at 35% saturation under a graphite gradient. A photograph is never allowed to introduce a second color.

## Shapes

One radius. Every control, tile, field, surface, photo, status box, skip link, and the focus outline is cut at 6px (`--radius`). There are no pills: the accent button, the nav button, the mobile bar buttons, and the bay tiles are all 6px rectangles, which is the one big shape difference from Sasso. Circles appear only as the 9px status dot, the 8px open-bay dot, and the scrollbar thumb. Borders are 1px hairlines in Line (surfaces, fields, seams) or Line Strong (group-title underline, mobile bar secondary buttons); the bay tile's resting border is 28% Ink over the photograph and turns Signal Hero when open or hovered; the button's border is transparent so the accent and any ghost variant align. Photographs are clipped to 6px and never framed.

## Components

### Buttons
Quiet everywhere except the one orange.
- **Shape:** 6px rectangle, 1px transparent border, 1rem/1.6rem padding at 1rem 600 (`btn--sm`: 0.7rem/1.1rem at 0.875rem).
- **Accent:** Signal Ink on Signal Orange with the button shadow. Used for "Schedule service" in the hero, the nav (from 900px), and the form submit ("Request a bay", which reads "Sending…" while disabled). In the Signal skin the hero instance alone is repainted with `signal-hero-button` and white text.
- **Hover / Active:** hover to Signal Hover with a 1px rise; active presses 1px down. Focus is the global 2px Focus outline at 3px offset.
- **Text link:** inherits color, 1px underline in Line Strong at 0.2em offset; hover turns text and underline Signal Text (Signal Hero inside the hero, where the resting underline is 40% Ink). Used for "See service pricing", directions, phone, Instagram, and the VINCERE credit.

### Labels and Facts
- **Label:** 0.75rem 600 uppercase at 0.12em. On the visit list (`dt`) it is Signal Text, 0.25rem above its value; on a bay tile it is Ink at 70%.
- **Fact:** a Body Small block in Ink Soft with the lead line in 600 Ink, no label, separated by Line rules (rows below 1000px, columns above). Four of them (hours, address, key drop, estimates) sit on the Graphite Deep band directly under the hero.

### Cards / Containers
- **Hours card:** Graphite Raised, 1px Line, 6px radius, clamp(1.5rem, 3vw, 2.25rem) padding, Surface shadow; sticky at 96px from 900px. Holds a condensed 700 title at 1.6rem, a two-column table with Line rules, tabular figures, values right-aligned in Ink Soft, and a note in Ink Muted at 0.875rem. The row matching `new Date().getDay()` gets `is-today`: Signal Text, 600, and a " · today" suffix.
- **Shop figure:** 4:5, 6px radius, Surface shadow, desaturated under the photo veil.
- **How-it-works photos:** two 3:4 tiles at 6px, desaturated under the photo veil, the first pushed down so the pair staggers.

### Inputs / Fields
- **Style:** Graphite Raised fill, 1px Line, 6px radius, 0.9rem/1rem padding, 3.25rem min height, inherits body type; label above at 0.875rem 600 with an optional uppercase "Optional" mark in Ink Muted.
- **Hover:** border to Line Strong.
- **Focus:** border to Signal Orange, 3px orange halo at 22%, no outline.
- **Error:** Error border, message below at 0.8125rem in Error; the field also sets `aria-invalid` and `aria-describedby`. The date input has `min` set to today and rejects Sundays and past dates against the same `HOURS` table; the phone field wants ten digits.
- **Select:** native appearance removed, an Ink Muted chevron SVG at right 1rem, placeholder option in Ink Muted.
- **Status box:** 1rem/1.25rem, Signal Orange border on an 8% orange fill, Ink text, 6px radius; error state swaps to an Error border. On success the form hides its rows and focuses the box.

### Navigation
- **Style:** sticky 72px bar on 55% chrome with `blur(14px) saturate(140%)`; after 24px of scroll (`is-stuck`) it deepens to 88% and gains a Line bottom rule. Wordmark left (APEX in Ink 500, AUTO in Signal Text 700), three links (Services, How it works, Visit) at 0.9375rem 500 Ink Soft hovering to Signal Text from 700px, small accent button right from 900px.
- **Mobile action bar:** fixed to the bottom on 88% chrome with a Line top rule, safe-area padded, 46px 6px-radius buttons: Schedule (accent), Call and Directions (Ink on a Line Strong border). Present from first paint; hidden from 900px.

### Price Board
Service groups are sections with a condensed 700 title over a Line Strong rule; each job is a flex row (name left in Ink, price right in Signal Text 600 tabular with a "$" prefix) on a Line rule at 0.85rem vertical padding. A job qualifier `em` (`each`, `credited to the repair`) is upright Ink Muted at 0.9em, inline from 600px and on its own line below. "Free" rows drop the dollar sign. The note runs at 0.9375rem Ink Muted, 60ch.

### Steps
An ordered list capped at 52ch on the Graphite Deep band: each step is a 2.75rem/1fr grid on a Line rule with a condensed counter (`01` to `04`) in Signal Text spanning both rows, a condensed 700 title at 1.35rem, and Body Small text in Ink Soft.

### Bay Board (signature)
Four `<button>` tiles under the hero actions, 2-up below 600px and 4-up above, capped at 720px, introduced by a 0.8125rem caption ("Today's bays — tap an open one to book that time"). Each tile is a 6px rectangle on 55% veil with `blur(6px)` and a 28% Ink border, holding a tracked bay name at 70%, a condensed 700 tabular time at 1.35rem, and a state line at 0.8125rem. `apex.js` computes the earliest free half-hour slot per bay from the `HOURS` table and a demonstration `BOOKED` pattern, never inside the last 90 minutes before close; when the shop is closed the board looks ahead to the next open day and prefixes the time with "Tomorrow" or the weekday. The earliest slot across the four bays becomes `is-open`: Signal Hero border, 16% orange wash, Signal Hero time, full-opacity state ("Open now" inside the next half hour, else "Next opening"), and an 8px Signal Hero dot at the top right. Full bays read "Full", are disabled, and dim to 72%. Hovering an open tile turns its border Signal Hero and rises 1px. Tapping any open tile writes its date and time into the form's date and time fields, smooth-scrolls to the form, and focuses the service select. The tiles rise on load in a 70ms cascade from 360ms, indexed by the inline `--i`.

### Live Status Line (signature)
`apex.js` holds the `HOURS` table (JS weekday keys, 24h decimal ranges, `null` for closed) and derives the hero line from `new Date()` and the board: "Open until 6 pm · next open bay 2:30 pm", "Open · closing at 6 pm · …" inside the last hour, "Opens today at 7:30 am · first open bay 7:30 am", or "Closed now · opens tomorrow at 7:30 am", always followed by " · 1480 Brannan Rd" with non-breaking spaces before am/pm. The line is Signal Hero 600 tabular with a 9px dot that dims to 40% when closed, sits under the H1 with `aria-live="polite"`, and the same table marks today's row in the hours card, drives the board, and validates the schedule date. The HTML hours table is the visible copy; the JS table is the copy the page reasons from. Keep both in sync.

### Motion
One easing (`cubic-bezier(0.16, 1, 0.3, 1)`) and three durations (160ms, 320ms, 700ms), gated behind a `.js` class so nothing is hidden without script. The hero title, status, lede, actions, and board rise 14px over 700ms with an 80ms stagger (0/80/160/240/320ms); the four tiles follow at 600ms each from 360ms with a 70ms step; the hero photo settles from 1.04 to 1 scale over 12s. Facts, service head and groups, how, shop, visit, hours, and form blocks rise 12px over 700ms once, on intersection (8% threshold, -8% bottom margin), staggered 60ms in groups of four. Tile hover and button hover run at 160ms; nav chrome at 320ms. `prefers-reduced-motion` removes every animation, collapses transitions, disables smooth scroll, and skips the reveal observer and the bay-tap scroll animation.

## Do's and Don'ts

### Do:
- **Do** put every color in the section 1 token block and add a client's brand as a new `html[data-skin="<id>"]` block that redefines all of them, including all three accent roles; test it against the hero, which stays dark.
- **Do** keep Barlow Semi Condensed 700 for headlines, titles, tile times, step titles, and counters only; the wordmark is the sole tracked use, at 500 with AUTO in the accent at 700.
- **Do** keep the tracked label for naming facts and tiles, and keep the hero's context below the H1 as a sentence-case status line.
- **Do** rule with ink hairlines (20% and 36%) and section with the three graphite steps; cut everything at 6px.
- **Do** set tabular numerals on every number that lines up and prefix prices with the 500-weight "$".
- **Do** run every non-hero photograph at 35% saturation under the graphite photo veil.
- **Do** keep Schedule, Call, and Directions in the fixed bar below 900px and the accent button in the nav above it.
- **Do** drive hours from the one `HOURS` table: status line, bay board, today's row, and date validation.
- **Do** cap running copy at 42 to 60ch and headings at 15 to 16ch.

### Don't:
- **Don't** add a second accent or use orange as a ground, a band, or running text; don't use `--accent` as text or `--accent-text` as a fill.
- **Don't** put a tracked-caps eyebrow above the H1 or an H2, and don't set Barlow Semi Condensed light, at body sizes, or in a paragraph.
- **Don't** add pills, radii other than 6px, colored glows, or zero-offset shadows on surfaces.
- **Don't** ship a saturated secondary photograph or let an image carry a color the palette does not.
- **Don't** add hero slideshows, "call for a quote", ratings, reviews, certifications, press, or any proof device; Apex is fictional and the page must not fabricate.
- **Don't** write skin-specific selectors below the token block except `color-scheme`, the hero accent button, and the native picker; if a skin needs one, it is a new base.
- **Don't** index this page: keep `noindex, nofollow` and keep it out of `sitemap.xml`.

## Reusing this base for a client

Apex is the base; a client site is a copy of `concepts/apex/` with these replaced.

- **Tokens:** either overwrite the `:root` block in `apex.css` (the client becomes the default) or add `html[data-skin="<client>"]` with all sixteen color tokens (three accent roles plus `--accent-rgb`) and `--veil`, `--chrome`, `--shadow`, and set the attribute in the `<head>` script (or accept it via `?skin=`). Check Ink Soft and Ink Muted contrast on the new ground; on a light ground, check the hero button override and `color-scheme`.
- **Photography:** the hero, two how-it-works images, and the shop figure are Unsplash placeholders (`images.unsplash.com`, with `srcset`). Replace with the client's rasters at the same aspect ratios (hero landscape, 3:4 pair, 4:5 figure), keep the desaturation and veil, and write real `alt` text for the shop figure.
- **Hours and bays:** edit `HOURS` in `apex.js` (keys 0 to 6, `[open, close]` in 24h decimal, `null` for closed), `LAST_SLOT_BEFORE_CLOSE`, and the visible `<table data-hours>` rows, the facts strip, the footer line, and the `ADDRESS` constant. Replace the `BOOKED` demonstration pattern with the scheduler's real availability, or the board is fiction.
- **Address and phone:** the `tel:` links (visit, schedule lede, footer, bar), the Google Maps `destination` in the directions links, the visit list, and the footer.
- **Copy:** `<title>`, `meta description`, the H1 and lede, the facts, the service groups and prices, the steps, the shop story and sign-off, the visit list, the schedule fine print, the `time` and `service` options, and the wordmark text in the nav and footer.
- **Form endpoint:** replace `send()` in `apex.js` with a POST to the shop management system (Tekmetric, Shop-Ware) or a mail relay, remove the "Concept form" note, and keep the validation.
- **Meta:** replace `theme-color` with the client's deep ground, remove `noindex` and the footer's fictional-shop line, add the page to the sitemap, and update `color-scheme` if the default skin is light.
