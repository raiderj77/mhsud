import type { Facility } from "@/lib/facilities";
import { getDirectoryIndex } from "@/lib/facilities";

/** Counts represent records reporting a field, not confirmed current availability. */
export function DirectoryContext({ facilities, state }: { facilities: Facility[]; state?: string }) {
  const index = getDirectoryIndex();
  const mix = (key: "careTypes" | "settings") => {
    const counts = new Map<string, number>();
    for (const f of facilities) for (const label of new Set(f[key])) counts.set(label, (counts.get(label) ?? 0) + 1);
    return [...counts].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  };
  const matched = facilities.filter(f => f.license).length;
  return <section className="mt-6 rounded-lg border border-slate-300 p-4 text-slate-800">
    <h2 className="text-xl font-semibold">About these directory records</h2>
    <p className="mt-2">{facilities.length.toLocaleString()} records across {new Set(facilities.map(f => `${f.state}/${f.citySlug}`)).size.toLocaleString()} cities. Dataset generated {index.generatedAt}. Categories can overlap; counts describe reported services, not current openings.</p>
    {(["careTypes", "settings"] as const).map(key => <div className="mt-3" key={key}><h3 className="font-semibold">{key === "careTypes" ? "Types of care" : "Service settings"}</h3><ul className="list-disc pl-5">{mix(key).map(([label, count]) => <li key={label}>{label}: {count.toLocaleString()}</li>)}</ul></div>)}
    <p className="mt-3">Records with a reported field: {(["payment", "agesServed", "languages"] as const).map(key => `${key === "agesServed" ? "ages served" : key} ${facilities.length ? Math.round(100 * facilities.filter(f => f[key].length > 0).length / facilities.length) : 0}%`).join("; ")}. Field presence does not establish eligibility or availability.</p>
    {state === "CA" ? <p className="mt-3">California DHCS roster attachments: {matched}; no attachment: {facilities.length - matched}. No match is not proof of being unlicensed; an attachment does not establish current licensure or quality of care.</p> : <p className="mt-3">{state ? "These records are SAMHSA-only; this state's licensing roster has not been cross-checked in this dataset." : "SAMHSA is the national source; California is the only state licensing roster integrated in this dataset."}</p>}
    <p className="mt-3">Source retrieval dates: {index.sources.filter(s => s.retrievedAt).map(s => `${s.label}: ${s.retrievedAt}`).join("; ")}. This is a dated snapshot, not a live registry. Addresses, phones and services can change; confirm details directly with the program.</p>
  </section>;
}
