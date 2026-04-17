/**
 * Service Worker Registration Utility
 * Handles SW registration, updates, and error handling
 * Type-safe, works in browser and mobile contexts
 *
 * Usage: import { registerServiceWorker } from '@/lib/sw-register'
 *        registerServiceWorker().then(reg => console.log('SW active'))
 */

type UpdateCallback = (state: 'available' | 'activated') => void;

interface RegisterOptions {
  onUpdate?: UpdateCallback;
  scope?: string;
}

let updateCallbacks: UpdateCallback[] = [];
let registrationPromise: Promise<ServiceWorkerRegistration | null> | null = null;

/**
 * Register service worker and handle lifecycle
 * Safe to call multiple times - returns same promise
 */
export async function registerServiceWorker(
  options: RegisterOptions = {}
): Promise<ServiceWorkerRegistration | null> {
  // Return cached promise if already in flight
  if (registrationPromise) {
    return registrationPromise;
  }

  // Not in browser context (SSR/Node)
  if (typeof window === 'undefined' || !navigator.serviceWorker) {
    return null;
  }

  registrationPromise = registerServiceWorkerInternal(options);
  return registrationPromise;
}

async function registerServiceWorkerInternal(
  options: RegisterOptions
): Promise<ServiceWorkerRegistration | null> {
  try {
    // Register SW from /public/service-worker.js
    const registration = await navigator.serviceWorker.register(
      '/service-worker.js',
      {
        scope: options.scope || '/',
        // updateViaCache allows bypassing browser cache for SW script
        updateViaCache: 'none',
      }
    );

    console.log('[SW Register] Service worker registered successfully', {
      scope: registration.scope,
      active: !!registration.active,
      pending: !!registration.waiting,
    });

    // Handle SW installation/update lifecycle
    setupSWUpdateListener(registration, options);

    // Check for updates every hour
    setInterval(() => {
      registration.update().catch((err) => {
        console.warn('[SW Register] Update check failed:', err);
      });
    }, 60 * 60 * 1000);

    // Initial update check after 30s
    setTimeout(() => {
      registration.update().catch((err) => {
        console.warn('[SW Register] Initial update check failed:', err);
      });
    }, 30 * 1000);

    return registration;
  } catch (error) {
    console.error('[SW Register] Service worker registration failed:', error);

    // Provide helpful context about why registration failed
    if (error instanceof Error) {
      if (error.message.includes('security')) {
        console.error('[SW Register] Security note: SW requires HTTPS (or localhost)');
      }
      if (error.message.includes('syntax')) {
        console.error('[SW Register] Syntax error in service-worker.js');
      }
    }

    return null;
  }
}

/**
 * Listen for SW updates and notify app
 * Called when registration.waiting is updated or new SW is activated
 */
function setupSWUpdateListener(
  registration: ServiceWorkerRegistration,
  options: RegisterOptions
): void {
  // Register callback if provided
  if (options.onUpdate) {
    updateCallbacks.push(options.onUpdate);
  }

  // Case 1: SW is already waiting (user refreshed, new SW installed)
  if (registration.waiting) {
    notifyUpdate('available');
  }

  // Case 2: Monitor for new SW after registration
  registration.addEventListener('updatefound', () => {
    const newWorker = registration.installing;

    if (!newWorker) return;

    newWorker.addEventListener('statechange', () => {
      if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
        // New SW installed, user can update
        notifyUpdate('available');
      }

      if (newWorker.state === 'activated') {
        // SW activated (either immediately or after page reload)
        notifyUpdate('activated');
      }
    });
  });

  // Listen for messages from SW about successful activation
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    console.log('[SW Register] New service worker now active');
    notifyUpdate('activated');
  });
}

/**
 * Notify all callbacks about SW update status
 */
function notifyUpdate(state: 'available' | 'activated'): void {
  updateCallbacks.forEach((callback) => {
    try {
      callback(state);
    } catch (err) {
      console.error('[SW Register] Error in update callback:', err);
    }
  });
}

