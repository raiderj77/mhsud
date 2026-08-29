import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const clientUrl = new URL(
  "../src/app/worry-time-scheduler/WorryTimeClient.tsx",
  import.meta.url,
);
const pageUrl = new URL(
  "../src/app/worry-time-scheduler/page.tsx",
  import.meta.url,
);
const privacyUrl = new URL("../src/app/privacy/page.tsx", import.meta.url);

test("worry-time scheduler presents mixed evidence across the whole surface", async () => {
  const client = await readFile(clientUrl, "utf8");
  const page = await readFile(pageUrl, "utf8");
  const combined = `${page}\n${client}`;

  assert.ok(
    (combined.match(/evidence (?:for [^.]+ )?is mixed|mixed results/gi) ?? []).length >= 2,
    "expected mixed-evidence language in both server and client content",
  );
  assert.match(combined, /39119056/);
  assert.match(combined, /26511764/);
  assert.match(combined, /does not show that the exercise caused (?:a|the) change/i);
  assert.match(combined, /cannot promise[\s\S]{0,100}worries will resolve/i);

  const prohibitedClaims = [
    /research shows most worries resolve/i,
    /most of your worries resolved/i,
    /many worries resolve on their own/i,
    /you will likely find that many worries/i,
    /your brain is learning/i,
    /trains your brain/i,
    /tells your brain/i,
    /helps your brain learn/i,
    /as their anxiety decreases/i,
    /the act of postponing gets easier/i,
    /help ensure your worry time stays productive/i,
  ];

  for (const claim of prohibitedClaims) {
    assert.doesNotMatch(combined, claim);
  }
});

test("privacy surfaces distinguish browser storage from automatic transmission and user copies", async () => {
  const privacy = await readFile(privacyUrl, "utf8");
  const client = await readFile(clientUrl, "utf8");

  assert.match(privacy, /does not automatically (?:send|submit|upload)/i);
  assert.match(privacy, /application database/i);
  assert.match(privacy, /screenshot, printout, download, or other copy/i);
  assert.match(client, /localStorage\.setItem/);
  assert.match(client, /saved in this browser&apos;s local storage/i);
  assert.match(client, /not intentionally sent to[\s\S]{0,80}MindCheck Tools servers/i);
  assert.match(client, /Anyone using this browser profile may be able to view it/i);

  assert.doesNotMatch(privacy, /there is no technical mechanism[^.]*transmits/i);
  assert.doesNotMatch(privacy, /does not receive, store, or transmit/i);
  assert.doesNotMatch(client, /runs entirely in your browser with no data stored/i);
});
