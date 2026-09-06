import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// Public information only: never enter an assessment or create result/plan data.
test.beforeEach(async ({ context, page }) => {
  await context.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort());
  await page.addInitScript(() => Object.defineProperty(navigator, 'globalPrivacyControl', { value: true }));
});

for (const width of [390, 1440]) {
  for (const path of ['/methodology', '/clinical-evidence']) {
    test(`public trust corrections are readable and accessible: ${path}, ${width}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      expect((await page.goto(path))?.status()).toBe(200);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('body')).toContainText('This is not crisis counseling');
      await expect(page.locator('a[href="tel:988"]').first()).toBeVisible();
      await expect(page.locator('a[href="tel:18006624357"]').first()).toBeVisible();
      await expect(page.locator('body')).not.toContainText('WHO public domain');
      expect(await page.locator('link[rel="canonical"]').getAttribute('href')).toBe(`https://mindchecktools.com${path}`);
      const articleSchema = await page.locator('script[type="application/ld+json"]').evaluateAll(nodes => nodes.map(n => JSON.parse(n.textContent || '{}')).find(s => s['@type'] === 'Article'));
      expect(articleSchema.dateModified).toBe('2026-09-05');
      expect(articleSchema.reviewedBy).toBeUndefined();
      if (path === '/clinical-evidence') {
        await expect(page.locator('body')).toContainText('2,149 patients from 15 U.S. primary-care clinics');
        await expect(page.locator('a[href="https://license.tov.med.nyu.edu/product/asrs6Qscreener"]')).toHaveCount(1);
      }
      await page.evaluate(async () => Promise.all(document.getAnimations().filter(a => a.effect?.getComputedTiming().iterations !== Infinity).map(a => a.finished.catch(() => {}))));
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
      expect(result.violations.map(v => ({ id: v.id, targets: v.nodes.map(n => n.target) }))).toEqual([]);
    });
  }
}
