import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";

const ARTICLE_URL = `${SITE_URL}/blog/audit-guide`;

export const metadata: Metadata = createMetadata({
  path: "/blog/audit-guide",
  title: "AUDIT Alcohol Screening Tool: How It Works and Why Clinicians Use It",
  description:
    "Learn what the WHO AUDIT alcohol screening tool measures, how it's scored, what the risk zones mean, and why it's used worldwide. Educational guide — not a diagnosis.",
  keywords: [
    "audit alcohol test explained", "audit screening interpretation",
    "who audit scoring", "alcohol screening guide", "audit risk zones",
    "audit questionnaire explained", "alcohol use assessment guide",
    "audit clinical use", "audit-c vs audit", "alcohol screening tool guide",
  ],
});

const FAQ_DATA = [
  { question: "What counts as 'one drink' in the AUDIT?", answer: "A standard drink varies by country but generally contains about 14 grams of pure alcohol (US definition). This is roughly equivalent to 12 oz of regular beer (5% alcohol), 5 oz of wine (12% alcohol), or 1.5 oz of distilled spirits (40% alcohol). Many drinks served in bars and at home exceed these amounts." },
  { question: "Is it possible to score in the higher zones and not have an alcohol problem?", answer: "The AUDIT identifies patterns associated with risk — it doesn't diagnose disorders. It is possible for cultural drinking patterns, social context, or temporary changes in drinking to elevate a score. However, higher scores consistently correlate with increased risk in research, so professional follow-up is recommended regardless." },
  { question: "Should I stop drinking if my score is high?", answer: "If you drink heavily, do not stop suddenly without medical guidance. Alcohol withdrawal can be medically dangerous and sometimes life-threatening. Talk to a healthcare provider about how to safely reduce your drinking if that is your goal." },
  { question: "How is the AUDIT different from the CAGE questionnaire?", answer: "The CAGE is a 4-question screen focused on dependence-related experiences (Cutting down, Annoyance, Guilt, Eye-opener). The AUDIT is broader — it covers consumption patterns, dependence symptoms, and alcohol-related harm across 10 questions. The AUDIT is generally considered more sensitive for detecting hazardous drinking before dependence develops." },
  { question: "Why does the AUDIT ask about the past year instead of two weeks?", answer: "Alcohol-related patterns and consequences often develop over months, not weeks. The one-year timeframe captures episodic heavy drinking and consequences that might be missed in a shorter window. This is different from depression and anxiety screeners, which use two-week windows because mood symptoms can change more rapidly." },
  { question: "Can I use my AUDIT score to show my doctor?", answer: "Absolutely. Bringing a completed AUDIT to an appointment can be a helpful way to start a conversation about alcohol. Many providers use the AUDIT themselves and will find it useful as a starting point for discussion." },
];

