/**
 * First-party service worker for MindCheck Tools.
 *
 * Privacy invariants:
 * - no third-party runtime or CDN import;
 * - no API response caching;
 * - no caching of screening, assessment, result, crisis, safety-plan, or other
 *   sensitive interactive routes;
 * - one generic, static crisis-safe fallback is explicitly approved for
 *   offline navigation failures and contains no user-entered data;
 * - query strings and fragments are never used as cache keys.
 */

const CACHE_VERSION = "3.0.0";
const STATIC_CACHE = `mindcheck-static-${CACHE_VERSION}`;
const PAGE_CACHE = `mindcheck-pages-${CACHE_VERSION}`;
const OFFLINE_SAFETY_CACHE = `mindcheck-offline-safety-${CACHE_VERSION}`;
const CURRENT_CACHES = new Set([STATIC_CACHE, PAGE_CACHE, OFFLINE_SAFETY_CACHE]);
const MAX_STATIC_ENTRIES = 120;
const MAX_PAGE_ENTRIES = 60;
const CRISIS_SAFE_FALLBACK_PATH = "/offline-crisis.html";

const CACHE_APPROVED_STATIC_ASSETS = [
  "/manifest.json",
  "/favicon.ico",
  "/icon-192.png",
  "/icon-512.png",
];

const CACHE_APPROVED_OFFLINE_ASSETS = [CRISIS_SAFE_FALLBACK_PATH];

const SENSITIVE_TOOL_SEGMENT =
  /(?:^|-)(?:test|screen|screening|assessment|questionnaire|scale|inventory|calculator|check|check-in|record|scheduler)(?:-|$)/i;

const EXPLICIT_SENSITIVE_ROUTES = new Set([
  "awareness",
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

function isAggregateAnalyticsPath(pathname) {
  return pathname.startsWith("/_vercel/insights/") ||
    pathname.startsWith("/vercel-scripts.com/v1/") ||
    /^\/[a-f0-9]{16,64}\/(?:script\.js|view|event|session)(?:\/|$)/i.test(pathname);
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
      getCrisisSafeOfflineFallback();
  }
}

function emergencyOfflineResponse() {
  return new Response(
    '<!doctype html><html lang="en-US"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>You are offline</title><main><h1>You are offline</h1><p>Reconnect before using MindCheck Tools.</p><p>If you are in immediate danger, call local emergency services. In the United States, call or text <a href="tel:988">988</a>, text HOME to <a href="sms:741741">741741</a>, or call the SAMHSA National Helpline at <a href="tel:1-800-662-4357">1-800-662-4357</a>.</p></main></html>',
    {
      status: 503,
      statusText: "Service Unavailable",
      headers: {
        "Cache-Control": "no-store",
        "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'",
        "Content-Type": "text/html; charset=utf-8",
        "X-Robots-Tag": "noindex, nofollow",
      },
    },
  );
}

async function getCrisisSafeOfflineFallback() {
  const cache = await caches.open(OFFLINE_SAFETY_CACHE);
  const cached = await cache.match(CRISIS_SAFE_FALLBACK_PATH);
  if (!cached) return emergencyOfflineResponse();

  const headers = new Headers(cached.headers);
  headers.set("Cache-Control", "no-store");
  headers.set("Content-Security-Policy", "default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'");
  headers.set("X-Robots-Tag", "noindex, nofollow");
  headers.delete("Content-Encoding");
  headers.delete("Content-Length");
  headers.delete("Transfer-Encoding");
  return new Response(await cached.arrayBuffer(), {
    status: 503,
    statusText: "Service Unavailable",
    headers,
  });
}

async function networkOnlySensitive(request) {
  try {
    return await fetch(request, { cache: "no-store" });
  } catch (error) {
    if (request.mode === "navigate") return getCrisisSafeOfflineFallback();
    throw error;
  }
}

function isManagedCache(name) {
  return name.startsWith("mindcheck-") || name.startsWith("workbox-precache");
}

async function purgeDisallowedEntries(cacheName) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  await Promise.all(
    keys.map((key) => {
      const url = new URL(key.url);
      if (
        url.search ||
        url.hash ||
        url.pathname.startsWith("/api/") ||
        isSensitivePath(url.pathname) ||
        isAggregateAnalyticsPath(url.pathname)
      ) {
        return cache.delete(key);
      }
      return false;
    }),
  );
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE)
        .then((cache) => cache.addAll(CACHE_APPROVED_STATIC_ASSETS)),
      caches.open(OFFLINE_SAFETY_CACHE)
        .then((cache) => cache.addAll(CACHE_APPROVED_OFFLINE_ASSETS)),
    ]).then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names
          .filter((name) => isManagedCache(name) && !CURRENT_CACHES.has(name))
          .map((name) => caches.delete(name)),
      ))
      .then(() => Promise.all([
        purgeDisallowedEntries(STATIC_CACHE),
        purgeDisallowedEntries(PAGE_CACHE),
      ]))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (isAggregateAnalyticsPath(url.pathname)) {
    event.respondWith(fetch(request, { cache: "no-store" }));
    return;
  }

  if (url.pathname.startsWith("/api/")) {
    event.respondWith(fetch(request, { cache: "no-store" }));
    return;
  }

  if (isSensitivePath(url.pathname)) {
    event.respondWith(networkOnlySensitive(request));
    return;
  }

  if (url.pathname === CRISIS_SAFE_FALLBACK_PATH) {
    event.respondWith(getCrisisSafeOfflineFallback());
    return;
  }

  if (
    url.pathname === "/manifest.json" ||
    url.pathname.startsWith("/_next/static/") ||
    /\.(?:woff2?|ttf|otf|eot|png|jpe?g|svg|gif|webp|ico)$/i.test(url.pathname)
  ) {
    event.respondWith(cacheFirst(request, url));
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(networkFirstPage(request, url));
  }
});
