import { expect, test } from '@playwright/test';

const samplePath = '/for-professionals/sample-readiness-review';

for (const colorScheme of ['light', 'dark'] as const) {
  test(`the ${colorScheme} sample prints readable text with or without backgrounds`, async ({ page }, testInfo) => {
    await page.emulateMedia({ colorScheme });
    await page.goto(samplePath);
    await expect(page.locator('html')).toHaveClass(colorScheme === 'dark' ? /dark/ : /^((?!dark).)*$/);
    await page.locator('body').evaluate(async element => {
      await Promise.all(element.getAnimations().map(animation => animation.finished));
    });
    const sample = page.locator('article');
    const screenColors = () => page.locator('html, body, article h1, article .card, article footer, aside[aria-label="Clinical disclaimer and crisis support"]').evaluateAll(elements => elements.map(element => {
      const style = getComputedStyle(element);
      return { color: style.color, background: style.backgroundColor };
    }));
    const beforePrint = await screenColors();

    await page.emulateMedia({ media: 'print' });
    // Check all visible sample and safety-banner text, including the cards and
    // table. A white paper backdrop also covers background printing disabled.
    const textContrast = await page.locator('article, aside[aria-label="Clinical disclaimer and crisis support"]').evaluateAll(roots => {
      const rgba = (value: string) => {
        const values = value.match(/[\d.]+/g)!.map(Number);
        return [values[0], values[1], values[2], values[3] ?? 1];
      };
      const blend = (foreground: number[], background: number[]) => foreground.slice(0, 3).map((channel, i) => channel * foreground[3] + background[i] * (1 - foreground[3]));
      const luminance = (channels: number[]) => channels.map(channel => {
        const value = channel / 255;
        return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
      }).reduce((sum, channel, i) => sum + channel * [0.2126, 0.7152, 0.0722][i], 0);
      const contrast = (foreground: number[], background: number[]) => {
        const values = [luminance(blend(foreground, background)), luminance(background)];
        return (Math.max(...values) + 0.05) / (Math.min(...values) + 0.05);
      };
      const results = [];
      for (const root of roots) {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        for (let node = walker.nextNode(); node; node = walker.nextNode()) {
          if (!node.textContent?.trim()) continue;
          const element = node.parentElement!;
          const range = document.createRange();
          range.selectNodeContents(node);
          if (!range.getBoundingClientRect().width || getComputedStyle(element).visibility !== 'visible') continue;
          const ancestors = [];
          for (let ancestor: HTMLElement | null = element; ancestor; ancestor = ancestor.parentElement) ancestors.unshift(ancestor);
          let background = [255, 255, 255];
          for (const ancestor of ancestors) background = blend(rgba(getComputedStyle(ancestor).backgroundColor), background);
          const foreground = rgba(getComputedStyle(element).color);
          results.push({ text: node.textContent.trim().slice(0, 70), withBackground: contrast(foreground, background), onPaper: contrast(foreground, [255, 255, 255]) });
        }
        }
      return results;
    });
    for (const printBackground of [false, true]) {
      await page.pdf({ path: testInfo.outputPath(`sample-${colorScheme}-backgrounds-${printBackground}.pdf`), format: 'Letter', printBackground, margin: { top: '0.5in', bottom: '0.5in', left: '0.5in', right: '0.5in' } });
    }
    expect(textContrast.length).toBeGreaterThan(60);
    expect(textContrast.filter(text => text.withBackground < 7 || text.onPaper < 7)).toEqual([]);
    await expect(page.locator('html')).toHaveCSS('background-color', 'rgb(255, 255, 255)');
    await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(255, 255, 255)');
    await expect(sample.locator('footer')).toBeVisible();
    await expect(page.getByRole('complementary', { name: 'Clinical disclaimer and crisis support' })).toBeVisible();
    await page.emulateMedia({ media: 'screen' });
    await expect.poll(screenColors).toEqual(beforePrint);
  });
}

test('offline printing hides the status overlay while preserving crisis support and screen behavior', async ({ page, context }) => {
  await page.goto(samplePath);
  await context.setOffline(true);
  const offlineNotice = page.getByRole('status').filter({ hasText: "You're offline" });
  const crisisSupport = page.getByRole('complementary', { name: 'Clinical disclaimer and crisis support' });
  await expect(offlineNotice).toBeVisible();
  await expect(crisisSupport).toBeVisible();

  await page.emulateMedia({ media: 'print' });
  await expect(offlineNotice).toBeHidden();
  await expect(crisisSupport).toBeVisible();
  await expect(crisisSupport.getByRole('link', { name: 'Call the United States 988 Suicide and Crisis Lifeline', exact: true })).toBeVisible();
  await expect(page.locator('article > footer')).toBeVisible();

  await page.emulateMedia({ media: 'screen' });
  await expect(offlineNotice).toBeVisible();
  await page.getByRole('button', { name: 'Dismiss offline notification' }).click();
  await expect(offlineNotice).toBeHidden();
});

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
