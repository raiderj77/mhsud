import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";
import nextConfig from "../next.config.mjs";

const read = (file) => readFile(new URL(`../${file}`, import.meta.url), "utf8");
const consentSource = await read("src/lib/privacyConsent.ts");
const { outputText } = ts.transpileModule(consentSource, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
});
const context = { exports: {} };
vm.runInNewContext(outputText, context);
const parse = (raw) => context.exports.parseStoredPrivacyConsent(raw);

test("valid legacy choices preserve only explicit analytics consent", () => {
  for (const analytics of [false, true]) {
    for (const advertising of [false, true]) {
      const result = parse(JSON.stringify({ version: 2, analytics, advertising }));
      assert.equal(JSON.stringify(result), JSON.stringify({ version: 3, analytics }));
      assert.equal("advertising" in result, false);
    }
  }
});

test("current choices retain no extra fields and invalid choices fail closed", () => {
  assert.equal(JSON.stringify(parse('{"version":3,"analytics":false,"advertising":true}')),
    '{"version":3,"analytics":false}');
  assert.equal(JSON.stringify(parse('{"version":3,"analytics":true}')),
    '{"version":3,"analytics":true}');
  for (const raw of [null, "", "broken", "null", "[]", "true", "42", "{}",
    '{"version":2,"advertising":true}', '{"version":2,"analytics":true}',
    '{"version":2,"analytics":true,"advertising":"true"}',
    '{"version":3,"analytics":"true"}', '{"version":4,"analytics":true}',
    '{"version":1,"analytics":true,"advertising":true}']) {
    assert.equal(parse(raw), null, `must fail closed: ${raw}`);
  }
});

async function sourceFiles(dir) {
  const entries = await readdir(new URL(`../${dir}`, import.meta.url), { withFileTypes: true });
  return (await Promise.all(entries.map((entry) => {
    const file = `${dir}/${entry.name}`;
    return entry.isDirectory() ? sourceFiles(file) : /\.(tsx?|jsx?)$/.test(file) ? [file] : [];
  }))).flat();
}

test("application source contains no display-ad component, loader, metadata or activation", async () => {
  // Old script-ID removal is intentionally retained as defensive cleanup only.
  const forbidden = /AdSlot|adsbygoogle|loadNonPersonalizedAds|ADS_READY_EVENT|google-adsense-account|googlesyndication|doubleclick|googleadservices|adservice\.google|fundingchoicesmessages|adtrafficquality|NEXT_PUBLIC_(?:ADSENSE|GOOGLE_CERTIFIED_CMP)/i;
  for (const file of [...await sourceFiles("src"), "next.config.mjs", ".env.example"]) {
    assert.doesNotMatch(await read(file), forbidden, file);
  }
});

test("CSP drops ad origins and frames while preserving existing non-ad protections", async () => {
  const headers = (await nextConfig.headers()).find((entry) => entry.source === "/(.*)").headers;
  const csp = headers.find((header) => header.key === "Content-Security-Policy").value;
  assert.match(csp, /frame-src 'none'/);
  assert.match(csp, /frame-ancestors 'none'/);
  assert.match(csp, /object-src 'none'/);
  assert.match(csp, /www\.googletagmanager\.com/);
  assert.match(csp, /www\.google-analytics\.com/);
  assert.doesNotMatch(csp, /googlesyndication|doubleclick|googleadservices|adservice\.google|fundingchoicesmessages|adtrafficquality/);
  assert.equal(headers.find((header) => header.key === "X-Frame-Options").value, "DENY");
});

test("public disclosures state no display ads without removing ordinary-data disclosures", async () => {
  for (const file of ["src/app/privacy/page.tsx", "src/app/cookies/page.tsx",
    "src/app/consumer-health-data-privacy/page.tsx", "src/app/terms/page.tsx",
    "src/app/accessibility/page.tsx", "src/components/Footer.tsx", "src/app/page.tsx",
    "public/llms.txt", "public/llms-full.txt"]) {
    const source = await read(file);
    assert.match(source, /does not display ads|Display advertising is absent/i, file);
    assert.doesNotMatch(source, /AdSense|if advertising is (?:enabled|activated)|when advertising becomes active|advertising is currently disabled|planned advertising provider/i, file);
  }
  const privacy = await read("src/app/privacy/page.tsx");
  for (const boundary of [/hosting/i, /Loops/, /Vercel/, /affiliate/i, /local/i, /Global Privacy Control/]) {
    assert.match(privacy, boundary);
  }
});

test("consent migration persists a normalized choice and preserves GPC and withdrawal", async () => {
  const consent = await read("src/components/ConsentAnalytics.tsx");
  assert.match(consent, /globalPrivacyControlIsActive\(\)[\s\S]*version: 3 as const, analytics: false/);
  assert.match(consent, /applyConsent\(stored\)/);
  assert.match(consent, /JSON\.stringify\(storedChoice\)/);
  assert.match(consent, /previous\.analytics && !choice\.analytics/);
  assert.match(consent, /window\.location\.reload\(\)/);
  assert.doesNotMatch(consent, /setAdvertising|choice\.advertising|advertising: true/);
  assert.match(consent, /window\.location\.search \|\| window\.location\.hash \|\| globalPrivacyControlIsActive\(\)/);
});

test("active operating guidance explicitly supersedes legacy ad instructions", async () => {
  for (const file of ["CLAUDE.md", "EMPIRE_BUILD_STANDARDS.md", "docs/CLAUDE_FULL.md",
    "agents/competitor-watcher.md", "agents/data-analyst.md", "agents/optimist.md",
    "agents/risk-auditor.md", "agents/ux-auditor.md", "PHASE2_IMPLEMENTATION_CHECKLIST.md"]) {
    const source = await read(file);
    assert.match(source.slice(0, 1000), /No display advertising or ad networks/);
    assert.match(source.slice(0, 1000), /supersedes all conflicting/);
  }
});

test("review branch cannot trigger automatic Vercel deployment", async () => {
  const config = JSON.parse(await read("vercel.json"));
  assert.deepEqual(config.git.deploymentEnabled, {
    "codex/no-display-advertising-2026-08-28": false,
  });
  assert.equal(config.redirects[0].destination, "https://mindchecktools.com/$1");
});
