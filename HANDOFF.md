# Therapist backend addendum — credential hold removal

## What changed (file by file)

- **PROVEN** `src/app/therapists/[slug]/page.tsx` now fetches the overlay for every existing listing. Overlay presence controls the contact card, claimed label, and claim action. The registry markup still renders the credential verbatim. Source — lines 46–78 and the two-line comment and lookup replacement.
- **PROVEN** `src/app/therapists/dashboard/page.tsx` removes the credential-based hold notice. The editor follows the public listing link. Source — lines 26–34 and the notice deletion.
- **PROVEN** `tests/professional-backend-boundary.test.mjs` checks unconditional overlay lookup, verbatim registry credential rendering, the dashboard editor, private-field exclusions from rendered data projections, and claim and profile API payloads. Source — lines 7–72.
- **PROVEN** `HANDOFF.md` records the coordinator’s ruling and supersedes the prior credential STOP REPORT. Source — `BRIEF.md:3–23` and this addendum.

## Evidence (PROVEN or ASSERTED, with sources)

**PROVEN** The coordinator’s ruling reads as follows. Source — `BRIEF.md:7–12`.

> THE RULING: Spec security rule 4 ("license numbers never rendered") covers data submitted
> through the NEW backend: the license number a professional types into the claim form, and
> the owner email. Those must never render or be returned, and that part of the build stands.
> The registry credential string on a public profile is different: it is pre-existing public
> NPPES registry data, displayed verbatim on the live site today, and it is part of the
> byte-identical fallback the spec also requires. It stays exactly as it is.

- **PROVEN** The claim handler passes submitted license and work email to storage and returns reference, status, and eligibility on success. The dashboard and profile data use projections that omit the submitted license and owner email. The profile handler returns the saved public projection. Sources — `src/app/therapists/api/claim/route.ts`, `src/app/therapists/api/profile/route.ts`, `src/lib/professionalServer.ts:14–15,52–101`.
- **PROVEN** The pilot runbook still describes the former hold. The brief limits edits to the pages, tests, and handoff. Sources — `docs/professional-backend-runbook.md:3`, `BRIEF.md:14–27`.
- **PROVEN** The unconfigured data helper returns null and the listing source preserves the unclaimed branch for a null overlay. Sources — `src/lib/professionalServer.ts:32–39`, `src/app/therapists/[slug]/page.tsx:48–78`.
- **ASSERTED — TRUTHMODE: PASS for the scoped source fix.** Rendered byte identity and end-to-end private-data exclusion remain unverified. Source — verification scope below.

## Tests and checks run (with counts, and any failed or skipped check named)

- **PROVEN** `node --test tests/{professional-backend-boundary,professional-core,therapist-directory,sensitive-route-isolation,professional-monetization-boundary}.test.mjs` reported **36 passed, 0 failed, 0 runner-skipped**, including seven boundary checks. Source — command output.
- **PROVEN** `node --check tests/professional-backend-boundary.test.mjs` passed one syntax check. Source — command exit code 0.
- **PROVEN** The full suite, lint, TypeScript checking, Next.js build, rendered HTML byte comparison, browser and network checks, and live Supabase checks were outside this targeted run. Build and server verification were prohibited by the brief. Sources — test command above and `BRIEF.md:25–27`.

## Gates left untouched

- **PROVEN** The four file edits leave payments, snapshot data, and server-side service-key handling untouched. The byte-identical fallback remains a gate. Sources — edits listed above, `BRIEF.md:25–27`, and `src/lib/professionalServer.ts:1–8`.
- **PROVEN** The work used local reads, file edits, and tests. No git, merge, deployment, publishing, sending, or spending occurred. Source — command and tool history for this run.

## Remaining owner steps

- **PROVEN** Before opening the pilot, follow the runbook’s Supabase project, migration, private environment, callback, and manual claim review steps. Charging remains gated on attorney review. Source — `docs/professional-backend-runbook.md:5–24`.
