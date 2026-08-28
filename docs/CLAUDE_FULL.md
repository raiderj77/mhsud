# MindCheck Tools — CLAUDE.md

> **MindCheckTools override — August 27, 2026:** No display advertising or ad networks, on any route. This supersedes all conflicting ad setup, CPM, placement, revenue and release instructions below. Preserve GPC, consented analytics, security, rights controls and free safety resources. Historical metrics are not current evidence. See the repository policy at `docs/no-display-advertising.md`. Other portfolio sites are outside this override.

> Source of truth for Claude Code on this project. Last updated: 2026-03-09

## Before Doing Anything
1. Read this file and EMPIRE_BUILD_STANDARDS.md first
2. Show Jason a plan. Wait for approval.

## Project Identity

- **Site**: MindCheck Tools
- **Domain**: mindchecktools.com
- **Purpose**: Mental health screening tools (PHQ-9, GAD-7, AUDIT, AUDIT-C, Mental Load Calculator)
- **Type**: utility-site
- **Compliance Tier**: Full YMYL

## Tech Stack

- **Framework**: Next.js (App Router)
- **Deployment**: Vercel (auto-deploys on push to main — BE CAREFUL)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm
- **Consent manager**: first-party, local browser choices; no paid CMP runtime
- Client components for interactive tools, server components for pages
- Config-driven architecture: adding a tool to config auto-populates nav, footer, sitemap

## 1. No Display Advertising & Commercial Separation

- No display ads or advertising networks; no seller file, ad loader, activation flag, or ad consent option.
- Keep core tools, interpretation and crisis/safety information free.
- Disclosed affiliates and professional services stay separate from sensitive journeys; never target from results.
- Preserve homepage-only opt-in Google Analytics, aggregate route allowlists, GPC, and permanently denied Google ad signals.
- Do not add a CMP, paid vendor, new tracking or commercial product without explicit approval.

## 2. SEO — Google Search Essentials

- Use SSR or SSG for all public pages (critical for both Google and Bing crawlability)
- No cloaking, doorway pages, hidden text, link spam, or sneaky redirects
- Each page must provide substantive unique value
- AI-generated content permitted if genuine value added

## 3. Core Web Vitals

Target thresholds (at 75th percentile):
- **LCP** ≤ 2.5 seconds
- **INP** ≤ 200 milliseconds
- **CLS** ≤ 0.1

How to maintain these:
- Use `next/image` with width/height props (prevents CLS)
- Use `next/font` (prevents font-loading shifts)
- Leverage Vercel ISR/SSR for LCP optimization
- Audit remaining third-party scripts for INP impact without expanding tracking

## 4. E-E-A-T Content Standards

- Display author credentials on every content page
- Create dedicated author bio pages with Person schema
- Maintain About page with verifiable organizational info and mission
- Include Contact information accessible from every page
- Describe editorial review process (especially for YMYL content)
- Attribution in body copy: use the official credential name, "Certified Alcohol and Drug Counselor Level II (CADC-II)," and keep claims within substance use counseling scope.
- Attribution in bylines: named attribution REQUIRED for E-E-A-T — "Reviewed by Jason Ramirez — Certified Alcohol and Drug Counselor Level II (CADC-II) with 11 years of substance use counseling experience. See /about/jason-ramirez."
- Maintained screening pages must show named review, traceable sources, limitations, and review dates. CADC-II is a professional certification, not a medical or independent mental health license.

## 5. Structured Data (JSON-LD)

Use JSON-LD format. Place via Next.js generateMetadata() or Script component.

Required schema types for this site:
- Organization (homepage)
- WebSite (homepage)
- WebApplication (each screening tool)
- FAQPage (FAQ sections)
- Person (reviewer bio)
- BreadcrumbList (all pages)

Rules:
- All markup must match visible page content exactly
- Include dateModified on all content (critical freshness signal for search and AI)
- Validate with Google Rich Results Test and Bing Markup Validator

## 6. Mobile-First Requirements

