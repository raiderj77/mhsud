import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test.use({ colorScheme: 'dark' });

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('mh-theme', 'dark');
    Object.defineProperty(navigator, 'globalPrivacyControl', { value: true });
  });
});

for (const width of [390, 1280]) {
  test(`keyboard navigation exposes the visitor paths at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.goto('/');
    const nav = page.getByRole('navigation', { name: 'Main navigation' });
    const mobile = nav.getByRole('button', { name: 'Open menu' });
    if (width === 390) {
      await mobile.focus();
      await mobile.press('Enter');
    }
    const help = nav.getByRole('button', { name: 'Find Help' });
    const items = nav.locator('#primary-navigation > a, #primary-navigation > div > button');
    expect(await items.allTextContents()).toEqual(['Take a Screening', 'Find Help', 'Conditions', 'Crisis Help']);
    await expect(help).toHaveAttribute('aria-expanded', 'false');
    await expect(nav.getByRole('link', { name: 'Therapists', exact: true })).toBeHidden();
    await help.focus();
    await help.press('Enter');
    await expect(help).toHaveAttribute('aria-expanded', 'true');
    const helpLinks = nav.locator('#find-help-links a');
    await expect(helpLinks).toHaveCount(2);
    await expect(helpLinks.nth(0)).toHaveAttribute('href', '/therapists');
    await expect(helpLinks.nth(1)).toHaveAttribute('href', '/facilities');
    await page.keyboard.press('Tab');
    await expect(helpLinks.nth(0)).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(help).toBeFocused();
    await expect(help).toHaveAttribute('aria-expanded', 'false');
    if (width === 390) {
      await page.keyboard.press('Escape');
      await expect(mobile).toBeFocused();
    }
    const cards = page.getByRole('region', { name: 'What do you need today?' });
    await expect(cards.getByRole('link')).toHaveCount(3);
    await expect(cards.getByRole('link', { name: /Take a Screening/ })).toHaveAttribute('href', '/screening-tools');
    await expect(cards.getByRole('link', { name: /Find a Therapist/ })).toHaveAttribute('href', '/therapists');
    await expect(cards.getByRole('link', { name: /Find Treatment/ })).toHaveAttribute('href', '/facilities');
    expect((await new AxeBuilder({ page }).include('#visitor-needs, #visitor-needs + div').analyze()).violations).toEqual([]);
  });
}

test('conditions links to existing canonical pages and preserves information-only labels', async ({ page, request }) => {
  await page.goto('/conditions');
  const main = page.locator('main');
  await expect(main.getByRole('region')).toHaveCount(14);
  const alcohol = main.getByRole('region', { name: 'Alcohol and substance use' });
  const assist = alcohol.getByRole('listitem').filter({ has: page.getByRole('heading', { name: 'WHO ASSIST Information', exact: true }) });
  await expect(assist.getByText('Information Only', { exact: true })).toBeVisible();
  await expect(assist.getByRole('link', { name: 'WHO ASSIST Information', exact: true })).toHaveAttribute('href', '/who-assist-substance-screening');
  const evidenceLink = assist.getByRole('link', { name: 'Clinical evidence for WHO ASSIST Information', exact: true });
  await expect(evidenceLink).toHaveAttribute('href', '/clinical-evidence#who-assist');
  await expect(page.locator('link[rel=canonical]')).toHaveAttribute('href', 'https://mindchecktools.com/conditions');
  const sitemap = await request.get('/sitemap.xml');
  expect(await sitemap.text()).toContain('<loc>https://mindchecktools.com/conditions</loc>');
  expect((await new AxeBuilder({ page }).include('main').analyze()).violations).toEqual([]);
  await evidenceLink.click();
  await expect(page).toHaveURL(/\/clinical-evidence#who-assist$/);
  await expect(page.locator('#who-assist h2')).toBeInViewport();
});

test('therapist links apply the existing filters and both directories link back', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/therapists');
  const breadcrumb = page.getByRole('navigation', { name: 'Breadcrumb' });
  await expect(breadcrumb.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
  await expect(breadcrumb.locator('[aria-current=page]')).toHaveText('Therapists');
  const browse = page.getByRole('region', { name: 'Browse therapist listings' });
  for (const [heading, filter] of [['Top cities', 'city'], ['Specialties', 'specialty']]) {
    const select = page.locator(`select[name=${filter}]`);
    const links = browse.getByRole('heading', { name: heading }).locator('..').getByRole('link');
    const optionCount = await select.locator('option').count();
    expect(optionCount).toBeGreaterThan(1);
    await expect(links).toHaveCount(Math.min(5, optionCount - 1));
    const link = links.first();
    const href = await link.getAttribute('href');
    const destination = new URL(href!, page.url());
    expect([...destination.searchParams.keys()]).toEqual([filter]);
    expect(destination.hash).toBe('#listings');
    await link.click();
    await expect(page).toHaveURL(destination.href);
    await expect(select).toHaveValue(destination.searchParams.get(filter)!);
  }
  await page.locator('main a[href^="/therapists/"]').first().click();
  await expect(breadcrumb.getByRole('link', { name: 'Therapists' })).toHaveAttribute('href', '/therapists');
  await expect(breadcrumb.locator('[aria-current=page]')).toHaveText(await page.locator('h1').innerText());
  await breadcrumb.getByRole('link', { name: 'Therapists' }).click();
  await page.locator('main').getByRole('link', { name: 'Browse treatment centers' }).click();
  await expect(page).toHaveURL(/\/facilities$/);
  await page.locator('main').getByRole('link', { name: 'Browse California therapists' }).click();
  await expect(page).toHaveURL(/\/therapists$/);
});

test('representative pages stay light under a dark system and stored preference', async ({ page, request }) => {
  const directory = await (await request.get('/therapists')).text();
  const profile = directory.match(/href="(\/therapists\/[^"?]+)"/)?.[1];
  expect(profile).toBeTruthy();
  const routes = [
    '/', '/screening-tools', '/conditions', '/therapists', profile!, '/facilities',
    '/crisis-resources', '/clinical-evidence', '/phq-9-depression-test',
    '/who-assist-substance-screening', '/sobriety-calculator', '/offline', '/offline-crisis.html',
  ];
  for (const route of routes) {
    await test.step(route, async () => {
      const response = await page.goto(route);
      expect(route === '/offline-crisis.html' ? [200, 503] : [200]).toContain(response?.status());
      const heading = page.locator('main h1').first();
      await expect(heading).toBeVisible();
      await expect(page.locator('html')).not.toHaveClass(/\bdark\b/);
      await expect(page.locator('html')).toHaveCSS('color-scheme', 'light');
      await expect(page.getByRole('button', { name: /switch to .* mode/i })).toHaveCount(0);
      expect(await page.evaluate(() => localStorage.getItem('mh-theme'))).toBe('dark');
      for (const width of [390, 1280]) {
        await page.setViewportSize({ width, height: 844 });
        expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
      }
    });
  }
});
