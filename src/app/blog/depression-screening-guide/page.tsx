import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/depression-screening-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "depression-screening-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/depression-screening-guide",
  title: "Depression Screening Guide: PHQ-9 & Next Steps",
  description:
    "Complete depression screening guide — how the PHQ-9 works, USPSTF recommendations, and evidence-based next steps. Free resource.",
  keywords: [
    "depression screening", "PHQ-9 assessment", "USPSTF depression guidelines", "clinical depression",
    "mental health screening", "depression symptoms", "suicide prevention resources", "mental health assessment",
    "depression treatment options", "psychotherapy for depression", "antidepressant medication guide",
    "988 suicide lifeline", "SAMHSA helpline", "depression diagnosis process", "mental health resources",
    "PHQ-9 scoring", "depression screening tools"
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  { 
    question: "Is a positive depression screening result the same as a depression diagnosis?", 
    answer: "No. Screening tools like the PHQ-9 identify possible depressive symptoms that warrant further evaluation. A clinical diagnosis requires comprehensive assessment by a qualified professional, including consideration of symptom duration, functional impact, medical history, and ruling out other potential causes of symptoms."
  },
  { 
    question: "What should I do if my PHQ-9 score suggests moderate or severe depression?", 
    answer: "Schedule an appointment with your healthcare provider to discuss your results. Bring your score and be prepared to describe how symptoms affect your daily life. Your provider can conduct a thorough evaluation, discuss treatment options including therapy, medication, or both, and help develop a plan that fits your needs and preferences."
  },
  { 
    question: "How accurate is the PHQ-9 for detecting depression?", 
    answer: "The PHQ-9 shows approximately 88% sensitivity and 88% specificity for detecting major depression in primary care settings. However, no screening tool is perfect. Results should always be interpreted in context by a healthcare professional who can consider cultural factors, medical conditions, medications, and individual circumstances."
  },
  { 
    question: "Can lifestyle changes really help with depression?", 
    answer: "Yes, evidence supports several lifestyle interventions for depression. Regular exercise, sleep optimization, balanced nutrition, and mindfulness practices all show benefits in research. For mild depression, these approaches may be sufficient. For moderate to severe depression, they work best alongside professional treatment rather than as standalone interventions."
  },
  { 
    question: "How long does it take for depression treatment to work?", 
    answer: "Timelines vary by treatment approach. Psychotherapy often shows benefits within 4\u20138 weeks. Antidepressants typically take 2\u20134 weeks to begin working and 6\u20138 weeks for full effect. Most people experience gradual improvement rather than sudden recovery. Continue treatment even if progress seems slow, and communicate regularly with your provider."
  },
  { 
    question: "What&apos;s the difference between sadness and clinical depression?", 
    answer: "Sadness is a normal emotional response that typically fluctuates with circumstances. Clinical depression involves persistent symptoms lasting two weeks or more that significantly impair daily functioning, often without obvious triggers. Depression includes physical symptoms like sleep and appetite changes, fatigue, and cognitive symptoms like difficulty concentrating and feelings of worthlessness."
  },
];

