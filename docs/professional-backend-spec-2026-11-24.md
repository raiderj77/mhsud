# MindCheck Therapist Professional Backend: Build Spec (2026-11-24)

## The order

Jason Ramirez, 2026-11-24 ~21:13 PT: "I have people ready to sign up build the back."
This is a full build authorization under his standing build rule. Professionals waiting to
sign up are the buyer commitment; the MindCheck one-buyer gate is cleared for this build.

Product intent, in Jason's words from the same conversation: when MindCheck shares the
directory with individual professionals, each professional gets full access to their own
backend so they can make the changes they need, when they want.

## Gates that still stand (do not cross)

1. NO payments. No Stripe, no checkout, no purchase CTAs anywhere in this build. The
   Claimed + Verified tier stays priced-but-disabled exactly as the monetization boundary
   tests pin it. Paid launch waits on attorney review, which has not happened.
2. NO changes to the snapshot data file src/data/therapists/by-state/CA.json.
3. NO changes to screening tools, scoring, or any clinical content. This build touches
   only the therapist directory surface.
4. Public pages must render byte-identical output to today whenever (a) the Supabase env
   is not configured, or (b) no overlay row exists for that listing. The directory can
   never break because the backend store is down or unconfigured.
5. All existing tests must stay green. Test pins may be extended only where a new route
   or field legitimately adds surface, and every pin change must be named in the handoff.

## Current state (PROVEN by coordinator recon, 2026-11-24)

- Repo raiderj77/mhsud, this worktree is on branch feat/therapist-professional-backend
  off origin/main at 7f960f6 (therapist tranche 2 merge).
- Directory data: src/lib/therapists.ts loads src/data/therapists/by-state/CA.json
  (13,485 providers). Therapist shape: npi, slug, name, credential, city, state,
  specialties (labels from SPECIALTIES in src/lib/therapistsCore.mjs), listingSource.
  The credential string carries the CA license, e.g. "LCSW 12345" style tokens.
- Profile page: src/app/therapists/[slug]/page.tsx renders registry fields, an
  "Unclaimed listing" note, and a claim link. No overlay concept exists.
- Claim today is a stub: src/app/therapists/claim/page.tsx + ClaimForm.tsx post
  {slug, workEmail} to src/app/therapists/api/claim/route.ts, which validates via
  validateClaim in src/lib/therapistsCore.mjs (allows ONLY slug and workEmail keys) and
  returns {reference: "MCT-T-<uuid>", status: "pending", eligibility: "manual-review"}
  without storing anything.
- No Supabase code or env exists in this repo. .env.example documents one gated feature
  (NEXT_PUBLIC_FACILITY_SERVICES_ORDER_URL, empty = CTAs disabled). Follow that pattern.
