"use client";

/**
 * Service Worker Update Notification Component
 * Displays update prompt when new version is available
 *
 * Usage: Add to your app root layout
 * <SwUpdateNotification />
 */

import { useEffect, useState, useCallback } from 'react'
import { reloadWithNewServiceWorker, onServiceWorkerUpdate } from '@/lib/sw-register'

interface SwUpdateNotificationProps {
  /**
   * Custom toast/notification handler
   * If provided, component won't render UI but will call this
   */
  onUpdateAvailable?: () => void
  /**
   * Delay before auto-showing notification (ms)
   * Default: show immediately
   */
  delay?: number
  /**
   * Position of notification (Tailwind)
   * Default: "bottom-right"
   */
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

/**
 * Component to display SW update notification
 */
export function SwUpdateNotification({
  onUpdateAvailable,
  delay = 0,
  position = 'bottom-right',
}: SwUpdateNotificationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  /**
   * Handle update available event
   */
  const handleUpdateAvailable = useCallback(() => {
    if (onUpdateAvailable) {
      // Custom handler provided - use that instead of showing UI
      onUpdateAvailable()
      return
    }

    // Show update notification
    if (delay > 0) {
      setTimeout(() => setIsVisible(true), delay)
    } else {
      setIsVisible(true)
    }
  }, [onUpdateAvailable, delay])

  /**
   * Setup SW update listener on mount
   */
  useEffect(() => {
    // Register callback for SW updates
    onServiceWorkerUpdate((state) => {
      if (state === 'available') {
        handleUpdateAvailable()
      }
    })

    // Also listen for custom event (for compatibility with different registration methods)
    const handleEvent = (event: Event) => {
      const customEvent = event as CustomEvent
      if (customEvent.detail?.state === 'available') {
        handleUpdateAvailable()
      }
    }

    window.addEventListener('sw-update-available', handleEvent)

    return () => {
      window.removeEventListener('sw-update-available', handleEvent)
    }
  }, [handleUpdateAvailable])

  /**
   * Handle update button click
   */
  const handleUpdate = useCallback(async () => {
    setIsLoading(true)

    try {
      await reloadWithNewServiceWorker()
      // Reload happens automatically after this, but keep loading state
    } catch (error) {
      console.error('[SwUpdateNotification] Update failed:', error)
      setIsLoading(false)
    }
  }, [])

  /**
   * Handle dismiss button click
   */
  const handleDismiss = useCallback(() => {
    setIsVisible(false)
  }, [])

  // If custom handler is provided, don't render
  if (onUpdateAvailable && isVisible) {
    return null
  }

  if (!isVisible) {
    return null
  }

  // Position classes
  const positionClass = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
  }[position]

  return (
    <div
      className={`fixed ${positionClass} z-50 max-w-sm animate-in slide-in-from-bottom-4`}
      role="status"
      aria-live="polite"
    >
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <h3 className="font-semibold text-lg">Update Available</h3>
              <p className="text-blue-100 text-sm mt-1">
                A new version of mindchecktools is ready
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={handleDismiss}
              disabled={isLoading}
              className="flex-shrink-0 text-blue-200 hover:text-white disabled:opacity-50"
              aria-label="Dismiss update notification"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-blue-700 bg-opacity-50 px-4 py-3 flex gap-2">
          <button
            onClick={handleUpdate}
            disabled={isLoading}
            className="flex-1 bg-white text-blue-600 px-4 py-2 rounded font-semibold text-sm hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="inline-block w-4 h-4 border-2 border-blue-300 border-t-blue-600 rounded-full animate-spin" />
                Updating...
              </span>
            ) : (
              'Update Now'
            )}
          </button>

          <button
            onClick={handleDismiss}
            disabled={isLoading}
            className="px-4 py-2 text-blue-100 hover:text-white disabled:opacity-50 text-sm font-medium"
          >
            Later
          </button>
        </div>

        {/* Progress indicator */}
        {isLoading && (
          <div className="h-1 bg-blue-800">
            <div className="h-full bg-white animate-pulse"></div>
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * Minimal alternative component (simpler styling)
 */
export function SwUpdateNotificationMinimal({
  onUpdateAvailable,
  position = 'bottom-right',
}: Omit<SwUpdateNotificationProps, 'delay'>) {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    onServiceWorkerUpdate((state) => {
      if (state === 'available') {
        if (onUpdateAvailable) {
          onUpdateAvailable()
        } else {
          setIsVisible(true)
        }
      }
    })
  }, [onUpdateAvailable])

  if (!isVisible) {
    return null
  }

  const positionClass = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
  }[position]

  return (
    <div className={`fixed ${positionClass} z-50`}>
      <div className="bg-blue-600 text-white rounded px-4 py-3 shadow-lg">
        <p className="text-sm mb-2">New version available</p>
        <button
          onClick={async () => {
            setIsLoading(true)
            await reloadWithNewServiceWorker()
          }}
          disabled={isLoading}
          className="bg-white text-blue-600 px-3 py-1 rounded text-sm font-semibold hover:bg-blue-50 disabled:opacity-50"
        >
          {isLoading ? 'Updating...' : 'Update'}
        </button>
      </div>
    </div>
  )
}
