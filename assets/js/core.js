/* ==========================================================================
   Emolab core: shared helpers, navigation, and the Markdown content loader.
   Exposes everything on window.Emolab for the page scripts.
   ========================================================================== */
(function () {
  'use strict';

  const E = (window.Emolab = window.Emolab || {});

  /* ---------- Small helpers ---------- */

  const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  E.escape = (value) => String(value ?? '').replace(/[&<>"']/g, (c) => ESC[c]);

  E.debounce = (fn, ms = 120) => {
    let t;
    return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
  };

  // Lower-case and strip accents so "Pérez" matches "perez".
  E.normalize = (value) => String(value ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

  E.toArray = (value) => (value == null || value === '' ? [] : Array.isArray(value) ? value : [value]);

  E.isExternal = (url) => /^(https?:)?\/\//i.test(url || '');

  // Attributes for links that leave the site.
  E.linkAttrs = (url) => (E.isExternal(url) ? ' target="_blank" rel="noopener noreferrer"' : '');

  // "2026-09-15", "2026-09", "2026-09-15 00:00:00 +0000" (Jekyll) → sortable ISO prefix.
  E.isoDate = (value) => {
    const m = /^(\d{4})(?:-(\d{1,2}))?(?:-(\d{1,2}))?/.exec(String(value ?? '').trim());
    if (!m) return '';
    return [m[1], m[2] && m[2].padStart(2, '0'), m[3] && m[3].padStart(2, '0')].filter(Boolean).join('-');
  };

  E.formatDate = (value) => {
    const iso = E.isoDate(value);
    if (!iso) return String(value ?? '');
    const [y, mo, d] = iso.split('-').map(Number);
    if (!mo) return String(y);
    const opts = d ? { year: 'numeric', month: 'short', day: 'numeric' } : { year: 'numeric', month: 'long' };
    return new Date(y, mo - 1, d || 1).toLocaleDateString('en-US', opts);
  };

  E.sampleBadge = (item) => (item && item.sample ? '<span class="badge badge--sample" title="Placeholder content — replace or delete this entry">Sample</span>' : '');

  /* ---------- Icons (inline SVG, stroke-based) ---------- */

  const ICONS = {
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    scholar: '<path d="M22 9 12 4 2 9l10 5 10-5Z"/><path d="M6 11.2V16c3.5 2.5 8.5 2.5 12 0v-4.8"/><path d="M22 9v5"/>',
    x: '<path d="M4 4l16 16M20 4 4 20"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10.5V17M8 7.5v.01M12 17v-6.5M12 13.5a2.5 2.5 0 0 1 5 0V17"/>',
    github: '<path d="M9 19c-4 1.4-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
    orcid: '<circle cx="12" cy="12" r="9"/><path d="M8.5 10.5V16.5M8.5 7.5v.01M12 16.5v-6h2a3 3 0 0 1 0 6Z"/>',
    bluesky: '<path d="M12 11c-1.5-3-5-6.5-7.5-7 0 4 .5 7 3.5 7.8-3 .7-3.5 3.7-1 5.2 2.5 1.5 4-1 5-3 1 2 2.5 4.5 5 3s2-4.5-1-5.2c3-.8 3.5-3.8 3.5-7.8-2.5.5-6 4-7.5 7Z"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    play: '<path d="M7 4.5v15l12.5-7.5z"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
    tv: '<rect x="3" y="7" width="18" height="12" rx="2"/><path d="m8 3 4 4 4-4"/>',
    pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
    video: '<rect x="2" y="6" width="14" height="12" rx="2"/><path d="m16 10 6-3.5v11L16 14"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    flask: '<path d="M9 3h6M10 3v6.5L4.6 18.4A1.8 1.8 0 0 0 6.2 21h11.6a1.8 1.8 0 0 0 1.6-2.6L14 9.5V3"/><path d="M7.5 15h9"/>',
    clipboard: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 10h6M9 14h6M9 18h3"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    pulse: '<path d="M3 12h4l2-5 4 10 2-5h6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    shield: '<path d="M12 3 5 6v6c0 4.4 3 8 7 9 4-1 7-4.6 7-9V6z"/><path d="m9 12 2 2 4-4"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    brain: '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Z"/><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3h0a3 3 0 0 1-3-3"/>',
    news: '<path d="M4 5h13v14H6a2 2 0 0 1-2-2z"/><path d="M17 9h3v8a2 2 0 0 1-2 2M8 9h5M8 13h5"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5M19 19v2H6"/>',
  };
  const FILLED = new Set(['play']);
  E.icon = (name, cls = '') => {
    const body = ICONS[name] || ICONS.external;
    return `<svg class="icon${FILLED.has(name) ? ' icon--fill' : ''}${cls ? ' ' + cls : ''}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${body}</svg>`;
  };

  /* ---------- Avatars: photo, or coloured initials fallback ---------- */

  const AVATAR_COLORS = ['#1a1a1a', '#755a23', '#9e7e38', '#3b3b3b', '#5c4a22', '#666666'];
  E.initials = (name) => {
    const parts = String(name || '').replace(/^(dr|prof)\.?\s+/i, '').trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return '?';
    return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
  };
  E.avatar = (name, photo) => {
    const n = String(name || '');
    let hash = 0;
    for (const ch of n) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
    const color = AVATAR_COLORS[hash % AVATAR_COLORS.length];
    const initials = `<div class="avatar-initials" style="background:${color}" aria-hidden="true"${photo ? ' hidden' : ''}>${E.escape(E.initials(n))}</div>`;
    // If the photo is missing (404), hide it and reveal the initials.
    const img = photo
      ? `<img src="${E.escape(photo)}" alt="Portrait of ${E.escape(n)}" loading="lazy" decoding="async" onerror="this.nextElementSibling.hidden=false;this.remove()">`
      : '';
    return `<div class="avatar">${img}${initials}</div>`;
  };

  /* ---------- State placeholders ---------- */

  E.renderLoading = (el, count = 3) => {
    el.innerHTML = `<div class="grid" aria-hidden="true">${'<div class="skeleton"></div>'.repeat(count)}</div>`;
    el.setAttribute('aria-busy', 'true');
  };
  E.renderState = (el, title, message = '', type = 'empty') => {
    el.removeAttribute('aria-busy');
    el.innerHTML = `<div class="state${type === 'error' ? ' state--error' : ''}" role="${type === 'error' ? 'alert' : 'status'}">
      <strong>${E.escape(title)}</strong>${message ? `<span>${message}</span>` : ''}</div>`;
  };
  E.loadError = (el, err) => {
    console.error(err);
    const local = location.protocol === 'file:'
      ? 'Pages opened straight from disk cannot load content. Run <code>python3 -m http.server</code> in the site folder and open <code>http://localhost:8000</code>.'
      : 'Please refresh the page. If the problem persists, check the browser console for details.';
    E.renderState(el, 'This content could not be loaded.', local, 'error');
  };

  /* ---------- Data loading ---------- */

  E.fetchText = async (url) => {
    const res = await fetch(url, { cache: 'no-cache' });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText} — ${url}`);
    return res.text();
  };

  // CORE_SCHEMA keeps dates as plain strings ("2026-09-15") instead of UTC Date objects.
  E.parseYaml = (text) => window.jsyaml.load(text, { schema: window.jsyaml.CORE_SCHEMA });
  E.fetchYaml = async (url) => E.parseYaml(await E.fetchText(url));

  E.markdown = (md) => {
    const src = String(md || '').trim();
    if (!src) return '';
    return window.marked ? window.marked.parse(src) : `<p>${E.escape(src)}</p>`;
  };

  // Split "---\nyaml\n---\nbody" into { meta, body }.
  const FRONT_MATTER = /^﻿?---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)([\s\S]*)$/;
  E.parseFrontMatter = (text) => {
    const m = FRONT_MATTER.exec(text);
    if (!m) return { meta: {}, body: text };
    return { meta: E.parseYaml(m[1]) || {}, body: m[2] };
  };

  // Resolve an image/file reference written relative to the item's own folder.
  E.resolvePath = (base, ref) => {
    if (!ref) return '';
    ref = String(ref).trim();
    if (E.isExternal(ref) || ref.startsWith('/') || ref.startsWith('data:')) return ref;
    return base + ref.replace(/^\.\//, '');
  };

  /*
   * Markdown collections (/Roster and /Projects).
   *
   * On GitHub Pages, Jekyll builds data/<name>.json from every Markdown page in
   * the folder (see the Liquid in those files), so new files show up
   * automatically after a push.
   *
   * During local preview with a plain static server (python3 -m http.server),
   * that JSON is still raw Liquid, so we fall back to reading the server's
   * directory listing and parsing each .md file in the browser.
   */
  const COLLECTIONS = {
    roster: { manifest: 'data/roster.json', dir: 'Roster/', layout: 'files' },
    projects: { manifest: 'data/projects.json', dir: 'Projects/', layout: 'folders', file: 'info.md' },
  };
  // Keys Jekyll sets on every page. They overwrite front matter of the same name on
  // GitHub Pages (e.g. `name` becomes the file name), so they are never usable as fields.
  const JEKYLL_KEYS = new Set(['content', 'dir', 'name', 'path', 'url', 'output', 'excerpt', 'layout', 'collection', 'relative_path', 'draft', 'ext', 'id', 'next', 'previous']);

  function makeItem(path, meta, body, local = false) {
    for (const k of Object.keys(meta)) {
      if (!JEKYLL_KEYS.has(k)) continue;
      if (local && k !== 'layout') console.warn(`[Emolab] ${path}: front-matter key "${k}" is reserved by Jekyll and is ignored — ${k === 'name' ? 'use `title` for the person\'s name' : 'rename it'}.`);
      delete meta[k];
    }
    path = String(path).replace(/^\/+/, '');
    const base = path.slice(0, path.lastIndexOf('/') + 1);
    const parts = path.split('/');
    const file = parts[parts.length - 1];
    const slug = /^info\.md$/i.test(file) ? parts[parts.length - 2] : file.replace(/\.(md|markdown)$/i, '');
    return { ...meta, slug, path, base, body: String(body || ''), html: E.markdown(body) };
  }

  async function fromManifest(cfg) {
    const pages = JSON.parse(await E.fetchText(cfg.manifest)); // throws on un-rendered Liquid
    if (!Array.isArray(pages)) throw new Error('Manifest is not an array');
    return pages.map((p) => makeItem(p.path, { ...p }, p.content));
  }

  async function listDirectory(dir) {
    const html = await E.fetchText(dir);
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return [...doc.querySelectorAll('a[href]')]
      .map((a) => a.getAttribute('href'))
      .filter((h) => h && !/^([a-z]+:|\/|\?|#|\.\.)/i.test(h))
      .map((h) => decodeURIComponent(h.replace(/^\.\//, '')));
  }

  async function fromListing(cfg) {
    const entries = await listDirectory(cfg.dir);
    let files;
    if (cfg.layout === 'folders') {
      files = entries.filter((e) => e.endsWith('/')).map((d) => `${cfg.dir}${d}${cfg.file}`);
    } else {
      // Markdown files in the folder plus one level of subfolders (e.g. Roster/Alumni/); photos/ holds images only.
      const subdirs = entries.filter((e) => e.endsWith('/') && e !== 'photos/');
      const nested = await Promise.all(subdirs.map((d) => listDirectory(cfg.dir + d)
        .then((list) => list.filter((f) => /\.md$/i.test(f)).map((f) => d + f))
        .catch(() => [])));
      files = entries.filter((e) => /\.md$/i.test(e)).concat(...nested).map((f) => `${cfg.dir}${f}`);
    }
    const results = await Promise.allSettled(files.map(async (path) => {
      const { meta, body } = E.parseFrontMatter(await E.fetchText(path));
      return makeItem(path, meta, body, true);
    }));
    results.filter((r) => r.status === 'rejected').forEach((r) => console.warn('[Emolab] skipped:', r.reason));
    return results.filter((r) => r.status === 'fulfilled').map((r) => r.value);
  }

  const cache = {};
  E.loadCollection = (name) => {
    const cfg = COLLECTIONS[name];
    if (!cache[name]) {
      cache[name] = fromManifest(cfg)
        .catch((err) => {
          console.info(`[Emolab] ${cfg.manifest} unavailable (${err.message}); reading ${cfg.dir} directly.`);
          return fromListing(cfg);
        })
        .then((items) => items.filter((i) => !i.hidden && i.slug !== 'template' && i.slug !== 'template-project'));
    }
    return cache[name];
  };

  /* ---------- Lab-author matching (for bolding names in publications) ---------- */

  const TITLES = /^(dr|prof|professor|mr|ms|mrs)\.?\s+/i;
  const SUFFIX = /,?\s+(ph\.?d\.?|m\.?a\.?|m\.?s\.?|jr\.?|sr\.?|ii|iii)$/i;

  // "Waugh, C. E." | "Christian E. Waugh" | "C. E. Waugh" → "waugh|c"
  E.authorKey = (name) => {
    let n = String(name || '').replace(/[*†‡^]/g, '').trim().replace(TITLES, '').replace(SUFFIX, '').trim();
    let last;
    let first;
    if (n.includes(',')) {
      [last, first] = n.split(',').map((s) => s.trim());
    } else {
      const parts = n.split(/\s+/);
      last = parts.pop();
      first = parts[0];
    }
    if (!last) return '';
    return `${E.normalize(last)}|${E.normalize(first || '').charAt(0)}`;
  };

  /* ---------- Filter side panel ---------- */

  // Collapsible on narrow screens; `setActive(n)` shows the active-filter count on the toggle.
  E.filterPanel = (prefix) => {
    const panel = document.querySelector('.filter-panel');
    const toggle = panel.querySelector('.filter-toggle');
    const badge = document.getElementById(`${prefix}-active`);
    toggle.addEventListener('click', () => {
      const open = !panel.classList.contains('is-open');
      panel.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    return {
      setActive(n) {
        badge.hidden = !n;
        badge.textContent = n;
      },
    };
  };

  // Keyword chips with counts, sorted by frequency.
  E.tagChips = (items, key, limit = 24) => {
    const counts = new Map();
    items.forEach((i) => i[key].forEach((t) => counts.set(t, (counts.get(t) || 0) + 1)));
    return [...counts].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, limit)
      .map(([t, n]) => `<button type="button" class="chip" data-tag="${E.escape(t)}" aria-pressed="false">${E.escape(t)} <span class="count">${n}</span></button>`)
      .join('');
  };

  /* ---------- Site chrome ---------- */

  function initChrome() {
    const header = document.querySelector('.site-header');
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.getElementById('site-nav');

    if (toggle && nav) {
      const setOpen = (open) => {
        toggle.setAttribute('aria-expanded', String(open));
        nav.classList.toggle('is-open', open);
      };
      toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
      nav.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
      window.matchMedia('(min-width: 821px)').addEventListener('change', (e) => { if (e.matches) setOpen(false); });
    }

    if (header) {
      const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 4);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initChrome);
  else initChrome();
})();
