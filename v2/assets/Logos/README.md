# Logos

All files are vector SVG drawn from the canonical mark path, with the wordmark outlined to paths. Each file includes 1m clear space (m = one pixel cell of the mark).

| File | Use |
|---|---|
| `xd-mark-conic.svg` | Static sweep mark (V1 / live site stops) on light or navy grounds |
| `xd-mark-navy.svg` | Single colour, navy #18214D (the darkest X.D blue; there is no black version) |
| `xd-mark-white.svg` | Single colour, white, on its own navy field |
| `xd-app-box.svg` | Navy rounded square (22% radius) with the conic mark: favicons, avatars, busy backgrounds |
| `xd-lockup-stack-*.svg` | Stacked lockup: `conic`, `navy`, `reverse` (sweep mark + white wordmark) and `white`; the last two carry their own navy field so they never sit on black |
| `xd-lockup-row-*.svg` | Row lockup in the same four versions |
| `xd-bw-mark-black.svg` | Black and white: black mark on white |
| `xd-bw-lockup-stack-black.svg` | Black and white: black stacked lockup on white |
| `xd-bw-lockup-row-white-on-black.svg` | Black and white: white row lockup on black |

Black and white versions are only for single-colour reproduction where navy is not available (fax, rubber stamps, engraving, newsprint, some print forms). Everywhere else, the darkest version is navy, and no colour version sits on black.

Animated versions (every conic mark, lockup and app box with the sweep turning, plus `xd-loader.svg`) animate inside the SVG, so they work as plain images in email signatures, slides and holding pages. This page's asset store strips SVG animation, so they are kept in the separate X.D logo pack download rather than here. On the website use the `<xd-mark>` component, which turns on hover.
