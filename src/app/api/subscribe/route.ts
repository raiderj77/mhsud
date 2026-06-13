import { NextRequest, NextResponse } from "next/server";

const LOOPS_KEY = process.env.LOOPS_API_KEY;
const LOOPS_ENDPOINT = "https://app.loops.so/api/v1/contacts/create";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  if (!LOOPS_KEY) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  let email: string;
  let source: string;

  try {
    const body = await req.json();
    email = typeof body.email === "string" ? body.email.trim() : "";
    source = typeof body.source === "string" ? body.source.trim() : "unknown";
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  try {
    const res = await fetch(LOOPS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOOPS_KEY}`,
      },
      body: JSON.stringify({ email, source, subscribed: true, userGroup: source }),
    });

    if (res.ok || res.status === 409) {
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ ok: false }, { status: res.status });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
