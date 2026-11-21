import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("homepage keeps the tool paths below the new visitor cards and navigation prioritizes individuals", async () => {
  const [home, navbar, footer] = await Promise.all([
    read("src/app/page.tsx"),
    read("src/components/Navbar.tsx"),
    read("src/components/Footer.tsx"),
  ]);

  for (const phrase of [
    /Substance use and recovery/i,
    /Published mental-health screeners/i,
    /Educational self-checks and skills/i,
    /For professional teams/i,
  ]) assert.match(home, phrase);
  assert.ok(home.indexOf("Substance use and recovery") < home.indexOf("Published mental-health screeners"));
  assert.match(home, /Primary focus/);

  assert.ok(home.indexOf("What do you need today?") < home.indexOf("<ToolGrid"));
  for (const route of ["/screening-tools", "/therapists", "/facilities", "/conditions", "/crisis-resources"]) {
    assert.ok(navbar.includes(`href="${route}"`), `${route} is missing from the navigation`);
  }
  for (const route of ["/screening-tools#alcohol-substance", "/for-professionals", "/clinical-evidence", "/methodology", "/about"]) {
    assert.ok(!navbar.includes(`href="${route}"`), `${route} is still in the header`);
    assert.ok(footer.includes(route), `${route} is missing from the footer`);
  }
  for (const route of ["/screening-tools", "/crisis-resources", "/privacy"]) {
    assert.ok(footer.includes(route), `${route} is missing from the footer`);
  }
});

test("canonical production URLs use the apex HTTPS domain", async () => {
  const [metadata, sitemap, llms, llmsFull] = await Promise.all([
    read("src/lib/metadata.ts"),
    read("src/app/sitemap.ts"),
    read("public/llms.txt"),
    read("public/llms-full.txt"),
  ]);
  const combined = [metadata, sitemap, llms, llmsFull].join("\n");
  assert.match(metadata, /SITE_URL = "https:\/\/mindchecktools\.com"/);
  assert.doesNotMatch(combined, /http:\/\/mindchecktools\.com|https:\/\/www\.mindchecktools\.com|mhsud[^\s)]*\.vercel\.app/i);
});
