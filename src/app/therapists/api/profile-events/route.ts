import { PROFILE_EVENTS, PROFILE_SLUG } from "@/lib/professionalCore.mjs";
import { countProfileEvent, getProfileStats, getSessionUser, isProfessionalBackendConfigured } from "@/lib/professionalServer";

export async function GET(request: Request) {
  const user = await getSessionUser();
  if (!user?.email) return new Response(null, { status: 401 });
  const slug = new URL(request.url).searchParams.get("slug");
  if (!slug || !PROFILE_SLUG.test(slug)) return new Response(null, { status: 400 });
  const stats = await getProfileStats(slug, user.email.toLowerCase());
  return stats ? Response.json(stats) : new Response(null, { status: 404 });
}

export async function POST(request: Request) {
  if (!isProfessionalBackendConfigured()) return new Response(null, { status: 404 });
  if (request.headers.get("content-type") !== "application/json" ||
      request.headers.get("sec-fetch-site") !== "same-origin" ||
      request.headers.get("sec-gpc") === "1") return new Response(null, { status: 403 });

  const length = Number(request.headers.get("content-length"));
  if (length <= 0 || length > 512) return new Response(null, { status: 400 });
  const body = await request.json().catch(() => null);
  if (!body || Object.keys(body).length !== 2 || typeof body.slug !== "string" ||
      !PROFILE_SLUG.test(body.slug) || !PROFILE_EVENTS.includes(body.event)) {
    return new Response(null, { status: 400 });
  }
  const recorded = await countProfileEvent(body.slug, body.event);
  return new Response(null, { status: recorded ? 204 : 503 });
}
