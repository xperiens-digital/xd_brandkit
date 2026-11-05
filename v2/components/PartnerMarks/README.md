# Partner marks

Vendor and partner marks for partner strips, the footer, About pages and proposals. The files are in the **Partners** asset group, unchanged from V1 (Brand Guidelines 1.6).

- **Colour.** Single colour only. `.xd-partner` paints the mark in `ink-faint` (V1's #5C6B7A on light grounds) and in `on-night-muted` inside `.xd-partners--night`. Never use a brand hue, the conic sweep or animation on a partner mark.
- **Size.** 44px optical height; stacked lockups (`--cv-stack`) 88px.
- **Spacing.** At least 48px between marks (`.xd-partners` sets the gap) and from neighbouring content.
- **Order.** Microsoft Solutions Partner, then Dicker Data, then Cognitive View.
- **Claims.** X.D is the delivery and advisory partner; never imply X.D is the platform vendor. Name a partner only where its own materials support the claim.

```html
<div class="xd-partners">
  <span class="xd-partner xd-partner--msft" role="img" aria-label="Microsoft Solutions Partner"
        style="--xd-partner-src:url(microsoft-solutions-partner.svg)"></span>
</div>
```
