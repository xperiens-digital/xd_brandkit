# Xperiens Digital Design System

Xperiens Digital (x.d) is an Australian AI and digital transformation advisory helping organisations identify, govern and realise measurable business value from AI and modern digital technologies. Melbourne-based, founded by Ben Dexter (GAICD). Fundamentally people-first — email signatures carry an Acknowledgement of Country (Wurundjeri Woi Wurrung and Bunurong peoples), a marker of how seriously the brand takes that value.

Four services structure everything the brand says and shows, each with its own colour family and a bespoke line icon:
- **Discover** — AI value & transformation diagnostic
- **Govern** — responsible AI governance advisory
- **Transform** — digital transformation programme management
- **Enable** — Microsoft AI business solutions

One product surface exists today: the **marketing website** (nav, hero, services, pricing, FAQ, contact form, footer). No app or docs product was supplied.

## Sources
This system was built from:
- `xperiens-digital/xperiens-brand-tokens` (GitHub, private) — `design-tokens.json`, a full brand-board DC (logo, palette, type scale, buttons, service artwork/icons, backgrounds, dividers, loading state, 404, email signature), and a website-components DC (nav, hero, footer, cards, pricing, FAQ, forms, chat, banners, cookie notice, video block).
- Uploaded Figtree (weights 300–900 + italics) and Bytesized TTF files.

Explore the GitHub repo directly for more detail/history than is captured here — the brand-board DC in particular documents motion and rationale this readme summarises.

## Content fundamentals
- Voice is direct and outcome-first: "Cutting model risk review time by 40%", "Diagnostics that lead to a roadmap, not a report." Confident, unembellished, no hype adjectives.
- Second person to prospects ("What's your biggest AI challenge right now?"), first person plural for the firm ("We build the guardrails before the pilot, not after the incident").
- Sentence case throughout, except short uppercase eyebrows/labels (SERVICES, NOTE, MOST POPULAR) which use letter-spacing, never bold colour blocks.
- No emoji anywhere. No stock enthusiasm ("amazing", "revolutionary") — copy leans on specifics (timeframes, percentages, named methodologies) over adjectives.
- Governance and trust are constant undertones: "board-ready", "responsible", "guardrails", "operating model" recur across services.

## Visual foundations
- **Colour**: ink `#131826` (near-black navy) is the one constant text/ground colour; `oklch(96.5% 0.014 78)` warm tan is the primary light ground, `#f5f1ea` a slightly cooler panel surface for cards/inputs. Each service owns a 4–5-stop pastel-to-saturated gradient family (see Colors cards) — these never mix across services within one gradient.
- **Type**: Figtree for everything except the wordmark. Bold/700 for all headings (56/36/28px scale), Regular/400 17px body, Medium/500 14px secondary copy in subheading grey `#5c6b7a`, Semibold/600 uppercase with wide tracking for eyebrows and tile labels. Bytesized (monospace pixel display face) is reserved for the "x.d" wordmark and large numerals (404, stat callouts) — never body text.
- **Backgrounds**: three tiers. (1) Saturated per-service gradients (radial/linear/conic) on tiles, hero sections and CTAs, always with a subtle animated SVG-turbulence grain overlay for texture (grain sits at ~.55 opacity on tiles). (2) "Nebula" — large, heavily blurred (50px), slow-morphing blob pairs at ~10–24% opacity on a near-cream base, safe to sit behind text; blobs now drift further per cycle and shift a little toward the cursor on hover (mouse-reactive parallax, resets on mouse-leave). (3) "Ambient" full-bleed — the same per-service gradients diffused looser and slower (26s vs 9s drift) for hero/section-divider backing at scale, grain here runs more prominent (~.6 base opacity) than on tiles since it's the sole texture at that scale.
- **Motion**: a signature conic-sweep gradient (rotating through the full service-colour family) is the one recurring animation — it fills the wordmark as a loading state, sweeps into button fills/borders/underlines on hover, and drifts within the grain texture. Everything else is simple ease-in-out opacity/transform (0.25–0.35s) — no bounce, no spring.
- **Hover/press**: primary buttons fill with the conic sweep and flip text to ink; secondary buttons sweep their border; ghost nav links sweep an underline in from the left. Cards lift 4px with a soft shadow on hover. No press/active state beyond the browser default — this is a low-chrome, low-affordance brand.
- **Borders & radius**: 6px is the standard corner radius (cards, buttons, banners); service tiles use a tighter 4px. Hairlines are `rgba(19,24,38,.12–.2)`, never a hard black rule.
- **Shadows**: minimal — flat cards at rest, a single soft drop-shadow (`0 16px 32px -12px rgba(19,24,38,.18)`) only on hover-lift. No inner shadows, no neumorphism.
- **Imagery**: none supplied. All "media slots" in the source are placeholder blocks — treat photography needs as an open question (see Caveats).
- **A recurring geometric motif**: a hairline rule with a small 3×3 alternating pixel cluster at its centre, plus a solid pixel-square bullet for lists — a quiet nod to the pixel/8-bit register of Bytesized, used sparingly as a divider rather than a decorative device.

