import { expect, test } from '@playwright/test';

const samplePath = '/for-professionals/sample-readiness-review';

test('printing the fictional sample preserves its limitations and hides screen controls', async ({ page }) => {
  await page.goto(samplePath);
  const limitation = page.locator('article > footer');
  await expect(limitation).toContainText('This document demonstrates format only.');
  await expect(limitation).toContainText('not legal advice, clinical validation');
  await expect(limitation).toBeVisible();
  await expect(page.getByRole('button', { name: 'Print fictional sample' })).toBeVisible();

  await page.emulateMedia({ media: 'print' });
  await expect(limitation).toBeVisible();
  await expect(page.getByRole('button', { name: 'Print fictional sample' })).toBeHidden();
  await expect(page.getByRole('navigation', { name: 'Breadcrumb' })).toBeHidden();
  await expect(page.getByRole('contentinfo')).toBeHidden();
});

test('the printed findings table fits portrait paper without dropping any findings', async ({ page }, testInfo) => {
  // US Letter with half-inch margins gives 7.5 inches / 720 CSS pixels.
  await page.setViewportSize({ width: 720, height: 960 });
  await page.goto(samplePath);
  await page.emulateMedia({ media: 'print' });
  const table = page.getByRole('table');
  await expect(table.getByRole('columnheader')).toHaveCount(5);
  await expect(table.locator('tbody tr')).toHaveCount(4);
  const widths = await table.evaluate(element => ({
    table: element.getBoundingClientRect().width,
    available: element.parentElement!.clientWidth,
    document: document.documentElement.scrollWidth,
    viewport: window.innerWidth,
  }));
  expect(widths.table).toBeLessThanOrEqual(widths.available + 1);
  expect(widths.document).toBeLessThanOrEqual(widths.viewport + 1);
  for (const cell of await table.locator('th, td').all()) {
    await expect(cell).toBeVisible();
    expect(await cell.evaluate(element => element.scrollWidth <= element.clientWidth + 1)).toBe(true);
  }
  await page.screenshot({ path: testInfo.outputPath('fictional-sample-print.png'), fullPage: true });
  await page.pdf({ path: testInfo.outputPath('fictional-sample-print.pdf'), format: 'Letter', margin: { top: '0.5in', bottom: '0.5in', left: '0.5in', right: '0.5in' } });
});
