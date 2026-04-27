import Link from "next/link";

export function ResultDisclaimer() {
  return (
    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mt-3">
      These results are not a diagnosis. They support conversations with
      qualified professionals, not replace them. See our{" "}
      <Link
        href="/methodology"
        className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300"
      >
        methodology
      </Link>
      .
    </p>
  );
}
