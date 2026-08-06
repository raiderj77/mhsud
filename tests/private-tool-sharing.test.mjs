import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

const centralizedClients = [
  ["asrs-adhd-screening/ASRSClient.tsx", "/asrs-adhd-screening"],
  ["audit-alcohol-test/AUDITClient.tsx", "/audit-alcohol-test"],
  ["audit-c-alcohol-screen/AUDITCClient.tsx", "/audit-c-alcohol-screen"],
  ["bac-calculator/BACClient.tsx", "/bac-calculator"],
  ["big-five-personality-test/BigFiveClient.tsx", "/big-five-personality-test"],
  ["burnout-assessment-tool/BurnoutClient.tsx", "/burnout-assessment-tool"],
  ["gad-7-anxiety-test/GAD7Client.tsx", "/gad-7-anxiety-test"],
  ["halt-check-in/HALTClient.tsx", "/halt-check-in"],
  ["health-recovery-timeline/HealthTimelineClient.tsx", "/health-recovery-timeline"],
  ["mental-load-calculator/MentalLoadClient.tsx", "/mental-load-calculator"],
  ["money-saved-recovery-calculator/MoneySavedClient.tsx", "/money-saved-recovery-calculator"],
  ["pcl-5-ptsd-screening/PCL5Client.tsx", "/pcl-5-ptsd-screening"],
  ["phq-9-depression-test/PHQ9Client.tsx", "/phq-9-depression-test"],
  ["readiness-to-change/ReadinessClient.tsx", "/readiness-to-change"],
  ["relapse-prevention-plan/RelapsePlanClient.tsx", "/relapse-prevention-plan"],
  ["sleep-and-mood-check/SleepMoodClient.tsx", "/sleep-and-mood-check"],
  ["sobriety-calculator/SobrietyClient.tsx", "/sobriety-calculator"],
  ["standard-drinks-calculator/StandardDrinksClient.tsx", "/standard-drinks-calculator"],
  ["treatment-cost-estimator/TreatmentCostClient.tsx", "/treatment-cost-estimator"],
  ["trigger-identification-worksheet/TriggerWorksheetClient.tsx", "/trigger-identification-worksheet"],
  ["withdrawal-timeline/WithdrawalTimelineClient.tsx", "/withdrawal-timeline"],
];

test("the sensitive share-client inventory is explicit and complete", async () => {
  const inventory = centralizedClients.map(([file]) => file);

  assert.equal(new Set(inventory).size, inventory.length);

  const appRoot = new URL("../src/app/", import.meta.url);
  const clientFiles = (await readdir(appRoot, { recursive: true }))
    .map((file) => file.replaceAll("\\", "/"))
    .filter((file) => file.endsWith("Client.tsx"));
  const sources = await Promise.all(
    clientFiles.map(async (file) => [file, await readFile(new URL(file, appRoot), "utf8")]),
  );
  const helperUsers = sources
    .filter(([, source]) => source.includes("sharePrivateToolLink"))
    .map(([file]) => file)
    .sort();
  const directApiUsers = sources
    .filter(([, source]) => /navigator\.share|navigator\.clipboard\.writeText/.test(source))
    .map(([file]) => file)
    .sort();

  assert.deepEqual(helperUsers, centralizedClients.map(([file]) => file).sort());
  assert.deepEqual(directApiUsers, []);
});

test("all centralized clients share only their static tool identity and canonical path", async () => {
  for (const [file, canonicalPath] of centralizedClients) {
    const source = await readFile(new URL(`../src/app/${file}`, import.meta.url), "utf8");
    const shareCall = source.match(/sharePrivateToolLink\(\{([\s\S]*?)\n\s*\}\);/)?.[1];

    assert.ok(shareCall, `${file} must call the private sharing helper`);
    assert.match(source, /PRIVATE_SHARE_NOTICE/, `${file} must explain what sharing excludes`);
    assert.match(shareCall, /toolName:\s*"[^"]+"/);
    assert.match(shareCall, new RegExp(`canonicalPath:\\s*"${canonicalPath}"`));
    assert.doesNotMatch(
      shareCall,
      /\b(?:answers|responses|score|severity|risk|category|label|rating|summary|result|profile|stage|selected|substance|timeline|estimate|savings|bac)\s*:/i,
      `${file} passes sensitive state into the sharing boundary`,
    );
    assert.doesNotMatch(source, /navigator\.share|navigator\.clipboard\.writeText/);
    assert.doesNotMatch(source, /handleShare\("(?:results|blank)"\)/);
    assert.doesNotMatch(
      source,
      />\s*(?:Copy My (?:Results?|Summary|Estimate|Progress|Savings)|Share (?:Results|Profile|Estimate|Timeline|Blank (?:Test|Quiz|Check-In)))\s*</,
    );
  }
});

test("the sharing boundary emits only a tool name and clean canonical URL", async () => {
  const source = await readFile(
    new URL("../src/lib/privateToolSharing.ts", import.meta.url),
    "utf8",
  );

  assert.match(source, /new URL\(canonicalPath, SITE_URL\)/);
  assert.match(source, /canonicalUrl\.search = ""/);
  assert.match(source, /canonicalUrl\.hash = ""/);
  assert.match(source, /navigator\.share\(\{ title: toolName, text: toolName, url \}\)/);
  assert.match(source, /navigator\.clipboard\.writeText\(`\$\{toolName\}\\n\$\{url\}`\)/);
  assert.doesNotMatch(source, /\.\.\./, "share payloads must not spread caller-controlled data");
  assert.match(
    source,
    /never includes your answers, scores, severity, risk or category labels, ratings, or summaries/i,
  );
});

test("HALT remains covered by its dedicated privacy and mobile regression", async () => {
  const source = await readFile(
    new URL("./halt-safety-regression.test.mjs", import.meta.url),
    "utf8",
  );

  assert.match(source, /HALT sharing uses the centralized static-name and canonical-link boundary/);
  assert.match(source, /doesNotMatch\(shareBlock, \/scores\|vuln\|total\|summary\|result\/i\)/);
});
