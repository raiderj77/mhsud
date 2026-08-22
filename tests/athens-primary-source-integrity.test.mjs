import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (file) => readFile(new URL(`../${file}`, import.meta.url), "utf8");

const ATHENS_SOURCE_FILES = [
  "src/app/athens-insomnia-scale/page.tsx",
  "src/app/clinical-evidence/page.tsx",
  "src/app/for-professionals/screening-instrument-rights-guide/page.tsx",
  "docs/instrument-rights-matrix-2026-08-05.md",
  "docs/instrument-evidence-rights-register.md",
];

test("Athens Insomnia Scale references use the actual primary validation record", async () => {
  const sources = await Promise.all(ATHENS_SOURCE_FILES.map(read));
  const combined = sources.join("\n");
  const [informationPage, evidencePage] = sources;

  assert.match(combined, /pubmed\.ncbi\.nlm\.nih\.gov\/11033374/);
  assert.match(combined, /doi\.org\/10\.1016\/S0022-3999\(00\)00095-7/);
  assert.match(informationPage, /Original Journal of Psychosomatic Research article record/);
  assert.match(evidencePage, /journal: "Journal of Psychosomatic Research"/);
  assert.doesNotMatch(combined, /11091029/);
  assert.doesNotMatch(combined, /S1389-9457\(00\)00055-X/);
});
