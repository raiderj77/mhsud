import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("the public footer states the current advertising state accurately", async () => {
  const footer = await readFile(
    new URL("../src/components/Footer.tsx", import.meta.url),
    "utf8",
  );

  assert.match(footer, /MindCheck Tools does not display ads\./);
  assert.doesNotMatch(footer, /may display ads|currently disabled/i);
});
