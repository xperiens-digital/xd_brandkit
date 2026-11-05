# X.D brand kit

The Xperiens Digital brand kit and design system, mirrored from the Claude Design project **"x.d brand kit"** (https://claude.ai/design/p/ecb7b4a3-89dc-427d-8053-63ca0e689606).

Claude Design is the source of truth for V1. This repo is the place other projects and agents connect to for X.D brand assets.

## Brand V2

`v2/` holds a one-way backup of the **X.D Brand V2** design system artifact (https://claude.ai/artifact/RiVU2vDkEo4LJR9UUGnpNF): brand book (`README.md`), imagery guide, `tokens.json`, 31 components with previews and `components/bundle.{css,js}`, fonts (Momo Trust Display, Onest, Spline Sans Mono, Tiny5), logos, icons and ambient imagery. The artifact is the source of truth; edit there, then back up here.

## Brand V1

## Where to look

| You need | Look at |
| --- | --- |
| Brand rules (logo, colour, type, service artwork, backgrounds, components, applications) | `Xperiens Brand Guidelines.dc.html` |
| Design tokens (colours, type, spacing, motion, interactions) | `_ds/xperiens-digital-design-system-…/tokens/*.css`, imported by `styles.css` |
| Brand book summary (voice, visual foundations, iconography, logo rules) | `_ds/xperiens-digital-design-system-…/readme.md` |
| Fonts (Figtree 300–900 with italics, Bytesized) | `_ds/xperiens-digital-design-system-…/assets/fonts/` |
| Primary logo lockup (x.d mark above XPERIENS DIGITAL) | `assets/xd-lockup-3a.svg` |
| Favicon and light lockup | `exports/` |
| The x.d mark as a single SVG path | `xd-vector-path.json` |

`.dc.html` files are Claude Design canvases. Open them in Claude Design for the full, interactive view.

How V2 backups and V1 refreshes work is in `CLAUDE.md`.