- Content parity: mobile must contain ALL desktop content
- Same structured data and meta robots on mobile and desktop
- Responsive design with viewport meta tag
- Touch targets: 48px minimum
- Body text: 16px minimum
- No intrusive interstitials
- Don't block CSS/JS/images from crawlers

## 7. Bing-Specific Optimization

- Include `<meta name="keywords">` tag (Bing still uses it, Google ignores)
- Write descriptive meta descriptions (Bing shows them more literally)
- SSR/SSG is MANDATORY — Bingbot has very limited JS rendering
- IndexNow: API route at /api/indexnow, key file in /public, trigger on deploy
- Store INDEXNOW_API_KEY in Vercel environment variables
- Crawl-delay: 10 for Bingbot in robots.txt
- Title, H1, meta description must be aligned and consistent
- Do NOT hide content behind tabs, accordions, or expandable menus

## 8. GEO / AI Discoverability

### llms.txt
Serve `/llms.txt` at site root (Markdown, text/plain MIME type). Include site name, description, links to key pages with descriptions. Also create `/llms-full.txt` with full content.

### robots.txt AI Crawlers
Configure in `public/robots.txt`. Allow all search-facing AI crawlers:
- OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Applebot-Extended, DuckAssistBot, Amazonbot
- Allow or block training crawlers (GPTBot, ClaudeBot, Google-Extended) per preference
- Block: Bytespider, Meta-ExternalAgent

