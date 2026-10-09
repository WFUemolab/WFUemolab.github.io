/* Media page: data/media.yml → Substack, podcasts, TV & news, YouTube video. */
(function () {
  'use strict';
  const E = window.Emolab;

  const byDateDesc = (a, b) => E.isoDate(b.date).localeCompare(E.isoDate(a.date));
  const list = (v) => E.toArray(v).filter((x) => x && x.title).sort(byDateDesc);

  // Accept a bare ID or any common YouTube URL form.
  function youtubeId(v) {
    if (!v) return '';
    const m = /(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/.exec(v);
    return m ? m[1] : /^[\w-]{11}$/.test(v) ? v : '';
  }

  function sectionHead(id, icon, title, lead) {
    return `<h2 id="${id}-title"><span class="theme-icon">${E.icon(icon)}</span>${title}</h2>${lead ? `<p class="lead">${lead}</p>` : ''}`;
  }

  // Cover image for podcast/press cards; falls back to a branded card with the outlet name.
  function coverBlock(item, label) {
    const fallback = `<div class="outlet-cover"${item.cover ? ' hidden' : ''}><span>${E.escape(label || item.title)}</span></div>`;
    const img = item.cover
      ? `<img src="${E.escape(item.cover)}" alt="" loading="lazy" decoding="async"${item.cover_fit === 'contain' ? ' class="is-contain"' : ''} onerror="this.nextElementSibling.hidden=false;this.remove()">`
      : '';
    const inner = img + fallback;
    return item.url
      ? `<a class="post-cover" href="${E.escape(item.url)}"${E.linkAttrs(item.url)} tabindex="-1" aria-hidden="true">${inner}</a>`
      : `<div class="post-cover" aria-hidden="true">${inner}</div>`;
  }

  function coverCard(item, opts, label) {
    return `<article class="card card--hover post-card">${coverBlock(item, label)}${mediaCard(item, opts, true)}</article>`;
  }

  function mediaCard(item, { kicker, cta = 'Open' }, bare = false) {
    const url = item.url;
    return `
      <article class="${bare ? '' : 'card card--hover '}media-card">
        <div class="media-top">
          ${kicker ? `<span class="badge">${E.escape(kicker)}</span>` : ''}
          ${item.date ? `<time datetime="${E.escape(E.isoDate(item.date))}">${E.escape(E.formatDate(item.date))}</time>` : ''}
          ${E.sampleBadge(item)}
        </div>
        <h3>${url ? `<a href="${E.escape(url)}"${E.linkAttrs(url)}>${E.escape(item.title)}</a>` : E.escape(item.title)}</h3>
        ${item.description ? `<p>${E.escape(item.description)}</p>` : ''}
        ${item.embed ? `<iframe src="${E.escape(item.embed)}" height="${Number(item.embed_height) || 152}" loading="lazy" title="${E.escape(item.title)}" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>` : ''}
        ${url ? `<a class="btn btn--sm btn--ghost" href="${E.escape(url)}"${E.linkAttrs(url)}>${E.escape(cta)} ${E.icon('external')}</a>` : ''}
      </article>`;
  }

  // Latest Substack posts, refreshed daily into data/substack.json by scripts/update_substack.py.
  function postCard(p) {
    return `
      <article class="card card--hover post-card">
        <a class="post-cover" href="${E.escape(p.url)}" target="_blank" rel="noopener noreferrer" tabindex="-1" aria-hidden="true">
          ${p.cover ? `<img src="${E.escape(p.cover)}" alt="" loading="lazy" decoding="async" onerror="this.remove()">` : ''}
        </a>
        <div class="media-card">
          <div class="media-top">
            <span class="badge badge--gold">Substack</span>
            ${p.date ? `<time datetime="${E.escape(E.isoDate(p.date))}">${E.escape(E.formatDate(p.date))}</time>` : ''}
          </div>
          <h3><a href="${E.escape(p.url)}" target="_blank" rel="noopener noreferrer">${E.escape(p.title)}</a></h3>
          ${p.subtitle ? `<p>${E.escape(p.subtitle)}</p>` : ''}
          <a class="btn btn--sm btn--ghost" href="${E.escape(p.url)}" target="_blank" rel="noopener noreferrer">Read post ${E.icon('external')}</a>
        </div>
      </article>`;
  }

  // Writing entries with a `cover:` image (e.g. books) show the front cover beside the details.
  function bookCard(p) {
    const link = (inner, extra = '') => (p.url ? `<a href="${E.escape(p.url)}"${E.linkAttrs(p.url)}${extra}>${inner}</a>` : inner);
    return `
      <article class="card card--hover book-card">
        ${link(`<img src="${E.escape(p.cover)}" alt="Front cover of ${E.escape(p.title)}" loading="lazy" decoding="async">`, ' class="book-cover" tabindex="-1"')}
        <div class="media-card">
          <div class="media-top">
            <span class="badge">${E.escape(p.outlet || 'Book')}</span>
            ${p.date ? `<time datetime="${E.escape(E.isoDate(p.date))}">${E.escape(E.formatDate(p.date))}</time>` : ''}
          </div>
          <h3>${link(E.escape(p.title))}</h3>
          ${p.description ? `<p>${E.escape(p.description)}</p>` : ''}
          ${p.url ? `<a class="btn btn--sm btn--ghost" href="${E.escape(p.url)}"${E.linkAttrs(p.url)}>View book ${E.icon('external')}</a>` : ''}
        </div>
      </article>`;
  }

  function writing(data, latest) {
    const sub = data.substack || {};
    const url = sub.url || 'https://christianwaugh.substack.com';
    const posts = list(data.writing);
    const recent = latest.slice(0, 3);
    return `
      <section class="media-section" id="writing" aria-labelledby="writing-title">
        ${sectionHead('writing', 'pen', 'Substack &amp; writing', 'Essays and public writing on the science of emotion, stress, and well-being.')}
        <div class="card substack">
          <div class="substack-main">
            <span class="badge badge--gold" style="align-self:flex-start">Substack</span>
            <h3>${E.escape(sub.title || 'Christian Waugh on Substack')}</h3>
            <p>${E.escape(sub.description || 'Dr. Waugh writes about emotion, stress, and resilience for a general audience.')}</p>
            <a class="btn" href="${E.escape(url)}" target="_blank" rel="noopener noreferrer">Read on Substack ${E.icon('arrow')}</a>
          </div>
          <div class="substack-embed">
            <iframe src="${E.escape(url.replace(/\/$/, ''))}/embed" title="Subscribe to ${E.escape(sub.title || 'the Substack')}" loading="lazy" scrolling="no"></iframe>
          </div>
        </div>
        ${recent.length ? `<h3 class="subhead">Latest posts</h3><div class="grid posts posts--latest">${recent.map(postCard).join('')}</div>` : ''}
        ${posts.length ? `<h3 class="subhead">More writing</h3><div class="grid posts">${posts.map((p) => (p.cover ? bookCard(p) : mediaCard(p, { kicker: p.outlet || 'Essay', cta: 'Read' }))).join('')}</div>` : ''}
      </section>`;
  }

  function simpleSection(id, icon, title, lead, items, opts, label) {
    if (!items.length) return '';
    return `
      <section class="media-section" id="${id}" aria-labelledby="${id}-title">
        ${sectionHead(id, icon, title, lead)}
        <div class="grid" style="--min:280px">${items.map((i) => coverCard(i, opts(i), label(i))).join('')}</div>
      </section>`;
  }

  function videoCard(v) {
    const id = youtubeId(v.youtube || v.youtube_id || v.url);
    const frame = id
      ? `<button class="video-poster" type="button" data-yt="${E.escape(id)}" aria-label="Play video: ${E.escape(v.title)}">
           <img src="https://i.ytimg.com/vi/${E.escape(id)}/hqdefault.jpg" alt="" loading="lazy">
           <span class="video-play">${E.icon('play')}</span>
         </button>`
      : `<div class="cover-fallback" style="background:linear-gradient(135deg,#1a1a1a,#3b3b3b)">${E.icon('video')}</div>`;
    return `
      <article class="card video-card">
        <div class="video-frame">${frame}</div>
        ${mediaCard({ ...v, url: v.url || (id ? `https://www.youtube.com/watch?v=${id}` : '') }, { kicker: v.source || 'Video', cta: 'Watch on YouTube' })}
      </article>`;
  }

  function videos(items) {
    return `
      <section class="media-section" id="videos" aria-labelledby="videos-title">
        ${sectionHead('videos', 'video', 'Video', 'Talks, lectures, and video interviews.')}
        ${items.length ? `<div class="grid" style="--min:300px">${items.map(videoCard).join('')}</div>` : '<div class="state">No videos yet.</div>'}
      </section>`;
  }

  async function init() {
    const el = document.getElementById('media');
    E.renderLoading(el, 3);
    let data;
    try {
      data = (await E.fetchYaml('data/media.yml')) || {};
    } catch (err) {
      return E.loadError(el, err);
    }
    // Optional: if the posts file is missing, the Substack panel is shown without them.
    const latest = await E.fetchText('data/substack.json')
      .then((t) => E.toArray(JSON.parse(t).posts).filter((p) => p && p.title && p.url).sort(byDateDesc))
      .catch(() => []);
    el.removeAttribute('aria-busy');

    const podcasts = list(data.podcasts);
    const press = list(data.press);
    el.innerHTML = [
      writing(data, latest),
      simpleSection('podcasts', 'mic', 'Podcasts', 'Conversations about emotion science and stress.', podcasts,
        (p) => ({ kicker: p.show || 'Podcast', cta: 'Listen' }), (p) => p.show),
      simpleSection('press', 'tv', 'TV interviews &amp; news', 'Press coverage of lab research and media appearances.', press,
        (p) => ({ kicker: [p.outlet, p.type].filter(Boolean).join(' · ') || 'News', cta: p.type && /tv|video/i.test(p.type) ? 'Watch' : 'Read' }), (p) => p.outlet),
      videos(list(data.videos)),
    ].join('');

    // Hide jump links for empty sections.
    document.querySelectorAll('.jump .chip').forEach((a) => {
      if (!document.querySelector(a.getAttribute('href'))) a.hidden = true;
    });

    // Load the YouTube player only when a visitor clicks play (privacy-enhanced domain).
    el.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-yt]');
      if (!btn) return;
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube-nocookie.com/embed/${btn.dataset.yt}?autoplay=1&rel=0`;
      iframe.title = btn.getAttribute('aria-label').replace(/^Play video: /, '');
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      btn.replaceWith(iframe);
    });

    if (location.hash) document.querySelector(location.hash)?.scrollIntoView();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
