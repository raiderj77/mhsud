import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";

const ARTICLE_URL = `${SITE_URL}/blog/gad-7-guide`;

export const metadata: Metadata = createMetadata({
  path: "/blog/gad-7-guide",
  title: "GAD-7 Anxiety Scale: What It Measures and How Doctors Interpret Scores",
  description:
    "Learn what the GAD-7 anxiety screener measures, how healthcare providers use it, its scoring ranges, and its limitations. Plain-language educational guide — not a diagnosis tool.",
  keywords: [
    "gad-7 explained", "gad-7 interpretation", "gad-7 scoring guide",
    "anxiety screening explained", "gad-7 accuracy", "what is gad-7",
    "gad-7 score meaning", "anxiety questionnaire guide", "gad-7 clinical use",
    "gad-7 limitations", "generalized anxiety disorder screening",
  ],
});

const FAQ_DATA = [
  { question: "Does the GAD-7 only detect generalized anxiety disorder?", answer: "While developed for generalized anxiety, research shows the GAD-7 has reasonable sensitivity for panic disorder, social anxiety disorder, and PTSD. However, it is not a specific diagnostic tool for any of these conditions — a positive screen warrants professional evaluation to determine the specific nature of the anxiety." },
  { question: "Can anxiety medication be prescribed based on a GAD-7 score alone?", answer: "No. Treatment decisions require a comprehensive clinical evaluation. However, sharing your GAD-7 score with a provider gives them useful information about the frequency and severity of your symptoms, which can inform — but not replace — their clinical judgment." },
  { question: "What's the difference between normal worry and clinical anxiety?", answer: "Everyone worries. Clinical anxiety is distinguished by its persistence, intensity, and impact on functioning. The GAD-7 helps capture this by asking about frequency over two weeks and including items about difficulty controlling worry and its physical effects. But the distinction ultimately requires professional assessment." },
  { question: "Can physical health conditions affect my GAD-7 score?", answer: "Yes. Conditions like thyroid disorders, heart disease, chronic pain, and medication side effects can produce symptoms that overlap with anxiety — such as restlessness, irritability, and difficulty relaxing. This is one reason professional follow-up is important: a provider can help determine what's contributing to your symptoms." },
  { question: "My score was low but I still feel anxious. Why?", answer: "The GAD-7 captures a specific set of symptoms. Some forms of anxiety — like specific phobias, health anxiety, or situational anxiety — may not be fully captured by these seven questions. If you feel anxious, that experience is valid regardless of a screening score." },
  { question: "How is the GAD-7 different from the GAD-2?", answer: "The GAD-2 uses only the first two questions of the GAD-7 as an ultra-brief screen. It's sometimes used as a first step in clinical settings — if the GAD-2 is positive, the full GAD-7 is administered. Our site offers the full GAD-7 for a more complete picture." },
];

