import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/what-does-pcl-5-score-mean`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "what-does-pcl-5-score-mean")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/what-does-pcl-5-score-mean",
  title: "What Does Your PCL-5 Score Mean?",
  description:
    "PCL-5 scores range from 0\u201380. Learn what each score threshold means, how PTSD severity is classified, and what to do after getting your results.",
  keywords: [
    "PCL-5 score meaning",
    "PCL-5 PTSD score",
    "PCL-5 results interpretation",
    "PTSD screening score",
    "PCL-5 cutoff score",
    "PCL-5 symptom clusters",
    "PTSD checklist score",
    "what does PCL-5 score mean",
    "PCL-5 threshold",
    "PTSD screening results",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "What is a \u201Cgood\u201D score on the PCL-5?",
    answer:
      "Lower scores indicate fewer PTSD symptoms. A score below 31\u201333 is below the standard clinical threshold. But there\u2019s no score that means you\u2019re \u201Cfine\u201D if you\u2019re struggling \u2014 the number is a data point, not a complete picture of your wellbeing.",
  },
  {
    question: "Can PTSD develop years after a traumatic event?",
    answer:
      "Yes. Delayed-onset PTSD \u2014 where full symptom criteria are not met until at least six months after the trauma \u2014 occurs in a meaningful minority of cases (Andrews et al., 2007). A recent high score doesn\u2019t require a recent trauma.",
  },
  {
    question: "Can the PCL-5 be used to track treatment progress?",
    answer:
      "Yes \u2014 this is one of its primary clinical uses. A reduction of 10\u201320 points is generally considered a clinically meaningful improvement (Weathers et al., 2013). Many trauma therapists administer it monthly to track symptom changes during treatment.",
  },
  {
    question: "Is PTSD only caused by combat or extreme violence?",
    answer:
      "No. PTSD can result from any event experienced as life-threatening or severely distressing \u2014 including accidents, medical emergencies, natural disasters, sexual assault, childhood abuse, sudden loss, or witnessing harm to others. The subjective experience of threat matters as much as the event\u2019s \u201Cobjective\u201D severity.",
  },
];

export default function WhatDoesPCL5ScoreMeanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "What Does Your PCL-5 Score Mean?", description: "PCL-5 scores range from 0\u201380. Learn what each score threshold means, how PTSD severity is classified, and what to do after getting your results.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "What Does Your PCL-5 Score Mean?", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What Does Your PCL-5 Score Mean?
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            PCL-5 scores range from 0 to 80. A score of 31 to 33 or higher is the widely used threshold that suggests PTSD symptoms warrant further clinical evaluation. Scores are also analyzed by symptom cluster &mdash; reexperiencing, avoidance, negative cognitions and mood, and hyperarousal &mdash; each of which maps to the DSM-5 diagnostic criteria for PTSD.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Important notice */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <strong className="text-amber-800 dark:text-amber-400">Important:</strong> The PCL-5 is an educational screening tool only. It cannot diagnose PTSD or any other condition. A formal diagnosis requires a comprehensive clinical evaluation by a qualified mental health professional.
            </p>
          </div>

          {/* Section 1: What Is the PCL-5 */}
          <section>
            <h2>What Is the PCL-5?</h2>
            <p>
              The <strong>PTSD Checklist for DSM-5 (PCL-5)</strong> is a 20-item self-report screening tool developed by the National Center for PTSD at the US Department of Veterans Affairs. It was updated from the earlier PCL to align with the DSM-5 revision of PTSD criteria in 2013.
            </p>
            <p>
              Each of the 20 items describes a PTSD symptom. Respondents rate how much they have been bothered by that symptom over the past month on a scale of 0&ndash;4:
            </p>
            <ul>
              <li><strong>0</strong> = Not at all</li>
              <li><strong>1</strong> = A little bit</li>
              <li><strong>2</strong> = Moderately</li>
              <li><strong>3</strong> = Quite a bit</li>
              <li><strong>4</strong> = Extremely</li>
            </ul>
            <p>
              Total scores range from <strong>0 to 80</strong>.
            </p>
            <p>
              The PCL-5 has demonstrated strong psychometric properties in both veteran and civilian samples, with sensitivity of 0.78 and specificity of 0.87 at a cutoff of 33 in primary care settings (Blevins et al., 2015).
            </p>
          </section>

          {/* Section 2: Score Thresholds */}
          <section>
            <h2>PCL-5 Score Thresholds</h2>
            <div className="not-prose my-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Score</th>
                    <th className="text-left py-2 font-semibold text-neutral-700 dark:text-neutral-200">What It Suggests</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">0&ndash;30</td><td className="py-2">Below common clinical threshold; symptoms present but below screening cutoff</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">31&ndash;33+</td><td className="py-2">Suggests PTSD symptoms warrant further clinical evaluation</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">33+ (civilian)</td><td className="py-2">Most commonly used cutoff in research and clinical practice</td></tr>
                  <tr><td className="py-2 pr-4">38+ (veteran)</td><td className="py-2">Sometimes used in VA clinical settings</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              The &ldquo;right&rdquo; cutoff varies by setting and population. The National Center for PTSD recommends using a range of 31&ndash;33 as a provisional threshold and notes that the cutoff should be adjusted based on clinical context (Weathers et al., 2013).
            </p>
          </section>

          {/* Section 3: Symptom Clusters */}
          <section>
            <h2>What Do the Four PCL-5 Symptom Clusters Mean?</h2>
            <p>
              The PCL-5 is organized into four clusters that mirror the DSM-5 PTSD diagnostic criteria. Looking at your scores by cluster &mdash; not just your total &mdash; gives a more detailed picture.
            </p>

            <h3>Cluster B: Reexperiencing (Items 1&ndash;5)</h3>
            <p>
              Intrusive memories, nightmares, flashbacks, emotional distress when reminded of the trauma, and physical reactions to reminders. This cluster captures the involuntary re-living aspect of PTSD.
            </p>

            <h3>Cluster C: Avoidance (Items 6&ndash;7)</h3>
            <p>
              Avoiding trauma-related thoughts, feelings, and external reminders (places, people, conversations, activities). Avoidance is often how PTSD maintains itself over time &mdash; the less a person confronts trauma-related material, the more distressing it remains.
            </p>

            <h3>Cluster D: Negative Cognitions and Mood (Items 8&ndash;14)</h3>
            <p>
              Persistent negative beliefs about oneself or the world, distorted blame, persistent negative emotions, feeling detached, loss of interest in activities, and inability to experience positive emotions. This cluster was significantly expanded in DSM-5 compared to DSM-IV.
            </p>

            <h3>Cluster E: Hyperarousal and Reactivity (Items 15&ndash;20)</h3>
            <p>
              Irritability or angry outbursts, reckless behavior, hypervigilance, exaggerated startle response, concentration difficulties, and sleep disturbance. This cluster reflects the nervous system remaining in a state of threat readiness.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 4: Below Threshold */}
          <section>
            <h2>What Does a Score Below 33 Mean?</h2>
            <p>
              A score below the screening threshold does not mean you weren&apos;t affected by a traumatic event, or that your experiences aren&apos;t real and significant. It means that the specific symptom pattern the PCL-5 measures hasn&apos;t reached the frequency and intensity that typically indicates a PTSD diagnosis.
            </p>
            <p>
              Trauma responses exist on a spectrum. Acute stress reactions, adjustment difficulties, and subsyndromal PTSD are all real and can be distressing even when they don&apos;t meet the full PTSD threshold. If you experienced something traumatic and are struggling &mdash; regardless of your score &mdash; that&apos;s reason enough to speak with a mental health professional.
            </p>
          </section>

          {/* Section 5: Above Threshold */}
          <section>
            <h2>What Does a Score of 33 or Higher Mean?</h2>
            <p>
              A score at or above the screening threshold suggests your symptom pattern is consistent with what clinicians typically see in PTSD. This does not confirm a diagnosis &mdash; it signals that a comprehensive clinical evaluation is warranted.
            </p>
            <p>
              PTSD is diagnosed through a structured clinical interview that assesses not just symptom presence but also: whether the symptoms are linked to a qualifying traumatic event, the duration of symptoms, functional impairment, and whether another condition better explains the presentation.
            </p>
            <p>
              If you scored at or above the threshold, please reach out to a mental health professional &mdash; ideally one with trauma training. Effective treatments exist, and PTSD responds well to evidence-based care.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 6: Treatment */}
          <section>
            <h2>How Is PTSD Treated?</h2>
            <p>
              PTSD is one of the most thoroughly researched mental health conditions in terms of treatment. The following are considered first-line, evidence-based treatments by the American Psychological Association and the VA/DoD Clinical Practice Guidelines:
            </p>
            <p>
              <strong>Prolonged Exposure (PE):</strong> Gradually confronting trauma-related memories and situations to reduce avoidance and distress. Meta-analyses show large effect sizes (Foa et al., 2013).
            </p>
            <p>
              <strong>Cognitive Processing Therapy (CPT):</strong> Examines and challenges distorted beliefs related to the trauma. Extensive evidence base in both veteran and civilian populations.
            </p>
            <p>
              <strong>EMDR (Eye Movement Desensitization and Reprocessing):</strong> Uses bilateral stimulation while processing traumatic memories. WHO-recommended treatment with strong evidence.
            </p>
            <p>
              <strong>Medication:</strong> SSRIs (sertraline, paroxetine) are FDA-approved for PTSD. Often used alongside psychotherapy.
            </p>
            <p>
              These treatments work. The majority of people who complete evidence-based PTSD treatment show significant symptom reduction (Watts et al., 2013). Recovery is possible.
            </p>
          </section>

          {/* Section 7: PCL-5 vs PC-PTSD-5 */}
          <section>
            <h2>The PCL-5 and the PC-PTSD-5</h2>
            <p>
              The PCL-5 is a comprehensive 20-item screen used for detailed symptom assessment. The <Link href="/pc-ptsd-5-screening" className="text-sage-600 dark:text-sage-400 underline">PC-PTSD-5</Link> is a 5-item brief screen used as a first-step gateway &mdash; if you score 3 or higher on the PC-PTSD-5, the full PCL-5 is the recommended follow-up.
            </p>
            <p>
              If you took the PC-PTSD-5 and were directed here, your PCL-5 score gives you and any clinician you speak with a much richer picture of which symptom clusters are most prominent.
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
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Screen for PTSD symptoms</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, and your answers never leave your browser.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/pcl-5-ptsd-screening" className="btn-primary text-sm">Take the PCL-5 PTSD Screen</Link>
              <Link href="/pc-ptsd-5-screening" className="btn-primary text-sm">Take the PC-PTSD-5 (Quick Screen)</Link>
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
              <Link href="/pcl-5-ptsd-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PCL-5 PTSD Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Comprehensive 20-item PTSD symptom checklist</p>
              </Link>
              <Link href="/pc-ptsd-5-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PC-PTSD-5 Quick Screen</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">5-question PTSD gateway screening</p>
              </Link>
              <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Self-Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Depression commonly co-occurs with PTSD</p>
              </Link>
              <Link href="/ace-questionnaire" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">ACE Questionnaire</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Adverse childhood experiences assessment</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/ptsd-screening-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PTSD Screening: When and Why to Get Tested</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">When to screen and what treatment options exist</p>
              </Link>
              <Link href="/blog/ace-score-meaning" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">ACE Scores: What Your Childhood Experiences Mean</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">How adverse childhood experiences affect health</p>
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
