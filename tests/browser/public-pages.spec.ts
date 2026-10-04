import { expect, test } from '@playwright/test';
import { readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import nextConfig, { retiredNonBlogNotFoundPaths } from '../../next.config.mjs';
import { deletedBlogRouteDecisions } from '../../config/legacy-blog-routes.mjs';

function sourcePages(directory = 'src/app'): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return sourcePages(path);
    if (entry.name !== 'page.tsx') return [];
    return ['/' + relative('src/app', directory).replaceAll('\\', '/')].map(path => path === '/' ? path : path.replace(/\/$/, ''));
  });
}

test('every published sitemap page renders at mobile and desktop widths', async ({ page, request }) => {
  test.setTimeout(300_000);
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.ok()).toBe(true);
  const paths = [...(await sitemap.text()).matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((match) => new URL(match[1]).pathname);
  expect(paths.length).toBeGreaterThan(0);
  expect(new Set(paths).size).toBe(paths.length);
  // A sitemap-only check silently misses working noindex pages. Account for
  // every static page source, while preserving intentionally unreleased pages.
  const staticPages = sourcePages().filter(path => !path.includes('[') && path !== '/awareness/august');
  const allPages = [...new Set([...paths, ...staticPages, '/offline-crisis.html'])];

  for (const path of allPages) {
    await test.step(path, async () => {
      const errors: string[] = [];
      const captureError = (error: Error) => errors.push(error.message);
      page.on('pageerror', captureError);
      try {
        await page.setViewportSize({ width: 390, height: 844 });
        const response = await page.goto(path);
        expect(response?.status(), path).toBe(200);
        await expect(page.locator('h1').first(), path).toBeVisible();
        await page.evaluate(() => document.fonts.ready);
        for (const width of [390, 1280]) {
          await page.setViewportSize({ width, height: 844 });
          await expect.poll(async () => page.evaluate(() =>
            document.documentElement.scrollWidth <= window.innerWidth + 1,
          ), { message: `${path} must fit a ${width}px viewport` }).toBe(true);
        }
        expect(errors, `${path} browser errors`).toEqual([]);
      } finally {
        page.off('pageerror', captureError);
      }
    });
  }
});

test('every configured legacy route and unpublished awareness page has its intended disposition', async ({ request }) => {
  test.setTimeout(180_000);
  const redirects = await nextConfig.redirects();
  for (const redirect of redirects) {
    await test.step(redirect.source, async () => {
      const response = await request.get(redirect.source, { maxRedirects: 0 });
      expect(response.status()).toBe(308);
      expect(new URL(response.headers().location, 'http://127.0.0.1:4311').pathname).toBe(redirect.destination);
      expect((await request.get(redirect.destination)).status()).toBe(200);
    });
  }
  const articles = readFileSync('src/lib/awarenessArticles.ts', 'utf8');
  const declaredSlugs = [...articles.matchAll(/slug: "([^"]+)"/g)].map(match => match[1]);
  const sitemap = await (await request.get('/sitemap.xml')).text();
  const unpublished = [...new Set(declaredSlugs)].filter(slug => !sitemap.includes(`/awareness/${slug}</loc>`));
  const missing = new Set([
    ...retiredNonBlogNotFoundPaths,
    ...deletedBlogRouteDecisions.filter(route => route.outcome === 'not-found').map(route => route.source),
    ...unpublished.map(slug => `/awareness/${slug}`),
    '/awareness/august', '/awareness/nonexistent-test-page', '/nonexistent-test-page',
  ]);
  for (const path of missing) {
    await test.step(path, async () => expect((await request.get(path)).status(), path).toBe(404));
  }
});

test('an original reflection exercise keeps educational consent without claiming symptom screening', async ({ page }) => {
  await page.goto('/values-card-sort');
  const consent = page.getByRole('checkbox', { name: /educational tool/ });
  const begin = page.getByRole('button', { name: 'Begin Self-Check', exact: true });
  await expect(begin).toBeDisabled();
  await consent.check();
  await expect(begin).toBeEnabled();
  await begin.click();
  await expect(consent).toHaveCount(0);
});
