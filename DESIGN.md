---
name: VINCERE
description: The bright agency page, built with Smultron's warmth and Linear/Stripe's precision. Navy ink on white, one mint-to-azure gradient, one coral action.
colors:
  paper: "#FFFFFF"
  tint: "#F5F7FB"
  tint-deep: "#EEF2F8"
  ink: "#0B1F3A"
  ink-soft: "#1E2F4D"
  muted: "#4B5B73"
  muted-soft: "#5F6E85"
  line: "rgba(11, 31, 58, 0.10)"
  line-faint: "rgba(11, 31, 58, 0.06)"
  mint: "#19B394"
  azure: "#2D7CF6"
  stage-mid: "#22A0C9"
  mint-deep: "#0E8F74"
  azure-deep: "#1F63D6"
  link: "#1F63D6"
  link-wash: "rgba(31, 99, 214, 0.10)"
  vermilion: "#D93A1F"
  raspberry: "#C8206A"
  cta-shadow-tint: "rgba(217, 58, 31, 0.28)"
  error-text: "#B42318"
  navy-ground: "#0B1F3A"
  navy-ground-2: "#0F2747"
  navy-text: "#F4F7FC"
  navy-muted: "#A7B6CE"
  navy-line: "rgba(255, 255, 255, 0.12)"
  focus-on-dark: "#8FB8FF"
typography:
  display:
    fontFamily: "Onest, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 5.4vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Onest, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.9rem, 3.6vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Onest, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.15rem, 1.5vw, 1.35rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  lede:
    fontFamily: "Onest, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.05rem, 1.35vw, 1.2rem)"
    fontWeight: 300
    lineHeight: 1.6
    letterSpacing: "normal"
  body:
    fontFamily: "Onest, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  body-sm:
    fontFamily: "Onest, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "normal"
  label:
    fontFamily: "Onest, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.08em"
  wordmark:
    fontFamily: "Archivo, Onest, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0"
rounded:
  xs: "6px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  pill: "999px"
spacing:
  sp-2: "0.5rem"
  sp-3: "0.75rem"
  sp-4: "1rem"
  sp-5: "1.5rem"
  sp-6: "2rem"
  sp-7: "2.75rem"
  sp-8: "3.5rem"
  sp-9: "5rem"
  section-y: "clamp(4.5rem, 8.5vw, 8rem)"
  section-y-tight: "clamp(3.25rem, 6vw, 5.5rem)"
  gutter: "clamp(1.25rem, 4vw, 2.5rem)"
components:
  button-primary:
    backgroundColor: "linear-gradient(90deg, {colors.vermilion} 0%, {colors.raspberry} 100%)"
    textColor: "{colors.paper}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "0.95rem 1.6rem"
  button-primary-hover:
    backgroundColor: "linear-gradient(90deg, {colors.vermilion} 0%, {colors.raspberry} 100%)"
    textColor: "{colors.paper}"
  button-ghost:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "0.95rem 1.6rem"
  button-ghost-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  button-sm:
    rounded: "{rounded.pill}"
    padding: "0.7rem 1.2rem"
  link-button:
    backgroundColor: "transparent"
    textColor: "{colors.link}"
    typography: "{typography.body-sm}"
    padding: "0.25rem 0"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "clamp(1.5rem, 2.8vw, 2.25rem)"
  card-lead:
    backgroundColor: "linear-gradient(180deg, #FFFFFF 0%, #F7F9FD 100%)"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "clamp(1.5rem, 2.8vw, 2.25rem)"
  panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "clamp(1.5rem, 3vw, 2.25rem)"
  input:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1rem"
  input-focus:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  badge:
    backgroundColor: "{colors.tint-deep}"
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "0.38rem 0.62rem"
  badge-accent:
    backgroundColor: "{colors.link-wash}"
    textColor: "{colors.link}"
    rounded: "{rounded.pill}"
    padding: "0.38rem 0.62rem"
  tag:
    backgroundColor: "{colors.link-wash}"
    textColor: "{colors.link}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 0.6rem"
  skin-button:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.42rem 0.8rem 0.42rem 0.5rem"
  skin-button-selected:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.link}"
  skin-swatch:
    rounded: "{rounded.pill}"
    size: "18px"
  icon-tile:
    backgroundColor: "linear-gradient(97deg, {colors.mint} 0%, {colors.azure} 110%)"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    size: "44px"
  step-number:
    backgroundColor: "linear-gradient(97deg, {colors.mint} 0%, {colors.azure} 110%)"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    size: "36px"
  nav:
    backgroundColor: "rgba(255, 255, 255, 0.92)"
    textColor: "{colors.ink-soft}"
    height: "76px"
  nav-link:
    textColor: "{colors.ink-soft}"
    typography: "{typography.body-sm}"
  nav-link-hover:
    textColor: "{colors.link}"
