import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import { collectProviders, disseminationRows, registryRows } from "../scripts/ingest-therapists.mjs";
import { LICENSE_NOTE, normalizeProvider, PRICES, validateClaim } from "../src/lib/therapistsCore.mjs";

const run = promisify(execFile);
const fixture = JSON.parse(await readFile(new URL("./fixtures/therapists-nppes.json", import.meta.url), "utf8"));
const [eligible, ...others] = fixture.results;

test("ingest keeps CA individual location and same-entry CA license, excluding addiction taxonomy", () => {
  assert.deepEqual(normalizeProvider(eligible), {
    npi: "1000000001", slug: "fixture-alpha-1000000001", name: "Fixture Alpha", credential: "LCSW",
    city: "Sacramento", state: "CA", zip: "95814", phone: "9165550100", specialties: ["Social Worker"], registryLicenseNumbers: ["TEST01"], listingSource: "nppes",
  });
  assert.deepEqual(others.slice(0, 4).map(normalizeProvider), [null, null, null, null]);
  const addictionPsychologist = { ...eligible, taxonomies: [{ code: "103TA0400X", state: "CA", license: "TEST" }] };
  assert.equal(normalizeProvider(addictionPsychologist), null);
});

test("duplicate NPI merges eligible specialties without adding a page", async () => {
  const providers = await collectProviders(fixture.results);
  assert.equal(providers.length, 1);
  assert.deepEqual(providers[0].specialties, ["Social Worker", "Marriage & Family Therapist"]);
});

test("API queries all four scopes with the documented parameters and paginates", async () => {
  const calls = [];
  const providers = await collectProviders(registryRows(async url => {
    const params = new URL(url).searchParams;
    calls.push(Object.fromEntries(params));
    if (params.get("taxonomy_description") === "Counselor" && params.get("skip") === "0") {
      return Response.json({ results: Array.from({ length: 200 }, (_, i) => ({ ...eligible, number: String(1000000000 + i) })) });
    }
    return Response.json({ results: [] });
  }));
  assert.deepEqual(calls.map(call => [call.taxonomy_description, call.skip]), [
    ["Counselor", "0"], ["Counselor", "200"], ["Social Worker", "0"], ["Psychologist", "0"], ["Marriage & Family Therapist", "0"],
  ]);
  for (const call of calls) {
    assert.equal(call.version, "2.1");
    assert.equal(call.enumeration_type, "NPI-1");
    assert.equal(call.state, "CA");
    assert.equal(call.limit, "200");
  }
  assert.equal(providers.length, 200);
});

test("API rejects truncated, repeated, and invalid pages", async () => {
  const fullPage = url => {
    const skip = Number(new URL(url).searchParams.get("skip"));
    return Array.from({ length: 200 }, (_, i) => ({ ...eligible, number: String(1000000000 + skip + i) }));
  };
  await assert.rejects(collectProviders(registryRows(async url => Response.json({ results: fullPage(url) }))), /ceiling/);
  await assert.rejects(collectProviders(registryRows(async () => Response.json({ results: fullPage("https://example.test/?skip=0") }))), /repeated/);
  await assert.rejects(collectProviders(registryRows(async () => Response.json({ Errors: [{ description: "fixture error" }] }))), /Unexpected/);
});

test("streaming CSV uses numbered license and state slots and rejects inactive or malformed data", async () => {
  const directory = await mkdtemp(join(tmpdir(), "mct-therapist-csv-"));
  try {
    const path = join(directory, "fictional.csv");
    const headers = [
      "NPI", "Entity Type Code", "Provider First Name", "Provider Last Name (Legal Name)", "Provider Credential Text",
      "Provider Business Practice Location Address City Name", "Provider Business Practice Location Address State Name",
      "Provider Business Practice Location Address Postal Code", "Provider Business Practice Location Address Telephone Number",
      "NPI Deactivation Date", "NPI Reactivation Date",
      ...Array.from({ length: 15 }, (_, i) => [
        `Healthcare Provider Taxonomy Code_${i + 1}`, `Provider License Number_${i + 1}`, `Provider License Number State Code_${i + 1}`,
      ]).flat(),
    ];
    const record = (base, taxonomy) => [...base, ...Array(42).fill(""), ...taxonomy].join(",");
    await writeFile(path, [
      headers.join(","),
      record(["1000000001", "1", "Fixture", "Alpha", "LCSW", "SACRAMENTO", "CA", "95814", "9165550100", "", ""], ["1041C0700X", "TEST", "CA"]),
      record(["1000000002", "1", "Fixture", "Bravo", "", "SACRAMENTO", "CA", "95814", "9165550100", "01/01/2026", ""], ["1041C0700X", "TEST", "CA"]),
      record(["1000000003", "1", "Fixture", "Charlie", "", "SACRAMENTO", "CA", "95814", "9165550100", "", ""], ["1041C0700X", "TEST", "NV"]),
    ].join("\n"));
    assert.deepEqual((await collectProviders(disseminationRows(path))).map(row => row.npi), ["1000000001"]);
    const args = [fileURLToPath(new URL("../scripts/ingest-therapists.mjs", import.meta.url)),
      "--csv", path, "--retrieved-at", "2026-11-19", "--out", directory];
    await run(process.execPath, args);
    const snapshotPath = join(directory, "by-state", "CA.json");
    const snapshot = await readFile(snapshotPath, "utf8");
    assert.equal(JSON.parse(snapshot).providers.length, 1);
    await writeFile(path, "NPI,Entity Type Code\n1000000001,1\n");
    await assert.rejects(run(process.execPath, args), /columns missing/);
    assert.equal(await readFile(snapshotPath, "utf8"), snapshot);
    await assert.rejects(collectProviders(disseminationRows(path)), /columns missing/);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

test("claim payload allows listing slug, bounded work email, and optional license number", () => {
  const good = { slug: "fixture-alpha-1000000001", workEmail: "provider@example.test" };
  assert.deepEqual(validateClaim(good), { ...good, licenseNumber: "" });
  for (const extra of ["patientName", "consumerEmail", "notes", "diagnosis"]) {
    assert.equal(validateClaim({ ...good, [extra]: "fixture" }), null);
  }
  for (const bad of [null, [], { ...good, workEmail: {} }, { ...good, slug: "../fixture" }, { ...good, workEmail: "x".repeat(255) }]) {
    assert.equal(validateClaim(bad), null);
  }
});

test("prices match the owner lock and registry status stays explicit", () => {
  assert.deepEqual(PRICES.map(({ price, paid }) => [price, paid]), [
    ["Free", false], ["$15/mo", true], ["$99 one-time", true], ["$249 one-time", true],
  ]);
  assert.match(LICENSE_NOTE, /has not been independently verified/);
});
