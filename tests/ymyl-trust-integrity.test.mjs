import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import test from "node:test";

const root = process.cwd();

async function sourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await sourceFiles(fullPath));
    else if (/\.(?:tsx?|mjs|txt)$/.test(entry.name)) files.push(fullPath);
  }
  return files;
}

async function source(relativePath) {
  return readFile(path.join(root, relativePath), "utf8");
}

function quarantinedPaths(sitemapSource) {
  const match = sitemapSource.match(/const QUARANTINED_PATHS = new Set\(\[([\s\S]*?)\]\);/);
  assert.ok(match, "QUARANTINED_PATHS must remain machine-auditable");
  const paths = [...match[1].matchAll(/"(\/[^\"]+)"/g)].map((item) => item[1]);
  assert.ok(paths.length > 0, "quarantine parser unexpectedly returned no paths");
  return new Set(paths);
}

function maintainedSitemapPaths(sitemapSource, quarantined) {
  const maintained = new Set(["/"]);
  for (const match of sitemapSource.matchAll(/url:\s*`\$\{SITE_URL\}([^`]*)`/g)) {
    const route = match[1].replace(/\/$/, "") || "/";
    if (!quarantined.has(route)) maintained.add(route);
  }
  return maintained;
}

function literalInternalLinks(pageSource) {
  const links = new Set();
  const pattern = /\b(?:href|\w+Href)\s*(?:=|:)\s*(?:\{\s*)?(["'])(\/[^"']*)\1/g;
  for (const match of pageSource.matchAll(pattern)) {
    const route = match[2].split(/[?#]/, 1)[0].replace(/\/$/, "") || "/";
    links.add(route);
  }
  return links;
}

test("public reviewer identity is exact, scoped, and centrally represented", async () => {
  const [author, metadata, profile, methodology, reviewerBio, byline] = await Promise.all([
    source("src/config/author.ts"),
    source("src/lib/metadata.ts"),
    source("src/app/about/jason-ramirez/page.tsx"),
    source("src/app/methodology/page.tsx"),
    source("src/components/ToolReviewerBio.tsx"),
    source("src/components/AuthorByline.tsx"),
  ]);

  assert.match(author, /name: "Jason Ramirez"/);
  assert.match(author, /credential: "CADC-II"/);
  assert.match(author, /Certified Alcohol and Drug Counselor Level II \(CADC-II\)/);
  assert.match(author, /hasCredential:/);
  assert.match(author, /ccappcredentialing\.org\/verify-credential/);
  assert.doesNotMatch(author, /sameAs:\s*\[[\s\S]*SITE_AUTHOR\.credentialRegistryUrl/);

  assert.match(metadata, /authors: \[\{ name: SITE_NAME, url: SITE_URL \}\]/);
  assert.match(metadata, /creator: SITE_NAME/);
  assert.match(metadata, /author:\s*\{[\s\S]{0,120}"@type": "Organization"[\s\S]{0,120}name: SITE_NAME/);
  assert.match(metadata, /reviewedBy: AUTHOR_SCHEMA/);

  assert.match(profile, /"@type": "ProfilePage"/);
  assert.match(profile, /CCAPP SUD Credential Registry/);
  assert.match(profile, /California DHCS counselor-certification requirements/);
  for (const page of [profile, methodology]) {
    assert.match(page, /substance use counseling certification/i);
    assert.match(page, /not (?:a physician|presented here as a medical license)/i);
  }
  for (const component of [reviewerBio, byline]) assert.match(component, /stated credential scope/i);
});

test("health-page schema cannot replace the shared reviewer with a thin inline Person", async () => {
  const files = await sourceFiles(path.join(root, "src", "app"));
  const offenders = [];
  for (const file of files) {
    const page = await readFile(file, "utf8");
    if (/reviewedBy:\s*\{\s*"@type":\s*"Person"/.test(page)) {
      offenders.push(path.relative(root, file));
    }
  }
  assert.deepEqual(offenders, []);
});

test("public application content excludes unrelated private identity details", async () => {
  const files = [
    ...await sourceFiles(path.join(root, "src", "app")),
    ...await sourceFiles(path.join(root, "public")),
  ];
  const forbidden = [
    /Your Friendly Developer LLC/i,
    /Prunedale/i,
    /PostalAddress/,
    /addressLocality/,
    /addressRegion/,
    /\bNPI ID\b/i,
  ];
  const offenders = [];
  for (const file of files) {
    const page = await readFile(file, "utf8");
    for (const pattern of forbidden) {
      if (pattern.test(page)) offenders.push(`${path.relative(root, file)}: ${pattern}`);
    }
  }
  assert.deepEqual(offenders, []);
});

test("screening hub exposes only maintained canonical routes and every maintained tool", async () => {
  const [hub, sitemapSource] = await Promise.all([
    source("src/app/screening-tools/page.tsx"),
    source("src/app/sitemap.ts"),
  ]);
  const quarantined = quarantinedPaths(sitemapSource);
  const maintained = maintainedSitemapPaths(sitemapSource, quarantined);
  const hubLinks = literalInternalLinks(hub);
  const configUrl = `${pathToFileURL(path.join(root, "next.config.mjs")).href}?ymyl=${Date.now()}`;
  const nextConfig = (await import(configUrl)).default;
  const redirects = await nextConfig.redirects();
  const exactRedirects = new Map(
    redirects
      .filter(({ source: route }) => !route.includes(":") && !route.includes("*"))
      .map((redirect) => [redirect.source, redirect]),
  );

  for (const route of quarantined) {
    const redirect = exactRedirects.get(route);
    assert.ok(redirect, `${route} has no exact canonical redirect`);
    assert.equal(redirect.permanent, true, `${route} redirect is not permanent`);
    assert.equal(quarantined.has(redirect.destination), false, `${route} redirects to another quarantined route`);
  }
  for (const route of hubLinks) {
    assert.equal(quarantined.has(route), false, `hub exposes quarantined ${route}`);
    assert.equal(exactRedirects.has(route), false, `hub exposes redirect source ${route}`);
    assert.equal(maintained.has(route), true, `hub exposes non-sitemap route ${route}`);
  }

  const missingTools = [];
  const appEntries = await readdir(path.join(root, "src", "app"), { withFileTypes: true });
  for (const entry of appEntries) {
    if (!entry.isDirectory()) continue;
    const pagePath = path.join(root, "src", "app", entry.name, "page.tsx");
    let page;
    try {
      page = await readFile(pagePath, "utf8");
    } catch (error) {
      if (error?.code === "ENOENT") continue;
      throw error;
    }
    const route = `/${entry.name}`;
    if (page.includes("toolPageJsonLd(") && maintained.has(route) && !hubLinks.has(route)) {
      missingTools.push(route);
    }
  }
  assert.deepEqual(missingTools, []);

  assert.match(hub, /published\s+screening instruments and original educational self-checks/i);
  assert.match(hub, /do not claim clinical validation/i);
  assert.match(hub, /No result is a diagnosis/i);
  assert.match(hub, /SITE_AUTHOR\.name/);
  assert.match(hub, /SITE_AUTHOR\.credential/);
});

test("maintained application sources do not link back into the quarantine", async () => {
  const sitemapSource = await source("src/app/sitemap.ts");
  const quarantined = quarantinedPaths(sitemapSource);
  const files = [
    ...await sourceFiles(path.join(root, "src", "app")),
    ...await sourceFiles(path.join(root, "src", "components")),
  ];
  const offenders = [];

  for (const file of files) {
    const relative = path.relative(root, file).replaceAll("\\", "/");
    if (relative === "src/app/sitemap.ts") continue;
    const routeMatch = relative.match(/^src\/app\/([^/]+)\//);
    const owningRoute = routeMatch ? `/${routeMatch[1]}` : null;
    if (owningRoute && quarantined.has(owningRoute)) continue;
    const page = await readFile(file, "utf8");
    for (const route of quarantined) {
      if (page.includes(`"${route}"`) || page.includes(`'${route}'`)) {
        offenders.push(`${relative} -> ${route}`);
      }
    }
  }
  assert.deepEqual(offenders, []);
});

test("maintained YMYL routes expose the named reviewer in visible page composition", async () => {
  const sitemapSource = await source("src/app/sitemap.ts");
  const quarantined = quarantinedPaths(sitemapSource);
  const maintained = maintainedSitemapPaths(sitemapSource, quarantined);
  const appRoot = path.join(root, "src", "app");
  const entries = await readdir(appRoot, { withFileTypes: true });
  const missing = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const route = `/${entry.name}`;
    if (!maintained.has(route)) continue;
    const pagePath = path.join(appRoot, entry.name, "page.tsx");
    let page;
    try {
      page = await readFile(pagePath, "utf8");
    } catch (error) {
      if (error?.code === "ENOENT") continue;
      throw error;
    }
    if (!/(?:toolPageJsonLd|medicalWebPageJsonLd|articleJsonLd)\(/.test(page)) continue;
    const routeFiles = await sourceFiles(path.join(appRoot, entry.name));
    const composition = (await Promise.all(routeFiles.map((file) => readFile(file, "utf8")))).join("\n");
    const exposesReviewer = /Jason Ramirez|SITE_AUTHOR\.name|ToolReviewerBio|AuthorByline|AuthorBio|ScoreInterpretationLayout/.test(composition);
    if (!exposesReviewer) missing.push(route);
  }
  assert.deepEqual(missing, []);
});

test("custom burnout pages disclose original educational scoring without clinical validation claims", async () => {
  const pages = await Promise.all([
    source("src/app/burnout-assessment-tool/page.tsx"),
    source("src/app/burnout-assessment-tool/BurnoutClient.tsx"),
    source("src/app/caregiver-burnout-assessment/page.tsx"),
    source("src/app/compassion-fatigue-test/page.tsx"),
  ]);
  const combined = pages.join("\n");

  assert.match(combined, /original educational/i);
  assert.match(combined, /not (?:a )?validated/i);
  assert.match(combined, /site-defined|educational (?:score )?(?:bands|ranges)/i);
  assert.doesNotMatch(
    combined,
    /validated burnout (?:assessment|scale)|clinically-informed|professionally-designed|Emotional Exhaustion|Depersonalization|Personal Accomplishment/i,
  );
});

test("homepage distinguishes published screeners from original tools and states storage accurately", async () => {
  const [home, metadata] = await Promise.all([
    source("src/app/page.tsx"),
    source("src/lib/metadata.ts"),
  ]);

  assert.match(home, /published mental health and substance use screening instruments alongside original educational self-checks/i);
  assert.match(home, /optional worksheets and recovery tools save entries in local browser storage/i);
  assert.match(home, /title: "Burnout Reflection"[\s\S]{0,300}badge: "Original"/);
  assert.doesNotMatch(home, /Every assessment uses the published scoring methodology/i);
  assert.doesNotMatch(home, /These tools use validated clinical questionnaires/i);
  assert.doesNotMatch(home, /1 in 4 people globally|reduces the duration of untreated depression by an average of 2 years/i);
  assert.doesNotMatch(metadata, /Free, clinically-informed mental health and SUD screening tools/i);
});

test("grief route identifies its PHQ-9 boundary instead of claiming to assess prolonged grief", async () => {
  const page = await source("src/app/grief-assessment/page.tsx");
  assert.match(page, /The PHQ-9 does not measure grief and cannot tell you whether you have[\s\n]*prolonged grief disorder/i);
  assert.match(page, /American Psychiatric Association/);
  assert.match(page, /NIH grief guide/);
  assert.doesNotMatch(page, /distinguishes between normal grief and prolonged grief disorder/i);
  assert.doesNotMatch(page, /may indicate complicated[\s\n]*or prolonged grief disorder/i);
});

test("published-instrument evidence links to every instrument advertised by the hub map", async () => {
  const [hub, evidence] = await Promise.all([
    source("src/app/screening-tools/page.tsx"),
    source("src/app/clinical-evidence/page.tsx"),
  ]);
  const evidenceRoutes = new Set(
    [...evidence.matchAll(/liveOn:\s*"(\/[^\"]+)"/g)].map((match) => match[1]),
  );
  const mappedRoutes = new Set(
    [...hub.matchAll(/^\s*"(\/[^\"]+)":\s*"[^\"]+",?$/gm)].map((match) => match[1]),
  );
  assert.ok(mappedRoutes.has("/phq-4-anxiety-depression-screen"));
  for (const route of mappedRoutes) {
    assert.equal(evidenceRoutes.has(route), true, `${route} is mapped to evidence but has no liveOn entry`);
  }
});
