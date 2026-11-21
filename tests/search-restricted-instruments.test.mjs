import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

const [conditions, directory, registry, screeningTools, toolGrid] = await Promise.all([
  read("src/app/conditions/page.tsx"),
  read("src/lib/screeningDirectory.ts"),
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

test("homepage tool search excludes restricted instruments and links to their information section", () => {
  assert.match(toolGrid, /tool\.badge !== "Information"/);
  assert.match(toolGrid, /About restricted instruments/);
});

test("restricted instruments stay browsable by condition and on the screening-tools page", () => {
  const categories = directory.match(/const CATEGORIES:[\s\S]*?export const CLINICAL_GUIDES/)?.[0] ?? "";
  const routes = new Set([...categories.matchAll(/href:\s*"(\/[^"]+)"/g)].map((match) => match[1]));
  for (const route of registryInformationRoutes) assert.ok(routes.has(route), `${route} missing from the category directory`);

  assert.match(conditions, /CATEGORIES\.map/);
  assert.match(conditions, /getToolClassification\(href\)\?\.classification/);
  assert.match(screeningTools, /id: "restricted-instruments"/);
  assert.match(screeningTools, /title: "About restricted instruments"/);
});
