import { randomUUID } from "node:crypto";
import { getTherapist } from "@/lib/therapists";
import { validateClaim } from "@/lib/therapistsCore.mjs";

import { licenseMatchesCredential } from "@/lib/professionalCore.mjs";
import { insertClaim } from "@/lib/professionalServer";

const headers = {
  "Cache-Control": "private, no-store",
  "Referrer-Policy": "no-referrer",
  "X-Robots-Tag": "noindex, nofollow",
};

export async function POST(request: Request) {
  if (request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json") {
    return Response.json({ error: "Request body must be JSON." }, { status: 415, headers });
  }

  const body: unknown = await request.json().catch(() => null);
  const claim = validateClaim(body);
  if (!claim) {
    return Response.json({ error: "A listing and a valid work email are required. Other fields are not accepted." }, { status: 400, headers });
  }
  const listing = getTherapist(claim.slug);
  if (!listing) {
    return Response.json({ error: "Listing not found." }, { status: 404, headers });
  }

  const reference = `MCT-T-${randomUUID().toUpperCase()}`;
  await insertClaim({
    reference,
    slug: claim.slug,
    npi: listing.npi,
    work_email: claim.workEmail.toLowerCase(),
    license_number: claim.licenseNumber,
    license_match: licenseMatchesCredential(listing.credential, claim.licenseNumber),
  });

  return Response.json({
    reference,
    status: "pending",
    eligibility: "manual-review",
  }, { headers });
}
