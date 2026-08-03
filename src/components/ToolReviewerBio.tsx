import { SITE_AUTHOR } from "@/config/author";
import Link from "next/link";

export function ToolReviewerBio({ lastReviewed = "March 2026" }: { lastReviewed?: string }) {
  return (
    <div className="bg-sage-50/50 dark:bg-sage-950/20 border border-sage-200 dark:border-sage-800 rounded-xl p-4 mt-6">
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
        <strong>
          Reviewed by{" "}
          <Link href="/about/jason-ramirez" className="underline hover:text-sage-600 dark:hover:text-sage-400 transition-colors">
            {SITE_AUTHOR.name}, {SITE_AUTHOR.credential}
          </Link>
        </strong>{" "}
        with {SITE_AUTHOR.experience}.
      </p>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Review covers source alignment, scoring, limitations, and safety language within the reviewer&apos;s stated credential scope; it is not diagnosis or individual care.
      </p>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
        Last reviewed: {lastReviewed}
      </p>
    </div>
  );
}
