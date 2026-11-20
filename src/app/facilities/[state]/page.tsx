import { DirectoryBrowse } from "@/components/DirectoryBrowse";
import { DirectoryContext } from "@/components/DirectoryContext";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { getDirectoryIndex, getStateFacilities } from "@/lib/facilities";

interface Params {
  params: Promise<{ state: string }>;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { state } = await params;
  const summary = getDirectoryIndex().states.find((s) => s.code === state.toUpperCase());
  if (!summary) return {};
  return {
    ...createMetadata({
      path: `/facilities/${state.toLowerCase()}`,
      title: `Substance Use Treatment Programs in ${summary.name}`,
      description: `${summary.facilityCount} substance use treatment programs listed in ${summary.name} from the SAMHSA National Directory, with licensing cross-checks where state roster data is integrated.`,
    }),
    robots: { index: true, follow: true },
  };
}

export default async function StatePage({ params }: Params) {
  const { state } = await params;
  const index = getDirectoryIndex();
  const summary = index.states.find((s) => s.code === state.toUpperCase());
  if (!summary) notFound();
  const facilities = (await getStateFacilities(summary.code)) ?? [];
  const licensed = facilities.filter((f) => f.license).length;

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-600 dark:text-neutral-400 dark:print:!text-slate-600">
        <Link className="underline" href="/facilities">
          Directory
        </Link>{" "}
        / {summary.name}
      </nav>
      <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-neutral-50 dark:print:!text-slate-900">
        Substance use treatment programs in {summary.name}
      </h1>
      <h2 className="mt-8 text-2xl font-semibold text-slate-900 dark:text-neutral-50 dark:print:!text-slate-900">Cities</h2>
      <DirectoryBrowse label="Filter cities" items={summary.cities.map((c) => ({ href: `/facilities/${summary.code.toLowerCase()}/${c.slug}`, label: `${c.name} — ${c.count} program${c.count === 1 ? "" : "s"}` }))} />
      <p className="mt-4 text-slate-800 dark:text-neutral-100 dark:print:!text-slate-800">
        {summary.facilityCount.toLocaleString()} programs listed from the SAMHSA National
        Directory (2024 edition, retrieved {index.generatedAt}).
        {summary.code === "CA" &&
          ` California licensing records (DHCS roster) are integrated: ${licensed.toLocaleString()} of these programs matched a state license record in the data we hold.`}
        {summary.code !== "CA" &&
          " This dataset contains SAMHSA records only for this state; its licensing roster has not been cross-checked."}
      </p>
      <DirectoryContext facilities={facilities} state={summary.code} />

      <p className="mt-8 text-slate-800 dark:text-neutral-100 dark:print:!text-slate-800">
        Run a program in {summary.name}?{" "}
        <Link className="underline" href="/facilities/check">
          Check your listing free
        </Link>{" "}
        — see exactly what the federal directory says about your program.
      </p>
    </div>
  );
}
