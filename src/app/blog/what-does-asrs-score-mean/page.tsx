import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/what-does-asrs-score-mean`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "what-does-asrs-score-mean")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/what-does-asrs-score-mean",
  title: "What Does Your ASRS Score Mean?",
  description:
    "The ASRS-v1.1 screens for adult ADHD using 6 questions. Learn what a positive screen means, how the scoring works, and what to do with your results.",
  keywords: [
    "ASRS score meaning",
    "ASRS ADHD screening results",
    "adult ADHD screening score",
    "ASRS-v1.1 interpretation",
    "WHO ADHD screener",
    "ASRS positive screen",
    "adult ADHD test results",
    "ASRS scoring explained",
    "ADHD screening tool",
    "what does ASRS score mean",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Can adults develop ADHD, or does it have to start in childhood?",
    answer:
      "ADHD is a neurodevelopmental condition that, by definition, begins in childhood (before age 12). However, many adults are not diagnosed until adulthood because symptoms were missed, compensated for, or attributed to other causes. A new ADHD diagnosis in adulthood reflects a condition that was always present, not a new development.",
  },
  {
    question: "I\u2019ve always been disorganized and distractible. Does that mean I have ADHD?",
    answer:
      "Not necessarily \u2014 but it might be worth exploring. ADHD is diagnosed when symptoms cause clinically significant impairment across multiple settings and aren\u2019t better explained by another condition. Chronic difficulty with attention and organization that has affected your work, relationships, or quality of life since childhood is worth bringing to a professional.",
  },
  {
    question: "Can women have ADHD?",
    answer:
      "Yes. ADHD affects people of all genders. Historically, ADHD research focused on hyperactive presentations more common in boys, leading to systemic underdiagnosis of inattentive presentations more common in girls and women. Women with ADHD are often diagnosed later in life, frequently after a child receives a diagnosis (Quinn & Madhoo, 2014).",
  },
  {
    question: "Is it safe to seek an ADHD diagnosis as an adult?",
    answer:
      "Yes. Many adults are evaluated and diagnosed with ADHD each year. The evaluation process typically involves clinical interview, symptom history, and sometimes standardized testing. Your primary care physician, a psychiatrist, or a psychologist can conduct an evaluation.",
  },
];

export default function WhatDoesASRSScoreMeanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "What Does Your ASRS Score Mean?", description: "The ASRS-v1.1 screens for adult ADHD using 6 questions. Learn what a positive screen means, how the scoring works, and what to do with your results.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "What Does Your ASRS Score Mean?", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What Does Your ASRS Score Mean?
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            The ASRS-v1.1 uses a positive/negative screen format rather than a numerical total. A positive screen &mdash; scoring in the darkly shaded zone on 4 or more of the 6 questions &mdash; suggests that ADHD symptoms are consistent with what clinicians see in adults diagnosed with the condition, and that a full evaluation is warranted. A negative screen does not rule out ADHD.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Important notice */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <strong className="text-amber-800 dark:text-amber-400">Important:</strong> The ASRS is an educational screening tool only. It cannot diagnose ADHD or any other condition. Adult ADHD diagnosis requires a comprehensive clinical evaluation that typically includes clinical interview, history, and often collateral information.
            </p>
          </div>

          {/* Section 1: What Is the ASRS */}
          <section>
            <h2>What Is the ASRS?</h2>
            <p>
              The <strong>Adult ADHD Self-Report Scale (ASRS-v1.1)</strong> was developed in conjunction with the World Health Organization (WHO) and the Workgroup on Adult ADHD, led by Dr. Ronald Kessler of Harvard Medical School. It was published in 2005 as a brief, validated screening tool for adult ADHD in primary care and research settings.
            </p>
            <p>
              The ASRS consists of 6 questions drawn from the 18-symptom DSM-IV ADHD criteria. The 6 items were selected through item analysis as the strongest predictors of an ADHD diagnosis in adults (Kessler et al., 2005).
            </p>
            <p>
              Each question asks how often you have experienced a specific symptom over the past 6 months. Response options are: Never, Rarely, Sometimes, Often, Very Often.
            </p>
          </section>

          {/* Section 2: How Scoring Works */}
          <section>
            <h2>How ASRS Scoring Works</h2>
            <p>
              The ASRS does not produce a simple total score. Instead, each question has a <strong>shaded threshold</strong> that varies by item &mdash; some questions are positive at &ldquo;Often,&rdquo; others at &ldquo;Sometimes.&rdquo; This reflects the fact that different ADHD symptoms have different base rates in the general population.
            </p>
            <div className="not-prose my-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Question</th>
                    <th className="text-left py-2 font-semibold text-neutral-700 dark:text-neutral-200">Positive if rated...</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">1. Finishing details on tasks</td><td className="py-2">Often or Very Often</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">2. Organizing tasks</td><td className="py-2">Often or Very Often</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">3. Remembering appointments</td><td className="py-2">Often or Very Often</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">4. Avoiding tasks requiring sustained mental effort</td><td className="py-2">Often or Very Often</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">5. Fidgeting when sitting</td><td className="py-2">Often or Very Often</td></tr>
                  <tr><td className="py-2 pr-4">6. Feeling overly active</td><td className="py-2">Often or Very Often</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              A <strong>positive screen</strong> = 4 or more of the 6 questions rated in the shaded (positive) zone.
            </p>
            <p>
              This scoring method was validated in a sample of 154 adults with DSM-IV ADHD diagnoses and 6,324 controls, producing a sensitivity of 68.7% and specificity of 99.5% at the 4-item threshold (Kessler et al., 2005).
            </p>
          </section>

          {/* Section 3: Positive Screen */}
          <section>
            <h2>What Does a Positive ASRS Screen Mean?</h2>
            <p>
              A positive screen means your symptom pattern on these 6 items is consistent with what clinicians typically observe in adults with ADHD. The specificity of 99.5% at the 4-item threshold is notably high &mdash; meaning very few people without ADHD screen positive.
            </p>
            <p>
              A positive screen is not a diagnosis. ADHD in adults requires:
            </p>
            <ul>
              <li>Symptoms present since childhood (before age 12)</li>
              <li>Symptoms present in two or more settings (work, home, relationships)</li>
              <li>Clear evidence of impairment in social, academic, or occupational functioning</li>
              <li>Symptoms not better explained by another condition (anxiety, mood disorder, substance use)</li>
            </ul>
            <p>
              Many adults who screen positive have been managing undiagnosed ADHD for decades. Getting an evaluation can be genuinely clarifying &mdash; and effective treatment, whether behavioral, pharmacological, or both, has strong evidence for improving quality of life.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 4: Negative Screen */}
          <section>
            <h2>What Does a Negative ASRS Screen Mean?</h2>
            <p>
              A negative screen &mdash; fewer than 4 items in the shaded zone &mdash; means your responses don&apos;t match the typical ADHD pattern on these 6 items. However, the ASRS has a sensitivity of only 68.7%, meaning roughly 30% of people with ADHD will screen negative on this tool.
            </p>
            <p>
              If you screened negative but suspect ADHD, a clinical evaluation is still worth pursuing if:
            </p>
            <ul>
              <li>You&apos;ve had significant attention, organization, or impulse control difficulties since childhood</li>
              <li>Symptoms are impairing your work, relationships, or daily life</li>
              <li>You&apos;ve been previously evaluated or diagnosed</li>
              <li>A trusted person in your life has noted these patterns consistently</li>
            </ul>
            <p>
              The ASRS is a starting point, not a final answer.
            </p>
          </section>

          {/* Section 5: What ADHD Looks Like in Adults */}
          <section>
            <h2>Adult ADHD: What It Actually Looks Like</h2>
            <p>
              Adult ADHD often looks different from the hyperactive child stereotype most people picture. In adults, ADHD frequently presents as:
            </p>
            <ul>
              <li><strong>Chronic disorganization</strong> &mdash; difficulty maintaining systems, losing track of tasks and belongings</li>
              <li><strong>Time blindness</strong> &mdash; poor sense of time passing; frequently late or missing deadlines</li>
              <li><strong>Difficulty initiating tasks</strong> &mdash; especially tasks that feel boring or overwhelming, despite wanting to start</li>
              <li><strong>Hyperfocus</strong> &mdash; paradoxically, intense focus on high-interest activities for hours at a time</li>
              <li><strong>Emotional dysregulation</strong> &mdash; intense emotional reactions, low frustration tolerance, rejection sensitivity</li>
              <li><strong>Restlessness</strong> &mdash; in adults, often internal rather than physical hyperactivity</li>
            </ul>
            <p>
              These presentations are frequently missed or misattributed to anxiety, depression, or personality factors &mdash; which is why adult ADHD remains significantly underdiagnosed, particularly in women (Quinn &amp; Madhoo, 2014).
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 6: Co-occurring Conditions */}
          <section>
            <h2>ADHD and Co-occurring Conditions</h2>
            <p>
              ADHD rarely travels alone. Research indicates high rates of co-occurring conditions:
            </p>
            <ul>
              <li><strong>Anxiety disorders:</strong> approximately 50% of adults with ADHD (Kessler et al., 2006)</li>
              <li><strong>Major depression:</strong> approximately 30&ndash;40%</li>
              <li><strong>Substance use disorders:</strong> 2&ndash;3&times; higher prevalence than the general population</li>
              <li><strong>Sleep disorders:</strong> chronic insomnia and delayed sleep phase are common</li>
            </ul>
            <p>
              This overlap matters for interpretation. If you&apos;ve screened positive for ADHD symptoms AND scored in the clinical range on the <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7</Link> or <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9</Link>, bringing both sets of results to a clinician gives them a more complete picture. Untreated anxiety can mimic ADHD, and untreated ADHD can worsen anxiety and depression &mdash; accurate diagnosis requires teasing these apart.
            </p>
          </section>

          {/* Section 7: Treatment */}
          <section>
            <h2>How Is Adult ADHD Treated?</h2>
            <p>
              Adult ADHD has a strong evidence base for multiple treatment approaches.
            </p>
            <p>
              <strong>Medication:</strong> Stimulant medications (amphetamine salts, methylphenidate) are the most studied and most effective pharmacological treatment for ADHD, with effect sizes in the medium-to-large range (Faraone &amp; Glatt, 2010). Non-stimulant options (atomoxetine, viloxazine) are also available. Medication decisions require a prescriber evaluation.
            </p>
            <p>
              <strong>Cognitive Behavioral Therapy (CBT) for ADHD:</strong> Adapted CBT targeting organizational skills, time management, and emotional regulation has strong evidence as a standalone and adjunct treatment (Solanto et al., 2010).
            </p>
            <p>
              <strong>Coaching and skills training:</strong> ADHD coaching focuses on practical systems &mdash; task management, habit formation, environment design &mdash; and can be highly effective alongside other treatments.
            </p>
            <p>
              <strong>Lifestyle factors:</strong> Sleep consistency, regular aerobic exercise (shown to improve executive function), and reducing alcohol use all have meaningful impact on ADHD symptom severity.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is for educational purposes only. It is not a substitute for professional evaluation, and nothing here should be interpreted as a diagnosis or treatment recommendation. Screening tools may indicate the need for further assessment &mdash; they do not confirm or rule out any condition.
            </p>
          </div>

          {/* Crisis Resources */}
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">Crisis Resources</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              If you are in crisis or having thoughts of self-harm, please reach out now:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> &mdash; Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong> &mdash; Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline</strong> &mdash; <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Screen for adult ADHD</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, and your answers never leave your browser.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/asrs-adhd-screening" className="btn-primary text-sm">Take the ASRS ADHD Screen</Link>
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
              <Link href="/asrs-adhd-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">ASRS ADHD Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">WHO-developed adult ADHD self-report scale</p>
              </Link>
              <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Self-Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Screen for depression &mdash; commonly co-occurs with ADHD</p>
              </Link>
              <Link href="/gad-7-anxiety-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Anxiety Self-Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Screen for anxiety &mdash; frequently overlaps with ADHD</p>
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
              <Link href="/blog/adult-adhd-signs" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Adult ADHD: Signs You Might Have Missed</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Common signs of ADHD in adults and why it&apos;s underdiagnosed</p>
              </Link>
              <Link href="/blog/depression-vs-anxiety" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Depression vs. Anxiety: What&apos;s the Difference?</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understanding conditions that commonly co-occur with ADHD</p>
              </Link>
              <Link href="/blog/when-should-i-see-a-therapist" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">When Should I See a Therapist? 10 Signs</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Signs it may be time to talk to a professional</p>
              </Link>
              <Link href="/blog/how-to-talk-to-doctor-about-mental-health" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">How to Talk to Your Doctor About Mental Health</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">How to bring your screening results to an appointment</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
