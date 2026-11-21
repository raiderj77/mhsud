import Link from "next/link";

const linkClass = "inline-flex min-h-[44px] items-center underline underline-offset-2";

export function TherapistBreadcrumbs({ name }: { name?: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-2 text-sm text-neutral-700">
      <ol className="flex flex-wrap items-baseline gap-x-2">
        <li><Link href="/" className={linkClass}>Home</Link></li>
        <li className="flex items-baseline gap-2">
          <span aria-hidden="true">/</span>
          {name ? <Link href="/therapists" className={linkClass}>Therapists</Link> : <span aria-current="page">Therapists</span>}
        </li>
        {name && (
          <li className="flex min-w-0 gap-2">
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="min-w-0 break-words">{name}</span>
          </li>
        )}
      </ol>
    </nav>
  );
}
