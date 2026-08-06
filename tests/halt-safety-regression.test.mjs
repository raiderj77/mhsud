import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const haltSourceUrl = new URL(
  "../src/app/halt-check-in/HALTClient.tsx",
  import.meta.url,
);
const haltPageUrl = new URL("../src/app/halt-check-in/page.tsx", import.meta.url);

test("HALT rating controls reflow without fixed endpoint columns and preserve radio semantics", async () => {
  const source = await readFile(haltSourceUrl, "utf8");

  assert.match(source, /className="grid grid-cols-2 gap-2 mb-1 px-1"/);
  assert.match(source, /className="grid grid-cols-5 gap-1 sm:gap-1\.5"/);
  assert.match(source, /min-h-\[44px\] min-w-\[44px\] w-full/);
  assert.match(source, /role="radiogroup"/);
  assert.match(source, /role="radio"/);
  assert.match(source, /aria-checked=\{scores\[dim\.key\] === val\}/);
  assert.match(source, /tabIndex=\{scores\[dim\.key\] === val \? 0 : -1\}/);
  assert.match(source, /event\.key === "ArrowLeft"/);
  assert.doesNotMatch(source, /className="flex items-center gap-2 ml-8"/);
  assert.doesNotMatch(source, /text-\[11px\][^"]*w-16/);
});

test("HALT sharing uses the centralized static-name and canonical-link boundary", async () => {
  const source = await readFile(haltSourceUrl, "utf8");
  const shareBlock = source.match(
    /const handleShare = useCallback\(async \(\) => \{([\s\S]*?)\n  \}, \[\]\);/,
  )?.[1];

  assert.ok(shareBlock, "HALT private share handler is missing");
  assert.match(shareBlock, /sharePrivateToolLink\(\{/);
  assert.match(shareBlock, /toolName: "HALT Check-In"/);
  assert.match(shareBlock, /canonicalPath: "\/halt-check-in"/);
  assert.doesNotMatch(shareBlock, /scores|vuln|total|summary|result/i);
  assert.doesNotMatch(source, /navigator\.share|navigator\.clipboard\.writeText/);
  assert.doesNotMatch(source, /HALT Check-In Results|Share Results|Results copied/);
  assert.match(source, /PRIVATE_SHARE_NOTICE/);
});

test("HALT remains a sourced reflection and never emits an invented relapse-risk score", async () => {
  const [clientSource, pageSource] = await Promise.all([
    readFile(haltSourceUrl, "utf8"),
    readFile(haltPageUrl, "utf8"),
  ]);

  assert.match(clientSource, /not a validated assessment and has no clinical cutoff/i);
  assert.match(clientSource, /cannot estimate relapse risk/i);
  assert.match(clientSource, /NBK601489\/box\/ch2\.b11/);
  assert.match(clientSource, /pubmed\.ncbi\.nlm\.nih\.gov\/41583901/);
  assert.match(pageSource, /No validated HALT cutoff or composite relapse-risk score was identified/);
  assert.doesNotMatch(
    `${clientSource}\n${pageSource}`,
    /getVulnerabilityLevel|ReflectionSummary|scoreRange|severityLabel|\{total\}\/20|Low Vulnerability|Moderate Vulnerability|Elevated Vulnerability|High Vulnerability|overall vulnerability level|significantly increase(?:s)? (?:the )?(?:risk|vulnerability)|prevent many relapses|finite resources|strongest predictors of relapse|thirst often feels like hunger|naturally boosts alertness/i,
  );
});
