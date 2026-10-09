/* Home page: research themes + latest news timeline (data/news.yml). */
(function () {
  'use strict';
  const E = window.Emolab;

  const THEMES = [
    { icon: 'clock', title: 'Temporal dynamics', text: 'How emotional experiences unfold, peak, and fade over time — and why some linger longer than others.' },
    { icon: 'shield', title: 'Emotional resilience', text: 'What allows some people to recover quickly and flexibly from stress and negative events.' },
    { icon: 'sun', title: 'Positive emotions', text: 'How positive emotions and positive interventions help regulate stressful experiences.' },
    { icon: 'brain', title: 'Brain & body', text: 'Neural and psychophysiological measures that reveal emotion and stress regulation as they happen.' },
  ];

  const NEWS_CATEGORY_STYLE = {
    publication: 'badge--accent',
    grant: 'badge--gold',
    award: 'badge--gold',
    member: '',
    project: 'badge--accent',
    media: 'badge--muted',
  };
  const INITIAL_NEWS = 5;

  function renderThemes() {
    document.getElementById('themes').innerHTML = THEMES.map((t) => `
      <article class="card theme">
        <div class="theme-icon">${E.icon(t.icon)}</div>
        <h3>${E.escape(t.title)}</h3>
        <p>${E.escape(t.text)}</p>
      </article>`).join('');
  }

  function newsItem(n) {
    const cat = String(n.category || '').trim();
    const style = NEWS_CATEGORY_STYLE[cat.toLowerCase()] ?? '';
    const link = n.link && n.link.url
      ? `<a class="btn btn--link" href="${E.escape(n.link.url)}"${E.linkAttrs(n.link.url)}>${E.escape(n.link.label || 'Read more')} ${E.icon('arrow')}</a>`
      : '';
    return `
      <li class="news-item">
        <article class="card news-card">
          <div class="news-top">
            <time class="news-date" datetime="${E.escape(E.isoDate(n.date))}">${E.escape(E.formatDate(n.date))}</time>
            ${cat ? `<span class="badge ${style}">${E.escape(cat)}</span>` : ''}
            ${E.sampleBadge(n)}
          </div>
          <h3>${E.escape(n.title)}</h3>
          ${n.text ? `<div class="prose">${E.markdown(n.text)}</div>` : ''}
          ${link}
        </article>
      </li>`;
  }

  async function renderNews() {
    const el = document.getElementById('news');
    E.renderLoading(el, 2);
    try {
      const news = (E.toArray(await E.fetchYaml('data/news.yml')))
        .filter((n) => n && n.title)
        .sort((a, b) => E.isoDate(b.date).localeCompare(E.isoDate(a.date)));
      if (!news.length) return E.renderState(el, 'No news yet.', 'Check back soon.');

      el.removeAttribute('aria-busy');
      el.innerHTML = `<ol class="timeline" id="news-list">${news.slice(0, INITIAL_NEWS).map(newsItem).join('')}</ol>
        ${news.length > INITIAL_NEWS ? '<div class="news-more"><button class="btn btn--ghost" type="button" id="news-more">Show all news</button></div>' : ''}`;

      const more = document.getElementById('news-more');
      if (more) {
        more.addEventListener('click', () => {
          document.getElementById('news-list').insertAdjacentHTML('beforeend', news.slice(INITIAL_NEWS).map(newsItem).join(''));
          more.parentElement.remove();
        });
      }
    } catch (err) {
      E.loadError(el, err);
    }
  }

  function init() {
    renderThemes();
    renderNews();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
