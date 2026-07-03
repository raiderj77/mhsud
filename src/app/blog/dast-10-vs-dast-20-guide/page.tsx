import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/dast-10-vs-dast-20-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "dast-10-vs-dast-20-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/dast-10-vs-dast-20-guide",
  title: "DAST-10 vs DAST-20: Which Drug-Use Screener Fits Your Setting?",
  description:
    "The DAST-10 suits fast-paced settings like primary care and EDs. The DAST-20 fits dedicated treatment programs needing more detail. Compare scoring, use cases, and limits.",
  keywords: [
    "DAST-10 vs DAST-20",
    "Drug Abuse Screening Test",
    "DAST scoring",
    "drug use screener",
    "SBIRT drug screening",
    "substance use disorder screening tools",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "How do I score the tool correctly when a client skips an item?",
    answer:
      "Do not estimate or carry forward a neighboring response. A skipped item makes the total score uninterpretable for clinical decision-making. Ask the client to complete the missing item before scoring. If they refuse, document the incomplete administration and note it in your clinical record. Partial scores should never be used to determine a risk category or to justify skipping a referral conversation.",
  },
  {
    question: "At what score threshold should I refer rather than continue with brief intervention?",
    answer:
      "Thresholds vary by tool, so always follow the scoring guide published with the specific instrument you are using. As a general principle, a score in the moderate-to-high risk range warrants a warm handoff or referral to a licensed clinician for a full diagnostic assessment. Brief intervention is appropriate for low-to-moderate scores where the client shows readiness to change and no immediate safety concerns are present.",
  },
  {
    question: "What are the main limitations of self-report screening tools?",
    answer:
      "Self-report tools depend on honest disclosure, which stigma, fear of legal consequences, or cognitive impairment can reduce. They identify risk level, not diagnosis. They cannot account for polysubstance use patterns that fall outside the items asked. Results reflect a single point in time and can shift quickly. A screening score is one data point. It should always be interpreted alongside a clinical interview and collateral information when available.",
  },
  {
    question: "Which populations are these tools typically not validated for?",
    answer:
      "Most widely used SUD screening tools were validated on adult populations in outpatient or primary care settings. Evidence is thinner for adolescents under 12, older adults with cognitive decline, individuals with severe acute psychiatric symptoms, and non-English speakers using translated versions that have not been independently validated. Using a tool outside its validated population does not make it useless, but you should interpret results with added caution and document that limitation.",
  },
  {
    question: "What is the most common misuse pattern clinicians should avoid?",
    answer:
      "The most common misuse is treating a low score as a clinical clearance. A low score means lower reported risk at that moment. It does not rule out a substance use disorder, and it does not eliminate the need for a brief conversation about use. Clinicians sometimes skip follow-up questions entirely after a low score, which can cause them to miss contextual information the tool was never designed to capture on its own.",
  },
  {
    question: "Can I use a screening tool to monitor progress during treatment?",
    answer:
      "Some tools are designed for repeated administration and can track change over time, but many are designed only for initial screening. Using an intake-only tool as a progress measure can produce misleading results because the items were not written or validated for that purpose. Check the instrument's documentation before using it longitudinally. If ongoing monitoring is a clinical goal, select a tool explicitly validated for repeated use and administer it under consistent conditions each time.",
  },
  {
    question: "Does a positive screen mean a client has a substance use disorder?",
    answer:
      "No. A positive screen means the client's responses indicate a level of risk that warrants further assessment. Only a qualified clinician conducting a full diagnostic evaluation using DSM-5 or ICD criteria can determine whether a substance use disorder is present. Communicating this distinction clearly to clients matters. Telling someone they “screened positive” without explaining what that means can cause unnecessary alarm or, in the opposite direction, false reassurance if they dismiss the result.",
  },
];

