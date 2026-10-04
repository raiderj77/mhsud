import { expect, test } from '@playwright/test';

test('every published sitemap page renders at mobile and desktop widths', async ({ page, request }) => {
  test.setTimeout(300_000);
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.ok()).toBe(true);
  const paths = [...(await sitemap.text()).matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((match) => new URL(match[1]).pathname);
  expect(paths.length).toBeGreaterThan(0);
  expect(new Set(paths).size).toBe(paths.length);

  for (const path of paths) {
    await test.step(path, async () => {
      const errors: string[] = [];
      const captureError = (error: Error) => errors.push(error.message);
      page.on('pageerror', captureError);
      try {
        await page.setViewportSize({ width: 390, height: 844 });
        const response = await page.goto(path);
        expect(response?.status(), path).toBe(200);
        await expect(page.locator('main h1').first(), path).toBeVisible();
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
