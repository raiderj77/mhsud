import Link from "next/link";
import type { Metadata } from "next";
import { createMetadata, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  path: "/",
  title: "MindCheck Tools — Free, Private Mental Health Self-Checks",
  description:
    "Take free, private mental health and substance use self-checks. PHQ-9 depression screening, GAD-7 anxiety test, AUDIT alcohol screening — all in your browser, no data stored.",
});

const TOOLS = [
  {
    href: "/phq-9-depression-test",
    title: "PHQ-9 Depression Self-Check",
    description: "9-question validated depression screener used worldwide by clinicians and researchers.",
    badge: "Validated",
    time: "~2 min",
    questions: 9,
    color: "sage" as const,
    status: "live" as const,
  },
  {
    href: "/gad-7-anxiety-test",
    title: "GAD-7 Anxiety Self-Check",
    description: "7-question validated anxiety screener for generalized anxiety symptoms.",
    badge: "Validated",
    time: "~2 min",
    questions: 7,
    color: "sage" as const,
    status: "coming" as const,
  },
  {
    href: "/audit-alcohol-test",
    title: "AUDIT Alcohol Use Screen",
    description: "10-item WHO alcohol screening tool to reflect on your relationship with alcohol.",
    badge: "WHO",
    time: "~3 min",
    questions: 10,
    color: "sage" as const,
    status: "coming" as const,
  },
  {
    href: "/audit-c-alcohol-screen",
    title: "AUDIT-C Quick Screen",
    description: "3-question brief alcohol screen used in primary care settings worldwide.",
    badge: "Quick",
    time: "~1 min",
    questions: 3,
    color: "sage" as const,
    status: "coming" as const,
  },
];

const FEATURES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Completely Private",
    text: "Your answers never leave your browser. No accounts, no cookies, no tracking. When you close the page, your data is gone.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Evidence-Based",
    text: "Our core tools use validated, public-domain instruments trusted by clinicians worldwide — the PHQ-9, GAD-7, and AUDIT.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Education, Not Diagnosis",
    text: "Every result includes clear context about what the score means and — importantly — what it cannot tell you. We always encourage professional follow-up.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: "Home", url: SITE_URL }])
          ),
        }}
      />

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-sage-500 animate-pulse" />
            Free &amp; Private
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-5">
            Mental health self-checks you can{" "}
            <span className="text-sage-600 dark:text-sage-400">trust</span>
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8 max-w-xl">
            Take validated, evidence-based screening tools in the privacy of your browser. No accounts, no data stored, no judgment — just honest reflection and clear next steps.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/phq-9-depression-test" className="btn-primary text-base">
              Take the PHQ-9
            </Link>
            <Link href="#tools" className="btn-secondary text-base">
              View All Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div key={f.title} className="card p-6">
              <div className="w-10 h-10 rounded-xl bg-sage-50 dark:bg-sage-950/30 text-sage-600 dark:text-sage-400 flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">{f.title}</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
        <div className="mb-8">
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-2">
            Self-Check Tools
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400">
            Choose a screening tool to get started. Each one runs entirely in your browser.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.status === "live" ? tool.href : "#"}
              className={`card p-6 group transition-all hover:shadow-md hover:border-sage-300 dark:hover:border-sage-700 ${
                tool.status === "coming" ? "opacity-60 pointer-events-none" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex gap-2">
                  <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">
                    {tool.badge}
                  </span>
                  {tool.status === "coming" && (
                    <span className="badge bg-warm-50 dark:bg-warm-950/30 text-warm-700 dark:text-warm-400">
                      Coming Soon
                    </span>
                  )}
                </div>
                <svg className="w-5 h-5 text-neutral-300 dark:text-neutral-600 group-hover:text-sage-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
              <h3 className="font-serif font-semibold text-lg text-neutral-800 dark:text-neutral-100 mb-1.5 group-hover:text-sage-700 dark:group-hover:text-sage-400 transition-colors">
                {tool.title}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
                {tool.description}
              </p>
              <div className="flex gap-4 text-xs text-neutral-400 dark:text-neutral-500">
                <span>{tool.questions} questions</span>
                <span>{tool.time}</span>
                <span>🔒 Private</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Privacy Callout */}
      <section className="bg-sage-600 dark:bg-sage-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-white mb-4">
              Your privacy is not negotiable
            </h2>
            <p className="text-sage-100/80 leading-relaxed mb-3">
              Every answer you give is processed entirely in your browser using client-side JavaScript. We have no server, no database, and no way to see your responses. When you close the page, your data is gone.
            </p>
            <p className="text-sage-200/60 text-sm">
              No cookies. No analytics tracking your answers. No accounts. No exceptions.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-2">
              Guides &amp; Education
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400">
              Understand the tools, the science behind them, and when to seek help.
            </p>
          </div>
          <Link href="/blog" className="hidden sm:inline-flex text-sm font-medium text-sage-600 dark:text-sage-400 hover:underline">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              title: "PHQ-9 Explained: How Clinicians Use This Depression Questionnaire",
              slug: "phq-9-guide",
              excerpt: "Learn what the PHQ-9 measures, how scores are interpreted, and why it's only a starting point.",
            },
            {
              title: "GAD-7 Anxiety Scale: What It Measures and How Doctors Interpret Scores",
              slug: "gad-7-guide",
              excerpt: "A plain-language guide to the world's most common anxiety screener.",
            },
            {
              title: "AUDIT Alcohol Screening: How It Works and Why Clinicians Use It",
              slug: "audit-guide",
              excerpt: "Understanding the WHO's alcohol screening tool and what your score can and can't tell you.",
            },
          ].map((post) => (
            <div key={post.slug} className="card p-5 opacity-60">
              <span className="text-xs font-medium text-sage-600 dark:text-sage-400 mb-2 block">Guide</span>
              <h3 className="font-serif font-semibold text-neutral-800 dark:text-neutral-100 mb-2 leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {post.excerpt}
              </p>
              <span className="inline-block mt-3 text-xs text-warm-600 dark:text-warm-400 font-medium">Coming Soon</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
