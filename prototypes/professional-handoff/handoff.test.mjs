import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const read = name => readFileSync(new URL(name, import.meta.url), 'utf8');
const sample = JSON.parse(read('handoff.json'));
const oracle = JSON.parse(read('oracle.json'));
const questions = JSON.parse(read('tasks.json'));
const prose = read('IMPLEMENTATION-HANDOFF.md');

// Test-only artifact consistency checks. No executable, service, intake or release
// validator is added. These checks cannot certify claims or authorize anything.
function issues(record) {
  const errors = [];
  const require = (condition, code) => { if (!condition) errors.push(code); };
  require(record.mode === 'PRIVATE_FICTIONAL_SAMPLE' && record.authority === 'NONE', 'authority');
  require(record.releaseStatus === 'NOT_ASSESSED_NO_AUTHORITY', 'release');
  require(record.rightsPermission === 'UNRESOLVED', 'rights');
  require(record.scope.states === 'ENTRY_ONLY', 'scope');
  require(record.scope.routes.length === 5 && record.scope.instrumentFamilies.length === 1, 'scope');
  require(record.findings.length === 4 && record.actions.length === 4 && record.evidence.length === 4, 'coverage');
  const all = [...record.scope.routes, ...record.evidence, ...record.findings, ...record.actions];
  require(new Set(all.map(row => row.id)).size === all.length, 'duplicate-id');
  const routes = new Set(record.scope.routes.map(row => row.id));
  const evidence = new Set(record.evidence.map(row => row.id));
  const findings = new Map(record.findings.map(row => [row.id, row]));
  const actions = new Map(record.actions.map(row => [row.id, row]));
  for (const e of record.evidence) {
    require(e.kind === 'SCENARIO_ASSUMPTION' && e.runtimeVerified === false && e.observedAt === null, 'invented-observation');
    require(record.sourcePaths.includes(e.sourcePath), 'source-reference');
  }
  for (const f of record.findings) {
    require(f.status === 'UNRESOLVED', 'unsupported-closure');
    require(f.routes.length > 0 && f.routes.every(id => routes.has(id)), 'route-reference');
    require(f.evidence.length > 0 && f.evidence.every(id => evidence.has(id)), 'evidence-reference');
    require(actions.get(f.action)?.finding === f.id, 'action-reference');
  }
  for (const a of record.actions) {
    const finding = findings.get(a.finding);
    require(finding?.action === a.id, 'finding-reference');
    require(a.assignment === 'PROPOSED_ROLE_ONLY' && a.ownerRole.length > 10, 'assignment');
    require(a.requiredRoutes.length > 0 && a.requiredRoutes.every(id => routes.has(id)), 'route-reference');
    require(JSON.stringify([...a.requiredRoutes].sort()) === JSON.stringify([...(finding?.routes ?? [])].sort()), 'required-coverage');
    require(a.retest.status === 'UNPERFORMED' && a.retest.coveredRoutes.length === 0 && a.retest.evidenceIds.length === 0 && a.retest.observedAt === null, 'invented-retest');
    require(a.acceptance.length > 50 && a.remaining.length > 20, 'acceptance-details');
  }
  return [...new Set(errors)].sort();
}

test('filled package has complete reciprocal references and four unresolved findings', () => {
  assert.deepEqual(issues(sample), []);
  assert.deepEqual(sample.findings.map(f => [f.id, f.priority, f.area]), [
    ['F01', 'P0', 'Privacy'], ['F02', 'P1', 'Instrument rights'],
    ['F03', 'P1', 'Clinical limits'], ['F04', 'P2', 'Accessibility'],
  ]);
});

const mutations = [
  ['sixth route', r => r.scope.routes.push({id: 'R06'}), 'scope'],
  ['second family', r => r.scope.instrumentFamilies.push('SECOND'), 'scope'],
  ['dangling route', r => r.findings[0].routes.push('R99'), 'route-reference'],
  ['dangling evidence', r => r.findings[0].evidence = ['E99'], 'evidence-reference'],
  ['duplicate action', r => r.actions[1].id = 'A01', 'duplicate-id'],
  ['invented date', r => r.evidence[0].observedAt = '2026-02-30', 'invented-observation'],
  ['promoted observation', r => r.evidence[0].runtimeVerified = true, 'invented-observation'],
  ['recommendation called resolved', r => r.findings[0].status = 'RESOLVED', 'unsupported-closure'],
  ['partial retest called complete', r => { r.actions[1].retest.status = 'PASS'; r.actions[1].retest.coveredRoutes = ['R02']; }, 'invented-retest'],
  ['weakened coverage', r => r.actions[1].requiredRoutes = ['R02'], 'required-coverage'],
  ['paper treated as grant', r => r.rightsPermission = 'GRANTED', 'rights'],
  ['sample treated as release', r => r.releaseStatus = 'APPROVED', 'release'],
  ['role treated as appointment', r => r.actions[0].assignment = 'CONFIRMED', 'assignment'],
];
for (const [name, mutate, expected] of mutations) test(`reject misleading handoff: ${name}`, () => {
  const fixture = structuredClone(sample);
  mutate(fixture);
  assert.ok(issues(fixture).includes(expected));
});

test('human companion preserves all finding/action/evidence references and unresolved status', () => {
  for (const f of sample.findings) {
    assert.ok(prose.includes(`${f.id} ${f.area}`));
    assert.ok(prose.includes(`### ${f.action}`));
    assert.ok(prose.includes(`Provenance ${f.evidence[0]}`));
  }
  assert.equal((prose.match(/Retest: UNPERFORMED/g) ?? []).length, 4);
  assert.match(prose, /inherited invented narrative, not a\s+personal observation/);
  assert.match(prose, /design target, not a universal WCAG rule/);
  assert.match(prose, /No full closure from partial coverage/);
  assert.match(prose, /current applicability UNKNOWN/);
  assert.match(prose, /no sale or launch/);
  assert.match(prose, /no patient records, assessment answers, scores, diagnoses/);
});

test('ten independently defined task IDs remain aligned; dates are not invented', () => {
  const expected = Array.from({length: 10}, (_, i) => `T${String(i + 1).padStart(2, '0')}`);
  assert.deepEqual(questions.questions.map(row => row.id), expected);
  assert.deepEqual(oracle.cases.map(row => row.id), expected);
  assert.ok(sample.evidence.every(row => row.observedAt === null));
  assert.ok(sample.actions.every(row => row.retest.observedAt === null));
  assert.match(sample.decisionRules.missingOrStaleEvidence, /UNKNOWN.*recheck exact source revision/);
  assert.match(sample.decisionRules.scopeChange, /no implicit acceptance, action or billing/);
});

test('package remains outside app/public paths and has no operational integration', () => {
  assert.equal(new URL('.', import.meta.url).pathname.endsWith('/prototypes/professional-handoff/'), true);
  for (const reference of sample.sourcePaths) {
    assert.ok(reference.startsWith('src/app/for-professionals/') || reference.startsWith('docs/professional-review-'));
    assert.ok(!reference.includes('..'));
  }
  const companion = read('handoff.json') + prose;
  assert.doesNotMatch(companion, /<script|https?:\/\/[^\s"]+\?|sk_live_|api[_-]?key|patient_name|assessment_answer/i);
});
