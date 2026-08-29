import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const urgePage = await readFile(new URL("../src/app/urge-surfing-timer/page.tsx", import.meta.url), "utf8");
const urgeClient = await readFile(new URL("../src/app/urge-surfing-timer/UrgeSurfingClient.tsx", import.meta.url), "utf8");
const dbtPage = await readFile(new URL("../src/app/dbt-crisis-skills/page.tsx", import.meta.url), "utf8");
const dbtClient = await readFile(new URL("../src/app/dbt-crisis-skills/DbtCrisisSkillsClient.tsx", import.meta.url), "utf8");
const reflectionPrompts = await readFile(new URL("../src/lib/reflectionPrompts.ts", import.meta.url), "utf8");

test("urge-surfing copy does not promise a fixed craving timeline or neurological result", () => {
  const source = `${urgePage}\n${urgeClient}`;
  assert.doesNotMatch(source, /most cravings|15.{0,3}30 minutes|15.{0,3}20 minutes|average craving duration|rewire|neural pathways|neuroplasticity|neurologically impossible/i);
  assert.match(source, /does not predict when a craving will end/i);
});

test("urge-surfing answers and visible guidance cite current federal sources", () => {
  assert.match(urgeClient, /mirecc\.va\.gov\/MIRECC\/visn5\/EBT\/CBT-SUD\/Urge-Surfing\.asp/);
  assert.match(urgeClient, /store\.samhsa\.gov\/sites\/default\/files\/pep23-02-01-003\.pdf/);
  assert.match(urgePage, /The timer offers several practice intervals, but it does not predict/);
});

test("urge-surfing reflection prompts do not assume a craving peaks or declines", () => {
  const urgeReflection = reflectionPrompts.match(/"urge-surfing-timer": \{[\s\S]*?\n  \},/)?.[0] ?? "";
  assert.doesNotMatch(urgeReflection, /did it peak and then decrease/i);
  assert.doesNotMatch(urgeReflection, /when a craving is at its peak/i);
  assert.doesNotMatch(urgeReflection, /build your confidence in managing future cravings/i);
  assert.doesNotMatch(urgeReflection, /15[^\n]{0,3}30 minutes|15[^\n]{0,3}20 minutes|most cravings|naturally subsides|effective/i);
});

test("DBT physical skills use medically bounded, low-risk examples", () => {
  const source = `${dbtPage}\n${dbtClient}`;
  assert.match(source, /Temperature-based TIPP practice can affect heart rate/);
  assert.match(source, /Exercise can raise heart rate rapidly/);
  assert.match(source, /does not instruct extreme cold exposure or face immersion/);
  assert.match(source, /mild, familiar, non-painful sensation/);
  assert.doesNotMatch(
    source,
    /ice cubes?|ice packs?|hot sauce|rubber bands?|burpees?|submerge|cold shower|vigorous physical activity|run up and down stairs/i,
  );
  assert.doesNotMatch(source, /one of the most extensively researched/i);
  assert.match(source, /mirecc\.va\.gov\/mirecc\/visn16\/docs\/DBT_Visual_Review_Flash_Cards\.pdf/);
  assert.match(dbtPage, /988/);
  assert.match(dbtPage, /immediate danger/i);
});

test("tool privacy copy distinguishes private inputs from consented page analytics", () => {
  for (const source of [urgeClient, dbtClient]) {
    assert.match(source, /not sent to analytics/);
    assert.match(source, /only if you consent to statistics cookies/);
  }
});
