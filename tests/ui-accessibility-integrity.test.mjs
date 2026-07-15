import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const root = process.cwd();

async function sourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await sourceFiles(fullPath));
    else if (/\.(tsx|ts)$/.test(entry.name)) files.push(fullPath);
  }
  return files;
}

test("the root layout is the only main landmark", async () => {
  const appRoot = path.join(root, "src", "app");
  const files = await sourceFiles(appRoot);
  const offenders = [];
  for (const file of files) {
    if (file === path.join(appRoot, "layout.tsx")) continue;
    const source = await readFile(file, "utf8");
    if (source.includes("<main")) offenders.push(path.relative(root, file));
  }
  assert.deepEqual(offenders, []);
});

test("the recovery savings calculator names every mode-specific field", async () => {
  const source = await readFile(
    path.join(root, "src", "app", "money-saved-recovery-calculator", "MoneySavedClient.tsx"),
    "utf8",
  );
  assert.match(source, /aria-label="Time period for spending amount"/);
  assert.match(source, /aria-label="Sobriety start date"/);
  assert.match(source, /aria-label="Number of sober days"/);
});

test("shared light-theme secondary text uses accessible contrast overrides", async () => {
  const source = await readFile(path.join(root, "src", "app", "globals.css"), "utf8");
  assert.match(source, /\.text-neutral-400,[\s\S]*\.text-neutral-500[\s\S]*color: #525252/);
  assert.match(source, /\.text-sage-600,[\s\S]*color: #0f766e/);
});

test("scrollable tables are keyboard-focusable regions", async () => {
  const scoreLayout = await readFile(path.join(root, "src", "components", "ScoreInterpretationLayout.tsx"), "utf8");
  const cookies = await readFile(path.join(root, "src", "app", "cookies", "page.tsx"), "utf8");
  for (const source of [scoreLayout, cookies]) {
    assert.match(source, /role="region"/);
    assert.match(source, /tabIndex=\{0\}/);
  }
});

test("clinical evidence description-list groups are direct children", async () => {
  const source = await readFile(path.join(root, "src", "app", "clinical-evidence", "page.tsx"), "utf8");
  assert.doesNotMatch(source, /<div className="grid sm:grid-cols-2 gap-3">\s*<div>\s*<dt/);
});

test("public source does not link to retired or nonexistent tool routes", async () => {
  const files = await sourceFiles(path.join(root, "src"));
  const retiredRoutes = [
    "/audit-alcohol-screen",
    "/cage-aid-substance-test",
    "/cage-questionnaire",
    "/perceived-stress-scale",
  ];
  for (const file of files) {
    const source = await readFile(file, "utf8");
    for (const route of retiredRoutes) assert.equal(source.includes(`\"${route}\"`), false, `${route} in ${file}`);
  }
});

test("primary PHQ-9 and GAD-7 assessments appear before long clinical content", async () => {
  for (const [route, component] of [
    ["phq-9-depression-test", "<PHQ9Client"],
    ["gad-7-anxiety-test", "<GAD7Client"],
  ]) {
    const source = await readFile(path.join(root, "src", "app", route, "page.tsx"), "utf8");
    assert.ok(source.indexOf(component) < source.indexOf("SSR Clinical Content"), `${route} tool is buried`);
    assert.equal(source.match(/Published by MindCheck Tools/g)?.length, 1, `${route} duplicates publisher details`);
    assert.match(source, /href="#screening"/);
    assert.match(source, /id="screening"/);
  }
});

test("long-form assessment pages provide an early jump to the tool", async () => {
  for (const route of [
    "work-stress-check",
    "caregiver-burnout-assessment",
    "compassion-fatigue-test",
    "postpartum-depression-test",
    "grief-assessment",
  ]) {
    const source = await readFile(path.join(root, "src", "app", route, "page.tsx"), "utf8");
    assert.match(source, /href="#screening"/);
    assert.match(source, /id="screening"/);
  }
});

test("multi-step worksheet fields keep explicit accessible names", async () => {
  const routes = ["trigger-identification-worksheet", "relapse-prevention-plan", "cbt-thought-record"];
  for (const route of routes) {
    const directory = path.join(root, "src", "app", route);
    const files = await sourceFiles(directory);
    const source = (await Promise.all(files.map((file) => readFile(file, "utf8")))).join("\n");
    assert.match(source, /aria-label=/, `${route} lacks explicit field names`);
  }
});
