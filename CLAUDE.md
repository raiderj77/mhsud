# MindCheck Tools — Project Context

## What This Is
MindCheck Tools (mindchecktools.com) is a mental health self-check website providing validated screening tools. All screening answers are processed client-side in the browser — no answer data is ever sent to a server. Privacy is the core differentiator.

## Tech Stack
- **Framework:** Next.js 14.2.35 (App Router)
- **Language:** TypeScript 5.9.3
- **Styling:** Tailwind CSS with custom design tokens (sage, sand, warm, night color palettes)
- **Deployment:** Vercel (auto-deploys from `main` branch)
- **Domain:** mindchecktools.com
- **Analytics:** Google Analytics GA4 (G-XKHQN1NJ2Z) with Consent Mode v2
- **Git:** https://github.com/raiderj77/mhsud.git

## Architecture
- All tool scoring is 100% client-side JavaScript — no server calls for questionnaire data
- Static site generation (all pages are `○ Static`)
- Server components for metadata/SEO, client components for interactivity
- Each tool has: `page.tsx` (server, metadata) + `ToolClient.tsx` (client, scoring logic)
- `DisclaimerGate` component blocks tool access until user acknowledges "not a diagnosis"
- Cookie consent banner with Google Consent Mode v2 — GA cookies blocked until user consents
- Global Privacy Control (GPC) signal honored automatically

## Project Structure
```
src/
├── app/
│   ├── layout.tsx              # Root layout, GA Consent Mode, fonts
│   ├── page.tsx                # Homepage
│   ├── phq-9-depression-test/  # PHQ-9 tool (validated)
│   ├── gad-7-anxiety-test/     # GAD-7 tool (validated)
│   ├── audit-alcohol-test/     # AUDIT tool (validated, WHO)
│   ├── audit-c-alcohol-screen/ # AUDIT-C tool (validated)
│   ├── work-stress-check/      # Work stress tool (original)
│   ├── mental-load-calculator/ # Mental load tool (original)
│   ├── sleep-and-mood-check/   # Sleep & mood tool (original)
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   ├── phq-9-guide/        # PHQ-9 educational article
│   │   ├── gad-7-guide/        # GAD-7 educational article
│   │   └── audit-guide/        # AUDIT educational article
│   ├── crisis-resources/       # Crisis hotlines (US + international)
│   ├── about/
│   ├── privacy/
│   ├── cookies/                # Cookie policy
│   ├── terms/                  # Terms of use, GDPR/CCPA rights
│   ├── accessibility/          # WCAG 2.1 AA statement
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── CookieConsent.tsx       # Cookie banner + Consent Mode v2
│   ├── DisclaimerGate.tsx      # Pre-tool disclaimer checkpoint
│   ├── AdSlot.tsx              # Ad placement component (33 slots total)
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── CrisisBanner.tsx
│   └── ThemeProvider.tsx
└── lib/
    ├── metadata.ts             # SEO helpers, JSON-LD generators
    └── blog.ts                 # Blog post registry
```

## Key Rules
1. **Never send screening answers to a server.** All scoring must stay in client-side JS.
2. **Disclaimers are core UX.** Every tool has pre-test disclaimer, post-result disclaimer, and crisis section.
3. **No ads near crisis content.** Ad slots are positioned away from emergency text and safety resources.
4. **Medical disclaimer everywhere.** "Not a diagnosis, not medical advice, no provider-patient relationship."
5. **Cookie consent required before GA fires.** Consent Mode v2 defaults all to `denied`.
6. **Honor GPC signal.** If browser sends Global Privacy Control, auto-reject non-essential cookies.

## Current Pages (23 total)
- 7 interactive tools (4 validated clinical + 3 original reflection)
- 3 blog articles (~1800 words each, with FAQ schema)
- Crisis resources hub
- Privacy Policy, Cookie Policy, Terms of Use, Accessibility Statement
- About page, Blog listing, Homepage

## Ad Slots
- 7 tool pages × 3 slots = 21 slots
- 3 blog articles × 4 slots = 12 slots
- Total: 33 ad positions ready for monetization
- No ads active yet — AdSlot component renders placeholder

## Known Issue
There is a persistent build error on the local machine: `blog/[slug]/page.tsx doesn't have a root layout`. This file does NOT exist anywhere in the codebase. The error does not occur in other environments. Likely a local Next.js cache or environment artifact.

## Upcoming Work (from Blueprint)
- Tier 3 tools: Substance Use Reflection, Readiness to Change Ladder
- Additional blog articles for Tier 2 tools
- Google Search Console verification and sitemap submission
- Ad network integration when traffic justifies
- PWA/service worker for offline capability
