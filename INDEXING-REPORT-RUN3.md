# Facilities indexing — RUN 3

TRUTHMODE decision: REVISE. Local feature checks pass; this is not release clearance.

## Authority, scope and Phase 0

PROVEN: Read BRIEF.md first, then all four requested external documents and repository AGENTS.md. All were readable. Source: this run's read-command outputs. No git commands, build, dev server, production server, merge, deploy, publish, messages to others, or paid-service actions were run. Source: session tool transcript. npm ci installed 384 packages (exit 0); its deprecation notices were not treated as vulnerability findings.

ASSERTED: the unchanged baseline build exited 0 outside the sandbox around 21:30 PT, per BRIEF.md. PROVEN: the tail of /tmp/mhsud-build-verify.log contains the completed route-table legend, observed here. That tail alone does not independently establish the coordinator's process exit status. Builds are coordinator-verified, not run by this agent; final changed-tree build is NOT VERIFIED.

PROVEN: Phase 0 npm test exited 0 with 246 passes, zero failures/skips; lint exited 0. No dependency retry was necessary. No baseline-red hard stop occurred. Baseline logs appear verbatim below. Recon agrees with the settled totals and duplicate definition. Live HTTP status and production metadata were not independently checked in this run.

PROVEN: current baked data has 12,200 facilities, 54 state/territory files, 4,180 city slugs, 1,141 CA facilities and 2,266 CA roster records. Direct attachment counting and a cloned rerun of attachCaLicenses both return 412. Sources: src/data/facilities/index.json; by-state/*.json; ca-licenses.json; src/lib/facilitiesCore.mjs::attachCaLicenses; /tmp/mhsud-run3-recon.json and recon command output. 412 counts attached facility records, not distinct licenses or current licensure. ASSERTED: the former 544 count predates tightened matching, as recorded in the external Run 1/2 reports; no historical git inspection was performed here. The current 412 result is independently reproduced. No 544 claim was added to public pages.

PROVEN: city distribution is 2,214 one-record cities, 786 two-record cities, 772 with 3–5, and 408 with 6+. Thus 1,180 meet the 3+ threshold; 3,000 remain noindex. Source: recon output and facility-indexing tests.

### Facilities and cities by state (PROVEN: recon JSON)

| State/territory | Facilities | Cities |
|---|---:|---:|
| AK | 79 | 30 |
| AL | 125 | 57 |
| AR | 100 | 51 |
| AZ | 353 | 64 |
| CA | 1141 | 309 |
| CO | 253 | 70 |
| CT | 158 | 54 |
| DC | 26 | 1 |
| DE | 38 | 11 |
| FL | 477 | 121 |
| GA | 240 | 92 |
| GU | 2 | 2 |
| HI | 90 | 29 |
| IA | 187 | 89 |
| ID | 82 | 30 |
| IL | 560 | 194 |
| IN | 406 | 119 |
| KS | 135 | 65 |
| KY | 437 | 135 |
| LA | 157 | 54 |
| MA | 343 | 114 |
| MD | 427 | 98 |
| ME | 117 | 48 |
| MI | 366 | 139 |
| MN | 332 | 99 |
| MO | 227 | 100 |
| MP | 1 | 1 |
| MS | 82 | 54 |
| MT | 68 | 35 |
| NC | 451 | 144 |
| ND | 61 | 17 |
| NE | 99 | 31 |
| NH | 88 | 38 |
| NJ | 331 | 158 |
| NM | 141 | 51 |
| NV | 83 | 18 |
| NY | 629 | 179 |
| OH | 474 | 135 |
| OK | 139 | 71 |
| OR | 187 | 63 |
| PA | 479 | 206 |
| PR | 51 | 30 |
| RI | 53 | 19 |
| SC | 92 | 52 |
| SD | 37 | 16 |
| TN | 270 | 98 |
| TX | 412 | 151 |
| UT | 258 | 66 |
| VA | 181 | 90 |
| VT | 49 | 24 |
| WA | 303 | 95 |
| WI | 203 | 90 |
| WV | 74 | 46 |
| WY | 46 | 27 |

### Completeness (PROVEN: recon JSON; nonempty arrays count as present)

| Field | Present | Missing |
|---|---:|---:|
| name | 12200 | 0 |
| street1 | 12200 | 0 |
| city | 12200 | 0 |
| state | 12200 | 0 |
| zip | 12200 | 0 |
| phone | 12200 | 0 |
| intakePhone | 4015 | 8185 |
| careTypes | 12189 | 11 |
| settings | 12190 | 10 |
| website | 0 | 12200 |
| license | 412 | 11788 |

## Phases 1–3: local implementation PROVEN; deployed behavior NOT VERIFIED

PROVEN: DirectoryContext computes record/city counts, all care-type and setting counts, and payment/age/language field-presence percentages from loaded data. It renders source retrieval dates, a snapshot limitation, CA attachment/no-attachment counts and a warning that attachment is not current-license or care-quality verification. Other states explicitly say their licensing rosters are not cross-checked. The national hub reuses this block; state and city pages render their own subsets. No category values or numeric counts are invented. Sources: src/components/DirectoryContext.tsx; corresponding page compositions. The sober-living page already has certification resources and now explicitly distinguishes its unimported certified-home registry from treatment-program records; broad unsupported licensing assertions were removed from its introductory/CA/GA copy. No new article or route was created.

PROVEN: Wave 1 = 3 hubs (/facilities, /facilities/pricing, /sober-living), 54 states, 1,180 cities = 1,237 URLs. All 3,000 cities below three records remain noindex,follow and outside the sitemap. Sources: src/app/sitemap.ts, directoryPaths in src/lib/facilityIndexing.mjs, page metadata and tests/facility-indexing.test.mjs.

PROVEN: Wave 2 uses repository normName/normPhone, normalized city and uppercase state, and equal nonempty base phone OR normalized street1, merged transitively into connected components. Primary = most complete of the eleven prescribed fields; ties use alphabetical slug. The primary is not chosen by payment, manual choice, or a global chain phone. Sources: src/lib/facilityIndexing.mjs; src/lib/facilities.ts state policy cache; detail-page metadata; synthetic transitivity/location/completeness/tie tests.

| Duplicate definition | Clusters | Beyond first |
|---|---:|---:|
| PROVEN: global normalized name + phone (comparison only) | 850 | 1,898 |
| PROVEN: settled location-scoped definition, actually used | 554 | 808 |

PROVEN: Wave 2 total 12,200; indexable 11,382; held 818. Disjoint held categories: 808 non-primary records, plus 10 incomplete primary records. Non-primary canonicals point to the selected primary; incomplete primaries remain self-canonical/noindex. Completeness requires name, street, city/state/ZIP, phone or intake phone, and care type or setting. Websites and license attachments are not invented or required by this indexing bar. Sources: policy module, baked-data test and metadata verification output.

PROVEN: final emitted sitemap = 12,709 unique URLs: 90 existing core + 1,237 Wave 1 + 11,382 Wave 2. All directory lastModified values are 2026-11-02 from the dataset. It is below 45,000, so splitting is not needed for this dataset. No truncation. Check, claim, report and API paths are excluded from directoryPaths. Sources: actual sitemap() execution via temporary TypeScript/alias loader and /tmp/mhsud-run3-verify.log. The loader stubs framework Link/notFound imports; this is metadata execution, not an HTTP crawl or Next production rendering.

PROVEN: detail provenance includes source/retrieval date, generated date, explicit matched/not-matched/not-cross-checked status and limitations. Existing claim and free-report links remain. Sources: src/components/FacilityDirectory.tsx and detail page. No paid ranking or referral behavior was added.

## Phase 4: network-blocked fallback; no source records added

PROVEN: nine ordered discovery requests failed with curl exit 6 (DNS). Sources: /tmp/mhsud-run3-sources.json; output reproduced below. These were source-discovery portal requests, not successful bulk downloads. No login/payment/terms workaround was attempted. No verified bulk-export URL or terms basis could be obtained for these new sources. Retrieval date = null; rows added = 0 for each. Existing dataset index/source metadata was deliberately retained; no fictional retrieval/terms/count entries were written into it.

| Source | Attempted discovery URL | Status / new rows |
|---|---|---|
| NPPES organization matching + individual recon | https://download.cms.gov/nppes/NPI_Files.html | PROVEN DNS blocked; 0 |
| TX | https://data.texas.gov/ | PROVEN DNS blocked; 0 |
| FL | https://www.floridahealthfinder.gov/ | PROVEN DNS blocked; 0 |
| NY | https://data.ny.gov/ | PROVEN DNS blocked; 0 |
| OH | https://mha.ohio.gov/ | PROVEN DNS blocked; 0 |
| PA | https://data.pa.gov/ | PROVEN DNS blocked; 0 |
| IL | https://data.illinois.gov/ | PROVEN DNS blocked; 0 |
| CCAPP CA | https://ccapp.us | PROVEN DNS blocked; 0 |
| Other NARR affiliates | https://narronline.org/affiliates/ | PROVEN DNS blocked; 0 |

ASSERTED: these portal candidates are suitable starting points for subsequent source discovery; their current contents, authoritative bulk availability and terms are NOT VERIFIED by the failed requests. They must not be described as verified export endpoints.

PROVEN: scripts/ingest-facility-supplements.mjs stages local reviewed CSV inputs only, outside public data in ignored data-raw/supplements. Streaming CSV handles quoted newlines/escaped quotes, rejects missing required headers and bounds fields/columns. NPPES organization candidates require normalized name + city/state + address/ZIP or phone. Multiple existing candidates or multiple NPIs stay ambiguous; no automatic live-data fill occurs. It emits aggregate individual-provider counts/completeness only, with an explicitly supplied reviewed SUD taxonomy list; no individual names/contact details are emitted. State roster mode accepts TX/FL/NY/OH/PA/IL and produces license records plus candidate paths for review. Certified-home mode emits its own record type with name, city/state, certification body and public business phone only, without residential street addresses. The script never publishes, fetches URLs, writes source data, or enables indexing. Local input and reviewer declarations remain a trust boundary, not proof of authenticity. Full real-source integration and state mismatch counts are NOT VERIFIED without source files.

### Exact offline resumption procedure (no fabricated export URLs)

PROVEN: this is the staged script's command interface, from its source:

1. In a network-enabled environment open each discovery URL above in the specified order. For each state verify that an authoritative machine-readable licensed-SUD bulk roster exists. For CCAPP/other NARR affiliates verify a public certified-home export and public business contacts. If unavailable or prohibited, mark blocked; do not scrape around terms or logins.
2. Save the exact approved HTTPS bulk download URL and terms evidence. Download that exact reviewed URL with `curl --fail --location --proto '=https' --proto-redir '=https' --output data-raw/approved-source.csv 'EXACT_REVIEWED_BULK_URL'`. The placeholder must be replaced after discovery; an exact currently valid export URL could not be verified in this sandbox. For NPPES, use the full dissemination CSV from the archive linked by the official CMS page, extract locally, and preserve CMS headers. Do not substitute individual API calls or scrape results.
3. Write a manifest with mode (`nppes`, `license`, or `certified`), lowercase/hyphen id, sourceUrl (actual reviewed bulk URL), retrievedAt (actual ISO date), termsBasis (public-bulk terms with evidence reference), reviewedBy, and publicBulkReviewed: true only after review. NPPES additionally requires sudTaxonomies and taxonomySourceUrl from a reviewed taxonomy authority. Do not infer taxonomies from a provider name. State and certified CSV headers are specified in the script's required-column arrays; map only real source columns, retaining null/empty values.
4. Run `node scripts/ingest-facility-supplements.mjs data-raw/reviewed-manifest.json data-raw/approved-source.csv`. It writes an exclusive-create staging JSON; it cannot overwrite an existing staged file. Review single-match NPI candidates, source rows, licenses/certifications and mismatches before changing runtime data. If records are later integrated, add actual source URL/date/rows/terms metadata to index.json and rerun context/indexing/security checks. No staged candidate is currently public or in the sitemap.

NOT VERIFIED: actual NPPES match rate, real-source schema compatibility, individual SUD provider counts/completeness by state, state license mismatches, certified-home totals, export terms. New source retrievals/imports = 0; NPIs filled = 0; affiliates added = 0. Provider decision: NO-GO pending real bulk recon and the explicitly reserved owner decision. No provider pages were built. This fallback is preparation, not a claim that Phase 4 data acquisition completed.

## SECURITY-REPORT — Phase 5

PROVEN: reviewed final feature files by explicit path (no git diff command), plus check/claim handlers, middleware, route policy, next.config.mjs, env example, ingest download code, CI workflows and static/config secret sweep. Sources: read/rg commands in session and /tmp/mhsud-run3-security-sweep.json. No security patch was mixed into this feature work. No live payment, webhook, consumer data or production system was tested. This is a scoped review, not a clean bill of security.

### Inventory and threat model

PROVEN: top-level directory inventory from os.listdir/os.walk: .claude, .github, .portfolio-standards, config, docs, public, scripts, src, tests, node_modules. .git is worktree metadata (not traversed). Every component is addressed below. Root configuration files were also included in the targeted review/sweep.

| Component | Entry points / sinks / boundaries | Review or explicit skip |
|---|---|---|
| src directory pages/components/data | Public routes and local JSON to React/metadata/sitemap; no new user input/storage/network sinks | Scanned changed files and business API surface; unrelated clinical internals skipped for deep review because unchanged, included in text sweep and full regression suite |
| src check/claim APIs | Unauthenticated query/JSON inputs to lookup/eligibility/JSON response; operator-controlled mailto is client-generated, not a server email send | Handler + client source review; no database/payment/email sink found in these handlers |
| scripts | Operator local file/manifest to local staging writes; existing ingest invokes curl with fixed source URLs | New importer scanned for path/CSV bounds and network sinks; existing ingest URL/exec review; unrelated audit scripts deep review skipped because unchanged |
| public | Static assets/service worker to browsers; no new assets | Text secret sweep; service-worker behavior covered by existing tests; binary assets not decoded for hidden content |
| config | Static redirect mapping to Next config | Sweep and config import/redirect review; unchanged mappings not individually re-adjudicated |
| .github | Event inputs to hosted shell/actions/network submissions | All four workflow sources read; not executed; existing CI permissions and pinned action references observed |
| .portfolio-standards | Operator/CI tooling to subprocess and external advisories | State/config inventory + text sweep; downloaded security tools not executed (no git commands, no network installation) |
| .claude | Local tool/plugin configuration | Configuration read and text sweep; no runtime page entry point |
| docs | Operational prose to human readers | Text secret sweep; deep clinical/legal review skipped because unchanged and not executable |
| tests | Fictional fixtures/code to local assertions/files | New policy/parser tests reviewed; full suite run; unrelated test bodies deep review skipped |
| node_modules | Locked third-party code at build/runtime | Deep vendored review skipped; npm ci and existing dependency regression tests run; online advisories attempted but DNS blocked |
| .git metadata | Coordinator-managed repository state | Entirely skipped: explicit no-git instruction |
| Root files | Next/CSP/env/package/workflow configuration inputs | next.config, middleware, route policy, env example, package manifest read; text secret sweep; no root runtime/security config altered |

PROVEN: broad signature sweep read 375 text files, returning zero selected live-key/private-key signature hits; binary files, dependencies and git metadata excluded. This is limited pattern evidence, not proof that secrets or consumer data cannot exist. No actual consumer record was observed in the examined application/API material; no claim of exhaustive semantic data detection is made. No hard-stop live-key, live-webhook or real-user-data finding was established. Source: sweep output and reviewed handler sources.

### Candidate panel (separate review items; no patches applied)

- PROVEN source condition, ASSERTED resource-abuse impact / needs more evidence: check and claim routes have no application-level rate limiter or explicit body-size limit; claim directly calls request.json and Object.keys on the parsed body without a plain-object guard. A syntactically valid null body can reach an unguarded operation by source reasoning. Hosting-layer limits and actual exploitability were not tested. Public repeated-request resource exhaustion requires further evidence. Sources: src/app/facilities/api/{check,claim}/route.ts and src/middleware.ts. Proposed separate-review remediation: request-shape/body bounds and appropriate public endpoint throttling, without logging consumer inputs.
- PROVEN source gap, ASSERTED crawler exposure / needs more evidence: global X-Robots-Tag noindex rule targets /api/:path*, while existing business endpoints are /facilities/api/check and /facilities/api/claim. Those handlers set no explicit robots header. No live HTTP response was checked. Sources: next.config.mjs::headers and business handler files. The required /api/* rule is preserved; nested API response noindex must be verified/reviewed separately. Proposed separate-review remediation: explicit noindex coverage for nested business API paths. No header change was auto-applied.
- Discarded as not demonstrated exploitable: new SSRF candidate. New importer has no fetch/HTTP client/exec sink; sourceUrl is recorded as metadata and must be HTTPS. Existing ingest downloads use fixed URLs through execFileSync argument arrays, not shell interpolation; redirect behavior remains an operator/source trust concern, with no attacker-controlled request-time URL established. Sources: both ingest scripts.
- Discarded as not demonstrated exploitable: React text injection/open redirect in the new context/canonical policy. Counts/labels render as React text; canonical paths come from repository data; new code has no raw-HTML or user-URL sink. Fixture/local-data trust remains required. Sources: DirectoryContext.tsx, facilityIndexing.mjs, metadata helper and detail metadata.
- Discarded as unauthenticated access-control bypass: public read-only listings are intended to be public; claim endpoint returns assessment/reference, does not grant ownership or persist a claim. No new privileged operation added. Source: claim handler and ClaimForm.tsx.

PROVEN: `npm --fetch-timeout=5000 --fetch-retries=0 audit --json` exited 1: ENOTFOUND registry.npmjs.org; advisories NOT VERIFIED. No dependencies were added or intentionally upgraded. No advisory-free claim is made. Existing CodeQL/dependency/security workflows were read, not executed.

## Phase 6 verification

PROVEN: baseline 246/246 tests -> final 250/250 (four new policy/parser checks); zero failures, skipped, cancelled or todo in either suite. Both lint runs exit 0. TypeScript `npx tsc --noEmit --incremental false` exits 0. A first temporary metadata loader check failed ENOENT because its alias resolver appended .ts to a .tsx component; the temporary loader was corrected, and the subsequent complete metadata check passed. No application defect was repaired for that harness failure. Sources: command outputs; /tmp/mhsud-run3-{test,lint,final-test,final-lint,types,verify}.log.

PROVEN: server-free metadata check evaluated 12,200 facility metadata objects, 4,180 city metadata objects, 54 state metadata objects; compared sitemap inclusion/index flags and all facility canonical targets against the policy; asserted unique URLs and cap. Source: /tmp/mhsud-run3-verify.log and temporary loader/verify code in /tmp/mhsud-run3-loader.mjs and /tmp/mhsud-run3-verify.mjs. This checks all data, not a random 500 sample, but makes no HTTP status/rendering assertion.

PROVEN: 15 directory source files passed the owner-byline/Stripe-checkout-link scan. Check/claim/report source noindex declarations passed three direct checks. A server-rendered PurchaseCta test with this process's checkout variable unset produced a disabled button and no Stripe link. The existing optional checkout env gate is retained. Sources: session command output; src/components/FacilityDirectory.tsx; .env.example. ASSERTED/NOT VERIFIED: production environment also leaves that variable unset; no production configuration was accessed.

NOT VERIFIED / skipped by run restriction: baseline/final builds by this agent, all local HTTP crawls (0 URLs), production HTTP 200/robots/canonical rendering, browser automated accessibility, manual keyboard, screen-reader, responsive, performance, BFCache/network checks for the changed pages. No server or port-binding command was run. Existing unit/static regressions do not replace those checks. Coordinator final build and permitted rendered verification remain necessary before release. No merge/deploy/publish authorization is implied by these results.

## Gates left untouched and rollback

PROVEN: no instrument/scoring/crisis/privacy-route/analytics/storage/legal/security-header/service-worker/deployment-workflow changes were made by this run's edits; no source record or new clinical article was added. The paid checkout gate remains as before (disabled when its variable is empty). Sources: explicit edit commands and changed-file list in HANDOFF.md; checkout render check. Broad legal/clinical/current external-source validity is not newly certified. No new health or user data is sent to remote AI or analytics by the added code; new data work is local and staged only (source review required).

PROVEN: rollback scope is the feature files listed in HANDOFF.md; reverting their indexing/context/importer/test changes restores prior directory behavior. No migration, persistent user data, or external publication was introduced. The coordinator manages any repository history actions. Preserve the reports as evidence if rolling back; no git operations were performed here.

## Verbatim command outputs

### Baseline npm test (exit 0)

```text

> mh-tools@0.1.0 test
> node --test tests/*.test.mjs

✔ Google analytics and consent runtimes remain absent (10.007166ms)
✔ GPC and unknown browser state block aggregate analytics (65.855959ms)
✔ public-to-sensitive navigation disposes of the aggregate runtime (4.61725ms)
✔ hashed Vercel loader removal and clean-document decisions are executable (15.720208ms)
✔ aggregate event filter strips URL details and rejects excluded routes and GPC (7.466167ms)
✔ definite undersized assessment answers enforce 44px height and width (7.940833ms)
✔ the maintained Athens information page preserves the evidence and permission boundary (6.636083ms)
✔ the Athens route remains information-only rather than an available assessment (3.763541ms)
✔ WHO item-level AUDIT guidance raises support by exactly one level (2.643375ms)
✔ lower item responses preserve the total-score support level (0.203667ms)
✔ withdrawal safety guidance is not limited to a total score of 20 (0.20875ms)
✔ approved addiction articles match the recorded review and authorized source correction (0.707667ms)
✔ four distinct awareness guides have resolvable citations and related routes (0.210583ms)
✔ observance dates and uncertainty remain explicit (0.204958ms)
✔ only the two explicitly approved addiction articles are released (4.939375ms)
✔ all awareness routes are isolated from analytics, referrers and service-worker page caches (3.692917ms)
✔ new-article guidance keeps alcohol and drug scope distinct from future LCSW review (1.509125ms)
✔ articles preserve direct crisis actions without forms or commercial CTAs (1.085709ms)
✔ each original illustration is local, optimized, and described (6.774916ms)
✔ recommended reading is a small, disclosed, source-linked list (7.756083ms)
✔ affiliate links stay separate from tracking and crisis content (2.150625ms)
✔ recommended reading is crawlable from maintained public surfaces (5.683542ms)
✔ every braces installation is the exact reviewed depth-guard artifact (1.238875ms)
✔ chokidar: ordinary file globs and nested ranges retain expected output (2.96075ms)
✔ chokidar: deeply nested strings reject before stack exhaustion (3.446333ms)
✔ chokidar: direct AST traversal and option values cannot bypass the bound (1.170417ms)
✔ micromatch: ordinary file globs and nested ranges retain expected output (0.818584ms)
✔ micromatch: deeply nested strings reject before stack exhaustion (4.760209ms)
✔ micromatch: direct AST traversal and option values cannot bypass the bound (0.957542ms)
✔ CBT thought record matches its search promise without creating a clinical result (6.700333ms)
✔ sensitive thought-record entry is protected before input and storage is opt-in (3.582625ms)
✔ CBT thought record retains reviewer, primary sources, crisis actions, and summary focus (2.975708ms)
✔ cognitive-distortion page matches its search promise without clinical overreach (13.477166ms)
✔ cognitive-distortion free text is protected before entry and never monetized (4.654292ms)
✔ cognitive-distortion page retains trust, crisis, privacy, and primary-source signals (5.223375ms)
✔ obsolete analytics consent dialog is removed (5.107041ms)
✔ browser privacy controls remain keyboard-accessible links (1.650208ms)
✔ the footer omits unrelated portfolio backlinks (4.07125ms)
✔ homepage and footer identify U.S. crisis services and international options (5.538709ms)
✔ global crisis banner offers direct, body-free mobile contact actions (1.410708ms)
✔ crisis resource cards preserve contact details and expose verified action links (3.447541ms)
✔ Veterans Crisis Line copy uses the current 988 routing (2.581209ms)
✔ tailwindcss: flat selector parsing completes within a bounded child process (265.116333ms)
✔ postcss-nested: flat selector parsing completes within a bounded child process (244.15075ms)
✔ Tailwind and nested PostCSS retain generated print, focus, arbitrary and nested selectors (144.860125ms)
✔ postcss: invalid and excessive indexed source-map offsets reject before expansion (1.238958ms)
✔ postcss: ordinary indexed source maps preserve mapping round trips (1.220458ms)
✔ next/node_modules/postcss: invalid and excessive indexed source-map offsets reject before expansion (0.397916ms)
✔ next/node_modules/postcss: ordinary indexed source maps preserve mapping round trips (0.345416ms)
✔ Next image processing loads patched librsvg and preserves synthetic SVG to PNG output (57.501791ms)
✔ entry audit accepts a compliant information page (4.427042ms)
✔ entry audit rejects misleading previous false positives (3.041041ms)
✔ crawler refuses query strings, external hosts, APIs, and result journeys (0.186833ms)
✔ homepage canonical treats an empty path and slash as equivalent (0.299208ms)
✔ audit origin requires exact parsed equality and rejects lookalike URLs (0.114292ms)
✔ homepage and shared navigation expose four focused paths (7.737583ms)
✔ canonical production URLs use the apex HTTPS domain (5.727125ms)
✔ directory data: totals are internally consistent and complete (237.798292ms)
✔ directory data: CA license matches exist and SAMHSA decoding is real (4.915ms)
✔ no-PII: directory surface forms use only allowlisted business fields (43.093959ms)
✔ no-PII: display pages have direct contact links and no forms or relay endpoints (2.511292ms)
✔ guardrails: no barred sales copy anywhere in the new surface (19.7055ms)
✔ guardrails: flat-fee and verify-status-not-quality language is present (3.283417ms)
✔ pricing matches the locked spec numbers (0.471208ms)
✔ checkout is env-gated off by construction (0.991042ms)
✔ findings: phone mismatch and expired license are detected from held data (0.381291ms)
✔ findings: missing phone and unmatched CA roster are gaps, not accusations (0.113125ms)
✔ findings: non-CA facilities get the roster-not-integrated note (0.055917ms)
✔ eligibility: SUD license match rules (0.147875ms)
✔ eligibility: sober living requires NARR-affiliate certification (0.050958ms)
✔ phones: extensions are never glued onto the base number (0.047083ms)
✔ phones: live-data regression — the Anchorage record carrying an extension (1.773875ms)
✔ findings: an extension on one side is not a phone mismatch (0.078916ms)
✔ matching: same name and ZIP at a different street is NOT a match (0.2505ms)
✔ matching: same name and city but a different ZIP is NOT a match (0.0365ms)
✔ matching: a corroborated match attaches with its basis recorded (0.037667ms)
✔ matching: one roster record cannot fan out to two different locations (0.048708ms)
✔ matching: phone corroborates when either side lacks a street number (0.041834ms)
✔ matching: two distinct corroborating records are ambiguity — no match (0.039625ms)
✔ matching: non-CA facilities never get a CA license attached (0.026375ms)
✔ eligibility: the license-number path also checks expiration (0.03925ms)
✔ claim route: eligibility is judged against the current date (1.9765ms)
✔ HALT rating controls reflow without fixed endpoint columns and preserve radio semantics (5.082ms)
✔ HALT sharing uses the centralized static-name and canonical-link boundary (1.598792ms)
✔ HALT remains a sourced reflection and never emits an invented relapse-risk score (2.922625ms)
✔ interactive local-storage tools render their H1 on the server (7.739167ms)
✔ embedded assessments do not introduce a second H1 (3.56325ms)
✔ gated assessment entry pages expose one server H1 throughout the journey (6.171125ms)
✔ homepage presents one consistent, non-generic MindCheck identity (4.142ms)
✔ homepage answer block preserves strict YMYL and privacy boundaries (1.524458ms)
✔ standard drinks print date is populated only after hydration (0.462459ms)
✔ install prompt has no obsolete analytics-consent dependency (1.015959ms)
✔ install promotion is limited to the neutral home route (0.187458ms)
✔ only an explicit accessible Install action opens the native prompt (0.225375ms)
✔ DASS-21 remains an indexable information page without public administration or scoring (12.966792ms)
✔ CES-D matches the public-domain SAMHSA form and avoids unsupported severity tiers (0.899792ms)
✔ legacy blog manifest covers the exact 115-route retirement set (1.640083ms)
✔ unsupported youth and DAST routes remain honest not-found responses (0.245458ms)
✔ only explicitly equivalent legacy articles redirect (1.5025ms)
✔ redirect graph is one hop and every legacy destination is maintained (0.60475ms)
✔ retired blog source and compatibility shim stay deleted (0.09025ms)
✔ redirected non-blog wrappers retain no latent page implementation (0.607459ms)
✔ the public footer states the current advertising state accurately (2.055292ms)
✔ application source contains no GA4 or display-ad runtime (369.738792ms)
✔ CSP drops Google and ad origins while preserving security protections (0.586375ms)
✔ public disclosures state no Google Analytics or display ads and preserve ordinary-data boundaries (9.992916ms)
✔ Vercel aggregate analytics stays allowlisted, URL-minimized, and GPC-blocked (0.553167ms)
✔ active operating guidance keeps analytics and advertising boundaries explicit (2.083167ms)
✔ review branch does not change main deployment behavior (1.232875ms)
✔ dormant therapy affiliate and email subscription services are removed (6.122583ms)
✔ aggregate navigation keeps its independent positive allowlist (1.278417ms)
✔ PHQ-4 choices expose complete keyboard radio behavior, 44px targets, and announced results (5.617792ms)
✔ PHQ-4 result language keeps screening thresholds non-diagnostic (1.774333ms)
✔ tracked public source contains no absolute confidentiality or transmission promises (373.158583ms)
✔ primary privacy surfaces state the complete local-processing boundary (1.481792ms)
✔ homepage gives the concise boundary without implying invisible page requests (0.842208ms)
✔ privacy policy distinguishes local processing from user-created exports (3.4945ms)
✔ obsolete GA acquisition event is removed (7.751625ms)
✔ clean navigation to excluded routes remains enforced (1.027584ms)
✔ cookie-free aggregate analytics is fail-closed and strips URL detail (7.334709ms)
✔ privacy notices describe the aggregate measurement boundary (4.958458ms)
✔ dormant email-capture and therapy-affiliate infrastructure stays removed (1.579167ms)
✔ browser-local health records are disclosed where they are stored (10.77675ms)
✔ consumer-health-data notice discloses limited request data and service providers (5.169333ms)
✔ homepage describes its privacy boundary without calling tools confidential (1.542916ms)
✔ unused public indexing proxy and false search action stay removed (0.625459ms)
✔ IndexNow retains one canonical public verification key and no fake secret knob (3.155667ms)
✔ dead trust-marketing hero cannot be accidentally revived (0.099458ms)
✔ publisher and named reviewer identities remain separate, public, and private by scope (150.156167ms)
✔ the youth CRAFFT information page contains no affiliate or assessment flow (0.764583ms)
✔ Google Analytics, display advertising, and Clarity runtimes are absent (1.757833ms)
✔ assessment funnel events are compatibility no-ops with no analytics transport (1.798042ms)
✔ the previously missing result pages offer local browser printing (1.605167ms)
✔ retired content stays out of search and internal discovery (6.519292ms)
✔ AI discovery files use maintained canonical URLs and scoped clinical claims (2.999667ms)
✔ Google consent and advertising runtimes are removed rather than conditionally enabled (0.281167ms)
✔ no authorized display-ad seller declaration is published (0.065416ms)
✔ public copy avoids absolute privacy and anonymity promises (214.529333ms)
✔ the sensitive share-client inventory is explicit and complete (69.103958ms)
✔ all centralized clients share only their static tool identity and canonical path (16.854ms)
✔ the sharing boundary emits only a tool name and clean canonical URL (1.130041ms)
✔ HALT remains covered by its dedicated privacy and mobile regression (0.557166ms)
✔ professional pages use a no-health-data service boundary (3.907041ms)
✔ the founding review offer is bounded, priced, and honest (1.969334ms)
✔ the internal review runbook preserves the fixed no-health-data operating boundary (1.03375ms)
✔ the first-sale record requires hosted invoicing and preserves owner-side business gates (1.039666ms)
✔ the professional sales ledger contains business metrics and no health-data fields (1.034625ms)
✔ the free checklist cites primary sources and contains no instrument mechanics (0.510583ms)
✔ the public instrument-rights guide is source-linked and reproduces no instrument mechanics (0.58375ms)
✔ professional discovery is limited to general trust and navigation surfaces (1.633042ms)
✔ security.txt publishes a canonical, dated, web-only contact path (0.510625ms)
✔ axe and the browser runner resolve the same pinned Playwright API (4.956041ms)
✔ the global banner separates treatment referral from crisis counseling (1.55925ms)
✔ evidence directory preserves the study population and conditional reuse sources (1.334875ms)
✔ trust corrections never fabricate a new clinical review or imply free means noncommercial (2.418917ms)
✔ maternal mental-health guidance uses the current ACOG treatment source (0.378125ms)
✔ K6 rights sources use the verified archived National Comorbidity Survey page (0.585583ms)
✔ one registration path silently activates updates without reloading active work (39.319334ms)
✔ install and activation migrate every prior managed cache and sanitize current caches (16.509ms)
✔ offline sensitive navigation receives only the static crisis-safe fallback (3.542416ms)
✔ sensitive subresources fail closed and same-origin analytics never enter Cache Storage (2.618166ms)
✔ install promotion is home-only and cannot render during sensitive work (0.929083ms)
✔ manifest and offline artifact are truthful, installable, and self-contained (3.47975ms)
✔ safety-plan storage recovery and destructive reset fail safely (1.131ms)
✔ all 14 canonical routes are source-level indexable information pages (18.513916ms)
✔ all 14 routes contain the strict YMYL information-only safeguards (11.941792ms)
✔ all 14 routes exclude questionnaire and result mechanics (11.614625ms)
✔ the shared reviewer surface publishes a bounded name and credential (0.771875ms)
✔ group B canonical routes are server-rendered, indexable information pages (6.220167ms)
✔ group B pages preserve rights, privacy, crisis, and non-equivalence safeguards (6.680083ms)
✔ group B pages do not expose instrument mechanics or protected clients (4.271084ms)
✔ group C rights-gated routes are server-rendered, indexable information pages (5.390667ms)
✔ group C questionnaire and scoring clients stay removed (2.830584ms)
✔ shared information surface contains the privacy, diagnostic, and crisis boundaries (0.959875ms)
✔ legacy senior-loneliness wrapper no longer embeds the protected client (0.655208ms)
✔ group A routes remain indexable server-rendered information pages (6.389416ms)
✔ group A questionnaire clients and wrapper page implementations are removed (0.592791ms)
✔ group A legacy URLs use exact permanent canonical redirects (2.69025ms)
✔ only the exact former built-in Veterans contact migrates, once (37.955375ms)
✔ similar or customized Veterans contacts remain unchanged (10.238458ms)
✔ more than 50 valid entries survive load and JSON save (6.435125ms)
✔ malformed storage recovers safely without showing a migration (5.336083ms)
✔ denied storage and destructive-reset cancellation fail safely (5.357958ms)
✔ the one-time migration notice is an accessible status separate from recovery (2.777ms)
✔ urge-surfing copy does not promise a fixed craving timeline or neurological result (1.337875ms)
✔ urge-surfing answers and visible guidance cite current federal sources (0.188084ms)
✔ urge-surfing reflection prompts do not assume a craving peaks or declines (0.458625ms)
✔ DBT physical skills use medically bounded, low-risk examples (1.814125ms)
✔ tool privacy copy distinguishes private inputs from excluded page analytics (0.347666ms)
✔ sensitive routes receive no-store and no-referrer response headers (5.557084ms)
✔ topical routes bypass tracking, advertising, affiliates, and assessment events (6.95425ms)
✔ interactive health tools without generic screening words stay sensitive (2.614834ms)
✔ obsolete Google consent state cannot reactivate optional tracking (1.007458ms)
✔ service worker never caches sensitive routes or optional Google services (0.924375ms)
✔ service worker privacy updates bypass stale script caches and activate promptly (2.1695ms)
✔ history restores reset state, result sharing is disabled, and printing requires a warning (1.208042ms)
✔ screening consent has a stable accessible selector for synthetic monitoring (0.38825ms)
✔ page source contains no crawler-only screen-reader sections (105.789708ms)
✔ quick answers are visible and use description-list semantics (1.722916ms)
✔ PHQ-9 score bands do not prescribe treatment from a score (2.13775ms)
✔ screening hub provides an answer-first, evidence-linked tool chooser (1.100417ms)
✔ consumer-health notice and entity metadata are discoverable without duplicate homepage entities (1.262875ms)
✔ shared navigation exposes disclosure state, names search fields, and restores focus (4.643292ms)
✔ shared shell preserves a keyboard skip target, visible focus, and reduced-motion support (5.383792ms)
✔ date-only review metadata renders as the same calendar date in every time zone (1.219291ms)
✔ the shared disclaimer gate returns focus and scroll to the first questionnaire answer (1.170584ms)
✔ all maintained interactive assessment routes require the shared educational-use gate (15.276708ms)
✔ offline UI states the sensitive-route boundary without promising cached screeners or results (1.99875ms)
✔ footer navigation exposes the consumer-health notice and usable touch targets (1.267ms)
✔ homepage tool filters use button state rather than incomplete tab semantics (1.157583ms)
✔ the persistent clinical disclaimer is a static landmark, not an assertive alert (2.433208ms)
✔ reflection disclosure relies on native button keyboard behavior and hides collapsed content (2.03225ms)
✔ the central tool registry has the required classification fields (5.032125ms)
✔ every maintained navigation tool has a registry record and one visible disclosure (3.35275ms)
✔ classification disclosure is not a monetization or measurement surface (1.327583ms)
✔ trigger worksheet matches its search promise without creating a clinical result (8.600042ms)
✔ custom trigger entry is protected before input and the journey is not monetized (2.49575ms)
✔ trigger worksheet retains reviewer, official sources, crisis actions, and accessible summary focus (1.656333ms)
✔ the root layout is the only main landmark (96.111292ms)
✔ the recovery savings calculator names every mode-specific field (0.686167ms)
✔ shared light-theme secondary text uses accessible contrast overrides (1.280584ms)
✔ quick-answer review dates keep readable contrast in both themes (0.364167ms)
✔ scrollable tables are keyboard-focusable regions (0.460958ms)
✔ clinical evidence description-list groups are direct children (0.389791ms)
✔ public source does not link to retired or nonexistent tool routes (55.66775ms)
✔ doctor-guide links use the maintained canonical route (55.827666ms)
✔ maintained source does not link into the retired blog namespace (33.309833ms)
✔ primary PHQ-9 and GAD-7 assessments appear before long clinical content (0.581958ms)
✔ long-form assessment pages provide an early jump to the tool (0.701875ms)
✔ multi-step worksheet fields keep explicit accessible names (0.779459ms)
✔ tool cards use a singular question label when the count is one (0.2265ms)
✔ work stress content uses relevant primary sources and no false study citation (5.038125ms)
✔ work stress total has no invented clinical bands or monetization surface (1.210042ms)
✔ worry-time scheduler presents mixed evidence across the whole surface (7.32775ms)
✔ privacy surfaces distinguish browser storage from automatic transmission and user copies (5.708208ms)
✔ public reviewer identity is exact, scoped, and centrally represented (6.848042ms)
✔ health-page schema cannot replace the shared reviewer with a thin inline Person (59.122333ms)
✔ public application content excludes unrelated private identity details (62.5585ms)
✔ screening hub exposes only maintained canonical routes and every maintained tool (25.459291ms)
✔ maintained application sources do not link back into the quarantine (57.48525ms)
✔ maintained YMYL routes expose the named reviewer in visible page composition (22.118958ms)
✔ interactive YMYL tools expose the reviewer before the gated client experience (1.542708ms)
✔ custom burnout pages disclose original educational scoring without clinical validation claims (0.771084ms)
✔ homepage distinguishes published screeners from original tools and states storage accurately (0.591416ms)
✔ grief route identifies its PHQ-9 boundary instead of claiming to assess prolonged grief (0.414333ms)
✔ published-instrument evidence links to every instrument advertised by the hub map (0.4515ms)
ℹ tests 246
ℹ suites 0
ℹ pass 246
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 1348.5625
```

### Baseline npm run lint (exit 0)

```text

> mh-tools@0.1.0 lint
> eslint . --ext .js,.mjs,.ts,.tsx --max-warnings=0

```

### Final npm test (exit 0)

```text

> mh-tools@0.1.0 test
> node --test tests/*.test.mjs

✔ Google analytics and consent runtimes remain absent (22.059417ms)
✔ GPC and unknown browser state block aggregate analytics (33.746291ms)
✔ public-to-sensitive navigation disposes of the aggregate runtime (5.62925ms)
✔ hashed Vercel loader removal and clean-document decisions are executable (28.860125ms)
✔ aggregate event filter strips URL details and rejects excluded routes and GPC (11.652334ms)
✔ definite undersized assessment answers enforce 44px height and width (10.141041ms)
✔ the maintained Athens information page preserves the evidence and permission boundary (6.186375ms)
✔ the Athens route remains information-only rather than an available assessment (1.878042ms)
✔ WHO item-level AUDIT guidance raises support by exactly one level (0.498083ms)
✔ lower item responses preserve the total-score support level (0.085583ms)
✔ withdrawal safety guidance is not limited to a total score of 20 (0.09225ms)
✔ approved addiction articles match the recorded review and authorized source correction (0.699209ms)
✔ four distinct awareness guides have resolvable citations and related routes (0.222958ms)
✔ observance dates and uncertainty remain explicit (0.256958ms)
✔ only the two explicitly approved addiction articles are released (14.59525ms)
✔ all awareness routes are isolated from analytics, referrers and service-worker page caches (2.564625ms)
✔ new-article guidance keeps alcohol and drug scope distinct from future LCSW review (3.291084ms)
✔ articles preserve direct crisis actions without forms or commercial CTAs (4.138583ms)
✔ each original illustration is local, optimized, and described (5.150458ms)
✔ recommended reading is a small, disclosed, source-linked list (5.505083ms)
✔ affiliate links stay separate from tracking and crisis content (1.473084ms)
✔ recommended reading is crawlable from maintained public surfaces (3.855125ms)
✔ every braces installation is the exact reviewed depth-guard artifact (1.174584ms)
✔ chokidar: ordinary file globs and nested ranges retain expected output (2.32975ms)
✔ chokidar: deeply nested strings reject before stack exhaustion (2.48225ms)
✔ chokidar: direct AST traversal and option values cannot bypass the bound (1.401042ms)
✔ micromatch: ordinary file globs and nested ranges retain expected output (1.399541ms)
✔ micromatch: deeply nested strings reject before stack exhaustion (1.748958ms)
✔ micromatch: direct AST traversal and option values cannot bypass the bound (0.486625ms)
✔ CBT thought record matches its search promise without creating a clinical result (7.075458ms)
✔ sensitive thought-record entry is protected before input and storage is opt-in (6.226167ms)
✔ CBT thought record retains reviewer, primary sources, crisis actions, and summary focus (1.775333ms)
✔ cognitive-distortion page matches its search promise without clinical overreach (5.15075ms)
✔ cognitive-distortion free text is protected before entry and never monetized (2.702083ms)
✔ cognitive-distortion page retains trust, crisis, privacy, and primary-source signals (1.989833ms)
✔ obsolete analytics consent dialog is removed (5.7335ms)
✔ browser privacy controls remain keyboard-accessible links (2.750334ms)
✔ the footer omits unrelated portfolio backlinks (7.385ms)
✔ homepage and footer identify U.S. crisis services and international options (5.910708ms)
✔ global crisis banner offers direct, body-free mobile contact actions (1.292917ms)
✔ crisis resource cards preserve contact details and expose verified action links (2.165667ms)
✔ Veterans Crisis Line copy uses the current 988 routing (3.050583ms)
✔ tailwindcss: flat selector parsing completes within a bounded child process (279.381625ms)
✔ postcss-nested: flat selector parsing completes within a bounded child process (231.0395ms)
✔ Tailwind and nested PostCSS retain generated print, focus, arbitrary and nested selectors (143.009541ms)
✔ postcss: invalid and excessive indexed source-map offsets reject before expansion (0.729875ms)
✔ postcss: ordinary indexed source maps preserve mapping round trips (1.132458ms)
✔ next/node_modules/postcss: invalid and excessive indexed source-map offsets reject before expansion (0.124125ms)
✔ next/node_modules/postcss: ordinary indexed source maps preserve mapping round trips (0.136583ms)
✔ Next image processing loads patched librsvg and preserves synthetic SVG to PNG output (29.22275ms)
✔ entry audit accepts a compliant information page (6.188083ms)
✔ entry audit rejects misleading previous false positives (3.083959ms)
✔ crawler refuses query strings, external hosts, APIs, and result journeys (0.191ms)
✔ homepage canonical treats an empty path and slash as equivalent (0.309458ms)
✔ audit origin requires exact parsed equality and rejects lookalike URLs (0.120084ms)
✔ location scope, transitive OR clustering, completeness primary and slug ties (4.661583ms)
✔ settled baked-data counts and every emitted facility canonical agree (89.185583ms)
✔ wave 1 threshold and complete directory URL allowlist (143.852417ms)
✔ offline supplement CSV preserves quoted fields and strong keys stay location scoped (31.330333ms)
✔ homepage and shared navigation expose four focused paths (14.901083ms)
✔ canonical production URLs use the apex HTTPS domain (4.52775ms)
✔ directory data: totals are internally consistent and complete (208.371666ms)
✔ directory data: CA license matches exist and SAMHSA decoding is real (11.189917ms)
✔ no-PII: directory surface forms use only allowlisted business fields (25.83675ms)
✔ no-PII: display pages have direct contact links and no forms or relay endpoints (3.914333ms)
✔ guardrails: no barred sales copy anywhere in the new surface (25.151833ms)
✔ guardrails: flat-fee and verify-status-not-quality language is present (2.257417ms)
✔ pricing matches the locked spec numbers (0.854375ms)
✔ checkout is env-gated off by construction (0.948333ms)
✔ findings: phone mismatch and expired license are detected from held data (0.634167ms)
✔ findings: missing phone and unmatched CA roster are gaps, not accusations (0.120208ms)
✔ findings: non-CA facilities get the roster-not-integrated note (0.057666ms)
✔ eligibility: SUD license match rules (0.1575ms)
✔ eligibility: sober living requires NARR-affiliate certification (0.050417ms)
✔ phones: extensions are never glued onto the base number (0.04775ms)
✔ phones: live-data regression — the Anchorage record carrying an extension (1.228875ms)
✔ findings: an extension on one side is not a phone mismatch (0.090084ms)
✔ matching: same name and ZIP at a different street is NOT a match (0.264667ms)
✔ matching: same name and city but a different ZIP is NOT a match (0.041125ms)
✔ matching: a corroborated match attaches with its basis recorded (0.040042ms)
✔ matching: one roster record cannot fan out to two different locations (0.050583ms)
✔ matching: phone corroborates when either side lacks a street number (0.0435ms)
✔ matching: two distinct corroborating records are ambiguity — no match (0.039709ms)
✔ matching: non-CA facilities never get a CA license attached (0.026542ms)
✔ eligibility: the license-number path also checks expiration (0.040917ms)
✔ claim route: eligibility is judged against the current date (1.411167ms)
✔ HALT rating controls reflow without fixed endpoint columns and preserve radio semantics (6.232875ms)
✔ HALT sharing uses the centralized static-name and canonical-link boundary (1.386ms)
✔ HALT remains a sourced reflection and never emits an invented relapse-risk score (5.238458ms)
✔ interactive local-storage tools render their H1 on the server (14.876875ms)
✔ embedded assessments do not introduce a second H1 (3.972959ms)
✔ gated assessment entry pages expose one server H1 throughout the journey (10.071667ms)
✔ homepage presents one consistent, non-generic MindCheck identity (3.376542ms)
✔ homepage answer block preserves strict YMYL and privacy boundaries (1.167959ms)
✔ standard drinks print date is populated only after hydration (0.450458ms)
✔ install prompt has no obsolete analytics-consent dependency (1.062041ms)
✔ install promotion is limited to the neutral home route (0.222291ms)
✔ only an explicit accessible Install action opens the native prompt (0.249833ms)
✔ DASS-21 remains an indexable information page without public administration or scoring (7.223458ms)
✔ CES-D matches the public-domain SAMHSA form and avoids unsupported severity tiers (1.111542ms)
✔ legacy blog manifest covers the exact 115-route retirement set (1.391958ms)
✔ unsupported youth and DAST routes remain honest not-found responses (0.225083ms)
✔ only explicitly equivalent legacy articles redirect (2.056791ms)
✔ redirect graph is one hop and every legacy destination is maintained (1.59025ms)
✔ retired blog source and compatibility shim stay deleted (0.202958ms)
✔ redirected non-blog wrappers retain no latent page implementation (1.839583ms)
✔ the public footer states the current advertising state accurately (9.2455ms)
✔ application source contains no GA4 or display-ad runtime (198.074458ms)
✔ CSP drops Google and ad origins while preserving security protections (0.399042ms)
✔ public disclosures state no Google Analytics or display ads and preserve ordinary-data boundaries (4.662542ms)
✔ Vercel aggregate analytics stays allowlisted, URL-minimized, and GPC-blocked (0.9235ms)
✔ active operating guidance keeps analytics and advertising boundaries explicit (1.327667ms)
✔ review branch does not change main deployment behavior (1.762333ms)
✔ dormant therapy affiliate and email subscription services are removed (7.311417ms)
✔ aggregate navigation keeps its independent positive allowlist (0.998959ms)
✔ PHQ-4 choices expose complete keyboard radio behavior, 44px targets, and announced results (3.880958ms)
✔ PHQ-4 result language keeps screening thresholds non-diagnostic (3.50175ms)
✔ tracked public source contains no absolute confidentiality or transmission promises (198.623042ms)
✔ primary privacy surfaces state the complete local-processing boundary (1.373916ms)
✔ homepage gives the concise boundary without implying invisible page requests (0.57425ms)
✔ privacy policy distinguishes local processing from user-created exports (2.996958ms)
✔ obsolete GA acquisition event is removed (7.045ms)
✔ clean navigation to excluded routes remains enforced (0.969792ms)
✔ cookie-free aggregate analytics is fail-closed and strips URL detail (7.699791ms)
✔ privacy notices describe the aggregate measurement boundary (2.651166ms)
✔ dormant email-capture and therapy-affiliate infrastructure stays removed (1.419958ms)
✔ browser-local health records are disclosed where they are stored (12.2925ms)
✔ consumer-health-data notice discloses limited request data and service providers (3.359333ms)
✔ homepage describes its privacy boundary without calling tools confidential (0.547ms)
✔ unused public indexing proxy and false search action stay removed (0.712166ms)
✔ IndexNow retains one canonical public verification key and no fake secret knob (1.997625ms)
✔ dead trust-marketing hero cannot be accidentally revived (0.084792ms)
✔ publisher and named reviewer identities remain separate, public, and private by scope (96.2195ms)
✔ the youth CRAFFT information page contains no affiliate or assessment flow (6.134084ms)
✔ Google Analytics, display advertising, and Clarity runtimes are absent (4.892625ms)
✔ assessment funnel events are compatibility no-ops with no analytics transport (3.126ms)
✔ the previously missing result pages offer local browser printing (7.745042ms)
✔ retired content stays out of search and internal discovery (8.185709ms)
✔ AI discovery files use maintained canonical URLs and scoped clinical claims (4.178375ms)
✔ Google consent and advertising runtimes are removed rather than conditionally enabled (0.103083ms)
✔ no authorized display-ad seller declaration is published (0.057084ms)
✔ public copy avoids absolute privacy and anonymity promises (142.637ms)
✔ the sensitive share-client inventory is explicit and complete (29.426542ms)
✔ all centralized clients share only their static tool identity and canonical path (11.199125ms)
✔ the sharing boundary emits only a tool name and clean canonical URL (0.445583ms)
✔ HALT remains covered by its dedicated privacy and mobile regression (0.390666ms)
✔ professional pages use a no-health-data service boundary (3.427084ms)
✔ the founding review offer is bounded, priced, and honest (1.979042ms)
✔ the internal review runbook preserves the fixed no-health-data operating boundary (1.001084ms)
✔ the first-sale record requires hosted invoicing and preserves owner-side business gates (0.829125ms)
✔ the professional sales ledger contains business metrics and no health-data fields (1.088459ms)
✔ the free checklist cites primary sources and contains no instrument mechanics (0.95125ms)
✔ the public instrument-rights guide is source-linked and reproduces no instrument mechanics (0.9435ms)
✔ professional discovery is limited to general trust and navigation surfaces (0.732625ms)
✔ security.txt publishes a canonical, dated, web-only contact path (0.473625ms)
✔ axe and the browser runner resolve the same pinned Playwright API (3.544125ms)
✔ the global banner separates treatment referral from crisis counseling (1.141917ms)
✔ evidence directory preserves the study population and conditional reuse sources (0.8165ms)
✔ trust corrections never fabricate a new clinical review or imply free means noncommercial (2.701833ms)
✔ maternal mental-health guidance uses the current ACOG treatment source (0.431583ms)
✔ K6 rights sources use the verified archived National Comorbidity Survey page (0.819583ms)
✔ one registration path silently activates updates without reloading active work (41.649083ms)
✔ install and activation migrate every prior managed cache and sanitize current caches (22.203542ms)
✔ offline sensitive navigation receives only the static crisis-safe fallback (3.737792ms)
✔ sensitive subresources fail closed and same-origin analytics never enter Cache Storage (3.353542ms)
✔ install promotion is home-only and cannot render during sensitive work (1.128959ms)
✔ manifest and offline artifact are truthful, installable, and self-contained (2.487334ms)
✔ safety-plan storage recovery and destructive reset fail safely (1.291834ms)
✔ all 14 canonical routes are source-level indexable information pages (9.908833ms)
✔ all 14 routes contain the strict YMYL information-only safeguards (5.791542ms)
✔ all 14 routes exclude questionnaire and result mechanics (14.343583ms)
✔ the shared reviewer surface publishes a bounded name and credential (0.832541ms)
✔ group B canonical routes are server-rendered, indexable information pages (6.147667ms)
✔ group B pages preserve rights, privacy, crisis, and non-equivalence safeguards (2.829875ms)
✔ group B pages do not expose instrument mechanics or protected clients (2.3755ms)
✔ group C rights-gated routes are server-rendered, indexable information pages (6.413625ms)
✔ group C questionnaire and scoring clients stay removed (3.965167ms)
✔ shared information surface contains the privacy, diagnostic, and crisis boundaries (1.420625ms)
✔ legacy senior-loneliness wrapper no longer embeds the protected client (0.732833ms)
✔ group A routes remain indexable server-rendered information pages (4.935041ms)
✔ group A questionnaire clients and wrapper page implementations are removed (0.228542ms)
✔ group A legacy URLs use exact permanent canonical redirects (3.053458ms)
✔ only the exact former built-in Veterans contact migrates, once (36.543583ms)
✔ similar or customized Veterans contacts remain unchanged (8.850375ms)
✔ more than 50 valid entries survive load and JSON save (6.300083ms)
✔ malformed storage recovers safely without showing a migration (4.872542ms)
✔ denied storage and destructive-reset cancellation fail safely (5.274167ms)
✔ the one-time migration notice is an accessible status separate from recovery (0.7005ms)
✔ urge-surfing copy does not promise a fixed craving timeline or neurological result (0.636542ms)
✔ urge-surfing answers and visible guidance cite current federal sources (0.081208ms)
✔ urge-surfing reflection prompts do not assume a craving peaks or declines (0.217083ms)
✔ DBT physical skills use medically bounded, low-risk examples (0.827917ms)
✔ tool privacy copy distinguishes private inputs from excluded page analytics (0.162833ms)
✔ sensitive routes receive no-store and no-referrer response headers (5.668375ms)
✔ topical routes bypass tracking, advertising, affiliates, and assessment events (2.347917ms)
✔ interactive health tools without generic screening words stay sensitive (3.844375ms)
✔ obsolete Google consent state cannot reactivate optional tracking (1.278958ms)
✔ service worker never caches sensitive routes or optional Google services (1.023083ms)
✔ service worker privacy updates bypass stale script caches and activate promptly (1.292333ms)
✔ history restores reset state, result sharing is disabled, and printing requires a warning (1.41925ms)
✔ screening consent has a stable accessible selector for synthetic monitoring (1.275584ms)
✔ page source contains no crawler-only screen-reader sections (53.721042ms)
✔ quick answers are visible and use description-list semantics (1.043417ms)
✔ PHQ-9 score bands do not prescribe treatment from a score (4.274541ms)
✔ screening hub provides an answer-first, evidence-linked tool chooser (2.192625ms)
✔ consumer-health notice and entity metadata are discoverable without duplicate homepage entities (0.505166ms)
✔ shared navigation exposes disclosure state, names search fields, and restores focus (3.164542ms)
✔ shared shell preserves a keyboard skip target, visible focus, and reduced-motion support (3.316375ms)
✔ date-only review metadata renders as the same calendar date in every time zone (0.890333ms)
✔ the shared disclaimer gate returns focus and scroll to the first questionnaire answer (0.811041ms)
✔ all maintained interactive assessment routes require the shared educational-use gate (9.321334ms)
✔ offline UI states the sensitive-route boundary without promising cached screeners or results (1.31775ms)
✔ footer navigation exposes the consumer-health notice and usable touch targets (0.462875ms)
✔ homepage tool filters use button state rather than incomplete tab semantics (0.886792ms)
✔ the persistent clinical disclaimer is a static landmark, not an assertive alert (0.988875ms)
✔ reflection disclosure relies on native button keyboard behavior and hides collapsed content (1.049458ms)
✔ the central tool registry has the required classification fields (2.849125ms)
✔ every maintained navigation tool has a registry record and one visible disclosure (1.563ms)
✔ classification disclosure is not a monetization or measurement surface (0.720292ms)
✔ trigger worksheet matches its search promise without creating a clinical result (3.067958ms)
✔ custom trigger entry is protected before input and the journey is not monetized (1.186917ms)
✔ trigger worksheet retains reviewer, official sources, crisis actions, and accessible summary focus (0.68475ms)
✔ the root layout is the only main landmark (58.873583ms)
✔ the recovery savings calculator names every mode-specific field (0.963542ms)
✔ shared light-theme secondary text uses accessible contrast overrides (0.390083ms)
✔ quick-answer review dates keep readable contrast in both themes (0.366875ms)
✔ scrollable tables are keyboard-focusable regions (0.492ms)
✔ clinical evidence description-list groups are direct children (0.3485ms)
✔ public source does not link to retired or nonexistent tool routes (42.2885ms)
✔ doctor-guide links use the maintained canonical route (39.269125ms)
✔ maintained source does not link into the retired blog namespace (44.083083ms)
✔ primary PHQ-9 and GAD-7 assessments appear before long clinical content (0.9385ms)
✔ long-form assessment pages provide an early jump to the tool (0.892875ms)
✔ multi-step worksheet fields keep explicit accessible names (1.365791ms)
✔ tool cards use a singular question label when the count is one (0.272042ms)
✔ work stress content uses relevant primary sources and no false study citation (3.12725ms)
✔ work stress total has no invented clinical bands or monetization surface (1.081417ms)
✔ worry-time scheduler presents mixed evidence across the whole surface (6.686167ms)
✔ privacy surfaces distinguish browser storage from automatic transmission and user copies (2.450917ms)
✔ public reviewer identity is exact, scoped, and centrally represented (4.8265ms)
✔ health-page schema cannot replace the shared reviewer with a thin inline Person (38.212917ms)
✔ public application content excludes unrelated private identity details (42.326417ms)
✔ screening hub exposes only maintained canonical routes and every maintained tool (14.228916ms)
✔ maintained application sources do not link back into the quarantine (67.609625ms)
✔ maintained YMYL routes expose the named reviewer in visible page composition (20.130333ms)
✔ interactive YMYL tools expose the reviewer before the gated client experience (1.259917ms)
✔ custom burnout pages disclose original educational scoring without clinical validation claims (0.648334ms)
✔ homepage distinguishes published screeners from original tools and states storage accurately (0.493083ms)
✔ grief route identifies its PHQ-9 boundary instead of claiming to assess prolonged grief (0.34475ms)
✔ published-instrument evidence links to every instrument advertised by the hub map (0.477541ms)
ℹ tests 250
ℹ suites 0
ℹ pass 250
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 1198.122792
```

### Final npm run lint (exit 0)

```text

> mh-tools@0.1.0 lint
> eslint . --ext .js,.mjs,.ts,.tsx --max-warnings=0

```

### Server-free metadata verification (exit 0)

```text
{
  "totalSitemap": 12709,
  "core": 90,
  "facilityMetadataChecked": 12200,
  "cityMetadataChecked": 4180,
  "stateMetadataChecked": 54,
  "directoryDates": [
    "2026-11-02"
  ]
}
```

### Online dependency audit (exit 1; network failure)

```text
npm warn audit request to https://registry.npmjs.org/-/npm/v1/security/advisories/bulk failed, reason: getaddrinfo ENOTFOUND registry.npmjs.org
npm error audit endpoint returned an error
{
  "message": "request to https://registry.npmjs.org/-/npm/v1/security/advisories/bulk failed, reason: getaddrinfo ENOTFOUND registry.npmjs.org",
  "error": {
    "summary": "",
    "detail": ""
  }
}
npm error Log files were not written due to an error writing to the directory: /Users/jasonramirez/.npm/_logs
npm error You can rerun the command with `--loglevel=verbose` to see the logs in your terminal
```

### Source discovery command outputs

```json
[
  {
    "source": "nppes",
    "url": "https://download.cms.gov/nppes/NPI_Files.html",
    "exit": 6,
    "output": "  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n\n  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: download.cms.gov\n"
  },
  {
    "source": "TX",
    "url": "https://data.texas.gov/",
    "exit": 6,
    "output": "  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n\n  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: data.texas.gov\n"
  },
  {
    "source": "FL",
    "url": "https://www.floridahealthfinder.gov/",
    "exit": 6,
    "output": "  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n\n  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: www.floridahealthfinder.gov\n"
  },
  {
    "source": "NY",
    "url": "https://data.ny.gov/",
    "exit": 6,
    "output": "  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n\n  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: data.ny.gov\n"
  },
  {
    "source": "OH",
    "url": "https://mha.ohio.gov/",
    "exit": 6,
    "output": "  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n\n  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: mha.ohio.gov\n"
  },
  {
    "source": "PA",
    "url": "https://data.pa.gov/",
    "exit": 6,
    "output": "  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n\n  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: data.pa.gov\n"
  },
  {
    "source": "IL",
    "url": "https://data.illinois.gov/",
    "exit": 6,
    "output": "  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n\n  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: data.illinois.gov\n"
  },
  {
    "source": "CCAPP",
    "url": "https://ccapp.us",
    "exit": 6,
    "output": "  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n\n  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: ccapp.us\n"
  },
  {
    "source": "NARR",
    "url": "https://narronline.org/affiliates/",
    "exit": 6,
    "output": "  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n\n  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: narronline.org\n"
  }
]
```
