import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (file) => readFile(new URL(`../${file}`, import.meta.url), "utf8");

const [privacySource, consentSource, installSource] = await Promise.all([
  read("src/lib/privacyConsent.ts"),
  read("src/components/ConsentAnalytics.tsx"),
  read("src/components/AppInstallPrompt.tsx"),
]);

test("privacy choice coordination defaults to a fail-closed status", () => {
  assert.match(privacySource, /PRIVACY_CHOICE_STATUS_EVENT/);
  assert.match(
    privacySource,
    /return \{ completed: false, dialogOpen: true \}/,
    "an absent or invalid status must keep the install prompt hidden",
  );

  const publish = privacySource.match(
    /export function publishPrivacyChoiceStatus[\s\S]*?\n\}/,
  )?.[0] ?? "";
  assert.ok(
    publish.indexOf("window.__mindcheckPrivacyChoiceStatus = nextStatus") <
      publish.indexOf("window.dispatchEvent"),
    "the durable snapshot must update before subscribers are notified",
  );
});

test("the consent dialog publishes completion and open-state changes", () => {
  assert.match(consentSource, /const \[choiceCompleted, setChoiceCompleted\] = useState\(false\)/);
  assert.match(consentSource, /if \(gpc\)[\s\S]*?setChoiceCompleted\(true\)/);
  assert.match(consentSource, /else if \(stored\)[\s\S]*?setChoiceCompleted\(true\)/);
  assert.match(consentSource, /else \{[\s\S]*?setChoiceCompleted\(false\)/);
  assert.match(
    consentSource,
    /applyConsent\(choice\);\s*publishPrivacyChoiceStatus\(\{ completed: true, dialogOpen: false \}\);\s*setChoiceCompleted\(true\);\s*setOpen\(false\)/,
  );
  assert.match(
    consentSource,
    /publishPrivacyChoiceStatus\(\{ completed: choiceCompleted, dialogOpen: open \}\);\s*\}, \[choiceCompleted, open, ready\]\)/,
  );
  assert.match(
    consentSource,
    /const showChoices = \(\) => \{\s*publishPrivacyChoiceStatus\(\{ completed: choiceCompleted, dialogOpen: true \}\);\s*setOpen\(true\)/,
  );
});

test("the install prompt defers behind unresolved or open privacy choices", () => {
  assert.match(installSource, /getPrivacyChoiceStatus/);
  assert.match(
    installSource,
    /addEventListener\(PRIVACY_CHOICE_STATUS_EVENT, handlePrivacyChoiceStatus\)/,
  );
  assert.match(
    installSource,
    /removeEventListener\(PRIVACY_CHOICE_STATUS_EVENT, handlePrivacyChoiceStatus\)/,
  );
  assert.match(installSource, /setDeferredPrompt\(promptEvent\)/);
  assert.match(installSource, /!privacyChoiceStatus\.completed/);
  assert.match(installSource, /privacyChoiceStatus\.dialogOpen/);

  const statusHandler = installSource.match(
    /const handlePrivacyChoiceStatus = \(\) => \{([\s\S]*?)\n    \};/,
  )?.[1] ?? "";
  assert.doesNotMatch(
    statusHandler,
    /setShowPrompt\(true\)|setDeferredPrompt/,
    "privacy changes must neither resurrect a dismissed prompt nor discard its deferred event",
  );

  const dismissHandler = installSource.match(
    /const handleDismiss = \(\) => \{([\s\S]*?)\n  \};/,
  )?.[1] ?? "";
  assert.match(dismissHandler, /setShowPrompt\(false\)/);

  const installHandler = installSource.match(
    /const handleInstall = async \(\) => \{([\s\S]*?)\n  \};/,
  )?.[1] ?? "";
  assert.match(installHandler, /await deferredPrompt\.prompt\(\)/);
  assert.equal(
    installSource.match(/deferredPrompt\.prompt\(\)/g)?.length,
    1,
    "only an explicit Install action may open the native prompt",
  );
});
