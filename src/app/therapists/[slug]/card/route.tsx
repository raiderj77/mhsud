import { ImageResponse } from "next/og";
import { getProfileOverlay, profilePhotoUrl } from "@/lib/professionalServer";
import { getTherapist } from "@/lib/therapists";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const provider = getTherapist((await params).slug);
  const profile = provider && await getProfileOverlay(provider.slug);
  if (!provider || !profile) return new Response(null, { status: 404 });

  const url = profilePhotoUrl(profile);
  const photo = url && await fetch(url, { cache: "no-store", signal: AbortSignal.timeout(3000) })
    .then(response => response.ok ? response.arrayBuffer() : null).catch(() => null);
  const image = photo && url
    ? `data:image/${url.endsWith(".png") ? "png" : "jpeg"};base64,${Buffer.from(photo).toString("base64")}`
    : null;
  return new ImageResponse(
    <div style={{ display: "flex", alignItems: "center", gap: 48, padding: 68, width: "100%", height: "100%", background: "#e9f2ed", color: "#173629" }}>
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt="" width="250" height="250" style={{ borderRadius: 24, objectFit: "cover" }} />
      )}
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ fontSize: 30 }}>Listed on MindCheck</div>
        <div style={{ marginTop: 18, fontSize: 54, fontWeight: 700 }}>{provider.name}</div>
        {provider.credential && <div style={{ fontSize: 32 }}>{provider.credential}</div>}
        <div style={{ fontSize: 32 }}>{provider.city}, California</div>
      </div>
    </div>,
    { width: 1200, height: 630, headers: { "Cache-Control": "private, no-store" } }
  );
}