- Pure logic lives in src/lib/*.mjs core modules and is unit tested with node --test
  (npm test). Build is next build --turbopack. Lint is zero-warning.

## What to build

### 1. Core logic: src/lib/professionalCore.mjs (new, pure, tested)

- EDITABLE_FIELDS = ["phone", "website", "bio", "insurances", "languages",
  "sessionFee", "telehealth", "acceptingNew"]. LOCKED_FIELDS = ["name", "credential",
  "city", "state", "npi", "slug", "specialties", "listingSource", "licenseNumber"].
- validateProfileEdit(body): body must be a plain object whose keys are a subset of
  EDITABLE_FIELDS plus "slug". Returns a cleaned object or null. Rules:
  slug matches /^[a-z0-9-]{1,250}$/; phone: string, trim, <= 32 chars, only digits,
  spaces, and +()-. characters; website: string, <= 200 chars, must parse as an
  https: URL; bio: string, trim, <= 1200 chars, no HTML (reject if it contains "<");
  insurances: array of <= 12 strings, each trimmed, 1..60 chars; languages: same shape,
  <= 12 items, 1..30 chars each; sessionFee: string, trim, <= 60 chars;
  telehealth and acceptingNew: booleans. Unknown or locked keys reject the whole edit.
- licenseMatchesCredential(credential, licenseNumber): clean the submitted number to
  uppercase alphanumerics; if its length < 4 return false. Tokenize the credential on
  [^A-Z0-9]+ uppercase; return true iff the cleaned number equals one token.
- validateClaim extension (edit src/lib/therapistsCore.mjs): allowed keys become
  ["slug", "workEmail", "licenseNumber"]; licenseNumber optional; when present it must
  clean to 4..20 alphanumeric chars or the claim is invalid. Return
  {slug, workEmail, licenseNumber: <cleaned or "">}. Existing callers and tests that use
  the two-field shape must keep working.

### 2. Data layer: Supabase, env-gated

Env vars (add all three to .env.example with explanatory comments, empty values):
NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY.

- src/lib/professionalServer.ts (server-only): exports isProfessionalBackendConfigured()
  (true iff all three env vars are non-empty), getProfileOverlay(slug) using the anon
  key (public read), and service-role helpers insertClaim(claim), getOverlaysByEmail(email),
  getClaimsByEmail(email), updateOverlay(slug, fields). Every helper returns null/empty
  on ANY error or when unconfigured, and getProfileOverlay must time out fast
  (AbortSignal.timeout(1500)) so a sick store never hangs a public page.
- Migration file supabase/migrations/20261124000000_therapist_professional_backend.sql:
  table therapist_claims (id uuid primary key default gen_random_uuid(), reference text
  unique not null, slug text not null, npi text not null, work_email text not null,
  license_number text not null default '', license_match boolean not null default false,
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  created_at timestamptz not null default now(), decided_at timestamptz);
  table therapist_profiles (slug text primary key, npi text not null,
  owner_email text not null, phone text not null default '', website text not null
  default '', bio text not null default '', insurances text[] not null default '{}',
  languages text[] not null default '{}', session_fee text not null default '',
  telehealth boolean not null default false, accepting_new boolean not null default false,
  updated_at timestamptz not null default now());
  indexes on therapist_claims(work_email), therapist_claims(status),
  therapist_profiles(owner_email).
  RLS: enable on both tables. therapist_profiles gets ONE policy: select for anon and
  authenticated (the overlay is published information by design). No insert/update/delete
  policies anywhere: all writes happen through our API routes with the service role key.
  therapist_claims gets NO policies (service role only; claim data is private).
- Dependencies: add @supabase/supabase-js and @supabase/ssr to package.json dependencies
  (coordinator runs npm install; do not vendor anything).

### 3. Claim flow v2

- ClaimForm.tsx: add an optional "California license number" field with help text
  "Matching the license number on your listing speeds up verification." Submit body
  becomes {slug, workEmail, licenseNumber} (omit licenseNumber when blank).
- POST /therapists/api/claim: keep the exact response contract
  ({reference, status: "pending", eligibility: "manual-review"} and the same error
  strings/status codes). New behavior: look up the listing (404 path unchanged); compute
  licenseMatchesCredential(listing.credential, licenseNumber); when the backend is
  configured, insert a therapist_claims row (reference, slug, npi, work_email,
  license_number, license_match). When unconfigured, behave exactly as today.
  A failed insert must NOT fail the request (log nothing, still return the reference):
  the email fallback on the form remains the safety net during the pilot.
- Claim page copy: one added sentence is allowed: "Claims with a matching license
  number are verified first." Nothing else changes.

### 4. Sign-in (Supabase magic link)

- src/app/therapists/sign-in/page.tsx (robots noindex): email form, posts to
  /therapists/api/auth/sign-in. When the backend is unconfigured, the page renders a
  plain notice: "Professional sign-in opens shortly." and no form.
- POST /therapists/api/auth/sign-in: JSON {email}; validate with the same work-email
  validator the claim flow uses; call supabase.auth.signInWithOtp with
  emailRedirectTo = <NEXT_PUBLIC site origin>/therapists/auth/callback. Always return
  the same generic success message whether or not the email has a listing (no account
  enumeration). 503 when unconfigured.
- src/app/therapists/auth/callback/route.ts: exchange the code for a session via
  @supabase/ssr server client and cookies, redirect to /therapists/dashboard.
- POST /therapists/api/auth/sign-out: clears the session, returns ok.
- Session reading helper in professionalServer.ts: getSessionUser() via @supabase/ssr.

### 5. Dashboard: src/app/therapists/dashboard/

- page.tsx (server component, robots noindex, dynamic): unconfigured -> notice page.
  No session -> redirect to /therapists/sign-in. Session -> load overlays and claims
  for the user's email. If the user has claims but no overlay, show each claim's status
  plainly ("Pending review", with its reference). If neither, show "No listing is
  linked to this email yet" plus a link to /therapists.
- With an overlay: show the listing name/city (from the snapshot), a "View public
  listing" link, and the edit form (client component DashboardForm.tsx) prefilled with
  the overlay values: phone, website, bio (textarea), insurances (one per line
  textarea), languages (one per line), session fee, telehealth checkbox,
  accepting new patients checkbox. Save posts to /therapists/api/profile.
- POST /therapists/api/profile: requires a session (401 without). Body validated by
  validateProfileEdit (400 on failure). Load the overlay by slug (404 if none).
  Ownership check: overlay.owner_email must equal the session user's email
  (403 otherwise). Update via service role, set updated_at, return the saved overlay.
  Locked fields in the body are rejected by the validator already; never trust the
  client for owner_email, npi, or slug ownership.

### 6. Public profile merge: src/app/therapists/[slug]/page.tsx

- After loading the provider, call getProfileOverlay(provider.slug). Null overlay:
  render exactly as today, including the "Unclaimed listing" text.
- Overlay present: keep the registry section unchanged. Replace the "Unclaimed
  listing" paragraph with "Claimed listing" and render a contact card section above
  the registry section showing only non-empty fields: phone (tel: link), website
  (link, rel="noreferrer nofollow"), bio, "Insurance accepted" list, "Languages"
  list, "Session fee", "Offers telehealth" when true, and an "Accepting new patients"
  badge when true. The claim link at the bottom is replaced by nothing (a claimed
  listing shows no claim link). License numbers and owner email are NEVER rendered.
- Do not touch generateMetadata, breadcrumbs, browse page, or sitemap in this build.

### 7. Pilot approval scripts (service role, refuse to run unconfigured)

- scripts/list-therapist-claims.mjs: prints pending claims (reference, slug, email,
  license_match, created_at).
- scripts/approve-therapist-claim.mjs --reference MCT-T-...: sets the claim approved
  with decided_at, and upserts the therapist_profiles row {slug, npi, owner_email}
  from the claim. Idempotent. Also support --reject.
- Both read env from process.env (document in the runbook that they run with
  --env-file=.env.local like the existing scripts do).

### 8. Runbook: docs/professional-backend-runbook.md

Short: what Jason creates (a free Supabase project), which SQL file to paste into the
SQL editor, which three env vars go where (Vercel project env + local .env.local), how
claims are approved (the two scripts), and the note that charging stays off until
attorney review. Written for a non-technical owner doing taps, short steps.

## Security requirements (all must hold; the coordinator will scan for them)

1. SUPABASE_SERVICE_ROLE_KEY is used only in server code (route handlers, server
   components, scripts). It must never appear in a client component or NEXT_PUBLIC var.
2. Every write path verifies the Supabase session server-side and checks ownership by
   email equality. No write trusts a client-supplied email.
3. Field allowlist enforced by validateProfileEdit; locked fields can never be written
   through the API.
4. License numbers are stored server-side only and never rendered on any page or
   returned by any API response after submission.
5. Sign-in responses are identical for known and unknown emails.
6. All new routes keep the existing private/no-store + noindex header posture used by
   the current claim route.
7. No new data collection beyond the fields in this spec. No analytics additions.

## Tests to add (tests/, node --test style, follow existing patterns)

- tests/professional-core.test.mjs: validateProfileEdit accepts a full valid edit;
  rejects locked keys, unknown keys, non-https website, HTML in bio, overlong fields,
  oversized arrays; licenseMatchesCredential true for a token match ("LCSW 12345" vs
  "12345"), false for short/absent/mismatched numbers; validateClaim accepts the
  optional licenseNumber and rejects a malformed one, and still accepts the legacy
  two-field body.
- tests/professional-backend-boundary.test.mjs: with env unset, the claim route keeps
  its current response contract; sign-in page renders the "opens shortly" notice;
  dashboard renders the notice; profile pages contain no overlay markup. Follow how
  existing boundary tests read sources or render; match the repo's established style.
- Check tests/sensitive-route-isolation.test.mjs, tests/therapist-directory.test.mjs,
  and tests/professional-monetization-boundary.test.mjs for pins covering routes,
  claim validation, or paid CTAs. Extend pins only where this spec adds surface, and
  list every changed pin in the handoff with the reason.

## Out of scope (do not build)

Payments or Stripe in any form. An admin UI (scripts cover the pilot). Photo uploads
or photo URLs. Browse/search page changes. Changes to other counties or the facilities
directory. Email sending beyond Supabase's built-in magic link. Any change to
src/data/therapists/by-state/CA.json or the ingest scripts.

## Handoff requirements

Write HANDOFF.md in the worktree root: files created/changed with one line each, tests
added, every existing test pin changed with its reason, anything not built and why,
and a STOP REPORT (task+step, action taken, exact result, already tried) for anything
that stopped early. Do not run git, builds, or servers; the coordinator verifies.
