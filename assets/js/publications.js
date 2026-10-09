/* Publications page: data/publications.yml with live search, year/journal/topic filters. */
(function () {
  'use strict';
  const E = window.Emolab;

  // Always bolded, even if the roster fails to load.
  const ALWAYS_LAB = ['Waugh, C. E.'];

  const state = { q: '', year: '', venue: '', tags: new Set() };
  let pubs = [];
  let panel;
  let labKeys = new Set();

  const $ = (id) => document.getElementById(id);

  function doiUrl(doi) {
    if (!doi) return '';
    return /^https?:\/\//i.test(doi) ? doi : `https://doi.org/${String(doi).replace(/^doi:\s*/i, '')}`;
  }

  function authorsHtml(authors) {
    const names = authors.map((a) => (labKeys.has(E.authorKey(a)) ? `<strong>${E.escape(a)}</strong>` : E.escape(a)));
    return names.length > 1 ? `${names.slice(0, -1).join(', ')}, &amp; ${names[names.length - 1]}` : names.join('');
  }

  // Split an author string like "Waugh, C. E., Smith, J., & Lee, K." into names.
  function splitAuthors(value) {
    if (Array.isArray(value)) return value.map(String).map((s) => s.trim()).filter(Boolean);
    const s = String(value || '').replace(/\s*&\s*|\s+and\s+/g, ', ');
    // Pair "Last, I." chunks back together.
    const parts = s.split(/\s*,\s*/).filter(Boolean);
    const out = [];
    for (let i = 0; i < parts.length; i++) {
      if (i + 1 < parts.length && /^([A-Z]\.\s?-?)+$/.test(parts[i + 1].replace(/\s/g, ''))) {
        out.push(`${parts[i]}, ${parts[i + 1]}`);
        i++;
      } else out.push(parts[i]);
    }
    return out;
  }

  function prepare(raw) {
    return E.toArray(raw)
      .filter((p) => p && p.title)
      .map((p, i) => {
        const authors = splitAuthors(p.authors);
        const tags = E.toArray(p.keywords || p.tags).map(String);
        const year = p.year ? String(p.year) : 'In press';
        return {
          ...p,
          i,
          authors,
          tags,
          year,
          venue: p.journal || p.venue || '',
          haystack: E.normalize([p.title, authors.join(' '), p.journal, p.venue, year, tags.join(' '), p.abstract, p.doi].join(' ')),
        };
      })
      // Newest first; "In press" / unknown years on top; preserve file order within a year.
      .sort((a, b) => (Number(b.year) || 9999) - (Number(a.year) || 9999) || a.i - b.i);
  }

  function matches(p, terms) {
    if (state.year && p.year !== state.year) return false;
    if (state.venue && p.venue !== state.venue) return false;
    for (const t of state.tags) if (!p.tags.includes(t)) return false;
    return terms.every((t) => p.haystack.includes(t));
  }

  function pubItem(p) {
    const doi = doiUrl(p.doi);
    const titleUrl = doi || p.url || p.pdf || p.preprint;
    const details = [p.volume && (p.issue ? `${p.volume}(${p.issue})` : p.volume), p.pages].filter(Boolean).join(', ');
    const actions = [
      doi && `<a class="btn btn--sm btn--ghost" href="${E.escape(doi)}" target="_blank" rel="noopener noreferrer">${E.icon('external')} DOI</a>`,
      p.preprint && `<a class="btn btn--sm btn--ghost" href="${E.escape(p.preprint)}" target="_blank" rel="noopener noreferrer">${E.icon('file')} Preprint</a>`,
      p.pdf && `<a class="btn btn--sm btn--ghost" href="${E.escape(p.pdf)}"${E.linkAttrs(p.pdf)}>${E.icon('file')} PDF</a>`,
      p.osf && `<a class="btn btn--sm btn--ghost" href="${E.escape(p.osf)}" target="_blank" rel="noopener noreferrer">${E.icon('clipboard')} Data &amp; materials</a>`,
    ].filter(Boolean).join('');
    const tags = p.tags.length
      ? `<div class="tags">${p.tags.map((t) => `<button type="button" class="tag" data-tag="${E.escape(t)}">${E.escape(t)}</button>`).join('')}</div>`
      : '';
    return `
      <li class="card pub">
        <h3 class="pub-title">${titleUrl ? `<a href="${E.escape(titleUrl)}"${E.linkAttrs(titleUrl)}>${E.escape(p.title)}</a>` : E.escape(p.title)} ${E.sampleBadge(p)}</h3>
        <p class="pub-authors">${authorsHtml(p.authors)}</p>
        <p class="pub-venue">${p.venue ? `<em>${E.escape(p.venue)}</em>` : ''}${details ? `, ${E.escape(details)}` : ''}${p.venue || details ? '. ' : ''}${E.escape(p.year)}.</p>
        ${actions || tags ? `<div class="pub-actions">${actions}${tags}</div>` : ''}
        ${p.abstract ? `<details class="pub-abstract"><summary>Abstract</summary><p>${E.escape(String(p.abstract).trim())}</p></details>` : ''}
      </li>`;
  }

  function render() {
    const terms = E.normalize(state.q).split(/\s+/).filter(Boolean);
    const shown = pubs.filter((p) => matches(p, terms));
    const el = $('publications');

    const active = (terms.length ? 1 : 0) + (state.year ? 1 : 0) + (state.venue ? 1 : 0) + state.tags.size;
    const filtered = active > 0;
    panel.setActive(active);
    $('pub-count').textContent = filtered
      ? `Showing ${shown.length} of ${pubs.length} publications`
      : `${pubs.length} publications`;
    $('pub-clear').hidden = !filtered;
    document.querySelectorAll('#pub-tags .chip').forEach((c) => c.setAttribute('aria-pressed', String(state.tags.has(c.dataset.tag))));

    if (!shown.length) {
      E.renderState(el, 'No publications match your search.', 'Try a different keyword or clear the filters.');
      return;
    }

    const years = [];
    const byYear = new Map();
    for (const p of shown) {
      if (!byYear.has(p.year)) { byYear.set(p.year, []); years.push(p.year); }
      byYear.get(p.year).push(p);
    }
    el.innerHTML = years.map((y) => `
      <section class="pub-year" aria-label="${E.escape(y)}">
        <div class="pub-year-label${/^\d+$/.test(y) ? '' : ' pub-year-label--text'}">${E.escape(y)}</div>
        <ol class="pub-list">${byYear.get(y).map(pubItem).join('')}</ol>
      </section>`).join('');
    syncUrl();
  }

  function syncUrl() {
    const params = new URLSearchParams();
    if (state.q) params.set('q', state.q);
    if (state.year) params.set('year', state.year);
    if (state.venue) params.set('journal', state.venue);
    if (state.tags.size) params.set('topic', [...state.tags].join(','));
    const qs = params.toString();
    history.replaceState(null, '', qs ? `?${qs}` : location.pathname);
  }

  function readUrl() {
    const params = new URLSearchParams(location.search);
    state.q = params.get('q') || '';
    state.year = params.get('year') || '';
    state.venue = params.get('journal') || '';
    state.tags = new Set((params.get('topic') || '').split(',').filter(Boolean));
  }

  function fillOptions(select, values) {
    select.insertAdjacentHTML('beforeend', values.map((v) => `<option value="${E.escape(v)}">${E.escape(v)}</option>`).join(''));
  }

  function buildFilters() {
    fillOptions($('pub-year'), [...new Set(pubs.map((p) => p.year))]);
    fillOptions($('pub-venue'), [...new Set(pubs.map((p) => p.venue).filter(Boolean))].sort((a, b) => a.localeCompare(b)));

    const chips = E.tagChips(pubs, 'tags');
    if (chips) {
      $('pub-tags').innerHTML = chips;
      $('pub-tags-row').hidden = false;
    }
  }

  function bind() {
    const search = $('pub-search');
    search.value = state.q;
    $('pub-year').value = state.year;
    $('pub-venue').value = state.venue;

    search.addEventListener('input', E.debounce(() => { state.q = search.value.trim(); render(); }, 80));
    $('pub-year').addEventListener('change', (e) => { state.year = e.target.value; render(); });
    $('pub-venue').addEventListener('change', (e) => { state.venue = e.target.value; render(); });

    const toggleTag = (tag) => {
      if (state.tags.has(tag)) state.tags.delete(tag);
      else state.tags.add(tag);
      render();
    };
    $('pub-tags').addEventListener('click', (e) => { const c = e.target.closest('[data-tag]'); if (c) toggleTag(c.dataset.tag); });
    $('publications').addEventListener('click', (e) => {
      const c = e.target.closest('.tag[data-tag]');
      if (!c) return;
      state.tags = new Set([c.dataset.tag]);
      render();
      $('pub-count').scrollIntoView({ block: 'nearest' });
    });

    $('pub-clear').addEventListener('click', () => {
      state.q = ''; state.year = ''; state.venue = ''; state.tags.clear();
      search.value = ''; $('pub-year').value = ''; $('pub-venue').value = '';
      render();
      search.focus();
    });
  }

  async function init() {
    const el = $('publications');
    E.renderLoading(el, 3);
    try {
      // Roster is optional here: it only decides which authors are bolded.
      const [raw, roster] = await Promise.all([
        E.fetchYaml('data/publications.yml'),
        E.loadCollection('roster').catch(() => []),
      ]);
      labKeys = new Set([
        ...ALWAYS_LAB,
        ...roster.flatMap((p) => [p.title, ...E.toArray(p.aliases)]),
      ].map(E.authorKey).filter(Boolean));
      pubs = prepare(raw);
    } catch (err) {
      return E.loadError(el, err);
    }
    el.removeAttribute('aria-busy');
    if (!pubs.length) return E.renderState(el, 'No publications listed yet.', 'Add entries to <code>data/publications.yml</code>.');

    panel = E.filterPanel('pub');
    readUrl();
    buildFilters();
    bind();
    render();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
