# CLAUDE.md — mindchecktools.com

## Project Overview
Mental health screening tools website. Free, private, browser-based self-checks for depression, anxiety, alcohol use, burnout, and more. This is a YMYL (Your Money Your Life) site — Google holds it to the highest quality standards.

**Live URL:** https://mindchecktools.com
**GitHub:** raiderj77/mhsud
**Hosting:** Vercel (auto-deploys when you push to main)
**Owner:** Solo entrepreneur with CADC-II (Certified Alcohol and Drug Counselor II, 11 years clinical experience in substance abuse counseling)

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- No database — all tools run client-side in the browser
- No user accounts — privacy-first, nothing stored

## Project Structure
```
src/
├── app/                    # Pages (App Router)
│   ├── page.tsx           # Homepage
│   ├── phq-9-depression-test/
│   ├── gad-7-anxiety-test/
│   ├── audit-alcohol-test/
│   ├── audit-c-alcohol-screen/
│   ├── mental-load-calculator/
│   ├── sleep-and-mood-check/
│   ├── work-stress-check/
│   ├── crisis-resources/
│   ├── blog/              # Blog posts (MDX or similar)
│   └── (legal pages: about, privacy, terms, accessibility, cookies)
├── components/
│   ├── Footer.tsx
│   └── (other shared components)
└── (lib, utils, types as needed)
```

## Critical Rules — NEVER Violate These

### YMYL Compliance (Non-Negotiable)
1. **Every tool page MUST include:**
   - Clinical disclaimer: "This is a screening tool for educational purposes only — not a diagnosis"
   - 988 Suicide & Crisis Lifeline (call or text 988)
   - SAMHSA National Helpline: 1-800-662-4357
   - "Always consult a qualified healthcare professional"
   - Privacy statement: "Your responses are processed entirely in your browser and are never stored or transmitted"

2. **Every blog post MUST include:**
   - Author bio: "Reviewed by a Certified Drug and Alcohol Counselor (CADC-II) with 11 years of clinical experience in substance abuse counseling"
   - NEVER include Jason's name in public-facing content (blog posts, bios, about page)
   - Links to relevant crisis resources
   - Clinical disclaimer

3. **NEVER:**
   - Use Jason's real name in ANY public-facing content (blog posts, author bios, about page, anywhere visitors can see)
   - Claim more than 11 years of counseling experience
   - Diagnose or claim to diagnose any condition
   - Recommend specific medications or treatments
   - Store, transmit, or log any user responses
   - Use language that minimizes mental health concerns
   - Remove or weaken any existing disclaimers or crisis resources

### Tool Development Standards
- All screening tools use validated, public domain instruments (PHQ-9, GAD-7, AUDIT, etc.)
- Always cite the original instrument authors
- Results must include score interpretation WITH the caveat that only professionals can diagnose
- Include a consent/acknowledgment step before users can start a screening
- Show crisis resources prominently, especially on tools related to depression or self-harm

### SEO Requirements
- Every tool page needs: optimized title tag (<60 chars), meta description (<155 chars), H1 with target keyword
- Every tool page needs SoftwareApplication JSON-LD schema
- Every tool page needs FAQPage JSON-LD schema (5 relevant questions)
- Every page needs BreadcrumbList schema
- Internal links: every tool links to 2-3 related tools, every blog post links to relevant tools
- Hub-and-spoke: homepage is the hub, tools and blog posts are spokes

## Existing Branches (Milton Leftovers)
There are unmerged branches from a previous AI agent. Before creating new branches, check if the work already exists:
- agent/add-burnout-assessment-tool
- agent/add-samhsa-to-all-tools
- agent/add-author-bio-to-blogs
- agent/anxiety-coping-strategies-blog
- agent/fix-sad-eslint-errors
- blog/depression-screening-guide
- blog/seasonal-affective-disorder
- upgrade/adsense-blog-share

## Git Workflow
1. Always work on a feature branch (never commit directly to main)
2. Branch naming: feature/[description] or fix/[description]
3. Show Jason the diff before merging to main
4. Pushing to main triggers Vercel auto-deploy — be careful
5. Test locally with `npm run dev` before pushing

## Communication Style
Jason needs ALL instructions explained step-by-step like he is 5 years old. Never assume he knows how to do something. Always break it down into the simplest possible steps with exact commands.

## Current Priorities (March 2026)
1. Audit and merge Milton's unmerged branches
2. Add schema markup to all tool pages
3. Implement AdSense (max 2-3 units per page, tasteful placement)
4. Build more screening tools (burnout assessment is next)
5. Create pSEO pages: "[condition] test for [demographic]"
