import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import { runInNewContext } from "node:vm";
import test from "node:test";

const ORIGIN = "https://mindchecktools.test";
const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

function basicResponse(body = "ok", init = {}) {
  const response = new Response(body, init);
  Object.defineProperty(response, "type", { value: "basic" });
  return response;
}

class MemoryCache {
  constructor(fetchImpl) {
    this.fetchImpl = fetchImpl;
    this.entries = new Map();
  }

  keyFor(input) {
    if (typeof input === "string") return new URL(input, ORIGIN).href;
    return input.url;
  }

  async match(input) {
    return this.entries.get(this.keyFor(input))?.clone();
  }

  async put(input, response) {
    this.entries.set(this.keyFor(input), response.clone());
  }

  async addAll(inputs) {
    for (const input of inputs) {
      const request = new Request(new URL(input, ORIGIN));
      const response = await this.fetchImpl(request);
      if (!response.ok) throw new Error(`Unable to cache ${request.url}`);
      await this.put(request, response);
    }
  }

  async keys() {
    return [...this.entries.keys()].map((url) => new Request(url));
  }

  async delete(input) {
    return this.entries.delete(this.keyFor(input));
  }
}

async function createWorkerHarness() {
  const source = await read("public/service-worker.js");
  const listeners = new Map();
  const stores = new Map();
  const fetchCalls = [];
  let online = true;
  let skipWaitingCalls = 0;
  let claimCalls = 0;

  const fetchImpl = async (request, init = {}) => {
    fetchCalls.push({ request, init });
    if (!online) throw new TypeError("synthetic offline state");
    const pathname = new URL(request.url).pathname;
    if (pathname.endsWith(".html")) {
      return basicResponse(await read("public/offline-crisis.html"), {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }
    return basicResponse(`network:${pathname}`, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  };

  const caches = {
    async open(name) {
      if (!stores.has(name)) stores.set(name, new MemoryCache(fetchImpl));
      return stores.get(name);
    },
    async keys() {
      return [...stores.keys()];
    },
    async delete(name) {
      return stores.delete(name);
    },
  };

  const self = {
    location: { origin: ORIGIN },
    clients: {
      async claim() {
        claimCalls += 1;
      },
    },
    addEventListener(type, listener) {
      listeners.set(type, listener);
    },
    async skipWaiting() {
      skipWaitingCalls += 1;
    },
  };

  runInNewContext(source, {
    caches,
    console,
    fetch: fetchImpl,
    Headers,
    Promise,
    Request,
    Response,
    self,
    Set,
    URL,
  });

  const dispatchExtendable = async (type) => {
    let pending;
    listeners.get(type)({ waitUntil: (promise) => { pending = Promise.resolve(promise); } });
    assert.ok(pending, `${type} must extend its lifetime`);
    await pending;
  };

  const dispatchFetch = (request) => {
    let response;
    listeners.get("fetch")({
      request,
      respondWith: (promise) => { response = Promise.resolve(promise); },
    });
    return response;
  };

  return {
    caches,
    dispatchExtendable,
    dispatchFetch,
    fetchCalls,
    get claimCalls() { return claimCalls; },
    get skipWaitingCalls() { return skipWaitingCalls; },
    setOnline(value) { online = value; },
    stores,
  };
}

async function sourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, directory);
    if (entry.isDirectory()) files.push(...await sourceFiles(path));
    else if (/\.(?:ts|tsx|js|jsx)$/.test(entry.name)) files.push(path);
  }
  return files;
}

