import { NextRequest, NextResponse } from "next/server";
import {
  buildEmailProviderPayload,
  MAX_SUBSCRIPTION_BODY_BYTES,
  parseSubscriptionBody,
} from "@/lib/subscription.mjs";

const LOOPS_KEY = process.env.LOOPS_API_KEY;
const LOOPS_ENDPOINT = "https://app.loops.so/api/v1/contacts/create";

export async function POST(req: NextRequest) {
  if (req.headers.get("content-type")?.split(";", 1)[0].trim() !== "application/json") {
    return NextResponse.json({ ok: false }, { status: 415 });
  }

  const declaredLength = Number(req.headers.get("content-length") ?? "0");
  if (Number.isFinite(declaredLength) && declaredLength > MAX_SUBSCRIPTION_BODY_BYTES) {
    return NextResponse.json({ ok: false }, { status: 413 });
  }

  try {
    const rawBody = await req.text();
    const parsed = parseSubscriptionBody(rawBody);
    if (!parsed.ok) {
      return NextResponse.json({ ok: false }, { status: parsed.status });
    }

    if (!LOOPS_KEY) {
      return NextResponse.json({ ok: false }, { status: 503 });
    }

    const res = await fetch(LOOPS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOOPS_KEY}`,
      },
      body: JSON.stringify(buildEmailProviderPayload(parsed.email)),
    });

    if (res.ok || res.status === 409) {
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ ok: false }, { status: 502 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
