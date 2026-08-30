import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (file) => readFile(new URL(`../${file}`, import.meta.url), "utf8");

test("optional third-party services use a homepage-only positive allowlist", async () => {
  const policies = await read("src/lib/routePolicies.ts");
  const allowlist = policies.match(
    /const OPTIONAL_SERVICE_ALLOWED_ROUTES = new Set\(\[([\s\S]*?)\]\)/,
  )?.[1] ?? "";
  const routes = [...allowlist.matchAll(/["']([^"']+)["']/g)].map((match) => match[1]);

  assert.deepEqual(routes, ["/"]);
  assert.match(policies, /export function isOptionalServicesAllowedRoute/);
  assert.match(policies, /OPTIONAL_SERVICE_ALLOWED_ROUTES\.has\(cleanPathname\(pathname\)\)/);
});

test("analytics, affiliates, email capture, and navigation cleanup all enforce the allowlist", async () => {
  const files = await Promise.all([
    read("src/components/ConsentAnalytics.tsx"),
    read("src/components/TherapyCTA.tsx"),
    read("src/components/EmailCapture.tsx"),
    read("src/components/SensitiveRouteLifecycle.tsx"),
  ]);

  for (const source of files) {
    assert.match(source, /isOptionalServicesAllowedRoute/);
  }

  assert.match(files[0], /!optionalServicesAllowed[\s\S]*removeOptionalServiceScripts/);
  assert.match(files[0], /setOpen\(optionalServicesAllowed\)/);
  assert.match(files[0], /homepage only/i);
  assert.match(files[1], /!isOptionalServicesAllowedRoute\(pathname\)/);
  assert.match(files[2], /!isOptionalServicesAllowedRoute\(pathname\)/);
  assert.match(files[3], /!optionalServicesAllowed && optionalScriptLoaded/);
  assert.match(files[3], /forceCleanTopicalNavigation/);
  assert.match(files[3], /document\.addEventListener\("click", forceCleanTopicalNavigation, true\)/);
  assert.match(files[3], /window\.location\.assign\(destination\.href\)/);
});
