import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/what-does-oci-r-score-mean`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "what-does-oci-r-score-mean")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/what-does-oci-r-score-mean",
  title: "What Does Your OCI-R Score Mean?",
  description:
    "OCI-R scores range from 0\u201372 across six subscales. Learn what the total score and subscale scores mean, what the clinical cutoff is, and what to do with your results.",
  keywords: [
    "OCI-R score meaning",
    "OCI-R results interpretation",
    "obsessive compulsive inventory revised score",
    "OCI-R cutoff score",
    "OCD screening score",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Is having intrusive thoughts the same as having OCD?",
    answer:
      "No. Intrusive thoughts \u2014 unwanted, often disturbing thoughts about harm, sexuality, or taboo subjects \u2014 are a universal human experience. Research shows approximately 94% of people report them (Rachman & de Silva, 1978). What distinguishes OCD is the distress these thoughts cause and the compulsive behaviors or mental rituals used to neutralize them.",
  },
  {
    question: "Can OCD develop in adulthood?",
    answer:
      "Yes, though OCD often begins in childhood or adolescence \u2014 median onset is around age 19 (Kessler et al., 2005). New onset in adulthood does occur and can sometimes be triggered by significant life stress, medical events, or the postpartum period. PANS/PANDAS is a distinct phenomenon involving sudden OCD onset in children following infection.",
  },
  {
    question: "Is the OCI-R the right screening tool for \u201cpure O\u201d OCD?",
    answer:
      "\u201cPure O\u201d refers to OCD dominated by obsessions with less obvious behavioral compulsions, though nearly all involve covert mental rituals. The OCI-R Obsessing subscale is most relevant for this presentation. However, the OCI-R may underdetect pure-O OCD because mental rituals are less visible in self-report. The DOCS may be more sensitive for pure-O presentations.",
  },
  {
    question: "My OCI-R score is below 21 but I still feel like something is wrong. Should I seek help?",
    answer:
      "Yes \u2014 if your symptoms are distressing or interfering with your life, they are worth discussing with a professional regardless of the score. The 21-point cutoff is a statistical threshold based on group averages, not a bright line that determines whether you deserve support. If OCD-related symptoms are affecting your life, please reach out.",
  },
];

export default function WhatDoesOciRScoreMeanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "What Does Your OCI-R Score Mean?", description: "OCI-R scores range from 0\u201372 across six subscales. Learn what the total score and subscale scores mean and what to do with your results.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "What Does Your OCI-R Score Mean?", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What Does Your OCI-R Score Mean?
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            The OCI-R total score ranges from 0 to 72. A score of <strong>21 or higher</strong> is the validated clinical cutoff that distinguishes OCD from other anxiety disorders with reasonable accuracy. Below 21, OCD-related symptoms are present but at a level consistent with the general population. Scores of 40 or above indicate severe symptom burden. The OCI-R also produces six subscale scores that identify which OCD symptom dimensions are most prominent.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Section 1 */}
          <section>
            <h2>What is the OCI-R?</h2>
            <p>
              The <strong>Obsessive Compulsive Inventory &mdash; Revised (OCI-R)</strong> is an 18-item self-report scale developed by Dr. Edna Foa and colleagues (2002) as a brief, validated screen for OCD symptoms. It is the most widely used OCD screening measure in both clinical and research settings.
            </p>
            <p>
              Each of the 18 items is rated on a 5-point scale from 0 (Not at all) to 4 (Extremely), based on how much distress each symptom has caused in the past month. Items are grouped into six subscales of three items each.
            </p>
            <p>
              The OCI-R has strong psychometric properties: in Foa et al. (2002), a total score cutoff of 21 showed 76% sensitivity and 61% specificity for distinguishing OCD from other anxiety disorders. Later research by Abramowitz and Deacon (2006) confirmed the 21-point cutoff in larger samples.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2>OCI-R total score: what the numbers mean</h2>
            <div className="not-prose my-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Total Score</th>
                    <th className="text-left py-2 font-semibold text-neutral-700 dark:text-neutral-200">Clinical Interpretation</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">0&ndash;6</td><td className="py-2">Minimal &mdash; below general population average</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">7&ndash;20</td><td className="py-2">Low to moderate &mdash; subclinical symptom range</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">21&ndash;39</td><td className="py-2">Clinical concern &mdash; consistent with OCD symptom levels</td></tr>
                  <tr><td className="py-2 pr-4">40&ndash;72</td><td className="py-2">Severe &mdash; high symptom burden, prompt evaluation recommended</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              <strong>Below 21:</strong> Your total score falls within or below the range typical of the general population. OCD-level symptom intensity is not indicated, though individual subscale scores may still point to areas worth monitoring.
            </p>
            <p>
              <strong>21&ndash;39:</strong> Your score crosses the validated clinical cutoff. This is the range where OCD is consistently distinguished from other anxiety presentations in research samples. Professional evaluation by a clinician experienced in OCD assessment is recommended.
            </p>
            <p>
              <strong>40+:</strong> A high symptom burden across multiple OCD dimensions. This range is associated with significant functional impairment. Please prioritize connecting with a mental health professional &mdash; ideally one trained in Exposure and Response Prevention (ERP), the first-line treatment for OCD.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2>The six OCI-R subscales</h2>
            <div className="not-prose my-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Subscale</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">What It Measures</th>
                    <th className="text-left py-2 font-semibold text-neutral-700 dark:text-neutral-200">Score Range</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4 font-medium">Washing</td><td className="py-2 pr-4">Contamination fears; excessive hand-washing or cleaning</td><td className="py-2">0&ndash;12</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4 font-medium">Obsessing</td><td className="py-2 pr-4">Intrusive, unwanted thoughts that cause distress</td><td className="py-2">0&ndash;12</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4 font-medium">Hoarding</td><td className="py-2 pr-4">Difficulty discarding items; distress around throwing things away</td><td className="py-2">0&ndash;12</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4 font-medium">Ordering</td><td className="py-2 pr-4">Need for things to be arranged perfectly or symmetrically</td><td className="py-2">0&ndash;12</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4 font-medium">Checking</td><td className="py-2 pr-4">Repeated checking of locks, appliances, or actions</td><td className="py-2">0&ndash;12</td></tr>
                  <tr><td className="py-2 pr-4 font-medium">Neutralizing</td><td className="py-2 pr-4">Mental rituals; counting, praying, or replacing bad thoughts with good ones</td><td className="py-2">0&ndash;12</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              A subscale score of <strong>6 or above</strong> on any individual subscale is generally considered elevated in clinical contexts, though interpretation should account for the total score and overall clinical picture.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 4 */}
          <section>
            <h2>Understanding the OCD symptom dimensions</h2>
            <p>
              OCD doesn&apos;t look the same in everyone. The six OCI-R subscales correspond to what researchers call OCD &quot;symptom dimensions&quot; &mdash; distinct but often overlapping clusters that shape how OCD presents:
            </p>
            <p>
              <strong>Washing/Contamination:</strong> Fear of dirt, germs, chemicals, or becoming contaminated. Compulsions include excessive handwashing, avoiding public surfaces, or repeatedly cleaning household areas. This is the most publicly recognized OCD presentation, but it&apos;s only one of many.
            </p>
            <p>
              <strong>Obsessing:</strong> Intrusive thoughts that feel unacceptable or ego-dystonic &mdash; thoughts about harm, sexuality, religion, or other distressing content that the person finds repugnant but can&apos;t stop. It is important to understand that having intrusive thoughts does not mean you want to act on them &mdash; this is a core feature of OCD and a source of tremendous shame and confusion for many people.
            </p>
            <p>
              <strong>Hoarding:</strong> Difficulty discarding items due to fears of losing something important, or distress about waste. Note that hoarding disorder is now recognized as a distinct condition from OCD in the DSM-5, though it remains in the OCI-R as a dimension.
            </p>
            <p>
              <strong>Ordering/Symmetry:</strong> An intense need for objects to be arranged symmetrically, &quot;just right,&quot; or in a particular order. Often accompanied by a sense that something bad will happen if things aren&apos;t arranged correctly.
            </p>
            <p>
              <strong>Checking:</strong> Repeated checking of doors, locks, appliances, and sometimes actions (like re-reading emails repeatedly). Driven by doubt (&quot;Did I really lock it?&quot;) and fear of harm resulting from negligence.
            </p>
            <p>
              <strong>Neutralizing:</strong> Using mental rituals &mdash; counting, repeating words, praying, or substituting &quot;bad&quot; thoughts with &quot;good&quot; ones &mdash; to reduce anxiety or prevent feared outcomes.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2>OCI-R vs. a clinical OCD assessment: what&apos;s different</h2>
            <p>
              A high OCI-R score is a meaningful signal &mdash; but OCD assessment requires clinical evaluation because the OCI-R captures symptom presence and distress without assessing:
            </p>
            <ul>
              <li><strong>Insight:</strong> Does the person recognize that obsessions and compulsions are excessive? (Varies significantly in OCD)</li>
              <li><strong>Time consumed:</strong> DSM-5 criteria include obsessions and compulsions taking more than 1 hour per day</li>
              <li><strong>Functional impairment:</strong> The degree to which symptoms disrupt work, relationships, and daily activities</li>
              <li><strong>Rule-outs:</strong> Whether symptoms are better explained by another condition &mdash; major depression (with rumination), PTSD (intrusive trauma memories), or eating disorders</li>
            </ul>
            <p>
              An experienced OCD clinician &mdash; ideally one trained in the Yale-Brown Obsessive Compulsive Scale (Y-BOCS), the gold standard for clinical OCD assessment &mdash; will assess all of these dimensions.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 6 */}
          <section>
            <h2>OCD and co-occurring conditions</h2>
            <p>
              OCD frequently co-occurs with other conditions, and the relationship is bidirectional:
            </p>
            <ul>
              <li><strong>Major depression</strong> co-occurs in approximately 60% of OCD cases &mdash; often as a consequence of the exhaustion and demoralization caused by chronic OCD symptoms</li>
              <li><strong>Anxiety disorders</strong> &mdash; generalized anxiety, social anxiety, and panic disorder commonly overlap</li>
              <li><strong>ADHD</strong> &mdash; particularly relevant because intrusive thoughts, difficulty focusing, and distractibility appear in both conditions</li>
              <li><strong>Body Dysmorphic Disorder (BDD)</strong> &mdash; preoccupation with perceived physical flaws; related to OCD and often co-occurring</li>
              <li><strong>Tics and Tourette Syndrome</strong> &mdash; associated in a meaningful subset of OCD presentations</li>
            </ul>
            <p>
              If depression or anxiety symptoms are also present, the <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9</Link> and <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7</Link> can help map those dimensions alongside your OCI-R results to bring a comprehensive picture to a clinical appointment.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2>How OCD is treated</h2>
            <p>
              OCD is one of the most treatment-responsive conditions in psychiatry when the right approach is applied.
            </p>
            <h3>Exposure and Response Prevention (ERP)</h3>
            <p>
              The gold-standard psychotherapy for OCD. ERP involves systematically confronting feared situations or triggers (exposure) while refraining from engaging in compulsions (response prevention). This breaks the obsession-compulsion cycle and allows anxiety to naturally habituate. Large meta-analytic effect sizes (Rosa-Alc&aacute;zar et al., 2008). ERP is substantially more effective for OCD than general CBT without the exposure component.
            </p>
            <h3>Inference-Based CBT (I-CBT)</h3>
            <p>
              A newer approach targeting the distorted reasoning styles that fuel obsessional doubt. Growing evidence base, particularly for pure-O presentations.
            </p>
            <h3>Medication (SSRIs)</h3>
            <p>
              Higher doses than typically used for depression are often required. Fluvoxamine, fluoxetine, sertraline, and paroxetine all have evidence for OCD. Clomipramine (a TCA) has the longest evidence base but a more challenging side effect profile.
            </p>
            <p>
              <strong>Important:</strong> General anxiety management techniques and standard relaxation strategies are often <strong>contraindicated</strong> for OCD &mdash; they can function as compulsions that maintain the OCD cycle. The counterintuitive truth about OCD treatment is that effective approaches involve tolerating discomfort, not reducing it in the moment.
            </p>
            <p>
              Finding a therapist trained specifically in ERP is essential. The International OCD Foundation maintains a therapist directory at iocdf.org.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              The OCI-R is an educational screening tool only. It cannot diagnose OCD or any other condition. Diagnosis requires a comprehensive clinical evaluation by a qualified mental health professional experienced in OCD assessment. Nothing here should be interpreted as a diagnosis or treatment recommendation.
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
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Want to understand your OCD symptoms?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">The OCI-R takes under 5 minutes. Free, private, and your answers never leave your browser.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/oci-r-ocd-screening" className="btn-primary text-sm">Take the OCI-R OCD Screening</Link>
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
              <Link href="/oci-r-ocd-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">OCI-R OCD Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">18-item validated OCD symptom screening</p>
              </Link>
              <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Self-Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Clinically validated depression symptom screening</p>
              </Link>
              <Link href="/gad-7-anxiety-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Anxiety Self-Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Clinically validated anxiety symptom screening</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/what-ocd-looks-like" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">OCD Myths vs Reality: What OCD Really Looks Like</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">What OCD actually looks like beyond the stereotypes</p>
              </Link>
              <Link href="/blog/what-does-phq-9-score-mean" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">What Does Your PHQ-9 Score Mean?</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understanding depression screening score ranges</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
