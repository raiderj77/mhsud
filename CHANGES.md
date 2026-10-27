# Content-depth expansion

Working-tree changes only. Counts are source-file words from `wc -w`, using the supplied baselines; they include markup as well as visible prose.

| File | Before | After | Delta |
| --- | ---: | ---: | ---: |
| `src/app/brief-resilience-scale/page.tsx` | 709 | 1177 | +468 |
| `src/app/holmes-rahe-stress-inventory/page.tsx` | 763 | 1237 | +474 |
| `src/app/urge-surfing-timer/page.tsx` | 549 | 1113 | +564 |
| `src/app/sleep-and-mood-check/page.tsx` | 613 | 1229 | +616 |
| `src/app/halt-check-in/page.tsx` | 715 | 1361 | +646 |
| `CHANGES.md` | 0 (new) | 378 | +378 |

- **Brief Resilience Scale:** Added three overview paragraphs on resilience as a process, self-report context, and research interpretation, plus two FAQs about resources and support needs. No internal links added; alternatives and sources unchanged.
- **Holmes-Rahe:** Added three overview paragraphs on life-change research, appraisal/context, and checklist limitations, plus two FAQs. No instrument items, numerical weights, calculations, or bands added. No internal links added; alternatives and sources unchanged.
- **Urge surfing:** Added a server-rendered practice guide, common difficulties, complementary coping options, and two FAQs. Added internal links to `/halt-check-in`, `/relapse-prevention-plan`, `/five-senses-grounding`, `/box-breathing-exercise`, and `/crisis-resources`.
- **Sleep and mood:** Added a server-rendered guide to an optional separate log, reviewing a week without causal conclusions, privacy and self-report limitations, plus two FAQs. Added internal links to `/work-stress-check`, `/daily-recovery-check-in`, `/five-senses-grounding`, and `/crisis-resources`; the tool remains a one-time reflection without saved entries.
- **HALT:** Added a server-rendered guide to the four states, small practical next steps, limitations, and two FAQs. Added internal links to `/urge-surfing-timer`, `/daily-recovery-check-in`, `/sleep-and-mood-check`, `/relapse-prevention-plan`, and `/crisis-resources`.

Existing disclaimers, crisis resources, metadata, canonicals, reviewer components, and client logic remain unchanged. No external links, dependencies, accounts, analytics, or paid services added.

Validation: `npm run lint:content` and `git diff --check` passed. `npm test` reported 182 passing tests and six failing test files because required dependencies are absent (including TypeScript and chokidar). `npx tsc --noEmit` could not complete without installed dependencies and was interrupted after waiting without output. No dependency or configuration files were changed. Final status contains only the five target pages and this new document.

TRUTHMODE: REVISE for release readiness because full test and type validation remain incomplete. Educational scope and existing rights boundaries are preserved. Rollback consists of removing these working-tree additions.
