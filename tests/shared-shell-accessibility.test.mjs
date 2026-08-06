import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (file) => readFile(new URL(`../${file}`, import.meta.url), "utf8");

test("shared navigation exposes disclosure state, names search fields, and restores focus", async () => {
  const navbar = await read("src/components/Navbar.tsx");

  assert.match(navbar, /aria-controls="desktop-tools-menu"/);
  assert.match(navbar, /htmlFor="desktop-tool-search"/);
  assert.match(navbar, /htmlFor="mobile-tool-search"/);
  assert.match(navbar, /aria-expanded=\{isExpanded\}/);
  assert.match(navbar, /aria-controls=\{panelId\}/);
  assert.match(navbar, /mobileButtonRef\.current\?\.focus\(\)/);
  assert.doesNotMatch(navbar, /aria-haspopup="true"/);
});

test("shared shell preserves a keyboard skip target, visible focus, and reduced-motion support", async () => {
  const [layout, styles, theme] = await Promise.all([
    read("src/app/layout.tsx"),
    read("src/app/globals.css"),
    read("src/components/ThemeProvider.tsx"),
  ]);

  assert.match(layout, /href="#main-content"/);
  assert.match(layout, /<main id="main-content" tabIndex=\{-1\}/);
  assert.match(styles, /outline-sage-700/);
  assert.match(styles, /prefers-reduced-motion: reduce/);
  assert.match(styles, /forced-colors: active/);
  assert.match(theme, /aria-pressed=\{theme === "dark"\}/);
  assert.match(theme, /min-h-\[44px\][\s\S]*min-w-\[44px\]/);
});

