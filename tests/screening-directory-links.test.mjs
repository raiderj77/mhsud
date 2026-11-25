import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { SPECIALTIES } from "../src/lib/therapistsCore.mjs";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const links = read("src/components/ScreeningDirectoryLinks.tsx");

test("screening topics fall back to the two public browse routes", () => {
  const snapshot = JSON.parse(read("src/data/therapists/by-state/CA.json"));
  const registry = snapshot.providers.filter(({ listingSource }) => listingSource === "nppes");
  const populated = new Set(registry.flatMap(({ specialties }) => specialties));
  assert.deepEqual([...new Set(registry.map(({ city }) => city))], ["Aptos", "Aromas", "Ben Lomond", "Boulder Creek", "Capitola", "Carmel", "Carmel Valley", "Carmel-By-The-Sea", "Castroville", "Davenport", "Del Rey Oaks", "Felton", "Gonzales", "Greenfield", "Hollister", "King City", "La Selva Beach", "Los Angeles", "Marina", "Monterey", "Pacific Grove", "Pebble Beach", "Prunedale", "Royal Oaks", "Salinas", "San Juan Bautista", "Santa Cruz", "Scotts Valley", "Seaside", "Soledad", "Soquel", "Watsonville"]);
  assert.deepEqual([...populated].sort(), SPECIALTIES.map(({ label }) => label).sort());
  assert.match(read("src/app/therapists/page.tsx"), /provider\.specialties\.includes\(specialty\)/);
  const facilities = read("src/app/facilities/page.tsx");
  assert.match(facilities, /<DirectoryBrowse label="Filter states"/);
  assert.doesNotMatch(facilities, /searchParams/);
  assert.deepEqual([...links.matchAll(/href="([^"]+)"/g)].map(([, href]) => href), ["/therapists", "/facilities"]);
});

test("every result directory href is static and carries no answers, score, result or identifier", () => {
  assert.match(links, /function ScreeningDirectoryLinks\(\)/);
  const anchors = links.match(/<a\b[^>]*>/g);
  assert.equal(anchors.length, 2);
  for (const anchor of anchors) {
    const [, href] = anchor.match(/href="([^"]+)"/);
    const url = new URL(href, "https://example.test");
    assert.ok(["/therapists", "/facilities"].includes(href));
    assert.equal(url.origin, "https://example.test");
    assert.equal(url.search, "");
    assert.equal(url.hash, "");
    assert.match(anchor, /rel="noreferrer"/);
  }
  assert.doesNotMatch(links, /<Link\b|onClick=|href=\{/);
});
