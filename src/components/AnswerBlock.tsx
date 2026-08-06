interface AnswerBlockProps {
  what: string
  who: string
  bottomLine: string
  lastUpdated: string
}

export default function AnswerBlock({ what, who, bottomLine, lastUpdated }: AnswerBlockProps) {
  return (
    <section
      aria-labelledby="quick-answer-label"
      className="answer-block border-l-4 border-sage-600 bg-neutral-50 dark:bg-neutral-800/50 dark:border-sage-400 rounded-r-lg p-5 mb-8"
    >
      <p
        id="quick-answer-label"
        className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-4"
      >
        Quick answer
      </p>
      <dl className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
        <div>
          <dt className="block text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-1">
            What is this?
          </dt>
          <dd className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 m-0">{what}</dd>
        </div>
        <div>
          <dt className="block text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-1">
            Who is it for?
          </dt>
          <dd className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 m-0">{who}</dd>
        </div>
        <div>
          <dt className="block text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-1">
            Bottom line
          </dt>
          <dd className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 m-0">{bottomLine}</dd>
        </div>
      </dl>
      <time
        dateTime={lastUpdated}
        className="block text-right text-xs text-neutral-600 dark:text-neutral-300"
      >
        Last updated:{' '}
        {new Date(lastUpdated).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          // Date-only review values represent a calendar date, not an instant.
          // UTC prevents western time zones from displaying the previous day.
          timeZone: 'UTC',
        })}
      </time>
    </section>
  )
}
