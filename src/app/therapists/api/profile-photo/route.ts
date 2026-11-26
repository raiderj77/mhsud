import { PROFILE_SLUG } from "@/lib/professionalCore.mjs";
import { getSessionUser, replaceProfilePhoto } from "@/lib/professionalServer";

const maxSize = 2 * 1024 * 1024;

export async function POST(request: Request) {
  const user = await getSessionUser();
  if (!user?.email) return new Response(null, { status: 401 });
  if (!request.headers.get("content-type")?.startsWith("multipart/form-data;")) {
    return new Response(null, { status: 415 });
  }
  const length = Number(request.headers.get("content-length"));
  if (length <= 0 || length > maxSize + 8192) return new Response(null, { status: 413 });

  const form = await request.formData().catch(() => null);
  const slug = form?.get("slug");
  const photo = form?.get("photo");
  if (typeof slug !== "string" || !PROFILE_SLUG.test(slug) ||
      !photo || typeof photo === "string" || !photo.size || photo.size > maxSize) {
    return new Response(null, { status: 400 });
  }

  const bytes = await photo.arrayBuffer();
  const header = new Uint8Array(bytes, 0, Math.min(bytes.byteLength, 8));
  const png = [137, 80, 78, 71, 13, 10, 26, 10];
  const jpg = [255, 216, 255];
  const format = photo.type === "image/png" && png.every((byte, i) => header[i] === byte) ? "png" :
    photo.type === "image/jpeg" && jpg.every((byte, i) => header[i] === byte) ? "jpg" : null;
  if (!format) return new Response(null, { status: 415 });
  const path = await replaceProfilePhoto(slug, user.email.toLowerCase(), bytes, format);
  return path ? Response.json({ path }) : new Response(null, { status: 503 });
}
