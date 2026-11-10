# Trademark

Use this for X.D's two trademarked statements, everywhere from headings to body text:

```html
<xd-trademark mark="growth-reengineering"></xd-trademark>      <!-- Growth (re)Engineering™ -->
<xd-trademark mark="reengineering-for-growth"></xd-trademark>  <!-- (re)Engineering for Growth™ -->
```

- **Size of the ™.** In H1 and H2 display headings the ™ stays small (about a third of the heading size, never under 11px). Everywhere else (H3, body, buttons, eyebrows, captions) it is a legible standard size: 70% of the text, never under 11px, raised to the cap line.
- **Always the full statement** with ™ at every mention, never abbreviated or restyled, and kept on one line.
- **Without the script** (emails, documents): `<span class="xd-tmark">Growth (re)Engineering<span class="xd-tm xd-tm--mark">™</span></span>`.
- **Safety net.** `bundle.js` also spots these two statements in ordinary text and gives their ™ the same legible size, so copy pasted from a CMS still renders correctly. Other ™ marks keep the general rule (small and raised).
