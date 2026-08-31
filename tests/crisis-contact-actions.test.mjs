import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (file) => readFile(new URL(`../${file}`, import.meta.url), "utf8");

test("homepage and footer identify U.S. crisis services and international options", async () => {
  const [home, footer] = await Promise.all([read("src/app/page.tsx"), read("src/components/Footer.tsx")]);
  for (const source of [home, footer]) {
    assert.match(source, /In the United States/);
    assert.match(source, /Outside the U\.S\./);
    assert.match(source, /local emergency number/);
    assert.match(source, /href="\/crisis-resources"/);
  }
  assert.match(home, /href="sms:988"/);
  assert.doesNotMatch(footer, /Call or text 988 &bull;/);
});

test("global crisis banner offers direct, body-free mobile contact actions", async () => {
  const banner = await read("src/components/CrisisBanner.tsx");

  assert.match(banner, /href="tel:988"/);
  assert.match(banner, /href="sms:988"/);
  assert.match(banner, /href="sms:741741"/);
  assert.match(banner, /href="tel:\+18006624357"/);
  assert.match(banner, /href="https:\/\/988lifeline\.org\/get-help\/"/);
  assert.match(banner, /U\.S\. crisis resources/);
  assert.match(banner, /local emergency services/);
  assert.match(banner, /Outside the U\.S\./);
  assert.match(banner, /href="https:\/\/findahelpline\.com\/"/);
  assert.match(banner, /min-h-\[44px\]/);
  assert.match(banner, /not a diagnosis or treatment/);
  assert.doesNotMatch(banner, /sms:[^"']*[?&](?:body|subject)=/i);
});

test("crisis resource cards preserve contact details and expose verified action links", async () => {
  const page = await read("src/app/crisis-resources/page.tsx");
  const expectedHrefs = [
    "tel:988",
    "sms:988",
    "sms:741741",
    "tel:+18006624357",
    "sms:838255",
    "tel:+18664887386",
    "sms:678678",
    "tel:+18007997233",
    "sms:88788",
    "tel:+18002221222",
    "https://988lifeline.org/get-help/",
    "https://www.crisistextline.org/",
    "https://www.samhsa.gov/find-support",
    "https://www.veteranscrisisline.net/",
    "https://www.thetrevorproject.org/get-help/",
    "https://www.thehotline.org/",
    "https://www.poison.org/need-immediate-assistance",
    "https://findahelpline.com/",
  ];

  for (const href of expectedHrefs) {
    assert.ok(page.includes(`href: "${href}"`) || page.includes(`href="${href}"`), `missing ${href}`);
  }

  assert.match(page, /contact: "Call or text 988"/);
  assert.match(page, /contact: "Text HOME to 741741"/);
  assert.match(page, /contact: "1-800-662-4357"/);
  assert.match(page, /contact: "\+91-22-27546669"/);
  assert.doesNotMatch(page, /9820466726/);
  assert.match(page, /RESOURCE_ACTION_CLASS[\s\S]*min-h-\[44px\]/);
  assert.match(page, /target=\{action\.external \? "_blank" : undefined\}/);
  assert.match(page, /rel=\{action\.external \? "noopener noreferrer" : undefined\}/);
  assert.doesNotMatch(page, /sms:[^"']*[?&](?:body|subject)=/i);
});

test("Veterans Crisis Line copy uses the current 988 routing", async () => {
  const sources = await Promise.all([
    read("src/app/safety-plan/SafetyPlanClient.tsx"),
    read("src/app/pcl-5-ptsd-screening/PCL5Client.tsx"),
    read("src/app/pcl-5-ptsd-screening/page.tsx"),
    read("src/app/pc-ptsd-5-screening/PcPtsd5Client.tsx"),
    read("src/app/pc-ptsd-5-screening/page.tsx"),
  ]);

  for (const source of sources) {
    assert.doesNotMatch(source, /1-800-273-8255/);
  }
  assert.ok(sources.every((source) => /988/.test(source)));
  assert.match(sources.join("\n"), /Press 1/);
  assert.match(sources.join("\n"), /838255/);
});
