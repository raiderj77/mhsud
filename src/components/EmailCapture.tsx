'use client'
import { useState } from 'react'

interface EmailCaptureProps {
  headline: string
  subtext: string
  buttonText: string
  source: string
  leadMagnet: string
  variant?: 'inline' | 'banner'
}

export default function EmailCapture({
  headline,
  subtext,
  buttonText,
  source,
  leadMagnet,
  variant = 'inline'
}: EmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address')
      return
    }
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source, leadMagnet }),
      })

      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div
        className={`rounded-xl border border-sage-200 dark:border-sage-800 bg-sage-50 dark:bg-sage-950/30 p-6 text-center ${variant === 'banner' ? 'w-full' : ''}`}
        role="status"
        aria-live="polite"
      >
        <span className="text-2xl" aria-hidden="true">&#10003;</span>
        <p className="text-sage-700 dark:text-sage-400 font-medium mt-2">
          Check your inbox — your results are on the way.
        </p>
      </div>
    )
  }

  return (
    <div
      className={`card p-5 sm:p-6 ${variant === 'banner' ? 'w-full' : ''}`}
      role="complementary"
      aria-label="Get a private copy of your results"
    >
      <p className="font-serif font-semibold text-neutral-900 dark:text-neutral-50 text-lg mb-1">
        {headline}
      </p>
      <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-4">{subtext}</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <label htmlFor={`email-${source}`} className="sr-only">Email address</label>
        <input
          id={`email-${source}`}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder="your@email.com"
          disabled={status === 'loading'}
          aria-describedby={errorMsg ? `error-${source}` : undefined}
          className="flex-1 px-4 py-2.5 border border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 rounded-xl text-sm text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent disabled:opacity-50 min-h-[44px]"
        />
        <button
          onClick={handleSubmit}
          disabled={status === 'loading'}
          aria-busy={status === 'loading'}
          className="btn-primary px-6 py-2.5 text-sm"
        >
          {status === 'loading' ? 'Sending...' : buttonText}
        </button>
      </div>
      {errorMsg && (
        <p id={`error-${source}`} className="text-crisis-600 dark:text-crisis-400 text-xs mt-2" role="alert">
          {errorMsg}
        </p>
      )}
      <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-3 leading-relaxed">
        No spam. Unsubscribe anytime. We never sell your data. Your screening responses are never stored or shared.
      </p>
    </div>
  )
}
