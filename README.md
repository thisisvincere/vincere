# VINCERE — Website

Production-ready marketing site for VINCERE.
Static HTML, CSS and vanilla JavaScript — no build step, no framework, no dependencies.

```
vincere/
├─ index.html                    One-page site
├─ favicon.svg                   Wordmark symbol (scalable, works light + dark)
├─ robots.txt
├─ sitemap.xml
├─ site.webmanifest
├─ README.md
├─ brand/                        Logo source files (see brand/README.md)
├─ concepts/                     Full concept sites = the reusable template library
│  └─ sasso/                     Restaurant base: index.html, sasso.css, sasso.js, DESIGN.md
└─ assets/
   ├─ css/styles.css             Design system + all section styles
   ├─ js/main.js                 Nav, menu, reveals, concept detail + skin switcher, form
   └─ img/
      ├─ og-image.png            1200×630 social share card
      └─ apple-touch-icon.png    180×180
```

---

## Running it

Open `index.html` directly, or serve the folder:

```powershell
python -m http.server 8000
# then http://localhost:8000
```

All internal paths are relative, so it works from a subdirectory or the domain root.

---

## Before launch — required steps

### 1. Wire up the contact form

The form currently has **no backend**. This is deliberate — no endpoint was invented.

Open [assets/js/main.js](assets/js/main.js) and find the block marked
`>>> FORM SUBMISSION INTEGRATION POINT <<<` (in the `contactForm` section). Set:

```js
var ENDPOINT = 'https://your-form-service.example/f/xxxxx';
```

Any service that accepts a JSON `POST` will work — Formspree, Basin, Netlify Forms,
Vercel functions, or your own API. The payload is:

```json
{ "name": "", "business": "", "email": "", "website": "", "need": "", "message": "" }
```

**Until an endpoint is set**, the form validates normally and then opens the visitor's
email client with everything pre-filled and addressed to `hello@thisisvincere.com`. That way
the form produces a real lead instead of silently failing — but a proper endpoint is
better, because it works for people without a configured mail client.

The form also includes a honeypot field (`company_url`) that silently rejects naive bots.

### 2. Domain

The live domain is `https://www.thisisvincere.com/`, already set in:

- `index.html` — canonical link, Open Graph `og:url`, `og:image`, `twitter:image`, JSON-LD
- `robots.txt` — sitemap line
- `sitemap.xml` — `<loc>`

### 3. Update the sitemap date

`<lastmod>` in `sitemap.xml` should reflect the real launch date.

---

## Design system

The visual world is the "bright agency page" — the category standard, chosen deliberately in
the September 2026 restyle and executed at the craft level of smultron.software (warmth,
composition), Linear and Stripe (precision). **The authoritative record is
[DESIGN.md](DESIGN.md)** (with machine-readable tokens in `.impeccable/design.json`); the
summary below is for orientation. Everything is a custom property at the top of
[assets/css/styles.css](assets/css/styles.css).

**Color**

| Token | Value | Use |
|---|---|---|
| `--bg` / `--tint` | `#FFFFFF` / `#F5F7FB` | White sheet; cool band for alternating sections |
| `--ink` | `#0B1F3A` | Navy text; also the dark contact/footer ground |
| `--muted` | `#4B5B73` | Secondary copy (6.5:1 on white) |
| `--g1 → --g2` | `#19B394 → #2D7CF6` | The one gradient: hero stage, icon tiles, checks |
| `--gt1 → --gt2` | `#0E8F74 → #1F63D6` | Deeper variant for the H1 keyword (≥4:1) |
| `--link` | `#1F63D6` | Links, tags, secondary actions (5.5:1 on white) |
| `--c1 → --c2` | `#D93A1F → #C8206A` | Worn only by "Start a project" — deepened from the reference's coral so white label text clears AA |

**Type** — Onest for everything: 700 headings with tight tracking, 400/500 body, 300 for
ledes at 18px and up. The wordmark stays Archivo 800 wide (see Logo). All sizes use
`clamp()` and scale fluidly.

**Shape** — 8px cards, 16px stage / form / panels, pill actions. Shadows always carry an
offset and a soft blur; no colored glows.

**Motion** — one clock: the hero arrives in a stagger and the three devices drift; the stage
gradient follows the pointer by a few degrees; sections rise 12px once on scroll. All of it
is gated behind `prefers-reduced-motion`.
---

## Logo

Wordmark "Ascendente": a drawn, solid V whose right arm rises past the cap line, followed by
INCERE set in Archivo 800 (width 112). One color only — black on light, white on dark. The
navbar and footer inline the V as SVG with `currentColor` and load Archivo as a five-letter
subset (`&text=INCERE`), so the logo costs ~2 KB.

