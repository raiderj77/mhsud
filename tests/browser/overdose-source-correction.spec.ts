import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const path = '/awareness/overdose-awareness-month-day';
const source = 'https://www.samhsa.gov/blog/convening-highlights-samhsa-commitment-help-states-sud-treatment-recovery-support-services';

// Read-only educational entry checks. No answers, scores, or personal fixtures.
for (const width of [390, 1440]) {
  for (const gpc of [true, false]) {
    test(`overdose source correction preserves privacy and review scope: ${width}, GPC ${gpc}`, async ({ context, page }) => {
      const externalHosts: string[] = [];
      await context.route('**/*', route => {
        const host = new URL(route.request().url()).hostname;
        if (host === '127.0.0.1') return route.continue();
        externalHosts.push(host);
        return route.abort();
      });
      await page.addInitScript(value => Object.defineProperty(navigator, 'globalPrivacyControl', { value }), gpc);
      await page.setViewportSize({ width, height: 900 });
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      expect(response?.headers()['cache-control']).toContain('no-store');
      expect(response?.headers()['referrer-policy']).toBe('no-referrer');
      await expect(page.locator('main h1')).toHaveCount(1);
      const notice = page.getByRole('complementary', { name: 'Editorial review and ownership' });
      await expect(notice).toContainText('August 26, 2026');
      await expect(notice).toContainText('Source/date correction: September 5, 2026');
      await expect(notice).toContainText('This is not a new clinical review');
      await expect(page.locator('main')).toContainText('August 25 through August 31, 2026');
      await expect(page.locator('main')).not.toContainText('has not verified an exact 2026');
      expect(await page.locator(`main a[href="${source}"]`).count()).toBeGreaterThan(0);
      for (const link of await page.locator(`main a[href="${source}"]`).all()) {
        expect(await link.getAttribute('referrerpolicy')).toBe('no-referrer');
      }
      await expect(page.locator('main a[href="tel:911"]')).toBeVisible();
      await expect(page.locator('main a[href="tel:988"]')).toBeVisible();
      await expect(page.locator('main input, main textarea, main form')).toHaveCount(0);
      const schema = await page.locator('script[type="application/ld+json"]').evaluateAll(nodes => nodes.flatMap(n => {
        const value = JSON.parse(n.textContent || '{}');
        return Array.isArray(value) ? value : [value];
      }).find(s => s['@type'] === 'Article'));
      expect(schema.datePublished).toBe('2026-08-26');
      expect(schema.dateModified).toBe('2026-09-05');
      expect(schema.reviewedBy).toBeUndefined();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      const audit = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
      expect(audit.violations.map(v => v.id)).toEqual([]);
      expect(externalHosts).toEqual([]);
    });
  }
}
