import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { registryProviders, therapistSnapshot } from "@/lib/therapists";
import { LICENSE_NOTE, REGISTRY_URL, SPECIALTIES, therapistPath } from "@/lib/therapistsCore.mjs";

const PAGE_SIZE = 30;
const cities = [...new Set(registryProviders.map(provider => provider.city))];
const specialties = SPECIALTIES.map(item => item.label);

export const metadata = createMetadata({
  path: "/therapists",
  title: "California Therapist Directory",
  description: "Browse California therapist registry listings by practice city and provider specialty.",
  robots: { index: registryProviders.length > 0, follow: true },
});

type Search = { city?: string; specialty?: string; page?: string };

export default async function TherapistsPage({ searchParams }: { searchParams: Promise<Search> }) {
  const search = await searchParams;
  const city = cities.find(item => item === search.city) ?? "";
  const specialty = specialties.find(item => item === search.specialty) ?? "";
  const matches = registryProviders.filter(provider =>
    (!city || provider.city === city) && (!specialty || provider.specialties.includes(specialty))
  );
  const pageCount = Math.max(1, Math.ceil(matches.length / PAGE_SIZE));
  const requested = Number(search.page);
  const page = Number.isSafeInteger(requested) ? Math.max(1, Math.min(requested, pageCount)) : 1;
  const visible = matches.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const selectClass = "mt-1 block min-h-[44px] w-full rounded-lg border border-neutral-400 bg-white px-3 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50";

  function pageLink(number: number) {
    const params = new URLSearchParams({ page: String(number) });
    if (city) params.set("city", city);
    if (specialty) params.set("specialty", specialty);
    return `/therapists?${params}#listings`;
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 text-neutral-900 dark:text-neutral-50">
      <h1 className="text-3xl font-bold">California therapist directory</h1>
      <p className="mt-3 text-neutral-700 dark:text-neutral-300">
        Browse individual provider records from the CMS National Plan and Provider Enumeration System.
        Specialty labels describe registry classifications. Check current license status and services
        before making an appointment.
      </p>
      <p className="mt-3 text-neutral-700 dark:text-neutral-300">{LICENSE_NOTE}</p>
      {therapistSnapshot.generatedAt && (
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          <a href={REGISTRY_URL} rel="noreferrer" className="underline">Source registry</a>
          {" · "}Data retrieved {therapistSnapshot.generatedAt}
        </p>
      )}
      {cities.length > 0 && (
        <form action="/therapists" method="get" className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="block font-medium">
            Practice city
            <select name="city" defaultValue={city} className={selectClass}>
              <option value="">All cities</option>
              {cities.map(item => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label className="block font-medium">
            Specialty
            <select name="specialty" defaultValue={specialty} className={selectClass}>
              <option value="">All specialties</option>
              {specialties.map(item => <option key={item}>{item}</option>)}
            </select>
          </label>
          <div className="flex flex-wrap items-center gap-3 sm:col-span-2">
            <button type="submit" className="min-h-[44px] rounded-lg bg-neutral-900 px-4 text-white dark:bg-neutral-100 dark:text-neutral-900">
              Apply filters
            </button>
            <Link href="/therapists" className="inline-flex min-h-[44px] items-center px-2 underline">Clear filters</Link>
          </div>
        </form>
      )}
      <section className="mt-8" aria-labelledby="listings">
        <h2 id="listings" className="text-xl font-semibold">Provider listings</h2>
        {!cities.length ? <p className="mt-2">The registry snapshot has not been loaded yet.</p> : (
          <p className="mt-2">{matches.length ? `${matches.length.toLocaleString()} listings. Page ${page} of ${pageCount}.` : "No listings match these filters."}</p>
        )}
        {visible.length > 0 && (
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {visible.map(provider => (
              <li key={provider.npi}>
                <Link prefetch={false} href={therapistPath(provider.slug)} className="block min-h-[44px] rounded-lg border border-neutral-400 p-3">
                  <span className="block font-semibold underline">{provider.name}</span>
                  <span className="block text-sm text-neutral-700 dark:text-neutral-300">
                    {provider.city}, CA · {provider.specialties.join(", ")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
        {pageCount > 1 && (
          <nav aria-label="Provider listing pages" className="mt-4 flex flex-wrap gap-4">
            {page > 1 && <Link href={pageLink(page - 1)} className="inline-flex min-h-[44px] items-center underline">Previous page</Link>}
            {page < pageCount && <Link href={pageLink(page + 1)} className="inline-flex min-h-[44px] items-center underline">Next page</Link>}
          </nav>
        )}
      </section>
      <Link href="/therapists/pricing" className="mt-6 inline-flex min-h-[44px] items-center underline">Listing services and pricing</Link>
    </div>
  );
}
