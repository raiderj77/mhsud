export const MAX_SUBSCRIPTION_BODY_BYTES = 4096;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function parseSubscriptionBody(rawBody) {
  if (new TextEncoder().encode(rawBody).byteLength > MAX_SUBSCRIPTION_BODY_BYTES) {
    return { ok: false, status: 413 };
  }

  let body;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return { ok: false, status: 400 };
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const website = typeof body.website === "string" ? body.website.trim() : "";

  if (body.consent !== true || website || email.length > 254 || !EMAIL_RE.test(email)) {
    return { ok: false, status: 400 };
  }

  return { ok: true, status: 200, email };
}

export function buildEmailProviderPayload(email) {
  return { email, subscribed: true };
}