export default function AUDITGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "AUDIT Alcohol Screening Tool: How It Works and Why Clinicians Use It", description: "A plain-language guide to the WHO AUDIT alcohol screening tool.", url: ARTICLE_URL, datePublished: "2025-01-25", dateModified: new Date().toISOString().split("T")[0] })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "AUDIT Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Tool Guide</span>
            <span className="text-xs text-neutral-400 dark:text-neutral-500">8 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            AUDIT Alcohol Screening Tool: How It Works and Why Clinicians Use It
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            The WHO&apos;s AUDIT is the most widely used alcohol screening tool in the world. Here&apos;s what it measures, how the risk zones work, what clinicians do with the results, and what it can&apos;t tell you about your relationship with alcohol.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/audit-alcohol-test" className="btn-primary text-sm">Take the Full AUDIT →</Link>
            <Link href="/audit-c-alcohol-screen" className="btn-secondary text-sm">Quick 3-Question AUDIT-C</Link>
          </div>
        </header>

        <div className="prose-mh space-y-8">
          <section>
            <h2>What is the AUDIT?</h2>
            <p>
              The Alcohol Use Disorders Identification Test (AUDIT) is a 10-question screening tool developed by the World Health Organization in the late 1980s. It was designed to identify people whose alcohol consumption may be putting them at risk — before problems become severe.
            </p>
            <p>
              The AUDIT is in the public domain, meaning it can be used, reproduced, and distributed freely. This openness has contributed to its adoption in primary care clinics, emergency departments, workplace wellness programs, and research studies across more than 30 countries.
            </p>
            <p>
              What makes the AUDIT distinctive is its scope. Unlike some alcohol screens that focus narrowly on dependence, the AUDIT was explicitly designed to capture the full spectrum of alcohol-related risk — from hazardous drinking patterns to harmful use to possible dependence.
            </p>
          </section>

          <section>
            <h2>What does it measure?</h2>
            <p>
              The 10 AUDIT questions cover three domains. Questions 1–3 assess consumption patterns: how often you drink, how much you typically drink, and how often you have six or more drinks on one occasion. These three questions form the AUDIT-C, which is sometimes used on its own as a brief screen.
            </p>
            <p>
              Questions 4–6 assess dependence symptoms: difficulty stopping once you&apos;ve started, failing to do what&apos;s expected because of drinking, and needing a morning drink to get going. Questions 7–10 assess alcohol-related harm: guilt after drinking, memory blackouts, alcohol-related injuries, and whether others have expressed concern about your drinking.
            </p>
            <p>
              Most questions use a 5-point frequency scale (never to daily or almost daily) scored 0–4. Questions 9 and 10 use a 3-point scale (no, yes but not recently, yes during the past year) scored 0, 2, or 4.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>The four risk zones</h2>
            <p>
              The AUDIT produces a total score from 0 to 40. The WHO defined four risk zones that guide clinical decision-making:
            </p>
            <div className="not-prose my-6 space-y-2">
              {[
                { range: "0–7", level: "Zone I — Lower Risk", note: "Alcohol education and reinforcement of healthy patterns", color: "text-sage-600 dark:text-sage-400" },
                { range: "8–15", level: "Zone II — Hazardous", note: "Simple advice and brief intervention by a clinician", color: "text-warm-600 dark:text-warm-400" },
                { range: "16–19", level: "Zone III — Harmful", note: "Brief counseling and continued monitoring", color: "text-orange-600 dark:text-orange-400" },
                { range: "20–40", level: "Zone IV — Possible Dependence", note: "Referral for comprehensive diagnostic evaluation and treatment", color: "text-crisis-600 dark:text-crisis-400" },
              ].map((r) => (
                <div key={r.range} className="flex items-start gap-3 p-3 card">
                  <span className="text-sm font-mono font-bold text-sage-600 dark:text-sage-400 w-12 flex-shrink-0">{r.range}</span>
                  <div>
                    <span className={`text-sm font-semibold ${r.color}`}>{r.level}</span>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">Suggested clinical response: {r.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <p>
              These zones were designed to guide what type of intervention a clinician might offer — not to diagnose a specific condition. Zone II doesn&apos;t mean you &quot;have a problem&quot;; it means your drinking pattern is associated with increased risk in population-level research, and a brief conversation with a provider might be beneficial.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>How clinicians use the AUDIT</h2>
            <p>
              In primary care, the AUDIT is often used as part of routine screening — sometimes annually, sometimes when a provider suspects alcohol may be contributing to a patient&apos;s health concerns. Emergency departments also use it to identify patients whose visit may be alcohol-related.
            </p>
            <p>
              The WHO developed the AUDIT alongside a framework called &quot;Screening, Brief Intervention, and Referral to Treatment&quot; (SBIRT). The idea is simple: screen everyone, provide brief advice to those at moderate risk, and refer those at high risk for specialized assessment. The AUDIT&apos;s four zones map directly to this intervention model.
            </p>
            <p>
              For providers, the AUDIT&apos;s value lies not just in the total score but in the pattern of responses. A high score driven mainly by consumption (questions 1–3) suggests a different conversation than a high score driven by dependence symptoms (questions 4–6) or harm (questions 7–10).
            </p>
          </section>

          <section>
            <h2>A critical safety note: alcohol withdrawal</h2>
            <p>
              If you drink heavily — daily or near-daily, in large amounts — and are considering cutting down or stopping, please talk to a healthcare professional first. Unlike most other substances, alcohol withdrawal can be medically dangerous and in severe cases life-threatening. Symptoms can include tremors, seizures, confusion, and rapid heart rate.
            </p>
            <p>
              This is not said to discourage change — it is said to encourage safe change. Medical professionals can help you reduce your drinking in a way that is safe, whether through outpatient monitoring, medication-assisted tapering, or supervised detoxification when needed.
            </p>
          </section>

          <section>
            <h2>What the AUDIT cannot tell you</h2>
            <p>
              The AUDIT cannot diagnose alcohol use disorder or any specific condition. It cannot determine whether you are physically dependent on alcohol. It cannot account for individual differences in body weight, metabolism, tolerance, genetics, or co-occurring health conditions that affect how alcohol impacts you.
            </p>
            <p>
              Like all self-report tools, it depends on honest responses. Underreporting is common with alcohol screening — stigma, denial, and minimization are well-documented in research. A low score does not necessarily mean low risk if you weren&apos;t fully honest with yourself while answering.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <section>
            <h2>AUDIT vs. AUDIT-C</h2>
            <p>
              The AUDIT-C is a 3-question version that uses only the consumption questions (questions 1–3). It was developed as an even briefer screen for use in busy clinical settings. Research suggests the AUDIT-C is reasonably effective at identifying hazardous drinking, though it misses the dependence and harm dimensions that the full AUDIT captures.
            </p>
            <p>
              Our site offers both: the <Link href="/audit-c-alcohol-screen">AUDIT-C as a 60-second quick screen</Link> and the <Link href="/audit-alcohol-test">full AUDIT for a more comprehensive assessment</Link>. If you&apos;re unsure which to take, starting with the AUDIT-C and moving to the full AUDIT if your score is elevated is a reasonable approach.
            </p>
          </section>

          <section>
            <h2>What to do with your score</h2>
            <p>
              For Zone I scores, awareness is the main takeaway. You&apos;re reporting low-risk patterns, and periodic check-ins can help you stay informed.
            </p>
            <p>
              For Zone II and above, consider talking with a healthcare provider. You might say: &quot;I took an alcohol screening and my score was [X]. I&apos;d like to talk about what that means for me.&quot; Many providers are trained in brief alcohol counseling and can help you evaluate your patterns in context.
            </p>
            <p>
              For Zone IV scores, professional evaluation is strongly encouraged. Effective, evidence-based treatments exist for alcohol use disorders, and seeking help is a sign of strength, not weakness.
            </p>
          </section>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Ready to take the AUDIT?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, takes about 3 minutes. Your answers never leave your browser.</p>
            <div className="flex gap-3 justify-center">
              <Link href="/audit-alcohol-test" className="btn-primary text-sm">Full AUDIT (10 Questions)</Link>
              <Link href="/audit-c-alcohol-screen" className="btn-secondary text-sm">Quick AUDIT-C (3 Questions)</Link>
            </div>
          </div>

          {/* FAQ */}
          <section className="not-prose mt-12">
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-5">Frequently Asked Questions</h2>
            {FAQ_DATA.map((faq, i) => (
              <details key={i} className="card mb-2 group">
                <summary className="p-4 cursor-pointer flex justify-between items-center text-sm font-semibold text-neutral-700 dark:text-neutral-200 list-none">
                  {faq.question}
                  <svg className="w-4 h-4 text-neutral-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-4 pb-4"><p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{faq.answer}</p></div>
              </details>
            ))}
          </section>

          <AdSlot position="Blog In-Content 4" className="my-8" />

          <section className="not-prose mt-10">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/phq-9-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Screener Guide</p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">How clinicians use and interpret depression scores</p>
              </Link>
              <Link href="/blog/gad-7-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Anxiety Scale Guide</p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">Understanding the most-used anxiety screener</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