export default function GAD7GuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "GAD-7 Anxiety Scale: What It Measures and How Doctors Interpret Scores", description: "A plain-language guide to the GAD-7 anxiety screener.", url: ARTICLE_URL, datePublished: "2025-01-20", dateModified: new Date().toISOString().split("T")[0] })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "GAD-7 Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Tool Guide</span>
            <span className="text-xs text-neutral-400 dark:text-neutral-500">7 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            GAD-7 Anxiety Scale: What It Measures and How Doctors Interpret Scores
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            The GAD-7 is one of the most common anxiety screening tools used in healthcare. Here&apos;s what it actually tells clinicians, how the scoring works, and why a number on a screen is only the beginning of understanding anxiety.
          </p>
          <div className="mt-6">
            <Link href="/gad-7-anxiety-test" className="btn-primary text-sm">Take the GAD-7 Self-Check →</Link>
          </div>
        </header>

        <div className="prose-mh space-y-8">
          <section>
            <h2>What is the GAD-7?</h2>
            <p>
              The Generalized Anxiety Disorder-7 (GAD-7) is a 7-item self-report questionnaire developed by Drs. Robert L. Spitzer, Kurt Kroenke, Janet B.W. Williams, and Bernd Löwe. Published in 2006, it was designed to be a brief, practical screening tool for anxiety symptoms in primary care and other clinical settings.
            </p>
            <p>
              Like the PHQ-9 for depression, the GAD-7 was made freely available for clinical and research use without licensing fees. This accessibility has made it one of the most widely used anxiety measures worldwide — it has been translated into dozens of languages and validated across many populations.
            </p>
          </section>

          <section>
            <h2>What does it measure?</h2>
            <p>
              The seven items assess core anxiety symptoms: feeling nervous or on edge, uncontrollable worrying, worrying about many different things, trouble relaxing, restlessness, irritability, and a sense of dread or impending doom.
            </p>
            <p>
              Each item asks how often you&apos;ve been bothered by that symptom over the past two weeks, using the same 0–3 frequency scale as the PHQ-9: not at all (0), several days (1), more than half the days (2), or nearly every day (3). The two-week window helps distinguish persistent anxiety from temporary stress responses.
            </p>
            <p>
              While named for generalized anxiety disorder, the GAD-7 captures symptoms that overlap with several anxiety-related conditions. Research has shown it has reasonable sensitivity for detecting panic disorder, social anxiety disorder, and post-traumatic stress disorder — though it cannot distinguish between them. Think of it as a general anxiety thermometer, not a specific diagnostic test.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>How is it scored?</h2>
            <p>
              The total score ranges from 0 to 21. Research has established four commonly referenced severity ranges:
            </p>
            <div className="not-prose my-6 space-y-2">
              {[
                { range: "0–4", level: "Minimal", note: "Few anxiety symptoms reported" },
                { range: "5–9", level: "Mild", note: "Some symptoms present; monitoring may be helpful" },
                { range: "10–14", level: "Moderate", note: "Clinically meaningful symptoms; evaluation recommended" },
                { range: "15–21", level: "Severe", note: "High symptom burden; professional support strongly encouraged" },
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
              A score of 10 is often cited in research as a threshold for &quot;moderate&quot; anxiety, but this cutoff was derived for research purposes and should not be treated as a bright line. Someone scoring 9 may need support just as much as someone scoring 11. Clinical context always matters more than the number.
            </p>
          </section>

          <section>
            <h2>How clinicians use the GAD-7 in practice</h2>
            <p>
              In primary care, the GAD-7 serves as a conversation opener. A provider might hand you the questionnaire in a waiting room or ask the questions during a visit. An elevated score doesn&apos;t end the assessment — it begins it.
            </p>
            <p>
              The clinician will want to understand the context: How long have you felt this way? What triggers your anxiety? How is it affecting your work, relationships, and daily functioning? Are there contributing factors like caffeine intake, sleep deprivation, medical conditions, or substance use?
            </p>
            <p>
              The GAD-7 is also used to track treatment progress. If you start therapy or medication, your provider may ask you to complete it periodically. A decreasing score over weeks or months provides concrete evidence that treatment is helping — or signals that adjustments may be needed.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>What the GAD-7 cannot tell you</h2>
            <p>
              The GAD-7 cannot diagnose any anxiety disorder. It cannot distinguish generalized anxiety from panic disorder, social anxiety, OCD, or PTSD. It cannot identify the root cause of your anxiety — whether that&apos;s biological, situational, relational, or a combination.
            </p>
            <p>
              It also has blind spots. The questions focus on cognitive and physical symptoms of anxiety but may not capture avoidance behaviors, specific fears, or the social and occupational impact that define how disabling anxiety has become. Some people experience significant anxiety that doesn&apos;t map neatly onto these seven questions.
            </p>
            <p>
              Like all self-report tools, it depends on your willingness and ability to accurately report your inner experience — something that anxiety itself can complicate. People who minimize their symptoms or who have normalized their anxiety over years may underreport.
            </p>
          </section>

          <section>
            <h2>Anxiety and depression often overlap</h2>
            <p>
              Anxiety and depression frequently co-occur. Research consistently shows that a substantial proportion of people with significant anxiety also have depressive symptoms, and vice versa. This is why many clinicians administer the GAD-7 and PHQ-9 together — the combination gives a more complete picture.
            </p>
            <p>
              If your GAD-7 score suggests notable anxiety, consider also taking the <Link href="/phq-9-depression-test">PHQ-9 depression self-check</Link> for a broader perspective. And if you&apos;re sharing results with a provider, bringing both scores can be especially helpful.
            </p>
          </section>

          <section>
            <h2>What to do with your score</h2>
            <p>
              For minimal or mild scores, awareness itself is valuable. Knowing what to watch for — and having a baseline — means you can notice if things shift over time.
            </p>
            <p>
              For moderate or severe scores, reaching out to a healthcare provider is strongly encouraged. Anxiety is one of the most treatable mental health conditions, with strong evidence for both therapy (particularly CBT) and medication. Many people see significant improvement with the right support.
            </p>
            <p>
              You might approach a conversation with your provider by saying: &quot;I took an anxiety screening and scored [X]. I&apos;d like to talk about how I&apos;ve been feeling.&quot; Most providers will appreciate having this starting point.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Ready to take the GAD-7?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, takes about 2 minutes. Your answers never leave your browser.</p>
            <Link href="/gad-7-anxiety-test" className="btn-primary text-sm">Take the GAD-7 Self-Check</Link>
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
