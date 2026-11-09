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
      <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
        <Link className="underline" href="/facilities">
          Directory
        </Link>{" "}
        / {summary.name}
      </nav>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">
        Substance use treatment programs in {summary.name}
      </h1>
      <p className="mt-4 text-slate-800">
        {summary.facilityCount.toLocaleString()} programs listed from the SAMHSA National
        Directory (2024 edition, retrieved {index.generatedAt}).
        {summary.code === "CA" &&
          ` California licensing records (DHCS roster) are integrated: ${licensed.toLocaleString()} of these programs matched a state license record in the data we hold.`}
        {summary.code !== "CA" &&
          " This dataset contains SAMHSA records only for this state; its licensing roster has not been cross-checked."}
      </p>
      <DirectoryContext facilities={facilities} state={summary.code} />
      <h2 className="mt-8 text-2xl font-semibold text-slate-900">Cities</h2>
      <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
        {summary.cities.map((c) => (
          <li key={c.slug}>
            <Link
              className="block rounded-lg border border-slate-300 px-3 py-2 text-slate-800 hover:bg-slate-50"
              href={`/facilities/${summary.code.toLowerCase()}/${c.slug}`}
            >
              {c.name} — {c.count} program{c.count === 1 ? "" : "s"}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-slate-800">
        Run a program in {summary.name}?{" "}
        <Link className="underline" href="/facilities/check">
          Check your listing free
        </Link>{" "}
        — see exactly what the federal directory says about your program.
      </p>
    </div>
  );
}