---

# Design System: VINCERE

## Overview

**Creative North Star: "The Bright Agency Page, Done Properly"**

VINCERE chose the category standard on purpose: the white agency page with a gradient hero, rounded cards, and a coral call to action. The world is not a rebellion against convention; it is convention executed at the craft level of smultron.software (warmth, composition) and Linear and Stripe (precision). The build's argument is that the concept interfaces on the page are the proof, so the system stays quiet around them: navy ink rather than black, one cool gradient for identity, one warm gradient reserved for the single action, and soft offset shadows that lift without glowing.

Density is generous but never airy. Sections breathe on a fluid rhythm (4.5rem to 8rem vertical), copy is capped at readable measures (48 to 68ch), and every list, card, and field sits on the same 8/16px radius map. The page alternates white and a cool tint band; the last two surfaces (contact, footer) drop into navy so the closing action reads as a destination rather than another section.

Confirmed rejections: the austere editorial minimalism of the previous build; any trust device the company cannot truthfully show (logos, ratings, counts, testimonials); pure greys (every neutral is navy-biased); colored glows as elevation.

**Key Characteristics:**
- Navy-biased neutrals on white, with a #F5F7FB tint band for alternating sections
- One identity gradient, mint to azure, in a bright variant for surfaces and a deeper variant for text
- One warm gradient, vermilion to raspberry, worn only by "Start a project"
- Onest everywhere; Archivo 800 wide appears only in the wordmark
- Radius map: 8px cards, 16px stage/form/panels, 12px icon tiles, pills for every action
- Soft, offset, navy-tinted shadows in four steps; no zero-offset glows
- Tilted device mockups on a curved-edge gradient stage as the signature material

## Colors

A cool, navy-anchored palette where one bright gradient carries identity and one warm gradient carries the only action.

### Primary
- **Mint** (`{colors.mint}`) and **Azure** (`{colors.azure}`): the two stops of the identity gradient (97deg, mint 0% to azure 110%). Worn by the hero stage, icon tiles, step numerals, list bullets, check discs, and the open-state FAQ toggle. Never used as flat fills for text or buttons.
- **Stage Mid** (`{colors.stage-mid}`): the 45% stop the hero stage alone adds between mint and azure so the wide field reads as a gradient rather than a two-tone blend.
- **Mint Deep** and **Azure Deep** (`{colors.mint-deep}`, `{colors.azure-deep}`): the text variant of the same gradient, used by the single gradient keyword in the H1. The solid fallback is Azure Deep.
- **Link** (`{colors.link}`): the same Azure Deep, used as a flat color for links, link-buttons, focus rings, tags, the accent badge, form focus borders, and hover borders on cards (at 25% alpha). 5.5:1 on white.
- **Link Wash** (`{colors.link-wash}`): 10% link over white; fills tags, the accent badge, the form status box, and the 3px focus halo on fields.

### Secondary
- **Vermilion** and **Raspberry** (`{colors.vermilion}`, `{colors.raspberry}`): the CTA gradient (90deg). Deepened from the reference's #FF5A3C to #E8306A so the white 15px/600 label clears 4.5:1 AA (the reference sat near 3:1). Worn by `.btn--primary` only, which the page uses for "Start a project" in the nav, hero, concept detail, and form submit. Vermilion alone marks required-field asterisks and invalid-field borders.
- **CTA Shadow Tint** (`{colors.cta-shadow-tint}`): 28% vermilion, used only as the tint of the primary pill's offset shadow.
- **Error Text** (`{colors.error-text}`): inline field error messages. The only red that is not a stop of the CTA gradient.

