import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("obsolete analytics consent dialog is removed", async () => {
  await assert.rejects(
    access(new URL("../src/components/ConsentAnalytics.tsx", import.meta.url)),
    { code: "ENOENT" },
  );
  await assert.rejects(
    access(new URL("../src/lib/privacyConsent.ts", import.meta.url)),
    { code: "ENOENT" },
  );
});

test("browser privacy controls remain keyboard-accessible links", async () => {
  const [pageButton, footerButton] = await Promise.all([
    readFile(new URL("../src/app/cookies/CookieSettingsButton.tsx", import.meta.url), "utf8"),
    readFile(new URL("../src/components/FooterCookieButton.tsx", import.meta.url), "utf8"),
  ]);
  assert.match(pageButton, /href="#browser-controls"/);
  assert.match(pageButton, /Browser Privacy Controls/);
  assert.match(footerButton, /href="\/cookies"/);
  assert.match(footerButton, /min-h-\[44px\]/);
  assert.match(footerButton, /min-w-\[44px\]/);
});
