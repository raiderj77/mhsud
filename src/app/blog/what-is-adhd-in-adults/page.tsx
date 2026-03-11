import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/what-is-adhd-in-adults`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "what-is-adhd-in-adults")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/what-is-adhd-in-adults",
  title: "What Is ADHD in Adults? Symptoms, Diagnosis, and Treatment",
  description:
    "ADHD in adults often looks nothing like childhood ADHD. Learn the real symptoms of adult ADHD, why it\u2019s so often missed, and what effective treatment looks like.",
  keywords: [
    "adult ADHD symptoms",
    "what is ADHD in adults",
    "ADHD diagnosis adults",
    "ADHD treatment adults",
    "signs of ADHD in adults",
    "undiagnosed ADHD",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Can adults be diagnosed with ADHD for the first time?",
    answer:
      "Yes. A significant proportion of adults with ADHD were never diagnosed as children \u2014 particularly women, people who performed well academically, and those whose ADHD was predominantly inattentive rather than hyperactive. A new diagnosis in adulthood is entirely valid. The DSM-5 requires evidence of symptoms before age 12, but that information can come from self-report, family recollection, or old records rather than a formal childhood diagnosis.",
  },
  {
    question: "Does ADHD medication make you a different person?",
    answer:
      "A common fear and misconception. People with ADHD who respond well to medication typically describe feeling more like themselves \u2014 able to access their own capabilities more consistently \u2014 rather than feeling sedated, blunted, or different. The goal is not to change personality but to reduce the friction that ADHD creates between intention and execution.",
  },
  {
    question: "Is ADHD overdiagnosed?",
    answer:
      "ADHD is both overdiagnosed (in some settings without comprehensive evaluation, particularly in young boys) and underdiagnosed (particularly in girls, women, and adults who developed compensatory strategies). The solution to overdiagnosis is better, more comprehensive evaluation \u2014 not dismissing ADHD as a diagnosis. Underdiagnosis carries its own substantial costs in occupational failure, relationship difficulty, and co-occurring mental health conditions.",
  },
  {
    question: "Can you have ADHD without being hyperactive?",
    answer:
      "Yes. The predominantly inattentive presentation (sometimes still informally called \u201cADD\u201d) involves the inattention, disorganization, and executive function difficulties of ADHD with little or no motor hyperactivity. This is a fully valid and impairing presentation that responds to the same treatments.",
  },
];

export default function WhatIsAdhdInAdultsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "What Is ADHD in Adults? Symptoms, Diagnosis, and Treatment", description: "ADHD in adults often looks nothing like childhood ADHD. Learn the real symptoms, why it\u2019s so often missed, and what effective treatment looks like.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "What Is ADHD in Adults?", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">12 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What Is ADHD in Adults? Symptoms, Diagnosis, and Treatment
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Attention-Deficit/Hyperactivity Disorder (ADHD) in adults is a neurodevelopmental condition characterized by persistent patterns of inattention, impulsivity, and &mdash; in some presentations &mdash; hyperactivity, causing significant impairment across multiple areas of life. Contrary to the common assumption that children &quot;grow out of it,&quot; approximately 60% of children with ADHD continue to meet diagnostic criteria in adulthood. An estimated 4.4% of US adults have ADHD (Kessler et al., 2006), with many more undiagnosed.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Section 1 */}
          <section>
            <h2>Why adult ADHD is so often missed</h2>
            <p>
              Adult ADHD is dramatically underdiagnosed &mdash; and the reasons are revealing:
            </p>
            <p>
              <strong>It doesn&apos;t look like childhood ADHD.</strong> The hyperactive child bouncing off walls is the cultural image. Adult ADHD rarely looks that way. Hyperactivity often &quot;internalizes&quot; in adulthood &mdash; it becomes restlessness, difficulty sitting through meetings, a constantly racing mind, or the inability to read without re-reading the same sentence three times.
            </p>
            <p>
              <strong>Compensation masks it.</strong> Many adults with ADHD develop elaborate workarounds &mdash; rigid routines, over-reliance on lists and calendars, choosing careers that fit their cognitive style. They manage well enough that neither they nor their clinicians look closer. The cracks often appear during major life transitions: a new job, a first child, university, or a promotion that removes structure.
            </p>
            <p>
              <strong>It co-occurs with depression and anxiety.</strong> The downstream consequences of ADHD &mdash; chronic underperformance, relationship friction, self-criticism &mdash; often produce clinical depression and anxiety. These presenting symptoms get treated, while the underlying ADHD is missed.
            </p>
            <p>
              <strong>The diagnostic bar has historically been set by boys.</strong> ADHD research was historically male-dominated. Girls and women with ADHD often present with predominantly inattentive profiles &mdash; daydreaming, disorganization, emotional dysregulation &mdash; which are less disruptive in classroom settings and more easily attributed to personality.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2>ADHD presentations: inattentive, hyperactive-impulsive, and combined</h2>
            <p>
              The DSM-5 recognizes three ADHD presentations based on symptom pattern:
            </p>

            <h3>Predominantly Inattentive Presentation (ADHD-PI)</h3>
            <p>This is the most common adult presentation and the most frequently missed. Symptoms include:</p>
            <ul>
              <li>Difficulty sustaining attention on tasks that require mental effort</li>
              <li>Frequently losing things (keys, phone, documents &mdash; daily)</li>
              <li>Easily distracted by external stimuli or unrelated thoughts</li>
              <li>Difficulty following through on tasks even when they begin well</li>
              <li>Appearing not to listen even when spoken to directly</li>
              <li>Avoidance of tasks requiring sustained mental effort (especially low-interest tasks)</li>
              <li>Forgetting daily obligations</li>
              <li>Making careless errors in detail-oriented work</li>
              <li>Difficulty organizing tasks and activities</li>
            </ul>

            <h3>Predominantly Hyperactive-Impulsive Presentation (ADHD-PH)</h3>
            <p>More common in children; often softens or shifts with age. Adult symptoms include:</p>
            <ul>
              <li>Fidgeting, inability to stay seated in sustained situations</li>
              <li>Feeling restless or &quot;on the go&quot; internally</li>
              <li>Talking excessively; difficulty waiting to speak</li>
              <li>Interrupting others frequently</li>
              <li>Difficulty waiting turns</li>
              <li>Acting on impulse before thinking through consequences</li>
              <li>Making large decisions quickly without adequate reflection</li>
            </ul>

            <h3>Combined Presentation (ADHD-C)</h3>
            <p>Both inattentive and hyperactive-impulsive symptoms present at clinically significant levels.</p>
          </section>

          {/* Section 3 */}
          <section>
            <h2>What adult ADHD actually feels like</h2>
            <p>
              Clinical criteria describe symptoms, but they don&apos;t capture the daily reality. People with adult ADHD often describe:
            </p>
            <ul>
              <li><strong>&quot;I can hyperfocus on interesting things for hours but can&apos;t do a boring task for ten minutes&quot;</strong> &mdash; interest-based attention, not effort-based</li>
              <li><strong>&quot;I know exactly what I need to do. I just can&apos;t make myself start&quot;</strong> &mdash; task initiation failure, sometimes called ADHD paralysis</li>
              <li><strong>&quot;I have a dozen tabs open in my brain at all times&quot;</strong> &mdash; cognitive overload and difficulty filtering relevant from irrelevant</li>
              <li><strong>&quot;I&apos;m always late, even when I care&quot;</strong> &mdash; time blindness, a poorly recognized but central feature of ADHD</li>
              <li><strong>&quot;I feel everything too intensely&quot;</strong> &mdash; emotional dysregulation, now recognized as a prominent adult ADHD feature</li>
              <li><strong>&quot;My house is a disaster zone and I can&apos;t explain why&quot;</strong> &mdash; executive function deficits affecting planning, sequencing, and initiation</li>
            </ul>
            <p>
              <strong>Time blindness</strong> deserves particular mention. ADHD is fundamentally a disorder of time &mdash; people with ADHD often experience time as binary (now and not now) rather than as a continuous spectrum. This explains chronic lateness, missed deadlines, and difficulty estimating how long tasks will take &mdash; behaviors that look like carelessness but are neurological in origin.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 4 */}
          <section>
            <h2>How ADHD is screened and diagnosed</h2>
            <h3>Screening tools</h3>
            <p>
              The <Link href="/asrs-adhd-screening" className="text-sage-600 dark:text-sage-400 underline">ASRS-v1.1</Link> (Adult ADHD Self-Report Scale) is the validated first-step screen developed with the WHO. Its 6-item screener (Part A) has been shown to identify 68% of adults with ADHD, with 99% of cases scoring positive in at least 4 of 6 items. This is where the screening process typically begins.
            </p>
            <h3>Clinical diagnosis</h3>
            <p>
              Diagnosis requires a comprehensive evaluation because many conditions mimic ADHD and because ADHD commonly co-occurs with conditions that need separate treatment. A thorough evaluation typically includes:
            </p>
            <ul>
              <li>Clinical interview covering current symptoms, history, and functioning across domains (work, relationships, self-care)</li>
              <li>Developmental history &mdash; symptoms must have been present before age 12 (DSM-5 criterion)</li>
              <li>Collateral information &mdash; input from a partner, family member, or old report cards</li>
              <li>Cognitive and neuropsychological testing in complex cases</li>
              <li>Rule-out evaluation for co-occurring conditions</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2>Adult ADHD and co-occurring conditions</h2>
            <p>
              Adult ADHD rarely travels alone. Co-occurrence rates are striking:
            </p>
            <div className="not-prose my-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Condition</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Est. Co-occurrence</th>
                    <th className="text-left py-2 font-semibold text-neutral-700 dark:text-neutral-200">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Major Depression</td><td className="py-2 pr-4">~50%</td><td className="py-2">Often secondary to ADHD&apos;s chronic toll</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Anxiety Disorders</td><td className="py-2 pr-4">~50%</td><td className="py-2">Both share common features that complicate diagnosis</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Substance Use Disorders</td><td className="py-2 pr-4">~15&ndash;25%</td><td className="py-2">Self-medication is a recognized pattern</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Sleep Disorders</td><td className="py-2 pr-4">~75%</td><td className="py-2">Particularly insomnia, delayed sleep phase</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Learning Disabilities</td><td className="py-2 pr-4">~50%</td><td className="py-2">Dyslexia is the most common</td></tr>
                  <tr><td className="py-2 pr-4">Bipolar Disorder</td><td className="py-2 pr-4">~20%</td><td className="py-2">Overlapping features; important to assess</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              The high co-occurrence with substance use is clinically important. Nicotine, cannabis, and stimulants are used for self-regulation by many undiagnosed adults with ADHD &mdash; temporarily providing the dopaminergic stimulation that ADHD brains struggle to generate endogenously.
            </p>
            <p>
              If depression or anxiety symptoms are prominent alongside potential ADHD symptoms, the <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9</Link> and <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7</Link> can map that picture before a clinical appointment.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 6 — Medication */}
          <section>
            <h2>Evidence-based treatment for adult ADHD</h2>

            <h3>Medication</h3>
            <p>
              Medication is the most effective single intervention for ADHD and produces the largest effect sizes of any psychiatric medication relative to disorder severity.
            </p>
            <p>
              <strong>Stimulants (first line):</strong>
            </p>
            <ul>
              <li><strong>Methylphenidate</strong> (Ritalin, Concerta) &mdash; well-studied, effective in approximately 70% of people with ADHD</li>
              <li><strong>Amphetamine-based</strong> (Adderall, Vyvanse) &mdash; similar efficacy; some individuals respond better to one class than the other</li>
            </ul>
            <p>
              Both classes work by increasing dopamine and norepinephrine availability in the prefrontal cortex &mdash; the brain region most implicated in executive function.
            </p>
            <p>
              <strong>Non-stimulants (when stimulants aren&apos;t appropriate):</strong>
            </p>
            <ul>
              <li>Atomoxetine (Strattera) &mdash; slower onset but 24-hour coverage; useful when stimulants are contraindicated or cause problematic side effects</li>
              <li>Bupropion &mdash; off-label but commonly used; helpful when ADHD co-occurs with depression</li>
              <li>Guanfacine and clonidine &mdash; alpha-2 agonists used particularly for emotional dysregulation and impulsivity</li>
            </ul>
            <p>
              <strong>A note on medication concerns:</strong> Stimulant medications for ADHD are Schedule II controlled substances. They have real abuse potential &mdash; but in people with ADHD, properly prescribed stimulants have been shown to <em>reduce</em> rates of substance use rather than increase them, likely because they address the underlying neurological deficit driving self-medication (Wilens et al., 2003).
            </p>
          </section>

          {/* Section 7 — Psychotherapy & Lifestyle */}
          <section>
            <h3>Psychotherapy</h3>
            <p>
              <strong>Cognitive Behavioral Therapy adapted for ADHD:</strong> Unlike standard CBT, ADHD-specific CBT focuses heavily on practical skill-building &mdash; time management systems, task initiation strategies, organizational scaffolding &mdash; alongside cognitive work on negative beliefs about self. Solanto et al. (2010) demonstrated significant improvement over support group control conditions.
            </p>
            <p>
              <strong>Coaching:</strong> ADHD coaching is a structured, goal-directed approach focused on building systems and accountability for daily functioning. It&apos;s not therapy &mdash; coaches don&apos;t address underlying emotional issues &mdash; but it&apos;s highly effective for the practical demands of daily life.
            </p>
            <p>
              <strong>DBT skills:</strong> Particularly the distress tolerance and emotion regulation modules, which address the emotional dysregulation that&apos;s often the most impairing feature of adult ADHD.
            </p>

            <h3>Lifestyle</h3>
            <ul>
              <li><strong>Exercise:</strong> Produces acute, significant improvements in attention and executive function &mdash; acts as a natural dopamine agonist. Many people with ADHD use exercise strategically before demanding cognitive tasks.</li>
              <li><strong>Sleep:</strong> Sleep deprivation dramatically worsens ADHD symptoms. Adults with ADHD disproportionately experience delayed sleep phase &mdash; going to bed late and waking late. Addressing this is often a high-leverage intervention.</li>
              <li><strong>Structure and routines:</strong> External structure compensates for the internal executive function deficits that ADHD creates. Consistent routines, alarms, and environmental design (out of sight = out of mind) are evidence-based behavioral tools.</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is for educational purposes only. It is not a substitute for professional evaluation, and nothing here should be interpreted as a diagnosis or treatment recommendation. ADHD diagnosis in adults requires a comprehensive clinical evaluation by a qualified professional.
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
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Think you might have adult ADHD?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">The ASRS screener takes under 5 minutes. Free, private, and your answers never leave your browser.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/asrs-adhd-screening" className="btn-primary text-sm">Take the ASRS ADHD Screening</Link>
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
                <p className="text-xs text-neutral-500 dark:text-neutral-400">WHO-validated adult ADHD self-report scale</p>
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
              <Link href="/blog/adult-adhd-signs" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Adult ADHD: Signs You Might Have Missed</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Common signs of ADHD in adults and why it&apos;s underdiagnosed</p>
              </Link>
              <Link href="/blog/what-does-asrs-score-mean" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">What Does Your ASRS Score Mean?</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understanding your ADHD screening results</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
