# Private professional handoff sample

**Prepared and locally tested; not deployed, sold or verified on a customer.**
Start with [IMPLEMENTATION-HANDOFF.md](IMPLEMENTATION-HANDOFF.md). It is a filled,
editable fictional delivery artifact, not a policy summary. Its structured
companion is [handoff.json](handoff.json). Neither is connected to the public site.

## What changed and why

The existing public fictional sample already explains four findings. The existing
operations runbook already defines scope and delivery QA. This small package
adds the missing handoff between them: stable finding/evidence/route/action IDs,
proposed owner roles, exact bounded retests and unresolved decisions. It reuses
the four findings and makes their invented provenance explicit. No real site,
customer, health data or instrument was evaluated.

All work is under this prototype directory on isolated branch
`codex/mindcheck-private-handoff-20261011`, based on
`53b106d19501fc5d460d0ae3169d7d2f89cb3860`. No app/public files, public offer,
scoring, instrument rights, crisis controls, privacy controls, dependencies,
payments or services changed. This is original evidence organization, not a paid
instrument bundle or an expansion of the $495 service's exclusions.

## Evidence and limits

- [PLAN.md](PLAN.md) freezes scope, 90-minute timebox, $0 new-spend ceiling,
  acceptance checks and AI-substitution hypothesis before implementation.
- [tasks.json](tasks.json) and [oracle.json](oracle.json) contain ten delivery
  decisions and independent expected results defined before the package.
- [ai-baseline.json](ai-baseline.json) preserves the blind in-session AI answers
  using only the existing sample/runbook/readiness record, with no feedback.
- [handoff.test.mjs](handoff.test.mjs) checks references, roles, unknowns and
  misleading mutation cases. It is test-only code, not an intake or release tool.
- Final comparison and review results are recorded in `verification.json`.

Initial tests: 17 artifact checks and 4 selected existing professional-boundary
checks passed, no failures/skips (Node 22.22.3). They ran in a credential-free WSL
mount/network/PID namespace, with only staged allowlisted files, no repository
credentials, no data ledger and no network. Production build/browser/clinical
tests were not run: production source is unchanged and the deliverable is a
private Markdown/JSON document. This is not a new application UI.

The first runner invocation stopped before executing tests because the Windows
worktree Git pointer was not usable by WSL; explicit `GIT_DIR`/`GIT_WORK_TREE`
resolved that invocation issue. No runtime permission was loosened. The initial
task metadata guessed a freeze timestamp later than the comparator clock. That
incorrect timestamp was removed; the question and oracle content stayed frozen.
The comparator's original observation of the error is retained. Tool ordering
and recorded hashes, not that guessed timestamp, establish pre-code preparation.

The measured AI batch took 33 seconds including source reads. Automated test
milliseconds, AI batch time and human document use are different measures.
Human completion time, correction effort, actual delivery hours and repeat use
are **UNTESTED**. The tested in-session assistant was accessible; a verified
strongest-model comparison is **UNTESTED**. No claim of AI superiority is made.

## Reproduce bounded local checks

Stage edited sample files first. In WSL use the existing system Node and Git;
no install or package download is needed. For this Windows-created worktree:

```sh
cd /mnt/c/Users/jason/.codex/worktrees/mindcheck-private-handoff-20261011
export GIT_DIR=/mnt/c/Users/jason/Documents/mhsud/.git/worktrees/mindcheck-private-handoff-20261011
export GIT_WORK_TREE=/mnt/c/Users/jason/.codex/worktrees/mindcheck-private-handoff-20261011
bash prototypes/professional-handoff/run-isolated.sh
```

The helper tests staged tracked inputs and leaves temporary local QA directories.
It installs nothing and starts no service. The four selected existing tests
cover professional-page boundaries, fixed offer, operating runbook and first-sale
record. The rest of the site's suite is not a claimed check of this artifact.

## Remaining weaknesses

This organizes invented evidence; it cannot verify a real product or grant
rights. Dates are UNKNOWN where no observation occurred. Owner-role assignments
are proposals. All four findings remain unresolved, all retests unperformed.
The original sample's result wording is narrative, not an inspected result.
Manual accessibility and assistive-technology review are unperformed. A capable
AI can draft similar material; value depends on measured buyer effort and trust,
neither of which has been established here. Maintaining two editable formats
requires checking both; tests catch selected inconsistencies, not every semantic
disagreement. No generic exporter or additional tool was added.

## Proposed demand test — not started

Stable ID: **MCT-HANDOFF-DEMAND-20261011-v1**. This must wait until the existing
FiberTools pin experiment is reviewed and a slot is available. It also needs
exact outreach/recruitment and private-sharing authorization; this task supplies
neither. No participant was contacted, payment collected, tracking installed or
schedule created.

- **Customer task:** a software product/engineering lead uses the fictional
  package to assign one safe next action and identify what prevents closure.
- **Baseline:** current professional inquiry/conversion/demand is UNKNOWN from
  the records inspected. Measure both the current-sample and new-package tasks
  in the assigned counterbalanced order; do not invent historical zeros or claim
  causal attribution.
- **Deliverable:** eight consented, qualified software-team decision makers see
  the same private fictional package and existing $495 bounded service scope.
  Use counterbalanced document order for the secondary usability comparison.
- **Exclusions:** health/client data, clinical or legal advice, instrument items,
  testimonials, discounts for endorsements, ads, paid recruitment, invoices,
  account creation, real staging access and code remediation.
- **Timebox/cost:** 14 days after first authorized participant, at most four
  active operator hours, $0 new cash/reservations/commitments. Existing time and
  subscription costs must be recorded separately; no assumed $50 allowance.
- **Primary metric:** number of qualified participants explicitly requesting a
  written scope at the stated $495 price; denominator eight completed sessions.
  A scope request is interest, not a sale or revenue. Secondary measures are
  correct task completion, elapsed minutes and clarification/correction count.
- **Observation/minimum:** complete eight sessions and allow each participant
  seven days to make a scope request, within the 14-day window. If recruitment
  timing prevents complete observation, result is inconclusive; do not extend
  automatically. Retain only permitted aggregate/business-level data.
- **Success:** at least two qualified scope requests with all eight sessions and
  observation windows complete. **Failure:** zero requests with complete coverage.
  **Inconclusive:** one request, fewer than eight sessions, incomplete follow-up
  or unreliable measurement. None of these automatically permits a sale/scale.
- **Rollback:** stop the test; keep the public free tools unchanged. Withdraw
  this sample from any future offer through the actually authorized channel.
  Do not delete records or copies without applicable retention/deletion authority.

First-sale terms, accepted scope, business/payment identity, delivery/retention,
capacity and relevant qualified decisions remain separate. Per the owner's
direction, no Stripe setup is part of this work.

## Local rollback

Keep this branch as an auditable sample, or revert its local sample commit.
It has no production integration, so no deployment rollback is required. Do not
reset or remove unrelated worktrees. No push, PR, merge or deployment is planned.

**Costs/outcomes:** $0 purchases, paid API calls or new financial commitments.
Existing Codex subscription allocation and operator cost are unpriced; total
cost is UNKNOWN. No measured demand, revenue or profit resulted from this work.