/**
 * Subscribe to SW updates
 * Can be called multiple times to register multiple listeners
 */
export function onServiceWorkerUpdate(callback: UpdateCallback): void {
  updateCallbacks.push(callback);
}

/**
 * Prompt user to update and reload
 * Call this from your update notification UI
 */
export async function reloadWithNewServiceWorker(): Promise<void> {
  if (typeof window === 'undefined' || !navigator.serviceWorker) {
    return;
  }

  const registration = await navigator.serviceWorker.ready;

  if (!registration.waiting) {
    console.warn('[SW Register] No pending service worker update available');
    return;
  }

  // Tell SW to skip waiting and activate immediately
  registration.waiting.postMessage({ type: 'SKIP_WAITING' });

  // Wait for new SW to activate, then reload page
  let reloadScheduled = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!reloadScheduled) {
      reloadScheduled = true;
      window.location.reload();
    }
  });
}

/**
 * Check current online status and trigger update
 */
export async function checkServiceWorkerUpdate(): Promise<boolean> {
  if (typeof window === 'undefined' || !navigator.serviceWorker) {
    return false;
  }

  const registration = await navigator.serviceWorker.ready;

  try {
    await registration.update();
    return !!registration.waiting;
  } catch (error) {
    console.error('[SW Register] Failed to check for updates:', error);
    return false;
  }
}

/**
 * Send message to service worker to check cache quota
 * Returns cache usage info if Storage Quota API is available
 */
export async function checkCacheQuota(): Promise<{
  usage: number;
  quota: number;
  percentUsed: number;
} | null> {
  if (typeof window === 'undefined' || !navigator.serviceWorker.controller) {
    return null;
  }

  return new Promise((resolve) => {
    const channel = new MessageChannel();

    channel.port1.onmessage = (event) => {
      if (event.data.type === 'CACHE_QUOTA_RESPONSE') {
        if (event.data.error) {
          console.warn('[SW Register] Cache quota check failed:', event.data.error);
          resolve(null);
        } else {
          resolve({
            usage: event.data.usage,
            quota: event.data.quota,
            percentUsed: event.data.percentUsed,
          });
        }
      }
    };

    navigator.serviceWorker.controller?.postMessage(
      { type: 'CHECK_CACHE_QUOTA' },
      [channel.port2]
    );

    // Timeout after 5 seconds
    setTimeout(() => resolve(null), 5000);
  });
}

/**
 * Unregister service worker (for cleanup/debugging)
 */
export async function unregisterServiceWorker(): Promise<boolean> {
  if (typeof window === 'undefined' || !navigator.serviceWorker) {
    return false;
  }

  try {
    const registrations = await navigator.serviceWorker.getRegistrations();

    const results = await Promise.all(
      registrations.map((reg) =>
        reg.unregister().then(() => true).catch(() => false)
      )
    );

    const success = results.some((r) => r);
    if (success) {
      console.log('[SW Register] Service worker unregistered');
      registrationPromise = null;
      updateCallbacks = [];
    }

    return success;
  } catch (error) {
    console.error('[SW Register] Failed to unregister service worker:', error);
    return false;
  }
}

/**
 * Initialize service worker on page load
 * Call this from your app's root layout or _app.tsx
 *
 * Usage:
 * useEffect(() => {
 *   initServiceWorker()
 * }, [])
 */
export async function initServiceWorker(): Promise<void> {
  if (typeof window === 'undefined') return;

  // Register SW
  await registerServiceWorker({
    onUpdate: (state) => {
      if (state === 'available') {
        console.log('[SW Register] New version available');
        // Dispatch event that UI components can listen to
        window.dispatchEvent(
          new CustomEvent('sw-update-available', { detail: { state } })
        );
      } else if (state === 'activated') {
        console.log('[SW Register] Service worker activated');
      }
    },
  });
}
