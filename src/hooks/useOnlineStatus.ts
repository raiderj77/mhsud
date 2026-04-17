/**
 * React Hook: useOnlineStatus
 * Monitors navigator.onLine status with debouncing and safe SSR handling
 *
 * Usage:
 * const { isOnline, isReady } = useOnlineStatus()
 *
 * Returns:
 * - isOnline: boolean - true if browser can reach network
 * - isReady: boolean - true after first status check complete
 */

import { useState, useEffect, useCallback, useRef } from 'react';

interface OnlineStatus {
  isOnline: boolean;
  isReady: boolean;
}

// Debounce delay in milliseconds to prevent thrashing on unstable connections
const DEBOUNCE_DELAY = 300;

/**
 * Custom hook to track online/offline status
 * Handles:
 * - SSR safety (defaults to true during server render)
 * - Debouncing (prevents rapid state changes)
 * - Cleanup (removes event listeners)
 * - No duplicate renders (skips if status unchanged)
 */
export function useOnlineStatus(): OnlineStatus {
  const [status, setStatus] = useState<OnlineStatus>({
    isOnline: true, // Default to online (optimistic)
    isReady: false, // Not ready until first check
  });

  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastStatusRef = useRef<boolean | null>(null);

  /**
   * Update status with debouncing to prevent flapping
   * Only triggers state change if status actually differs
   */
  const updateStatus = useCallback((isOnline: boolean) => {
    // Skip if unchanged
    if (lastStatusRef.current === isOnline) {
      return;
    }

    // Clear any pending update
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Debounce the update
    debounceTimerRef.current = setTimeout(() => {
      lastStatusRef.current = isOnline;
      setStatus({
        isOnline,
        isReady: true,
      });
      debounceTimerRef.current = null;
    }, DEBOUNCE_DELAY);
  }, []);

  /**
   * Handle online event
   */
  const handleOnline = useCallback(() => {
    console.log('[useOnlineStatus] Online detected');
    updateStatus(true);
  }, [updateStatus]);

  /**
   * Handle offline event
   */
  const handleOffline = useCallback(() => {
    console.log('[useOnlineStatus] Offline detected');
    updateStatus(false);
  }, [updateStatus]);

  /**
   * Setup event listeners on mount, cleanup on unmount
   */
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') {
      return;
    }

    // Check initial status
    const initialStatus = navigator.onLine;
    lastStatusRef.current = initialStatus;
    setStatus({
      isOnline: initialStatus,
      isReady: true,
    });

    console.log('[useOnlineStatus] Initial status:', initialStatus ? 'online' : 'offline');

    // Add event listeners
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);

      // Clear any pending debounce timers
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [handleOnline, handleOffline]);

  return status;
}

/**
 * Optional: Hook to check if user just came online
 * Useful for refetching data after offline period
 */
export function useOnlineStatusChanged(): {
  isOnline: boolean;
  isReady: boolean;
  justCameOnline: boolean;
} {
  const status = useOnlineStatus();
  const previousStatusRef = useRef<boolean>(status.isOnline);

  const justCameOnline = previousStatusRef.current === false && status.isOnline === true;

  useEffect(() => {
    previousStatusRef.current = status.isOnline;
  }, [status.isOnline]);

  return {
    ...status,
    justCameOnline,
  };
}

/**
 * Optional: Hook to trigger callback when coming online
 * Useful for refetching data or retrying failed requests
 */
export function useOnComingOnline(callback: () => void, enabled = true): void {
  const { justCameOnline } = useOnlineStatusChanged();

  useEffect(() => {
    if (justCameOnline && enabled) {
      console.log('[useOnlineStatus] Triggering online callback');
      try {
        callback();
      } catch (error) {
        console.error('[useOnlineStatus] Online callback failed:', error);
      }
    }
  }, [justCameOnline, callback, enabled]);
}

/**
 * Optional: Simple hook for just checking online status
 * More lightweight if you don't need isReady
 */
export function useIsOnline(): boolean {
  const { isOnline } = useOnlineStatus();
  return isOnline;
}
