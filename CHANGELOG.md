# Changelog

Versions of the published brand kit. Projects pin to a tag (e.g. `v2.0.0`); bump it to take an update.

## 2.1.0 — 10 November 2026

- **Form alignment fix.** Fields now have three fixed rows (label, control, message) with the message row always reserved, and a new `.xd-form` layout lines fields up across each row. A hint, a validation error or a label that wraps no longer pushes a field out of line with its neighbours, and showing an error no longer shifts the layout. New tokens: `--xd-field-gap`, `--xd-field-label-lh`, `--xd-field-msg-lh`, `--xd-form-col-gap`, `--xd-form-row-gap`. To pick up the fix, lay forms out in `.xd-form`.
- **New Trademark component.** `<xd-trademark mark="growth-reengineering">` and `mark="reengineering-for-growth">` render Growth (re)Engineering™ and (re)Engineering for Growth™. Their ™ stays small only in H1/H2 display headings and is a legible size everywhere else (70% of the text, never under 11px). The script also applies this to the two statements in plain text.

## 2.0.0 — 5 November 2026

First published version of X.D Brand V2, approved for the website.

- V1 colour families with the iris accent, cool daylight ground (replaces V1 tan), Night theme.
- Fonts: Momo Trust Display (headings), Onest (body), Spline Sans Mono (eyebrows), Tiny5 (pixel numerals).
- Vector logo, lockups and app box with the conic sweep on hover; page loader.
- 32 components across Brand, Website, Survey and Dashboard, including Partner marks.
- Logos, 36 duotone icons, partner marks (Microsoft Solutions Partner, Dicker Data, Cognitive View) and ambient imagery.
- `dist/brand.css`, `dist/brand.js`, `dist/tokens.css`, `dist/fonts.css`, `dist/tokens.json` for projects to load.
