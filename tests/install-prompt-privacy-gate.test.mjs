import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = await readFile(
  new URL("../src/components/AppInstallPrompt.tsx", import.meta.url),
  "utf8",
);

test("install prompt has no obsolete analytics-consent dependency", () => {
  assert.doesNotMatch(source, /privacyConsent|ConsentAnalytics|PRIVACY_CHOICE|gtag|Google Analytics/);
  assert.match(source, /beforeinstallprompt/);
  assert.match(source, /event\.preventDefault\(\)/);
  assert.match(source, /setDeferredPrompt/);
});

test("only an explicit accessible Install action opens the native prompt", () => {
  assert.match(source, /const handleInstall = async/);
  assert.match(source, /await deferredPrompt\.prompt\(\)/);
  assert.equal(source.match(/deferredPrompt\.prompt\(\)/g)?.length, 1);
  assert.match(source, /onClick=\{handleInstall\}/);
  assert.match(source, /aria-label="Install MindCheck Tools app"/);
  assert.match(source, /min-h-\[44px\]/);
  assert.match(source, /const handleDismiss/);
  assert.match(source, /setShowPrompt\(false\)/);
});
