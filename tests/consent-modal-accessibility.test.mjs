import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = await readFile(
  new URL("../src/components/ConsentAnalytics.tsx", import.meta.url),
  "utf8",
);

test("consent dialog traps forward and reverse keyboard focus", () => {
  assert.match(source, /const FOCUSABLE_SELECTOR/);
  assert.match(source, /event\.key !== "Tab"/);
  assert.match(source, /event\.shiftKey/);
  assert.match(source, /!dialog\.contains\(current\)/);
  assert.match(source, /document\.addEventListener\("keydown", handleKeyDown, true\)/);
  assert.match(source, /document\.removeEventListener\("keydown", handleKeyDown, true\)/);
});

test("Escape applies the privacy-protective choice without enabling optional services", () => {
  const escapeHandler = source.match(/if \(event\.key === "Escape"\) \{([\s\S]*?)\n      \}/)?.[1] ?? "";
  assert.match(escapeHandler, /event\.preventDefault\(\)/);
  assert.match(escapeHandler, /save\(\{ version: 2, analytics: false, advertising: false \}\)/);
  assert.doesNotMatch(escapeHandler, /analytics: true|advertising: true|loadGoogle/);
});

test("open consent dialog isolates and restores the background and invoking focus", () => {
  assert.match(source, /element\.inert = true/);
  assert.match(source, /element\.setAttribute\("aria-hidden", "true"\)/);
  assert.match(source, /observer\.observe\(document\.body, \{ childList: true, subtree: true \}\)/);
  assert.match(source, /document\.body\.style\.overflow = "hidden"/);
  assert.match(source, /element\.inert = state\.inert/);
  assert.match(source, /document\.body\.style\.overflow = previousOverflow/);
  assert.match(source, /previouslyFocused\.focus\(\{ preventScroll: true \}\)/);
  assert.match(source, /data-consent-default-action/);
});
