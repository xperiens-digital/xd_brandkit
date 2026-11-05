# Logo

The x.d mark and its lockups as inline vector SVG, behaving exactly as the live site and the V1 Brand Board do: the mark rests in a solid colour and fills with the conic sweep, turning, when pointed at.

The sweep is the V1 recipe, unchanged: a conic gradient from 200° through `sweep-blue` #8fa0e0, `govern-1` #c9b8ec, `discover-2` #f2b8b6, `transform-1` #fbead0 and `enable-1` #a8e0c8, back to `sweep-blue`. It turns once every 6 seconds.

| Markup | Behaviour | Brand Board | Use |
|---|---|---|---|
| `<xd-mark>` (default) | Solid darkest blue at rest; sweep fades in and turns on hover | 3j | Nav, headers, anywhere online |
| `tone="dark"` | White at rest on navy; sweep on hover | 3j (footer) | Footer, dark sections |
| `spin` | Sweep turning continuously | 3f | Open mobile menu, hero moments, loaders |
| `variant="sweep"` | Sweep fill, not turning | | Static brand moments, social |
| `variant="box"` | Sweep mark in a navy rounded square (22% radius); turns on hover | 17a | Favicons, app icons, avatars |
| `variant="navy"` / `"white"` | Solid only, no hover | | Print, documents, single colour |
| `lockup="stack"` / `"row"` | Adds the outlined XPERIENS DIGITAL wordmark | | See Logo construction |

Put `.xd-spin-host` on a container (a nav link, the footer brand block) to start the sweep when the container is hovered. The darkest blue is `logo-ink` (#18214D); there is no black version. The Page loader uses the third V1 behaviour, the loader-mark: sweep plus a soft pulse. Static SVGs are in the Logos asset group; animated SVGs are in the X.D logo pack download.
