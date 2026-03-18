import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/ptsd-veterans-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "ptsd-veterans-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/ptsd-veterans-guide",
  title: "PTSD in Veterans: Signs, Screening, and Getting the Right Support",
  description:
    "An estimated 11-20% of post-9/11 veterans have PTSD. Learn the signs, screening options like the PCL-5, barriers to care, and evidence-based treatments for veteran PTSD.",
  keywords: [
    "PTSD in veterans",
    "veteran PTSD",
    "PTSD screening veterans",
    "military PTSD",
    "veteran PTSD test",
    "combat PTSD",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "How common is PTSD in veterans?",
    answer:
      "The U.S. Department of Veterans Affairs estimates that 11\u201320% of veterans who served in Operations Iraqi Freedom and Enduring Freedom have PTSD in a given year. Rates for Vietnam-era veterans are estimated at about 30% over their lifetime. These rates are significantly higher than the roughly 6\u20137% lifetime prevalence in the general U.S. population.",
  },
  {
    question: "Can PTSD appear years after military service?",
    answer:
      "Yes. Delayed-onset PTSD is well documented in veterans. Symptoms may not emerge until months or even years after separation from service. Major life transitions \u2014 retirement, loss of a loved one, or health changes \u2014 can trigger symptoms that were previously managed through the structure and mission focus of military life.",
  },
  {
    question: "What treatments work for veteran PTSD?",
    answer:
      "The VA and Department of Defense clinical guidelines recommend three evidence-based psychotherapies: Cognitive Processing Therapy (CPT), Prolonged Exposure (PE), and Eye Movement Desensitization and Reprocessing (EMDR). All three have strong research support specifically in veteran populations. Medications such as sertraline and paroxetine are also FDA-approved for PTSD.",
  },
  {
    question: "Is PTSD a sign of weakness?",
    answer:
      "No. PTSD is a neurobiological response to trauma, not a character flaw or sign of weakness. The brain\u2019s threat-detection system becomes overactivated after severe or repeated trauma. Many of the toughest, most resilient service members develop PTSD. Seeking help is an act of strength, not an admission of failure.",
  },
];

