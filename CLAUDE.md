# X.D brand kit — working notes for Claude

This repo is the **Git mirror of the Xperiens Digital (X.D) brand kit**. The source of truth is the Claude Design project **"x.d brand kit"**:

- Project link: https://claude.ai/design/p/ecb7b4a3-89dc-427d-8053-63ca0e689606
- Project ID (for the `DesignSync` tool): `ecb7b4a3-89dc-427d-8053-63ca0e689606`

Design work happens in Claude Design; this repo follows it. Never redesign or "improve" files here: copy what the project holds. Australian English in anything you write.

## Layout

The repo root mirrors the project's file tree one-to-one, at the same paths:

- `Xperiens Brand Guidelines.dc.html` — the primary brand guidelines (7 chapters: Logo, Colour, Typography, Service artwork, Backgrounds, Components, Applications). Ground truth for brand decisions.
- `Xperiens Brand Board.dc.html` — the original brand board the guidelines were built from (kept for reference).
- `Primary logo lock-up.dc.html`, `Secondary logo lock-up.dc.html`, `Email Newsletter Assets.dc.html`, `Hero Video Background.dc.html`, `Pixel Brain Motif.dc.html` — other canvases.
- `_ds/xperiens-digital-design-system-…/` — the embedded design system: `readme.md`, `styles.css`, `tokens/*.css`, `_ds_bundle.js`, `_ds_manifest.json`, `assets/fonts/` (Figtree, Bytesized).
- `assets/` — logos (`xd-lockup-3a.svg` is the primary lockup) and partner marks; `exports/` — favicon and lockup exports; `uploads/` — files uploaded to the project (fonts, partner logos, the hero video, screenshots).
- `support.js`, `xd-vector-path.json` — runtime and the canonical x.d mark path.

Repo-only files (never in the project): `CLAUDE.md`, `README.md`, `.gitattributes`. Not mirrored: the project's `.thumbnail` preview image.

`.dc.html` pages open in Claude Design; outside it they render only partly (they rely on Claude Design's runtime).

## Weekly sync (procedure)

Run by the scheduled task "X.D brand kit weekly sync". Each run:

1. Pull the latest `main`.
2. `DesignSync` `list_files` on the project. Compare its file paths (ignore directories and `.thumbnail`) with the repo's tree (ignore the repo-only files above).
3. For each file present in both:
   - **Text files the tool returns whole** (`truncated: false`, `isBase64: false`): compare with the repo copy. If different, update the repo copy to match exactly. Make targeted edits for small changes; write the whole file only when most of it changed.
   - **Do not hand-copy** files with long encoded blocks, such as SVGs carrying a `c2pa:manifest` (e.g. `assets/xd-lockup-3a.svg`) or HTML with large inline `data:` images. If one differs, flag it for an exact export rather than retyping it.
   - **Files the tool truncates** (over 256 KiB; currently `Xperiens Brand Guidelines.dc.html`): compare the returned part with the start of the repo copy. If it differs, flag "changed — needs exact export". Never write a truncated copy.
   - **Binary files** (fonts, PNG, MP4): the tool can't compare these reliably. Leave them untouched.
4. **New file in the project:** add it if it is a small text file returned whole; otherwise flag it for export. **File removed from the project:** don't delete it here; flag it for Ben to decide.
5. If nothing changed, make no commit.
6. Otherwise commit (see Git) with a message listing what changed, and push to `origin main`.
7. Report: changes committed (with the commit hash), flagged files and why, or "no changes this week".

**Exact exports:** for flagged files, Ben downloads them from Claude Design (or Claude does, in his Chrome, with his approval). The files are then copied in and checked against a SHA-256 taken in the browser. Claude Design's in-browser file view inserts a fixed 20,254-byte viewer script after `<head>` in every HTML page; strip it before hashing.

## Changes coming

Claude Design is moving into Artifacts in the Claude app; the current version is usable until **14 December 2026**. When this project moves, its link and ID will change: update this file and the weekly task's prompt, then re-check that the sync reads the new location.

## Git

Commit as Ben Dexter <ben.dexter@xperiens.com.au>. `main` is the only branch. The weekly task has Ben's standing approval to commit and push brand kit changes to `main`; nothing else is pushed without his approval.
