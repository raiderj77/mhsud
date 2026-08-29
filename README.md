# MindCheckTools

MindCheckTools is a privacy-first educational screening, self-reflection, recovery-support, and health-information site built with Next.js.

## Before making changes

Read [`AGENTS.md`](./AGENTS.md). It is the project-specific source of truth for safety, instrument rights, scoring integrity, privacy, accessibility, security, SEO/AEO/GEO, monetization, automation, and release gates.

## Stack

- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- Vercel
- npm

## Local commands

```bash
npm install
npm run dev
npm test
npm run lint:predeploy
npm run lint:content
npm run build
```

`npm run build` runs the test and predeploy/content checks through the `prebuild` script before the production build.

## Release discipline

`main` auto-deploys. Use a branch and pull request for consequential changes and do not merge when safety, rights, scoring, crisis, privacy, accessibility, security, redirect, or build checks fail.

MindCheckTools does not use display advertising or GA4. Screening answers and scores must not be intentionally sent to analytics, advertising systems, email, referrals, logs, or remote AI.
