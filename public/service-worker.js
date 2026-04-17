/**
 * Service Worker for mindchecktools.com PWA
 * Implements Workbox caching strategies for offline-first experience
 * PRIVACY: NO health data logging, NO personal info caching
 */

// Import Workbox modules from CDN
importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js');

if (workbox) {
  // Configure Workbox to log appropriately in dev only
  if (process.env.NODE_ENV === 'production') {
    workbox.setConfig({ debug: false });
  }

  // === CONSTANTS ===
  const CACHE_VERSION = '1.0.0';
  const CACHE_TIMESTAMP = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  const PRECACHE_NAME = `mindcheck-precache-${CACHE_VERSION}`;
  const RUNTIME_CACHE_NAMES = {
    staticAssets: `mindcheck-static-${CACHE_TIMESTAMP}`,
    toolPages: `mindcheck-tools-${CACHE_TIMESTAMP}`,
    blogPosts: `mindcheck-blog-${CACHE_TIMESTAMP}`,
    api: `mindcheck-api-${CACHE_TIMESTAMP}`,
    analytics: `mindcheck-analytics-${CACHE_TIMESTAMP}`,
  };

  // === PRECACHE CRITICAL ASSETS ===
  const precacheAssets = [
    { url: '/', revision: CACHE_VERSION },
    { url: '/manifest.json', revision: CACHE_VERSION },
    { url: '/favicon.ico', revision: CACHE_VERSION },
    { url: '/offline', revision: CACHE_VERSION },
  ];

  workbox.precaching.precacheAndRoute(precacheAssets);

  // === CACHING STRATEGIES ===

  // 1. STATIC ASSETS: Cache-first (versioned with hash in filename)
  // Next.js outputs hashed filenames in _next/static, so cache-first is safe
  workbox.routing.registerRoute(
    ({ url }) => url.pathname.startsWith('/_next/static') ||
                  url.pathname.match(/\.(woff2?|ttf|otf|eot)$/),
    new workbox.strategies.CacheFirst({
      cacheName: RUNTIME_CACHE_NAMES.staticAssets,
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 100,
          maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
        }),
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    })
  );

  // 2. ICON/FONT ASSETS: Cache-first
  workbox.routing.registerRoute(
    ({ url }) => url.pathname.startsWith('/icons') ||
                  url.pathname.match(/\.(png|jpg|jpeg|svg|gif|webp)$/),
    new workbox.strategies.CacheFirst({
      cacheName: RUNTIME_CACHE_NAMES.staticAssets,
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 50,
          maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
        }),
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    })
  );

  // 3. TOOL PAGES: Stale-while-revalidate
  // Includes assessment tools like /phq-9, /gad-7, and published results
  workbox.routing.registerRoute(
    ({ url }) => /^(\/phq-9|\/gad-7|\/published)/.test(url.pathname),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: RUNTIME_CACHE_NAMES.toolPages,
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 20,
          maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
        }),
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    })
  );

  // 4. BLOG POSTS: Stale-while-revalidate
  workbox.routing.registerRoute(
    ({ url }) => url.pathname.startsWith('/blog/'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: RUNTIME_CACHE_NAMES.blogPosts,
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 50,
          maxAgeSeconds: 60 * 60 * 24 * 14, // 14 days
        }),
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    })
  );

  // 5. API ROUTES: Network-first (always try fresh data)
  workbox.routing.registerRoute(
    ({ url }) => url.pathname.startsWith('/api/'),
    new workbox.strategies.NetworkFirst({
      cacheName: RUNTIME_CACHE_NAMES.api,
      networkTimeoutSeconds: 3,
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 30,
          maxAgeSeconds: 60 * 60 * 24, // 1 day
        }),
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    })
  );

  // 6. GOOGLE ANALYTICS: Network-first with fallback
  // Never fail analytics - just use cache or skip
  workbox.routing.registerRoute(
    ({ url }) => url.hostname.includes('google-analytics.com') ||
                  url.hostname.includes('analytics.google.com'),
    new workbox.strategies.NetworkFirst({
      cacheName: RUNTIME_CACHE_NAMES.analytics,
      networkTimeoutSeconds: 2,
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 20,
          maxAgeSeconds: 60 * 60, // 1 hour
        }),
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    })
  );

  // 7. GOOGLE ADSENSE: Network-first with fallback
  workbox.routing.registerRoute(
    ({ url }) => url.hostname.includes('google') &&
                  url.pathname.includes('ads'),
    new workbox.strategies.NetworkFirst({
      cacheName: RUNTIME_CACHE_NAMES.analytics,
      networkTimeoutSeconds: 2,
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    })
  );

  // === FALLBACK HANDLING ===
  // Navigation requests that fail should show offline page
  workbox.routing.registerRoute(
    ({ request }) => request.mode === 'navigate',
    new workbox.strategies.NetworkFirst({
      cacheName: RUNTIME_CACHE_NAMES.toolPages,
      networkTimeoutSeconds: 3,
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    }).catch(() => caches.match('/offline') || new Response('Offline - please try again'))
  );

  // === CACHE CLEANUP ===
  // Remove old cache entries on service worker activation
  self.addEventListener('activate', (event) => {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // Keep current caches, delete old ones
            const validCaches = Object.values(RUNTIME_CACHE_NAMES);
            validCaches.push(PRECACHE_NAME);

            if (!validCaches.includes(cacheName)) {
              return caches.delete(cacheName);
            }
          })
        );
      }).then(() => self.clients.claim())
    );
  });

  // === QUOTA MANAGEMENT ===
  // Monitor cache size and clean up if needed (50MB limit)
  self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'CHECK_CACHE_QUOTA') {
      event.waitUntil(
        navigator.storage?.estimate?.().then((estimate) => {
          const percentUsed = (estimate.usage / estimate.quota) * 100;

          // If cache is >80% full, start cleanup
          if (percentUsed > 80) {
            // Delete oldest entries from largest cache
            caches.open(RUNTIME_CACHE_NAMES.staticAssets).then((cache) => {
              cache.keys().then((requests) => {
                if (requests.length > 20) {
                  requests.slice(0, 10).forEach((req) => cache.delete(req));
                }
              });
            });
          }

          event.ports[0].postMessage({
            type: 'CACHE_QUOTA_RESPONSE',
            usage: estimate.usage,
            quota: estimate.quota,
            percentUsed: percentUsed,
          });
        }).catch(() => {
          // Storage Quota API not available, ignore
          event.ports[0].postMessage({
            type: 'CACHE_QUOTA_RESPONSE',
            error: 'Storage Quota API not available',
          });
        })
      );
    }
  });

  // === BACKGROUND SYNC (Future) ===
  // Placeholder for offline form submissions in future phase
  // workbox.backgroundSync.initialize();

} else {
  console.error('Workbox failed to load from CDN');
}
