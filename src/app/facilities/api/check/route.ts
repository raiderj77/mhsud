import { NextResponse } from "next/server";
import { getDirectoryIndex, getStateFacilities } from "@/lib/facilities";
import { computeFindings, normName } from "@/lib/facilitiesCore.mjs";

export const dynamic = "force-dynamic";

/**
 * Free listing check. Inputs are a business's public name/city/state only.
 * This endpoint never accepts or stores personal information: there are no
 * consumer fields by construction, and unknown query parameters are ignored.
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const name = (url.searchParams.get("name") ?? "").trim();
  const state = (url.searchParams.get("state") ?? "").trim().toUpperCase();
  const city = (url.searchParams.get("city") ?? "").trim();

  if (!name || !state) {
    return NextResponse.json(
      { error: "Provide the program name and state." },
      { status: 400 },
    );
  }
  const facilities = await getStateFacilities(state);
  if (!facilities) {
    return NextResponse.json({ error: `Unknown state: ${state}` }, { status: 400 });
  }
  const needle = normName(name);
  const cityNeedle = city ? normName(city) : "";
  const matches = facilities
    .filter((f) => {
      const hay = normName(f.name);
      const nameHit = hay.includes(needle) || needle.includes(hay);
      const cityHit = !cityNeedle || normName(f.city) === cityNeedle;
      return nameHit && cityHit;
    })
    .slice(0, 10);

  const index = getDirectoryIndex();
  return NextResponse.json({
    retrievedAt: index.generatedAt,
    matchCount: matches.length,
    results: matches.map((f) => ({
      name: f.name,
      city: f.city,
      state: f.state,
      zip: f.zip,
      phone: f.phone,
      path: f.path,
      hasLicenseMatch: Boolean(f.license),
      findings: computeFindings(f, { retrievedAt: index.generatedAt }),
    })),
  });
}
