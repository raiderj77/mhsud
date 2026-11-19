"use client";

import { useId, useState } from "react";
import Link from "next/link";

/** Empty initial query preserves the full server-rendered list without JavaScript. */
export function DirectoryBrowse({ label, items }: {
  label: string;
  items: { href: string; label: string }[];
}) {
  const id = useId();
  const [query, setQuery] = useState("");
  const shown = items.filter((item) => item.label.toLowerCase().includes(query.trim().toLowerCase()));
  return <div className="mt-3">
    <label htmlFor={id} className="block font-semibold text-slate-800 dark:text-neutral-100 dark:print:!text-slate-800">{label}</label>
    <input id={id} type="search" value={query} onChange={(event) => setQuery(event.target.value)}
      className="mt-2 min-h-[44px] w-full rounded-lg border border-slate-400 p-3 text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-700" />
    <p role="status" className="mt-2 text-sm text-slate-600 dark:text-neutral-400 dark:print:!text-slate-600">{shown.length} of {items.length} shown</p>
    <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
      {shown.map((item) => <li key={item.href}><Link href={item.href}
        className="block min-h-[44px] rounded-lg border border-slate-300 px-3 py-2 text-slate-800 dark:text-neutral-100 dark:print:!text-slate-800 hover:bg-slate-50 dark:hover:text-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-700">{item.label}</Link></li>)}
    </ul>
    {shown.length === 0 && <p className="mt-3 text-slate-800 dark:text-neutral-100 dark:print:!text-slate-800">No matches. Clear the filter to show the full list.</p>}
  </div>;
}
