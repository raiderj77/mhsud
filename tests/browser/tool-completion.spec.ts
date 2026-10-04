import { expect, test } from '@playwright/test';

// Fictional choices on the isolated local build only. No production answers,
// external services, screenshots, traces or saved health records are involved.
test.beforeEach(async ({ context, page }) => {
  await context.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1'
    ? route.continue() : route.abort());
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.setViewportSize({ width: 390, height: 844 });
});

const cases = [
  ['phq-9-depression-test', 'Not at all', 9, 'radio'],
  ['gad-7-anxiety-test', 'Not at all', 7, 'radio'],
  ['phq-4-anxiety-depression-screen', 'Not at all', 4, 'radio'],
  ['asrs-adhd-screening', 'Never', 6, 'button'],
  ['pcl-5-ptsd-screening', 'Not at all', 20, 'button'],
  ['burnout-assessment-tool', 'Not at all', 15, 'button'],
  ['sleep-and-mood-check', 'Not at all', 10, 'button'],
  ['work-stress-check', 'Not at all', 12, 'button'],
  ['k6-distress-scale', 'None of the time', 6, 'button'],
  ['who-5-wellbeing-index', 'All of the time', 5, 'button'],
  ['rosenberg-self-esteem-scale', 'Strongly Agree', 10, 'button'],
] as const;

for (const [path, answer, count, role] of cases) {
  test(`${path}: consent, complete, result, reset`, async ({ page }) => {
    test.setTimeout(90_000);
    await page.goto(`/${path}`);
    await page.getByRole('checkbox').check();
    await page.getByRole('button', { name: 'Begin Self-Check', exact: true }).click();
    const choices = page.getByRole(role, { name: answer, exact: true });
    await expect(choices).toHaveCount(count);
    const submit = page.getByRole('button', { name: /^(View|See) My Results|^View My Burnout/ });
    await expect(submit).toBeDisabled();
    for (let index = 0; index < count; index++) await choices.nth(index).click();
    await expect(submit).toBeEnabled();
    await submit.focus();
    await page.keyboard.press('Enter');
    const reset = page.getByRole('button', { name: /^(Start Over|Retake Screening|Retake Assessment|.*Retake the quiz)$/ }).first();
    await expect(reset).toBeVisible();
    expect(new URL(page.url()).search + new URL(page.url()).hash).toBe('');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
    await reset.click();
    // Some flows return to their consent gate; others return to blank answers.
    if (await page.getByRole('checkbox').count()) {
      await page.getByRole('checkbox').check();
      await page.getByRole('button', { name: 'Begin Self-Check', exact: true }).click();
    }
    await expect(submit).toBeDisabled();
  });
}

test('AUDIT: all ten questions reach results and reset', async ({ page }) => {
  await page.goto('/audit-alcohol-test');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Begin Self-Check', exact: true }).click();
  const groups = page.getByRole('radiogroup');
  await expect(groups).toHaveCount(10);
  for (let index = 0; index < 10; index++) await groups.nth(index).getByRole('radio').first().click();
  await page.getByRole('button', { name: 'View My Results', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Start Over', exact: true })).toBeVisible();
});
