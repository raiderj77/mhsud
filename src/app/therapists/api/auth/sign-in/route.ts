import { isValidWorkEmail } from "@/lib/facilitiesCore.mjs";
import { SITE_URL } from "@/lib/metadata";
import { isProfessionalBackendConfigured, professionalAuth } from "@/lib/professionalServer";

export async function POST(request: Request) {
  if (!isProfessionalBackendConfigured()) {
    return Response.json({ error: "Professional sign-in opens shortly." }, { status: 503 });
  }

  const isJson = request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() === "application/json";
  const body = isJson ? await request.json().catch(() => null) : null;
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!isValidWorkEmail(email)) {
    return Response.json({ error: "Enter a valid email." }, { status: 400 });
  }

  try {
    const client = await professionalAuth();
    await client.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${SITE_URL}/therapists/auth/callback` },
    });
  } catch {
    // The response is deliberately identical for all valid email addresses.
  }
  return Response.json({ message: "If a sign-in link can be sent, check your email." });
}
