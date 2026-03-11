import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/what-does-pc-ptsd-5-score-mean`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "what-does-pc-ptsd-5-score-mean")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/what-does-pc-ptsd-5-score-mean",
  title: "What Does Your PC-PTSD-5 Score Mean?",
  description:
    "PC-PTSD-5 scores range from 0\u20135. A score of 3 or higher is a positive screen for PTSD. Learn what your result means and when to follow up with the full PCL-5.",
  keywords: [
    "PC-PTSD-5 score meaning",
    "PC-PTSD-5 results",
    "primary care PTSD screen interpretation",
    "PC-PTSD-5 cutoff score",
    "PTSD screening positive",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Can I have PTSD if I didn\u2019t experience combat or a major disaster?",
    answer:
      "Yes. PTSD can develop after any traumatic experience \u2014 sexual assault, childhood abuse, motor vehicle accidents, medical emergencies, domestic violence, sudden loss, or witnessing harm to others. Combat is one cause among many. The most common causes of PTSD in the general population are sexual assault and childhood trauma.",
  },
  {
    question: "I screened positive but it\u2019s been years since the trauma. Can PTSD really last that long?",
    answer:
      "Yes. Without effective treatment, PTSD can persist for decades. The avoidance that is a core PTSD symptom also prevents natural resolution \u2014 by avoiding reminders, the nervous system never learns the trauma is over. Long-standing, chronic PTSD responds well to evidence-based treatment even after many years.",
  },
  {
    question: "What is EMDR and why is it recommended for PTSD?",
    answer:
      "EMDR (Eye Movement Desensitization and Reprocessing) is a structured therapy that uses bilateral stimulation (typically guided eye movements) while the person focuses on a traumatic memory. The mechanism is not fully understood, but it appears to facilitate memory reprocessing in a way that reduces the distress and vividness associated with traumatic memories. It is WHO-recommended and has a strong evidence base, particularly for single-incident trauma.",
  },
];

export default function WhatDoesPcPtsd5ScoreMeanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "What Does Your PC-PTSD-5 Score Mean?", description: "PC-PTSD-5 scores range from 0\u20135. A score of 3 or higher is a positive screen. Learn what your result means and when to follow up with the full PCL-5.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "What Does Your PC-PTSD-5 Score Mean?", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">9 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What Does Your PC-PTSD-5 Score Mean?
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            PC-PTSD-5 scores range from 0 to 5. A score of <strong>3 or higher</strong> is the validated positive screen threshold &mdash; it indicates that PTSD-related symptoms are present at a level warranting further evaluation. A score of 0&ndash;2 suggests PTSD symptoms are below the clinical threshold. The PC-PTSD-5 is a brief five-item gateway screen, not a comprehensive assessment &mdash; a positive result is a starting point for further evaluation, not a diagnosis.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Section 1 */}
          <section>
            <h2>What is the PC-PTSD-5?</h2>
            <p>
              The <strong>Primary Care PTSD Screen for DSM-5 (PC-PTSD-5)</strong> was developed by Drs. Prins, Bovin, and colleagues (2016) as an ultra-brief first-step screening tool for PTSD in primary care and other non-specialty settings. It was designed to be quick enough to administer routinely &mdash; the entire screen takes about 60 seconds.
            </p>
            <p>
              The PC-PTSD-5 begins with a brief trauma exposure question: <em>&quot;Sometimes things happen to people that are unusually or especially frightening, horrible, or upsetting.&quot;</em> If the person endorses any such experience, five yes/no symptom questions follow &mdash; one each for the five core PTSD symptom areas (nightmare/intrusion, avoidance, hypervigilance, emotional numbing, and dissociation/guilt).
            </p>
            <p>
              Each &quot;yes&quot; scores 1 point. Total score ranges from 0&ndash;5.
            </p>
            <p>
              The PC-PTSD-5 is the standard PTSD screen used by the US Department of Veterans Affairs (VA), the Department of Defense (DoD), and increasingly in civilian primary care settings. It was updated from the original 4-item PC-PTSD to align with DSM-5 criteria.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2>PC-PTSD-5 score interpretation</h2>
            <div className="not-prose my-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Score</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Interpretation</th>
                    <th className="text-left py-2 font-semibold text-neutral-700 dark:text-neutral-200">Recommended Next Step</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">0&ndash;1</td><td className="py-2 pr-4">Below clinical threshold</td><td className="py-2">No action indicated unless clinical concern</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">2</td><td className="py-2 pr-4">Borderline &mdash; monitor</td><td className="py-2">Consider full PCL-5 if symptoms are distressing</td></tr>
                  <tr><td className="py-2 pr-4">3&ndash;5</td><td className="py-2 pr-4">Positive screen</td><td className="py-2">Full PCL-5 and/or clinical evaluation recommended</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              At the validated cutoff of 3, the PC-PTSD-5 demonstrates:
            </p>
            <ul>
              <li><strong>Sensitivity:</strong> 85% &mdash; correctly identifies 85% of people who meet PTSD criteria</li>
              <li><strong>Specificity:</strong> 74% &mdash; correctly rules out 74% of people who don&apos;t meet PTSD criteria</li>
              <li><strong>AUC:</strong> 0.90 &mdash; excellent overall discriminative ability (Prins et al., 2016)</li>
            </ul>
            <p>
              A score of 2 sits in a borderline zone. If you scored 2 and find that trauma-related symptoms are affecting your daily life, proceeding to the full PCL-5 or seeking a clinical evaluation is reasonable.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2>What each question covers</h2>
            <p>Understanding what the five items capture helps contextualize your score:</p>
            <p>
              <strong>Item 1 &mdash; Nightmares/Intrusions:</strong> Covers re-experiencing the traumatic event through nightmares or intrusive memories. This maps to the intrusion symptom cluster &mdash; the hallmark re-experiencing that distinguishes PTSD from general anxiety or depression.
            </p>
            <p>
              <strong>Item 2 &mdash; Avoidance:</strong> Covers active avoidance of situations, people, or thoughts that remind you of the trauma. Avoidance is both a core symptom and the primary mechanism that maintains PTSD over time &mdash; it prevents the trauma memory from being processed and extinguished.
            </p>
            <p>
              <strong>Item 3 &mdash; Hypervigilance/Startle:</strong> Covers being on guard, easily startled, or feeling watchful for danger even in safe situations. This is the nervous system&apos;s threat-detection system stuck in the &quot;on&quot; position &mdash; a physiological response to surviving a dangerous experience.
            </p>
            <p>
              <strong>Item 4 &mdash; Emotional Numbing:</strong> Covers feeling emotionally numb, detached from others, or unable to have positive feelings. This sits in the negative alterations in mood and cognition cluster &mdash; the emotional dampening that often accompanies PTSD and is frequently mistaken for depression alone.
            </p>
            <p>
              <strong>Item 5 &mdash; Guilt/Dissociation:</strong> Covers blaming yourself or others for the traumatic event, or feeling detached from reality. Self-blame is an extremely common PTSD symptom &mdash; the mind&apos;s effort to create a sense of control (&quot;if it was my fault, I can prevent it next time&quot;) in the aftermath of an uncontrollable event.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 4 */}
          <section>
            <h2>PC-PTSD-5 vs. PCL-5: which should you use?</h2>
            <p>These tools serve different purposes in the PTSD screening pathway:</p>
            <div className="not-prose my-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Tool</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Items</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Time</th>
                    <th className="text-left py-2 font-semibold text-neutral-700 dark:text-neutral-200">Purpose</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4 font-medium">PC-PTSD-5</td><td className="py-2 pr-4">5</td><td className="py-2 pr-4">~1 minute</td><td className="py-2">First-step gateway screen</td></tr>
                  <tr><td className="py-2 pr-4 font-medium">PCL-5</td><td className="py-2 pr-4">20</td><td className="py-2 pr-4">~5 minutes</td><td className="py-2">Comprehensive symptom severity assessment</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              The PC-PTSD-5 is designed to cast a wide net quickly &mdash; to flag people who may have PTSD so they can be directed toward more comprehensive evaluation. It trades some specificity for brevity.
            </p>
            <p>
              The <Link href="/pcl-5-ptsd-screening" className="text-sage-600 dark:text-sage-400 underline">PCL-5</Link> covers all 20 DSM-5 PTSD criteria in detail, produces a total severity score (0&ndash;80), and is better suited for tracking symptom change over time and treatment.
            </p>
            <p>
              <strong>If you screened positive on the PC-PTSD-5:</strong> Taking the full PCL-5 gives a much more detailed picture of which symptom clusters are most prominent. This information is valuable to bring to a clinical evaluation.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2>What a positive screen means (and doesn&apos;t mean)</h2>
            <p>
              A score of 3 or higher means your symptom pattern is consistent with what clinicians see in PTSD presentations, and that a more comprehensive evaluation is warranted.
            </p>
            <p>It does <strong>not</strong> mean:</p>
            <ul>
              <li>You definitely have PTSD &mdash; diagnosis requires full clinical evaluation</li>
              <li>Your symptoms won&apos;t improve &mdash; PTSD is highly treatable</li>
              <li>Something is permanently wrong with you &mdash; PTSD is a normal nervous system response to abnormal experiences</li>
            </ul>
            <p>It <strong>does</strong> mean:</p>
            <ul>
              <li>Your symptoms are above a validated clinical threshold</li>
              <li>A mental health professional experienced in trauma can help clarify the picture</li>
              <li>Evidence-based treatments &mdash; Prolonged Exposure, CPT, EMDR &mdash; are available and effective</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 6 */}
          <section>
            <h2>When trauma history is present but the score is low</h2>
            <p>
              A score below 3 does not mean trauma hasn&apos;t affected you. The PC-PTSD-5 specifically screens for PTSD criteria &mdash; other trauma responses, including depression, anxiety, substance use, somatic symptoms, and relationship difficulties, can be significant even when PTSD criteria aren&apos;t met.
            </p>
            <p>
              If you have a significant trauma history and are struggling &mdash; even with a low PC-PTSD-5 score &mdash; a trauma-informed clinician can help assess the full picture. Consider also:
            </p>
            <ul>
              <li><Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9 Depression Self-Check</Link> &mdash; depression is common in the aftermath of trauma</li>
              <li><Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7 Anxiety Screening</Link> &mdash; anxiety frequently co-occurs with trauma exposure</li>
              <li><Link href="/ace-questionnaire" className="text-sage-600 dark:text-sage-400 underline">ACE Questionnaire</Link> &mdash; if adverse childhood experiences are part of your history</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2>Next steps after a positive screen</h2>
            <ol>
              <li><strong>Take the full PCL-5</strong> &mdash; the <Link href="/pcl-5-ptsd-screening" className="text-sage-600 dark:text-sage-400 underline">PCL-5 PTSD Screening</Link> provides a more detailed symptom picture</li>
              <li><strong>Talk to your primary care physician</strong> &mdash; share your score; many PCPs now have trauma-informed referral pathways</li>
              <li><strong>Seek a trauma-informed mental health clinician</strong> &mdash; ideally one trained in Prolonged Exposure (PE), Cognitive Processing Therapy (CPT), or EMDR</li>
              <li><strong>Don&apos;t white-knuckle it alone</strong> &mdash; PTSD symptoms tend to worsen with avoidance and improve with appropriate treatment</li>
            </ol>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              The PC-PTSD-5 is an educational screening tool only. It cannot diagnose PTSD or any other condition. A positive screen indicates that a comprehensive evaluation by a qualified mental health professional is recommended.
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
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Want a more detailed PTSD symptom picture?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">The PCL-5 takes about 5 minutes. Free, private, and your answers never leave your browser.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/pcl-5-ptsd-screening" className="btn-primary text-sm">Take the PCL-5 PTSD Screening</Link>
              <Link href="/pc-ptsd-5-screening" className="btn-primary text-sm">Retake the PC-PTSD-5</Link>
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
              <Link href="/pc-ptsd-5-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PC-PTSD-5 Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Brief 5-item PTSD gateway screen</p>
              </Link>
              <Link href="/pcl-5-ptsd-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PCL-5 PTSD Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Comprehensive 20-item PTSD severity assessment</p>
              </Link>
              <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Self-Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Clinically validated depression symptom screening</p>
              </Link>
              <Link href="/ace-questionnaire" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">ACE Questionnaire</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Adverse Childhood Experiences screening</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/what-does-pcl-5-score-mean" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">What Does Your PCL-5 Score Mean?</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understanding PTSD severity scores and thresholds</p>
              </Link>
              <Link href="/blog/ptsd-screening-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PTSD Screening: When and Why to Get Tested</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">When to get screened and what treatment options are available</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
