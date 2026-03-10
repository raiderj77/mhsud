import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/what-does-phq-9-score-mean`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "what-does-phq-9-score-mean")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/what-does-phq-9-score-mean",
  title: "What Does Your PHQ-9 Score Mean?",
  description:
    "PHQ-9 scores range from 0\u201327. Learn what each score range means, how severity is classified, and what to do next based on your results.",
  keywords: [
    "PHQ-9 score meaning",
    "PHQ-9 score interpretation",
    "PHQ-9 results",
    "PHQ-9 depression scale",
    "what is a high PHQ-9 score",
    "PHQ-9 severity levels",
    "PHQ-9 cutoff score",
    "PHQ-9 question 9",
    "depression screening score",
    "PHQ-9 moderate severe",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Is a PHQ-9 score of 10 considered high?",
    answer:
      "A score of 10 is the most widely used clinical threshold for further evaluation. It indicates moderate depressive symptoms and is the point at which clinicians typically conduct a more thorough assessment. It is not automatically a diagnosis \u2014 it\u2019s a signal that warrants professional attention.",
  },
  {
    question: "Can I use the PHQ-9 to diagnose myself with depression?",
    answer:
      "No. The PHQ-9 is a screening tool, not a diagnostic instrument. A diagnosis of major depressive disorder requires a comprehensive clinical evaluation by a qualified mental health professional, taking into account your full history, symptoms, functioning, and context.",
  },
  {
    question: "How often should I take the PHQ-9?",
    answer:
      "If you\u2019re not in treatment, there\u2019s no set schedule. Many people take it when they notice a change in how they\u2019ve been feeling. If you\u2019re in treatment, your provider may administer it monthly or at each session to track progress. Retaking it more frequently than every two weeks doesn\u2019t provide meaningful new information because the questions ask about the past two weeks.",
  },
  {
    question: "Does a high PHQ-9 score mean I need medication?",
    answer:
      "Not necessarily. Treatment decisions involve many factors that a screening score alone cannot determine. Both psychotherapy and medication are evidence-based treatments for depression, and the right approach depends on your specific situation, preferences, and the severity and history of your symptoms. A mental health professional can help you navigate these options.",
  },
  {
    question: "What if my score seems inconsistent with how I feel?",
    answer:
      "Screening tools are imperfect by design \u2014 they capture specific symptom patterns within a fixed timeframe. If your score seems lower than how you feel, or higher, that\u2019s worth discussing with a professional. Your lived experience is always more important than the number.",
  },
];

export default function WhatDoesPHQ9ScoreMeanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "What Does Your PHQ-9 Score Mean?", description: "PHQ-9 scores range from 0\u201327. Learn what each score range means, how severity is classified, and what to do next based on your results.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "What Does Your PHQ-9 Score Mean?", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What Does Your PHQ-9 Score Mean?
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            PHQ-9 scores run from 0 to 27. Scores of 0–4 indicate minimal depressive symptoms, 5–9 indicate mild symptoms, 10–14 indicate moderate symptoms, 15–19 indicate moderately severe symptoms, and 20–27 indicate severe symptoms. A score of 10 or higher is typically used as a clinical threshold for further evaluation, though what matters most is the full picture — not a single number.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Section 1 */}
          <section>
            <h2>What is the PHQ-9 and how is it scored?</h2>
            <p>
              The <strong>Patient Health Questionnaire-9 (PHQ-9)</strong> is a nine-question depression screening tool developed by Drs. Kroenke, Spitzer, and Williams (2001) and validated in primary care settings worldwide. It measures how often you have experienced nine common depressive symptoms over the past two weeks.
            </p>
            <p>
              Each question is scored on a 0–3 scale:
            </p>
            <ul>
              <li><strong>0</strong> = Not at all</li>
              <li><strong>1</strong> = Several days</li>
              <li><strong>2</strong> = More than half the days</li>
              <li><strong>3</strong> = Nearly every day</li>
            </ul>
            <p>
              The nine questions correspond to the diagnostic criteria for major depressive disorder as defined in the DSM-5. Your total score is the sum of all nine responses, ranging from <strong>0 to 27</strong>.
            </p>
            <p>
              The PHQ-9 has demonstrated strong psychometric properties: a sensitivity of 88% and specificity of 88% for major depression at a cutoff score of 10 (Kroenke et al., 2001). This means it correctly identifies about 88% of people with depression — making it one of the most validated brief screening tools available.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2>PHQ-9 score ranges: what each level means</h2>
            <div className="not-prose my-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Score</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Severity</th>
                    <th className="text-left py-2 font-semibold text-neutral-700 dark:text-neutral-200">Typical Recommendation</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">0–4</td><td className="py-2 pr-4">Minimal</td><td className="py-2">No action needed; monitor if scores increase</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">5–9</td><td className="py-2 pr-4">Mild</td><td className="py-2">Watchful waiting; consider professional consultation</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">10–14</td><td className="py-2 pr-4">Moderate</td><td className="py-2">Consider professional evaluation</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">15–19</td><td className="py-2 pr-4">Moderately Severe</td><td className="py-2">Active professional evaluation strongly recommended</td></tr>
                  <tr><td className="py-2 pr-4">20–27</td><td className="py-2 pr-4">Severe</td><td className="py-2">Immediate professional consultation recommended</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              These ranges come from the original PHQ-9 validation research (Kroenke et al., 2001) and are used in clinical settings worldwide.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2>What does a PHQ-9 score of 0–4 mean?</h2>
            <p>
              A score of 0–4 indicates <strong>minimal depressive symptoms</strong>. Most people in this range experience few or no significant depressive symptoms in the past two weeks.
            </p>
            <p>
              This doesn&apos;t mean everything is perfect — it means the specific symptoms the PHQ-9 measures are not showing up in a pattern that suggests clinical concern. If you scored here but still feel something is &quot;off,&quot; trust that instinct. The PHQ-9 captures nine specific symptoms; it doesn&apos;t capture every dimension of emotional wellbeing.
            </p>
            <p>
              A score in this range with no other concerns generally doesn&apos;t require any follow-up. However, if you&apos;re going through a stressful period and want additional support, that&apos;s always a valid reason to speak with a counselor.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 4 */}
          <section>
            <h2>What does a PHQ-9 score of 5–9 mean?</h2>
            <p>
              A score of 5–9 indicates <strong>mild depressive symptoms</strong>. You&apos;re experiencing some of the symptoms the PHQ-9 measures, but not at a frequency or intensity that reaches a clinical threshold.
            </p>
            <p>
              Clinically, scores in this range are often managed with what&apos;s called &quot;watchful waiting&quot; — monitoring symptoms over time to see whether they resolve on their own or progress. Research shows that mild symptoms sometimes respond well to lifestyle changes like improved sleep, regular physical activity, and stronger social support (Gelenberg, 2010).
            </p>
            <p>
              This doesn&apos;t mean you should dismiss how you&apos;re feeling. Mild symptoms can be significant disruptions to daily life, and early support can prevent symptoms from worsening. Talking to a therapist or counselor — even briefly — is a completely reasonable step at any score level.
            </p>
            <p>
              <strong>Questions to ask yourself at this range:</strong>
            </p>
            <ul>
              <li>Have these symptoms been present consistently for two or more weeks?</li>
              <li>Are they affecting your work, relationships, or daily functioning?</li>
              <li>Have they been getting worse rather than better?</li>
            </ul>
            <p>
              If the answer to any of those is yes, a professional consultation is worth considering regardless of the score number.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2>What does a PHQ-9 score of 10–14 mean?</h2>
            <p>
              A score of 10–14 indicates <strong>moderate depressive symptoms</strong> and crosses the most widely used clinical threshold. In primary care settings, a score of 10 or higher typically prompts a clinician to conduct a more thorough evaluation (Kroenke &amp; Spitzer, 2002).
            </p>
            <p>
              At this level, the symptoms you&apos;re experiencing are likely affecting multiple areas of your life. This might look like difficulty concentrating at work, withdrawal from activities you used to enjoy, disrupted sleep, low energy, or persistent feelings of sadness or hopelessness.
            </p>
            <p>
              A score in this range does not mean you have a diagnosis. What it means is that your symptom pattern is worth exploring with a professional. A clinician will consider your full history, context, and functioning — not just the PHQ-9 number.
            </p>
            <p>
              <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">Take the PHQ-9 depression self-check →</Link>
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 6 */}
          <section>
            <h2>What does a PHQ-9 score of 15–19 mean?</h2>
            <p>
              A score of 15–19 indicates <strong>moderately severe depressive symptoms</strong>. At this level, symptoms are likely causing significant impairment in your day-to-day functioning.
            </p>
            <p>
              Research indicates that individuals scoring in this range have a high probability of meeting criteria for major depressive disorder on structured clinical interview (Kroenke et al., 2001). This is the range where active professional evaluation — not just consideration — is strongly recommended.
            </p>
            <p>
              Treatment at this level typically involves psychotherapy, medication, or a combination of both. Multiple meta-analyses confirm that both cognitive behavioral therapy (CBT) and antidepressant medication are effective for moderate-to-severe depression (Cuijpers et al., 2019). A mental health professional can help you understand which approach, or combination, makes the most sense for you.
            </p>
            <p>
              If you scored in this range, reaching out to your primary care physician, a psychiatrist, or a licensed therapist is the most important next step.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2>What does a PHQ-9 score of 20–27 mean?</h2>
            <p>
              A score of 20–27 indicates <strong>severe depressive symptoms</strong>. This range reflects a high frequency and intensity of depressive symptoms across nearly all nine domains measured.
            </p>
            <p>
              If you are in this range, please reach out for support today. This does not mean you&apos;re in crisis, but it does mean that connecting with a professional is urgent — not something to put off.
            </p>
            <p>
              If you are experiencing thoughts of self-harm or suicide — particularly if you scored a 2 or 3 on Question 9 of the PHQ-9, which asks about such thoughts — please use the crisis resources below immediately.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Section 8 */}
          <section>
            <h2>Understanding Question 9: thoughts of self-harm</h2>
            <p>
              Question 9 of the PHQ-9 asks: &quot;Thoughts that you would be better off dead or of hurting yourself in some way.&quot;
            </p>
            <p>
              Any score above 0 on this item warrants immediate clinical attention, regardless of your total score. Research shows that even a score of 1 on this item (several days) is a clinically significant signal (Kroenke et al., 2001; Simon et al., 2013).
            </p>
            <p>
              This question does not exist to alarm you — it exists to identify when additional support is most needed. If you scored anything other than 0 on Question 9, please talk to a mental health professional or use the crisis resources below.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2>Can your PHQ-9 score change over time?</h2>
            <p>
              Yes — and that&apos;s an important part of how the tool is used clinically. The PHQ-9 is often administered repeatedly over time to track symptom changes, particularly when someone is in treatment. A reduction of 5 or more points is generally considered a clinically meaningful improvement (L&ouml;we et al., 2004).
            </p>
            <p>
              This means your score today is a snapshot, not a sentence. Symptoms can improve with treatment, lifestyle changes, social support, and time. Many people who score in moderate or severe ranges at one point score in minimal or mild ranges after receiving appropriate care.
            </p>
            <p>
              If you&apos;re in treatment, tracking your PHQ-9 score over months can help you and your provider see whether your current approach is working.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2>What should you do after getting your PHQ-9 score?</h2>
            <p>
              <strong>If you scored 0–4:</strong> No action is required. If you took the screen because you were feeling off, consider what&apos;s changed recently and whether talking to someone might help — even informally.
            </p>
            <p>
              <strong>If you scored 5–9:</strong> Monitor your symptoms over the coming weeks. If they persist or worsen, reach out to a counselor or your primary care physician.
            </p>
            <p>
              <strong>If you scored 10–14:</strong> Schedule a conversation with a mental health professional or your primary care doctor. Bring your score with you — it&apos;s useful context for them.
            </p>
            <p>
              <strong>If you scored 15–19:</strong> Reach out to a mental health professional this week. This range warrants prompt, not delayed, attention.
            </p>
            <p>
              <strong>If you scored 20–27:</strong> Contact a mental health professional today. If you&apos;re having thoughts of self-harm, please use the crisis resources below now.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2>The PHQ-9 is a tool, not a verdict</h2>
            <p>
              It&apos;s worth saying clearly: no number defines you, and no screening score determines your future. The PHQ-9 was designed as a starting point — a way to put language and structure around experiences that can feel difficult to articulate.
            </p>
            <p>
              Whatever your score, you&apos;re doing something valuable by taking your mental health seriously. Use the result as information, not a label, and let it guide you toward the support that&apos;s right for you.
            </p>
            <p>
              You might also find it useful to take the <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7 Anxiety Self-Check</Link> — depression and anxiety frequently co-occur, and understanding both can give you and your care team a more complete picture.
            </p>
          </section>

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is for educational purposes only. It is not a substitute for professional evaluation, and nothing here should be interpreted as a diagnosis or treatment recommendation. The PHQ-9 is a screening tool — it may indicate the need for further assessment but does not confirm or rule out any condition.
            </p>
          </div>

          {/* Crisis Resources */}
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">Crisis Resources</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              If you are in crisis or having thoughts of self-harm, please reach out now:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> — Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong> — Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline</strong> — <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Ready to check your symptoms?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">The PHQ-9 takes under 3 minutes. Free, private, and your answers never leave your browser.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/phq-9-depression-test" className="btn-primary text-sm">Take the PHQ-9 Depression Check</Link>
              <Link href="/gad-7-anxiety-test" className="btn-primary text-sm">Take the GAD-7 Anxiety Check</Link>
            </div>
          </div>

          {/* Author Bio */}
          <AuthorBio publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />

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

          {/* Related Tools */}
          <section className="not-prose mt-10">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Self-Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Clinically validated depression symptom screening</p>
              </Link>
              <Link href="/gad-7-anxiety-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Anxiety Self-Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Clinically validated anxiety symptom screening</p>
              </Link>
              <Link href="/dass-21-depression-anxiety-stress" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">DASS-21 Depression, Anxiety &amp; Stress</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Screen for all three in one sitting</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/phq-9-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Explained</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">How clinicians use this depression questionnaire</p>
              </Link>
              <Link href="/blog/depression-screening-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Depression Screening Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">USPSTF guidelines and evidence-based next steps</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
