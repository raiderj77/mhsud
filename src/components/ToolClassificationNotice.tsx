"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getToolClassification } from "@/lib/toolClassifications";

const LABEL_STYLES = {
  "Published Screener": "border-sage-300 bg-sage-50 text-sage-800 dark:border-sage-800 dark:bg-sage-950/30 dark:text-sage-200",
  "Original Educational Tool": "border-sky-300 bg-sky-50 text-sky-800 dark:border-sky-800 dark:bg-sky-950/30 dark:text-sky-200",
  "Information Only": "border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-200",
} as const;

export function ToolClassificationNotice() {
  const pathname = usePathname();
  const record = getToolClassification(pathname);
  if (!record) return null;

  return (
    <aside
      aria-label={`${record.name} classification and limits`}
      className="mx-auto mt-5 w-[calc(100%-2rem)] max-w-5xl rounded-xl border border-sand-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-night-800"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${LABEL_STYLES[record.classification]}`}>
          {record.classification}
        </span>
        <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">{record.name}</span>
        {record.manualReviewRequired && (
          <span className="text-xs text-neutral-500 dark:text-neutral-400">Manual review remains required</span>
        )}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
        {record.validationStatus} {record.diagnosticLimits}
      </p>
      <details className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
        <summary className="inline-flex min-h-[44px] cursor-pointer items-center font-semibold text-sage-700 hover:underline dark:text-sage-400">
          View source, scoring, privacy, and review details
        </summary>
        <dl className="mt-2 grid gap-3 rounded-lg bg-sand-50 p-4 dark:bg-night-900 sm:grid-cols-2">
          {[
            ["Intended audience", record.intendedAudience],
            ["Purpose", record.purpose],
            ["Source and ownership", record.sourceOwnership],
            ["Rights status", record.rightsStatus],
            ["Scoring source", record.scoringSource],
            ["Scoring and cutoffs", record.scoringCutoffStatus],
            ["Crisis relevance", record.crisisRelevance],
            ["Review status", record.clinicalReviewStatus],
            ["Privacy behavior", record.privacyBehavior],
            ["Optional analytics", record.analyticsPermitted ? "Permitted" : "Not permitted"],
            ["Advertising", record.adsPermitted ? "Permitted" : "Not permitted"],
            ["Local print", record.printAvailable ? "Available" : "No dedicated print action"],
            ["Browser-local save", record.localSaveAvailable ? "Available" : "Not available"],
            ["Server export", record.serverExportAvailable ? "Available" : "Not available"],
            ["Last verified", record.lastVerifiedDate],
          ].map(([term, description]) => (
            <div key={term}>
              <dt className="font-semibold text-neutral-900 dark:text-neutral-100">{term}</dt>
              <dd className="mt-1 leading-relaxed">{description}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
          {[...record.citationLinks, ...record.relatedGuideLinks].map((link) =>
            link.href.startsWith("/") ? (
              <Link key={`${link.label}-${link.href}`} href={link.href} className="font-medium text-sage-700 hover:underline dark:text-sage-400">
                {link.label}
              </Link>
            ) : (
              <a key={`${link.label}-${link.href}`} href={link.href} target="_blank" rel="noopener noreferrer" className="font-medium text-sage-700 hover:underline dark:text-sage-400">
                {link.label}
              </a>
            ),
          )}
        </div>
      </details>
    </aside>
  );
}
