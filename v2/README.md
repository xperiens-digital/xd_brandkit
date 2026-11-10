# X.D Brand V2

The second-generation design system for Xperiens Digital (X.D). V2 keeps what people already know us by, the pixel x.d mark, the V1 pastel families and the conic sweep that turns on hover, and fixes what made V1 feel one-dimensional: the warm tan ground that read too close to Claude's taupe, the single Figtree voice, loosely spaced logo lockups, and a component set that stopped at the marketing site.

**Status: approved for the website, 5 Nov 2026 (Ben Dexter).** Published as `@xperiens-digital/brand-kit` v2.0.0 from the public repo github.com/xperiens-digital/xd_brandkit; projects load it from there rather than keeping copies. V1 stays live on xperiens.digital until the website switch-over.

## What changed from V1

| | V1 | V2 |
|---|---|---|
| Ground | Warm tan `oklch(96.5% .014 78)` | Cool daylight `ground` #F5F7FC, white `surface` cards |
| Type | Figtree for everything | Momo Trust Display (headings), Onest (text), Spline Sans Mono (eyebrows and data), Tiny5 (pixel numbering) |
| Colour | Pastel service gradients on tan | The same V1 pastel families and sweep on a cool ground, plus a strong iris accent for interaction, a validated six-slot chart palette and a dark theme |
| Logo | Mark on tan; lockups at fixed sizes; ink (near-black) version | Vector mark and lockups built on the pixel module; conic versions that turn on hover; navy as the darkest version, no black |
| Imagery | Stock photography | Generated ambient textures in the V1 palette, owned by X.D: grain mesh for services, dot and dither combinations for heroes and Insights |
| Icons | ~50 single-ink line icons | 36 duotone icons (2px round stroke plus one tint shape) with hover motion |
| Radius | 6px everywhere | 10 / 14 / 20 / 28 / pill: softer, friendlier |
| Components | Marketing site only | Website, survey and dashboard sets, as framework-free web components |

## Content fundamentals

V2 changes the look, not the voice. The writing rules in CLAUDE.md still hold:

- Direct, outcome-first, specific. "A working prototype on your own process within 3 business days", not "unlock transformative AI value".
- Second person to prospects, "we" for the firm. Sentence case; uppercase only for short mono eyebrows (OPERATIONAL INTELLIGENCE).
- No emoji, no hype adjectives, no AI evangelism. Australian English. Prices ex GST, stated. Experience is always "25+ years".
- Survey questions are one idea each, plain words, and say why we are asking when it is not obvious. Answer labels are complete phrases ("Strongly agree"), never bare numbers except on NPS and rating scales.
- Dashboard labels name the measure and unit ("Hours saved / month"). Every illustrative number in this system is placeholder; never present it as a client result.

"Fun" in V2 comes from colour, shape and motion, not from jokes in the copy.

## Visual foundations

### Colour