export default function Dast10VsDast20GuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "DAST-10 vs DAST-20: Which Drug-Use Screener Fits Your Setting?", description: "The DAST-10 suits fast-paced settings like primary care and EDs. The DAST-20 fits dedicated treatment programs needing more detail. Compare scoring, use cases, and limits.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "DAST-10 vs DAST-20 Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">11 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            DAST-10 vs DAST-20: Which Drug-Use Screener Fits Your Setting?
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            The DAST-10 is a brief, validated screener best suited for primary care, emergency departments, and high-volume intake settings where time is limited. The DAST-20 offers greater clinical detail and is better matched to dedicated addiction treatment programs. Both tools screen for drug use severity, but neither replaces a full clinical assessment or diagnosis by a licensed provider.
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
            <h2>What are the DAST-10 and DAST-20, and where did they come from?</h2>
            <p>
              <strong>Both instruments were developed by Harvey Skinner at the Addiction Research Foundation in Toronto.</strong> The DAST-20 came first, published in 1982. The DAST-10 is a shortened derivative. Both use yes/no questions to estimate drug use severity over the past 12 months, and both have been validated across multiple populations in peer-reviewed research.
            </p>
            <p>
              The original DAST-20 was designed as a parallel instrument to the Michigan Alcoholism Screening Test (MAST), applying similar logic to non-alcohol drug use. Skinner&apos;s 1982 validation study, published in <em>Addictive Behaviors</em>, established the 20-item version as a reliable self-report tool with strong internal consistency. The DAST-10 was later derived by selecting the 10 items with the highest item-total correlations, preserving most of the original instrument&apos;s sensitivity while cutting administration time roughly in half.
            </p>
            <p>
              It is worth noting that both tools ask about drug use broadly, meaning any non-prescribed or problematic drug use, including misuse of prescription medications. Neither tool is substance-specific, which is a feature in general screening but a limitation when a clinician needs to understand which substances are involved. A licensed provider would typically follow a positive screen with a more detailed clinical interview.
            </p>
          </section>

          <section>
            <h2>How are the two tools scored, and what do the scores mean?</h2>
            <p>
              <strong>The DAST-20 is scored 0 to 20 and the DAST-10 is scored 0 to 10.</strong> Higher scores indicate greater severity. Validated cutoff ranges exist for both versions, though SAMHSA and the original validation literature recommend treating any score above the low-risk threshold as a prompt for further clinical evaluation, not as a standalone diagnosis.
            </p>
            <p>
              For the DAST-10, a score of 0 suggests no reported problems, scores of 1 to 2 suggest low severity, 3 to 5 suggest moderate severity, 6 to 8 suggest substantial severity, and 9 to 10 suggest severe involvement. The DAST-20 uses comparable proportional ranges. Skinner&apos;s original work and subsequent validation studies, including work cited in SAMHSA&apos;s Treatment Improvement Protocol (TIP) 24, support these cutoff bands as clinically meaningful.
            </p>
            <p>
              One important clinical note: these are screening tools, not diagnostic instruments. A validated screening tool can suggest that a problem may exist and that further evaluation is warranted. Only a licensed provider conducting a full assessment, using criteria from the DSM-5-TR or the ASAM Criteria 4th Edition, can confirm a substance use disorder diagnosis or determine a level of care.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Which settings are best suited for the DAST-10?</h2>
            <p>
              <strong>The DAST-10 works well in time-pressured environments: primary care offices, emergency departments, urgent care clinics, employee assistance programs, and community health screenings.</strong> Its brevity, typically two to three minutes to complete, makes it practical when a full intake is not possible and a quick severity estimate is needed to guide a brief intervention or referral.
            </p>
            <p>
              SAMHSA&apos;s Screening, Brief Intervention, and Referral to Treatment (SBIRT) model specifically supports the use of short validated screeners like the DAST-10 in primary care and emergency settings. In those contexts, the goal is not a comprehensive assessment but a fast, reliable signal: does this person need a brief conversation, a referral, or urgent intervention? The DAST-10 answers that question efficiently.
            </p>
            <p>
              Peer counselors working in community-based recovery programs may also find the DAST-10 more approachable for the people they serve. A 10-item yes/no questionnaire is less likely to feel overwhelming to someone who is ambivalent about engaging with services.
            </p>
          </section>

          <section>
            <h2>Which settings are better served by the DAST-20?</h2>
            <p>
              <strong>The DAST-20 is a stronger fit for dedicated addiction treatment programs, residential facilities, intensive outpatient programs, and research contexts where a more granular severity picture is useful.</strong> The additional 10 items capture dimensions of drug-related consequences that the shorter version does not fully address, giving clinicians more information to work with at intake.
            </p>
            <p>
              In a structured treatment setting, the extra time required for the DAST-20, typically five to seven minutes, is not a barrier. Counselors conducting a comprehensive intake assessment are already gathering detailed history, and the DAST-20 fits naturally into that process. The broader item pool also makes it more sensitive to moderate-severity presentations that might score at the low end of the DAST-10 and be underweighted.
            </p>
            <p>
              Research and program evaluation contexts also benefit from the DAST-20. Its longer item set provides more variance in scores, which is useful when measuring change over time or comparing outcomes across groups. NIDA&apos;s research protocols have referenced the DAST-20 in studies examining drug use severity as an outcome variable.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Are there populations where either tool has known limitations?</h2>
            <p>
              <strong>Both tools were originally validated primarily with adult populations</strong>, and their performance in adolescents, older adults, and pregnant individuals has been studied with mixed results. Clinicians working with these groups should be aware that a validated screening tool developed in one population may not perform identically in another, and should consult population-specific guidance from SAMHSA or NIDA.
            </p>
            <p>
              For adolescents, SAMHSA recommends tools specifically designed for that age group, such as the <Link href="/crafft-substance-screening" className="text-sage-600 dark:text-sage-400 underline">CRAFFT screener</Link>, rather than adult instruments like the DAST. The DAST items assume adult life contexts, such as employment, legal consequences, and relationship roles, that may not map cleanly onto a teenager&apos;s experience.
            </p>
            <p>
              For pregnant individuals, the NIDA Quick Screen and the 4P&apos;s Plus are among the tools SAMHSA identifies as more appropriate, given the specific clinical and social context of pregnancy. Using a general adult screener in that population is not prohibited, but clinicians should understand that sensitivity and specificity data from the original validation studies may not fully apply.
            </p>
            <p>
              Cultural and linguistic factors also matter. Both tools have been translated and used in non-English-speaking populations, but clinicians should verify that the version they are using has been validated in the specific language and cultural context of the person being screened.
            </p>
          </section>

          <section>
            <h2>Can these tools be used for ongoing monitoring, not just initial screening?</h2>
            <p>
              <strong>Yes, both tools can be re-administered over time to track changes in self-reported drug use severity.</strong> This is common in treatment programs that use standardized outcome measurement. However, clinicians should interpret score changes alongside clinical observation and other assessment data, not as a standalone measure of progress or relapse.
            </p>
            <p>
              Repeated administration of the DAST-10 or DAST-20 can provide a useful longitudinal data point in treatment planning conversations. If a person&apos;s score decreases over the course of treatment, that is consistent with reduced drug-related consequences, though it does not confirm abstinence or recovery by itself. Conversely, a rising score during treatment is a signal worth exploring in session, not a judgment.
            </p>
            <p>
              The ASAM Criteria 4th Edition emphasizes that assessment is a continuous process, not a one-time event. Periodic re-screening with a validated tool like the DAST fits within that framework as one component of ongoing clinical monitoring.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <section>
            <h2>What should happen after a positive screen on either tool?</h2>
            <p>
              <strong>A positive screen on the DAST-10 or DAST-20 should prompt a clinical follow-up, not a diagnosis.</strong> Depending on the setting and score severity, next steps may include a brief motivational intervention, a referral to a licensed provider for full assessment, or, in high-severity cases, a warm handoff to addiction treatment services. The screen opens the door; it does not close the case.
            </p>
            <p>
              In primary care or emergency settings using SBIRT, a moderate score typically triggers a brief intervention delivered by a trained counselor or clinician, followed by a referral to treatment if the person is interested. A high score warrants a more direct referral conversation. SAMHSA&apos;s SBIRT resources provide structured guidance on how to conduct that conversation.
            </p>
            <p>
              For individuals who do receive a full assessment and are found to meet criteria for a substance use disorder, treatment options may include behavioral therapies, peer support, and medications. A prescribing provider may consider options such as buprenorphine, methadone, naltrexone, acamprosate, or disulfiram depending on the substances involved and the individual&apos;s medical history. Those decisions belong to the prescriber, not the screener.
            </p>
          </section>

          {/* Sources */}
          <section className="not-prose">
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-3">Sources</h2>
            <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400 list-disc pl-5">
              <li>Skinner, H.A. (1982). The Drug Abuse Screening Test. <em>Addictive Behaviors</em>, 7(4), 363-371. (Original DAST-20 validation study.)</li>
              <li>SAMHSA. Treatment Improvement Protocol (TIP) 24: A Guide to Substance Abuse Services for Primary Care Clinicians. Rockville, MD: SAMHSA.</li>
              <li>SAMHSA. Screening, Brief Intervention, and Referral to Treatment (SBIRT). Available at samhsa.gov.</li>
              <li>NIDA. Drug Abuse Screening Test (DAST-10). Referenced in NIDA research protocol documentation.</li>
              <li>American Society of Addiction Medicine (ASAM). The ASAM Criteria: Treatment Criteria for Addictive, Substance-Related, and Co-Occurring Conditions, 4th Edition. Chevy Chase, MD: ASAM, 2023.</li>
              <li>American Psychiatric Association. Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR). Washington, DC: APA, 2022.</li>
              <li>SAMHSA. Substance Use Screening and Assessment Instruments Database. Available at samhsa.gov.</li>
            </ul>
          </section>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Not sure which screener fits your situation?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private tools for alcohol, drugs, and adolescent substance use screening.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/crafft-substance-screening" className="btn-primary text-sm">CRAFFT (Adolescents)</Link>
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
              <Link href="/crafft-substance-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">CRAFFT Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Adolescent substance use screening, ages 12 to 21</p>
              </Link>
              <Link href="/who-assist-substance-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">WHO ASSIST</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Multi-substance screening across nine substance categories</p>
              </Link>
              <Link href="/audit-c-alcohol-screen" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">AUDIT-C Alcohol Screen</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Quick 3-question alcohol consumption screener</p>
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
              <Link href="/blog/sud-risk-screening-tools-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Which Screening Tool Fits Which Substance?</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Compare AUDIT, DAST, CRAFFT, ASSIST, and ORT</p>
              </Link>
              <Link href="/blog/drug-screening-teens-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Substance Use Screening for Teens</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">What parents and adolescents should know</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
