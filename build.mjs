// Gera o site estático em docs/ a partir de src/. Só biblioteca padrão do Node, sem dependências.
import { mkdirSync, rmSync, writeFileSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { gzipSync } from 'node:zlib';
import { site, ui, stack, projects, experience, education, certifications, languages } from './src/content.mjs';

const OUT = 'docs';
const LANGS = ['pt', 'en'];
const files = new Map(); // caminho absoluto no site -> conteúdo

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const pick = (v, lang) => (typeof v === 'string' ? v : v[lang]);
const put = (path, content) => files.set(path, content);

// ---------------------------------------------------------------- layout --

function layout({ lang, path, title, description, body, ogType = 'website' }) {
  const t = ui[lang];
  const other = t.other.code;
  const url = `${site.base}/${lang}/${path}`;
  const navLink = (key, href) => {
    const current = path === href.replace(`/${lang}/`, '') || (key !== 'home' && path.startsWith(href.replace(`/${lang}/`, '')));
    return `<a class="nav-link" href="${href}"${current ? ' aria-current="page"' : ''}>${esc(t.nav[key])}</a>`;
  };
  return `<!doctype html>
<html lang="${t.htmlLang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="${lang}" href="${url}">
<link rel="alternate" hreflang="${other}" href="${site.base}/${other}/${path}">
<link rel="alternate" hreflang="x-default" href="${site.base}/">
<meta property="og:type" content="${ogType}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:locale" content="${t.htmlLang.replace('-', '_')}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<script>try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}</script>
<link rel="stylesheet" href="/assets/site.css">
<script src="/assets/site.js" defer></script>
</head>
<body>
<a class="skip" href="#conteudo">${esc(t.skip)}</a>
<header class="top">
  <nav class="nav wrap" aria-label="${esc(t.navLabel)}">
    <a class="brand" href="/${lang}/"><span class="brand-mark">${site.initials}</span><span>${esc(site.name)}</span></a>
    <div class="nav-links">${navLink('home', `/${lang}/`)}${navLink('projects', `/${lang}/projects/`)}${navLink('cv', '/curriculo/')}</div>
    <div class="nav-actions">
      <a class="lang-switch" href="/${other}/${path}" hreflang="${other}" lang="${other}" title="${esc(t.other.title)}">${other}</a>
      <button class="icon-button" type="button" data-theme-toggle aria-label="${esc(t.theme)}" title="${esc(t.theme)}">&#9680;</button>
    </div>
  </nav>
</header>
<main id="conteudo" class="wrap">
${body}
</main>
<footer>
  <div class="wrap"><span>${esc(t.footer)}</span><a href="${site.repo}">GitHub</a></div>
</footer>
</body>
</html>
`;
}

// -------------------------------------------------------------- partes ----

function stackBlock(lang) {
  const rows = stack
    .map((g) => `<dt>${esc(pick(g.k, lang))}</dt><dd>${g.v.map((x) => esc(pick(x, lang))).join(', ')}</dd>`)
    .join('\n    ');
  return `<section id="stack">
  <h2>${esc(ui[lang].stackTitle)}</h2>
  <dl class="stack">
    ${rows}
  </dl>
</section>`;
}

// Trabalhos feitos para um cliente da Opah IT só mostram o nome do cliente se site.showClients for true.
const fill = (text, e, lang) =>
  text.replace('{client}', e.client ? (site.showClients ? e.client.name : pick(e.client.generic, lang)) : '');
const orgLabel = (e) => (e.client && site.showClients ? `${e.org} (${e.client.name})` : e.org);

function experienceCompact(lang) {
  const t = ui[lang];
  return `<section id="experience">
  <h2>${esc(t.experienceTitle)}</h2>
  <ul class="timeline compact">
${experience
  .map((e) => `    <li><span><strong>${esc(pick(e.role, lang))}</strong>, ${esc(orgLabel(e))}</span><span class="when">${esc(pick(e.period, lang))}</span></li>`)
  .join('\n')}
  </ul>
  <p><a href="/${lang}/about/">${esc(t.fullExperience)} &rarr;</a></p>
</section>`;
}

function experienceFull(lang) {
  const t = ui[lang];
  const item = (e) => {
    const place = pick(e.place, lang);
    const summary = fill(pick(e.summary, lang), e, lang);
    const bullets = e.bullets[lang].map((b) => `<li>${esc(fill(b, e, lang))}</li>`).join('');
    return `    <li>
      <div><strong>${esc(pick(e.role, lang))}</strong>, ${esc(orgLabel(e))}</div>
      <div class="when">${esc(pick(e.period, lang))}${place ? ` · ${esc(place)}` : ''}</div>${summary ? `\n      <p>${esc(summary)}</p>` : ''}${bullets ? `\n      <ul class="features">${bullets}</ul>` : ''}
    </li>`;
  };
  return `<section id="experience">
  <h2>${esc(t.experienceTitle)}</h2>
  <ol class="timeline">
${experience.map(item).join('\n')}
  </ol>
</section>`;
}

function educationBlock(lang) {
  if (!education.length) return '';
  const t = ui[lang];
  return `<section id="education">
  <h2>${esc(t.educationTitle)}</h2>
  <ul class="timeline">
${education
  .map((e) => `    <li><div><strong>${esc(pick(e.title, lang))}</strong>${e.org ? `, ${esc(e.org)}` : ''}</div><div class="when">${esc(pick(e.period, lang))}</div></li>`)
  .join('\n')}
  </ul>
</section>`;
}

function certsBlock(lang) {
  const t = ui[lang];
  return `<section id="certifications">
  <h2>${esc(t.certsTitle)}</h2>
  <ul class="timeline">
${certifications
  .map((c) => `    <li><div><strong>${esc(c.title)}</strong>, ${esc(c.org)}</div>${c.date ? `<div class="when">${esc(pick(c.date, lang))}</div>` : ''}</li>`)
  .join('\n')}
  </ul>
</section>`;
}

function languagesBlock(lang) {
  const t = ui[lang];
  return `<section id="languages">
  <h2>${esc(t.languagesTitle)}</h2>
  <ul class="links">${languages.map((l) => `<li>${esc(pick(l, lang))}</li>`).join('')}</ul>
</section>`;
}

function contactBlock(lang) {
  const t = ui[lang];
  return `<section id="contact">
  <h2>${esc(t.contactTitle)}</h2>
  <p>${esc(t.contactText)}</p>
  <ul class="links">
    <li><a href="${site.linkedin}">LinkedIn</a><span class="url">linkedin.com/in/heitorqueiroz</span></li>
    <li><a href="${site.github}">GitHub</a><span class="url">github.com/${site.handle}</span></li>
  </ul>
</section>`;
}

function projectCards(lang, nivel = 3) {
  const t = ui[lang];
  return `<div class="cards">
${projects
  .map((p) => {
    const c = p[lang];
    const href = `/${lang}/projects/${p.slug}/`;
    return `  <article class="card">
    <h${nivel}><a href="${href}">${esc(c.title)}</a></h${nivel}>
    <p>${esc(c.summary)}</p>
    <p class="tech">${p.tech.map(esc).join(' / ')}</p>
    <a class="go" href="${href}">${esc(t.viewProject)} &rarr;</a>
  </article>`;
  })
  .join('\n')}
</div>`;
}

function treeBlock(p, lang) {
  const nodes = [];
  for (const raw of p.tree.lines[lang]) {
    const [namePart, comment = ''] = raw.split('|');
    if (/^\s/.test(namePart)) nodes.at(-1).kids.push({ name: namePart.trim(), comment });
    else nodes.push({ name: namePart.trim(), comment, kids: [] });
  }
  const rows = [];
  nodes.forEach((n, i) => {
    const last = i === nodes.length - 1;
    rows.push({ prefix: last ? '└─ ' : '├─ ', name: n.name, comment: n.comment });
    n.kids.forEach((k, j) =>
      rows.push({ prefix: `${last ? '   ' : '│  '}${j === n.kids.length - 1 ? '└─ ' : '├─ '}`, name: k.name, comment: k.comment })
    );
  });
  const width = Math.max(...rows.map((r) => r.prefix.length + r.name.length)) + 2;
  const lines = rows.map((r) => {
    const pad = ' '.repeat(width - r.prefix.length - r.name.length);
    return `${r.prefix}<span class="d">${esc(r.name)}</span>${r.comment ? `${pad}<span class="c">${esc(r.comment)}</span>` : ''}`;
  });
  return `<div class="tree" tabindex="0" role="group" aria-label="${esc(ui[lang].architecture)}"><pre><span class="d">${esc(p.tree.root)}</span>\n${lines.join('\n')}</pre></div>`;
}

function diagram(lang) {
  const q = lang === 'pt' ? 'filas' : 'queues';
  const o = lang === 'pt' ? 'objetos' : 'objects';
  const box = (x, y, w, h, cls, l1, l2) =>
    `<rect class="${cls}" x="${x}" y="${y}" width="${w}" height="${h}" rx="6"/>` +
    `<text class="dg-t" x="${x + w / 2}" y="${y + 22}" text-anchor="middle">${esc(l1)}</text>` +
    `<text class="dg-s" x="${x + w / 2}" y="${y + h - 12}" text-anchor="middle">${esc(l2)}</text>`;
  const line = (x, y1, y2) => `<line class="dg-l" x1="${x}" y1="${y1}" x2="${x}" y2="${y2}"/>`;
  return `<svg viewBox="0 0 680 300" role="img" aria-label="${esc(ui[lang].architecture)}" xmlns="http://www.w3.org/2000/svg">
${[120, 340, 560].map((x) => line(x, 64, 124)).join('')}${[90, 236, 372, 554].map((x) => line(x, 176, 232)).join('')}
${box(20, 16, 200, 48, 'dg-box', 'backoffice', 'Next.js')}${box(240, 16, 200, 48, 'dg-box', 'barbershop', 'Next.js')}${box(460, 16, 200, 48, 'dg-box', 'client', 'Next.js')}
${box(20, 124, 640, 52, 'dg-api', 'backend', 'NestJS · /api')}
${box(20, 232, 140, 52, 'dg-box', 'PostgreSQL', 'Prisma')}${box(176, 232, 120, 52, 'dg-box', 'Redis', q)}${box(312, 232, 120, 52, 'dg-box', 'MinIO', o)}${box(448, 232, 212, 52, 'dg-box', 'Stripe', 'checkout · webhooks · Connect')}
</svg>`;
}

// --------------------------------------------------------------- páginas ---

for (const lang of LANGS) {
  const t = ui[lang];

  put(
    `/${lang}/index.html`,
    layout({
      lang,
      path: '',
      title: `${site.name}, ${t.kicker}`,
      description: t.siteDesc,
      body: `<section class="hero">
  <p class="kicker">${esc(t.kicker)}</p>
  <h1>${esc(site.name)}</h1>
  <p class="lead">${esc(t.role)}</p>
  <p class="meta">${esc(pick(site.location, lang))}</p>
</section>
<section id="about">
  <h2>${esc(t.whoTitle)}</h2>
  ${t.who.map((p) => `<p>${esc(p)}</p>`).join('\n  ')}
</section>
${experienceCompact(lang)}
${stackBlock(lang)}
<section id="work">
  <h2>${esc(t.workTitle)}</h2>
  ${projectCards(lang)}
  <p><a href="/${lang}/projects/">${esc(t.allProjects)} &rarr;</a></p>
</section>
${contactBlock(lang)}`
    })
  );

  put(
    `/${lang}/projects/index.html`,
    layout({
      lang,
      path: 'projects/',
      title: `${t.projectsTitle} | ${site.name}`,
      description: t.projectsIntro,
      body: `<section>
  <h1>${esc(t.projectsTitle)}</h1>
  <p class="lead">${esc(t.projectsIntro)}</p>
  ${projectCards(lang, 2)}
</section>`
    })
  );

  for (const p of projects) {
    const c = p[lang];
    put(
      `/${lang}/projects/${p.slug}/index.html`,
      layout({
        lang,
        path: `projects/${p.slug}/`,
        title: `${c.title} | ${site.name}`,
        description: c.summary,
        ogType: 'article',
        body: `<p class="crumb"><a href="/${lang}/projects/">&larr; ${esc(t.back)}</a></p>
<section class="case-head">
  <h1>${esc(c.title)}</h1>
  <p class="lead">${esc(c.intro)}</p>
</section>
<section>
  <h2>${esc(t.whatItDoes)}</h2>
  <ul class="features">${c.features.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>
</section>
${
  p.diagram
    ? `<section>
  <h2>${esc(t.architecture)}</h2>
  <p>${esc(c.archNote)}</p>
  <figure class="figure" style="margin:0">${diagram(lang)}<figcaption>${esc(c.caption)}</figcaption></figure>
  ${treeBlock(p, lang)}
</section>`
    : ''
}
<section>
  <h2>Stack</h2>
  <p class="tech">${p.tech.map(esc).join(' / ')}</p>
</section>
<section>
  <h2>${esc(t.repository)}</h2>
  <p><a href="${p.repo}">${esc(p.repoLabel)}</a></p>
</section>`
      })
    );
  }

  put(
    `/${lang}/about/index.html`,
    layout({
      lang,
      path: 'about/',
      title: `${t.aboutTitle} | ${site.name}`,
      description: t.siteDesc,
      body: `<section>
  <h1>${esc(t.aboutTitle)}</h1>
  ${t.who.map((p) => `<p>${esc(p)}</p>`).join('\n  ')}
</section>
${experienceFull(lang)}
${educationBlock(lang)}
${certsBlock(lang)}
${languagesBlock(lang)}
${stackBlock(lang)}
${contactBlock(lang)}`
    })
  );
}

put(
  '/index.html',
  `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${site.name}</title>
<meta name="robots" content="noindex">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<script>location.replace('/' + ((navigator.language || 'pt').toLowerCase().indexOf('pt') === 0 ? 'pt' : 'en') + '/');</script>
</head>
<body>
<noscript><p><a href="/pt/">Português</a> · <a href="/en/">English</a></p></noscript>
</body>
</html>
`
);

put(
  '/404.html',
  `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>404 | ${site.name}</title>
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/assets/site.css">
</head>
<body>
<main class="wrap">
  <section>
    <h1>404</h1>
    <p>${ui.pt.notFoundText}</p>
    <p>${ui.en.notFoundText}</p>
    <p><a href="/pt/">Português</a> · <a href="/en/">English</a></p>
  </section>
</main>
</body>
</html>
`
);

put('/favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#2547D0"/><text x="16" y="22" font-family="sans-serif" font-size="15" font-weight="700" text-anchor="middle" fill="#fff">HQ</text></svg>\n`);
put('/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${site.base}/sitemap.xml\n`);

// llms.txt (llmstxt.org): guia em Markdown para agentes. Só o portfólio; o currículo 3D fica de fora de propósito.
put(
  '/llms.txt',
  [
    `# ${site.name}`,
    '',
    `> ${ui.pt.siteDesc} Site estático e bilíngue (PT-BR e EN), sem framework.`,
    '',
    ui.pt.role,
    '',
    '## Páginas',
    '',
    `- [Início](${site.base}/pt/): apresentação, experiência resumida, stack e projetos`,
    `- [Sobre](${site.base}/pt/about/): experiência completa, formação, certificações e idiomas`,
    `- [Projetos](${site.base}/pt/projects/): ${ui.pt.projectsIntro}`,
    `- [Home (English)](${site.base}/en/): versão em inglês do site`,
    '',
    '## Projetos pessoais',
    '',
    ...projects.map((p) => `- [${p.pt.title}](${site.base}/pt/projects/${p.slug}/): ${p.pt.summary}`),
    '',
    '## Contato',
    '',
    `- [LinkedIn](${site.linkedin})`,
    `- [GitHub](${site.github})`,
    ''
  ].join('\n')
);
put('/.nojekyll', '');
put('/assets/site.css', readFileSync('src/assets/site.css', 'utf8') + diagramCss());
put('/assets/site.js', readFileSync('src/assets/site.js', 'utf8'));
for (const f of ['QGYvz_MVcBeNP4NJtEtq.woff2', 'tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxDcwg.woff2']) put(`/assets/fonts/${f}`, readFileSync(`src/assets/fonts/${f}`));
put('/curriculo/index.html', readFileSync('src/curriculo.html', 'utf8'));

const pages = [...files.keys()].filter((k) => /\/(index\.html)$/.test(k) && k !== '/index.html').map((k) => k.replace('index.html', ''));
put(
  '/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((p) => `  <url><loc>${site.base}${p}</loc></url>`).join('\n')}\n</urlset>\n`
);

function diagramCss() {
  return `
/* diagrama da arquitetura */
.dg-box { fill: var(--surface); stroke: var(--line); stroke-width: 1.5; }
.dg-api { fill: var(--accent-soft); stroke: var(--accent); stroke-width: 1.5; }
.dg-t { fill: var(--ink); font: 600 13px var(--mono); }
.dg-s { fill: var(--muted); font: 400 11px var(--mono); }
.dg-l { stroke: var(--muted); stroke-width: 1.5; fill: none; }
`;
}

// ------------------------------------------------------ verificação e saída --

const known = new Set(files.keys());
const broken = [];
for (const [path, content] of files) {
  if (!/\.(html)$/.test(path)) continue;
  for (const m of content.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
    let target = m[1];
    if (target.startsWith('//')) continue;
    if (target.endsWith('/')) target += 'index.html';
    if (!known.has(target)) broken.push(`${path} -> ${m[1]}`);
  }
}
if (broken.length) {
  console.error('Links internos quebrados:\n' + broken.join('\n'));
  process.exit(1);
}

rmSync(OUT, { recursive: true, force: true });
for (const [path, content] of files) {
  const dest = join(OUT, path);
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, content);
}

const asset = (p) => gzipSync(files.get(p)).length;
const shared = asset('/assets/site.css') + asset('/assets/site.js');
const weights = [...files.keys()]
  .filter((k) => k.endsWith('/index.html') && k !== '/index.html' && k !== '/curriculo/index.html')
  .map((k) => ({ k, gz: gzipSync(files.get(k)).length + shared }));
const max = Math.max(...weights.map((w) => w.gz));
console.log(`${files.size} arquivos em ${OUT}/. Maior página com CSS e JS (gzip): ${(max / 1024).toFixed(1)} kB.`);
console.log(weights.map((w) => `${(w.gz / 1024).toFixed(1)} kB  ${w.k}`).join('\n'));
