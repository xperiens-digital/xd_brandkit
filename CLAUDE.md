# X.D brand kit — working notes for Claude

This repo holds the **Xperiens Digital (X.D) brand kit** in two folders:

- `v2/` — **X.D Brand V2**, current. One-way backup of the Design System artifact https://claude.ai/artifact/RiVU2vDkEo4LJR9UUGnpNF (source of truth).
- `dist/` — files generated from `v2/` by `scripts/build.py` for projects to load; `package.json` names and versions them. The repo is public so Vercel and jsDelivr can read it without credentials.
- `v1-deprecated/` — the original brand kit, mirrored from the Claude Design project **"x.d brand kit"** (https://claude.ai/design/p/ecb7b4a3-89dc-427d-8053-63ca0e689606, ID `ecb7b4a3-89dc-427d-8053-63ca0e689606` for the `DesignSync` tool). Reference only; use V2 for new work.

Design work happens in the artifact (V2) or Claude Design (V1); this repo follows. Never redesign or "improve" files here: copy what the source holds. Australian English in anything you write.

## Layout

### V1 (`v1-deprecated/`)

`v1-deprecated/` mirrors the Claude Design project's file tree one-to-one (the paths below are relative to it):

- `Xperiens Brand Guidelines.dc.html` — the primary brand guidelines (7 chapters: Logo, Colour, Typography, Service artwork, Backgrounds, Components, Applications). Ground truth for brand decisions.
- `Xperiens Brand Board.dc.html` — the original brand board the guidelines were built from (kept for reference).
- `Primary logo lock-up.dc.html`, `Secondary logo lock-up.dc.html`, `Email Newsletter Assets.dc.html`, `Hero Video Background.dc.html`, `Pixel Brain Motif.dc.html` — other canvases.
- `_ds/xperiens-digital-design-system-…/` — the embedded design system: `readme.md`, `styles.css`, `tokens/*.css`, `_ds_bundle.js`, `_ds_manifest.json`, `assets/fonts/` (Figtree, Bytesized).
- `assets/` — logos (`xd-lockup-3a.svg` is the primary lockup) and partner marks; `exports/` — favicon and lockup exports; `uploads/` — files uploaded to the project (fonts, partner logos, the hero video, screenshots).
- `support.js`, `xd-vector-path.json` — runtime and the canonical x.d mark path.

Repo-only files at the root (never in either source): `CLAUDE.md`, `README.md`, `CHANGELOG.md`, `package.json`, `.gitattributes`, `scripts/`, `dist/`. `v2/BACKUP.md` is also repo-only. Not mirrored: the project's `.thumbnail` preview image.

`.dc.html` pages open in Claude Design; outside it they render only partly (they rely on Claude Design's runtime).

## V2 backup (one-way, prompted)

**X.D Brand V2** is a Design System artifact: https://claude.ai/artifact/RiVU2vDkEo4LJR9UUGnpNF. The artifact is the source of truth, where Ben edits and comments on the page. `v2/` is a one-way backup of it for other projects to reference. Never edit `v2/` by hand and never sync from git back to the artifact.

There is no scheduled task. When a session has edited the V2 artifact, Claude prompts Ben part-way through a long session and towards the end to back up. To back up:

1. Pull the latest `main` and branch (e.g. `brand-v2-backup-YYYY-MM-DD`).
2. Replace `v2/` with the artifact's current `project/` files (from the session's local source, or read with the Artifact tools). Keep `v2/BACKUP.md` and update its snapshot date.
3. Check a few files against the live artifact by SHA-256 (index `design-system.json`, `tokens.json`, `components/bundle.*`).
4. Bump `version` in `package.json` (patch for fixes, minor for additions such as new components or assets, major for breaking renames or removals) and add a `CHANGELOG.md` entry in plain language.
5. Run `python3 scripts/build.py`, then `python3 scripts/build.py --check`. Open `dist/brand.css` and `dist/brand.js` in a test page to confirm fonts, logos and components load.
6. Commit (see Git), push the branch, open a PR. Merge to `main` only with Ben's approval.
7. After the merge, tag the merge commit `v<version>` (e.g. `v2.1.0`) and push the tag. If tag pushes are blocked in the session, ask Ben to create a GitHub release with that tag on `main`. Projects pin to these tags.

**Consumers.** The website (`x.d-website`) and XDOS load the brand from this repo by tag (npm from GitHub, or jsDelivr for pages without a build step). They never keep their own copy. Taking an update is a one-line version bump in that project, reviewed on its own preview.

## V1 sync (retired)

The weekly scheduled sync was retired on 5 Nov 2026. The procedure below is kept for a manual V1 refresh if Ben asks for one.

### Procedure

Each manual refresh:

1. Pull the latest `main`.
2. `DesignSync` `list_files` on the project. Compare its file paths (ignore directories and `.thumbnail`) with `v1-deprecated/`.
3. For each file present in both:
   - **Text files the tool returns whole** (`truncated: false`, `isBase64: false`): compare with the repo copy. If different, update the repo copy to match exactly. Make targeted edits for small changes; write the whole file only when most of it changed.
   - **Do not hand-copy** files with long encoded blocks, such as SVGs carrying a `c2pa:manifest` (e.g. `v1-deprecated/assets/xd-lockup-3a.svg`) or HTML with large inline `data:` images. If one differs, flag it for an exact export rather than retyping it.
   - **Files the tool truncates** (over 256 KiB; currently `Xperiens Brand Guidelines.dc.html`): compare the returned part with the start of the repo copy. If it differs, flag "changed — needs exact export". Never write a truncated copy.
   - **Binary files** (fonts, PNG, MP4): the tool can't compare these reliably. Leave them untouched.
4. **New file in the project:** add it if it is a small text file returned whole; otherwise flag it for export. **File removed from the project:** don't delete it here; flag it for Ben to decide.
5. If nothing changed, make no commit.
6. Otherwise commit on a branch (see Git) with a message listing what changed, push and open a PR.
7. Report: changes committed (with the PR link), flagged files and why, or "no changes".

**Exact exports:** for flagged files, Ben downloads them from Claude Design (or Claude does, in his Chrome, with his approval). The files are then copied in and checked against a SHA-256 taken in the browser. Claude Design's in-browser file view inserts a fixed 20,254-byte viewer script after `<head>` in every HTML page; strip it before hashing.

## Changes coming

Claude Design is moving into Artifacts in the Claude app; the current version is usable until **14 December 2026**. When the V1 project moves, its link and ID will change: update this file if a V1 refresh is still wanted.

## Git

Commit as Ben Dexter <ben.dexter@xperiens.com.au>. `main` is the default branch; V2 backups arrive by PR. Nothing is pushed to `main` or merged without Ben's approval. (The retired weekly task's standing approval no longer applies.)
