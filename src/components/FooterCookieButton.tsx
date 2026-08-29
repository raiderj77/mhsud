import Link from "next/link";

export function FooterCookieButton() {
  return (
    <Link
      href="/cookies"
      className="inline-flex min-h-[44px] min-w-[44px] items-center text-xs text-neutral-500 dark:text-neutral-400 hover:text-sage-600 dark:hover:text-sage-400 transition-colors"
    >
      Privacy &amp; Cookies
    </Link>
  );
}
