import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const root = process.cwd();

async function source(relativePath) {
  return readFile(path.join(root, relativePath), "utf8");
}

async function pageFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await pageFiles(fullPath));
    else if (entry.name === "page.tsx") files.push(fullPath);
  }
  return files;
}

test("page source contains no crawler-only screen-reader sections", async () => {
  const files = await pageFiles(path.join(root, "src", "app"));
  const offenders = [];
  for (const file of files) {
    const page = await readFile(file, "utf8");
    if (/<section\s+className=["']sr-only["']/.test(page)) {
      offenders.push(path.relative(root, file));
    }
  }
  assert.deepEqual(offenders, []);
});

test("quick answers are visible and use description-list semantics", async () => {
  const answerBlock = await source("src/components/AnswerBlock.tsx");
  assert.match(answerBlock, />\s*Quick answer\s*</);
  assert.match(answerBlock, /<dl[\s\S]*<dt[\s\S]*<dd/);
  assert.match(answerBlock, /Who is it for\?/);
  assert.doesNotMatch(answerBlock, /Who needs it\?/);
});

test("PHQ-9 score bands do not prescribe treatment from a score", async () => {
  const [tool, guide] = await Promise.all([
    source("src/app/phq-9-depression-test/page.tsx"),
    source("src/app/phq-9-score-interpretation/page.tsx"),
  ]);
  const combined = `${tool}\n${guide}`;
  for (const phrase of [
    "lifestyle changes recommended",
    "treatment discussion recommended",
    "active treatment typically needed",
    "active treatment and close follow-up recommended",
    "typically recommend active treatment",
  ]) {
    assert.equal(combined.toLowerCase().includes(phrase), false, phrase);
  }
  assert.match(tool, /treatment decisions require individual clinical context/i);
  assert.match(guide, /score alone cannot (?:diagnose depression or )?determine treatment/i);
  assert.match(tool, /988 Suicide &(?:amp;|) Crisis Lifeline/);
  assert.match(guide, /988 Suicide & Crisis Lifeline/);
});

test("screening hub provides an answer-first, evidence-linked tool chooser", async () => {
  const hub = await source("src/app/screening-tools/page.tsx");
  assert.match(hub, /Which mental health screening tool should I use\?/);
  assert.match(hub, /TOOL_CHOOSER_ROWS/);
  assert.match(hub, /Concern-to-screening-tool guide/);
  assert.match(hub, /clinical-evidence#\$\{row\.evidence\}/);
  assert.match(hub, /not a diagnosis or a personalized clinical\s*recommendation/i);
});

test("consumer-health notice and entity metadata are discoverable without duplicate homepage entities", async () => {
  const [home, sitemap, llms, llmsFull, metadata] = await Promise.all([
    source("src/app/page.tsx"),
    source("src/app/sitemap.ts"),
    source("public/llms.txt"),
    source("public/llms-full.txt"),
    source("src/lib/metadata.ts"),
  ]);
  for (const content of [home, sitemap, llms, llmsFull]) {
    assert.match(content, /consumer-health-data-privacy/);
  }
  assert.doesNotMatch(home, /organizationJsonLd|websiteJsonLd/);
  assert.match(metadata, /"@type": "WebApplication"/);
  assert.match(metadata, /alternateName: "MindCheck"/);
  assert.match(metadata, /"max-snippet": -1/);
});
