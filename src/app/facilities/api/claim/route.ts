import { NextResponse } from "next/server";
import { getCaLicenses, getFacility, type Facility } from "@/lib/facilities";
import { evaluateSoberEligibility, evaluateSudEligibility, isValidWorkEmail } from "@/lib/facilitiesCore.mjs";

export const dynamic = "force-dynamic";

/**
 * Claim intake assessment. Business-contact fields only — the allowlist is
 * enforced: any other field is rejected, so consumer personal information
 * cannot be submitted through this endpoint by construction.
 *
 * v1 storage note (stated on the claim page as well): this endpoint assesses
 * eligibility and issues a claim reference. It does not persist anything;
 * the claim is recorded when the operator sends the claim email carrying
 * the reference. No database of claims exists in v1, and none is implied.
 */
const ALLOWED_FIELDS = new Set([
  "segment",
  "operatorName",
  "operatorRole",
  "workEmail",
  "workPhone",
  "facilityPath",
  "licenseNumber",
  "narrCertified",
  "affiliateName",
]);

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Request body must be JSON." }, { status: 400 });
  }
  for (const key of Object.keys(body)) {
    if (!ALLOWED_FIELDS.has(key)) {
      return NextResponse.json(
        {
          error: `Field not accepted: ${key}. Claims collect business contact details only — never personal information about people seeking treatment.`,
        },
        { status: 400 },
      );
    }
  }
  const segment = body.segment === "sober" ? "sober" : body.segment === "sud" ? "sud" : null;
  const operatorName = String(body.operatorName ?? "").trim();
  const operatorRole = String(body.operatorRole ?? "").trim();
  const workEmail = String(body.workEmail ?? "").trim();
  if (!segment || !operatorName || !operatorRole || !isValidWorkEmail(workEmail)) {
    return NextResponse.json(
      { error: "Segment, your name, your role, and a valid work email are required." },
      { status: 400 },
    );
  }

  // Eligibility is judged against the current date, never the data-build
  // date: a roster expiration is in the past relative to today, not
  // relative to whenever the directory snapshot happened to be generated.
  const today = new Date().toISOString().slice(0, 10);
  let result: { status: string; reasons: string[] };
  let facilityName: string | null = null;

  if (segment === "sober") {
    result = evaluateSoberEligibility({
      narrCertified: body.narrCertified === true,
      affiliateName: String(body.affiliateName ?? ""),
    });
  } else {
    let facility: Facility | null = null;
    const path = String(body.facilityPath ?? "");
    const m = /^\/facilities\/([a-z]{2})\/([^/]+)\/([^/]+)$/.exec(path);
    if (m) {
      facility = await getFacility(m[1], m[2], m[3]);
      facilityName = facility?.name ?? null;
    }
    const licenseNumber = String(body.licenseNumber ?? "").trim();
    const caLicenses = licenseNumber || facility?.state === "CA" ? await getCaLicenses() : [];
    result = evaluateSudEligibility({ facility, licenseNumber, caLicenses, today });
  }

  const reference = `MCT-${Date.now().toString(36).toUpperCase()}`;
  return NextResponse.json({
    reference,
    segment,
    facilityName,
    status: "pending",
    eligibility: result.status,
    reasons: result.reasons,
    nextStep:
      "Send the claim email from this page so the claim is recorded with this reference. Claims are reviewed within 2 business days. Paid services never start before the license or certification check passes.",
  });
}
