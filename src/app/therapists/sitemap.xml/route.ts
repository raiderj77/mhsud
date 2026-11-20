import { therapistSitemap } from "@/lib/therapistSitemap";

export function GET(request: Request) {
  const part = new URL(request.url).searchParams.get("part");
  if (part === null) return therapistSitemap();
  if (!/^[1-9]\d*$/.test(part)) return new Response(null, { status: 404 });
  return therapistSitemap(Number(part));
}
