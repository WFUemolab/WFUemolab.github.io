/* People page: renders /Roster/*.md grouped by the `role` front-matter tag. */
(function () {
  'use strict';
  const E = window.Emolab;

  // Display order of groups; `roles` are matched case-insensitively against front matter.
  const GROUPS = [
    { id: 'pi', title: 'Principal Investigator', roles: ['pi'], variant: 'pi' },
    { id: 'postdocs', title: 'Postdoctoral Researchers', roles: ['postdoc'] },
    { id: 'phd', title: 'PhD Students', roles: ['phd'] },
    { id: 'masters', title: 'Master’s Students', roles: ['master', 'masters'] },
    { id: 'staff', title: 'Lab Staff', roles: ['staff', 'lab manager', 'research assistant'] },
    { id: 'undergrads', title: 'Undergraduate Researchers', roles: ['undergrad', 'undergraduate'] },
    { id: 'alumni', title: 'Alumni', roles: ['former postdoc', 'former phd', 'former master', 'former masters', 'former staff', 'former undergrad'], variant: 'alumni' },
  ];

  const ROLE_LABELS = {
    pi: 'Principal Investigator',
    postdoc: 'Postdoctoral Researcher',
    phd: 'PhD Student',
    master: 'Master’s Student',
    masters: 'Master’s Student',
    staff: 'Lab Staff',
    'lab manager': 'Lab Manager',
    'research assistant': 'Research Assistant',
    undergrad: 'Undergraduate Researcher',
    undergraduate: 'Undergraduate Researcher',
    'former postdoc': 'Former Postdoc',
    'former phd': 'Former PhD Student',
    'former master': 'Former Master’s Student',
    'former masters': 'Former Master’s Student',
    'former staff': 'Former Lab Staff',
    'former undergrad': 'Former Undergraduate',
  };

  // Front-matter `links:` keys → icon + accessible label.
  const LINKS = [
    ['cv', 'file', 'CV'],
    ['scholar', 'scholar', 'Google Scholar'],
    ['website', 'globe', 'Personal website'],
    ['orcid', 'orcid', 'ORCID'],
    ['substack', 'pen', 'Substack'],
    ['researchgate', 'book', 'ResearchGate'],
    ['youtube', 'video', 'YouTube'],
    ['twitter', 'x', 'X / Twitter'],
    ['x', 'x', 'X / Twitter'],
    ['bluesky', 'bluesky', 'Bluesky'],
    ['linkedin', 'linkedin', 'LinkedIn'],
    ['github', 'github', 'GitHub'],
  ];

  // Files in Roster/Alumni/ are always former members, even if `role` still says e.g. "PhD".
  const roleKey = (p) => {
    const key = E.normalize(p.role).trim().replace(/[’']/g, '').replace(/\s+/g, ' ');
    return /\/alumni\//i.test(p.path) && !key.startsWith('former') ? `former ${key}` : key;
  };
  const lastName = (p) => E.normalize(String(p.title || '').trim().split(/\s+/).pop());

  function bySort(a, b) {
    const oa = a.order ?? 999;
    const ob = b.order ?? 999;
    return oa - ob || lastName(a).localeCompare(lastName(b));
  }

  // Alumni: by former role (postdoc → PhD → master's → …), then most recent first, then name.
  const ALUMNI_ROLES = ['former postdoc', 'former phd', 'former master', 'former masters', 'former staff', 'former undergrad'];
  function alumniSort(a, b) {
    return ALUMNI_ROLES.indexOf(roleKey(a)) - ALUMNI_ROLES.indexOf(roleKey(b))
      || (Number(b.end_year) || 0) - (Number(a.end_year) || 0)
      || bySort(a, b);
  }

  function socialLinks(p) {
    const links = p.links || {};
    const items = [];
    if (p.email) items.push(`<a href="mailto:${E.escape(p.email)}" aria-label="Email ${E.escape(p.title)}" title="${E.escape(p.email)}">${E.icon('mail')}</a>`);
    const seen = new Set();
    for (const [key, icon, label] of LINKS) {
      const url = links[key];
      if (!url || seen.has(url)) continue;
      seen.add(url);
      items.push(`<a href="${E.escape(url)}"${E.linkAttrs(url)} aria-label="${label}: ${E.escape(p.title)}" title="${label}">${E.icon(icon)}</a>`);
    }
    return items.length ? `<div class="social">${items.join('')}</div>` : '';
  }

  // Photos are relative to Roster/ (shared Roster/photos/ folder), wherever the profile file lives.
  const photoOf = (p) => E.resolvePath('Roster/', p.photo);
  const titleOf = (p) => p.position || ROLE_LABELS[roleKey(p)] || p.role || '';
  const pronouns = (p) => (p.pronouns ? ` <span class="person-pronouns">(${E.escape(p.pronouns)})</span>` : '');

  function piCard(p) {
    return `
      <article class="card pi-card" id="person-${E.escape(p.slug)}">
        ${E.avatar(p.title, photoOf(p))}
        <div>
          <h3>${E.escape(p.title)}${pronouns(p)} ${E.sampleBadge(p)}</h3>
          <p class="person-title">${E.escape(titleOf(p))}</p>
          <div class="prose">${p.html || E.markdown(p.summary)}</div>
          <div class="person-footer">${socialLinks(p)}</div>
        </div>
      </article>`;
  }

  function personCard(p) {
    const hasBio = p.body.trim().length > 0;
    return `
      <article class="card card--hover person-card" id="person-${E.escape(p.slug)}">
        ${E.avatar(p.title, photoOf(p))}
        <h3>${E.escape(p.title)}${pronouns(p)}</h3>
        <p class="person-title">${E.escape(titleOf(p))}</p>
        ${E.sampleBadge(p)}
        ${p.summary ? `<p class="person-summary">${E.escape(p.summary)}</p>` : '<span class="person-summary"></span>'}
        <div class="person-footer">
          ${socialLinks(p)}
          ${hasBio ? `<button class="btn btn--sm btn--ghost" type="button" data-bio="${E.escape(p.slug)}">Full bio</button>` : ''}
        </div>
      </article>`;
  }

  function alumCard(p) {
    const years = [p.start_year, p.end_year].filter(Boolean).join('–');
    return `
      <article class="card alum-card" id="person-${E.escape(p.slug)}">
        ${E.avatar(p.title, photoOf(p))}
        <div>
          <h3>${E.escape(p.title)} ${E.sampleBadge(p)}</h3>
          <div class="alum-meta">${E.escape(titleOf(p))}${years ? ` · ${E.escape(years)}` : ''}</div>
          ${p.current_position ? `<div class="alum-now">Now: ${E.escape(p.current_position)}</div>` : ''}
          ${socialLinks(p)}
        </div>
      </article>`;
  }

  function renderGroup(group, people) {
    const body = group.variant === 'pi'
      ? people.map(piCard).join('')
      : group.variant === 'alumni'
        ? `<div class="grid alumni-grid">${people.map(alumCard).join('')}</div>`
        : `<div class="grid people-grid">${people.map(personCard).join('')}</div>`;
    const count = group.variant === 'pi' ? '' : `<span class="count">${people.length}</span>`;
    return `
      <section class="people-group" id="${group.id}" aria-labelledby="${group.id}-title">
        <h2 class="group-title" id="${group.id}-title">${group.title} ${count}</h2>
        ${body}
      </section>`;
  }

  function openBio(p) {
    const dialog = document.getElementById('bio-dialog');
    document.getElementById('bio-content').innerHTML = `
      <div class="bio-head">
        ${E.avatar(p.title, photoOf(p))}
        <div>
          <h2 id="bio-name">${E.escape(p.title)}${pronouns(p)}</h2>
          <p class="person-title" style="margin:0">${E.escape(titleOf(p))}</p>
        </div>
      </div>
      <div class="prose">${p.html}</div>
      <div class="person-footer" style="justify-content:flex-start">${socialLinks(p)}</div>`;
    dialog.querySelector('[data-close]').innerHTML = E.icon('close');
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
  }

  async function init() {
    const el = document.getElementById('people');
    E.renderLoading(el, 4);
    let roster;
    try {
      roster = await E.loadCollection('roster');
    } catch (err) {
      return E.loadError(el, err);
    }
    if (!roster.length) return E.renderState(el, 'No lab members listed yet.', 'Add Markdown files to the <code>Roster/</code> folder.');

    const known = new Set(GROUPS.flatMap((g) => g.roles));
    const unknown = roster.filter((p) => !known.has(roleKey(p)));
    unknown.forEach((p) => console.warn(`[Emolab] ${p.path}: unrecognised role "${p.role}" — shown under Lab Members.`));

    const groups = GROUPS.map((g) => ({
      ...g,
      people: roster.filter((p) => g.roles.includes(roleKey(p))).sort(g.variant === 'alumni' ? alumniSort : bySort),
    }));
    if (unknown.length) groups.splice(groups.length - 1, 0, { id: 'members', title: 'Lab Members', people: unknown.sort(bySort) });
    const visible = groups.filter((g) => g.people.length);

    el.removeAttribute('aria-busy');
    el.innerHTML = visible.map((g) => renderGroup(g, g.people)).join('');

    // Jump navigation (only worth showing with 3+ groups).
    if (visible.length >= 3) {
      document.getElementById('jump').innerHTML = visible
        .map((g) => `<a class="chip" href="#${g.id}">${g.title}${g.variant === 'pi' ? '' : ` <span class="count">${g.people.length}</span>`}</a>`)
        .join('');
      document.querySelector('.jump').hidden = false;
    }

    // "Join the lab" call to action uses the PI's email when available.
    const pi = groups[0].people[0];
    if (pi && pi.email) {
      const link = document.getElementById('join-link');
      link.href = `mailto:${pi.email}`;
      link.textContent = `Email ${pi.title}`;
      document.getElementById('join').hidden = false;
    }

    // Full-bio dialog.
    const bySlug = new Map(roster.map((p) => [p.slug, p]));
    el.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-bio]');
      if (btn) openBio(bySlug.get(btn.dataset.bio));
    });
    const dialog = document.getElementById('bio-dialog');
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog || e.target.closest('[data-close]')) dialog.close();
    });

    // Honour #person-slug links after content renders.
    if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
