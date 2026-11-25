# Therapist professional backend handoff

## What changed (file by file)

- **PROVEN** `.env.example` documents the three empty Supabase settings and marks the service-role key private.
- **PROVEN** `package.json` declares the Supabase JS and SSR dependencies.
- **PROVEN** `next.config.mjs` adds private/no-store, no-referrer, and noindex/nofollow headers for the professional pages and handlers.
- **PROVEN** `src/lib/professionalCore.mjs` adds the edit allowlist, field validation, and exact license-token matching.
- **PROVEN** `src/lib/therapistsCore.mjs` accepts legacy and optional-license claim bodies and returns a cleaned license field.
- **PROVEN** `src/lib/professionalServer.ts` adds configuration gating, bounded data requests, service-role data access, and cookie-backed SSR auth.
- **PROVEN** `supabase/migrations/20261124000000_therapist_professional_backend.sql` defines the claims and profiles tables, indexes, RLS, column grants, and service-only atomic claim decision.
- **PROVEN** `src/app/therapists/claim/ClaimForm.tsx` adds the optional license input, retains the email fallback, and removes the obsolete statement that claims are never saved.
- **PROVEN** `src/app/therapists/claim/page.tsx` adds the single allowed sentence about prioritizing matched claims.
- **PROVEN** `src/app/therapists/api/claim/route.ts` attempts to save the claim and retains the pending-reference response.
- **PROVEN** `src/app/therapists/sign-in/page.tsx` adds the noindex sign-in page and its disabled notice.
- **PROVEN** `src/app/therapists/sign-in/SignInForm.tsx` posts the work email and displays the handler’s response.
- **PROVEN** `src/app/therapists/api/auth/sign-in/route.ts` validates the work email and requests a magic link with a generic response.
- **PROVEN** `src/app/therapists/auth/callback/route.ts` exchanges the code for a session and redirects to the dashboard on success.
- **PROVEN** `src/app/therapists/api/auth/sign-out/route.ts` signs out the local Supabase session.
- **PROVEN** `src/app/therapists/dashboard/page.tsx` adds the session-gated dashboard, claim statuses, linked listings, and disabled notice.
- **PROVEN** `src/app/therapists/dashboard/DashboardForm.tsx` adds editable listing fields and the sign-out control.
- **PROVEN** `src/app/therapists/api/profile/route.ts` validates the edit, compares the overlay owner with the verified session email, and saves the public fields.
- **PROVEN** `src/app/therapists/[slug]/page.tsx` adds the claimed contact card and keeps the existing unclaimed presentation for null overlays and the legacy credential hold.
- **PROVEN** `scripts/therapist-claims-client.mjs` shares the scripts’ environment gate and service-role client.
- **PROVEN** `scripts/list-therapist-claims.mjs` lists pending claims with matches first and omits submitted license numbers.
- **PROVEN** `scripts/approve-therapist-claim.mjs` calls the atomic approve/reject RPC using the claim reference.
- **PROVEN** `docs/professional-backend-runbook.md` documents owner setup, callback configuration, manual claim decisions, and the charging gate.
- **PROVEN** `tests/professional-core.test.mjs` adds five validator and license-matching tests.
- **PROVEN** `tests/professional-backend-boundary.test.mjs` adds five source checks for claim responses, disabled notices, overlay fallback, authorization, and database grants.
- **PROVEN** `tests/therapist-directory.test.mjs` extends the existing claim payload pin to expect `licenseNumber: ""` on legacy payloads, as required by spec §1. The two other requested pin files received no edits.
- **PROVEN** `HANDOFF.md` records the implementation and verification status.

## Evidence (PROVEN or ASSERTED, with sources)

- **PROVEN** The claim handler returns reference, status, and eligibility. Its persistence helper swallows storage errors. Submitted license data flows into the claim insert and is absent from the claim summary and profile projections. Sources: `src/app/therapists/api/claim/route.ts`, `src/lib/professionalServer.ts`.
- **PROVEN** The service-role variable appears in the server-only data module and pilot script helper in the runtime source scan. The migration grants direct public access to named profile columns, excluding `owner_email`, and defines no claim policy. Sources: `rg -n 'SUPABASE_SERVICE_ROLE_KEY' .env.example src scripts docs/professional-backend-runbook.md`, migration GRANT and POLICY statements.
- **PROVEN** Profile authorization checks the authenticated email and reapplies that email in the update predicate. Approval uses one RPC transaction and refuses an existing overlay with a different owner or NPI. Sources: profile POST handler, `src/lib/professionalServer.ts`, migration decision function.
- **PROVEN** The public template still interpolates the legacy registry credential. A read-only Node inspection of the CA snapshot counted 13,485 registry rows and 182 credential strings containing digits. The count identifies candidates and does not establish that all 182 strings contain license numbers. The spec explicitly describes license tokens in this field. Sources: inspection output `{ rows: 13485, credentialContainsDigits: 182 }`, spec §Current state, public profile template.
- **PROVEN** The claim page retains “Enter only your work email” under the one-sentence copy restriction. The form labels the license field optional and keeps an email fallback. The website validator requires an HTTPS URL when the field is supplied, so the editor supports replacing a saved website and has no clear action. Sources: spec §§1 and 3, claim page and form, `professionalCore.mjs`, dashboard form.
- **ASSERTED** The null-overlay template is intended to preserve existing public HTML byte for byte. The source guard passed. Next.js HTML, network behavior, cookie refresh, email delivery, SQL execution, and deployed behavior remain unverified. Sources: public overlay boundary test and the test exclusions below.
- **ASSERTED — TRUTHMODE: STOP for release.** The existing registry credential display conflicts with the absolute no-license-rendering gate. The fallback, public overlay, and live auth also require runtime verification before release. Sources: `BRIEF.md` hard gates, spec §§4–6, credential inspection and verification results above.

