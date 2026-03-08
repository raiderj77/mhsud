import { SITE_AUTHOR } from "@/config/author";
import Link from "next/link";

interface AuthorBylineProps {
  publishedDate: string;
  modifiedDate?: string;
}

export function AuthorByline({ publishedDate, modifiedDate }: AuthorBylineProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + "T00:00:00");
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="border-l-4 border-sage-200 dark:border-sage-800 pl-4 my-6">
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Reviewed by{" "}
          <Link href="/about" className="underline hover:text-sage-600 dark:hover:text-sage-400 transition-colors">
            {SITE_AUTHOR.name}, {SITE_AUTHOR.credential}
          </Link>
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          {SITE_AUTHOR.credentialFull} &middot; {SITE_AUTHOR.experience}
        </p>
        <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 mt-1">
          <span>
            Published: <time dateTime={publishedDate}>{formatDate(publishedDate)}</time>
          </span>
          {modifiedDate && (
            <span>
              Updated: <time dateTime={modifiedDate}>{formatDate(modifiedDate)}</time>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
