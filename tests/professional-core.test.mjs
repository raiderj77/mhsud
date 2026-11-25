import assert from "node:assert/strict";
import test from "node:test";
import { LOCKED_FIELDS, licenseMatchesCredential, validateProfileEdit } from "../src/lib/professionalCore.mjs";
import { validateClaim } from "../src/lib/therapistsCore.mjs";

const slug = "fixture-listing-1000000001";

test("profile edits accept and clean all editable fields", () => {
  const fields = {
    slug,
    phone: " +1 (555) 010-0101 ",
    website: "https://example.test/",
    bio: " A short introduction. ",
    insurances: [" Plan A "],
    languages: [" English "],
    sessionFee: " $80 ",
    telehealth: true,
    acceptingNew: false,
  };
  assert.deepEqual(validateProfileEdit(fields), {
    ...fields, phone: fields.phone.trim(), bio: fields.bio.trim(),
    insurances: ["Plan A"], languages: ["English"], sessionFee: "$80",
  });
  assert.deepEqual(validateProfileEdit({ slug, bio: "" }), { slug, bio: "" });
});

test("profile edits reject unknown and locked fields and invalid slugs", () => {
  for (const field of [...LOCKED_FIELDS.filter(field => field !== "slug"), "owner_email", "unknown"]) {
    assert.equal(validateProfileEdit({ slug, [field]: "fixture" }), null, field);
  }
  for (const body of [null, [], { slug: "../fixture" }, { slug: "x".repeat(251) }, {}, Object.create({ slug })]) {
    assert.equal(validateProfileEdit(body), null);
  }
});

test("profile edits reject unsafe values and enforce field bounds", () => {
  const bad = [
    ["website", "http://example.test"], ["website", ""], ["website", "https://example.test/" + "x".repeat(200)],
    ["bio", "<p>Hi</p>"], ["bio", "x".repeat(1201)], ["phone", "1".repeat(33)], ["phone", "call"],
    ["insurances", Array(13).fill("Plan")], ["insurances", ["x".repeat(61)]],
    ["languages", Array(13).fill("English")], ["languages", ["x".repeat(31)]],
    ["languages", [" "]], ["languages", Array(1)], ["sessionFee", "x".repeat(61)],
    ["telehealth", "true"], ["acceptingNew", 1],
  ];
  for (const [field, value] of bad) assert.equal(validateProfileEdit({ slug, [field]: value }), null, field);
});

test("submitted license matches a full uppercased credential token", () => {
  assert.equal(licenseMatchesCredential("LCSW 12345", "12345"), true);
  assert.equal(licenseMatchesCredential("LCSW: ab123", "ab-123"), true);
  for (const value of ["123", "", undefined, "2345", "12346"]) {
    assert.equal(licenseMatchesCredential("LCSW 12345", value), false);
  }
});

test("claim validation accepts legacy payloads and cleans an optional license", () => {
  const body = { slug, workEmail: "provider@example.test" };
  assert.deepEqual(validateClaim(body), { ...body, licenseNumber: "" });
  assert.deepEqual(validateClaim({ ...body, licenseNumber: "ab-123" }), { ...body, licenseNumber: "AB123" });
  for (const licenseNumber of ["---", "123", "x".repeat(21), 12345, null]) {
    assert.equal(validateClaim({ ...body, licenseNumber }), null);
  }
});
