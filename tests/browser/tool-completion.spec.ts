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
  ['gad-7-anxiety-test', 'Not at all (0)', 7, 'radio'],
  ['phq-4-anxiety-depression-screen', 'Not at all', 4, 'radio'],
  ['asrs-adhd-screening', 'Never', 6, 'button'],
  ['pcl-5-ptsd-screening', 'Not at all (0)', 20, 'button'],
  ['burnout-assessment-tool', 'Not at all', 15, 'button'],
  ['sleep-and-mood-check', 'Not at all', 10, 'button'],
  ['work-stress-check', 'Not at all', 12, 'button'],
  ['k6-distress-scale', 'None of the time', 6, 'button'],
  ['who-5-wellbeing-index', 'All of the time', 5, 'button'],
  ['rosenberg-self-esteem-scale', 'Strongly Agree', 10, 'button'],
  ['ces-d-depression-scale', '< 1 day', 20, 'button'],
] as const;

for (const [path, answer, count, role] of cases) {
  test(`${path}: consent, complete, result, reset`, async ({ page }) => {
    test.setTimeout(90_000);
    await page.goto(`/${path}`);
    await page.getByRole('checkbox').check();
    await page.getByRole('button', { name: 'Begin Self-Check', exact: true }).click();
    const choices = page.getByRole(role, { name: answer, exact: true });
    await expect(choices).toHaveCount(count);
    const submit = page.getByRole('button', { name: /^(View|See) My Results|^Answer All Questions to Continue/ });
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

test('coping skills: browse, favorite and select are separate keyboard controls', async ({ page }) => {
  await page.goto('/coping-skills-randomizer');
  const browse = page.getByRole('button', { name: /Browse All.*Skills/ });
  await browse.click();
  await expect(browse).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('button button')).toHaveCount(0);
  const favorite = page.locator('#coping-skills-browser').getByRole('button', { name: /^Add to favorites:/ }).first();
  await favorite.focus();
  await page.keyboard.press('Enter');
  await expect(favorite).toHaveCount(1);
  await expect(page.locator('#coping-skills-browser').getByRole('button', { name: /^Remove from favorites:/ }).first()).toHaveAttribute('aria-pressed', 'true');
  await page.locator('#coping-skills-browser button').first().click();
  await expect(page.getByRole('region', { name: 'Your coping skill' })).toBeVisible();
});

test('BAC calculator: fictional inputs, result and reset', async ({ page }) => {
  await page.goto('/bac-calculator');
  const inputs = page.locator('input[type="number"]');
  await inputs.nth(0).fill('160');
  await inputs.nth(1).fill('1');
  await inputs.nth(2).fill('2');
  await page.getByRole('button', { name: 'Estimate My BAC', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Calculate Again', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Calculate Again', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Estimate My BAC', exact: true })).toBeVisible();
});

test('money saved calculator completes a fictional estimate', async ({ page }) => {
  await page.goto('/money-saved-recovery-calculator');
  await page.getByRole('button', { name: 'Enter number of days', exact: true }).click();
  await page.getByRole('spinbutton', { name: 'Number of sober days', exact: true }).fill('30');
  await page.locator('#amount').fill('10');
  await page.getByRole('button', { name: 'Calculate My Savings', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Calculate Again', exact: true })).toBeVisible();
});

test('sobriety calculator resets a fictional locally saved date', async ({ page }) => {
  await page.goto('/sobriety-calculator');
  await page.locator('#sober-date').fill('2026-01-01');
  await page.getByRole('button', { name: 'Calculate My Sobriety', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Print Certificate', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Reset', exact: true }).click();
  await page.getByRole('button', { name: 'Yes, Reset', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Calculate My Sobriety', exact: true })).toBeVisible();
});

test('trigger worksheet: selection, summary and reset', async ({ page }) => {
  await page.goto('/trigger-identification-worksheet');
  await page.getByRole('checkbox').first().check();
  await page.getByRole('button', { name: 'Review Selected Triggers', exact: true }).click();
  await expect(page.getByRole('region', { name: 'Your worksheet summary' })).toBeVisible();
  await page.getByRole('button', { name: 'Start Over', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Review Selected Triggers', exact: true })).toBeDisabled();
});

test('relapse plan: fictional content reaches an editable plan', async ({ page }) => {
  await page.goto('/relapse-prevention-plan');
  await page.locator('input[type="text"]').first().fill('SYNTHETIC TEST');
  await page.getByRole('button', { name: 'Generate My Plan', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Edit Plan', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Edit Plan', exact: true }).click();
  await expect(page.locator('input[type="text"]').first()).toHaveValue('SYNTHETIC TEST');
});

test('HALT: check-in and reset', async ({ page }) => {
  await page.goto('/halt-check-in');
  await page.getByRole('button', { name: 'Check In', exact: true }).click();
  await expect(page.getByRole('button', { name: 'New Check-In', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'New Check-In', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Check In', exact: true })).toBeVisible();
});

for (const [path, label, reset] of [
  ['family-impact-assessment', 'Never', 'Retake Assessment'],
  ['readiness-to-change', 'Strongly Disagree', 'Retake Assessment'],
  ['mental-load-calculator', 'Shared equally', 'Start Over'],
  ['big-five-personality-test', '1', 'Start Over'],
] as const) {
  test(`${path}: every prompt can be answered and results opened`, async ({ page }) => {
    test.setTimeout(120_000);
    await page.goto(`/${path}`);
    const gate = page.getByRole('button', { name: 'Begin Self-Check', exact: true });
    // Wait for the known client-rendered entry before checking its gate.
    if (path === 'mental-load-calculator' || path === 'big-five-personality-test') {
      await page.getByRole('checkbox').check();
      await gate.click();
    }
    const answers = page.getByRole('button', { name: label, exact: true });
    await expect(answers.first()).toBeVisible();
    const count = await answers.count();
    expect(count).toBeGreaterThan(5);
    for (let index = 0; index < count; index++) await answers.nth(index).click();
    await page.getByRole('button', { name: /^(View|See) My Results$/ }).click();
    await expect(page.getByRole('button', { name: reset, exact: true })).toBeVisible();
  });
}

test('AUDIT-C completes all three prompts', async ({ page }) => {
  await page.goto('/audit-c-alcohol-screen');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Begin Self-Check', exact: true }).click();
  await page.getByRole('button', { name: 'Never', exact: true }).first().click();
  await page.getByRole('button', { name: '1 or 2', exact: true }).click();
  await page.getByRole('button', { name: 'Never', exact: true }).last().click();
  await page.getByRole('button', { name: 'View My Results', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Start Over', exact: true })).toBeVisible();
});

test('PC-PTSD entry respects its initial exposure branch', async ({ page }) => {
  await page.goto('/pc-ptsd-5-screening');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Begin Self-Check', exact: true }).click();
  await page.getByRole('button', { name: 'No', exact: true }).first().click();
  await expect(page.getByRole('button', { name: 'Retake Screening', exact: true })).toBeVisible();
});

test('health recovery timeline: select, display and reset', async ({ page }) => {
  await page.goto('/health-recovery-timeline');
  await page.getByRole('button', { name: 'Alcohol', exact: true }).click();
  await page.locator('#quit-date').fill('2026-01-01');
  await page.getByRole('button', { name: 'Show My Timeline', exact: true }).click();
  await page.getByRole('button', { name: 'Try Another Substance', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Show My Timeline', exact: true })).toBeVisible();
});

for (const [path, choice, reset] of [
  ['treatment-cost-estimator', /Outpatient Counseling/, 'Compare Options'],
  ['withdrawal-timeline', /^Alcohol/, 'Choose Another'],
] as const) {
  test(`${path}: open a reference panel and return`, async ({ page }) => {
    await page.goto(`/${path}`);
    await page.getByRole('button', { name: choice }).first().click();
    await expect(page.getByRole('button', { name: reset, exact: true })).toBeVisible();
    await page.getByRole('button', { name: reset, exact: true }).click();
    await expect(page.getByRole('button', { name: reset, exact: true })).toHaveCount(0);
  });
}

test('standard drinks: changing the inputs updates the estimate', async ({ page }) => {
  await page.goto('/standard-drinks-calculator');
  await page.locator('#volume').fill('12');
  await page.locator('#abv').fill('5');
  await expect(page.locator('main')).toContainText('1.0');
  await page.locator('#volume').fill('24');
  await expect(page.locator('main')).toContainText('2.0');
});

test('daily check-in: fictional local entry can be saved and deleted', async ({ page }) => {
  await page.goto('/daily-recovery-check-in');
  await page.locator('#gratitude').fill('SYNTHETIC TEST');
  await page.getByRole('button', { name: 'Save Check-In', exact: true }).click();
  await expect(page.getByRole('button', { name: /Edit Today/ })).toBeVisible();
  page.once('dialog', dialog => dialog.accept());
  await page.getByRole('button', { name: 'Clear all data', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Save Check-In', exact: true })).toBeVisible();
});

test('grounding exercise: five steps complete with fictional text', async ({ page }) => {
  await page.goto('/five-senses-grounding');
  await page.getByRole('button', { name: 'Begin Grounding Exercise', exact: true }).click();
  for (let step = 0; step < 5; step++) {
    const inputs = page.locator('input[type="text"]');
    await expect(inputs).toHaveCount(5 - step);
    for (let index = 0; index < 5 - step; index++) await inputs.nth(index).fill('SYNTHETIC TEST');
    await page.getByRole('button', { name: step === 4 ? 'Finish' : 'Next Sense', exact: true }).click();
  }
  await expect(page.getByRole('button', { name: 'Do It Again', exact: true })).toBeVisible();
});

test('DBT skill browser changes groups and opens details', async ({ page }) => {
  await page.goto('/dbt-crisis-skills');
  const tabs = page.getByRole('tab');
  await expect(tabs.first()).toBeVisible();
  for (let index = 0; index < await tabs.count(); index++) {
    await tabs.nth(index).click();
    await expect(tabs.nth(index)).toHaveAttribute('aria-selected', 'true');
    await page.getByRole('button', { name: /Press to show details/ }).first().click();
    await expect(page.getByRole('button', { name: /Press to hide details/ }).first()).toBeVisible();
  }
});

test('values sorting reaches a profile', async ({ page }) => {
  test.setTimeout(90_000);
  await page.goto('/values-card-sort');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Begin Self-Check', exact: true }).click();
  const important = page.getByRole('button', { name: 'Very Important', exact: true });
  const other = page.getByRole('button', { name: 'Somewhat', exact: true });
  await expect(important.first()).toBeVisible();
  const count = await important.count();
  for (let index = 0; index < count; index++) await (index < 5 ? important : other).nth(index).click();
  await page.getByRole('button', { name: 'Continue to Ranking', exact: true }).click();
  await page.getByRole('button', { name: 'See My Values Profile', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Print Profile', exact: true })).toBeVisible();
});

test('cognitive distortion worksheet: fictional thought through reframe and reset', async ({ page }) => {
  await page.goto('/cognitive-distortion-identifier');
  await page.locator('#thought-input').fill('SYNTHETIC TEST');
  await page.getByRole('button', { name: 'Next: Identify Distortions', exact: true }).click();
  await page.locator('main button[aria-pressed]').first().click();
  await page.getByRole('button', { name: 'Next: Reframe', exact: true }).click();
  await page.locator('#balanced-thought').fill('SYNTHETIC REFRAME');
  await page.getByRole('button', { name: 'Finish', exact: true }).click();
  await page.getByRole('button', { name: 'Try Another Thought', exact: true }).click();
  await expect(page.locator('#thought-input')).toHaveValue('');
});

test('CBT thought record: all seven steps reach the summary without saving by default', async ({ page }) => {
  await page.goto('/cbt-thought-record');
  for (const name of ['Situation', 'Automatic thought', 'Emotion 1 name', 'Evidence supporting the thought 1', 'Evidence against the thought 1', 'Balanced thought']) {
    await page.getByRole('textbox', { name, exact: true }).fill('SYNTHETIC TEST');
    await page.getByRole('button', { name: 'Next', exact: true }).click();
  }
  await expect(page.getByRole('checkbox')).not.toBeChecked();
  await page.getByRole('button', { name: 'View Worksheet Summary', exact: true }).click();
  await expect(page.getByRole('button', { name: 'New Thought Record', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'New Thought Record', exact: true }).click();
  await expect(page.getByRole('textbox', { name: 'Situation', exact: true })).toHaveValue('');
});

test('worry scheduler: park and delete a fictional worry', async ({ page }) => {
  await page.goto('/worry-time-scheduler');
  const input = page.getByRole('textbox', { name: 'Enter a worry to park', exact: true });
  await input.fill('SYNTHETIC TEST');
  await page.getByRole('button', { name: 'Park It', exact: true }).click();
  await expect(input).toHaveValue('');
  await expect(page.getByRole('button', { name: 'Delete worry', exact: true })).toHaveCount(1);
  await page.getByRole('button', { name: 'Delete worry', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Delete worry', exact: true })).toHaveCount(0);
});

for (const [path, start, end, restart] of [
  ['box-breathing-exercise', 'Start Breathing Exercise', 'End Session', 'Start Again'],
  ['urge-surfing-timer', 'Begin Urge Surfing', 'End Early', 'Start Another Session'],
] as const) {
  test(`${path}: start, pause, resume and end`, async ({ page }) => {
    await page.goto(`/${path}`);
    await page.getByRole('button', { name: start, exact: true }).click();
    await page.getByRole('button', { name: 'Pause', exact: true }).click();
    await page.getByRole('button', { name: 'Resume', exact: true }).click();
    await page.getByRole('button', { name: end, exact: true }).click();
    await expect(page.getByRole('button', { name: restart, exact: true })).toBeVisible();
  });
}