export default function DepressionScreeningGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Depression Screening: Understanding PHQ-9, USPSTF Guidelines & When to Seek Help", description: "A comprehensive guide to depression screening, including how screening tools work, evidence-based treatment options, and crisis resources.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Depression Screening Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Clinical Guide</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">12 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Depression Screening: Understanding PHQ-9, USPSTF Guidelines & When to Seek Help
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Depression touches roughly 21 million American adults each year, yet diagnosis often comes years after symptoms begin. This guide explores depression screening through a clinical lens—explaining how screening tools function, what results might suggest, and practical steps toward improved mental health based on current evidence.
          </p>
          <div className="mt-6">
            <Link href="/phq-9-depression-test" className="btn-primary text-sm">
              Take the PHQ-9 Self-Check →
            </Link>
          </div>
        </header>

        <div className="prose-mh space-y-8">
          <section>
            <h2>Understanding Depression: More Than Just Sadness</h2>
            <p>
              Depression touches lives in profound ways, affecting roughly <strong>280 million people worldwide</strong> according to World Health Organization estimates. In the United States alone, <strong>major depressive disorder impacts about 21 million adults each year</strong>, making it one of our most common mental health conditions. Yet despite its prevalence, depression often remains hidden—only about <strong>one in three people who need treatment actually receive it</strong>.
            </p>
            
            <h3>Clinical Depression vs. Normal Sadness</h3>
            <p>
              It&apos;s easy to confuse clinical depression with everyday sadness, but they&apos;re fundamentally different experiences:
            </p>

            <div className="not-prose my-6 space-y-4">
              <div className="p-4 card">
                <h4 className="font-semibold text-sage-700 dark:text-sage-400 mb-2">Normal Sadness/Grief:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Typically tied to specific events or losses</li>
                  <li>• Fluctuates in intensity</li>
                  <li>• Usually improves with time and support</li>
                  <li>• Doesn&apos;t typically impair overall functioning</li>
                </ul>
              </div>
              
              <div className="p-4 card">
                <h4 className="font-semibold text-sage-700 dark:text-sage-400 mb-2">Clinical Depression:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• May occur without obvious triggers</li>
                  <li>• Persistent and pervasive</li>
                  <li>• Often worsens without treatment</li>
                  <li>• Significantly impairs daily functioning</li>
                </ul>
              </div>
            </div>
            
            <h3>The Science Behind Depression</h3>
            <p>
              Depression isn&apos;t just &quot;feeling sad&quot;—it involves tangible biological changes:
            </p>
            <ul>
              <li><strong>Chemical shifts</strong> in neurotransmitters like serotonin and dopamine</li>
              <li><strong>Inflammation markers</strong> that can influence brain function</li>
              <li><strong>Physical changes</strong> in brain regions that handle mood and thinking</li>
              <li><strong>Genetic factors</strong> that may increase susceptibility</li>
            </ul>
            <p>
              Recent research in <em>JAMA Psychiatry</em> confirms what many have long suspected: depression involves <strong>real, measurable changes in brain structure and function</strong>. This understanding helps validate depression as a medical condition deserving proper care, not just willpower.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>USPSTF Depression Screening Recommendations: What You Need to Know</h2>
            
            <h3>Current Guidelines</h3>
            <p>
              The U.S. Preventive Services Task Force (USPSTF) now recommends <strong>routine depression screening for all adults 18 and older</strong>, provided there are systems to ensure proper diagnosis, treatment, and follow-up. This <strong>Grade B recommendation</strong> means:
            </p>
            <ul>
              <li><strong>Clear benefits</strong> outweigh any risks</li>
              <li><strong>Solid evidence</strong> supports screening effectiveness</li>
              <li><strong>Strong encouragement</strong> for healthcare providers to implement screening</li>
            </ul>
            
            <h3>Screening Populations</h3>
            <ul>
              <li><strong>General adult population</strong> (18+ years)</li>
              <li><strong>Adolescents aged 12-17</strong> (separate recommendation)</li>
              <li><strong>Pregnant and postpartum individuals</strong> (critical population)</li>
              <li><strong>Older adults</strong> with particular attention to somatic symptoms</li>
            </ul>
            
            <h3>Screening Frequency</h3>
            <ul>
              <li><strong>Annual screening</strong> for general adult population</li>
              <li><strong>More frequent screening</strong> for high-risk individuals</li>
              <li><strong>Perinatal screening</strong> during pregnancy and postpartum period</li>
              <li><strong>Clinical judgment</strong> guides timing between screenings</li>
            </ul>
            
            <h3>Why Routine Screening Makes a Difference</h3>
            <p>
              Before routine screening became common:
            </p>
            <ul>
              <li><strong>Half to two-thirds of depression cases</strong> slipped through unnoticed in primary care</li>
              <li>People waited <strong>6-8 years on average</strong> before getting treatment</li>
              <li>Untreated depression caused significant <strong>daily struggles</strong> during those years</li>
              <li>Risks of <strong>suicide and substance use</strong> increased without intervention</li>
            </ul>
            <p>
              Routine screening helps catch depression earlier, giving people a chance to address symptoms before they become overwhelming.
            </p>
          </section>

          <section>
            <h2>The PHQ-9: Understanding the Gold Standard Depression Screening Tool</h2>
            
            <h3>Development and Validation</h3>
            <p>
              The Patient Health Questionnaire-9 (PHQ-9) emerged from the PRIME-MD study, originally published in the <em>Journal of the American Medical Association</em> in 1999. Its development involved:
            </p>
            <ul>
              <li><strong>Extensive validation</strong> across diverse populations</li>
              <li><strong>High sensitivity (88%) and specificity (88%)</strong> for detecting major depression</li>
              <li><strong>Cross-cultural validation</strong> in multiple languages and settings</li>
              <li><strong>Integration into</strong> electronic health records worldwide</li>
            </ul>
            
            <h3>The Nine Core Symptoms</h3>
            <p>
              The PHQ-9 assesses the nine diagnostic criteria for major depressive disorder from the DSM-5:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Anhedonia:</strong> Little interest or pleasure in doing things</li>
              <li><strong>Depressed mood:</strong> Feeling down, depressed, or hopeless</li>
              <li><strong>Sleep disturbances:</strong> Trouble falling/staying asleep, or sleeping too much</li>
              <li><strong>Fatigue:</strong> Feeling tired or having little energy</li>
              <li><strong>Appetite changes:</strong> Poor appetite or overeating</li>
              <li><strong>Worthlessness/guilt:</strong> Feeling bad about yourself or like a failure</li>
              <li><strong>Concentration problems:</strong> Trouble concentrating on things</li>
              <li><strong>Psychomotor changes:</strong> Moving/speaking slowly or being fidgety/restless</li>
              <li><strong>Suicidal thoughts:</strong> Thoughts of being better off dead or hurting yourself</li>
            </ol>
            
            <h3>Scoring and Interpretation</h3>
            <p>
              Each item scores 0-3 based on frequency over the past two weeks:
            </p>
            <ul>
              <li><strong>0:</strong> Not at all</li>
              <li><strong>1:</strong> Several days</li>
              <li><strong>2:</strong> More than half the days</li>
              <li><strong>3:</strong> Nearly every day</li>
            </ul>
            
            <div className="not-prose my-6 space-y-2">
              {[
                { range: "0-4", level: "Minimal or no depression", note: "Few or no depressive symptoms reported" },
                { range: "5-9", level: "Mild depression", note: "May indicate subthreshold depression; monitoring or brief intervention may help" },
                { range: "10-14", level: "Moderate depression", note: "Suggests clinically significant depression; warrants further evaluation" },
                { range: "15-19", level: "Moderately severe depression", note: "Indicates substantial impairment; requires comprehensive evaluation" },
                { range: "20-27", level: "Severe depression", note: "Suggests need for immediate evaluation and treatment" },
              ].map((r) => (
                <div key={r.range} className="flex items-start gap-3 p-3 card">
                  <span className="text-sm font-mono font-bold text-sage-600 dark:text-sage-400 w-12 flex-shrink-0">{r.range}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-neutral-900 dark:text-neutral-100">{r.level}</div>
                    <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">{r.note}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <h3>Clinical Significance of Scores</h3>
            <p>
              <strong>Mild Range (5-9):</strong> May indicate subthreshold depression. Suggests monitoring and possible brief intervention. Often responsive to lifestyle changes and support.
            </p>
            <p>
              <strong>Moderate Range (10-14):</strong> Suggests clinically significant depression. Warrants further evaluation by healthcare provider. May benefit from psychotherapy and/or medication.
            </p>
            <p>
              <strong>Moderately Severe to Severe (15-27):</strong> Indicates substantial impairment. Requires comprehensive evaluation. Strongly suggests need for treatment.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Evidence-Based Treatment Options for Depression</h2>
            
            <h3>Psychotherapy Approaches</h3>
            
            <div className="not-prose my-6 space-y-4">
              <div className="p-4 card">
                <h4 className="font-semibold text-sage-700 dark:text-sage-400 mb-2">Cognitive Behavioral Therapy (CBT)</h4>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>Effectiveness:</strong> 50-75% response rate in clinical trials</li>
                  <li>• <strong>Duration:</strong> Typically 12-20 sessions</li>
                  <li>• <strong>Mechanism:</strong> Identifies and modifies negative thought patterns</li>
                  <li>• <strong>Evidence:</strong> Multiple meta-analyses confirm efficacy</li>
                </ul>
              </div>
              
              <div className="p-4 card">
                <h4 className="font-semibold text-sage-700 dark:text-sage-400 mb-2">Interpersonal Therapy (IPT)</h4>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>Focus:</strong> Relationship patterns and social functioning</li>
                  <li>• <strong>Particularly effective:</strong> For depression related to grief, role transitions, or interpersonal disputes</li>
                  <li>• <strong>Duration:</strong> 12-16 sessions typically</li>
                </ul>
              </div>
              
              <div className="p-4 card">
                <h4 className="font-semibold text-sage-700 dark:text-sage-400 mb-2">Behavioral Activation</h4>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>Simple yet powerful:</strong> Increases engagement in rewarding activities</li>
                  <li>• <strong>Particularly helpful:</strong> For severe depression with low motivation</li>
                  <li>• <strong>Evidence:</strong> Comparable efficacy to full CBT in some studies</li>
                </ul>
              </div>
            </div>
            
            <h3>Pharmacological Treatments</h3>
            
            <div className="not-prose my-6 space-y-4">
              <div className="p-4 card">
                <h4 className="font-semibold text-sage-700 dark:text-sage-400 mb-2">Selective Serotonin Reuptake Inhibitors (SSRIs)</h4>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>First-line treatment</strong> for moderate to severe depression</li>
                  <li>• <strong>Examples:</strong> Sertraline, escitalopram, fluoxetine</li>
                  <li>• <strong>Onset:</strong> 2-4 weeks for initial response, 6-8 weeks for full effect</li>
                  <li>• <strong>Considerations:</strong> Side effect profile varies by medication</li>
                </ul>
              </div>
              
              <div className="p-4 card">
                <h4 className="font-semibold text-sage-700 dark:text-sage-400 mb-2">Serotonin-Norepinephrine Reuptake Inhibitors (SNRIs)</h4>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>Alternative first-line</strong> option</li>
                  <li>• <strong>Examples:</strong> Venlafaxine, duloxetine</li>
                  <li>• <strong>May be preferred:</strong> When comorbid pain conditions exist</li>
                </ul>
              </div>
              
              <div className="p-4 card">
                <h4 className="font-semibold text-sage-700 dark:text-sage-400 mb-2">Atypical Antidepressants</h4>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>Different mechanisms</strong> than SSRIs/SNRIs</li>
                  <li>• <strong>Examples:</strong> Bupropion, mirtazapine</li>
                  <li>• <strong>Considerations:</strong> Specific side effect profiles guide selection</li>
                </ul>
              </div>
            </div>
            
            <h3>Treatment Selection Considerations</h3>
            <p>
              Choosing between psychotherapy, medication, or combination treatment depends on:
            </p>
            <ul>
              <li><strong>Severity of symptoms</strong></li>
              <li><strong>Patient preference</strong></li>
              <li><strong>Previous treatment history</strong></li>
              <li><strong>Comorbid medical conditions</strong></li>
              <li><strong>Cost and access considerations</strong></li>
            </ul>
            <p>
              A 2022 network meta-analysis in <em>The Lancet</em> concluded that <strong>combination treatment (psychotherapy + medication) shows superior outcomes for moderate to severe depression</strong>.
            </p>
          </section>

          <section>
            <h2>When to Seek Professional Help: Red Flags and Urgent Concerns</h2>
            
            <h3>Immediate Crisis Situations</h3>
            <p>
              <strong>Seek emergency care if you experience:</strong>
            </p>
            <ul>
              <li>Active suicidal thoughts with intent or plan</li>
              <li>Thoughts of harming others</li>
              <li>Severe inability to care for basic needs</li>
              <li>Psychotic symptoms (hallucinations, delusions)</li>
            </ul>
            
            <h3>Urgent Professional Evaluation Recommended For:</h3>
            <ul>
              <li>PHQ-9 score of 15 or higher</li>
              <li>Significant functional impairment</li>
              <li>Symptoms lasting more than two weeks</li>
              <li>Substance use to cope with symptoms</li>
              <li>History of suicide attempts</li>
            </ul>
            
            <h3>The Role of Primary Care Providers</h3>
            <p>
              Most depression screening and initial management occurs in primary care:
            </p>
            <ul>
              <li><strong>Screening implementation</strong> during routine visits</li>
              <li><strong>Initial assessment</strong> and diagnosis</li>
              <li><strong>Treatment initiation</strong> (medication and/or referral)</li>
              <li><strong>Monitoring and follow-up</strong></li>
            </ul>
            
            <h3>When to Consider Specialty Mental Health Care</h3>
            <p>
              Referral to psychiatry or specialized psychotherapy may be indicated when:
            </p>
            <ul>
              <li><strong>Treatment-resistant depression</strong> (failed 2+ adequate trials)</li>
              <li><strong>Complex comorbid conditions</strong> (bipolar disorder, personality disorders)</li>
              <li><strong>Severe symptoms</strong> requiring intensive treatment</li>
              <li><strong>Specialized therapies</strong> needed (ECT, TMS, ketamine)</li>
            </ul>
          </section>

          <section>
            <h2>Conclusion: Taking the Next Steps</h2>
            <p>
              Depression screening represents a powerful tool for early identification and intervention, but it&apos;s only the beginning of the journey toward mental wellness. If your screening results suggest possible depression:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Schedule an appointment</strong> with your healthcare provider for comprehensive evaluation</li>
              <li><strong>Discuss all treatment options</strong> including therapy, medication, and lifestyle changes</li>
              <li><strong>Create a support network</strong> of trusted friends, family, or support groups</li>
              <li><strong>Develop a self-care plan</strong> incorporating evidence-based strategies</li>
              <li><strong>Monitor your progress</strong> and adjust your approach as needed</li>
            </ol>
            <p>
              Remember that depression is a treatable medical condition, not a personal failing or weakness. With appropriate care, <strong>70-80% of people with depression experience significant improvement</strong> in their symptoms.
            </p>
          </section>

          <section className="p-6 card bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
            <h3 className="text-amber-800 dark:text-amber-400 font-semibold mb-3">Clinical Disclaimer</h3>
            <p className="text-sm text-amber-700 dark:text-amber-300">
              <strong>Important:</strong> This article provides educational information about depression screening and is not a substitute for professional medical advice, diagnosis, or treatment. Depression screening tools like the PHQ-9 are screening instruments only—they cannot provide a diagnosis. Only qualified healthcare professionals can diagnose depression and recommend appropriate treatment.
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-amber-700 dark:text-amber-300">
                <strong>If you are experiencing suicidal thoughts, please seek immediate help:</strong>
              </p>
              <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 pl-5">
                <li>• <strong>Call or text 988</strong> for the Suicide & Crisis Lifeline (available 24/7)</li>
                <li>• <strong>Text HOME to 741741</strong> for the Crisis Text Line (free, 24/7)</li>
                <li>• <strong>Call 911</strong> or go to the nearest emergency room</li>
                <li>• <strong>Contact SAMHSA:</strong> 1-800-662-4357 (24/7 treatment referral and information)</li>
              </ul>
            </div>
            <p className="text-sm text-amber-700 dark:text-amber-300 mt-4">
              Screening results indicating possible depression should be discussed with a healthcare provider for proper evaluation and treatment planning. Treatment decisions should be made collaboratively with qualified professionals based on individual circumstances.
            </p>
          </section>

          {/* Author Bio — standardized component for E-E-A-T consistency */}
          <AuthorBio publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />

          <section>
            <h3>References and Further Reading</h3>
            <ol className="text-sm space-y-2 text-neutral-500 dark:text-neutral-400">
              <li>1. U.S. Preventive Services Task Force. (2023). Screening for Depression and Suicide Risk in Adults. <em>JAMA</em>, 329(23), 2057-2067.</li>
              <li>2. Kroenke, K., Spitzer, R. L., & Williams, J. B. (2001). The PHQ-9: Validity of a brief depression severity measure. <em>Journal of General Internal Medicine</em>, 16(9), 606-613.</li>
              <li>3. National Institute of Mental Health. (2023). Major Depression. Retrieved from https://www.nimh.nih.gov/health/statistics/major-depression</li>
              <li>4. Cuijpers, P., et al. (2021). The effects of psychotherapies for depression on response, remission, and recovery: A meta-analysis. <em>World Psychiatry</em>, 20(2), 283-293.</li>
              <li>5. Cipriani, A., et al. (2018). Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. <em>The Lancet</em>, 391(10128), 1357-1366.</li>
              <li>6. World Health Organization. (2023). Depression Fact Sheet. Retrieved from https://www.who.int/news-room/fact-sheets/detail/depression</li>
            </ol>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4">
              <em>Note: This article was reviewed for clinical accuracy and updated with current evidence-based recommendations.</em>
            </p>
          </section>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Take a free depression screening</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">The PHQ-9 takes under 3 minutes. Free, private, and your answers never leave your browser.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/phq-9-depression-test" className="btn-primary text-sm">Take the PHQ-9 Self-Check</Link>
              <Link href="/dass-21-depression-anxiety-stress" className="btn-primary text-sm">DASS-21 Screening</Link>
            </div>
          </div>

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
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Standard validated depression screening</p>
              </Link>
              <Link href="/dass-21-depression-anxiety-stress" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">DASS-21 Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Depression, anxiety, and stress assessment</p>
              </Link>
              <Link href="/gad-7-anxiety-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Anxiety Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Generalized anxiety screening</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}