## Tests and checks run (with counts, and any failed or skipped check named)

- **PROVEN** Targeted `node --test` run across the two new files, therapist directory, sensitive-route isolation, and professional monetization boundary: **34 passed, 0 failed, 0 skipped**.
- **PROVEN** Broader `node --test` run across 55 selected files: **240 reported, 235 passed, 5 failed, 0 runner-skipped**. `analytics-url-regression.test.mjs`, `august-awareness.test.mjs`, and `safety-plan-storage-migration.test.mjs` could not load `typescript`. `braces-depth-guard.test.mjs` could not load `chokidar/package.json`. `entry-audit.test.mjs` could not load `cheerio` from `scripts/full-site-audit.mjs`. Source: `/tmp/mct-professional-tests.log`.
- **PROVEN** Two test files were excluded from that run. `privacy-copy-boundary.test.mjs` has three tests and invokes `git ls-files`. `dependency-security-20261006.test.mjs` has eight tests and resolves installed dependencies. Sources: the two test files and `/tmp/mct-professional-test-files.txt`.
- **PROVEN** `node --check` passed for six files: `next.config.mjs`, the two core modules, and all three pilot script files. Source: six “Syntax OK” command lines.
- **PROVEN** Skipped dependency install and lockfile regeneration, lint, TypeScript checking, Next.js build and rendered byte comparison, browser accessibility and keyboard checks, and live Supabase migration/RLS, magic-link, cookie lifecycle, and approval tests. `ls -ld node_modules` returned “No such file or directory.” The brief assigns install and build verification to the coordinator and forbids builds, servers, and web access in this lane. Sources: command output, `BRIEF.md`, spec §§2 and Handoff requirements.

## Gates left untouched

- **PROVEN** The file edits listed above exclude payment integrations, paid CTAs, CA snapshot data, ingestion, directory browse, sitemap, screening, scoring, clinical content, analytics, and deployment workflows. The targeted existing price and professional monetization checks passed. Sources: file edits and the targeted test output.
- **PROVEN** Work was confined to local file edits and CLI checks. No git, merge, deploy, publish, send, or spend action was taken. Sources: work commands and `BRIEF.md`.

### STOP REPORT

- **PROVEN — Public overlay, legacy credential rendering.** Inspected the existing credential interpolation and counted digit-bearing registry strings. Result: the template renders the field verbatim, with 182 candidate rows. Preserving the fallback HTML and keeping that registry display cannot guarantee the absolute no-license-rendering gate. Implemented the overlay for other rows and held claimed presentation for those candidates. The dashboard identifies the hold. Sources: spec §§Current state and 6, `[slug]/page.tsx`, `dashboard/page.tsx`, CA inspection output.
- **PROVEN — Verification, installed dependencies and full suite.** Checked `node_modules`, then ran targeted and broader tests that do not invoke git. Result: missing directory, 34 targeted passes, and five broader module-load failures as listed above. Already tried syntax checks and source checks. Dependency resolution, build, rendering, live DB, and browser verification were deferred under the brief. Sources: `ls` output, both test runs, syntax output, `BRIEF.md`.
- **PROVEN — Out-of-scope deliverables.** Payments, an admin UI, photo uploads, and email beyond Supabase magic-link code were omitted under spec §§Gates and Out of scope.

## Remaining owner steps

- **PROVEN** Decide whether to authorize redacting license-bearing legacy credentials, which changes affected fallback HTML, or revise the gate to distinguish already-public registry credentials from submitted license data. Sources: `BRIEF.md`, spec §6, public template and credential inspection.
- **PROVEN** After that decision and coordinator verification, follow the runbook to create the Supabase project, apply the migration, configure the callback and private environment settings, and manually review pilot claims. Paid launch remains gated on attorney review. Sources: `docs/professional-backend-runbook.md`, spec §§Gates and 8.
