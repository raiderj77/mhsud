import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/what-does-ace-score-mean`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "what-does-ace-score-mean")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/what-does-ace-score-mean",
  title: "What Does Your ACE Score Mean?",
  description:
    "ACE scores range from 0\u201310. Learn what your Adverse Childhood Experiences score means, how childhood trauma affects adult health, and what to do with your results.",
  keywords: [
    "ACE score meaning",
    "adverse childhood experiences score",
    "ACE questionnaire results",
    "ACE score interpretation",
    "childhood trauma score",
    "ACE study",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Does a high ACE score mean I will develop health problems?",
    answer:
      "No. The ACE Study findings are population-level associations \u2014 they describe elevated risk at a group level, not individual predictions. Many people with high ACE scores are healthy and thriving, particularly those who had access to protective factors during childhood or have received support in adulthood. The score is useful context, not a prognosis.",
  },
  {
    question: "Can ACE scores be reduced or reversed?",
    answer:
      "The score itself reflects your childhood history and doesn\u2019t change. However, the health impacts associated with high ACE scores can be substantially mitigated through trauma-informed care, mental health treatment, supportive relationships, and lifestyle factors. Research on neuroplasticity shows that the brain continues to adapt and heal throughout the lifespan \u2014 adversity\u2019s effects are not permanent.",
  },
  {
    question: "Should I share my ACE score with my doctor?",
    answer:
      "Yes \u2014 particularly if you scored 4 or higher. Many primary care providers now ask about ACE history because it contextualizes a wide range of health presentations. If your doctor doesn\u2019t ask, you can raise it: \u201cI learned about the ACE Study and scored [X]. Is that relevant to any of my current health concerns?\u201d",
  },
  {
    question: "Is the ACE questionnaire the same as a trauma assessment?",
    answer:
      "No. The ACE questionnaire is a brief population-level screening tool. A clinical trauma assessment is a much more comprehensive process conducted by a trained clinician \u2014 exploring the nature, timing, and impact of adverse experiences in detail, assessing for trauma-related conditions, and informing a treatment plan.",
  },
];

export default function WhatDoesAceScoreMeanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "What Does Your ACE Score Mean?", description: "ACE scores range from 0\u201310. Learn what your Adverse Childhood Experiences score means and how childhood trauma affects adult health.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "What Does Your ACE Score Mean?", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">12 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What Does Your ACE Score Mean?
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            ACE scores range from 0 to 10, with one point for each category of adverse childhood experience reported. A score of 0 means no adverse childhood experiences were reported. Scores of 4 or higher are associated with significantly elevated risk for a range of physical and mental health conditions in adulthood. An ACE score is not a diagnosis &mdash; it is a measure of cumulative childhood adversity that helps explain adult health patterns and guides clinical conversations about trauma history.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Section 1 */}
          <section>
            <h2>What is the ACE questionnaire?</h2>
            <p>
              The <strong>Adverse Childhood Experiences (ACE)</strong> questionnaire comes from the landmark ACE Study &mdash; a collaboration between the CDC and Kaiser Permanente conducted between 1995 and 1997. It is one of the largest investigations of childhood abuse and neglect and their relationship to adult health ever conducted, with over 17,000 participants.
            </p>
            <p>The questionnaire covers <strong>10 categories</strong> of adverse childhood experiences before age 18:</p>
            <p><strong>Abuse (3 categories):</strong></p>
            <ol>
              <li>Physical abuse</li>
              <li>Emotional abuse</li>
              <li>Sexual abuse</li>
            </ol>
            <p><strong>Neglect (2 categories):</strong></p>
            <ol start={4}>
              <li>Physical neglect</li>
              <li>Emotional neglect</li>
            </ol>
            <p><strong>Household dysfunction (5 categories):</strong></p>
            <ol start={6}>
              <li>Mother treated violently (domestic violence exposure)</li>
              <li>Household substance abuse (living with someone with alcohol or drug problems)</li>
              <li>Mental illness in the household</li>
              <li>Parental separation or divorce</li>
              <li>Incarcerated household member</li>
            </ol>
            <p>
              Each category is scored as present (1) or absent (0) &mdash; frequency within a category does not increase the score. The total ranges from 0&ndash;10.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2>ACE score ranges and what they mean</h2>
            <div className="not-prose my-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">ACE Score</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Population Distribution</th>
                    <th className="text-left py-2 font-semibold text-neutral-700 dark:text-neutral-200">Health Risk Level</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">0</td><td className="py-2 pr-4">~36% of the original study sample</td><td className="py-2">Baseline reference</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">1</td><td className="py-2 pr-4">~26%</td><td className="py-2">Modestly elevated</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">2</td><td className="py-2 pr-4">~16%</td><td className="py-2">Moderately elevated</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">3</td><td className="py-2 pr-4">~10%</td><td className="py-2">Substantially elevated</td></tr>
                  <tr><td className="py-2 pr-4">4+</td><td className="py-2 pr-4">~12%</td><td className="py-2">Significantly elevated across multiple health domains</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              These distributions come from the original ACE Study sample (Felitti et al., 1998). The original study used a middle-class, largely white, insured population &mdash; rates of ACEs in general population and higher-adversity communities are likely higher.
            </p>
            <p>
              <strong>The ACE score is most meaningful as a cumulative measure</strong> &mdash; the research consistently shows that it&apos;s the pile-up of adverse experiences, not any single one, that drives the strongest health associations.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2>What a score of 0 means</h2>
            <p>
              A score of 0 means none of the 10 ACE categories were experienced before age 18. This is associated with the lowest risk profile across the health outcomes the ACE Study measured.
            </p>
            <p>
              It does not mean childhood was without difficulty or that current mental health is unaffected by other factors. The ACE questionnaire covers a specific set of 10 adversity categories &mdash; other difficult childhood experiences (bullying, peer rejection, loss of a parent to illness, community violence) that aren&apos;t captured in the 10 categories can still affect adult wellbeing.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 4 */}
          <section>
            <h2>What a score of 1&ndash;3 means</h2>
            <p>One to three ACEs is associated with gradually increasing risk for the health outcomes the study identified. At this level:</p>
            <ul>
              <li>Risk is elevated relative to a score of 0, but the relationship is not as steep as at 4+</li>
              <li>Individual ACE types matter, not just the total &mdash; sexual abuse, in particular, carries significant trauma sequelae even as a single ACE</li>
              <li>Many people with scores in this range are doing well and have no presenting concerns &mdash; the score reflects population-level risk, not individual destiny</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2>What a score of 4+ means</h2>
            <p>
              A score of 4 or more is the threshold the original ACE research identified as associated with the most striking health differences. Compared to a score of 0, people with ACE scores of 4 or higher showed markedly elevated rates of:
            </p>
            <p><strong>Mental health conditions:</strong></p>
            <ul>
              <li>Depression: 4.6&times; more likely</li>
              <li>Suicide attempts: 12&times; more likely</li>
              <li>Substance use disorders: 7&times; more likely</li>
              <li>PTSD: Significantly elevated</li>
            </ul>
            <p><strong>Physical health conditions:</strong></p>
            <ul>
              <li>Heart disease, stroke, diabetes, and cancer: All significantly elevated</li>
              <li>Chronic obstructive pulmonary disease (COPD): 3.9&times; more likely</li>
              <li>Liver disease: 2.4&times; more likely</li>
            </ul>
            <p><strong>Behavioral health risks:</strong></p>
            <ul>
              <li>Smoking: 2.2&times; more likely</li>
              <li>IV drug use: 10.3&times; more likely</li>
              <li>Alcohol use disorder: 7.4&times; more likely</li>
            </ul>
            <p>
              These are population-level associations, not individual predictions. Many people with high ACE scores lead healthy, resilient lives &mdash; particularly when they have had access to protective factors like supportive relationships, stable housing, and trauma-informed care.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 6 */}
          <section>
            <h2>Why ACE scores affect adult health: the biology</h2>
            <p>
              The ACE Study established the <em>what</em> &mdash; the association between childhood adversity and adult health outcomes. Subsequent research has clarified the <em>why.</em>
            </p>
            <p>
              <strong>Toxic stress and the developing brain:</strong> When children experience chronic or severe stress without adequate adult buffering, the body&apos;s stress response system (the HPA axis, which regulates cortisol) becomes dysregulated. This has lasting effects on brain development &mdash; particularly the prefrontal cortex (executive function, decision-making) and the amygdala (threat detection and emotional regulation).
            </p>
            <p>
              <strong>Epigenetic changes:</strong> Childhood adversity produces measurable changes in gene expression &mdash; not changes to the DNA sequence itself, but to how genes are switched on and off. Some of these epigenetic changes are associated with inflammatory processes that elevate long-term disease risk.
            </p>
            <p>
              <strong>Behavioral pathways:</strong> Some of the health impact of ACEs operates through behavioral routes &mdash; people who experienced childhood adversity are more likely to smoke, use substances, and engage in other health-affecting behaviors, often as adaptive coping strategies for the distress those experiences created.
            </p>
            <p>
              Understanding these mechanisms is important because it removes moral judgment from the picture. Health-affecting behaviors in people with high ACE scores are often responses to adversity, not failures of willpower.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2>ACE score and mental health: what to watch for</h2>
            <p>
              High ACE scores are particularly associated with specific mental health presentations. If you scored 4 or higher, these are worth discussing with a clinician:
            </p>
            <p>
              <strong>PTSD:</strong> Not all trauma produces PTSD, but childhood trauma &mdash; particularly abuse and household dysfunction &mdash; is one of the strongest predictors. The <Link href="/pcl-5-ptsd-screening" className="text-sage-600 dark:text-sage-400 underline">PCL-5</Link> screens for PTSD symptoms.
            </p>
            <p>
              <strong>Depression:</strong> The relationship between childhood adversity and depression is one of the most replicated findings in psychiatric epidemiology. The <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9</Link> can screen for current depressive symptoms.
            </p>
            <p>
              <strong>Anxiety:</strong> Childhood adversity disrupts the stress response system in ways that create lasting vulnerabilities to anxiety. The <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7</Link> screens for generalized anxiety.
            </p>
            <p>
              <strong>Substance use:</strong> High ACE scores are strongly associated with substance use disorders &mdash; often as self-medication for the emotional pain and dysregulation that adversity created. The <Link href="/audit-alcohol-test" className="text-sage-600 dark:text-sage-400 underline">AUDIT</Link> and <Link href="/dast-10-drug-screening" className="text-sage-600 dark:text-sage-400 underline">DAST-10</Link> screen for alcohol and drug use problems specifically.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Section 8 — Resilience */}
          <section>
            <h2>Resilience: what ACE scores don&apos;t capture</h2>
            <p>
              The ACE questionnaire measures adversity &mdash; it does not measure protective factors. Research on resilience consistently shows that certain factors buffer the impact of childhood adversity significantly:
            </p>
            <ul>
              <li><strong>At least one stable, caring adult relationship</strong> &mdash; a parent, grandparent, teacher, or mentor who provided consistent support</li>
              <li><strong>Safe, stable housing</strong> during childhood</li>
              <li><strong>Community and school environments</strong> that provided structure and belonging</li>
              <li><strong>Access to mental health support</strong> at critical developmental moments</li>
              <li><strong>Temperament and coping style</strong> &mdash; some children show greater neurobiological resilience to stress</li>
            </ul>
            <p>
              A high ACE score in the presence of strong protective factors may have far less health impact than the same score without those buffers. And protective factors can be cultivated in adulthood &mdash; therapy, stable relationships, and community connection all continue to buffer adversity&apos;s effects across the lifespan.
            </p>
          </section>

          {/* Section 9 — What to do */}
          <section>
            <h2>What to do with your ACE score</h2>
            <p>
              <strong>Any score:</strong> Understanding your ACE history is clinically useful regardless of the number. Trauma-informed care means your clinicians understand this context when assessing your health, prescribing treatment, and interpreting behaviors.
            </p>
            <p>
              <strong>Score of 4+:</strong> Share this with your primary care physician and/or a mental health clinician. This information is relevant to your physical and mental health care. Many healthcare providers now routinely screen for ACEs precisely because this knowledge changes how care is delivered.
            </p>
            <p>
              <strong>If memories or feelings came up:</strong> Taking the ACE questionnaire sometimes surfaces difficult memories. If you found it distressing, please reach out for support &mdash; you don&apos;t have to process this alone.
            </p>
          </section>

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              The ACE Questionnaire is an educational tool only. It cannot diagnose any condition. If you have a history of adverse childhood experiences and are struggling with its effects, please consult a qualified mental health professional experienced in trauma-informed care.
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
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Want to screen for related conditions?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Each screening takes under 5 minutes. Free, private, and your answers never leave your browser.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/ace-questionnaire" className="btn-primary text-sm">Take the ACE Questionnaire</Link>
              <Link href="/pcl-5-ptsd-screening" className="btn-primary text-sm">Take the PCL-5 PTSD Screening</Link>
              <Link href="/phq-9-depression-test" className="btn-primary text-sm">Take the PHQ-9 Depression Check</Link>
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
              <Link href="/ace-questionnaire" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">ACE Questionnaire</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Adverse Childhood Experiences screening</p>
              </Link>
              <Link href="/pcl-5-ptsd-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PCL-5 PTSD Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Validated PTSD symptom screening tool</p>
              </Link>
              <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Self-Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Clinically validated depression symptom screening</p>
              </Link>
              <Link href="/audit-alcohol-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">AUDIT Alcohol Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">WHO alcohol use screening tool</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/ace-score-meaning" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">ACE Scores: What Your Childhood Experiences Mean for Your Health</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">How adverse childhood experiences affect health and why resilience matters</p>
              </Link>
              <Link href="/blog/ptsd-screening-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PTSD Screening: When and Why to Get Tested</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">How the PCL-5 and PC-PTSD-5 work and what scores mean</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