### Content Structure for AI
- Answer-first format: lead sections with 1-3 sentence direct answers
- Question-based headings ("How does X work?")
- Self-contained sections extractable as standalone snippets
- Short paragraphs (2-4 sentences)
- Include statistics and data (boosts AI visibility 15-30%)
- Add visible "Last Updated" dates
- Set meta robots: `index, follow, max-snippet:-1`
- SSR all critical content (AI crawlers don't execute JS)

## 9. Privacy & Consent

### Required Pages
- `/privacy` — Privacy Policy (update annually, include GDPR + CCPA sections)
- `/terms` — Terms of Service

### Privacy Policy Must Include
- Data controller identity, lawful basis, data categories, retention periods
- Actual third-party recipients (hosting, consented analytics and voluntary email); no advertising network
- Consumer rights (access, delete, correct, opt-out)
- CCPA: "Do Not Sell or Share" link on homepage
- Honor Global Privacy Control (GPC) signals

### Cookie Consent
- EU/EEA/UK: Opt-in model (consent before tracking)
- US: Opt-out model (honor GPC)
- First-party consent manager. Google Analytics must not load before explicit analytics consent or outside the homepage; GPC suppresses both Google and aggregate analytics. Display ads are prohibited regardless of consent.

### Health Data Privacy (CRITICAL)
- Treat ALL screening data as sensitive requiring explicit consent
- NEVER pass health screening data to advertising systems
- GDPR Article 9: health data is special category requiring explicit consent
- Washington My Health My Data Act: broad health data protections
- Maryland MODPA (Oct 2025): bans sale of health data
- Privacy policy must specifically address health data collection and retention
- Process screening results client-side where possible to minimize data exposure

## 10. Accessibility (WCAG 2.1 AA)

- Alt text on all images (alt="" for decorative)
- Color contrast: 4.5:1 normal text, 3:1 large text
- All functionality via keyboard, no keyboard traps
- Skip navigation links
- Visible focus indicators on all interactive elements
- Touch targets: 44x44 CSS pixels minimum
- `lang` attribute on `<html>` element
- Form errors with descriptive messages, visible labels (not just placeholders)
- Valid semantic HTML, proper ARIA roles
- Dynamic content changes announced via ARIA live regions
- Content reflow at 320px without horizontal scroll
- European Accessibility Act (June 2025): publish accessibility statement
- Consider AAA criteria for cognitive accessibility given vulnerable users. Screen reader announcements for all screening results.

## 11. Security Headers

Configure in `vercel.json` or `next.config.js` headers:

```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), interest-cohort=()
```

CSP: use the current `next.config.mjs` policy. Keep ad origins absent, `frame-src` and `frame-ancestors` at `none`, and `unsafe-eval` absent. Preserve required analytics sources and existing application behavior. A nonce migration needs its own review; do not weaken headers for advertising.

Use Referrer-Policy: no-referrer on screening pages to prevent health URLs leaking to third parties.

## 12. Sitemaps & Metadata

### Sitemap
- Generate via `app/sitemap.ts` with lastmod from actual content dates
- Submit to Google Search Console AND Bing Webmaster Tools
- Reference in robots.txt

### Every Page Must Have
- `<title>` unique, under 60 chars
- `<meta name="description">` unique, ~155 chars, direct answer to page query
- `<meta name="keywords">` (for Bing)
- `<meta name="robots" content="index, follow, max-snippet:-1">`
- `<link rel="canonical">`
- Open Graph: og:title, og:description, og:image (1200x630px), og:url, og:type
- Semantic HTML5: header, nav, main, article, section, footer
- Heading hierarchy: H1 > H2 > H3, no skipping

## Cross-Site Links

Footer links to all sister sites (exclude self):
- [FiberTools](https://fibertools.app)
- [FlipMyCase](https://flipmycase.com)
- [Creator Revenue Calculator](https://creatorrevenuecalculator.com)
- [ContractExtract](https://contractextract.com)
- [Medical Bill Reader](https://medicalbillreader.com)

## Deployment

- **Platform**: Vercel
- **Branch**: main
- **Build**: `npm run build`
- **Env vars**: INDEXNOW_API_KEY

### Pre-Deploy Checklist
1. `npm run build` passes
2. Display-ad seller file, metadata, loader and activation settings absent
3. robots.txt has AI crawler rules
4. llms.txt present and current
5. All legal pages render
6. Cross-site links working
7. Security headers configured
8. Structured data validates

## Warnings — Things Claude Code Must NEVER Do

1. Never use personal name in body copy, headings, code comments, or non-YMYL metadata. Named byline attribution IS required on YMYL pages (see E-E-A-T section). JSON-LD Person schema on author pages always permitted.
2. Never reintroduce display-ad infrastructure or seller declarations
3. Never remove legal pages (privacy, terms)
4. Never hardcode API keys — use environment variables
5. Never push to main without testing build
6. Never remove sister site cross-links
7. Never remove or weaken security headers
8. Never remove accessibility features (alt text, ARIA, focus indicators)
9. Never remove llms.txt or AI crawler rules from robots.txt
10. Never remove crisis resources (988 Lifeline, Crisis Text Line, SAMHSA)
11. Never present screening results as diagnoses
12. Never modify validated instruments (PHQ-9, GAD-7, AUDIT)
13. Never place ads adjacent to crisis resources
14. Never pass health data to advertising systems

## YMYL Language Rules
- Never use: diagnose, diagnosis, cure, treatment plan
- Always use: screening, assessment, check, may indicate

## Empire Skills
For cross-site operations, read the relevant skill:
- Audit/sync: ~/empire-skills/empire-sitesync/SKILL.md
- CLAUDE.md generation: ~/empire-skills/empire-projectfiles/SKILL.md

## Mental Health Content Rules (CRITICAL)

### Validated Instruments
- PHQ-9: 9 questions, 0-27 (minimal/mild/moderate/moderately severe/severe)
- GAD-7: 7 questions, 0-21 (minimal/mild/moderate/severe)
- AUDIT: 10 questions, 0-40 (low risk/hazardous/harmful/possible dependence)
- AUDIT-C: 3 questions, 0-12 (men ≥4 positive, women ≥3 positive)
- NEVER modify questions or scoring

### Crisis Resources (on EVERY page)
- 988 Suicide & Crisis Lifeline (call or text 988)
- Crisis Text Line (text HOME to 741741)
- SAMHSA Helpline (1-800-662-4357)

### Disclaimers (on EVERY screening page)
"This screening tool is for informational and educational purposes only. It is not a diagnostic tool and should not be used as a substitute for professional evaluation, diagnosis, or treatment."
