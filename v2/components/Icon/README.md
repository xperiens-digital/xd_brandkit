# Icon

Duotone line icons on a 24px grid: 2px round stroke in `currentColor` with one soft tint shape behind it.

`<xd-icon name="process" size="24">`. The tint defaults to `brand-tint`; set `--xd-icon-tint` (for example `var(--svc-intel-a)`) to colour it by service, or add `mono` to drop it. Inside `.xd-iconbox` the icon gets a 56px rounded tile that tilts and pops its tint on hover.

Families: services (reengineer, intelligence, cloud, govern, innovate, growth), method and platform (process, dashboard, survey, target, layers, data, compass, insight, people, chat, bolt, lock, document, calendar, clock, star), interface (check, info, alert, arrows, plus, close, menu, search, download, mail, phone, location) and the x.d `pixel` motif.

Rules: one icon size per row; icons sit beside a text label except in icon buttons, which need an `aria-label`. New icons follow the same grid, stroke and single tint shape. Static SVG files (ink stroke, iris tint) are in the Icons asset group.
