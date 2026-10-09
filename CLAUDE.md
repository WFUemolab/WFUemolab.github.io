# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Website for the Emotional Adaptation and Psychophysiology Lab (Emolab) at Wake Forest University, served by GitHub Pages from the root of `main` at https://wfuemolab.github.io/. The site is static HTML/CSS/vanilla JS with no build step, package manager, or tests. `README.md` has the directory layout and the content-editing guide for lab members.

## Commands

- Local preview: `python3 -m http.server 8000` from the repo root (also defined as `site` in `.claude/launch.json`). `file://` won't work because everything loads via `fetch`.
- Jekyll isn't installed locally. GitHub Pages runs it on push.

## Architecture

- **Pages:** `index/people/publications/projects/media.html` each load `assets/js/core.js` plus their own `assets/js/<page>.js`. The header, nav, and footer are duplicated verbatim in all five files, so change them in every page. Libraries (js-yaml 4.1.0, marked 12.0.2) and fonts load from pinned CDN URLs.
- **`core.js`** exposes `window.Emolab`: escaping, icons, avatars, date helpers, `fetchYaml` (uses `CORE_SCHEMA` so dates stay strings), `parseFrontMatter`, `markdown`, `authorKey` (matches "Waugh, C. E." ↔ "Christian Waugh" for bolding lab authors), and `loadCollection('roster'|'projects')`.
- **Collection loading has two paths that must stay equivalent:**
  1. On GitHub Pages, Jekyll renders `data/roster.json` and `data/projects.json` (Liquid: `site.pages | where_exp ... | jsonify`). Each entry's `content` may be raw Markdown or already-rendered HTML depending on Jekyll's render order, and marked handles both.
  2. Locally, those files are unrendered Liquid, so `JSON.parse` fails and the loader falls back to parsing the `http.server` directory listing of `Roster/` and `Projects/` and fetching each `.md`.
  Jekyll converts `.md` files to HTML, so raw Markdown is never served on GitHub Pages. Don't rely on fetching `.md` files in production.
- **Reserved front-matter keys:** Jekyll overwrites `name`, `path`, `url`, `dir`, and `content` on every page. That's why roster files use `title` for the person's name and `position` for the job title. `core.js` strips these keys in both load paths and warns about them locally.
- **Roster layout:** current members live in `Roster/`, former members in `Roster/Alumni/`. `people.js` (`roleKey`) prefixes "former" to the role of any file under `Alumni/`. Photos resolve relative to `Roster/`, so everyone shares `Roster/photos/`. The local-listing fallback reads one level of subfolders (skipping `photos/`); the Jekyll manifest already includes them via `path contains 'Roster/'`.
- **Templates:** `Roster/template.md` and `Projects/template-project/` are excluded in `_config.yml` and filtered by slug in `core.js`. `hidden: true` hides any entry.
- **Filters:** Publications and Projects share one layout, `.with-panel` = results on the left and a sticky `.filter-panel` on the right. Below 900px the panel moves above the results and collapses behind a toggle. `Emolab.filterPanel(prefix)` wires the toggle and the active-filter badge, and `Emolab.tagChips()` builds the topic/keyword chips. The element IDs use the prefix: `pub-*` or `proj-*`.
- **Substack posts:** Substack sends no CORS headers, so the browser can't fetch the feed. `scripts/update_substack.py` (stdlib only, uses `/api/v1/posts?limit=3`) writes `data/substack.json`, and `.github/workflows/substack.yml` runs it daily and commits on change. `media.js` treats the file as optional. `scripts/` is excluded from Jekyll.
- **Plain YAML data:** `data/news.yml`, `data/publications.yml`, and `data/media.yml` (Jekyll serves them unprocessed). `sample: true` on any entry renders a "Sample" badge to mark placeholder content.
- **Styling:** everything is in `assets/css/styles.css`, with design tokens in `:root` at the top. The theme is light-only. The palette follows Wake Forest (taken from psychology.wfu.edu): black `#1a1a1a`, Old Gold `#9e7e38` for decoration and large type, `#8c6d2c` for gold text and links on white, and `#755a23` for dark gold. Fonts are Cormorant Garamond for headings and Open Sans for body text. A few colours are also hard-coded in JS (`AVATAR_COLORS` in `core.js`, `COVER_COLORS` in `projects.js`) and the hero brain sketch in `index.html` (inline SVG; `assets/img/logo.svg` is a simplified version of the same outline used as the header mark and favicon).