test("one registration path silently activates updates without reloading active work", async () => {
  const files = await sourceFiles(new URL("../src/", import.meta.url));
  const sources = await Promise.all(files.map((file) => readFile(file, "utf8")));
  const registrations = sources.flatMap((source) => source.match(/navigator\.serviceWorker\s*\.register\s*\(/g) ?? []);
  const [layout, worker] = await Promise.all([
    read("src/app/layout.tsx"),
    read("public/service-worker.js"),
  ]);

  assert.equal(registrations.length, 1);
  assert.match(layout, /register\('\/service-worker\.js', \{ updateViaCache: 'none' \}\)/);
  await assert.rejects(access(new URL("../src/lib/sw-register.ts", import.meta.url)), { code: "ENOENT" });
  await assert.rejects(access(new URL("../src/components/SwUpdateNotification.tsx", import.meta.url)), { code: "ENOENT" });
  assert.match(worker, /self\.skipWaiting\(\)/);
  assert.match(worker, /self\.clients\.claim\(\)/);
  assert.doesNotMatch(worker, /addEventListener\(["']message|SKIP_WAITING|CHECK_CACHE_QUOTA|location\.reload/);
  assert.doesNotMatch(worker, /\(\?:css\|js\|/, "root-level scripts must not enter Cache Storage");
  assert.doesNotMatch(layout, /SwUpdateNotification|location\.reload/);
});

test("install and activation migrate every prior managed cache and sanitize current caches", async () => {
  const harness = await createWorkerHarness();
  await harness.dispatchExtendable("install");

  assert.equal(harness.skipWaitingCalls, 1);
  assert.ok(harness.stores.has("mindcheck-static-3.0.0"));
  assert.ok(harness.stores.has("mindcheck-offline-safety-3.0.0"));
  assert.ok(
    harness.stores.get("mindcheck-offline-safety-3.0.0").entries.has(`${ORIGIN}/offline-crisis.html`),
  );

  const oldTools = await harness.caches.open("mindcheck-tools-1.0.0");
  const oldPages = await harness.caches.open("mindcheck-pages-2.0.0");
  const oldWorkbox = await harness.caches.open("workbox-precache-v1");
  const unrelated = await harness.caches.open("unrelated-cache");
  for (const cache of [oldTools, oldPages, oldWorkbox, unrelated]) {
    await cache.put(`${ORIGIN}/synthetic`, basicResponse());
  }

  const currentPages = await harness.caches.open("mindcheck-pages-3.0.0");
  await currentPages.put(`${ORIGIN}/phq-9-depression-test?audit_probe=1`, basicResponse());
  await currentPages.put(`${ORIGIN}/about?audit_probe=1`, basicResponse());
  await currentPages.put(`${ORIGIN}/api/synthetic`, basicResponse());
  await currentPages.put(`${ORIGIN}/6defa80148a409e9/script.js`, basicResponse());
  await currentPages.put(`${ORIGIN}/about`, basicResponse());

  await harness.dispatchExtendable("activate");

  assert.equal(harness.claimCalls, 1);
  assert.equal(harness.stores.has("mindcheck-tools-1.0.0"), false);
  assert.equal(harness.stores.has("mindcheck-pages-2.0.0"), false);
  assert.equal(harness.stores.has("workbox-precache-v1"), false);
  assert.equal(harness.stores.has("unrelated-cache"), true);
  assert.deepEqual([...currentPages.entries.keys()], [`${ORIGIN}/about`]);
});

test("offline sensitive navigation receives only the static crisis-safe fallback", async () => {
  const harness = await createWorkerHarness();
  await harness.dispatchExtendable("install");
  await harness.dispatchExtendable("activate");
  harness.setOnline(false);

  const response = await harness.dispatchFetch({
    method: "GET",
    mode: "navigate",
    url: `${ORIGIN}/crisis-resources?audit_probe=synthetic#not-sent`,
  });
  const html = await response.text();

  assert.equal(response.status, 503);
  assert.match(response.headers.get("cache-control"), /no-store/);
  assert.match(response.headers.get("x-robots-tag"), /noindex/);
  assert.match(html, /Call 988/);
  assert.match(html, /741741/);
  assert.match(html, /SAMHSA National Helpline/);
  assert.doesNotMatch(html, /audit_probe|crisis-resources/);

  for (const cache of harness.stores.values()) {
    for (const key of cache.entries.keys()) {
      assert.doesNotMatch(key, /crisis-resources|audit_probe/);
    }
  }
  assert.equal(harness.fetchCalls.at(-1).init.cache, "no-store");
});

test("sensitive subresources fail closed and same-origin analytics never enter Cache Storage", async () => {
  const harness = await createWorkerHarness();
  await harness.dispatchExtendable("install");
  await harness.dispatchExtendable("activate");

  const analyticsResponse = await harness.dispatchFetch({
    method: "GET",
    mode: "cors",
    url: `${ORIGIN}/6defa80148a409e9/script.js`,
  });
  assert.equal(await analyticsResponse.text(), "network:/6defa80148a409e9/script.js");
  assert.equal(harness.fetchCalls.at(-1).init.cache, "no-store");

  for (const cache of harness.stores.values()) {
    assert.equal([...cache.entries.keys()].some((key) => key.includes("6defa80148a409e9")), false);
  }

  harness.setOnline(false);
  await assert.rejects(
    harness.dispatchFetch({
      method: "GET",
      mode: "cors",
      url: `${ORIGIN}/phq-9-depression-test/client-state`,
    }),
    /synthetic offline state/,
  );
});

test("install promotion is home-only and cannot render during sensitive work", async () => {
  const source = await read("src/components/AppInstallPrompt.tsx");
  assert.match(source, /usePathname\(\)/);
  assert.match(source, /const INSTALL_PROMPT_ALLOWED_ROUTES = new Set\(\["\/"\]\)/);
  assert.match(source, /if \(!isInstallPromptAllowedRoute\(window\.location\.pathname\)\) return/);
  assert.match(source, /!isInstallPromptAllowedRoute\(pathname\)/);
});

test("manifest and offline artifact are truthful, installable, and self-contained", async () => {
  const [manifestSource, fallback, safetyPlan, safetyPlanClient] = await Promise.all([
    read("public/manifest.json"),
    read("public/offline-crisis.html"),
    read("src/app/safety-plan/page.tsx"),
    read("src/app/safety-plan/SafetyPlanClient.tsx"),
  ]);
  const manifest = JSON.parse(manifestSource);

  assert.equal(manifest.id, "/");
  assert.equal(manifest.start_url, "/");
  assert.equal(manifest.scope, "/");
  assert.equal(manifest.display, "standalone");
  assert.equal(manifest.lang, "en-US");
  assert.equal("orientation" in manifest, false, "installation must not force portrait orientation");
  assert.equal(manifest.icons.length, 2);
  assert.equal("screenshots" in manifest, false, "icons must not be mislabeled as screenshots");
  assert.doesNotMatch(manifest.description, /never stored|100% private|nothing ever leaves/i);
  assert.match(manifest.description, /not intentionally sent/i);

  for (const icon of manifest.icons) {
    const expected = Number(icon.sizes.split("x")[0]);
    const bytes = await readFile(new URL(`../public${icon.src}`, import.meta.url));
    assert.equal(bytes.subarray(1, 4).toString("ascii"), "PNG");
    assert.equal(bytes.readUInt32BE(16), expected);
    assert.equal(bytes.readUInt32BE(20), expected);
    assert.equal(icon.type, "image/png");
  }

  assert.match(fallback, /meta name="robots" content="noindex, nofollow"/);
  assert.match(fallback, /Call 988/);
  assert.match(fallback, /741741/);
  assert.match(fallback, /SAMHSA National Helpline/);
  assert.doesNotMatch(fallback, /<script|<form|https?:\/\//i);

  assert.doesNotMatch(safetyPlan, /always available/i);
  assert.match(safetyPlan, /Entries can be saved in this browser/);
  assert.match(safetyPlan, /print a copy for offline access/);
  assert.match(safetyPlan, /browser-local storage when available/);
  assert.match(safetyPlanClient, /setStorageState\("saved"\)/);
  assert.match(safetyPlanClient, /setStorageState\("unavailable"\)/);
  assert.match(safetyPlanClient, /This browser could not save your plan/);
  assert.match(safetyPlanClient, /role="alert"[\s\S]*This browser cannot save your plan/);
  assert.doesNotMatch(safetyPlanClient, /It will be here when you come back|update it anytime/);
});

test("safety-plan storage recovery and destructive reset fail safely", async () => {
  const [page, client, storage] = await Promise.all([
    read("src/app/safety-plan/page.tsx"),
    read("src/app/safety-plan/SafetyPlanClient.tsx"),
    read("src/lib/safetyPlanStorage.ts"),
  ]);

  assert.match(storage, /function normalizePlan\(value: unknown\): PlanData/);
  assert.match(storage, /function hasCompletePlanSchema\(value: unknown\): value is PlanData/);
  assert.match(storage, /recovered: !hasCompletePlanSchema\(value\)/);
  assert.doesNotMatch(storage, /slice\(0, MAX_PLAN_LIST_ITEMS\)/);
  assert.match(client, /Part of the saved plan could not be read safely/);
  assert.match(client, /window\.confirm\(/);
  assert.match(storage, /if \(!confirmed\) return \{ cleared: false, storageAvailable: true \}/);
  assert.match(client, /Delete Saved Plan &amp; Start Over/);
  assert.match(client, /This cannot be undone/);

  for (const source of [page, client]) {
    assert.match(source, /2018/);
    assert.match(source, /JAMA Psychiatry/);
    assert.match(source, /standalone web tool/);
    assert.doesNotMatch(source, /2012 study by Stanley and Brown|American Journal of Preventive Medicine/);
  }
  assert.match(client, /pubmed\.ncbi\.nlm\.nih\.gov\/29998307/);
});
