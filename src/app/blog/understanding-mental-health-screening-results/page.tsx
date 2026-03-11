import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/understanding-mental-health-screening-results`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "understanding-mental-health-screening-results")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/understanding-mental-health-screening-results",
  title: "Understanding Your Mental Health Screening Results",
  description:
    "Took a mental health screening and not sure what to do next? This guide explains what screening results mean, what they don\u2019t mean, and your practical next steps.",
  keywords: [
    "mental health screening results",
    "what to do after mental health screening",
    "PHQ-9 results",
    "GAD-7 results",
    "mental health test results explained",
    "screening vs diagnosis",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Can I use these results to self-diagnose?",
    answer:
      "No. Screening results can tell you that your symptom pattern crosses a validated statistical threshold \u2014 they cannot diagnose you with a condition. Diagnosis requires a comprehensive clinical evaluation that considers your full history, context, and functioning. Self-diagnosis based on screening scores leads to either unnecessary alarm or false reassurance.",
  },
  {
    question: "I scored high on multiple screens. Does that mean I have multiple conditions?",
    answer:
      "It means multiple symptom dimensions are elevated, which is worth discussing with a clinician. Mental health conditions frequently co-occur \u2014 depression and anxiety together, PTSD and depression, ADHD and anxiety. But elevated scores across multiple tools might also reflect how interrelated these symptom dimensions are, or situational distress that\u2019s affecting all areas. A clinician can help sort out what\u2019s what.",
  },
  {
    question: "Should I be worried about my results?",
    answer:
      "A high score is a signal worth taking seriously \u2014 not a cause for panic. These tools were designed to identify people who might benefit from professional evaluation, and a high score means you\u2019re in that group. Worry less about what the score \u201cmeans\u201d and focus on the concrete next step: talking to your doctor or a therapist.",
  },
  {
    question: "How accurate are these screening tools?",
    answer:
      "The tools on this site are among the most validated in clinical and research settings \u2014 the PHQ-9, GAD-7, PCL-5, and AUDIT are used in primary care, hospitals, and research worldwide. Sensitivity (correctly identifying people with a condition) typically ranges from 70\u201390%; specificity (correctly ruling out those without) is similar. No screening tool is perfect \u2014 which is why clinical evaluation follows a positive screen.",
  },
];

export default function UnderstandingScreeningResultsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Understanding Your Mental Health Screening Results", description: "Took a mental health screening and not sure what to do next? This guide explains what screening results mean, what they don\u2019t mean, and your practical next steps.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Understanding Your Mental Health Screening Results", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">14 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Understanding Your Mental Health Screening Results
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Mental health screening tools &mdash; the PHQ-9, GAD-7, PCL-5, and others &mdash; are structured, validated questionnaires that assess how much distress you&rsquo;ve been experiencing across a set of symptoms. A screening result tells you where your symptom pattern falls relative to validated clinical thresholds. It is not a diagnosis, not a prediction, and not a verdict &mdash; it is information that can help you and a clinician understand what&rsquo;s happening and what to do next.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Section 1 */}
          <section>
            <h2>Screening vs. Diagnosis: The Critical Distinction</h2>
            <p>The most important thing to understand about any mental health screening result is what it is and what it isn&rsquo;t.</p>
            <p><strong>A screening result:</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Indicates whether your symptom pattern crosses a validated statistical threshold</li>
              <li>Was developed to identify people who <em>may</em> benefit from further evaluation</li>
              <li>Can be elevated without a diagnosable condition being present</li>
              <li>Can be below threshold even when a condition is present (false negatives exist)</li>
              <li>Takes 2&ndash;10 minutes and cannot capture the full complexity of your experience</li>
            </ul>
            <p><strong>A clinical diagnosis:</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Requires a comprehensive evaluation by a trained clinician</li>
              <li>Integrates symptom history, severity, duration, functional impairment, and context</li>
              <li>Rules out other conditions that might explain the symptoms</li>
              <li>Considers your full personal history and circumstances</li>
              <li>Accounts for co-occurring conditions</li>
            </ul>
            <p>
              A positive screen &mdash; scoring above the validated cutoff on the PHQ-9, GAD-7, or any other tool &mdash; is not a diagnosis of depression, anxiety, or anything else. It is a signal that a professional evaluation would be worthwhile.
            </p>
            <p>
              This distinction matters in both directions: a high score doesn&rsquo;t mean you definitely have a condition, and a low score doesn&rsquo;t mean everything is fine if your experience tells you otherwise.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2>What the Tools on This Site Measure</h2>
            <p>Each screening tool covers a distinct dimension. Understanding what each one is and isn&rsquo;t measuring helps contextualize your results.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-900 dark:text-neutral-100">Tool</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-900 dark:text-neutral-100">What It Measures</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-900 dark:text-neutral-100">Range</th>
                    <th className="text-left py-2 font-semibold text-neutral-900 dark:text-neutral-100">Positive Threshold</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700 dark:text-neutral-300">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4"><Link href="/phq-9-depression-test" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">PHQ-9</Link></td>
                    <td className="py-2 pr-4">Depression severity</td>
                    <td className="py-2 pr-4">0&ndash;27</td>
                    <td className="py-2">&ge;10 moderate</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4"><Link href="/gad-7-anxiety-test" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">GAD-7</Link></td>
                    <td className="py-2 pr-4">Generalized anxiety</td>
                    <td className="py-2 pr-4">0&ndash;21</td>
                    <td className="py-2">&ge;10 moderate</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4"><Link href="/audit-alcohol-test" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">AUDIT</Link></td>
                    <td className="py-2 pr-4">Alcohol use problems</td>
                    <td className="py-2 pr-4">0&ndash;40</td>
                    <td className="py-2">&ge;8 hazardous</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4"><Link href="/audit-c-alcohol-screen" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">AUDIT-C</Link></td>
                    <td className="py-2 pr-4">Brief alcohol screen</td>
                    <td className="py-2 pr-4">0&ndash;12</td>
                    <td className="py-2">&ge;4 men / &ge;3 women</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4"><Link href="/pcl-5-ptsd-screening" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">PCL-5</Link></td>
                    <td className="py-2 pr-4">PTSD symptom severity</td>
                    <td className="py-2 pr-4">0&ndash;80</td>
                    <td className="py-2">&ge;33 provisional PTSD</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4"><Link href="/pc-ptsd-5-screening" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">PC-PTSD-5</Link></td>
                    <td className="py-2 pr-4">Brief PTSD gateway</td>
                    <td className="py-2 pr-4">0&ndash;5</td>
                    <td className="py-2">&ge;3 positive screen</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4"><Link href="/asrs-adhd-screening" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">ASRS</Link></td>
                    <td className="py-2 pr-4">Adult ADHD (Part A)</td>
                    <td className="py-2 pr-4">0&ndash;24</td>
                    <td className="py-2">&ge;14 positive screen</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4"><Link href="/mdq-bipolar-screening" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">MDQ</Link></td>
                    <td className="py-2 pr-4">Bipolar spectrum</td>
                    <td className="py-2 pr-4">0&ndash;13 Part 1</td>
                    <td className="py-2">3-part criteria</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4"><Link href="/dast-10-drug-screening" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">DAST-10</Link></td>
                    <td className="py-2 pr-4">Drug use problems</td>
                    <td className="py-2 pr-4">0&ndash;10</td>
                    <td className="py-2">&ge;3 moderate concern</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4"><Link href="/cage-aid-substance-abuse-screening" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">CAGE-AID</Link></td>
                    <td className="py-2 pr-4">Alcohol + drug brief screen</td>
                    <td className="py-2 pr-4">0&ndash;4</td>
                    <td className="py-2">&ge;2 positive</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4"><Link href="/dass-21-depression-anxiety-stress" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">DASS-21</Link></td>
                    <td className="py-2 pr-4">Depression, anxiety, stress</td>
                    <td className="py-2 pr-4">3 scales</td>
                    <td className="py-2">Varies by scale</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4"><Link href="/oci-r-ocd-screening" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">OCI-R</Link></td>
                    <td className="py-2 pr-4">OCD symptom severity</td>
                    <td className="py-2 pr-4">0&ndash;72</td>
                    <td className="py-2">&ge;21 clinical range</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4"><Link href="/ace-questionnaire" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">ACE</Link></td>
                    <td className="py-2 pr-4">Adverse childhood experiences</td>
                    <td className="py-2 pr-4">0&ndash;10</td>
                    <td className="py-2">4+ elevated risk</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4"><Link href="/rosenberg-self-esteem-scale" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">Rosenberg</Link></td>
                    <td className="py-2 pr-4">Global self-esteem</td>
                    <td className="py-2 pr-4">0&ndash;30</td>
                    <td className="py-2">&lt;15 low</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2>Why Your Score Might Be Elevated Without a Diagnosis</h2>
            <p>
              Mental health screening tools are calibrated to be sensitive &mdash; they err on the side of capturing people who might need support. This means false positives exist. Your score may be elevated because of:
            </p>
            <p>
              <strong>Situational distress:</strong> A recent loss, a difficult life transition, acute work stress, or relationship difficulty can produce PHQ-9 or GAD-7 scores in clinical ranges that reflect real distress without indicating a chronic condition.
            </p>
            <p>
              <strong>Physical health conditions:</strong> Thyroid disorders, anemia, chronic pain, sleep apnea, and many other medical conditions produce symptoms that overlap with depression and anxiety.
            </p>
            <p>
              <strong>Medication side effects:</strong> Some medications produce anxiety, mood changes, or sleep disruption that elevates screening scores.
            </p>
            <p>
              <strong>Normal grief:</strong> Bereavement can produce PHQ-9 scores in the moderate-to-severe range &mdash; not because the person has major depressive disorder, but because grief is painful.
            </p>
            <p>
              <strong>How you answered:</strong> Screening tools ask about the past two weeks (PHQ-9, GAD-7) or past month (PCL-5). If those weeks were unusually difficult, your score reflects that period specifically.
            </p>
            <p>
              None of this means a high score should be dismissed. It means context matters &mdash; which is exactly why clinical evaluation rather than self-diagnosis is the appropriate next step.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 4 */}
          <section>
            <h2>Why Your Score Might Be Low When Something Is Wrong</h2>
            <p>False negatives also exist. You might score below clinical thresholds and still be struggling significantly because:</p>
            <p>
              <strong>Minimization:</strong> People who have adapted to chronic distress often underestimate their symptoms. If you&rsquo;ve felt like this for years, you may rate it as &ldquo;not at all&rdquo; when it&rsquo;s actually constant.
            </p>
            <p>
              <strong>The tool doesn&rsquo;t cover your presentation:</strong> The PHQ-9 covers depression; if your primary struggle is social anxiety, a low PHQ-9 score doesn&rsquo;t mean you&rsquo;re fine &mdash; it means you need a different screen.
            </p>
            <p>
              <strong>Timing:</strong> You took the screen on a better day. Mental health conditions fluctuate.
            </p>
            <p>
              <strong>Multiple mild elevations:</strong> You might score subclinical on three different tools &mdash; not above any single threshold &mdash; but the combination still reflects a meaningful burden.
            </p>
            <p>
              If your score is low but your experience is telling you otherwise &mdash; trust your experience. Your own sense that something is wrong is clinically relevant information.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2>What to Do After Getting Your Results</h2>
            <h3>Low scores (below clinical thresholds)</h3>
            <p>No clinical action is indicated based on the screening alone. If you&rsquo;re here because something feels off, consider:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Taking a different tool that might better capture your experience</li>
              <li>Monitoring over time &mdash; retake the screen in 2&ndash;4 weeks</li>
              <li>Talking to your primary care physician if you have ongoing concerns</li>
            </ul>
            <h3>Mild scores (just above threshold)</h3>
            <p>This is the range where lifestyle factors and early support can make a significant difference before things escalate:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Sleep:</strong> Prioritize it as a health behavior; sleep deprivation worsens every mental health condition</li>
              <li><strong>Exercise:</strong> 30 minutes of aerobic activity most days has effect sizes comparable to medication for mild presentations</li>
              <li><strong>Social connection:</strong> Isolation is both a symptom and a cause &mdash; maintaining connection matters</li>
              <li><strong>Reduce alcohol:</strong> Alcohol reliably worsens depression and anxiety, especially the days following drinking</li>
              <li><strong>Consider talking to someone:</strong> Your primary care physician is a reasonable first call</li>
            </ul>
            <h3>Moderate scores</h3>
            <p>At this level, professional support is recommended &mdash; not urgently, but meaningfully:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Talk to your primary care physician; share your scores</li>
              <li>Consider a referral to a therapist or counselor</li>
              <li>If cost or access is a barrier, community mental health centers and sliding-scale therapists are available (see <Link href="/blog/how-to-find-a-therapist" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">How to Find a Therapist</Link>)</li>
            </ul>
            <h3>Severe scores</h3>
            <p>
              Please reach out for professional support soon. Severe scores indicate a significant symptom burden that typically requires professional care to address effectively. Start with your primary care physician or go directly to a mental health professional if possible.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 6 */}
          <section>
            <h2>How to Use Your Results in a Clinical Conversation</h2>
            <p>Your screening results are most useful when you bring them to a clinical appointment. They give a clinician a structured starting point and a quantified baseline.</p>
            <p>Helpful ways to use results:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>&ldquo;I took the PHQ-9 online and scored 16 &mdash; I wanted to talk to you about it&rdquo;</li>
              <li>Bringing printed or screenshot results to your appointment</li>
              <li>Taking multiple screens to give a fuller picture: PHQ-9 + GAD-7 + AUDIT together takes about 8 minutes and covers depression, anxiety, and alcohol use</li>
            </ul>
            <p>
              The <Link href="/blog/how-to-talk-to-doctor-about-mental-health" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">how to talk to your doctor about mental health</Link> guide covers this in detail &mdash; including exactly what to say if you don&rsquo;t know where to start.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2>Retaking Screens Over Time</h2>
            <p>
              Validated screening tools are excellent for tracking change over time &mdash; for monitoring whether you&rsquo;re improving, stable, or getting worse. Many people in treatment retake the PHQ-9 or GAD-7 every 2&ndash;4 weeks to track progress. A decrease of 5 points on the PHQ-9, or a drop of 4 points on the GAD-7, is generally considered a clinically meaningful improvement.
            </p>
            <p>
              If you&rsquo;re not in treatment and you take a screen and score in clinical ranges, retaking it in a month is useful: is it getting better, staying the same, or getting worse? That trajectory informs urgency.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Clinical Disclaimer */}
          <div className="rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 p-5">
            <p className="text-sm text-amber-900 dark:text-amber-200 font-semibold mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-amber-800 dark:text-amber-300">
              Mental health screening tools are for educational and informational purposes only. They cannot diagnose mental health conditions. If you are concerned about your results, please consult a qualified mental health professional.
            </p>
          </div>

          {/* Crisis Resources */}
          <div className="rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 p-5">
            <p className="text-sm text-red-900 dark:text-red-200 font-semibold mb-2">Crisis Resources</p>
            <p className="text-sm text-red-800 dark:text-red-300 mb-2">
              If you are in crisis or having thoughts of self-harm, please reach out now:
            </p>
            <ul className="text-sm text-red-800 dark:text-red-300 space-y-1">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> &mdash; Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong> &mdash; Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline</strong> &mdash; <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="rounded-lg bg-sage-50 dark:bg-sage-950/30 border border-sage-200 dark:border-sage-800 p-6 text-center">
            <h2 className="text-lg font-semibold text-sage-900 dark:text-sage-100 mb-2">Take a Free Mental Health Screening</h2>
            <p className="text-sm text-sage-700 dark:text-sage-400 mb-4">
              All tools are free, confidential, and take 2&ndash;10 minutes. No account needed.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/phq-9-depression-test" className="inline-block rounded-md bg-sage-600 px-5 py-2 text-sm font-medium text-white hover:bg-sage-700 transition">PHQ-9 Depression Check</Link>
              <Link href="/gad-7-anxiety-test" className="inline-block rounded-md bg-sage-600 px-5 py-2 text-sm font-medium text-white hover:bg-sage-700 transition">GAD-7 Anxiety Check</Link>
              <Link href="/audit-alcohol-test" className="inline-block rounded-md bg-sage-600 px-5 py-2 text-sm font-medium text-white hover:bg-sage-700 transition">AUDIT Alcohol Screening</Link>
            </div>
          </div>

          {/* Author Bio */}
          <AuthorBio />

          {/* FAQ */}
          <section>
            <h2>Frequently Asked Questions</h2>
            <div className="space-y-6">
              {FAQ_DATA.map((faq) => (
                <details key={faq.question} className="group">
                  <summary className="cursor-pointer font-semibold text-neutral-900 dark:text-neutral-100 hover:text-orange-600 dark:hover:text-orange-400 transition">
                    {faq.question}
                  </summary>
                  <p className="mt-2 text-neutral-700 dark:text-neutral-300">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Related Tools */}
          <section>
            <h2>Related Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { href: "/phq-9-depression-test", label: "PHQ-9 Depression Self-Check" },
                { href: "/gad-7-anxiety-test", label: "GAD-7 Anxiety Screening" },
                { href: "/audit-alcohol-test", label: "AUDIT Alcohol Screening" },
                { href: "/pcl-5-ptsd-screening", label: "PCL-5 PTSD Screening" },
              ].map((tool) => (
                <Link key={tool.href} href={tool.href} className="block rounded-lg border border-neutral-200 dark:border-neutral-700 p-4 hover:border-orange-300 dark:hover:border-orange-700 transition">
                  <span className="font-medium text-neutral-900 dark:text-neutral-100">{tool.label}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Related Guides */}
          <section>
            <h2>Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BLOG_POSTS.filter((p) =>
                ["how-to-talk-to-doctor-about-mental-health", "how-to-find-a-therapist", "what-does-phq-9-score-mean", "what-does-gad-7-score-mean"].includes(p.slug)
              ).map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block rounded-lg border border-neutral-200 dark:border-neutral-700 p-4 hover:border-orange-300 dark:hover:border-orange-700 transition">
                  <span className="font-medium text-neutral-900 dark:text-neutral-100">{post.title}</span>
                  <span className="block text-xs text-neutral-500 dark:text-neutral-400 mt-1">{post.readTime}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
