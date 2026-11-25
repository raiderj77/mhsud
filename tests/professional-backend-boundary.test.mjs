import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = path => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("claim response keeps its reference and manual review contract", async () => {
  const source = await read("src/app/therapists/api/claim/route.ts");
  assert.match(source, /const reference = `MCT-T-\$\{randomUUID\(\).toUpperCase\(\)\}`/);
  assert.match(source, /await insertClaim\([\s\S]*return Response.json\(\{\s*reference,\s*status: "pending",\s*eligibility: "manual-review",\s*\}, \{ headers \}\)/);
  assert.match(source, /work_email: claim\.workEmail\.toLowerCase\(\),\s*license_number: claim\.licenseNumber,/);
  assert.equal([...source.matchAll(/return Response\.json\(\{\s*error: "[^"]+" \}, \{ status: (?:400|404|415), headers \}\)/g)].length, 3);
  for (const status of [400, 404, 415]) assert.match(source, new RegExp(`status: ${status}, headers`));
});

test("unconfigured backend exits before data operations and shows notices", async () => {
  const server = await read("src/lib/professionalServer.ts");
  assert.match(server, /Boolean\(url.trim\(\) && anonKey.trim\(\) && serviceKey.trim\(\)\)/);
  assert.match(server, /if \(!isProfessionalBackendConfigured\(\)\) return null;\s*try \{\s*return await operation\(\);\s*\} catch \{\s*return null;/);
  assert.match(server, /function insertClaim\(claim: Claim\) \{\s*return safely\(/);
  const signIn = await read("src/app/therapists/sign-in/page.tsx");
  assert.match(signIn, /isProfessionalBackendConfigured\(\) \? <SignInForm \/> : <p>Professional sign-in opens shortly\.<\/p>/);
  const dashboard = await read("src/app/therapists/dashboard/page.tsx");
  assert.match(dashboard, /if \(!isProfessionalBackendConfigured\(\)\) \{\s*return <p[^>]*>The professional dashboard opens shortly\.<\/p>/);
});

test("every listing uses the overlay for claimed presentation and renders the registry credential verbatim", async () => {
  const profile = await read("src/app/therapists/[slug]/page.tsx");
  assert.match(profile, /if \(!provider\) notFound\(\);\s*const overlay = await getProfileOverlay\(provider.slug\);\s*return \(/);
  assert.match(profile, /\{overlay && <ContactCard profile=\{overlay\} \/>\}/);
  assert.match(profile, /overlay \? "Claimed listing" : "Unclaimed listing"/);
  assert.match(profile, /\{!overlay && <Link href=\{`\/therapists\/claim\?/);
  assert.match(profile, /<dt className="font-medium">Credentials on file<\/dt><dd>\{provider\.credential\}<\/dd>/);
  const server = await read("src/lib/professionalServer.ts");
  assert.match(server, /function getProfileOverlay[\s\S]*createClient\(url, anonKey,[\s\S]*abortSignal\(AbortSignal.timeout\(1500\)\)/);
});

test("dashboard offers the profile editor regardless of the registry credential", async () => {
  const dashboard = await read("src/app/therapists/dashboard/page.tsx");
  assert.match(dashboard, /View public listing<\/Link>\s*<DashboardForm overlay=\{overlay\} \/>/);
  assert.doesNotMatch(dashboard, /listing\.credential|registry credential display is reviewed/);
});

test("rendered profile and dashboard data use projections that exclude private claim and owner fields", async () => {
  const server = await read("src/lib/professionalServer.ts");
  assert.match(server, /const publicColumns = "slug,npi,phone,website,bio,insurances,languages,session_fee,telehealth,accepting_new,updated_at";/);
  assert.match(server, /const claimColumns = "reference,slug,status,created_at";/);
  for (const [helper, table, projection] of [
    ["getProfileOverlay", "therapist_profiles", "publicColumns"],
    ["getOverlaysByEmail", "therapist_profiles", "publicColumns"],
    ["getClaimsByEmail", "therapist_claims", "claimColumns"],
  ]) {
    const source = server.split("function " + helper + "(")[1]?.split("\nexport ")[0];
    assert.ok(source, helper);
    assert.ok(source.includes('.from("' + table + '").select(' + projection + ')'), helper);
  }
  const dashboard = await read("src/app/therapists/dashboard/page.tsx");
  assert.match(dashboard, /getOverlaysByEmail\(email\), getClaimsByEmail\(email\)/);
  assert.match(dashboard, /claims\.map\(claim => <li key=\{claim\.reference\}>\{statusLabels\[claim\.status\]\} · \{claim\.reference\}<\/li>\)/);
  const markup = dashboard.slice(dashboard.indexOf("return (\n"));
  assert.doesNotMatch(markup, /\{\s*(?:email|user)(?:\s*[}.])|\b(?:owner_email|work_email|license_number|licenseNumber)\b/);
});

test("profile writes bind both the authorization check and update to the session email", async () => {
  const route = await read("src/app/therapists/api/profile/route.ts");
  assert.match(route, /const user = await getSessionUser\(\)/);
  assert.match(route, /const email = user.email.toLowerCase\(\)/);
  assert.match(route, /if \(owner.owner_email !== email\).*status: 403/);
  const server = await read("src/lib/professionalServer.ts");
  assert.match(server, /\.eq\("slug", slug\)\.eq\("owner_email", ownerEmail\)\.select\(publicColumns\)/);
  assert.match(route, /return Response\.json\(saved\);/);
});

test("migration limits direct public reads and reserves decisions for service role", async () => {
  const migration = await read("supabase/migrations/20261124000000_therapist_professional_backend.sql");
  assert.equal([...migration.matchAll(/create policy /g)].length, 1);
  assert.match(migration, /for select to anon, authenticated/);
  const publicGrant = migration.match(/grant select \(([^)]+)\)\s+on public.therapist_profiles to anon, authenticated/);
  assert.ok(publicGrant);
  assert.doesNotMatch(publicGrant[1], /owner_email|license_number/);
  assert.match(migration, /revoke all on function public.decide_therapist_claim\(text, boolean\) from public, anon, authenticated/);
});
