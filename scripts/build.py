#!/usr/bin/env python3
"""Build dist/ from the V2 backup in v2/.

v2/ is a copy of the X.D Brand V2 artifact and is never edited by hand.
dist/ is generated from it so websites and apps can load the brand directly.
Run:  python3 scripts/build.py          (write dist/)
      python3 scripts/build.py --check  (fail if dist/ is out of date)
No third-party packages needed.
"""
import json, pathlib, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "v2"
OUT = ROOT / "dist"
PKG = json.loads((ROOT / "package.json").read_text())
HEAD = "/* X.D Brand V2 %s, generated from v2/ by scripts/build.py. Do not edit. */\n" % PKG["version"]


def val(token, theme):
    v = token["value"]
    if isinstance(v, dict):
        v = v.get(theme, v.get("light"))
    return str(v).replace("{", "var(--").replace("}", ")")


def tokens_css(t):
    colours = t["color"]["tokens"]
    out = [":root,[data-theme=light]{"]
    out += ["  --%s:%s;" % (c["name"], val(c, "light")) for c in colours]
    out += ["  --%s:%s;" % (s["name"], val(s, "light")) for s in t["shadow"]["tokens"]]
    out += ["}", "[data-theme=dark]{"]
    out += ["  --%s:%s;" % (c["name"], val(c, "dark")) for c in colours if isinstance(c["value"], dict)]
    out += ["  --%s:%s;" % (s["name"], val(s, "dark")) for s in t["shadow"]["tokens"]]
    out += ["}", ":root{"]
    out += ["  --%s:%s;" % (s["name"], s["value"]) for s in t["spacing"]["tokens"] + t["radius"]["tokens"]]
    out += ["  --font-%s:%s;" % (k, v) for k, v in t["type"]["families"].items()]
    for g in t["type"]["groups"]:
        for s in g["styles"]:
            n = s["name"]
            out.append("  --text-%s:%s %s/%s var(--font-%s);" % (n, s.get("fontWeight", 400), s["fontSize"], s["lineHeight"], g["family"]))
    out.append("}")
    return "\n".join(out) + "\n"


def fonts_css(t):
    return "".join(
        '@font-face{font-family:"%s";src:url("../v2/%s") format("truetype");font-weight:%s;font-display:swap}\n'
        % (f["family"], f["file"], f["weight"]) for f in t["type"]["fonts"])


def build():
    t = json.loads((SRC / "tokens.json").read_text())
    tok, fonts = tokens_css(t), fonts_css(t)
    comp_css = (SRC / "components/bundle.css").read_text()
    return {
        "tokens.css": HEAD + tok,
        "fonts.css": HEAD + fonts,
        "brand.css": HEAD + fonts + tok + "\n" + comp_css,
        "brand.js": HEAD + (SRC / "components/bundle.js").read_text(),
        "tokens.json": json.dumps(t, indent=2, ensure_ascii=False) + "\n",
    }


if __name__ == "__main__":
    files = build()
    if "--check" in sys.argv:
        stale = [n for n, c in files.items() if not (OUT / n).exists() or (OUT / n).read_text() != c]
        if stale:
            sys.exit("dist/ is out of date: %s. Run python3 scripts/build.py" % ", ".join(stale))
        print("dist/ is up to date")
    else:
        OUT.mkdir(exist_ok=True)
        for n, c in files.items():
            (OUT / n).write_text(c)
        print("built dist/:", ", ".join(files))
