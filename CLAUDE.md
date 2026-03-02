# CLAUDE.md — mindchecktools.com

## Project Overview
Mental health screening tools website. Free, private, browser-based self-checks for depression, anxiety, alcohol use, burnout, and more. This is a YMYL (Your Money Your Life) site — Google holds it to the highest quality standards.

**Live URL:** https://mindchecktools.com
**GitHub:** raiderj77/mhsud
**Hosting:** Vercel (auto-deploys when you push to main)
**Owner:** Jason Ramirez, CADC-II (Certified Alcohol and Drug Counselor II, 30+ years clinical experience)

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
   - Links to relevant crisis resources
   - Clinical disclaimer

3. **NEVER:**
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

## Git Workflow
1. Always work on a feature branch (never commit directly to main)
2. Branch naming: feature/[description] or fix/[description]
3. Show Jason the diff before merging to main
4. Pushing to main triggers Vercel auto-deploy — be careful
5. Test locally with `npm run dev` before pushing

## Communication Style
Jason needs ALL instructions explained step-by-step like he is 5 years old. Never assume he knows how to do something. Always break it down into the simplest possible steps with exact commands.

## Current Priorities (March 2026)
1. Add schema markup to all tool pages
2. Implement AdSense (max 2-3 units per page, tasteful placement)
3. Build more screening tools (burnout assessment is next)
4. Create pSEO pages: "[condition] test for [demographic]"

## Agent Council System

### Overview
I have a business decision-making council of three sub-agents. Each agent has a specific perspective and role. They work in parallel, each in their own context window, and document their reasoning in a shared file.

### Council Members
The agent instruction files are located in `.claude/agents/` (or the project root `/agents/` folder):

1. **🟢 Revenue Optimist** (`optimist.md`) — Finds opportunity, growth potential, and upside. Grounds optimism in real data and actionable paths.
2. **🔴 Risk Auditor** (`risk-auditor.md`) — Devil's advocate. Stress-tests ideas, flags YMYL compliance risks, identifies what could go wrong. Especially critical for mindchecktools.com health content.
3. **🔵 Data Analyst** (`data-analyst.md`) — Neutral, evidence-based. Uses GSC data, CPM benchmarks, and math to cut through bias.

### How to Invoke the Council

**Trigger phrases** (any of these):
- "council gather"
- "agents gather"
- "call the council"
- "what does the council think about..."

**When invoked:**
1. Launch ALL three sub-agents in parallel
2. Pass the question/idea/decision to each agent
3. Each agent works independently in its own context window
4. Each agent documents its analysis in `shared_reasoning.md`
5. Once all three return, synthesize their perspectives into a balanced recommendation
6. Present: each agent's summary, where they agree, where they disagree, and a final recommendation

### Shared Reasoning File
- **Location:** `shared_reasoning.md` (in project root)
- **Purpose:** Persistent log of all council deliberations
- **Format:** Each session is dated and tagged with the topic
- **Rule:** Agents append to this file, never overwrite previous sessions

### Invoking Individual Agents
You can also invoke a single agent for focused work:
- `@optimist` — "What's the upside of [idea]?"
- `@risk-auditor` — "What could go wrong with [plan]?"
- `@data-analyst` — "What do the numbers say about [question]?"

### Council Rules
1. Each agent gets the SAME information — no agent gets special context
2. Agents document their reasoning BEFORE seeing other agents' conclusions
3. The main session synthesizes WITHOUT defaulting to "you're right, great idea"
4. If the Risk Auditor flags a YMYL compliance issue as "Critical," that OVERRIDES optimist recommendations
5. The Data Analyst's "Missing Data" section should be addressed before making final decisions
6. Always present the council's output with the disagreements visible — don't hide the debate

### Adding New Agents
To add a new council member:
1. Create a new .md file in `.claude/agents/` (or `/agents/`)
2. Follow the same structure: Role, Context, Perspective, Rules, Output Format
3. Add the agent to this CLAUDE.md section
4. The council invocation will automatically include all agents in the `/agents/` directory

**Example agents you might add later:**
- **SEO Strategist** — Focused purely on search ranking, keyword strategy, and content gaps
- **UX Auditor** — Reviews tool design, user flow, conversion optimization
- **Content Strategist** — Plans blog posts, pSEO pages, topical authority building
- **Compliance Officer** — Dedicated YMYL/legal review for health content
- **Competitor Watcher** — Monitors what screening.mhanational.org, psychcentral.com, convertcase.net are doing

### Example Usage

**You say:** "Council gather — I'm thinking about adding a PTSD screening tool to mindchecktools.com. Should I?"

**What happens:**
- 🟢 Optimist analyzes: keyword volume, competitor gap, revenue potential, how it builds topical authority
- 🔴 Risk Auditor analyzes: YMYL risk of PTSD content, liability concerns, whether CADC-II covers this, Google quality rater implications
- 🔵 Data Analyst analyzes: search volume data, current site performance trajectory, effort vs. impact, whether the time is better spent on existing tools

**You get:** A balanced report showing all three perspectives, where they agree, where they disagree, and a synthesized recommendation.
