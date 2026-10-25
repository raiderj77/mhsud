/** Local built-site inventory. Presence checks are evidence, not clinical approval.
 * Run with a production server on 3100: node scripts/content-seo-audit.mjs
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import * as cheerio from 'cheerio';
import ts from 'typescript';
const origin = 'http://127.0.0.1:3100';
const publicOrigin = 'https://mindchecktools.com';
const registrySource = await readFile('src/lib/toolClassifications.ts', 'utf8');
const registry = await import('data:text/javascript;base64,' + Buffer.from(ts.transpile(registrySource, { module: ts.ModuleKind.ESNext })).toString('base64'));
async function pages(dir = 'src/app') {
  const found = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = `${dir}/${entry.name}`;
    if (entry.isDirectory() && !entry.name.startsWith('[')) found.push(...await pages(path));
    if (entry.name === 'page.tsx') found.push(dir.replace('src/app', '') || '/');
  }
  return found;
}
const sitemapResponse = await fetch(origin + '/sitemap.xml');
if (!sitemapResponse.ok) throw new Error('Sitemap unavailable');
const xml = cheerio.load(await sitemapResponse.text(), { xmlMode: true });
const sitemap = xml('loc').map((_, e) => xml(e).text()).get();
if (sitemap.some(u => { const x = new URL(u); return x.origin !== publicOrigin || x.search || x.hash; })) throw new Error('Unsafe sitemap URL');
const paths = [...new Set([...(await pages()), ...sitemap.map(u => new URL(u).pathname)])].sort();
const rows = [];
for (const path of paths) {
  const response = await fetch(origin + path, { redirect: 'manual' });
  const $ = cheerio.load(await response.text());
  $('script,style').remove();
  const text = $('main').text().replace(/\s+/g, ' ').trim();
  const robots = $('meta[name="robots"],meta[name="googlebot"]').map((_, e) => $(e).attr('content')).get().join(',');
  const indexable = response.status === 200 && !/noindex|none/.test(robots + (response.headers.get('x-robots-tag') || ''));
  const record = registry.getToolClassification(path);
  const n0 = /^\/(about|accessibility|privacy|consumer-health-data-privacy|cookies|terms|disclaimer|contact|methodology|for-professionals)(\/|$)/.test(path);
  const risk = /crisis|safety-plan/.test(path) ? 'H4' : n0 ? 'N0' : record?.classification === 'Published Screener' ? 'H3' : record?.classification === 'Original Educational Tool' ? 'H2' : 'H1';
  const type = path.startsWith('/for-professionals') ? 'professional_resource' : n0 ? 'trust_legal' : risk === 'H4' ? 'crisis_resource' : path === '/clinical-evidence' ? 'clinical_evidence' : record?.classification === 'Published Screener' ? 'published_screener' : record?.classification === 'Information Only' ? 'instrument_information_only' : record?.localSaveAvailable ? 'browser_local_record' : record?.classification === 'Original Educational Tool' ? (/recovery|sobriety|urge-surfing|relapse|trigger|halt|readiness/.test(path) ? 'recovery_tool' : 'original_educational_self_check') : 'editorial_article';
  const links = $('main a[href]').map((_, e) => $(e).attr('href')).get();
  const title = $('title').text();
  const description = $('meta[name="description"]').attr('content') || '';
  const canonical = $('link[rel="canonical"]').attr('href') || '';
  const checks = {
    title: Boolean(title), description: Boolean(description), h1: $('h1').length === 1,
    canonical: canonical === publicOrigin + (path === '/' ? '/' : path),
    crawlable: text.length > 100, sitemap: sitemap.includes(publicOrigin + (path === '/' ? '' : path)) || sitemap.includes(publicOrigin + path),
    purpose: Boolean(record?.purpose) || /purpose|this (?:page|guide|tool)|for (?:adults|people|famil|anyone)|helps? you/i.test(text),
    measures: record?.classification === 'Information Only' ? /no (?:questionnaire|scor)|does not (?:administer|score)/i.test(text) : /measur|screen|reflect|calculat|not a (?:test|screen)/i.test(text),
    limits: /cannot|does not|not (?:a |an )?(?:diagnos|medical|clinical|validated)|not establish/i.test(text),
    evidence: /evidence|source|reference/i.test(text), primarySource: links.some(u => /^https:\/\//.test(u) && /\.gov\/|who\.int\/|\.edu\/|pubmed|doi\.org|smartrecovery|aa\.org/.test(u)),
    reviewScope: /scope|credential|review pending|review remains|review required/i.test(text),
    reviewDate: /(?:reviewed|verified|source check|updated)[^.!]{0,55}(?:202[0-9]|pending|not yet)/i.test(text),
    nextStep: /next step|qualified professional|find (?:support|help|treatment)|contact|choose|start/i.test(text),
    privacy: links.includes('/privacy'), methodology: links.includes('/methodology'),
    crisis: $('body').text().includes('988') && $('body').text().includes('741741'),
  };
  rows.push({ path, status: response.status, indexable, contentType: type, risk, title, description, canonical, checks, missingPresence: Object.entries(checks).filter(([, v]) => !v).map(([k]) => k), purpose: record?.purpose || $('h1').text(), review: record?.clinicalReviewStatus || 'Exact-content review evidence requires manual verification', links });
}
for (const key of ['title', 'description']) {
  const counts = new Map();
  for (const row of rows.filter(r => r.indexable)) counts.set(row[key], (counts.get(row[key]) || 0) + 1);
  for (const row of rows.filter(r => r.indexable)) if (counts.get(row[key]) > 1) row.missingPresence.push('duplicate-' + key);
}
const report = { checkedAt: new Date().toISOString(), scope: 'All filesystem static routes plus dynamic sitemap entries. Entry HTML only; no answers or scores collected. Presence heuristics do not establish accuracy, distinctness, rights or review.', rows };
await writeFile(process.argv[2] || '../content-inventory.json', JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({ routes: rows.length, indexable: rows.filter(r => r.indexable).length, technicalFailures: rows.filter(r => r.indexable && r.missingPresence.some(k => ['title','description','h1','canonical','crawlable','sitemap','duplicate-title','duplicate-description'].includes(k))).map(r => ({ path:r.path, missing:r.missingPresence })) }, null, 2));
