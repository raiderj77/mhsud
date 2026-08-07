import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/metadata";

const SECURITY_TXT = [
  `Contact: ${SITE_URL}/contact`,
  `Expires: 2027-08-06T00:00:00.000Z`,
  `Canonical: ${SITE_URL}/.well-known/security.txt`,
  "Preferred-Languages: en",
  "",
].join("\n");

export async function GET() {
  return new NextResponse(SECURITY_TXT, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
