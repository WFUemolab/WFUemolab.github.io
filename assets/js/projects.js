/* Projects page: renders /Projects/<folder>/info.md with status, search, category & year filters. */
(function () {
  'use strict';
  const E = window.Emolab;

  const STATUS = {
    'on-going': { label: 'On-going', badge: 'badge--status-ongoing badge--live', heading: 'On-going projects' },
    finished: { label: 'Finished', badge: 'badge--status-finished', heading: 'Finished projects' },
  };
  const COVER_COLORS = [['#1a1a1a', '#3b3b3b'], ['#755a23', '#9e7e38'], ['#2b2b2b', '#755a23'], ['#5c4a22', '#1a1a1a']];

  const state = { status: '', q: '', category: '', year: '', tags: new Set() };
  let panel;
  let projects = [];
  const $ = (id) => document.getElementById(id);

  // "On-going", "ongoing", "Active" → 'on-going'; everything else → 'finished'.
  const statusKey = (s) => (/^(on-?going|active|current|recruiting)$/i.test(String(s || '').trim()) ? 'on-going' : 'finished');

  function prepare(items) {
    return items.map((p) => {
      const keywords = E.toArray(p.keywords).map(String);
      const status = statusKey(p.status);
      return {
        ...p,
        status,
        keywords,
        year: p.year != null ? String(p.year) : '',
        category: p.category ? String(p.category) : '',
        cover: E.resolvePath(p.base, p.cover || 'cover.jpg'),
        haystack: E.normalize([p.title, p.summary, p.category, p.year, keywords.join(' '), p.body].join(' ')),
      };
    }).sort((a, b) => (a.order ?? 999) - (b.order ?? 999) || (Number(b.year) || 0) - (Number(a.year) || 0) || String(a.title).localeCompare(String(b.title)));
  }

  function coverFallback(p) {
    let hash = 0;
    for (const ch of p.slug) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
    const [c1, c2] = COVER_COLORS[hash % COVER_COLORS.length];
    return `<div class="cover-fallback" style="background:linear-gradient(135deg, ${c1}, ${c2})">
      <svg viewBox="0 0 320 180" preserveAspectRatio="none" aria-hidden="true"><path d="M0 120 C40 120 50 60 80 60 S120 140 160 140 S200 40 240 40 S290 110 320 100" fill="none" stroke="#fff" stroke-width="2"/><path d="M0 150 C50 150 70 110 110 110 S170 160 210 150 S280 120 320 130" fill="none" stroke="#fff" stroke-width="1.5" opacity=".6"/></svg>
      <span>${E.escape(p.category || 'Emolab')}</span></div>`;
  }

  function card(p) {
    const st = STATUS[p.status];
    const links = [];
    if (p.study_url && p.status === 'on-going') {
      // Studies (including ones hosted in this repo, e.g. psychopy-experiments/) open in a new tab.
      links.push(`<a class="btn btn--sm btn--accent" href="${E.escape(p.study_url)}" target="_blank" rel="noopener">${E.icon('flask')} Take part</a>`);
    }
    if (p.preregistration_url) links.push(`<a class="btn btn--sm btn--ghost" href="${E.escape(p.preregistration_url)}"${E.linkAttrs(p.preregistration_url)}>${E.icon('clipboard')} Pre-registration</a>`);
    if (p.publication_url) links.push(`<a class="btn btn--sm btn--ghost" href="${E.escape(p.publication_url)}"${E.linkAttrs(p.publication_url)}>${E.icon('file')} Publication</a>`);
    if (p.archive_url) links.push(`<a class="btn btn--sm btn--ghost" href="${E.escape(p.archive_url)}"${E.linkAttrs(p.archive_url)}>${E.icon('external')} Data &amp; materials</a>`);

    return `
      <article class="card card--hover project-card" id="project-${E.escape(p.slug)}">
        <div class="project-cover">
          <img src="${E.escape(p.cover)}" alt="" loading="lazy" decoding="async" onerror="this.hidden=true;this.nextElementSibling.hidden=false">
          <div hidden style="height:100%">${coverFallback(p)}</div>
          <span class="badge ${st.badge}">${st.label}</span>
        </div>
        <div class="project-body">
          <div class="project-meta">
            ${p.category ? `<span>${E.escape(p.category)}</span>` : ''}
            ${p.year ? `<span>${E.escape(p.year)}</span>` : ''}
            ${E.sampleBadge(p)}
          </div>
          <h3>${E.escape(p.title || p.slug)}</h3>
          ${p.summary ? `<p>${E.escape(p.summary)}</p>` : ''}
          ${p.keywords.length ? `<div class="tags">${p.keywords.map((k) => `<button type="button" class="tag" data-keyword="${E.escape(k)}">${E.escape(k)}</button>`).join('')}</div>` : ''}
          ${p.body.trim() ? `<details class="project-more"><summary>About this project</summary><div class="prose">${p.html}</div></details>` : ''}
          ${links.length ? `<div class="project-actions">${links.join('')}</div>` : ''}
        </div>
      </article>`;
  }

  function render() {
    const terms = E.normalize(state.q).split(/\s+/).filter(Boolean);
    const base = projects.filter((p) =>
      (!state.category || p.category === state.category) &&
      (!state.year || p.year === state.year) &&
      [...state.tags].every((t) => p.keywords.includes(t)) &&
      terms.every((t) => p.haystack.includes(t)));
    const shown = base.filter((p) => !state.status || p.status === state.status);

    // Status counts reflect the other active filters.
    document.querySelectorAll('#proj-status button').forEach((b) => {
      const s = b.dataset.status;
      b.setAttribute('aria-pressed', String(s === state.status));
      b.querySelector('.count').textContent = s ? base.filter((p) => p.status === s).length : base.length;
    });

    const active = (terms.length ? 1 : 0) + (state.category ? 1 : 0) + (state.year ? 1 : 0) + (state.status ? 1 : 0) + state.tags.size;
    const filtered = active > 0;
    panel.setActive(active);
    document.querySelectorAll('#proj-tags .chip').forEach((c) => c.setAttribute('aria-pressed', String(state.tags.has(c.dataset.tag))));
    $('proj-count').textContent = filtered ? `Showing ${shown.length} of ${projects.length} projects` : `${projects.length} projects`;
    $('proj-clear').hidden = !filtered;

    const el = $('projects');
    if (!shown.length) return E.renderState(el, 'No projects match your filters.', 'Try a different keyword or clear the filters.');

    const sections = state.status ? [state.status] : ['on-going', 'finished'];
    el.innerHTML = sections.map((s) => {
      const list = shown.filter((p) => p.status === s);
      if (!list.length) return '';
      return `<section class="project-section" aria-labelledby="sec-${s}">
        <h2 id="sec-${s}">${STATUS[s].heading} <span class="count">${list.length}</span></h2>
        <div class="grid projects-grid">${list.map(card).join('')}</div>
      </section>`;
    }).join('');
  }

  function fillOptions(select, values) {
    select.insertAdjacentHTML('beforeend', values.map((v) => `<option value="${E.escape(v)}">${E.escape(v)}</option>`).join(''));
  }

  function bind() {
    const search = $('proj-search');
    search.addEventListener('input', E.debounce(() => { state.q = search.value.trim(); render(); }, 80));
    $('proj-category').addEventListener('change', (e) => { state.category = e.target.value; render(); });
    $('proj-year').addEventListener('change', (e) => { state.year = e.target.value; render(); });
    $('proj-status').addEventListener('click', (e) => {
      const b = e.target.closest('button[data-status]');
      if (b) { state.status = b.dataset.status; render(); }
    });
    const toggleTag = (tag) => {
      if (state.tags.has(tag)) state.tags.delete(tag);
      else state.tags.add(tag);
      render();
    };
    $('proj-tags').addEventListener('click', (e) => { const c = e.target.closest('[data-tag]'); if (c) toggleTag(c.dataset.tag); });
    // Clicking a keyword on a card selects just that keyword.
    $('projects').addEventListener('click', (e) => {
      const t = e.target.closest('[data-keyword]');
      if (!t) return;
      state.tags = new Set([t.dataset.keyword]);
      render();
      $('proj-count').scrollIntoView({ block: 'nearest' });
    });
    $('proj-clear').addEventListener('click', () => {
      Object.assign(state, { status: '', q: '', category: '', year: '', tags: new Set() });
      search.value = ''; $('proj-category').value = ''; $('proj-year').value = '';
      render();
      search.focus();
    });
  }

  async function init() {
    const el = $('projects');
    E.renderLoading(el, 3);
    try {
      projects = prepare(await E.loadCollection('projects'));
    } catch (err) {
      return E.loadError(el, err);
    }
    el.removeAttribute('aria-busy');
    if (!projects.length) return E.renderState(el, 'No projects listed yet.', 'Add a folder with an <code>info.md</code> to <code>Projects/</code>.');

    fillOptions($('proj-category'), [...new Set(projects.map((p) => p.category).filter(Boolean))].sort());
    fillOptions($('proj-year'), [...new Set(projects.map((p) => p.year).filter(Boolean))].sort((a, b) => b.localeCompare(a)));
    const chips = E.tagChips(projects, 'keywords');
    if (chips) {
      $('proj-tags').innerHTML = chips;
      $('proj-tags-row').hidden = false;
    }
    panel = E.filterPanel('proj');
    bind();
    render();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
