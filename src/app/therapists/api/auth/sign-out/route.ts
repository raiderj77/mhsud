import { isProfessionalBackendConfigured, professionalAuth } from "@/lib/professionalServer";

export async function POST(request: Request) {
  if (request.headers.get("sec-fetch-site") === "cross-site") {
    return Response.json({ error: "Sign out from the dashboard." }, { status: 403 });
  }
  if (isProfessionalBackendConfigured()) {
    try {
      const client = await professionalAuth();
      const { error } = await client.auth.signOut({ scope: "local" });
      if (error) return Response.json({ error: "Sign-out could not be completed." }, { status: 503 });
    } catch {
      return Response.json({ error: "Sign-out could not be completed." }, { status: 503 });
    }
  }
  return Response.json({ ok: true });
}
