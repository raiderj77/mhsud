import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/sud-risk-screening-tools-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "sud-risk-screening-tools-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/sud-risk-screening-tools-guide",
  title: "Which Validated Screening Tool Should You Use to Assess Your SUD Risk?",
  description:
    "No single tool covers every substance equally well. Compare AUDIT (alcohol), DAST-10 (drugs), CRAFFT (teens), ORT (opioid risk), and ASSIST (multi-substance).",
  keywords: [
    "SUD screening tools",
    "AUDIT vs DAST vs CRAFFT",
    "substance use disorder screening",
    "which screening tool to use",
    "ASSIST screening",
    "opioid risk tool",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "What score on a screening tool means I should refer someone to a higher level of care?",
    answer:
      "No single cutoff score makes that decision for you. A high score signals risk and warrants a fuller clinical conversation, not an automatic referral. Use the score alongside the person's history, current functioning, safety concerns, and available support. As a CADC-II, your role is to interpret screening results in context, then match the person to the appropriate level of care using established criteria like ASAM.",
  },
  {
    question: "When is brief intervention appropriate versus when should I refer out immediately?",
    answer:
      "Brief intervention fits best when someone shows risky or hazardous use but has not developed a severe disorder. If screening results suggest dependence, withdrawal risk, co-occurring psychiatric conditions, or repeated failed attempts to cut back, refer to a licensed clinician or treatment program. Brief intervention is not a substitute for treatment. Think of it as a bridge for lower-risk individuals, not a ceiling for everyone who screens positive.",
  },
  {
    question: "What are the main limitations of self-report screening tools?",
    answer:
      "Self-report tools depend on honest answers, and stigma, fear of consequences, or cognitive impairment can reduce accuracy. They measure risk at one point in time and do not capture the full clinical picture. They also cannot diagnose a substance use disorder. A screening tool is a starting point, not a conclusion. Always follow up a positive screen with a structured clinical interview before making any treatment recommendations or documentation decisions.",
  },
  {
    question: "Which populations are these tools actually validated for, and where do they fall short?",
    answer:
      "Most widely used SUD screening tools, including the AUDIT and DAST-10, were validated primarily on adult populations in clinical or primary care settings. Evidence is thinner for adolescents, older adults, pregnant individuals, and people with serious mental illness. Using an unvalidated tool with these groups can produce misleading results. When working outside the tool's validated population, pair screening results with additional clinical judgment and consider tools developed specifically for that group.",
  },
  {
    question: "Can I use a screening tool to track progress during treatment?",
    answer:
      "Some tools, like the AUDIT-C or DAST-10, are short enough to readminister periodically and can give a rough sense of change over time. However, they were designed for screening, not outcome measurement. Repeated use can also introduce response bias. For tracking treatment progress, purpose-built outcome measures are more appropriate. If you use a screening tool longitudinally, document your rationale and interpret trends cautiously rather than treating score changes as precise clinical data.",
  },
  {
    question: "What is the most common misuse pattern clinicians should avoid?",
    answer:
      "The most common misuse is treating a screening score as a diagnosis. A positive screen means further assessment is warranted, not that a disorder is confirmed. Documenting a diagnosis based solely on a screening tool is clinically inappropriate and outside the CADC-II scope of practice. Screening identifies who needs a closer look. Diagnosis requires a licensed clinician conducting a full assessment using recognized diagnostic criteria. Keep those two steps clearly separate in your practice and your records.",
  },
  {
    question: "Do these tools work the same way in telehealth or digital settings?",
    answer:
      "Validated tools administered digitally can perform comparably to in-person administration, but context still matters. Without visual cues or a rapport-building conversation, some clients may answer differently. Technical barriers, privacy concerns at home, and lack of a supportive environment can all affect responses. If you are using screening tools through a telehealth platform, build in time to discuss the questions verbally and confirm the person understood what was being asked before acting on the results.",
  },
];

export default function SudRiskScreeningToolsGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Which Validated Screening Tool Should You Use to Assess Your SUD Risk?", description: "No single tool covers every substance equally well. Compare AUDIT (alcohol), DAST-10 (drugs), CRAFFT (teens), ORT (opioid risk), and ASSIST (multi-substance).", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Which SUD Screening Tool Fits", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">12 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Which Validated Screening Tool Should You Use to Assess Your SUD Risk?
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            No single tool covers every substance equally well. The AUDIT was built for alcohol, the DAST-10 for drugs broadly, and the CRAFFT for adolescents. Matching the right instrument to the right substance and population gives you the most useful signal. A positive screen always warrants a follow-up conversation with a licensed provider.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Crisis Resources */}
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">If you are in crisis</p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong>, Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong>, Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline</strong>, <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is educational. Screening tools are starting points, not diagnoses. Only a licensed clinician can diagnose a substance use disorder. If a screen suggests risk, see a primary care physician, licensed therapist, or addiction medicine provider. CADC-II credentialed counselors work within scope of practice: they screen, refer, and provide counseling, not diagnose or prescribe.
            </p>
          </div>

          <section>
            <h2>Why does choosing the right screening tool actually matter?</h2>
            <p>
              <strong>Choosing the wrong tool can produce misleading results.</strong> A general drug screen applied to someone whose only concern is alcohol misses the clinical picture, and an adult-normed tool applied to a teenager may underestimate risk. The right instrument, used correctly, gives you and a clinician a clearer starting point.
            </p>
            <p>
              Screening tools are not diagnoses. They are standardized questionnaires that have been tested in large populations to identify people who may benefit from a closer clinical look. SAMHSA describes screening as the first step in a continuum that moves toward brief intervention, referral, and treatment, a framework commonly called SBIRT. When a tool is validated, it means researchers measured its sensitivity (how well it catches true positives) and specificity (how well it avoids false alarms) against a clinical gold standard. Using a non-validated or mismatched tool skips that evidence base entirely.
            </p>
            <p>
              For readers who are clinicians or peer counselors, instrument selection also affects documentation and billing. For patients doing their own research, it affects whether the number you get back actually means something about your situation.
            </p>
          </section>

          <section>
            <h2>What is the best validated tool for alcohol use disorder risk?</h2>
            <p>
              <strong>The Alcohol Use Disorders Identification Test, known as the AUDIT, is the most widely recommended tool for alcohol-specific screening in adults.</strong> Developed by the World Health Organization, it covers consumption, dependence symptoms, and alcohol-related harm across ten items. A score of 8 or higher in most adult populations suggests hazardous or harmful use.
            </p>
            <p>
              The AUDIT was developed and validated by the WHO and has been tested across dozens of countries and clinical settings. A shorter version, the <Link href="/audit-c-alcohol-screen" className="text-sage-600 dark:text-sage-400 underline">AUDIT-C</Link>, uses only the first three consumption questions and is often used in primary care settings where time is limited. The AUDIT-C scores 3 or higher for women and 4 or higher for men are commonly used thresholds, though a clinician would typically interpret scores alongside other clinical information rather than in isolation.
            </p>
            <p>
              For older adults, the NIAAA recommends asking a single quantity-frequency question as a starting point, because the AUDIT&apos;s thresholds were not originally normed on populations over 65. If you are screening an older adult, a licensed provider should weigh the results accordingly.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Which tool works best when the concern involves drugs other than alcohol?</h2>
            <p>
              <strong>The Drug Abuse Screening Test, or DAST-10, is a validated 10-item tool designed for non-alcohol substance use in adults.</strong> Scores range from 0 to 10, and a score of 3 or higher is generally associated with moderate to substantial drug-related problems. It does not distinguish between specific substances, which is both a strength and a limitation.
            </p>
            <p>
              The DAST-10 was developed by Harvey Skinner and has been validated in clinical and community populations. Its broad scope makes it useful when someone&apos;s substance use pattern is not yet clear. The limitation is that it cannot tell you whether the concern is cannabis, opioids, stimulants, or something else. For that reason, many clinicians use the DAST-10 as a first-pass screen and then follow up with more targeted questions. See the <Link href="/blog/dast-10-vs-dast-20-guide" className="text-sage-600 dark:text-sage-400 underline">full DAST-10 vs DAST-20 comparison</Link> for setting-specific guidance.
            </p>
            <p>
              SAMHSA&apos;s Treatment Improvement Protocol (TIP) 24, &quot;A Guide to Substance Abuse Services for Primary Care Clinicians,&quot; recommends pairing a broad screen like the DAST-10 with a clinical interview to clarify which substances are involved before moving toward any level-of-care recommendation.
            </p>
          </section>

          <section>
            <h2>Is there a tool designed specifically for opioid use risk?</h2>
            <p>
              <strong>The Opioid Risk Tool, or ORT, was developed to assess risk for opioid misuse in patients being considered for long-term opioid therapy.</strong> It is not a general SUD screen. It covers family and personal history of substance use, age, history of preadolescent sexual abuse, and psychological disease. The ORT produces three risk tiers: a score of 0 to 3 indicates low risk, 4 to 7 indicates moderate risk, and 8 or higher indicates high risk.
            </p>
            <p>
              The ORT was developed by Lynn Webster and published in 2005. It is most commonly used in pain management settings before initiating opioid prescribing. If you are a patient who has been prescribed opioids and wants to understand your own risk profile, the ORT can be a useful self-reflection tool, but the results should be discussed with your prescribing provider. This tool does not screen for current opioid use disorder. It screens for the likelihood that someone might develop problematic use if opioids are prescribed.
            </p>
            <p>
              For people who are already concerned about their current opioid use, the DAST-10 or a full clinical interview using the DSM-5-TR criteria for opioid use disorder would be more appropriate starting points. Treatment options, which a prescriber may consider, include medications such as buprenorphine, methadone, and naltrexone.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>What tool should be used when screening adolescents?</h2>
            <p>
              <strong>The CRAFFT is the most widely validated screening tool for substance use risk in adolescents ages 12 to 21.</strong> It uses six yes-or-no questions focused on use in Cars, Relaxation, Alone, Forgetting, Friends/Family concern, and Trouble. A score of 2 or higher is considered a positive screen and warrants further assessment.
            </p>
            <p>
              The CRAFFT was developed by John Knight and colleagues at Boston Children&apos;s Hospital and has been validated in pediatric primary care settings. The American Academy of Pediatrics recommends its use as part of routine adolescent well visits. Because adolescent brain development affects both substance use patterns and risk trajectories differently than in adults, using an adult-normed tool like the AUDIT or DAST-10 with a teenager is not appropriate practice.
            </p>
            <p>
              A positive <Link href="/crafft-substance-screening" className="text-sage-600 dark:text-sage-400 underline">CRAFFT screen</Link> does not mean a teenager has a substance use disorder. It means a more thorough conversation with a licensed adolescent behavioral health provider is warranted. A CADC-II counselor&apos;s role in that situation is to facilitate that referral, not to make a diagnostic determination.
            </p>
          </section>

          <section>
            <h2>Can one tool screen for multiple substances at once?</h2>
            <p>
              <strong>The ASSIST, which stands for Alcohol, Smoking and Substance Involvement Screening Test, was developed by the WHO to screen for multiple substances in a single administration.</strong> It covers tobacco, alcohol, cannabis, cocaine, amphetamines, inhalants, sedatives, hallucinogens, and opioids. It produces a separate risk score for each substance.
            </p>
            <p>
              The <Link href="/who-assist-substance-screening" className="text-sage-600 dark:text-sage-400 underline">ASSIST</Link> takes approximately 5 to 10 minutes to administer and has been validated in primary care and community settings across multiple countries. SAMHSA has endorsed its use in integrated care settings where patients may present with polysubstance concerns. The scoring produces low, moderate, or high risk categories for each substance, which can guide whether a brief intervention is sufficient or whether a referral to specialty care is indicated.
            </p>
            <p>
              For clinicians working in settings where time allows a more thorough first-pass screen, the ASSIST provides more granular information than the DAST-10 alone. For patients doing self-research, the ASSIST is available through the WHO website and can be a useful way to get a structured picture of your use across substances before talking to a provider.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <section>
            <h2>What should you do after a positive screen?</h2>
            <p>
              <strong>A positive result on any of these tools is not a diagnosis.</strong> It is a signal that a more thorough evaluation by a licensed provider is appropriate. That evaluation might involve a structured clinical interview, a review of DSM-5-TR criteria, and an assessment of functional impairment. From there, a provider can discuss care options that fit your situation.
            </p>
            <p>
              If you are a patient who screened positive on your own, the most useful next step is bringing those results to a primary care provider, an addiction medicine specialist, or a licensed substance use counselor. If you are a peer counselor or CADC working with someone who screens positive, your role is to support that referral and provide brief motivational support, not to render a clinical diagnosis.
            </p>
            <p>
              Treatment looks different for different people. ASAM Criteria, 4th Edition, provides a multidimensional framework that licensed providers use to match people to the right level of care, from outpatient counseling to medically managed intensive inpatient treatment. Screening is the door. What happens after you walk through it depends on a full clinical picture that only a qualified provider can develop.
            </p>
          </section>

          {/* Sources */}
          <section className="not-prose">
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-3">Sources</h2>
            <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400 list-disc pl-5">
              <li>World Health Organization. <em>AUDIT: The Alcohol Use Disorders Identification Test</em>, 2nd Edition. WHO, 2001.</li>
              <li>National Institute on Alcohol Abuse and Alcoholism (NIAAA). <em>Helping Patients Who Drink Too Much: A Clinician&apos;s Guide</em>. Updated 2005 Edition.</li>
              <li>Skinner, H.A. &quot;The Drug Abuse Screening Test.&quot; <em>Addictive Behaviors</em>, 7(4), 363-371, 1982.</li>
              <li>Webster, L.R., and Webster, R.M. &quot;Predicting Aberrant Behaviors in Opioid-Treated Patients.&quot; <em>Pain Medicine</em>, 6(6), 432-442, 2005.</li>
              <li>Knight, J.R., et al. &quot;Validity of the CRAFFT Substance Abuse Screening Test Among Adolescent Clinic Patients.&quot; <em>Archives of Pediatrics and Adolescent Medicine</em>, 156(6), 607-614, 2002.</li>
              <li>World Health Organization. <em>The ASSIST Project: Alcohol, Smoking and Substance Involvement Screening Test</em>. WHO, 2010.</li>
              <li>SAMHSA. <em>Treatment Improvement Protocol (TIP) 24: A Guide to Substance Abuse Services for Primary Care Clinicians</em>.</li>
              <li>American Society of Addiction Medicine. <em>ASAM Criteria: Treatment Criteria for Addictive, Substance-Related, and Co-Occurring Conditions</em>, 4th Edition. 2023.</li>
              <li>American Psychiatric Association. <em>Diagnostic and Statistical Manual of Mental Disorders</em>, 5th Edition, Text Revision (DSM-5-TR). 2022.</li>
            </ul>
          </section>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Ready to screen yourself or a client?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, evidence-based tools matched to the substance and population.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/audit-c-alcohol-screen" className="btn-primary text-sm">AUDIT-C (Alcohol)</Link>
              <Link href="/who-assist-substance-screening" className="btn-primary text-sm">ASSIST (Multi-Substance)</Link>
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
              <Link href="/audit-c-alcohol-screen" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">AUDIT-C Alcohol Screen</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Quick 3-question alcohol consumption screener</p>
              </Link>
              <Link href="/who-assist-substance-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">WHO ASSIST</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Multi-substance screening across nine substance categories</p>
              </Link>
              <Link href="/crafft-substance-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">CRAFFT Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Adolescent substance use screening, ages 12 to 21</p>
              </Link>
              <Link href="/cage-aid-substance-abuse-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">CAGE-AID Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Combined alcohol and drug use screening</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/dast-10-vs-dast-20-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">DAST-10 vs DAST-20</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Which drug-use screener fits your setting</p>
              </Link>
              <Link href="/blog/audit-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">AUDIT Alcohol Screening Tool</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">How it works and why clinicians use it</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
