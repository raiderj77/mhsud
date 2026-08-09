import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (relativePath) => readFile(new URL(`../${relativePath}`, import.meta.url), "utf8");

test("homepage presents one consistent, non-generic MindCheck identity", async () => {
  const [home, metadata] = await Promise.all([
    read("src/app/page.tsx"),
    read("src/lib/metadata.ts"),
  ]);

  assert.match(home, /title: "MindCheck Tools \| Free, Private Mental Health Self-Checks"/);
  assert.match(home, /MindCheck Tools: private mental health/);
  assert.match(home, /What is MindCheck Tools\?/);
  assert.match(home, /text-3xl sm:text-4xl md:text-5xl leading-tight/);
  assert.doesNotMatch(home, /text-display|text-heading/);
  assert.match(metadata, /name: SITE_NAME,[\s\S]{0,100}alternateName: "MindCheck"/);
  assert.doesNotMatch(metadata, /alternateName: "Free Mental Health Screening Tools"/);
});

test("homepage answer block preserves strict YMYL and privacy boundaries", async () => {
  const home = await read("src/app/page.tsx");

  assert.match(home, /not a diagnosis, medical advice, treatment, or emergency care/i);
  assert.match(home, /processed in your browser and are not intentionally sent to MindCheck Tools/i);
  assert.match(home, /SITE_AUTHOR\.name/);
  assert.match(home, /SITE_AUTHOR\.credential/);
  assert.match(home, /href="\/screening-tools"/);
  assert.match(home, /href="\/methodology"/);
  assert.match(home, /href="\/clinical-evidence"/);
  assert.match(home, /href="\/for-professionals"/);
  assert.doesNotMatch(home, /guarantee|diagnose you|clinically proven to improve/i);
});
