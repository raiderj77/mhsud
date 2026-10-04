import { expect, test } from '@playwright/test';

test('visitor can reach the tool chooser by keyboard on a narrow screen', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const findTool = page.getByRole('link', { name: 'Find a tool', exact: true });
  await expect(findTool).toBeVisible();
  await findTool.focus();
  await findTool.press('Enter');
  await expect(page).toHaveURL(/\/screening-tools#choose-a-tool$/);
  await expect(page.getByRole('heading', { name: 'Which mental health screening tool should I use?' })).toBeInViewport();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});

test('BAC entry has one reviewer block and does not promise driving clearance in its card', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Explore an approximate blood alcohol estimate.', { exact: false })).toContainText('cannot establish whether it is safe or legal to drive');
  await page.goto('/bac-calculator');
  await expect(page.locator('main').getByRole('link', { name: 'Jason Ramirez, CADC-II', exact: true })).toHaveCount(1);
  await expect(page.getByRole('button', { name: 'Estimate My BAC', exact: true })).toBeDisabled();
});

test('directory navigation strips arbitrary data and assessment fragments remain forbidden', async ({ page }) => {
  await page.goto('/screening-tools?answer=fictional#choose-a-tool');
  await expect.poll(() => new URL(page.url()).search).toBe('');
  await expect(page).toHaveURL(/\/screening-tools#choose-a-tool$/);
  await page.goto('/screening-tools#choose-a-tool-answer-fictional');
  await expect.poll(() => new URL(page.url()).hash).toBe('');
  await page.goto('/phq-9-depression-test?answer=fictional#choose-a-tool');
  await expect.poll(() => new URL(page.url()).search + new URL(page.url()).hash).toBe('');
});
