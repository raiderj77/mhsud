import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/ptsd-screening-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "ptsd-screening-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/ptsd-screening-guide",
  title: "PTSD Screening: When and Why to Get Tested",
  description:
    "Learn when to get screened for PTSD, how the PCL-5 and PC-PTSD-5 work, and what different scores mean. Evidence-based guide.",
  keywords: [
    "PTSD screening test", "PCL-5 screening", "PC-PTSD-5 screening",
    "PTSD symptoms checklist", "when to get screened for PTSD",
    "PTSD assessment", "PTSD score meaning", "PTSD screening tool",
    "post traumatic stress screening", "PTSD self check",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "When should I get screened for PTSD?",
    answer: "You should consider screening if you have experienced a traumatic event and are still having distressing symptoms — such as flashbacks, nightmares, emotional numbness, or hypervigilance — that last longer than one month and interfere with your daily life. You do not need to wait for symptoms to become severe. Early screening can help identify concerns before they worsen. Primary care providers, mental health professionals, and validated online tools like the PCL-5 and PC-PTSD-5 can all be starting points.",
  },
  {
    question: "Can PTSD develop years later?",
    answer: "Yes. While PTSD symptoms typically begin within three months of a traumatic event, some people experience what is called delayed-onset PTSD, where symptoms first appear six months or even years after the trauma. A new stressor, a life transition, or another traumatic event can trigger symptoms related to an earlier experience. This is one reason screening remains valuable even if the traumatic event happened long ago.",
  },
  {
    question: "What's the difference between PCL-5 and PC-PTSD-5?",
    answer: "The PC-PTSD-5 is a brief 5-item screening tool designed for quick initial identification — it asks yes/no questions and uses a cutoff score of 3 to flag individuals who may benefit from further evaluation. The PCL-5 is a more comprehensive 20-item self-report measure that assesses each of the 20 DSM-5 PTSD symptoms on a severity scale of 0-4, producing a total score from 0-80. A score of 33 or higher on the PCL-5 may indicate clinically significant PTSD symptoms. The PC-PTSD-5 is a quick screen; the PCL-5 provides more detail.",
  },
  {
    question: "Is PTSD treatment effective?",
    answer: "Yes. PTSD is one of the most treatable mental health conditions. Evidence-based therapies such as Cognitive Processing Therapy (CPT), Prolonged Exposure (PE), and Eye Movement Desensitization and Reprocessing (EMDR) have strong research support. Studies show that many people experience significant improvement within 8-16 sessions. Medications, particularly certain antidepressants, can also help manage symptoms. The VA and the American Psychological Association both recommend these approaches as first-line treatments.",
  },
  {
    question: "Can PTSD go away on its own?",
    answer: "Some people who develop PTSD symptoms after a traumatic event do experience natural recovery, particularly in the first few months. However, when symptoms persist beyond three months, they are less likely to resolve without professional support. Untreated PTSD can become chronic and may worsen over time, potentially leading to co-occurring conditions like depression, substance use, or relationship difficulties. Screening and early intervention significantly improve long-term outcomes.",
  },
];

