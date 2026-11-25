import { validateProfileEdit } from "@/lib/professionalCore.mjs";
import { getOverlayOwner, getSessionUser, updateOverlay } from "@/lib/professionalServer";

export async function POST(request: Request) {
  const user = await getSessionUser();
  if (!user?.email) return Response.json({ error: "Sign in to edit your listing." }, { status: 401 });

  if (request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json") {
    return Response.json({ error: "Check the listing fields and try again." }, { status: 400 });
  }

  const edit = validateProfileEdit(await request.json().catch(() => null));
  if (!edit) return Response.json({ error: "Check the listing fields and try again." }, { status: 400 });

  const { slug, sessionFee, acceptingNew, ...fields } = edit;
  const owner = await getOverlayOwner(slug);
  if (!owner) return Response.json({ error: "Listing not found." }, { status: 404 });

  const email = user.email.toLowerCase();
  if (owner.owner_email !== email) return Response.json({ error: "This listing belongs to another account." }, { status: 403 });

  const saved = await updateOverlay(slug, {
    ...fields,
    ...(sessionFee !== undefined ? { session_fee: sessionFee } : {}),
    ...(acceptingNew !== undefined ? { accepting_new: acceptingNew } : {}),
  }, email);
  if (!saved) return Response.json({ error: "The listing could not be saved." }, { status: 503 });
  return Response.json(saved);
}
