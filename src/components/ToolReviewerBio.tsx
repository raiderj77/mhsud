import { SITE_AUTHOR } from "@/config/author";
import Link from "next/link";

export function ToolReviewerBio() {
  return (
    <div className="bg-sage-50/50 dark:bg-sage-950/20 border border-sage-200 dark:border-sage-800 rounded-xl p-4 mt-6">
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
        <strong>
          Reviewed by{" "}
          <Link href="/about" className="underline hover:text-sage-600 dark:hover:text-sage-400 transition-colors">
            {SITE_AUTHOR.name}, {SITE_AUTHOR.credential}
          </Link>
        </strong>{" "}
        with {SITE_AUTHOR.experience} in substance abuse counseling.
      </p>
      <p className="text-xs text-neutral-400 dark:text-neutral-500">
        Last reviewed: March 2026
      </p>
    </div>
  );
}
