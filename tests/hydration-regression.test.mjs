import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const standardDrinks = fs.readFileSync(
  "src/app/standard-drinks-calculator/StandardDrinksClient.tsx",
  "utf8",
);

test("standard drinks print date is populated only after hydration", () => {
  assert.match(standardDrinks, /const \[printDate, setPrintDate\] = useState\(""\)/);
  assert.match(standardDrinks, /useEffect\(\(\) => \{\s*setPrintDate\(new Date\(\)\.toLocaleDateString\(\)\);\s*\}, \[\]\)/);
  assert.doesNotMatch(standardDrinks, /\{new Date\(\)\.toLocaleDateString\(\)\}/);
});
