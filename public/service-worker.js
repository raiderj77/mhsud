/**
 * First-party service worker for MindCheck Tools.
 *
 * Privacy invariants:
 * - no third-party runtime or CDN import;
 * - no API response caching;
 * - no caching of screening, assessment, result, crisis, or other sensitive
 *   interactive routes;
 * - query strings and fragments are never used as cache keys.
 */

const CACHE_VERSION = "2.0.0";
const STATIC_CACHE = `mindcheck-static-${CACHE_VERSION}`;
const PAGE_CACHE = `mindcheck-pages-${CACHE_VERSION}`;
const CURRENT_CACHES = new Set([STATIC_CACHE, PAGE_CACHE]);
const MAX_STATIC_ENTRIES = 120;
const MAX_PAGE_ENTRIES = 60;

const PRECACHE_ASSETS = [
  "/",
  "/offline",
  "/manifest.json",
  "/favicon.ico",
  "/icon-192.png",
  "/icon-512.png",
];

const SENSITIVE_TOOL_SEGMENT =
  /(?:^|-)(?:test|screen|screening|assessment|questionnaire|scale|inventory|calculator|check|check-in|record|scheduler)(?:-|$)/i;

const EXPLICIT_SENSITIVE_ROUTES = new Set([
  "screening-tools",
  "crisis-resources",
  "safety-plan",
  "readiness-to-change",
  "who-5-wellbeing-index",
  "attachment-style-quiz",
  "box-breathing-exercise",
  "cognitive-distortion-identifier",
  "coping-skills-randomizer",
  "dass-21-depression-anxiety-stress",
  "dbt-crisis-skills",
  "five-senses-grounding",
  "health-recovery-timeline",
  "relapse-prevention-plan",
  "treatment-cost-estimator",
  "trigger-identification-worksheet",
  "urge-surfing-timer",
  "values-card-sort",
  "withdrawal-timeline",
]);

function isSensitivePath(pathname) {
  const firstSegment = pathname.split("/").filter(Boolean)[0]?.toLowerCase();
  if (!firstSegment || firstSegment === "blog") return false;
  return /^results?$/.test(firstSegment) ||
    EXPLICIT_SENSITIVE_ROUTES.has(firstSegment) ||
    SENSITIVE_TOOL_SEGMENT.test(firstSegment);
}

function cacheKeyFor(url) {
  return new Request(`${url.origin}${url.pathname}`, {
    method: "GET",
    credentials: "same-origin",
  });
}

function mayCache(response) {
  if (!response || !response.ok || response.type !== "basic") return false;
  const cacheControl = response.headers.get("cache-control") ?? "";
  return !/(?:^|,)\s*(?:no-store|private)(?:\s|,|$)/i.test(cacheControl) &&
    !response.headers.has("set-cookie");
}

async function trimCache(cache, maxEntries) {
  const keys = await cache.keys();
  const excess = keys.length - maxEntries;
  if (excess <= 0) return;
  await Promise.all(keys.slice(0, excess).map((key) => cache.delete(key)));
}

async function cacheFirst(request, url) {
  const cache = await caches.open(STATIC_CACHE);
  const key = cacheKeyFor(url);
  const cached = await cache.match(key);
  if (cached) return cached;

  const response = await fetch(request);
  if (mayCache(response)) {
    await cache.put(key, response.clone());
    await trimCache(cache, MAX_STATIC_ENTRIES);
  }
  return response;
}

async function networkFirstPage(request, url) {
  const cache = await caches.open(PAGE_CACHE);
  const key = cacheKeyFor(url);
  try {
    const response = await fetch(request);
    if (mayCache(response)) {
      await cache.put(key, response.clone());
      await trimCache(cache, MAX_PAGE_ENTRIES);
    }
    return response;
  } catch {
    return (await cache.match(key)) ||
      (await caches.match("/offline")) ||
      new Response("Offline - please try again", {
        status: 503,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      });
  }
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names
          .filter((name) =>
            (name.startsWith("mindcheck-") || name.startsWith("workbox-precache")) &&
            !CURRENT_CACHES.has(name),
          )
          .map((name) => caches.delete(name)),
      ))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (url.pathname.startsWith("/api/") || isSensitivePath(url.pathname)) {
    event.respondWith(fetch(request, { cache: "no-store" }));
    return;
  }

  if (
    url.pathname.startsWith("/_next/static/") ||
    /\.(?:css|js|woff2?|ttf|otf|eot|png|jpe?g|svg|gif|webp|ico)$/i.test(url.pathname)
  ) {
    event.respondWith(cacheFirst(request, url));
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(networkFirstPage(request, url));
  }
});
