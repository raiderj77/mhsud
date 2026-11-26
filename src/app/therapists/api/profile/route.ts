import { validateProfileEdit } from "@/lib/professionalCore.mjs";
import { getOverlayOwner, getSessionUser, updateOverlay } from "@/lib/professionalServer";

export async function POST(request: Request) {
  const user = await getSessionUser();
  if (!user?.email) return Response.json({ error: "Sign in to edit your listing." }, { status: 401 });

  if (request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json") {
    return Response.json({ error: "Check the listing fields and try again." }, { status: 400 });
  }

  const body = await request.json().catch(() => null);
  const confirm = body?.confirmDetails === true && Object.keys(body).length === 2;
  const edit = validateProfileEdit(confirm ? { slug: body.slug } : body);
  if (!edit) return Response.json({ error: "Check the listing fields and try again." }, { status: 400 });

  const { slug, sessionFee, acceptingNew, years_in_practice, ...fields } = edit;
  const owner = await getOverlayOwner(slug);
  if (!owner) return Response.json({ error: "Listing not found." }, { status: 404 });

  const email = user.email.toLowerCase();
  if (owner.owner_email !== email) return Response.json({ error: "This listing belongs to another account." }, { status: 403 });
  if (fields.public_email?.toLowerCase() === email) {
    return Response.json({ error: "Use a public email address different from your sign-in email." }, { status: 400 });
  }

  const now = new Date().toISOString();
  const saved = await updateOverlay(slug, {
    ...fields,
    ...(confirm ? { fee_confirmed_at: now, availability_confirmed_at: now } : {}),
    ...(years_in_practice !== undefined ? { years_in_practice: years_in_practice === "" ? null : years_in_practice } : {}),
    ...(sessionFee !== undefined ? { session_fee: sessionFee } : {}),
    ...(acceptingNew !== undefined ? { accepting_new: acceptingNew } : {}),
  }, email);
  if (!saved) return Response.json({ error: "The listing could not be saved." }, { status: 503 });
  return Response.json(saved);
}