export default function PTSDScreeningGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "PTSD Screening: When and Why to Get Tested", description: "Learn when to get screened for PTSD, how the PCL-5 and PC-PTSD-5 work, and what different scores mean.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "PTSD Screening Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">9 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            PTSD Screening: When and Why to Get Tested
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Post-traumatic stress disorder affects millions of people each year, but many go unscreened. Here&apos;s what PTSD screening involves, who should consider it, and what to expect from validated tools like the PCL-5 and PC-PTSD-5.
          </p>
          <div className="mt-6">
            <Link href="/pcl-5-ptsd-screening" className="btn-primary text-sm">Take the PCL-5 Self-Check &rarr;</Link>
          </div>
        </header>

        <div className="prose-mh space-y-8">
          <section>
            <h2>What is PTSD?</h2>
            <p>
              Post-traumatic stress disorder (PTSD) is a mental health condition that can develop after experiencing or witnessing a traumatic event. According to the DSM-5 (the Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition), PTSD involves four clusters of symptoms that persist for more than one month and cause significant distress or impairment in daily functioning.
            </p>
            <p>
              The DSM-5 criteria require exposure to actual or threatened death, serious injury, or sexual violence — either directly, by witnessing it, by learning about it happening to a close friend or family member, or through repeated professional exposure to traumatic details. PTSD is not a sign of weakness. It is a recognized clinical condition with well-established, evidence-based screening tools and treatments.
            </p>
            <p>
              The <a href="https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd" target="_blank" rel="noopener noreferrer">National Institute of Mental Health (NIMH)</a> estimates that about 6% of the U.S. population will experience PTSD at some point in their lives. Women are approximately twice as likely as men to develop the condition.
            </p>
          </section>

          <section>
            <h2>Who is at risk for PTSD?</h2>
            <p>
              Anyone who has experienced or witnessed a traumatic event can develop PTSD, but certain factors may increase risk:
            </p>
            <ul>
              <li><strong>Direct exposure</strong> — experiencing the traumatic event firsthand</li>
              <li><strong>Severity and duration</strong> — more intense or prolonged trauma increases risk</li>
              <li><strong>Previous trauma</strong> — a history of prior traumatic experiences</li>
              <li><strong>Lack of social support</strong> — limited support systems after the event</li>
              <li><strong>Co-occurring conditions</strong> — existing anxiety, depression, or substance use</li>
              <li><strong>Family history</strong> — a family history of mental health conditions</li>
            </ul>
            <p>
              It is important to understand that experiencing trauma does not mean someone will develop PTSD. Most people who experience traumatic events do not develop the condition. Screening helps identify those whose symptoms may warrant further evaluation.
            </p>
          </section>

          <section>
            <h2>Types of trauma associated with PTSD</h2>
            <p>
              PTSD can result from many types of traumatic experiences. Some of the most commonly associated include:
            </p>
            <ul>
              <li><strong>Combat exposure</strong> — military personnel and veterans who have experienced combat situations</li>
              <li><strong>Sexual assault</strong> — one of the strongest predictors of PTSD, with high rates among survivors</li>
              <li><strong>Serious accidents</strong> — motor vehicle crashes, workplace injuries, or other life-threatening accidents</li>
              <li><strong>Natural disasters</strong> — earthquakes, hurricanes, floods, and other catastrophic events</li>
              <li><strong>Childhood abuse</strong> — physical, sexual, or emotional abuse during childhood, which may also contribute to complex trauma responses</li>
              <li><strong>Witnessing violence</strong> — seeing someone else harmed or killed, including domestic violence</li>
              <li><strong>Medical trauma</strong> — life-threatening diagnoses, ICU stays, or traumatic medical procedures</li>
            </ul>
            <p>
              The type of trauma does not determine the validity of someone&apos;s experience. Any event that meets the DSM-5 criteria for a traumatic exposure can lead to PTSD symptoms.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Normal stress response vs. PTSD</h2>
            <p>
              After a traumatic event, it is normal to experience distressing reactions — difficulty sleeping, intrusive thoughts about what happened, heightened startle responses, and emotional numbness. For most people, these reactions gradually diminish over days to weeks as the brain processes the experience.
            </p>
            <p>
              PTSD is distinguished from a normal stress response by its <strong>persistence</strong> and <strong>severity</strong>. When symptoms last longer than one month, do not improve on their own, and interfere with work, relationships, or daily functioning, they may indicate PTSD rather than a temporary stress reaction. This is the point at which screening becomes particularly important.
            </p>
            <p>
              The <a href="https://www.ptsd.va.gov/" target="_blank" rel="noopener noreferrer">VA National Center for PTSD</a> notes that early identification — even before symptoms fully meet diagnostic criteria — can connect individuals with support that may prevent the condition from becoming chronic.
            </p>
          </section>

          <section>
            <h2>When to get screened</h2>
            <p>
              Consider PTSD screening if any of the following apply:
            </p>
            <ul>
              <li>You experienced a traumatic event and symptoms have persisted for more than one month</li>
              <li>You find yourself avoiding people, places, or situations that remind you of the event</li>
              <li>You have recurrent, unwanted memories, nightmares, or flashbacks related to the trauma</li>
              <li>You feel emotionally numb, detached from others, or unable to experience positive emotions</li>
              <li>You are easily startled, have difficulty concentrating, or experience sleep disturbances</li>
              <li>You are using alcohol or substances to cope with distressing memories or feelings</li>
            </ul>
            <p>
              You do not need a referral to take a screening. Validated self-report tools like the <Link href="/pcl-5-ptsd-screening">PCL-5</Link> and <Link href="/pc-ptsd-5-screening">PC-PTSD-5</Link> are available for self-administration and can provide useful information to share with a healthcare professional.
            </p>
          </section>

          <section>
            <h2>The PCL-5 explained</h2>
            <p>
              The PTSD Checklist for DSM-5 (PCL-5) is a 20-item self-report questionnaire developed by the VA National Center for PTSD. It is one of the most widely used and well-validated PTSD screening instruments in both clinical and research settings.
            </p>
            <p>
              Each item corresponds to one of the 20 DSM-5 PTSD symptoms. You rate how much each symptom has bothered you in the past month on a scale from 0 (not at all) to 4 (extremely). The total score ranges from 0 to 80.
            </p>
            <p>
              A score of <strong>33 or higher</strong> is commonly used as the cutoff that may indicate clinically significant PTSD symptoms. However, this is a screening threshold, not a diagnosis. Some research settings use different cutoffs depending on the population being studied. Your score provides a starting point for a conversation with a qualified professional.
            </p>
            <p>
              The PCL-5 can also be used to track symptom changes over time, making it valuable for monitoring progress during treatment. A change of 5-10 points is generally considered clinically meaningful.
            </p>
            <div className="mt-4">
              <Link href="/pcl-5-ptsd-screening" className="text-sage-600 dark:text-sage-400 font-semibold text-sm hover:underline">Take the PCL-5 Self-Check &rarr;</Link>
            </div>
          </section>

          <section>
            <h2>The PC-PTSD-5 as a quick screen</h2>
            <p>
              The Primary Care PTSD Screen for DSM-5 (PC-PTSD-5) is a 5-item screening tool designed for rapid use in primary care and other busy clinical settings. Developed by the VA, it asks five yes/no questions about key PTSD symptoms experienced in the past month.
            </p>
            <p>
              A score of <strong>3 or higher</strong> (out of 5) is considered a positive screen, meaning further evaluation with a more comprehensive tool — such as the PCL-5 or a clinical interview — is recommended. The PC-PTSD-5 is not meant to assess severity; its purpose is to quickly identify individuals who may benefit from a deeper assessment.
            </p>
            <p>
              The five questions cover nightmares, avoidance, hypervigilance, emotional numbness, and guilt — each representing a core symptom cluster. If you are unsure whether a full PCL-5 is appropriate, the PC-PTSD-5 is an efficient starting point.
            </p>
            <div className="mt-4">
              <Link href="/pc-ptsd-5-screening" className="text-sage-600 dark:text-sage-400 font-semibold text-sm hover:underline">Take the PC-PTSD-5 Quick Screen &rarr;</Link>
            </div>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>PTSD symptom clusters</h2>
            <p>
              The DSM-5 organizes PTSD symptoms into four distinct clusters. Understanding these clusters can help you recognize patterns in your own experience:
            </p>
            <div className="not-prose my-6 space-y-2">
              {[
                { cluster: "Intrusion", description: "Recurrent, involuntary, and distressing memories, nightmares, flashbacks, or intense psychological or physical reactions to reminders of the traumatic event" },
                { cluster: "Avoidance", description: "Persistent efforts to avoid distressing memories, thoughts, feelings, or external reminders (people, places, situations) associated with the trauma" },
                { cluster: "Negative cognitions & mood", description: "Persistent negative beliefs about oneself or the world, distorted blame, diminished interest in activities, feeling detached from others, or inability to experience positive emotions" },
                { cluster: "Arousal & reactivity", description: "Irritability, reckless or self-destructive behavior, hypervigilance, exaggerated startle response, difficulty concentrating, or sleep disturbances" },
              ].map((c) => (
                <div key={c.cluster} className="flex items-start gap-3 p-3 card">
                  <span className="text-sm font-semibold text-sage-600 dark:text-sage-400 w-28 flex-shrink-0">{c.cluster}</span>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{c.description}</p>
                </div>
              ))}
            </div>
            <p>
              To meet DSM-5 criteria for PTSD, an individual must have symptoms from each cluster lasting more than one month. However, you do not need to meet full diagnostic criteria for screening to be valuable — subclinical symptoms can still significantly affect quality of life.
            </p>
          </section>

          <section>
            <h2>Treatment options overview</h2>
            <p>
              PTSD has several evidence-based treatment approaches with strong research support. The three most widely recommended are:
            </p>
            <ul>
              <li><strong>Cognitive Processing Therapy (CPT)</strong> — helps individuals identify and challenge unhelpful thoughts related to the trauma, typically delivered over 12 sessions</li>
              <li><strong>Prolonged Exposure (PE)</strong> — involves gradually approaching trauma-related memories and situations in a safe, therapeutic context, reducing their power over time</li>
              <li><strong>Eye Movement Desensitization and Reprocessing (EMDR)</strong> — uses bilateral stimulation (such as guided eye movements) while processing traumatic memories, helping the brain reprocess them more adaptively</li>
            </ul>
            <p>
              Medications — particularly SSRIs like sertraline and paroxetine — are also FDA-approved for PTSD and may be used alone or in combination with therapy. The best treatment approach depends on individual circumstances, preferences, and clinical assessment.
            </p>
            <p>
              The key takeaway: effective treatments exist. A screening result is the first step toward accessing them.
            </p>
          </section>

          <section>
            <h2>Why early screening matters</h2>
            <p>
              Research consistently shows that early identification of PTSD symptoms leads to better outcomes. When PTSD goes unrecognized, it can become chronic and increasingly difficult to manage. Untreated PTSD is associated with higher rates of depression, substance use disorders, relationship difficulties, and physical health problems.
            </p>
            <p>
              Screening does not commit you to anything. It provides information — information you can use to make informed decisions about whether to seek professional support. Many people find that simply understanding their symptoms through a validated framework reduces the confusion and self-blame that often accompany trauma.
            </p>
          </section>

          <section>
            <h2>Barriers to seeking help</h2>
            <p>
              Despite the availability of effective screening tools and treatments, many people with PTSD symptoms do not seek help. Common barriers include:
            </p>
            <ul>
              <li><strong>Stigma</strong> — concern about being judged or perceived as weak, particularly in military and first-responder communities</li>
              <li><strong>Avoidance</strong> — the avoidance symptoms of PTSD itself can make it harder to seek help, as approaching the topic of trauma feels threatening</li>
              <li><strong>Normalization</strong> — believing that symptoms are a normal part of life or that others have experienced worse</li>
              <li><strong>Access</strong> — limited availability of mental health providers, cost of care, or transportation challenges</li>
              <li><strong>Lack of awareness</strong> — not recognizing that symptoms may be connected to a past traumatic experience</li>
            </ul>
            <p>
              Self-administered screening tools can help overcome some of these barriers by providing a private, anonymous first step. Your answers are processed entirely in your browser and are never stored or transmitted.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Disclaimer */}
          <div className="card p-5 bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 not-prose text-sm text-neutral-600 dark:text-neutral-400">
            <p className="font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p>This article is for educational purposes only. It is not a diagnosis or treatment recommendation. The PCL-5 and PC-PTSD-5 are screening tools, not diagnostic instruments. A screening result may indicate the presence of symptoms, but only a qualified healthcare professional can provide a clinical evaluation.</p>
            <p className="mt-2">If you or someone you know is struggling, call SAMHSA&apos;s National Helpline: <strong>1-800-662-4357</strong> (free, confidential, 24/7). If you are in crisis, call or text <strong>988</strong> (Suicide &amp; Crisis Lifeline).</p>
          </div>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Ready to take the PCL-5?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, takes about 5 minutes. Your answers never leave your browser.</p>
            <Link href="/pcl-5-ptsd-screening" className="btn-primary text-sm">Take the PCL-5 Self-Check</Link>
          </div>

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
              <Link href="/pcl-5-ptsd-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PCL-5 PTSD Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">20-item validated PTSD symptom checklist</p>
              </Link>
              <Link href="/pc-ptsd-5-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PC-PTSD-5 Quick Screen</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">5-item primary care PTSD screening tool</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-10">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/ace-score-meaning" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">ACE Score Meaning & Interpretation</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understanding adverse childhood experiences and their impact</p>
              </Link>
              <Link href="/blog/dast-10-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">DAST-10 Scoring & Interpretation Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understanding the drug abuse screening test</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
