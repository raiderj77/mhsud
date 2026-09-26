import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const paths = [
  '/substance-use/screening-limits', '/substance-use/find-support',
  '/substance-use/talking-with-someone', '/health-recovery-timeline',
  '/withdrawal-timeline', '/treatment-cost-estimator',
];

for (const width of [390, 1440]) {
  test(`source-linked guides preserve entry privacy and access at ${width}px`, async ({ context, page }) => {
    const remote: string[] = [];
    await context.route('**/*', route => {
      if (new URL(route.request().url()).hostname === '127.0.0.1') return route.continue();
      remote.push(new URL(route.request().url()).hostname);
      return route.abort();
    });
    await page.setViewportSize({ width, height: 900 });
    for (const path of paths) {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      expect(response?.headers()['cache-control']).toContain('no-store');
      expect(response?.headers()['referrer-policy']).toBe('no-referrer');
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('main')).toContainText('September 26, 2026');
      await expect(page.locator('link[rel=canonical]')).toHaveAttribute('href', `https://mindchecktools.com${path}`);
      await expect(page.locator('main input, main textarea, main select')).toHaveCount(0);
      await expect(page.locator('main')).toContainText('988');
      await expect(page.locator('main')).toContainText('741741');
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
      const audit = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
      expect(audit.violations).toEqual([]);
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await expect(page.locator('#main-content')).toBeFocused();
    }
    expect(remote).toEqual([]);
  });
}