### Neutral
- **Paper** (`{colors.paper}`): page ground, cards, panels, the form, nav at 92% alpha.
- **Tint** (`{colors.tint}`): alternating section band, resting input background, detail-preview well.
- **Tint Deep** (`{colors.tint-deep}`): neutral badge fill, FAQ toggle disc, browser-mock toolbar.
- **Ink** (`{colors.ink}`): all headings and body copy, phone bezels, the skip link, the navy ground of contact.
- **Ink Soft** (`{colors.ink-soft}`): nav links, list items inside cards, fact values.
- **Muted** (`{colors.muted}`): ledes, descriptions, captions. 6.5:1 on white.
- **Muted Soft** (`{colors.muted-soft}`): uppercase sub-labels, placeholders, fine print. 5.2:1 on white, 4.8:1 on Tint.
- **Line** and **Line Faint** (`{colors.line}`, `{colors.line-faint}`): 10% and 6% ink; card borders, dividers, timeline dashes, hairlines inside cards.

### Dark surfaces (contact, footer)
- **Navy Ground** and **Navy Ground 2** (`{colors.navy-ground}`, `{colors.navy-ground-2}`): contact runs a vertical gradient from the first to the second; the footer sits flat on the second.
- **Navy Text**, **Navy Muted**, **Navy Line** (`{colors.navy-text}`, `{colors.navy-muted}`, `{colors.navy-line}`): the dark-surface equivalents of Ink, Muted, and Line.
- **Focus On Dark** (`{colors.focus-on-dark}`): the focus-ring color on navy, where Link would not clear contrast.

### Named Rules
**The One Warm Control Rule.** The vermilion-to-raspberry gradient is worn only by "Start a project". Nothing else on the page is warm: not hover states, not badges, not icons. Its rarity is what makes the action findable.

**The Two-Weight Gradient Rule.** Mint-to-azure exists in two weights and only two: the bright pair for fills (surfaces, tiles, discs, numerals) and the deep pair for text (the H1 keyword) and flat link color. Never put the bright pair behind text or the deep pair on a surface.

