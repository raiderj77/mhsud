import { NextRequest, NextResponse } from "next/server";

const INDEXNOW_KEY = process.env.INDEXNOW_API_KEY;
const HOST = "mindchecktools.com";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

export async function POST(req: NextRequest) {
  if (!INDEXNOW_KEY) {
    return NextResponse.json(
      { error: "INDEXNOW_API_KEY not configured" },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const urlList: string[] = body.urlList;

    if (!Array.isArray(urlList) || urlList.length === 0) {
      return NextResponse.json(
        { error: "urlList must be a non-empty array of URLs" },
        { status: 400 }
      );
    }

    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: KEY_LOCATION,
        urlList,
      }),
    });

    if (response.ok || response.status === 202) {
      return NextResponse.json({
        success: true,
        submitted: urlList.length,
        status: response.status,
      });
    }

    const errorText = await response.text();
    return NextResponse.json(
      { error: "IndexNow API error", status: response.status, detail: errorText },
      { status: response.status }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to submit to IndexNow", detail: String(err) },
      { status: 500 }
    );
  }
}
