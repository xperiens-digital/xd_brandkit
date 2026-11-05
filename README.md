# X.D brand kit

The Xperiens Digital brand kit and design system. Other projects and agents connect here for X.D brand assets.

## Brand V2 (current) — `v2/`

A one-way backup of the **X.D Brand V2** design system artifact (https://claude.ai/artifact/RiVU2vDkEo4LJR9UUGnpNF). The artifact is the source of truth: edit there, then back up here.

| You need | Look at |
| --- | --- |
| Brand book (voice, logo, colour, type, components) | `v2/README.md` |
| Imagery and ambient textures guide | `v2/Imagery.md` |
| Design tokens | `v2/tokens.json` |
| Components (32, with previews) | `v2/components/`, bundled in `components/bundle.{css,js}` |
| Fonts (Momo Trust Display, Onest, Spline Sans Mono, Tiny5) | `v2/fonts/` |
| Logos, icons, imagery | `v2/assets/Logos/`, `v2/assets/Icons/`, `v2/assets/Imagery/` |
| Partner marks (Microsoft Solutions Partner, Dicker Data, Cognitive View) | `v2/assets/Partners/` |
| Index of the whole system | `v2/design-system.json` |

## Using the brand kit in a project

Load the brand from here; don't copy it. Pin a version so brand changes reach each project only when you choose.

**Websites and apps with npm (e.g. the Next.js site):**

```
npm install github:xperiens-digital/xd_brandkit#v2.0.0
```

```css
@import "@xperiens-digital/brand-kit/brand.css";   /* fonts + tokens + component styles */
```

```js
import "@xperiens-digital/brand-kit/brand.js";     /* <xd-mark>, <xd-icon>, survey and dashboard elements, window.XD */
```

Only need colours and spacing? Import `tokens.css` (and `fonts.css`) instead of `brand.css`. Logos, icons, partner marks and imagery are under `@xperiens-digital/brand-kit/assets/...`.

**Plain HTML, HubSpot pages, prototypes (no build step):**

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/xperiens-digital/xd_brandkit@v2.0.0/dist/brand.css">
<script src="https://cdn.jsdelivr.net/gh/xperiens-digital/xd_brandkit@v2.0.0/dist/brand.js"></script>
```

**To take a brand update:** change the version (`#v2.0.0` → `#v2.1.0`), check the preview, merge. What changed in each version is in `CHANGELOG.md`.

| File in `dist/` | What it is |
| --- | --- |
| `brand.css` | Everything: `@font-face`, tokens (light and Night themes via `data-theme`), component styles |
| `brand.js` | The custom elements and `window.XD` |
| `tokens.css` / `fonts.css` | Tokens only / fonts only |
| `tokens.json` | Tokens as data, for tools and scripts |

`dist/` is generated from `v2/` by `scripts/build.py`. Never edit either by hand.

## Brand V1 (deprecated) — `v1-deprecated/`

The original brand kit, mirrored from the Claude Design project **"x.d brand kit"** (https://claude.ai/design/p/ecb7b4a3-89dc-427d-8053-63ca0e689606). Kept for reference only; use V2 for new work.

| You need | Look at |
| --- | --- |
| Brand rules (logo, colour, type, service artwork, backgrounds, components, applications) | `v1-deprecated/Xperiens Brand Guidelines.dc.html` |
| Design tokens | `v1-deprecated/_ds/xperiens-digital-design-system-…/tokens/*.css` |
| Brand book summary | `v1-deprecated/_ds/xperiens-digital-design-system-…/readme.md` |
| Fonts (Figtree, Bytesized) | `v1-deprecated/_ds/xperiens-digital-design-system-…/assets/fonts/` |
| Primary logo lockup | `v1-deprecated/assets/xd-lockup-3a.svg` |
| Favicon and light lockup | `v1-deprecated/exports/` |
| The x.d mark as a single SVG path | `v1-deprecated/xd-vector-path.json` |

`.dc.html` files are Claude Design canvases. Open them in Claude Design for the full, interactive view.

How V2 backups and V1 refreshes work is in `CLAUDE.md`.
