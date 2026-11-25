import { NextResponse } from "next/server";
import { isProfessionalBackendConfigured, professionalAuth } from "@/lib/professionalServer";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  if (code && isProfessionalBackendConfigured()) {
    try {
      const client = await professionalAuth();
      const { error } = await client.auth.exchangeCodeForSession(code);
      if (!error) return NextResponse.redirect(new URL("/therapists/dashboard", url));
    } catch {
      // The user can request a fresh link.
    }
  }
  return NextResponse.redirect(new URL("/therapists/sign-in", url));
}
