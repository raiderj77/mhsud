/* eslint-disable @next/next/no-html-link-for-pages -- Native navigation applies noreferrer and skips router prefetch. */

export function ScreeningDirectoryLinks() {
  return (
    <nav aria-label="Provider directories" className="no-print card p-5 mb-5">
      <p className="text-sm text-neutral-700 dark:text-neutral-300">
        Therapist listings are in Los Angeles. The treatment directory lists substance use programs.
      </p>
      <div className="mt-2 flex flex-col items-start gap-x-5 sm:flex-row sm:flex-wrap">
        <a href="/therapists" rel="noreferrer" className="inline-flex min-h-[44px] items-center underline">
          Browse Los Angeles therapists
        </a>
        <a href="/facilities" rel="noreferrer" className="inline-flex min-h-[44px] items-center underline">
          Browse substance use treatment programs
        </a>
      </div>
    </nav>
  );
}
