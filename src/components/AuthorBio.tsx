/**
 * Author bio component for blog posts.
 * Displays clinical reviewer credentials, name, and dates.
 * Required on every blog post per CLAUDE.md.
 */

import { SITE_AUTHOR } from "@/config/author";
import Link from "next/link";

interface AuthorBioProps {
  publishedDate?: string;
  modifiedDate?: string;
}

export function AuthorBio({ publishedDate, modifiedDate }: AuthorBioProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + "T00:00:00");
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="card p-5 sm:p-6 mb-8 border-sage-200 dark:border-sage-800 bg-sage-50/50 dark:bg-sage-950/20">
      <div className="flex gap-4 items-start">
        <div className="w-12 h-12 rounded-full bg-sage-100 dark:bg-sage-900 flex items-center justify-center flex-shrink-0">
          <span className="text-sage-600 dark:text-sage-400 text-lg">&#x1F9D1;&#x200D;&#x2695;&#xFE0F;</span>
        </div>
        <div>
          <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-1">
            Reviewed by{" "}
            <Link href="/about" className="underline hover:text-sage-600 dark:hover:text-sage-300 transition-colors">
              {SITE_AUTHOR.name}, {SITE_AUTHOR.credential}
            </Link>
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-2">
            {SITE_AUTHOR.credentialFull} with {SITE_AUTHOR.experience} in substance abuse counseling
          </p>
          <p className="text-xs text-neutral-400 dark:text-neutral-500 leading-relaxed mb-2">
            {SITE_AUTHOR.name} has worked in diverse clinical settings including inpatient treatment, outpatient programs,
            and community mental health, specializing in evidence-based screening tools and their appropriate
            clinical application. All content on MindCheck Tools is reviewed for clinical accuracy and
            adherence to best practices in mental health education.
          </p>
          {(publishedDate || modifiedDate) && (
            <div className="flex items-center gap-3 text-xs text-neutral-400 dark:text-neutral-500">
              {publishedDate && (
                <span>
                  Published: <time dateTime={publishedDate}>{formatDate(publishedDate)}</time>
                </span>
              )}
              {modifiedDate && (
                <span>
                  Updated: <time dateTime={modifiedDate}>{formatDate(modifiedDate)}</time>
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