- **Ground and surfaces.** `ground` is the page; `surface` is anything that sits on it (cards, inputs, nav, modals); `panel` is a quiet fill for tracks and unselected options. Text is `ink` (16:1), `ink-muted` (7:1) or `ink-faint` (4.7:1, hints only).
- **Navy.** `night` (#18214D) is the darkest X.D blue: the app box, the logo's dark versions, footer, CTA banners, toasts and tooltips. Text on it is `on-night` or `on-night-muted`. There is no black in the system.
- **V1 families, unchanged.** `discover-1`…`4`, `govern-1`…`4`, `transform-1`…`4` and `enable-1`…`3` keep their V1 values, and the V1 service gradients (`--discover-gradient` and so on, in the component stylesheet) are verbatim. Pastel fills take `on-pastel` (navy) text in both themes.
- **The sweep.** The V1 conic sweep (from 200°: periwinkle, lavender, blush, peach, sage) is the brand's signature. As in V1 it turns on hover: the mark, spectrum buttons, card edges, the hero orb and the CTA ring all start turning when pointed at, and stop when left. Only loaders turn on their own. The stops are exactly those of the live site: `sweep-blue`, `govern-1`, `discover-2`, `transform-1`, `enable-1`.
- **Iris for interaction.** `brand` (#4F5FF0) is the strong purple accent: primary buttons, selected states, focus. `brand-ink` is its text-safe form for links; `brand-tint` backs selections and the focus halo.
- **Service families.** Each service takes a V1 family (`svc-<key>-a`, `svc-<key>-b`) for its icon tint and card blob. Never mix two families in one gradient.

| Service | Key | V1 family |
|---|---|---|
| Growth (re)Engineering™ | `reengineer` | Transform: periwinkle, apricot |
| Operational Intelligence Program | `intel` | Discover: soft periwinkle, blush |
| Microsoft AI Cloud Solutions | `cloud` | Enable: sage, honey |
| AI Governance | `govern` | Govern: lavender, sage |
| AI-enabled Innovation & Development | `innovate` | blush, apricot |

Service names follow Capability Statement v1.0 (14 Oct 2026). Check the live site before using them in public copy. Growth (re)Engineering™ and (re)Engineering for Growth™ are trademarks and always carry ™. Write the two statements with the Trademark component (`<xd-trademark mark="growth-reengineering">` / `mark="reengineering-for-growth">`): their ™ is small only in H1/H2 display headings and a legible standard size everywhere else (70% of the text, never under 11px). Any other ™ is set small and raised: the component script wraps every ™ in `.xd-tm` automatically, and gives the two statements their legible ™ even in plain text. Call `XD.tm(element)` for content rendered outside the page's normal flow.

- **Data.** `chart-1` to `chart-6` are the categorical series colours, assigned in that fixed order and never cycled; iris and pumpkin (`chart-2`) are the default pair for two-series charts. They were run through a colour-vision-deficiency validator in both themes. `chart-4` (amber) is under 3:1 on white, so every chart carries a legend or direct labels. `good`, `warning` and `critical` are status only, always with a word or icon.
- **Dark theme ("Night").** Every neutral has its own dark value, chosen and checked against the dark ground rather than inverted; the V1 pastels keep their values.

### Typography

- **Momo Trust Display** (Google Fonts, shipped as a font file), single weight, for display and headings: rounded, friendly and business-like, and rarely seen.
- **Onest** (Google Fonts), 400–600, for body, labels and buttons: open, highly legible at small sizes, pairs cleanly with Momo Trust Display.
- **Spline Sans Mono** for uppercase eyebrows, table headers, step counters and tabular figures.
- **Tiny5** (Google Fonts, shipped as a font file), the pixel face, for numbering only: stage and step boxes in proposals, decks and the site (01, 02, 03) and oversized numerals. It replaces Bytesized. Never headings or running text.

All four faces ship as font files in this system (so they render correctly here and in documents). On the web, load them with one request: `https://fonts.googleapis.com/css2?family=Momo+Trust+Display&family=Onest:wght@300..800&family=Spline+Sans+Mono:wght@400..600&family=Tiny5&display=swap` (the component stylesheet already imports it). For PDFs, self-host the TTFs as the document pipeline requires.

### Shape, depth and motion

- Radii step up with size: `radius-sm` controls, `radius-md` inputs and choice tiles, `radius-lg` cards, `radius-xl` hero, banners and modals, `radius-pill` buttons, chips and nav.
- Cards are flat with a `hairline` outline at rest. Depth arrives on interaction: `shadow-lift` plus a 4px rise.
- Motion is springy and short (250–400ms, a slight overshoot) for direct feedback: buttons lift and squish, tiles tilt, ticks pop. The sweep turns on hover, never ambiently, except in loaders. Everything stops under `prefers-reduced-motion`.
- The **pixel motif** from the mark appears as small rounded squares: dividers, the loader, the hero pixel cluster, status markers, the maturity staircase and confetti.

## Logo

The mark and lockups are inline vector SVG drawn from the canonical pixel path, with the wordmark outlined to paths, so they are sharp at every size and identical in every medium. Full rules are on the Logo and Logo construction component pages.

- **Module.** m = one pixel cell of the mark. Clear space is 1m on every side.
- **Stacked lockup.** Wordmark set to the mark's exact width, 1.5m below it.
- **Row lockup.** Wordmark cap height = 1m, centred vertically on the mark, 2.5m after the mark.
- **Behaviour (as on the live site).** The mark rests in solid darkest blue (white on navy) and fills with the turning conic sweep on hover (Brand Board 3j). `spin` turns it continuously (3f); the page loader adds the V1 soft pulse. Static versions: sweep, app box (navy rounded square, 22% radius), navy (#18214D) and white. There is no black version.
- **Animated versions.** `-spin` SVGs in the Logos group turn the sweep on their own, for places without script (email signatures, slides, holding pages). On the web use `<xd-mark>`, which turns on hover.
- **Page loader.** The mark assembles pixel by pixel while the sweep turns (`<xd-page-loader>`, or `xd-loader.svg`).
- Minimum sizes: mark 16px tall, row lockup 24px, stacked lockup 40px mark height, app box 28px. Never recolour, outline, shadow, stretch or rotate the mark.

The V1 document lockup (Brand Board 3a) stays in use for PDFs until a V2 document style is approved.

### Partner marks

Microsoft Solutions Partner, Dicker Data and Cognitive View carry over unchanged from V1 (the **Partners** asset group). They are single colour only, grey on light grounds and light grey on navy, at 44px optical height (stacked lockups 88px) with at least 48px clear space. They never take a brand hue, the sweep or animation. See the Partner marks component.

## Imagery

Generated ambient textures replace stock photography; the Imagery section has the rules. In short: grain mesh is locked for the five service pages, six dot and dither combinations cover hero banners, and the same six in three colourways cover Insights headers and cards. Colour sits right, copy sits on the calm left.

## Iconography

36 icons on a 24px grid, 2px stroke with round caps and joins, each with **one** tint shape behind the stroke (the duotone). Stroke takes `currentColor`; the tint defaults to `brand-tint` and takes the service hue inside service cards (`--xd-icon-tint`). Inside an `.xd-iconbox` the icon tilts and its tint pops on hover.

Rules: icons label things, they do not decorate them. One icon size per row (20px in buttons, 24px inline, 28px in icon boxes). Icon-only buttons need an `aria-label`. New icons follow the same grid, stroke and one-tint rule. The **Icons** asset group holds static SVGs (ink stroke, iris tint) for documents and slides.

## Components

Framework-free custom elements and CSS classes, so they drop into the Next.js site, a plain HTML survey, HubSpot pages or an X.D OS dashboard. Load `tokens.css`, `components/bundle.css`, then `components/bundle.js` (it defines the elements and `window.XD`).

- **Brand:** Logo (`<xd-mark>`), Logo construction, Page loader (`<xd-page-loader>`), Partner marks, Trademark (`<xd-trademark>`), Icon (`<xd-icon>`), Divider and inline loader.
- **Website:** Button, Chip and status, Service card (grain mesh art), Numbered tile, Nav, Hero, Hero banner (texture), Insights article header, Form fields, FAQ, CTA banner, Modal, Toast (`XD.toast()`), Footer, Insight card.
- **Survey:** progress (`<xd-progress>`), choice tiles (`<xd-choices>`), NPS / Likert / rating (`<xd-scale>`), maturity staircase (`<xd-maturity>`), slider (`<xd-slider>`). Every input fires `change` with `detail.value`; `XD.burst(el)` celebrates a finished survey.
- **Dashboard:** KPI tile with sparkline (`<xd-kpi>`), progress ring (`<xd-ring>`), OKR card (`<xd-okr>`), grouped bars (`<xd-bars>`), readiness radar (`<xd-radar>`), data table (`.xd-table`).

Each component page carries its guidelines and a live preview in both themes.

## Accessibility

- Text pairs meet 4.5:1 in both themes; status and series colours always come with a label, legend or icon.
- Survey controls are real buttons with `radio`, `radiogroup` and `aria-pressed` semantics and work from the keyboard; the FAQ and modal use native `<details>` and `<dialog>`.
- Focus is always visible: a 3px `focus` ring with a 2px offset.
- All motion respects `prefers-reduced-motion`.

## Open decisions for Ben

1. Whether V2 replaces the document house style (Branded Documents Skill v2) or stays web-first for now.
2. Website switch-over: the site loads the brand kit package by version and drops its vendored `x.d brand kit/` folder and copied tokens; `xperiens-brand-tokens` is retired.