export default function PtsdVeteransGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "PTSD in Veterans: Signs, Screening, and Getting the Right Support", description: "An estimated 11-20% of post-9/11 veterans have PTSD. Learn the signs, screening options, barriers to care, and evidence-based treatments.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "PTSD in Veterans Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            PTSD in Veterans: Signs, Screening, and Getting the Right Support
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            The U.S. Department of Veterans Affairs estimates that 11&ndash;20% of veterans who served in Operations Iraqi Freedom and Enduring Freedom experience PTSD in a given year. For Vietnam-era veterans, lifetime rates reach approximately 30%. These numbers represent real people &mdash; service members who put themselves in harm&apos;s way and are now navigating the invisible aftermath of that service.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">If you are in crisis</p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> &mdash; Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Veterans Crisis Line</strong> &mdash; Call <strong>988, press 1</strong> (dedicated veteran support)</li>
              <li><strong>Crisis Text Line</strong> &mdash; Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline</strong> &mdash; <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This screening tool is for informational and educational purposes only. It is not a diagnostic tool and should not be used as a substitute for professional evaluation, diagnosis, or treatment.
            </p>
          </div>

          <section>
            <h2>Why PTSD is so common among veterans</h2>
            <p>
              Military service exposes individuals to experiences that most civilians will never encounter. The nature of modern warfare &mdash; urban combat, improvised explosive devices (IEDs), multiple deployments, and the blurring of &quot;front lines&quot; &mdash; creates sustained, unpredictable threat environments that can overwhelm the brain&apos;s capacity to process trauma.
            </p>
            <p>
              Combat exposure is the most recognized cause, but it is far from the only one. PTSD in veterans can stem from multiple sources:
            </p>
            <ul>
              <li><strong>Direct combat:</strong> Engaging in firefights, witnessing death or severe injury of fellow service members or civilians</li>
              <li><strong>Military sexual trauma (MST):</strong> The VA reports that roughly 1 in 3 women and 1 in 50 men using VA healthcare experienced MST</li>
              <li><strong>Moral injury:</strong> The lasting distress from actions that violate one&apos;s moral code &mdash; being ordered to do something that feels wrong, or being unable to prevent harm</li>
              <li><strong>Traumatic brain injury (TBI) overlap:</strong> IED blasts cause both TBI and PTSD, and their symptoms frequently overlap, complicating assessment</li>
              <li><strong>Witnessing atrocities:</strong> Exposure to mass casualties, civilian suffering, or the aftermath of violence</li>
            </ul>
          </section>

          <section>
            <h2>How PTSD symptoms manifest in veterans</h2>
            <p>
              PTSD symptoms in veterans typically fall into four clusters, consistent with current clinical understanding. However, the way these symptoms present often reflects military-specific experiences:
            </p>
            <p><strong>Re-experiencing:</strong> Flashbacks triggered by sounds (fireworks, helicopters, car backfires), nightmares that replay combat scenarios, intrusive memories that arrive without warning. These are not simply &quot;bad memories&quot; &mdash; the brain is re-living the event as though it is happening now.</p>
            <p><strong>Avoidance:</strong> Avoiding crowded places, driving (especially after IED exposure), conversations about service, news coverage of conflict, or anything that triggers memories. Some veterans isolate entirely, withdrawing from family and social life.</p>
            <p><strong>Negative changes in thinking and mood:</strong> Persistent guilt (&quot;I should have done more&quot;), emotional numbness, loss of interest in previously enjoyed activities, difficulty feeling positive emotions, and distorted self-blame for events beyond one&apos;s control.</p>
            <p><strong>Hyperarousal:</strong> Being constantly on edge, scanning for threats in civilian environments, difficulty sleeping, exaggerated startle responses, irritability, and angry outbursts. Many veterans describe never being able to fully &quot;stand down.&quot;</p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Delayed onset: why symptoms may emerge years later</h2>
            <p>
              One of the most misunderstood aspects of veteran PTSD is delayed onset. While many service members experience symptoms during or shortly after deployment, a significant number do not develop noticeable symptoms until months or years after leaving the military.
            </p>
            <p>
              During active service, the structure of military life &mdash; mission focus, unit cohesion, physical routine, and a shared sense of purpose &mdash; can effectively contain trauma responses. When that structure is removed at separation, the underlying trauma may surface. Major life transitions such as retirement, divorce, the death of a fellow veteran, or health problems can also trigger delayed symptoms.
            </p>
            <p>
              This delayed presentation can be confusing. Veterans may wonder why they are struggling now when they &quot;handled it fine&quot; for years. Understanding that delayed onset is a well-documented pattern &mdash; not a sign of weakness or failure &mdash; is an important step toward seeking help.
            </p>
          </section>

          <section>
            <h2>Barriers to care: why veterans don&apos;t get help</h2>
            <p>
              Despite the availability of effective treatments, many veterans never seek help for PTSD. Research consistently identifies several barriers:
            </p>
            <ul>
              <li><strong>Stigma:</strong> Military culture prizes toughness and self-reliance. Seeking mental health care is often perceived as &quot;weakness,&quot; even though PTSD is a neurobiological response, not a character flaw</li>
              <li><strong>Career concerns:</strong> Active-duty service members may fear that a PTSD screening will affect their security clearance, career advancement, or unit standing</li>
              <li><strong>Distrust of the VA system:</strong> Long wait times, bureaucratic processes, and negative experiences create reluctance to engage with VA mental health services</li>
              <li><strong>Minimization:</strong> &quot;Other people had it worse&quot; is one of the most common barriers &mdash; veterans compare their experiences to others and dismiss their own suffering</li>
              <li><strong>Lack of awareness:</strong> Some veterans do not recognize their symptoms as PTSD, attributing hypervigilance, insomnia, or irritability to their personality rather than their service</li>
            </ul>
          </section>

          <section>
            <h2>Screening for PTSD: the PCL-5 and how it helps</h2>
            <p>
              The <Link href="/ptsd-test-veterans" className="text-sage-600 dark:text-sage-400 underline">PCL-5 (PTSD Checklist for DSM-5)</Link> is the standard PTSD screening instrument used by the VA and Department of Defense. It is a 20-item self-report measure that assesses the severity of PTSD symptoms across all four symptom clusters.
            </p>
            <p>
              A PCL-5 screening is not an assessment &mdash; it is a structured way to identify whether your symptoms warrant further evaluation by a mental health professional. The tool measures symptom severity over the past month, giving you and your provider a concrete starting point for conversation.
            </p>
            <p>
              You can take the <Link href="/ptsd-test-veterans" className="text-sage-600 dark:text-sage-400 underline">free, private PTSD screening for veterans</Link> here on MindCheck Tools. It runs entirely in your browser, requires no account, and your answers are never stored. If your results suggest elevated PTSD symptoms, the tool provides guidance on next steps, including how to connect with VA mental health services.
            </p>
            <p>
              For a shorter initial check, the <Link href="/pc-ptsd-5-screening" className="text-sage-600 dark:text-sage-400 underline">PC-PTSD-5</Link> is a five-question screener also used by the VA as a first-line assessment in primary care settings.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Evidence-based treatments for veteran PTSD</h2>
            <p>
              The good news is that PTSD is treatable, and veteran-specific research supports several highly effective approaches:
            </p>
            <ul>
              <li><strong>Cognitive Processing Therapy (CPT):</strong> Helps veterans identify and challenge distorted beliefs about their trauma (&quot;It was my fault,&quot; &quot;I can&apos;t trust anyone&quot;). Typically 12 sessions. Strong evidence in veteran populations</li>
              <li><strong>Prolonged Exposure (PE):</strong> Gradually and safely revisiting traumatic memories in a therapeutic setting to reduce their emotional power. Research shows significant symptom reduction in most veterans who complete treatment</li>
              <li><strong>Eye Movement Desensitization and Reprocessing (EMDR):</strong> Uses bilateral stimulation (typically eye movements) while processing traumatic memories. Endorsed by the VA, WHO, and APA</li>
              <li><strong>Medication:</strong> Sertraline (Zoloft) and paroxetine (Paxil) are FDA-approved for PTSD. Prazosin may help with PTSD-related nightmares. Medication can be used alone or in combination with therapy</li>
            </ul>
            <p>
              All three psychotherapies have strong veteran-specific research and are available through VA medical centers, Vet Centers, and community-based providers. The VA also offers telehealth options for veterans in rural areas or those who prefer remote care.
            </p>
          </section>

          <section>
            <h2>Getting help: practical next steps</h2>
            <p>
              If you are a veteran experiencing symptoms of PTSD, or if you suspect that past service may be affecting your mental health, here are concrete steps:
            </p>
            <ul>
              <li>Take a <Link href="/ptsd-test-veterans" className="text-sage-600 dark:text-sage-400 underline">private PTSD screening</Link> to get a structured picture of your symptoms</li>
              <li>Contact the Veterans Crisis Line: call 988 and press 1, or text 838255</li>
              <li>Schedule a mental health appointment through your VA medical center or local Vet Center</li>
              <li>If you prefer non-VA care, the MISSION Act allows eligible veterans to see community providers</li>
              <li>Peer support: organizations like Team Red White &amp; Blue, The Mission Continues, and Give an Hour connect veterans with community and support</li>
            </ul>
            <p>
              You do not need to have a PTSD screening result to seek help. You do not need to compare your experience to anyone else&apos;s. If something from your service is affecting your life now, that is enough reason to reach out.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Take a free, private PTSD screening</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Confidential. No account required. Results stay in your browser.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/ptsd-test-veterans" className="btn-primary text-sm">PTSD Screening for Veterans</Link>
              <Link href="/pc-ptsd-5-screening" className="btn-primary text-sm">PC-PTSD-5 Quick Screen</Link>
            </div>
          </div>

          <AuthorBio publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />

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

          <section className="not-prose mt-10">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/pcl-5-ptsd-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PCL-5 PTSD Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Full 20-item PTSD checklist for DSM-5</p>
              </Link>
              <Link href="/pc-ptsd-5-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PC-PTSD-5 Quick Screen</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">5-question primary care PTSD screen</p>
              </Link>
              <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Test</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Depression screening often co-occurring with PTSD</p>
              </Link>
            </div>
          </section>

          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/ptsd-screening-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PTSD Screening Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">When and why to get screened for PTSD</p>
              </Link>
              <Link href="/blog/ptsd-first-responders-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PTSD in First Responders</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">The hidden cost of saving lives</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
