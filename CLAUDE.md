# CLAUDE.md - mindchecktools.com
# Claude Code reads this automatically. Follow every instruction.

## IDENTITY
This is the mindchecktools.com codebase. Mental health screening tools.
NUMBER ONE PRIORITY SITE in the portfolio. YMYL content.
Google holds health content to the HIGHEST standard.

## BEFORE DOING ANYTHING
1. Read this entire file first.
2. Read EMPIRE_BUILD_STANDARDS.md in this repo root before deploying anything.
3. Show Jason a plan before making any changes. Wait for his approval.
4. Explain everything step-by-step as if Jason is 5 years old.
5. Never assume he knows how to do something.

## REPO STRUCTURE

### Tier 1: Read First (Always)
- CLAUDE.md (this file)
- EMPIRE_BUILD_STANDARDS.md (quality gate for every deploy)
- src/config/ (centralized tool config - auto-populates nav, footer, sitemap)
- src/app/layout.tsx (root layout, global metadata, AdSense script)
- shared_reasoning.md (Agent Council decisions)

### Tier 2: Read When Task Touches This Area
- src/app/tools/ (all 7 tool pages)
- src/app/blog/ (all blog posts and blog layout)
- src/app/components/ (shared UI: ad units, disclaimers, crisis resources)
- public/ (static assets, llms.txt, robots.txt, sitemap)

### Tier 3: Never Read Unless Jason Asks
- node_modules/, .next/, .git/, .env files

## TECH STACK
- Next.js App Router with TypeScript and Tailwind CSS
- Hosted on Vercel (auto-deploys when you push to main - BE CAREFUL)
- Client components for interactive tools, server components for pages
- Adding a new tool: add to config, create page + component, auto-appears in nav/footer/sitemap

## YMYL REQUIREMENTS (Non-Negotiable)
Every tool page MUST have:
- SAMHSA hotline: 1-800-662-4357
- 988 Suicide and Crisis Lifeline
- Clinical disclaimer (screening tool, not a diagnosis)
- Privacy note (all processing in browser)
- Author bios on blog content (Reviewed by a CADC-II)
- NO personal name anywhere on any page

Never use: diagnose, diagnosis, cure, treatment plan
Always use: screening, assessment, check, may indicate

## WORKFLOW (Baby Steps - Never Skip)
1. AUDIT: Read relevant code files, report what you find
2. PLAN: Show what you intend to do, wait for approval
3. EXECUTE: Make changes one at a time
4. REVIEW: Show the result
5. STANDARDS CHECK: Verify against EMPIRE_BUILD_STANDARDS.md
6. DEPLOY: Push to main ONLY after Jason says OK
7. VERIFY: Confirm live site looks correct

## CURRENT STATUS
- 7 tools live, 6 blog posts live
- AdSense integrated, awaiting approval
- E-E-A-T compliance complete
- Agent Council installed
- GSC: 15 clicks, 77 impressions, 19.5% CTR, position 21.5

## DO NOT
- Push to main without explicit approval
- Delete files without asking
- Build new features before auditing what exists
- Skip the plan step
- Make medical claims or use diagnostic language
- Put personal names on anything public-facing
- Ignore EMPIRE_BUILD_STANDARDS.md
