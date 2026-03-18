import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/what-is-phq-9-depression-screener`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "what-is-phq-9-depression-screener")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/what-is-phq-9-depression-screener",
  title: "What Is the PHQ-9? Complete Guide to the Depression Screener",
  description:
    "The PHQ-9 is a 9-question validated depression screening tool. Learn how it works, what it measures, who developed it, and how to interpret results.",
  keywords: [
    "what is PHQ-9",
    "PHQ-9 depression screener",
    "PHQ-9 explained",
    "patient health questionnaire",
    "PHQ-9 validity",
    "how does PHQ-9 work",
    "PHQ-9 questions",
    "PHQ-9 scoring",
    "PHQ-9 vs PHQ-2",
    "depression screening tool",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Is the PHQ-9 free to use?",
    answer:
      "Yes. The PHQ-9 is in the public domain, developed with US government funding and freely available for clinical and research use. You can access it at no cost through MindCheck Tools and many other platforms without any licensing fees.",
  },
  {
    question: "Can a PHQ-9 score change week to week?",
    answer:
      "Yes. The PHQ-9 asks about the past two weeks, so scores vary as circumstances, sleep, stress, or mood changes. Many clinicians track PHQ-9 scores over time to measure treatment progress, with a 5-point reduction considered clinically meaningful improvement.",
  },
  {
    question: "Do I need a doctor to administer the PHQ-9?",
    answer:
      "No. The PHQ-9 was designed as a patient-administered self-report tool you can complete without clinical supervision. However, interpreting your score in the context of your full mental health picture is where professional guidance adds meaningful value.",
  },
  {
    question: "Is the PHQ-9 used for children?",
    answer:
      "The standard PHQ-9 was validated for adults. A modified version, the PHQ-A (Adolescent), is designed for ages 13\u201317 and validated in adolescent populations. For screening someone under 18, the PHQ-A or a clinician referral is the more appropriate option.",
  },
];

export default function WhatIsPHQ9DepressionScreenerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "What Is the PHQ-9? A Complete Guide to the Depression Screener", description: "The PHQ-9 is a 9-question validated depression screening tool. Learn how it works, what it measures, who developed it, and how to interpret results.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "What Is the PHQ-9?", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">11 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What Is the PHQ-9? A Complete Guide to the Depression Screener
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            The PHQ-9 (Patient Health Questionnaire-9) is a nine-question, validated depression screening tool used by healthcare providers worldwide. It measures the frequency of nine depressive symptoms over the past two weeks, producing a total score from 0 to 27 that corresponds to five severity levels — from minimal (0–4) to severe (20–27). It cannot diagnose depression, but it is one of the most accurate brief tools for identifying who needs further evaluation.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Section 1 */}
          <section>
            <h2>The origin of the PHQ-9</h2>
            <p>
              The PHQ-9 was developed in the late 1990s by Drs. <strong>Kurt Kroenke</strong> and <strong>Robert Spitzer</strong> of Columbia University, along with Dr. Janet Williams. It was published in the <em>Journal of General Internal Medicine</em> in 2001, alongside the validation study that established its clinical accuracy.
            </p>
            <p>
              It emerged from a need for a brief, reliable depression screen that could be used in primary care settings — places where mental health concerns often go undetected because visits are short and the focus is typically physical health. The goal was a tool that patients could complete themselves in a few minutes and that would give clinicians actionable information quickly.
            </p>
            <p>
              The PHQ-9 is now one of the most cited instruments in mental health research, having appeared in over 10,000 published studies. It is used in more than 80 countries and has been validated across diverse populations, languages, and clinical settings (Kroenke et al., 2010).
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2>What does the PHQ-9 measure?</h2>
            <p>
              The nine questions on the PHQ-9 correspond directly to the <strong>nine diagnostic criteria for major depressive disorder</strong> as defined in the Diagnostic and Statistical Manual of Mental Disorders, 5th edition (DSM-5). This is what makes the PHQ-9 clinically meaningful rather than just a general wellness check.
            </p>
            <p>
              The nine symptoms measured are:
            </p>
            <ol>
              <li><strong>Little interest or pleasure</strong> in doing things (anhedonia)</li>
              <li><strong>Feeling down, depressed, or hopeless</strong> (depressed mood)</li>
              <li><strong>Trouble falling or staying asleep</strong>, or sleeping too much</li>
              <li><strong>Feeling tired or having little energy</strong></li>
              <li><strong>Poor appetite or overeating</strong></li>
              <li><strong>Feeling bad about yourself</strong> — feeling like a failure or letting yourself or your family down</li>
              <li><strong>Trouble concentrating</strong> on things like reading or watching TV</li>
              <li><strong>Moving or speaking so slowly</strong> that others could notice, or being fidgety or restless</li>
              <li><strong>Thoughts that you would be better off dead</strong> or thoughts of hurting yourself</li>
            </ol>
            <p>
              Each item is scored 0 (not at all) to 3 (nearly every day). The total score ranges from 0 to 27.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2>Why these nine symptoms?</h2>
            <p>
              These symptoms were selected because they map to the clinical definition of major depressive disorder. According to the DSM-5, a diagnosis of MDD requires five or more of these symptoms present most of the time for at least two weeks, with at least one being either depressed mood or anhedonia (loss of pleasure).
            </p>
            <p>
              The PHQ-9 doesn&apos;t make that diagnostic determination — that requires clinical judgment and a full assessment. But by measuring all nine, the screen gives clinicians (and individuals) a systematic look at the full symptom picture rather than relying on what happens to come up in conversation.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 4 */}
          <section>
            <h2>How accurate is the PHQ-9?</h2>
            <p>
              The PHQ-9 has been extensively studied for its psychometric properties.
            </p>
            <div className="not-prose my-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Property</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Value</th>
                    <th className="text-left py-2 font-semibold text-neutral-700 dark:text-neutral-200">Source</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Sensitivity (correctly detects depression)</td><td className="py-2 pr-4">88%</td><td className="py-2">Kroenke et al., 2001</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Specificity (correctly identifies non-depression)</td><td className="py-2 pr-4">88%</td><td className="py-2">Kroenke et al., 2001</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Test-retest reliability</td><td className="py-2 pr-4">0.84 (Pearson&apos;s r)</td><td className="py-2">Kroenke et al., 2001</td></tr>
                  <tr><td className="py-2 pr-4">Internal consistency</td><td className="py-2 pr-4">Cronbach&apos;s &alpha; = 0.89</td><td className="py-2">Spitzer et al., 1999</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              These figures are at the standard cutoff of 10. They mean that, at that threshold, the tool correctly identifies approximately 88% of people who have depression and correctly identifies approximately 88% of people who don&apos;t.
            </p>
            <p>
              No screening tool is 100% accurate. The PHQ-9 has a false positive and false negative rate, which is exactly why it&apos;s described as a screening tool that informs — not replaces — clinical evaluation.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2>Who uses the PHQ-9?</h2>
            <p>
              The PHQ-9 is used across many settings:
            </p>
            <p>
              <strong>Primary care:</strong> The PHQ-9 was originally designed for this setting, where it is now the most widely used depression screen. Many primary care practices administer it routinely at annual visits.
            </p>
            <p>
              <strong>Mental health clinics:</strong> Used both for initial screening and to track treatment progress over time. A reduction of 5 or more points is considered a clinically meaningful improvement (L&ouml;we et al., 2004).
            </p>
            <p>
              <strong>Research:</strong> One of the most commonly used outcome measures in depression treatment studies worldwide.
            </p>
            <p>
              <strong>Employee wellness programs:</strong> Organizations and EAPs use it for mental health assessments.
            </p>
            <p>
              <strong>Self-assessment:</strong> The PHQ-9 is in the public domain, making it freely available for non-commercial use. Tools like the <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9 Depression Self-Check</Link> allow individuals to use it privately and without clinical administration.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 6 */}
          <section>
            <h2>What are the limitations of the PHQ-9?</h2>
            <p>
              The PHQ-9 is highly validated, but no tool is without limitations.
            </p>
            <p>
              <strong>It&apos;s a screening tool, not a diagnostic tool.</strong> A high score does not mean you have depression. It means you&apos;re experiencing symptoms that warrant further evaluation.
            </p>
            <p>
              <strong>It captures a two-week window.</strong> The PHQ-9 asks about &quot;the past two weeks.&quot; It won&apos;t reflect how you were feeling six months ago, even if that matters for your history.
            </p>
            <p>
              <strong>It doesn&apos;t distinguish between unipolar and bipolar depression.</strong> Someone experiencing a depressive episode in the context of bipolar disorder will score similarly to someone with unipolar depression. This matters for treatment — antidepressants alone can precipitate mania in bipolar disorder. A tool like the <Link href="/mdq-bipolar-screening" className="text-sage-600 dark:text-sage-400 underline">MDQ Bipolar Screening</Link> provides a different lens.
            </p>
            <p>
              <strong>Item 9 requires context.</strong> Thoughts of self-harm or death (Question 9) scored above 0 always warrant clinical attention, regardless of total score. The PHQ-9 total score alone doesn&apos;t convey the urgency that any positive response to this item carries.
            </p>
            <p>
              <strong>Cultural and demographic variation.</strong> While the PHQ-9 has been validated across many populations, somatic symptom expression varies culturally and may not be fully captured by the instrument&apos;s framing.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2>How is the PHQ-9 different from the PHQ-2?</h2>
            <p>
              The <strong>PHQ-2</strong> consists only of the first two questions of the PHQ-9 — the ones about depressed mood and anhedonia. It&apos;s used as an ultra-brief initial gateway screen in settings where time is extremely limited.
            </p>
            <p>
              A PHQ-2 score of 3 or higher triggers the full PHQ-9 administration. The PHQ-2 has a sensitivity of 83% and specificity of 92% for major depression (Kroenke et al., 2003), making it a useful first step but less comprehensive than the full PHQ-9.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Section 8 */}
          <section>
            <h2>The PHQ-9 and suicidality: a note on Question 9</h2>
            <p>
              Question 9 asks about thoughts of self-harm or death. In primary care validation studies, approximately 9% of patients endorsed this item at a score of 1 or higher (Kroenke et al., 2001).
            </p>
            <p>
              A score of anything other than 0 on this item should not be treated as just another score component. Research demonstrates that even occasional passive thoughts of death are associated with elevated suicide risk over time (Simon et al., 2013) and warrant direct clinical assessment.
            </p>
            <p>
              If you are having thoughts of self-harm or suicide, please use the crisis resources below.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2>PHQ-9 vs. other depression screens</h2>
            <div className="not-prose my-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Tool</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Questions</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Score Range</th>
                    <th className="text-left py-2 font-semibold text-neutral-700 dark:text-neutral-200">Key Strength</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">PHQ-9</td><td className="py-2 pr-4">9</td><td className="py-2 pr-4">0–27</td><td className="py-2">Best-validated, most widely used</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">PHQ-2</td><td className="py-2 pr-4">2</td><td className="py-2 pr-4">0–6</td><td className="py-2">Speed; used as initial gateway</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4"><Link href="/ces-d-depression-scale" className="text-sage-600 dark:text-sage-400 underline">CES-D</Link></td>
                    <td className="py-2 pr-4">20</td><td className="py-2 pr-4">0–60</td><td className="py-2">Broad coverage; captures positive affect</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4"><Link href="/dass-21-depression-anxiety-stress" className="text-sage-600 dark:text-sage-400 underline">DASS-21</Link> (Depression)</td>
                    <td className="py-2 pr-4">7</td><td className="py-2 pr-4">0–21</td><td className="py-2">Also captures anxiety and stress</td>
                  </tr>
                  <tr><td className="py-2 pr-4">BDI-II</td><td className="py-2 pr-4">21</td><td className="py-2 pr-4">0–63</td><td className="py-2">Longer; used in research settings</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              The PHQ-9 occupies the ideal middle ground: enough items to be clinically meaningful, short enough for routine use, and extensively validated. The <Link href="/ces-d-depression-scale" className="text-sage-600 dark:text-sage-400 underline">CES-D</Link> and <Link href="/dass-21-depression-anxiety-stress" className="text-sage-600 dark:text-sage-400 underline">DASS-21</Link> offer alternative perspectives, and taking both can give you and your care provider a richer picture.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2>How to use your PHQ-9 results</h2>
            <p>
              Your PHQ-9 score is a starting point, not a verdict.
            </p>
            <ul>
              <li><strong>0–4:</strong> Minimal symptoms. Monitor if you feel something is changing.</li>
              <li><strong>5–9:</strong> Mild symptoms. Consider lifestyle support; consult a professional if symptoms persist.</li>
              <li><strong>10–14:</strong> Moderate symptoms. A professional evaluation is recommended.</li>
              <li><strong>15–19:</strong> Moderately severe. Reach out to a mental health professional this week.</li>
              <li><strong>20–27:</strong> Severe. Connect with professional support today.</li>
            </ul>
            <p>
              Read the full score interpretation guide: <Link href="/blog/what-does-phq-9-score-mean" className="text-sage-600 dark:text-sage-400 underline">What Does Your PHQ-9 Score Mean?</Link>
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
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Ready to take the PHQ-9?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Takes under 3 minutes. Free, private, and your answers never leave your browser.</p>
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
              <Link href="/ces-d-depression-scale" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">CES-D Depression Scale</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">20-question depression screen with positive affect items</p>
              </Link>
              <Link href="/dass-21-depression-anxiety-stress" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">DASS-21 Depression, Anxiety &amp; Stress</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Screen for all three in one sitting</p>
              </Link>
              <Link href="/mdq-bipolar-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">MDQ Bipolar Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Screen for bipolar disorder symptoms</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/what-does-phq-9-score-mean" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">What Does Your PHQ-9 Score Mean?</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Score ranges, severity levels, and next steps</p>
              </Link>
              <Link href="/blog/phq-9-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Explained</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">How clinicians use this depression questionnaire</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