**The Navy Neutral Rule.** Every grey is a tint of Ink (#0B1F3A). Borders, shadows, scrollbar thumbs, and muted text are all navy at reduced alpha or lightness; pure grey and pure black do not appear.

## Typography

**Display Font:** Onest (with -apple-system, Segoe UI, Helvetica, Arial)
**Body Font:** Onest (same stack)
**Wordmark Font:** Archivo 800, 112% stretch, uppercase; only inside `.logo__word`. Geometry and the drawn V are specified in `brand/README.md` and `brand/04-ascendente/`; do not restate or re-draw them.

**Character:** One family at three weights. 700 with tight negative tracking for every heading, 400/500 for reading and interface text, 300 for ledes so the large introductory paragraphs feel light next to the bold headings. No italics, no display face, no monospace.

### Hierarchy
- **Display** (700, clamp(2.5rem, 5.4vw, 4rem), 1.04, -0.035em): the hero H1 only. Capped at 16ch (14ch from 1000px). Drops to clamp(2.2rem, 10vw, 2.9rem) below 600px. One keyword wears the deep gradient via background-clip with Azure Deep as solid fallback.
- **Headline** (700, clamp(1.9rem, 3.6vw, 2.75rem), 1.1, -0.03em): section H2s, white on dark surfaces. Section heads cap at 720px width.
- **Title** (700, clamp(1.15rem, 1.5vw, 1.35rem) up to clamp(1.3rem, 2vw, 1.6rem) for service cards, 1.1, -0.025em): card, pillar, step, and FAQ-summary titles. FAQ summaries and mobile menu links use 600 rather than 700.
- **Lede** (300, clamp(1.05rem, 1.35vw, 1.2rem), 1.6): the paragraph under each H2 and the about copy, in Muted, capped at 56 to 66ch. Inline emphasis inside a lede is 600 Ink.
- **Body** (400, 1rem, 1.65): the base; most descriptive copy actually renders at Body Small (0.9375rem, 1.6 to 1.7) in Muted with 34 to 68ch caps.
- **Label** (600, 0.8125rem, 0.08em, uppercase): section sub-labels, card titles on panels, footer column heads, contact "email us directly". Tags and badges shrink to 0.75rem / 0.6875rem at 0.04 to 0.06em tracking. Step numerals are 700 with tabular figures.

### Named Rules
**The One Keyword Rule.** Gradient text appears exactly once on a surface, on one phrase of the primary heading, always with a solid deep-variant fallback declared first. It is the form's own device, not a decoration to repeat.

**The Balanced Heading Rule.** Headings set `text-wrap: balance`; paragraphs set `text-wrap: pretty`. Headings carry a ch-based max-width (14 to 20ch) rather than relying on the container.

## Layout

A single 1200px container with a fluid gutter (clamp(1.25rem, 4vw, 2.5rem)) and fluid section rhythm (clamp(4.5rem, 8.5vw, 8rem); the tight variant clamp(3.25rem, 6vw, 5.5rem)). Sections alternate Paper and Tint bands; the last two run navy. Internal spacing follows an 8-step scale from 0.5rem to 5rem, with clamps for card padding (1.5rem to 2.25rem) and grid gaps (1.25rem to 2.5rem).

Grids are two-column by default and widen at content-specific breakpoints rather than one global set: 560px (form rows), 640px (pillars 2-up, footer nav 2-up), 700 to 999px (steps 2-up), 760px (work grid 2-up), 820px (detail split), 860px (services 2-up with the lead card spanning two rows; why-list 2-up), 900px (desktop nav, split section heads, footer top), 960px (about, FAQ, contact splits with a sticky FAQ head at 104px), 1000px (hero two-column 0.98fr/1.02fr, pillars and steps 4-up, horizontal timeline). Below 600px the hero buttons go full-width and preview aspect ratios tighten to 5:4.

The hero stage is the one element that leaves the container: from 1000px its gradient field bleeds to the right viewport edge (negative inset computed from gutter and container) with a 999px left radius; below that it is a 16px-radius block. The nav is sticky at 76px and picks up a hairline plus soft shadow once the page has scrolled 12px.

## Elevation & Depth

Hybrid: tonal bands (Paper, Tint, navy) carry the section structure, and soft offset shadows lift only the objects that sit on top of them: cards, panels, devices, the open menu. Shadows are always navy-tinted (rgba(11,31,58,…)), always offset downward, always with negative spread on the larger steps so they read as a shadow beneath rather than a halo around. Hover raises a card one step (`sh-1` to `sh-3`) with a 4px translateY. The dark contact section carries a decorative mint/azure radial field behind the copy; it is a ground, not an elevation device.

### Shadow Vocabulary
- **Resting card** (`box-shadow: 0 1px 2px rgba(11,31,58,0.06), 0 2px 6px rgba(11,31,58,0.04)`): services, work cards, ghost button hover.
- **Lifted panel** (`box-shadow: 0 6px 16px -6px rgba(11,31,58,0.12), 0 2px 6px rgba(11,31,58,0.05)`): lead service card, about panel, concept detail, open FAQ item.
- **Hover lift** (`box-shadow: 0 20px 40px -16px rgba(11,31,58,0.22), 0 6px 16px -8px rgba(11,31,58,0.10)`): card hover, the open mobile menu.
- **Device** (`box-shadow: 0 40px 70px -24px rgba(11,31,58,0.40), 0 12px 24px -12px rgba(11,31,58,0.20)`): tilted device mockups on the stage. The form on navy uses the same geometry in rgba(0,0,0,0.45/0.25).
- **Tile** (`box-shadow: 0 6px 14px -6px rgba(11,31,58,0.22)`): 44px icon tiles and 36px step numerals.
- **Primary pill** (`box-shadow: 0 1px 2px rgba(11,31,58,0.14), 0 10px 22px -10px rgba(217,58,31,0.28)`; hover `0 2px 4px … , 0 16px 30px -12px …`): the one shadow tinted with a chromatic color, still offset and negative-spread.

### Named Rules
**The Offset-Only Rule.** Every shadow has a y-offset and blur; none has zero offset. Depth is a lift, never a glow. Focus rings (2px outline at 3px offset; 3px Link Wash halo on fields) are the only zero-offset rings and they are state, not elevation.

## Shapes

A three-value radius map plus pills. Cards and inputs are gently rounded (8px); stages, the form, the concept detail, and the about panel are more generous (16px); icon tiles and browser mockups sit between (12px); every action, badge, tag, and toggle is a full pill (999px). Nested previews go concentric: a 6px preview inside an 8px card, a 23px screen inside a 30px phone bezel. Borders are 1px Line hairlines on white, 1px Navy Line on dark. Circles (16px check discs, 8px bullets, 28px FAQ toggles, 36px numerals, 38px close button) are the only fully round non-pill shapes. The hero stage's curved left edge (999px 0 0 999px, desktop only) is the signature silhouette; devices are rotated -6 to -11 degrees and overlap.

## Components

### Buttons
Confident, pill-shaped, and quiet in every variant except one.
- **Shape:** full pill (999px), 1px transparent border reserved so ghost and primary align.
- **Primary:** white 600 label on the vermilion-to-raspberry gradient, 0.95rem/1.6rem padding at 0.9375rem (hero and submit: 1.05rem/1.8rem at 1rem; nav and detail: `btn--sm` 0.7rem/1.2rem at 0.8125rem). Tinted offset shadow.
- **Hover / Focus:** hover adds a 10% white overlay, raises 1px, and deepens the shadow; the trailing arrow icon slides 3px right; active presses 1px down at 0.99 scale. Focus is the global 2px Link outline at 3px offset.
- **Ghost:** Ink on white with a Line border; hover darkens the border to 28% ink and adds the resting-card shadow. On navy: white text, transparent fill, Navy Line border, 6% white hover fill.
- **Link button:** Link color, 600, 0.9375rem, no fill, arrow slides 4px on hover. Used for "View our work" and "View concept".

### Chips
- **Badge:** 0.6875rem 600 uppercase at 0.06em, pill, Tint Deep fill with Muted text; the accent variant is Link on Link Wash. Sits inline after a card title.
- **Tag:** 0.75rem 600 uppercase at 0.04em, Link on Link Wash, pill. Marks the concept category on work cards and in the detail head.

### Cards / Containers
- **Corner Style:** 8px for content cards (services, work, FAQ); 16px for panels (about card, concept detail, form).
- **Background:** Paper; the lead service card runs a barely-there white-to-#F7F9FD vertical gradient with a 22% Link border.
- **Shadow Strategy:** resting card at rest, hover lift on hover with 4px rise and a 25% Link border; panels sit on lifted panel.
- **Border:** 1px Line.
- **Internal Padding:** clamp(1.5rem, 2.8vw, 2.25rem) for cards; clamp(1.25rem, 2.4vw, 1.75rem) for work card bodies; clamp(1.4rem, 3.2vw, 2.25rem) for the form.
- **Bullets:** 8px gradient discs; check items use 16px gradient discs with a white drawn tick.

### Inputs / Fields
- **Style:** Tint fill, 1px Line border, 8px radius, 0.85rem/1rem padding, 0.9375rem text; label above at 0.8125rem 600 with a Vermilion asterisk or a small uppercase "Optional".
- **Hover:** border to 24% ink.
- **Focus:** background to Paper, border to Link, 3px Link Wash halo, no outline.
- **Error:** Vermilion border, 16% vermilion halo on focus, Error Text message below at 0.8125rem. Status box: Link Wash fill with 25% Link border; error state swaps to 8% / 30% vermilion.
- **Select:** native appearance removed, chevron SVG in Muted Soft at right 1rem; placeholder state in Muted Soft.

### Navigation
- **Style:** sticky 76px bar, 92% white with saturate(160%) blur(12px) backdrop; `is-stuck` adds a Line hairline and soft shadow. Wordmark left (Ink, 1.25rem), four links centered at 0.9375rem 500 Ink Soft hovering to Link, small primary pill right.
- **Mobile (<900px):** links hide; a pill toggle ("Menu"/"Close", 0.8125rem 600, two 1.75px bars that cross) opens a fixed white sheet under the bar with 1.4rem 600 links separated by Line Faint hairlines, a full-width primary pill, and a centered email line. Sheet enters with an 8px rise over 280ms.

### Icon Tiles and Numerals
44px tiles at 12px radius on the bright gradient, holding 22px stroke icons (1.75 stroke, round caps) in white. Process steps use 36px gradient circles with 0.8125rem 700 tabular numerals, joined by a 2px dashed Line connector (vertical under 1000px, horizontal above).

### Device Stage (signature)
A gradient field (mint 0%, Stage Mid 45%, azure 100% at a pointer-driven angle around 118deg, plus a 22% white radial highlight top-left) holding three tilted devices: a browser card (16:10, 12px radius, -6deg, Tint Deep toolbar with traffic-light dots and an address pill) and two phones (9:18.6, 30px bezel in Ink, 7px inset, island, -9deg and -11deg). Each carries a concept preview and the device shadow. A caption pill (0.8125rem, white on 55% ink with blur) names them as concept interfaces; below 1000px the caption sits under the stage in Muted.

### Concept Previews (deliberate exception)
`.pv--sasso`, `.pv--halston`, `.pv--northline`, `.pv--apex`, `.pv--auburn`, and `.pv--kestrel` keep their own palettes because they depict client-style work rather than the VINCERE identity. Each preview is one structure plus a token block on its root (`--pv-ground`, `--pv-ink`, `--pv-accent`, `--pv-accent-ink`, `--pv-line`, and `--pv-tile-1..3` where a strip needs material swatches); two alternate skins per concept are second token blocks on `.pv--<key>[data-skin="<id>"]`, and nothing structural changes between them. Sasso alone sets a serif, Bodoni Moda (upright 500 for the wordmark, italic 400 for the headline), loaded on index.html for that preview only so it matches the full concept site. Their colors and type are not system tokens and must not be reused on VINCERE surfaces. What they share with the system: container-query type scaling, 12px radius (6px inside cards, 16px in the detail), and the pill/2px/6px radius choices that match each concept's own world.

### Skin Switcher
The concept detail's proof that a concept is a base, not a one-off: "Same structure, different skin" as a 0.8125rem Muted Soft label with a row of skin buttons, shown only when a concept lists two or more skins.
- **Skin button:** pill, 0.8125rem 600 Ink Soft on white, 1px Line border, 0.42rem/0.8rem padding (0.5rem on the swatch side). Hover darkens the border to 24% ink and adds the resting-card shadow.
- **Selected (`aria-pressed="true"`):** Link border, Link text, and a 3px Link Wash halo; the same ring the form fields use for focus.
- **Swatch:** an 18px circle split diagonally (135deg) into the skin's ground and accent, with a 12% ink inset ring so a white ground still reads.
- **Behavior:** the first skin is the default and clears `data-skin` on the cloned preview; others set it. The detail's action row (`.detail__actions`, wrapping, 0.75rem/1rem gap) pairs the small primary pill with a small ghost "Open the full concept" link that appears only when a concept has a full site and carries `?skin=<id>` so the site opens in the chosen look; its external-arrow icon slides 2px up and right on hover. Once opened, the panel is mounted inside the work grid after the trigger's row, spanning every column.

### Motion
One easing pair (`cubic-bezier(0.22,0.61,0.36,1)` standard, `cubic-bezier(0.16,1,0.3,1)` out-expo) and three durations (150ms, 280ms, 650ms). Hero content rises 18px over 900ms in a 90ms stagger; sections below rise 12px over 650ms once when they enter the viewport, staggered 60ms in groups of four; the stage angle follows the pointer by ±7deg on hover-capable devices; devices drift 8 to 12px on 9 to 11s loops; the concept detail rises 12px over 650ms. Everything is gated by a `.js` class so a missing script leaves the page visible, and `prefers-reduced-motion` collapses every animation and transition.

## Do's and Don'ts

### Do:
- **Do** reserve the vermilion-to-raspberry gradient (#D93A1F to #C8206A) for "Start a project" and its required-field marks; every other accent is Link or the mint-to-azure gradient.
- **Do** use the bright gradient pair for fills and the deep pair for text and links; put a solid Azure Deep fallback before any background-clip text.
- **Do** keep the radius map: 8px cards and inputs, 12px tiles and browser mocks, 16px stages, panels and the form, 999px for actions, badges, tags, and toggles.
- **Do** tint every shadow and hairline with Ink (#0B1F3A) at reduced alpha; on navy, use white at 12% for lines.
- **Do** cap running copy at 48 to 68ch and headings at 14 to 20ch, and set ledes in Onest 300 at Muted.
- **Do** gate every animation behind `.js` and collapse it under `prefers-reduced-motion`; motion rises 12 to 18px and never exceeds 900ms.
- **Do** keep the wordmark in Archivo 800 wide per `brand/README.md`; it is the only non-Onest text on a VINCERE surface.

### Don't:
- **Don't** add a second warm color, a coral hover, or a warm badge; the CTA gradient is the only warmth on the page.
- **Don't** use zero-offset glows, colored halos, or drop shadows in pure black on light surfaces; shadows are offset, blurred, negative-spread, and navy.
- **Don't** repeat gradient text beyond the one H1 keyword per surface.
- **Don't** reuse the concept previews' palettes (Sasso bronze, Halston monochrome, Northline teal, Apex orange, Auburn copper, Kestrel yellow) or any of their skins, or Bodoni Moda, anywhere on a VINCERE surface.
- **Don't** introduce pure grey neutrals, black text, or a second sans; every neutral is navy-biased and every glyph is Onest.
- **Don't** fabricate proof devices (logos, ratings, counts, testimonials) as components; the system has no slot for them by design.
