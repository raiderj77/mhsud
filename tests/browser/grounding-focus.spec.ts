import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page, context }) => {
  await context.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1'
    ? route.continue() : route.abort());
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.clock.install({ time: new Date('2026-10-07T08:00:00Z') });
  await page.goto('/five-senses-grounding');
  await page.clock.pauseAt(new Date('2026-10-07T10:00:00Z'));
});

test('grounding keeps the selected field and distinct text when time advances', async ({ page }) => {
  await page.getByRole('button', { name: 'Begin Grounding Exercise', exact: true }).click();
  const first = page.getByRole('textbox', { name: 'See item 1', exact: true });
  const second = page.getByRole('textbox', { name: 'See item 2', exact: true });
  await first.fill('SYNTHETIC FIRST');
  await second.fill('SYNTHETIC SECOND');
  await page.clock.runFor(100);

  await expect.soft(second).toBeFocused();
  await page.keyboard.insertText(' APPENDED');
  await expect.soft(first).toHaveValue('SYNTHETIC FIRST');
  await expect.soft(second).toHaveValue('SYNTHETIC SECOND APPENDED');
});

test('grounding preserves first-field focus through breathing, skip, and back', async ({ page }) => {
  await page.getByRole('switch', { name: 'Toggle breathing pause between steps' }).click();
  await page.getByRole('button', { name: 'Begin Grounding Exercise', exact: true }).click();
  await page.clock.runFor(100);
  await expect(page.getByRole('textbox', { name: 'See item 1', exact: true })).toBeFocused();
  for (let item = 1; item <= 5; item++) {
    await page.getByRole('textbox', { name: `See item ${item}`, exact: true }).fill(`SYNTHETIC SEE ${item}`);
  }
  await page.getByRole('button', { name: 'Next Sense', exact: true }).click();
  await page.clock.runFor(9000);
  await expect(page.getByText('Take a slow breath before the next sense...', { exact: true })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Touch item 1', exact: true })).toHaveCount(0);
  await page.clock.runFor(1000);
  await expect(page.getByRole('textbox', { name: 'Touch item 1', exact: true })).toBeVisible();
  await page.clock.runFor(100);
  await expect(page.getByRole('textbox', { name: 'Touch item 1', exact: true })).toBeFocused();
  for (let item = 1; item <= 4; item++) {
    await page.getByRole('textbox', { name: `Touch item ${item}`, exact: true }).fill(`SYNTHETIC TOUCH ${item}`);
  }
  await page.getByRole('button', { name: 'Next Sense', exact: true }).click();
  await page.getByRole('button', { name: 'Skip', exact: true }).click();
  await page.clock.runFor(100);
  await expect(page.getByRole('textbox', { name: 'Hear item 1', exact: true })).toBeFocused();
  await page.getByRole('button', { name: 'Back', exact: true }).click();
  await page.clock.runFor(100);
  const restored = page.getByRole('textbox', { name: 'Touch item 1', exact: true });
  await expect(restored).toBeFocused();
  await expect(restored).toHaveValue('SYNTHETIC TOUCH 1');
});
