import { test, expect, type BrowserContext } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const remoteAttempts = new WeakMap<BrowserContext, string[]>();

test.beforeEach(async ({ context }) => {
  // These tests never allow calls to remote services or use real health responses.
  const attempts: string[] = [];
  remoteAttempts.set(context, attempts);
  await context.route('**/*', route => {
    if (new URL(route.request().url()).hostname === '127.0.0.1') return route.continue();
    attempts.push('unexpected remote request');
    return route.abort();
  });
});
test.afterEach(async ({ context }) => expect(remoteAttempts.get(context)).toEqual([]));

for (const route of ['/who-assist-substance-screening', '/crisis-resources', '/gad-7-anxiety-test', '/safety-plan']) {
  test(`mobile accessibility and sensitive headers: ${route}`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    expect(response?.headers()['referrer-policy']).toBe('no-referrer');
    expect(response?.headers()['cache-control']).toContain('no-store');
    await expect(page.locator('h1')).toBeVisible();
    if (route === '/safety-plan') await expect(page.getByRole('heading', { name: 'Build Your Safety Plan' })).toBeVisible();
    await page.evaluate(async () => { await Promise.all(document.getAnimations().filter(a => a.effect?.getComputedTiming().iterations !== Infinity).map(a => a.finished.catch(() => {}))); });
    const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
    // Report rule ids/selectors only, never form values or full HTML.
    expect(result.violations.map(v => ({ id: v.id, targets: v.nodes.map(n => n.target) }))).toEqual([]);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });
}

test('rights-gated WHO entry cannot administer or score an assessment', async ({ page }) => {
  await page.goto('/who-assist-substance-screening');
  await expect(page.locator('input, textarea, [role="radio"]')).toHaveCount(0);
  await expect(page.getByRole('button', { name: /begin assessment|view.*results|start assessment/i })).toHaveCount(0);
  await expect(page.getByRole('link', { name: /crisis resources/i }).first()).toBeVisible();
});

test('synthetic screener choices stay memory-only and reset after reload', async ({ page }) => {
  const transmissions: string[] = [];
  await page.goto('/gad-7-anxiety-test');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: /begin/i }).click();
  await page.waitForLoadState('networkidle');
  // After entry, only immutable application assets may load. In particular,
  // same-origin GET requests can leak answers into server logs just like POSTs.
  const observe = (request: import('@playwright/test').Request) => {
    const url = new URL(request.url());
    if (request.method() !== 'GET' || url.origin !== 'http://127.0.0.1:4311' ||
        !url.pathname.startsWith('/_next/static/') || url.search || request.postData()) {
      transmissions.push('unexpected transport');
    }
  };
  page.on('request', observe);
  const groups = page.getByRole('radiogroup');
  await expect(groups).toHaveCount(7);
  for (let i = 0; i < 7; i++) await groups.nth(i).getByRole('radio').first().click();
  await page.getByRole('button', { name: 'View My Results' }).focus();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('button', { name: 'Start Over', exact: true })).toBeVisible();
  expect(new URL(page.url()).search + new URL(page.url()).hash).toBe('');
  const storage = await page.evaluate(() => ({ local: Object.keys(localStorage), session: Object.keys(sessionStorage) }));
  expect(storage.local.filter(k => /gad|answer|score|assessment/i.test(k))).toEqual([]);
  expect(storage.session.filter(k => /gad|answer|score|assessment/i.test(k))).toEqual([]);
  expect(transmissions).toEqual([]);
  page.off('request', observe);
  await page.reload();
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: /begin/i }).click();
  await expect(groups).toHaveCount(7);
  await expect(page.locator('[role="radio"][aria-checked="true"]')).toHaveCount(0);
});

test('GPC suppresses neutral analytics and sensitive navigation removes URL state', async ({ page }) => {
  await page.addInitScript(() => Object.defineProperty(navigator, 'globalPrivacyControl', { value: true }));
  const tracking: string[] = [];
  page.on('request', request => { if (/analytics|insights|collect|tracking/i.test(request.url())) tracking.push('tracker'); });
  await page.goto('/about');
  await page.getByRole('heading', { level: 1 }).waitFor();
  expect(tracking).toEqual([]);
  const leaks: string[] = [];
  page.on('request', request => {
    if (!request.isNavigationRequest() && ((request.headers()['referer'] || '').includes('synthetic-only') || (request.postData() || '').includes('synthetic-only'))) leaks.push('synthetic marker transmitted');
  });
  await page.goto('/safety-plan?draft=synthetic-only#synthetic-only');
  await expect(page.getByRole('heading', { name: 'Build Your Safety Plan' })).toBeVisible();
  await expect.poll(() => new URL(page.url()).search + new URL(page.url()).hash).toBe('');
  expect(leaks).toEqual([]);
  expect(tracking).toEqual([]);
});

test('offline crisis fallback remains available without a network', async ({ page, context }) => {
  await page.goto('/crisis-resources');
  await page.evaluate(async () => { await navigator.serviceWorker.ready; });
  await page.reload();
  await context.setOffline(true);
  await page.goto('/offline-crisis.html');
  await expect(page.locator('body')).toContainText('988');
  await expect(page.locator('body')).toContainText('741741');
});

test('a fictional local plan survives reload and confirmed deletion clears its entries', async ({ page }) => {
  await page.goto('/safety-plan');
  const input = page.locator('input[type="text"]').first();
  await input.fill('SYNTHETIC TEST ENTRY');
  await expect.poll(() => page.evaluate(() => localStorage.getItem('mct-safety-plan')?.includes('SYNTHETIC TEST ENTRY'))).toBe(true);
  await page.reload();
  await expect(input).toHaveValue('SYNTHETIC TEST ENTRY');
  await page.getByRole('button', { name: /^Step 6:/ }).click();
  await page.getByRole('button', { name: /review/i }).click();
  page.once('dialog', dialog => dialog.dismiss());
  await page.getByRole('button', { name: 'Delete Saved Plan & Start Over' }).click();
  expect(await page.evaluate(() => localStorage.getItem('mct-safety-plan')?.includes('SYNTHETIC TEST ENTRY'))).toBe(true);
  page.once('dialog', dialog => dialog.accept());
  await page.getByRole('button', { name: 'Delete Saved Plan & Start Over' }).click();
  await expect.poll(() => page.evaluate(() => localStorage.getItem('mct-safety-plan')?.includes('SYNTHETIC TEST ENTRY') ?? false)).toBe(false);
  await expect(input).toHaveValue('');
});

test('denied browser storage keeps the crisis plan usable with an explicit warning', async ({ page }) => {
  await page.addInitScript(() => { Storage.prototype.getItem = () => { throw new DOMException('Denied', 'SecurityError'); }; Storage.prototype.setItem = () => { throw new DOMException('Denied', 'SecurityError'); }; });
  await page.goto('/safety-plan');
  await expect(page.getByRole('alert').filter({ hasText: 'This browser cannot save your plan.' })).toBeVisible();
  await expect(page.locator('body')).toContainText('988');
  await page.locator('input[type="text"]').first().fill('SYNTHETIC VOLATILE ENTRY');
  await expect(page.locator('input[type="text"]').first()).toHaveValue('SYNTHETIC VOLATILE ENTRY');
});


