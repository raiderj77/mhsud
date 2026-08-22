import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

const EXTRA_MAINTAINED_TOOLS = [
  "/caregiver-burnout-assessment",
  "/compassion-fatigue-test",
  "/grief-assessment",
  "/phq-4-anxiety-depression-screen",
  "/postpartum-depression-test",
];

test("the central tool registry has the required classification fields", async () => {
  const registry = await read("src/lib/toolClassifications.ts");
  for (const field of [
    "classification", "intendedAudience", "purpose", "sourceOwnership", "rightsStatus",
    "validationStatus", "scoringCutoffStatus", "diagnosticLimits", "clinicalReviewStatus",
    "privacyBehavior", "citationLinks", "relatedGuideLinks", "lastVerifiedDate",
    "manualReviewRequired",
  ]) assert.match(registry, new RegExp(`\\b${field}\\b`), `${field} is missing`);

  for (const label of ["Published Screener", "Original Educational Tool", "Information Only"]) {
    assert.match(registry, new RegExp(`"${label}"`));
  }
  assert.match(registry, /0–36 reflection total[^\n]*without severity bands or clinical cutoffs/i);
});

test("every maintained navigation tool has a registry record and one visible disclosure", async () => {
  const [registry, navbar, layout, notice] = await Promise.all([
    read("src/lib/toolClassifications.ts"),
    read("src/components/Navbar.tsx"),
    read("src/app/layout.tsx"),
    read("src/components/ToolClassificationNotice.tsx"),
  ]);
  const navBlock = navbar.match(/const CATEGORIES:[\s\S]*?const ALL_TOOLS/)?.[0] ?? "";
  const routes = new Set([
    ...[...navBlock.matchAll(/href:\s*"(\/[^\"]+)"/g)].map((match) => match[1]),
    ...EXTRA_MAINTAINED_TOOLS,
  ]);
  const registered = [...registry.matchAll(/\broute:\s*"(\/[^\"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(registered).size, registered.length, "classification routes must be unique");
  for (const route of routes) assert.ok(registered.includes(route), `${route} is not classified`);

  assert.match(layout, /<ToolClassificationNotice\s*\/>/);
  assert.match(notice, /getToolClassification\(pathname\)/);
  assert.match(notice, /View source, scoring, privacy, and review details/);
  assert.match(notice, /record\.classification/);
});

test("classification disclosure is not a monetization or measurement surface", async () => {
  const notice = await read("src/components/ToolClassificationNotice.tsx");
  assert.doesNotMatch(notice, /AdSlot|TherapyCTA|EmailCapture|gtag|analytics|affiliate|sponsor/i);
});
