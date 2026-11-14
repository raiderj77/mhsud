import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

const [navbar, registry, screeningTools, toolGrid] = await Promise.all([
  read("src/components/Navbar.tsx"),
  read("src/lib/toolClassifications.ts"),
  read("src/app/screening-tools/page.tsx"),
  read("src/components/ToolGrid.tsx"),
]);

const registryInformationRoutes = [...registry.matchAll(/information\(\{\s*route:\s*"(\/[^"]+)"/g)]
  .map((match) => match[1])
  .sort();
const screeningToolsRestricted = [
  ...(screeningTools.match(/INFORMATION_ONLY_PATHS = new Set\(\[([\s\S]*?)\]\)/)?.[1] ?? "").matchAll(/"(\/[^"]+)"/g),
]
  .map((match) => match[1])
  .sort();

test("search's restricted set (registry Information Only) matches the screening-tools restricted section", () => {
  assert.equal(registryInformationRoutes.length, 14);
  assert.deepEqual(registryInformationRoutes, screeningToolsRestricted);
});

test("navbar search results exclude restricted-instrument entries on desktop and mobile", () => {
  assert.match(navbar, /import \{ getToolClassification \} from "@\/lib\/toolClassifications"/);
  assert.match(navbar, /getToolClassification\(href\)\?\.classification === "Information Only"/);

  const desktopFilter = navbar.match(/const filtered = useMemo\([\s\S]*?\}, \[activeCategory, search\]\);/)?.[0] ?? "";
  assert.match(desktopFilter, /if \(search\.trim\(\)\)[\s\S]*!isRestrictedInstrument\(t\.href\)/);

  const mobileMatch = navbar.match(/const matchesSearch = \(tool: Tool\) => \{[\s\S]*?\n  \};/)?.[0] ?? "";
  assert.match(mobileMatch, /if \(!search\.trim\(\)\) return true;\s*if \(isRestrictedInstrument\(tool\.href\)\) return false;/);
});

test("restricted instruments stay browsable in the navbar and listed on the screening-tools page", () => {
  const navBlock = navbar.match(/const CATEGORIES:[\s\S]*?const ALL_TOOLS/)?.[0] ?? "";
  const navHrefs = new Set([...navBlock.matchAll(/href:\s*"(\/[^"]+)"/g)].map((match) => match[1]));
  for (const route of registryInformationRoutes) assert.ok(navHrefs.has(route), `${route} missing from navbar browse list`);

  assert.match(screeningTools, /id: "restricted-instruments"/);
  assert.match(screeningTools, /title: "About restricted instruments"/);
  assert.match(toolGrid, /tool\.badge !== "Information"/);
  assert.match(toolGrid, /About restricted instruments/);
});
