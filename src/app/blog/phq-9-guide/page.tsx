import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";

const ARTICLE_URL = `${SITE_URL}/blog/phq-9-guide`;

export const metadata: Metadata = createMetadata({
  path: "/blog/phq-9-guide",
  title: "PHQ-9 Explained: How Clinicians Use This Depression Questionnaire (and What It Can't Tell You)",
  description:
    "Learn what the PHQ-9 depression screener measures, how healthcare providers interpret scores, why it's only a starting point, and what to do with your results. Plain-language guide.",
  keywords: [
    "phq-9 explained", "phq-9 interpretation", "how doctors use phq-9",
    "phq-9 scoring guide", "depression screening explained", "phq-9 accuracy",
    "what is phq-9", "phq-9 score meaning", "depression questionnaire guide",
    "patient health questionnaire explained", "phq-9 clinical use",
    "phq-9 limitations", "depression screening tool", "phq-9 cutoff scores",
  ],
});

const FAQ_DATA = [
  { question: "Is the PHQ-9 the same as a depression diagnosis?", answer: "No. The PHQ-9 is a screening tool that identifies possible depressive symptoms. A diagnosis of depression requires a comprehensive clinical evaluation by a qualified healthcare professional, including consideration of medical history, symptom duration, functional impact, and ruling out other causes." },
  { question: "Can I use my PHQ-9 score to get medication?", answer: "A PHQ-9 score alone is not sufficient for prescribing medication. However, sharing your score with a healthcare provider can be a useful conversation starter and may help them understand how you've been feeling. Treatment decisions involve many factors beyond a screening score." },
  { question: "Why do different sources show different PHQ-9 cutoff scores?", answer: "Research has examined various cutoff points for different purposes. A score of 10 is commonly used as a threshold for 'moderate' symptoms in research, but clinical practice considers the full picture — not just whether you're above or below a number. Context matters more than cutoffs." },
  { question: "How often should I take the PHQ-9?", answer: "In clinical settings, the PHQ-9 is often administered every 2-4 weeks to monitor changes over time. For personal reflection, taking it periodically can help you notice patterns, but avoid obsessing over small score changes — natural fluctuation is normal." },
  { question: "Is the PHQ-9 accurate for everyone?", answer: "The PHQ-9 has been validated across many populations, but no screening tool is equally accurate for all groups. Cultural factors, language, medical conditions, and life circumstances can all influence how people interpret and respond to the questions. This is one reason professional interpretation matters." },
  { question: "What if my score is low but I still feel bad?", answer: "Screening tools capture a specific set of symptoms over a specific time period. It's entirely possible to score low on the PHQ-9 and still be struggling. If you feel something is wrong, trust that feeling and talk to a professional regardless of your score." },
];