test("date-only review metadata renders as the same calendar date in every time zone", async () => {
  const answerBlock = await read("src/components/AnswerBlock.tsx");

  assert.match(answerBlock, /new Date\(lastUpdated\)\.toLocaleDateString/);
  assert.match(answerBlock, /timeZone: ['"]UTC['"]/);
  assert.match(answerBlock, /dateTime=\{lastUpdated\}/);
});

test("the shared disclaimer gate returns focus and scroll to the first questionnaire answer", async () => {
  const gate = await read("src/components/DisclaimerGate.tsx");

  assert.match(gate, /requestAnimationFrame/);
  assert.match(gate, /MutationObserver/);
  assert.match(gate, /gate\?\.isConnected/);
  assert.match(gate, /observer\.observe\(assessmentRoot/);
  assert.match(gate, /fallbackAttempts >= 20/);
  assert.match(gate, /window\.setTimeout\(retryMove, 100\)/);
  assert.match(gate, /prefers-reduced-motion: reduce/);
  assert.match(gate, /liveAnswerTop - questionContextOffset/);
  assert.match(gate, /Math\.min\(320, window\.innerHeight \* 0\.4\)/);
  assert.match(gate, /firstAnswer\.focus\(\{ preventScroll: true \}\)/);
  assert.match(gate, /behavior: reducedMotion \? "auto" : "smooth"/);
  assert.match(gate, /onChange=\{\(event\) => setChecked\(event\.currentTarget\.checked\)\}/);
});

test("all maintained interactive assessment routes require the shared educational-use gate", async () => {
  const maintainedRoutes = [
    ["/phq-9-depression-test", "src/app/phq-9-depression-test/PHQ9Client.tsx"],
    ["/phq-4-anxiety-depression-screen", "src/app/phq-4-anxiety-depression-screen/PHQ4Client.tsx"],
    ["/ces-d-depression-scale", "src/app/ces-d-depression-scale/CesdClient.tsx"],
    ["/postpartum-depression-test", "src/app/phq-9-depression-test/PHQ9Client.tsx"],
    ["/gad-7-anxiety-test", "src/app/gad-7-anxiety-test/GAD7Client.tsx"],
    ["/pcl-5-ptsd-screening", "src/app/pcl-5-ptsd-screening/PCL5Client.tsx"],
    ["/pc-ptsd-5-screening", "src/app/pc-ptsd-5-screening/PcPtsd5Client.tsx"],
    ["/audit-alcohol-test", "src/app/audit-alcohol-test/AUDITClient.tsx"],
    ["/audit-c-alcohol-screen", "src/app/audit-c-alcohol-screen/AUDITCClient.tsx"],
    ["/asrs-adhd-screening", "src/app/asrs-adhd-screening/ASRSClient.tsx"],
    ["/big-five-personality-test", "src/app/big-five-personality-test/BigFiveClient.tsx"],
    ["/rosenberg-self-esteem-scale", "src/app/rosenberg-self-esteem-scale/RSESClient.tsx"],
    ["/values-card-sort", "src/app/values-card-sort/ValuesCardSortClient.tsx"],
    ["/k6-distress-scale", "src/app/k6-distress-scale/K6Client.tsx"],
    ["/burnout-assessment-tool", "src/app/burnout-assessment-tool/BurnoutClient.tsx"],
    ["/compassion-fatigue-test", "src/app/burnout-assessment-tool/BurnoutClient.tsx"],
    ["/caregiver-burnout-assessment", "src/app/burnout-assessment-tool/BurnoutClient.tsx"],
    ["/work-stress-check", "src/app/work-stress-check/WorkStressClient.tsx"],
    ["/who-5-wellbeing-index", "src/app/who-5-wellbeing-index/Who5Client.tsx"],
    ["/sleep-and-mood-check", "src/app/sleep-and-mood-check/SleepMoodClient.tsx"],
    ["/grief-assessment", "src/app/phq-9-depression-test/PHQ9Client.tsx"],
  ];
  const hub = await read("src/app/screening-tools/page.tsx");

  assert.equal(
    new Set(maintainedRoutes.map(([route]) => route)).size,
    maintainedRoutes.length,
  );

  const clientSources = new Map();
  for (const [route, client] of maintainedRoutes) {
    assert.match(hub, new RegExp(`href: "${route}"`), `${route} must remain in the maintained directory`);
    if (!clientSources.has(client)) clientSources.set(client, await read(client));
  }

  for (const [client, source] of clientSources) {
    assert.match(source, /import \{ DisclaimerGate \}/, `${client} must import the shared gate`);
    assert.match(source, /const \[accepted, setAccepted\] = useState\(false\)/, `${client} must default to gated`);
    assert.match(source, /<DisclaimerGate/, `${client} must render the shared gate`);
    assert.match(source, /(?:if \(!accepted\)|\{!accepted\s*(?:&&|\?)\s*\()/, `${client} must block entry before consent`);
    assert.match(source, /onAccept=\{\(\) =>/, `${client} must expose explicit acceptance`);
  }

  assert.match(await read("src/app/mental-load-calculator/MentalLoadClient.tsx"), /<DisclaimerGate/);
});

test("offline UI states the sensitive-route boundary without promising cached screeners or results", async () => {
  const [offlinePage, offlineNotice, installPrompt, navbar] = await Promise.all([
    read("src/app/offline/page.tsx"),
    read("src/components/OfflineIndicator.tsx"),
    read("src/components/AppInstallPrompt.tsx"),
    read("src/components/Navbar.tsx"),
  ]);
  const combined = [offlinePage, offlineNotice, installPrompt, navbar].join("\n");

  assert.match(offlinePage, /sensitive routes require an internet connection/i);
  assert.match(offlinePage, /does not save screening answers or results/i);
  assert.match(installPrompt, /Screening tools still require an internet connection/);
  assert.doesNotMatch(combined, /all screening tools.*offline|results \(stored locally|screening tools still work without internet/i);
});

test("footer navigation exposes the consumer-health notice and usable touch targets", async () => {
  const [footer, cookieButton] = await Promise.all([
    read("src/components/Footer.tsx"),
    read("src/components/FooterCookieButton.tsx"),
  ]);

  assert.match(footer, /href: "\/consumer-health-data-privacy"/);
  assert.match(footer, /aria-label="Footer navigation"/);
  assert.match(footer, /FOOTER_LINK_CLASS[\s\S]*min-h-\[44px\]/);
  assert.match(cookieButton, /min-h-\[44px\][\s\S]*min-w-\[44px\]/);
});

test("homepage tool filters use button state rather than incomplete tab semantics", async () => {
  const grid = await read("src/components/ToolGrid.tsx");

  assert.match(grid, /role="group" aria-label="Filter tools by category"/);
  assert.match(grid, /aria-pressed=\{isActive\}/);
  assert.match(grid, /w-11 h-11/);
  assert.doesNotMatch(grid, /role="tab"|href=\{tool\.status === "live" \? tool\.href : "#"\}/);
});

test("the persistent clinical disclaimer is a static landmark, not an assertive alert", async () => {
  const banner = await read("src/components/CrisisBanner.tsx");

  assert.match(banner, /<aside/);
  assert.match(banner, /aria-label="Clinical disclaimer and crisis support"/);
  assert.doesNotMatch(banner, /role="alert"/);
});

test("reflection disclosure relies on native button keyboard behavior and hides collapsed content", async () => {
  const prompts = await read("src/components/ReflectionPrompts.tsx");

  assert.match(prompts, /type="button"/);
  assert.match(prompts, /aria-hidden=\{!isOpen\}/);
  assert.match(prompts, /aria-labelledby=\{buttonId\}/);
  assert.doesNotMatch(prompts, /onKeyDown=/);
});
