import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (file) => readFile(new URL(`../${file}`, import.meta.url), "utf8");

const fortyFourPixelClients = [
  "src/app/rosenberg-self-esteem-scale/RSESClient.tsx",
  "src/app/k6-distress-scale/K6Client.tsx",
  "src/app/ces-d-depression-scale/CesdClient.tsx",
  "src/app/who-5-wellbeing-index/Who5Client.tsx",
  "src/app/asrs-adhd-screening/ASRSClient.tsx",
  "src/app/pcl-5-ptsd-screening/PCL5Client.tsx",
  "src/app/pc-ptsd-5-screening/PcPtsd5Client.tsx",
];

test("definite undersized assessment answers enforce 44px height and width", async () => {
  const sources = await Promise.all(fortyFourPixelClients.map(read));

  for (const [index, source] of sources.entries()) {
    assert.match(
      source,
      /className=\{`min-h-11 min-w-11/,
      `${fortyFourPixelClients[index]} must preserve 44px answer targets`,
    );
  }

  const pcPtsd = sources[
    fortyFourPixelClients.indexOf(
      "src/app/pc-ptsd-5-screening/PcPtsd5Client.tsx",
    )
  ];

  assert.equal((pcPtsd.match(/className=\{`min-h-11 min-w-11/g) ?? []).length, 2);
});
