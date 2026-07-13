import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import {
  buildEmailProviderPayload,
  MAX_SUBSCRIPTION_BODY_BYTES,
  parseSubscriptionBody,
} from "../src/lib/subscription.mjs";

test("subscription requires explicit consent", () => {
  assert.equal(parseSubscriptionBody(JSON.stringify({ email: "person@example.com" })).ok, false);
});

test("subscription rejects malformed email, honeypot, and oversized bodies", () => {
  assert.equal(parseSubscriptionBody(JSON.stringify({ email: "bad", consent: true })).ok, false);
  assert.equal(
    parseSubscriptionBody(
      JSON.stringify({ email: "person@example.com", consent: true, website: "spam" }),
    ).ok,
    false,
  );
  assert.equal(parseSubscriptionBody("x".repeat(MAX_SUBSCRIPTION_BODY_BYTES + 1)).status, 413);
});

test("provider receives email only, never screener or health context", () => {
  const payload = buildEmailProviderPayload("person@example.com");
  assert.deepEqual(payload, { email: "person@example.com", subscribed: true });
  assert.equal("source" in payload, false);
  assert.equal("userGroup" in payload, false);
  assert.equal("score" in payload, false);
});

test("affiliate links suppress referrer data and disclose the relationship", async () => {
  const component = await readFile(new URL("../src/components/TherapyCTA.tsx", import.meta.url), "utf8");
  assert.match(component, /referrerPolicy="no-referrer"/);
  assert.match(component, /noreferrer/);
  assert.match(component, /Affiliate Disclosure/);
  assert.match(component, /answers and score are not sent/);
});

test("newsletter form does not collect the screener name", async () => {
  const component = await readFile(new URL("../src/components/EmailCapture.tsx", import.meta.url), "utf8");
  const route = await readFile(new URL("../src/app/api/subscribe/route.ts", import.meta.url), "utf8");
  assert.doesNotMatch(component, /toolName|source:/);
  assert.doesNotMatch(route, /toolName|userGroup|body\.source/);
});

test("youth substance screener contains no affiliate therapy promotion", async () => {
  const crafft = await readFile(
    new URL("../src/app/crafft-substance-screening/CrafftClient.tsx", import.meta.url),
    "utf8",
  );
  assert.doesNotMatch(crafft, /TherapyCTA|THERAPY_AFFILIATE_URL/);
  assert.match(crafft, /Crisis Resources/);
});