Production files (SVG with embedded font, PNG, symbol, tiles) and the geometry are in
[brand/](brand/) — see [brand/README.md](brand/README.md). The same V is used in `favicon.svg`,
`apple-touch-icon.png`, and `og-image.png`. The alternative direction "Amêndoa" is kept in
`brand/01-amendoa/`.

---

## Content integrity

The site deliberately contains **no fabricated credibility**. There are no client logos,
testimonials, reviews, star ratings, project counts, revenue figures, awards, years of
experience, team sizes, partnerships, offices, addresses, or phone numbers.

The six portfolio pieces are labeled **"Selected concepts"** throughout, and the section
intro plus every detail panel states plainly that they are self-initiated demonstrations, not
client work. Keep that framing until there is real client work to replace it with.

Pricing is intentionally unpublished — the FAQ explains that projects are quoted after a
conversation about scope.

The only contact details used anywhere are `hello@thisisvincere.com`, `@_thisisvincere` on Instagram,
and the domain.

---

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) and a skip link
- One `h1`; `h2` per section; `h3` for items within
- Every form control has a real `<label>`; errors use `aria-describedby` + `aria-invalid`
- Visible `:focus-visible` rings everywhere, never removed
- Mobile menu manages `aria-expanded`, closes on `Escape`, restores focus
- "View concept" expands an inline panel below the grid rather than a modal — nothing
  about viewing a concept needs to interrupt the page or trap focus. The trigger carries
  `aria-expanded`/`aria-controls`, `Escape` closes, and focus returns to the trigger
- FAQ uses native `<details>`/`<summary>` — keyboard accessible with zero JavaScript
- `prefers-reduced-motion: reduce` disables all reveals, floats, and smooth scrolling
- Decorative mock interfaces are `aria-hidden`; the hero has a screen-reader caption

## Performance

- No frameworks, no animation libraries, no icon packs — icons are inline SVG
- No raster images in the page itself; the hero mock and all four concept previews are
  built from HTML and CSS, so they cost nothing to download and scale perfectly
- One CSS file, one deferred JS file (~9 KB unminified)
- Fonts preconnected and preloaded with `display=swap`
- Scroll handler is `requestAnimationFrame`-throttled and passive; reveals use
  `IntersectionObserver` and unobserve after firing
- Animations are limited to `opacity` and `transform` (compositor-only)

If JavaScript fails to load, the page renders completely — the hero entrance only applies
once the `js` class is set on `<html>`. Motion is deliberately limited to one authored
moment (the hero stagger and the slow drift of the mock); no other section animates on
entry.

---

## Design review (Impeccable)

The site was passed through the [Impeccable](https://github.com/pbakaus/impeccable)
`polish` playbook and its mechanical detector. Everything material was fixed. Two classes
of findings are intentionally left open:

- **`cramped-padding` (26 warnings)** — false positives. The static analyzer does not
  resolve `padding-block`, `clamp()`, or `var()`, so every section, ruled list item, and
  card wrapper reads as zero-padded. Rendered output confirms the spacing.
- **`codex-grid-background` (advisory)** — the faint grid in the hero. The brief explicitly
  asked for "grid details" in the hero visual, so it stays.

To re-run: `.claude\skills\impeccable\scripts\impeccable.cmd detect --json index.html assets/css/styles.css`

---

## Concepts and the template library

The home page shows six concept sites, one per segment (restaurant, barber shop, dental
practice, automotive service, hair salon, service contractor). The public site deliberately
shows **one concept per segment**, never a catalog of variants: VINCERE is positioned as a
technology company, not a template shop. Variety is shown a different way — the detail panel
has a **skin switcher** ("same structure, different skin") that swaps the preview's token block.

**How previews and skins work.** Every preview in `styles.css` (section 11) is one structure
plus a token block: `--pv-ground`, `--pv-ink`, `--pv-accent`, `--pv-accent-ink`, `--pv-line`.
A skin is a second token block on `.pv--<concept>[data-skin="<id>"]`; the skin list and
swatches live in `PROJECTS` in `main.js`. Add a skin by adding one CSS block and one entry.

**Full concept sites** live in `concepts/<name>/` and are the internal starting points for
client work. Each carries its own stylesheet, tokens, skins (`?skin=<id>` in the URL, or
`data-skin` on `<html>`), and a `DESIGN.md`. They are fictional businesses, say so in their
footer, and are `noindex` — do not add them to `sitemap.xml`. When a concept has a live page,
set `url` on its `PROJECTS` entry and the detail panel shows "Open the full concept",
carrying the selected skin. To start a client site from a base: copy the folder, replace the
token block (or add a skin), swap the placeholder photography, edit the hours table in the
script and the HTML, and wire the form to the client's booking system.

---

## Extending the site

When it's time for more pages (individual case studies, a services detail page, a blog),
the tokens and component classes in `styles.css` carry over as-is. Split `styles.css` into
`tokens.css` + per-section files at that point, and add each new URL to `sitemap.xml`.