## Iconography
No icon font or external icon set — the brand uses four bespoke, hand-built line icons (stroke width 1.8–1.9px, `currentColor`/ink), one per service, each with a small hover animation (an eye that blinks for Discover, a flag that waves for Govern, corner brackets that morph solid↔dotted for Transform, a toggle knob that slides for Enable). These are copied verbatim into `assets/icons/` as static SVGs; the animated hover states are documented in the Brand Board source but not re-implemented pixel-for-pixel in every consuming context — recreate the keyframes from the GitHub source if you need the live hover motion. No emoji, no Unicode-glyph icons anywhere in the source.

## Logo
The mark is **vector**, not a live font render: the "x.d" glyphs were traced from the Bytesized typeface (pixel-block outlines — a checkerboard "x", a square dot, and a "d" with its counter as a true hole, combined as one SVG path with `fill-rule="evenodd"`) and that path is the canonical logo asset going forward — never re-set "x.d" as live Bytesized text in new work. The full lockup pairs this vector mark with "XPERIENS DIGITAL" in tracked-out Figtree Semibold. Variants built from the same path: ink-on-tan, tan-on-ink (reversed), icon-only at small/large scale, a frozen conic-sweep fill, an animated conic-sweep fill (mark and wordmark both, no pulse/zoom), and a large pulsing/zooming loader treatment. Use the traced path (or request it regenerated) rather than the font wherever the mark appears — email signature and nav lockups included.

## Fonts
Figtree (weights 300–900, roman + italic) and Bytesized (Regular) were supplied as TTFs and are used as delivered — no substitution needed.

## Index
- `styles.css` — root stylesheet, imports everything below
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `motion.css`, `interactions.css`
- `assets/fonts/` — Figtree + Bytesized TTFs
- `components/forms/` — Button, Input, Textarea, Checkbox, Toggle
- `components/content/` — Card, Divider, Quote, Callout, StatBlock
- `components/navigation/` — Navbar (with mobile slide-out), Footer
- `components/marketing/` — Hero, ServiceTile, PricingCard, FAQAccordion, LogoStrip, CookieBanner, PromoBanner, VideoBlock, ChatDialog

The authoritative, up-to-date specimen source is now the **Xperiens Brand Board** DC in this project — logo, palette, type scale, buttons, service artwork/icons, backgrounds, dividers, nav banners, loading state, 404, and email signature all live there and should be treated as ground truth over any older guideline/ui-kit snapshot. Nav banners (full-width reuse of the service tile artwork, one per service) are a confirmed pattern — see the Brand Board's dedicated Nav banners section.

## Components
Button, Input, Textarea, Checkbox, Toggle, Card, Divider, Quote, Callout, StatBlock, Navbar, Footer, Hero, ServiceTile, PricingCard, FAQAccordion, LogoStrip, CookieBanner, PromoBanner, VideoBlock, ChatDialog.

## Caveats — please help me iterate
- **No product photography or illustration was supplied.** Every "media slot" you'll see in hero/content blocks is a flat gradient placeholder. If you have real photography, case-study imagery, or team photos, attach them and I'll wire them in.
- **No real client logos** — the logo strip uses text placeholders (ACME CORP, NORTHWIND…). Send real client logo SVGs/PNGs to swap in.
- **Only one product surface exists** (marketing website). If there's a client portal, docs site, or internal tool, share its code/Figma and I'll build a matching UI kit.
- **Icon hover animations** (blinking eye, waving flag, morphing brackets, sliding toggle) are live in the Brand Board source (2a–2d) — recreate the keyframes from there if a consuming context needs the real hover motion rather than the static frame.
- **No shadow/elevation system beyond one hover-lift value** was defined in the source — if you use deeper elevation (modals, dropdowns, toasts) anywhere, I'll need direction on how those should look since nothing in the source covers them.
- **Component source (`components/*.jsx`), guideline specimen cards, and the website UI kit are bundled** (see `_ds_bundle.js`/`_ds_manifest.json`) rather than kept as loose files in this snapshot — treat the Brand Board DC as the source of truth for anything visual; regenerate the bundle from it if components drift out of sync.

Tell me what to fix, add, or push further — happy to iterate.
