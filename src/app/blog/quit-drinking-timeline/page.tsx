import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/quit-drinking-timeline`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "quit-drinking-timeline")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/quit-drinking-timeline",
  title: "What Happens When You Stop Drinking: A Timeline",
  description:
    "Hour-by-hour and week-by-week timeline of what happens to your body after quitting alcohol. Includes critical safety warnings about withdrawal.",
  keywords: [
    "what happens when you quit drinking",
    "quit drinking timeline",
    "alcohol recovery timeline",
    "stop drinking benefits",
    "alcohol withdrawal timeline",
    "body after quitting alcohol",
    "liver recovery after alcohol",
    "alcohol detox timeline",
    "benefits of sobriety timeline",
    "alcohol withdrawal dangers",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Is it dangerous to quit drinking suddenly?",
    answer:
      "It can be, especially if you have been drinking heavily or daily for an extended period. Alcohol is one of the few substances where withdrawal can be life-threatening, with seizures and delirium tremens possible in severe cases. If you drink heavily, consult a healthcare provider before stopping. Medical supervision makes the process significantly safer.",
  },
  {
    question: "What is delirium tremens?",
    answer:
      "Delirium tremens (DTs) is a severe form of alcohol withdrawal typically beginning 48 to 72 hours after the last drink. Symptoms include confusion, rapid heartbeat, high blood pressure, fever, and hallucinations. DTs are a medical emergency that can be fatal without treatment, most common in people who drank heavily for years or experienced withdrawal before.",
  },
  {
    question: "How long until my liver recovers?",
    answer:
      "The liver begins healing relatively quickly. Liver fat may start decreasing within two weeks, with more significant reductions by one month. After three months, measurable improvements in liver function are often observed. Early-stage fatty liver disease is often fully reversible, while advanced scarring may not fully reverse. A healthcare provider can assess your liver health through blood tests.",
  },
  {
    question: "Will I lose weight if I stop drinking?",
    answer:
      "Many people experience weight loss after stopping alcohol, though results vary. Alcohol is calorie-dense at about 7 calories per gram, and someone drinking four beers daily may consume over 600 extra calories. Alcohol also increases appetite and reduces inhibitions around food choices. Most people notice gradual changes over weeks to months rather than immediate weight loss.",
  },
  {
    question: "How long does alcohol withdrawal last?",
    answer:
      "Acute withdrawal symptoms typically begin 6 to 24 hours after the last drink and may last 5 to 7 days. More severe symptoms peak around 48 to 72 hours. Some people experience post-acute withdrawal symptoms (PAWS), including mood swings, anxiety, and sleep disturbances, that persist for weeks or months. Severity depends on drinking history and overall health.",
  },
];

export default function QuitDrinkingTimelinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "What Happens When You Stop Drinking: A Timeline", description: "Hour-by-hour and week-by-week timeline of what happens to your body after quitting alcohol.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Quit Drinking Timeline", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What Happens When You Stop Drinking: A Timeline
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Your body begins recovering from alcohol faster than you might think. Here is an evidence-based timeline of what happens when you stop drinking — from the first 24 hours through your first full year. This guide also covers critical safety information about alcohol withdrawal that everyone considering sobriety should understand.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/health-recovery-timeline" className="btn-primary text-sm">Track Your Recovery Timeline</Link>
            <Link href="/audit-alcohol-test" className="btn-secondary text-sm">Take the AUDIT Screening</Link>
          </div>
        </header>

        <div className="prose-mh space-y-8">

          {/* ===== CRITICAL SAFETY WARNING ===== */}
          <section className="not-prose">
            <div className="rounded-xl border-2 border-red-400 dark:border-red-600 bg-red-50 dark:bg-red-950/30 p-6 sm:p-8">
              <div className="flex items-start gap-3 mb-4">
                <svg className="w-7 h-7 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <h2 className="font-serif text-xl font-bold text-red-700 dark:text-red-400 m-0">
                  Critical Safety Warning: Alcohol Withdrawal Can Be Life-Threatening
                </h2>
              </div>
              <div className="space-y-3 text-sm text-red-800 dark:text-red-300 leading-relaxed">
                <p>
                  <strong>Alcohol is one of the few substances where withdrawal alone can kill you.</strong> If you have been drinking heavily (multiple drinks daily) or for a prolonged period, do not stop cold turkey without medical supervision. Severe withdrawal can cause seizures, delirium tremens (DTs), dangerously high blood pressure, and cardiac complications.
                </p>
                <p>
                  <strong>Who needs medical detox:</strong> Anyone who drinks daily or near-daily, anyone who has experienced withdrawal symptoms before (shaking, sweating, anxiety when not drinking), anyone with a history of seizures, and anyone who has attempted to quit before and experienced severe symptoms.
                </p>
                <p>
                  <strong>Medication-assisted treatment (MAT)</strong> can make withdrawal safer and more manageable. Medications such as benzodiazepines, naltrexone, and acamprosate are evidence-based options that a healthcare provider can prescribe. MAT significantly reduces the risk of dangerous complications and improves long-term outcomes.
                </p>
                <p className="font-semibold">
                  If you or someone you know is experiencing alcohol withdrawal symptoms — tremors, confusion, rapid heart rate, hallucinations — call 911 or go to the nearest emergency room immediately.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="https://www.samhsa.gov/find-help/national-helpline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-red-100 dark:bg-red-900/40 px-4 py-2 text-sm font-semibold text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/60 transition-colors">
                  SAMHSA Helpline: 1-800-662-4357
                </a>
                <a href="tel:988" className="inline-flex items-center gap-1.5 rounded-lg bg-red-100 dark:bg-red-900/40 px-4 py-2 text-sm font-semibold text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/60 transition-colors">
                  988 Suicide &amp; Crisis Lifeline
                </a>
                <a href="sms:741741&body=HOME" className="inline-flex items-center gap-1.5 rounded-lg bg-red-100 dark:bg-red-900/40 px-4 py-2 text-sm font-semibold text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/60 transition-colors">
                  Crisis Text Line: Text HOME to 741741
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2>The First 24 Hours: The Body Begins to Adjust</h2>
            <p>
              Within hours of your last drink, your body starts recalibrating. Blood sugar levels, which alcohol disrupts, begin to normalize. Blood alcohol concentration drops to zero, and your liver shifts from metabolizing alcohol to its regular detoxification and metabolic functions.
            </p>
            <p>
              For light or moderate drinkers, this period may pass with minimal discomfort — perhaps mild restlessness or difficulty sleeping. For heavy drinkers, early withdrawal symptoms such as anxiety, tremors, sweating, and nausea may begin within 6 to 12 hours. This is when the body signals that it has become physically adapted to alcohol&apos;s presence.
            </p>
            <p>
              Your body is already working to restore balance. Hydration improves as alcohol&apos;s diuretic effect wears off, and your nervous system begins readjusting to functioning without alcohol&apos;s sedative influence.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Days 2 Through 3: The Acute Withdrawal Window</h2>
            <p>
              For people with significant alcohol dependence, this is the most medically critical period. Acute withdrawal symptoms typically peak around 48 to 72 hours after the last drink. This is when the risk of seizures and delirium tremens is highest.
            </p>
            <p>
              In a medically supervised setting, healthcare providers monitor vital signs, manage symptoms with medication when needed, and ensure safety throughout this window. This is why the safety warning above is so important — this period can be genuinely dangerous without professional support.
            </p>
            <p>
              For those without severe dependence, days two and three may involve disrupted sleep, irritability, mild anxiety, and physical discomfort. These symptoms, while unpleasant, are generally not dangerous and tend to improve steadily.
            </p>
          </section>

          <section>
            <h2>One Week: Sleep Quality Starts Improving</h2>
            <p>
              By the end of the first week, many people notice that their sleep is beginning to improve. While alcohol may seem like it helps you fall asleep, it actually disrupts sleep architecture — reducing REM sleep, increasing nighttime awakenings, and preventing the deep restorative sleep your body needs.
            </p>
            <p>
              Without alcohol interfering, your sleep cycles begin to normalize. You may start waking up feeling more rested, even if falling asleep initially feels harder. Digestion often improves as well, since alcohol irritates the stomach lining and disrupts nutrient absorption.
            </p>
            <p>
              Mentally, the fog begins to lift. Many people describe feeling more present and clear-headed, though mood swings and anxiety may still come and go as the brain continues to recalibrate its neurotransmitter balance.
            </p>
          </section>

          <section>
            <h2>Two Weeks: Liver Fat Begins to Decrease</h2>
            <p>
              Research published in medical journals, including studies referenced by the{" "}
              <a href="https://www.niaaa.nih.gov/" target="_blank" rel="noopener noreferrer">
                National Institute on Alcohol Abuse and Alcoholism (NIAAA)
              </a>
              , indicates that liver fat begins to decrease within as little as two weeks of abstinence. The liver is remarkably resilient — it is one of the few organs that can regenerate itself when given the chance.
            </p>
            <p>
              Blood pressure often begins to decrease during this period as well. Alcohol raises blood pressure both acutely and chronically, and two weeks without it gives the cardiovascular system a meaningful break.
            </p>
            <p>
              Stomach acid production normalizes, reducing symptoms of acid reflux and gastritis that heavy drinkers commonly experience. You may also notice reduced facial puffiness as the body releases excess fluid that alcohol caused it to retain.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>One Month: Visible Changes Emerge</h2>
            <p>
              At one month, many of the changes happening internally become visible externally. Skin often appears clearer and more hydrated because alcohol dehydrates the body and dilates blood vessels, contributing to redness and uneven skin tone.
            </p>
            <p>
              Liver fat reduction becomes more significant at this point. Studies on &quot;Dry January&quot; participants have shown measurable decreases in liver fat, improved insulin resistance, and lower blood pressure after just one month of abstinence — even in people who returned to moderate drinking afterward.
            </p>
            <p>
              Energy levels typically improve noticeably. Without alcohol disrupting sleep, depleting B vitamins, and taxing the liver, many people report having more sustained energy throughout the day. Exercise feels easier, and motivation often increases.
            </p>
          </section>

          <section>
            <h2>Three Months: Measurable Liver Improvement</h2>
            <p>
              At the three-month mark, lab work often reflects meaningful improvements. Liver enzymes (ALT, AST, GGT) that may have been elevated due to alcohol-related liver stress frequently return toward normal ranges. For people with early-stage fatty liver disease, imaging may show significant improvement.
            </p>
            <p>
              Cognitive function continues to sharpen. Research suggests that alcohol-related cognitive impairment — including problems with memory, attention, and decision-making — shows measurable improvement over the first three months of sobriety, with further gains continuing beyond that.
            </p>
            <p>
              The immune system strengthens as well. Alcohol suppresses immune function, and after three months, the body&apos;s ability to fight infections and heal from illness may be noticeably improved.
            </p>
          </section>

          <section>
            <h2>Six Months: Reduced Cancer Risk Begins</h2>
            <p>
              Alcohol is classified as a Group 1 carcinogen by the World Health Organization, meaning there is sufficient evidence that it causes cancer in humans. It is linked to cancers of the mouth, throat, esophagus, liver, breast, and colon.
            </p>
            <p>
              While the reduction in cancer risk is gradual, research suggests that the body begins to benefit from reduced exposure to acetaldehyde — the toxic byproduct of alcohol metabolism — within months of stopping. The longer you remain alcohol-free, the more your cancer risk decreases, though it may take years to return to the baseline risk of someone who has never been a heavy drinker.
            </p>
            <p>
              At six months, many people also report that their weight has stabilized, their relationship with food has improved, and they feel physically stronger and more resilient.
            </p>
          </section>

          <section>
            <h2>One Year: Substantial Health Recovery</h2>
            <p>
              After a full year without alcohol, liver inflammation is often substantially reduced. For many people with alcohol-related fatty liver disease who have not progressed to cirrhosis, the liver may have recovered to near-normal function.
            </p>
            <p>
              Cardiovascular risk decreases as well — blood pressure, triglyceride levels, and overall heart health tend to improve significantly. The risk of stroke and heart disease begins to decline.
            </p>
            <p>
              The one-year mark is also significant psychologically. You have developed a full year of coping strategies, navigated holidays, social situations, and stressful periods without alcohol, and built a foundation of evidence that life without alcohol is not just possible — it may be better in ways you didn&apos;t anticipate.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <section>
            <h2>Mental Health Improvements Timeline</h2>
            <p>
              The mental health benefits of stopping alcohol deserve their own attention, because they are often the most life-changing improvements people experience.
            </p>
            <p>
              In the first one to two weeks, anxiety levels often initially increase before beginning to decrease. This is because alcohol suppresses the nervous system, and the brain needs time to recalibrate. By weeks three and four, many people notice that their baseline anxiety is lower than it was while drinking — a counterintuitive finding for those who used alcohol to manage anxiety.
            </p>
            <p>
              Depression symptoms frequently improve within one to three months. Research indicates that a significant percentage of alcohol-related depression resolves on its own once alcohol is removed, though pre-existing depression may require separate treatment.
            </p>
            <p>
              Over three to six months, emotional regulation improves. Mood swings become less intense, irritability decreases, and the ability to handle stress without reaching for a drink strengthens. Many people describe feeling emotions more fully — both positive and negative — which can be challenging at first but ultimately leads to a richer emotional life.
            </p>
          </section>

          <section>
            <h2>Relationship and Life Improvements</h2>
            <p>
              Beyond the physical and mental health changes, stopping alcohol often creates a ripple effect across all areas of life. Relationships frequently improve as communication becomes clearer, conflicts decrease, and trust rebuilds over time.
            </p>
            <p>
              Financial improvements can be substantial. The cost of alcohol itself, plus associated spending (dining out, ride-shares, impulse purchases while intoxicated), adds up quickly. Many people are surprised by how much money they save.
            </p>
            <p>
              Productivity and professional performance often improve as cognitive function sharpens, energy increases, and mornings become consistently reliable. Hobbies and interests that may have been neglected while drinking often resurface, providing new sources of meaning and enjoyment. Tracking your progress with a <Link href="/sobriety-calculator">sobriety calculator</Link> can help you stay motivated by making these gains visible.
            </p>
          </section>

          <section>
            <h2>Track Your Progress with the Health Recovery Timeline</h2>
            <p>
              Our{" "}
              <Link href="/health-recovery-timeline">Health Recovery Timeline tool</Link>{" "}
              helps you visualize what is happening in your body based on how long it has been since your last drink. Enter your quit date and see a personalized timeline of health milestones you have reached and what is coming next.
            </p>
            <p>
              If you are curious about where your current drinking patterns fall on the risk spectrum, our{" "}
              <Link href="/audit-alcohol-test">AUDIT alcohol screening tool</Link>{" "}
              is a clinically validated, 10-question assessment used by healthcare providers worldwide. It takes about three minutes, is completely private, and your answers never leave your browser.
            </p>
            <p>
              For more information about alcohol use, treatment options, and support services, the{" "}
              <a href="https://www.samhsa.gov/find-help/national-helpline" target="_blank" rel="noopener noreferrer">
                SAMHSA National Helpline (1-800-662-4357)
              </a>{" "}
              provides free, confidential, 24/7 referrals and information. The{" "}
              <a href="https://www.niaaa.nih.gov/" target="_blank" rel="noopener noreferrer">
                NIAAA
              </a>{" "}
              also offers extensive educational resources about alcohol&apos;s effects on health.
            </p>
          </section>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">See Your Personal Recovery Timeline</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Enter your quit date and visualize your body&apos;s healing milestones. Free, private, and your data never leaves your browser.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/health-recovery-timeline" className="btn-primary text-sm">Health Recovery Timeline</Link>
              <Link href="/audit-alcohol-test" className="btn-secondary text-sm">AUDIT Alcohol Screening</Link>
            </div>
          </div>

          {/* Clinical Disclaimer */}
          <div className="card p-5 bg-neutral-50 dark:bg-neutral-900/50 border-neutral-200 dark:border-neutral-800 not-prose">
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              <strong>Clinical Disclaimer:</strong> This article is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. The information presented here describes general patterns observed in research and may not reflect your individual experience. This content is not a screening tool and does not provide a diagnosis. If you are concerned about your alcohol use or experiencing withdrawal symptoms, please contact a healthcare provider immediately. In a crisis, call the{" "}
              <strong>988 Suicide and Crisis Lifeline (call or text 988)</strong> or the{" "}
              <strong>SAMHSA National Helpline at 1-800-662-4357</strong> (free, confidential, 24/7). All information is processed in your browser — we do not collect or store any personal data.
            </p>
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
                <div className="px-4 pb-4"><p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{faq.answer}</p></div>
              </details>
            ))}
          </section>

          {/* Related Tools */}
          <section className="not-prose mt-10">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/health-recovery-timeline" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Health Recovery Timeline</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Visualize your body&apos;s healing milestones after quitting</p>
              </Link>
              <Link href="/audit-alcohol-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">AUDIT Alcohol Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">WHO-developed 10-question alcohol risk assessment</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/audit-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">AUDIT Screening Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">How the AUDIT works and what the risk zones mean</p>
              </Link>
              <Link href="/blog/stages-of-change-recovery" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Stages of Change in Recovery</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understanding readiness for change in substance use recovery</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
