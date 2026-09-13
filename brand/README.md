# VINCERE — brand files

Two wordmark directions from the exploration round, saved as production files.
**04 Ascendente is the one in use on the site.** 01 is kept as the approved alternative.

```
brand/
├─ 04-ascendente/      ← in use
│  ├─ vincere-wordmark-black.svg / .png   full wordmark, black on transparent
│  ├─ vincere-wordmark-white.svg / .png   full wordmark, white on transparent
│  ├─ vincere-symbol-black.svg            the V alone, black
│  ├─ vincere-symbol-white.svg            the V alone, white
│  ├─ vincere-tile-dark.svg / .png        V on a rounded dark tile (app icon, favicon, avatar)
│  └─ vincere-tile-light.svg / .png       V on a rounded light tile
└─ 01-amendoa/         ← alternative
   └─ same set
```

PNGs are 2400 px wide (wordmarks) and 1024 px (tiles), transparent background.

## What each mark is

**04 Ascendente.** The V is drawn: a solid letter whose right arm rises past the cap line,
so the letter is also the upward gesture. INCERE is set in Archivo 800 at width 112.
One color, always. This is the V used in `favicon.svg`, `apple-touch-icon.png`, and `og-image.png`.

**01 Amêndoa.** The V is drawn with a solid almond resting in its counter — the founder's
surname means "almond" — and INCERE is set in Hanken Grotesk 700 with slightly tight tracking.
One color, always.

## How the SVGs are built

The V (and the almond) are real vector paths. The letters INCERE are live text with the
typeface **embedded inside the file** as a base64 WOFF2 subset containing only the five glyphs
needed (1.9 KB for Archivo, 1 KB for Hanken). That means:

- In any browser, or anywhere that renders SVG with a web engine (Figma import, most CMSs,
  email clients that accept SVG), the file renders exactly right with no external dependency.
- In Adobe Illustrator or Inkscape the embedded web font is **not** read. The text will fall
  back to whatever font is installed. Before editing there, install the face
  (Archivo / Hanken Grotesk are free on Google Fonts) and convert the text to outlines.
- The PNGs are already rasterized and work everywhere.

Geometry, for anyone re-drawing the marks by hand (100 units = cap height, y=100 is the baseline):

```
04 V:   M0 0 H24 L50 59 L83 -18 H106 L56 100 H44 Z     (viewBox 0 -18 106 118)
01 V:   M0 0 H17 L50 75 L83 0 H100 L56 100 H44 Z        (viewBox 0 0 100 100)
01 seed: M50 6 C61 17, 63 32, 50 46 C37 32, 39 17, 50 6 Z
```

The arm widths were matched to each typeface's measured stem so the drawn V has the same
weight as the typed letters.

## Using the wordmark on the site

The navbar and footer don't load an image; they inline the V as SVG and set INCERE in Archivo,
loaded as a five-letter subset from Google Fonts (`&text=INCERE`). See `.logo` in
`assets/css/styles.css`. Cap height for Archivo 800 is 0.69 em, which is why the V's height is
`calc(0.69em * 1.18)`.

## Rules

- One color. Black on light, white on dark. No accent color inside the mark.
- Don't set VINCERE in the wordmark font as plain text; the drawn V is the mark.
- Minimum size: the wordmark reads down to ~14 px cap height; below that, use the tile.
- Keep clear space of at least the height of the V's cap on every side.
