import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import ts from 'typescript';

const read = path => readFile(new URL('../' + path, import.meta.url), 'utf8');

test('new substance guides inherit sensitive-route protections and cannot claim human review', async () => {
  const source = await read('src/lib/routePolicies.ts');
  const policy = await import('data:text/javascript;base64,' + Buffer.from(ts.transpile(source, { module: ts.ModuleKind.ESNext })).toString('base64'));
  for (const slug of ['screening-limits', 'find-support', 'talking-with-someone']) {
    const route = '/substance-use/' + slug;
    assert.equal(policy.isSensitiveRoute(route), true);
    assert.equal(policy.isPrivacySafeAggregateAnalyticsRoute(route), false);
    const page = await read(`src/app${route}/page.tsx`);
    assert.match(page, /SubstanceGuide/);
    assert.doesNotMatch(page, /AuthorByline|ToolReviewerBio|medicalWebPageJsonLd|localStorage|fetch\(/);
  }
  const shared = await read('src/components/SubstanceGuide.tsx');
  assert.match(shared, /Exact-content human review is pending/);
  assert.match(shared, /not a scored assessment/);
});

test('unsupported timeline and national-price generators are not rendered', async () => {
  for (const slug of ['health-recovery-timeline', 'withdrawal-timeline', 'treatment-cost-estimator']) {
    const page = await read(`src/app/${slug}/page.tsx`);
    assert.doesNotMatch(page, /TimelineClient|TreatmentCostClient|faqJsonLd|AuthorByline|ToolReviewerBio/);
    assert.match(page, /https:\/\/(?:medlineplus|alcoholtreatment\.niaaa)/);
    assert.match(page, /September 26, 2026/);
  }
});