export default function PHQ9GuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "PHQ-9 Explained: How Clinicians Use This Depression Questionnaire", description: "A plain-language guide to the PHQ-9 depression screener — what it measures, how it's scored, and what it can't tell you.", url: ARTICLE_URL, datePublished: "2025-01-15", dateModified: new Date().toISOString().split("T")[0] })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "PHQ-9 Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Tool Guide</span>
            <span className="text-xs text-neutral-400 dark:text-neutral-500">8 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            PHQ-9 Explained: How Clinicians Use This Depression Questionnaire (and What It Can&apos;t Tell You)
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            The PHQ-9 is one of the most widely used depression screening tools in the world. But what does it actually measure, how do healthcare providers interpret the scores, and what are its limitations? This guide walks through everything in plain language.
          </p>
          <div className="mt-6">
            <Link href="/phq-9-depression-test" className="btn-primary text-sm">
              Take the PHQ-9 Self-Check →
            </Link>
          </div>
        </header>

        <div className="prose-mh space-y-8">
          <section>
            <h2>What is the PHQ-9?</h2>
            <p>
              The Patient Health Questionnaire-9 (PHQ-9) is a 9-item self-report questionnaire developed by Drs. Robert L. Spitzer, Janet B.W. Williams, and Kurt Kroenke, with an educational grant from Pfizer Inc. It was designed as a brief, practical tool for detecting depressive symptoms in clinical settings — particularly primary care, where time is limited and mental health concerns often go unrecognized.
            </p>
            <p>
              The PHQ-9 was placed in the public domain by its authors, meaning anyone can use, reproduce, and distribute it without permission or licensing fees. This openness is one reason it has become the most widely used depression screener globally — it appears in research studies, clinical guidelines, employee health programs, and community health settings across dozens of countries.
            </p>
          </section>

          <section>
            <h2>What does it measure?</h2>
            <p>
              Each of the 9 questions corresponds to one of the nine diagnostic criteria for major depressive disorder as defined in the DSM (Diagnostic and Statistical Manual of Mental Disorders). These include:
            </p>
            <p>
              Loss of interest or pleasure in activities; depressed mood; sleep disturbance; fatigue or low energy; appetite changes; feelings of worthlessness or guilt; difficulty concentrating; psychomotor changes (moving or speaking unusually slowly or being restless); and thoughts of death or self-harm.
            </p>
            <p>
              For each item, you indicate how often you&apos;ve been bothered by that symptom over the past two weeks, using a 0–3 scale: not at all (0), several days (1), more than half the days (2), or nearly every day (3).
            </p>
            <p>
              The two-week timeframe is important — it aligns with how depression is clinically defined and helps distinguish persistent patterns from brief, situational low mood.
            </p>
          </section>

          <section>
            <h2>How is it scored?</h2>
            <p>
              The PHQ-9 produces a total score between 0 and 27 by summing the responses to all nine items. Research has established commonly referenced ranges for interpreting this score:
            </p>
            <div className="not-prose my-6 space-y-2">
              {[
                { range: "0–4", level: "Minimal", note: "Few or no depressive symptoms reported" },
                { range: "5–9", level: "Mild", note: "Some symptoms; watchful waiting or follow-up may be appropriate" },
                { range: "10–14", level: "Moderate", note: "Clinically significant symptoms; consider active treatment" },
                { range: "15–19", level: "Moderately Severe", note: "Many symptoms at high frequency; treatment typically recommended" },
                { range: "20–27", level: "Severe", note: "Severe symptom burden; active treatment and close follow-up" },
              ].map((r) => (
                <div key={r.range} className="flex items-start gap-3 p-3 card">
                  <span className="text-sm font-mono font-bold text-sage-600 dark:text-sage-400 w-12 flex-shrink-0">{r.range}</span>
                  <div>
                    <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">{r.level}</span>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400"> — {r.note}</span>
                  </div>
                </div>
              ))}
            </div>
            <p>
              It&apos;s critical to understand that these ranges are research-derived guidelines — they are not diagnostic thresholds. A score of 10 does not mean you &quot;have depression,&quot; and a score of 4 does not mean you&apos;re fine. The score is one data point in a much larger clinical picture.
            </p>
          </section>

          <section>
            <h2>How do clinicians actually use it?</h2>
            <p>
              In practice, healthcare providers use the PHQ-9 in several ways. As an initial screen, it helps flag patients who may benefit from a more thorough evaluation. Many primary care clinics administer the PHQ-9 routinely — sometimes to every patient at annual visits, sometimes when a provider suspects depressive symptoms.
            </p>
            <p>
              Providers also use it for monitoring over time. A patient in treatment might complete the PHQ-9 every few weeks, and the provider tracks whether the score is trending down (improvement), staying flat (possible need to adjust treatment), or increasing (worsening).
            </p>
            <p>
              Importantly, no competent clinician diagnoses depression based solely on a PHQ-9 score. The score prompts a conversation — about how long symptoms have lasted, what might be contributing, how daily life is affected, and what the patient wants to do about it. The diagnosis comes from that conversation, not from the number.
            </p>
          </section>

          <section>
            <h2>What the PHQ-9 cannot tell you</h2>
            <p>
              Understanding the limitations of the PHQ-9 is just as important as understanding what it measures. The PHQ-9 cannot diagnose depression or any other condition. It cannot determine the cause of your symptoms — depressive symptoms can result from grief, medical conditions, medication side effects, substance use, life stress, sleep deprivation, and many other factors.
            </p>
            <p>
              It cannot capture the full complexity of your emotional experience. Nine questions over a two-week window are inherently limited. It also cannot account for cultural differences in how people experience and express distress — someone might be deeply struggling but not endorse the specific symptoms as worded.
            </p>
            <p>
              Finally, it&apos;s a self-report tool, which means it depends entirely on your honesty and self-awareness. Minimizing symptoms (whether consciously or not) will produce a lower score that doesn&apos;t reflect reality. Conversely, a particularly bad day might inflate your score beyond your typical experience.
            </p>
          </section>

          <section>
            <h2>Question 9: thoughts of self-harm</h2>
            <p>
              The final PHQ-9 item asks about &quot;thoughts that you would be better off dead or of hurting yourself in some way.&quot; This question deserves special attention.
            </p>
            <p>
              Endorsing this item at any level does not necessarily mean you are suicidal — these thoughts exist on a spectrum. But it is always worth taking seriously. In clinical settings, any positive response to question 9 triggers additional assessment for suicide risk.
            </p>
            <p>
              If you are experiencing thoughts of self-harm, please reach out for support. In the US, you can call or text <strong>988</strong> (Suicide &amp; Crisis Lifeline) or text <strong>HOME</strong> to <strong>741741</strong> (Crisis Text Line). Visit <strong>findahelpline.com</strong> for international resources.
            </p>
          </section>

          <section>
            <h2>What to do with your score</h2>
            <p>
              If you take the PHQ-9 on our site or anywhere else, here are reasonable next steps depending on your results. For minimal or mild scores, simply being aware of your mental health is valuable — you can check in periodically and notice if things change.
            </p>
            <p>
              For moderate scores and above, consider scheduling a conversation with a healthcare provider. You can share your score as a starting point — many providers appreciate having concrete information to work from. You might say something like: &quot;I took a depression screening and scored [X]. I&apos;d like to talk about how I&apos;ve been feeling.&quot;
            </p>
            <p>
              Regardless of your score, if something feels wrong, trust your own experience. Screening tools are helpful, but they are never a substitute for your own self-knowledge or professional guidance.
            </p>
          </section>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Ready to take the PHQ-9?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, takes about 2 minutes. Your answers never leave your browser.</p>
            <Link href="/phq-9-depression-test" className="btn-primary text-sm">Take the PHQ-9 Self-Check</Link>
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
                <div className="px-4 pb-4">
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </section>

          {/* Related */}
          <section className="not-prose mt-10">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/gad-7-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Anxiety Scale Guide</p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">How clinicians use and interpret anxiety scores</p>
              </Link>
              <Link href="/blog/audit-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">AUDIT Alcohol Screening Guide</p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">Understanding the WHO&apos;s alcohol screening tool</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
