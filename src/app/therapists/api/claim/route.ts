import { randomUUID } from "node:crypto";
import { getTherapist } from "@/lib/therapists";
import { validateClaim } from "@/lib/therapistsCore.mjs";

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
  if (!getTherapist(claim.slug)) {
    return Response.json({ error: "Listing not found." }, { status: 404, headers });
  }

  return Response.json({
    reference: `MCT-T-${randomUUID().toUpperCase()}`,
    status: "pending",
    eligibility: "manual-review",
  }, { headers });
}
