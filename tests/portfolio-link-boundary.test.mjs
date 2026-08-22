import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("the public footer does not cross-link to FiberTools", async () => {
  const [footer, predeploy] = await Promise.all([
    read("src/components/Footer.tsx"),
    read("scripts/predeploy-check.js"),
  ]);

  assert.doesNotMatch(footer, /https:\/\/fibertools\.app/i);
  assert.doesNotMatch(predeploy, /["']fibertools\.app["']/i);
  assert.match(footer, /aria-label="More free tools"/);
  assert.match(footer, /https:\/\/flipmycase\.com/);
});
