import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (file) => readFile(new URL(`../${file}`, import.meta.url), "utf8");
const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const ROUTES = [
  {
    route: "holmes-rahe-stress-inventory",
    client: "HolmesRaheClient.tsx",
    citations: ["6059863", "0022399967900104", "how-permissions-work-in-psyctests"],
    alternatives: ["/k6-distress-scale", "/phq-4-anxiety-depression-screen"],
  },
  {
    route: "ucla-loneliness-scale",
    client: "UCLAClient.tsx",
    citations: ["peplau.psych.ucla.edu/loneliness", "8576833", "surgeon-general-social-connection-advisory"],
    alternatives: ["/k6-distress-scale", "/phq-4-anxiety-depression-screen"],
  },
  {
    route: "brief-resilience-scale",
    client: "BRSClient.tsx",
    citations: ["18696313", "10.1080/10705500802222972"],
    alternatives: ["/k6-distress-scale", "/who-5-wellbeing-index"],
  },
  {
    route: "athens-insomnia-scale",
    client: "AISClient.tsx",
    citations: ["11033374", "S0022-3999(00)00095-7", "Sleep_Instruments_book_3_"],
    alternatives: ["/sleep-and-mood-check", "/phq-4-anxiety-depression-screen"],
  },
  {
    route: "who-assist-substance-screening",
    client: "AssistClient.tsx",
    citations: ["978924159938-2", "publishing/copyright", "samhsa.gov/find-support"],
    alternatives: ["/audit-alcohol-test", "/audit-c-alcohol-screen"],
  },
];

test("group C rights-gated routes are server-rendered, indexable information pages", async () => {
  const sitemap = await read("src/app/sitemap.ts");

  for (const entry of ROUTES) {
    const page = await read(`src/app/${entry.route}/page.tsx`);

    assert.doesNotMatch(page, /^"use client"/m, `${entry.route} must remain server-rendered`);
    assert.match(page, /medicalWebPageJsonLd\(/);
    assert.match(page, /faqJsonLd\(FAQ_DATA\)/);
    assert.match(page, /RightsBoundaryInformationPage/);
    assert.match(page, /<ToolReviewerBio lastReviewed="August 2, 2026" \/>/);
    assert.doesNotMatch(page, /toolPageJsonLd|noindex|robots:\s*\{/i);
    assert.doesNotMatch(page, /<form|type="radio"|type="checkbox"|role="radio"/i);
    assert.match(sitemap, new RegExp(`\\$\\{SITE_URL\\}/${entry.route}`));

    for (const citation of entry.citations) assert.match(page, new RegExp(escapeRegExp(citation)));
    for (const alternative of entry.alternatives) assert.match(page, new RegExp(`href: "${escapeRegExp(alternative)}"`));
  }
});

test("group C questionnaire and scoring clients stay removed", async () => {
  for (const entry of ROUTES) {
    await assert.rejects(
      read(`src/app/${entry.route}/${entry.client}`),
      (error) => error?.code === "ENOENT",
      `${entry.route} must not retain its former client`,
    );
  }
});

test("shared information surface contains the privacy, diagnostic, and crisis boundaries", async () => {
  const surface = await read("src/app/_components/RightsBoundaryInformationPage.tsx");

  assert.doesNotMatch(surface, /^"use client"/m);
  assert.match(surface, /No questionnaire/);
  assert.match(surface, /No scoring/);
  assert.match(surface, /does not ask for symptoms or experiences/);
  assert.match(surface, /cannot assess an emergency/);
  assert.match(surface, /In the United States, call or text 988/);
  assert.match(surface, /href="tel:988"/);
  assert.match(surface, /href="sms:988"/);
  assert.match(surface, /U\.S\. and international crisis resources/);
  assert.match(surface, /cannot reproduce, replace, or be compared/);
  assert.doesNotMatch(surface, /<form|<input|<select|<textarea|role="radio"/i);
});

test("legacy senior-loneliness wrapper no longer embeds the protected client", async () => {
  await assert.rejects(
    read("src/app/loneliness-test-seniors/page.tsx"),
    (error) => error?.code === "ENOENT",
  );
});
