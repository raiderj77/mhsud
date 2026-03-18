import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/depression-veterans-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "depression-veterans-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/depression-veterans-guide",
  title: "Depression in Veterans: Why It Goes Unrecognized and How to Get Support",
  description:
    "Veterans face unique depression risk factors including combat exposure, moral injury, and transition stress. Learn why depression is underrecognized in veterans and how screening helps.",
  keywords: [
    "veteran depression",
    "depression in veterans",
    "military depression",
    "veteran depression screening",
    "VA depression resources",
    "depression test veterans",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "How common is depression in veterans?",
    answer:
      "Depression affects an estimated 25% of veterans after service, compared to roughly 8% of the general population. Rates are higher among post-9/11 veterans, those with combat exposure, and those with co-occurring PTSD or traumatic brain injury. Many cases go unrecognized because veterans underreport emotional symptoms.",
  },
  {
    question: "Is veteran depression different from civilian depression?",
    answer:
      "The core symptoms are the same, but veterans more often present with anger, irritability, emotional numbness, and substance use rather than sadness. Depression frequently co-occurs with PTSD, making it harder to distinguish. Military culture shapes how veterans express distress, often leading them to minimize symptoms.",
  },
  {
    question: "What VA resources are available for depression?",
    answer:
      "The VA offers individual and group therapy, medication management, telehealth, and the Veterans Crisis Line (dial 988, press 1). Community-based outpatient clinics, Vet Centers, and VA primary care all provide depression screening. Veterans can also access community care programs if VA wait times are too long.",
  },
  {
    question: "Can depression screening help veterans who say they are fine?",
    answer:
      "Yes. Structured tools like the PHQ-9 ask specific behavioral questions that bypass general conversations. Many veterans who would never say they are depressed will endorse symptoms like sleep problems, loss of interest, or fatigue when asked directly. Screening provides objective language for subjective experiences.",
  },
];

export default function DepressionVeteransGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Depression in Veterans: Why It Goes Unrecognized and How to Get Support", description: "Learn why depression in veterans goes unrecognized and how screening helps.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Depression in Veterans Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Depression in Veterans: Why It Goes Unrecognized and How to Get Support
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Veterans carry experiences that most civilians never encounter &mdash; combat exposure, prolonged separation from family, moral injury, and the disorienting transition back to civilian life. These experiences create unique vulnerability to depression. Yet military culture, which values toughness and self-reliance, makes it harder for veterans to recognize depression in themselves or ask for help. The result: depression in veterans is widespread but significantly underrecognized and undertreated.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">If you are in crisis</p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> &mdash; Call or text <strong>988</strong> (press 1 for Veterans, US 24/7)</li>
              <li><strong>Crisis Text Line</strong> &mdash; Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline</strong> &mdash; <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is for informational purposes only and does not constitute medical or mental health advice. Always consult a qualified mental health professional for evaluation and treatment.
            </p>
          </div>

          <section>
            <h2>Why veterans face higher depression risk</h2>
            <p>Several factors unique to military service contribute to elevated depression risk in veterans:</p>
            <ul>
              <li><strong>Combat exposure:</strong> Direct exposure to life-threatening situations, witnessing death, and making split-second survival decisions create lasting psychological impact that extends well beyond deployment</li>
              <li><strong>Military sexual trauma (MST):</strong> The VA reports that roughly 1 in 3 women and 1 in 50 men experienced MST during service. MST is strongly associated with depression, PTSD, and substance use</li>
              <li><strong>Traumatic brain injury (TBI):</strong> TBI, particularly from blast exposure, is common among post-9/11 veterans. Depression co-occurs with TBI at rates of 25&ndash;50%, and the overlap between TBI symptoms and depression symptoms makes both harder to identify</li>
              <li><strong>Moral injury:</strong> Experiencing or witnessing events that violate a person&apos;s moral code &mdash; harming civilians, following orders they disagreed with, failing to prevent harm &mdash; creates deep shame and guilt that fuels depression</li>
              <li><strong>Transition to civilian life:</strong> Leaving the military means losing structure, mission, rank identity, and the unit cohesion that defined daily life. Many veterans describe feeling purposeless, disconnected, and invisible after discharge</li>
              <li><strong>Loss of unit cohesion:</strong> The bonds formed in military service are among the strongest social connections many people ever experience. Losing that community contributes to isolation and depression</li>
            </ul>
          </section>

          <section>
            <h2>How depression and PTSD overlap in veterans</h2>
            <p>
              Depression and PTSD co-occur in over 50% of cases among veterans. This overlap is not coincidental &mdash; the conditions share risk factors, neurological pathways, and symptoms including sleep disruption, concentration problems, emotional numbness, and social withdrawal.
            </p>
            <p>
              The overlap creates diagnostic challenges. A veteran experiencing nightmares, emotional detachment, irritability, and loss of interest may have PTSD, depression, or both. Screening for both conditions is important because treatment approaches differ, and addressing only one often leaves the veteran still struggling.
            </p>
            <p>
              Substance use adds another layer. Many veterans use alcohol or drugs to manage symptoms of depression and PTSD, creating a cycle where self-medication temporarily numbs distress but worsens it over time. Research suggests that roughly 63% of veterans with substance use disorders also meet criteria for depression or PTSD.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Military culture and the stigma barrier</h2>
            <p>
              Military culture instills resilience, self-reliance, and the ability to push through adversity. These qualities are essential during service but become barriers to help-seeking afterward. Common beliefs that prevent veterans from acknowledging depression include:
            </p>
            <ul>
              <li>&quot;I should be able to handle this on my own&quot;</li>
              <li>&quot;Other people had it worse than me&quot;</li>
              <li>&quot;Asking for help means I&apos;m weak&quot;</li>
              <li>&quot;I don&apos;t want to take someone else&apos;s spot who needs it more&quot;</li>
              <li>&quot;My problems aren&apos;t bad enough to justify getting help&quot;</li>
            </ul>
            <p>
              These beliefs are reinforced by military training and peer expectations. Even after discharge, many veterans continue to operate by the unwritten rule that &quot;I&apos;m fine&quot; is the only acceptable answer. This is why structured screening tools are so valuable &mdash; they bypass the general &quot;how are you?&quot; question and ask about specific, observable symptoms.
            </p>
          </section>

          <section>
            <h2>The suicide crisis among veterans</h2>
            <p>
              The stakes of unrecognized depression in veterans are severe. According to the VA&apos;s 2022 National Veteran Suicide Prevention Annual Report, veterans die by suicide at approximately 1.5 times the rate of non-veteran adults. In 2020, an average of 16.8 veterans died by suicide each day in the United States.
            </p>
            <p>
              Several factors compound this risk: access to firearms, combat-acquired comfort with violence, social isolation after service, chronic pain, and untreated depression and PTSD. Notably, the majority of veteran suicides occur among those who are not connected to VA healthcare, highlighting the gap between available resources and the veterans who most need them.
            </p>
            <p>
              Depression screening represents one concrete way to close that gap. A screening does not replace professional evaluation, but it can be the moment when a veteran first sees their experience reflected in specific, measurable terms &mdash; and recognizes that what they are going through has a name and available support.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>How the MindCheck Tools depression screening for veterans helps</h2>
            <p>
              The <Link href="/depression-screening-for-veterans" className="text-sage-600 dark:text-sage-400 underline">MindCheck Tools depression screening for veterans</Link> is a free, private assessment that takes under five minutes. It is based on the PHQ-9, the same validated instrument used throughout the VA healthcare system for routine depression screening.
            </p>
            <p>
              The screening runs entirely in your browser &mdash; no data is stored, no account is needed, and no one sees your answers. For veterans who are not ready to walk into a VA clinic or talk to a counselor, a private online screening provides a low-barrier entry point. It helps quantify what you may be experiencing and gives you something concrete to bring to a provider if you choose to seek help.
            </p>
            <p>
              If PTSD is also a concern, consider taking the <Link href="/pcl-5-ptsd-screening" className="text-sage-600 dark:text-sage-400 underline">PCL-5 PTSD screening</Link> alongside the <Link href="/depression-screening-for-veterans" className="text-sage-600 dark:text-sage-400 underline">depression screening</Link>. Understanding both conditions helps guide the conversation with a provider.
            </p>
          </section>

          <section>
            <h2>VA resources and how to access them</h2>
            <p>The VA provides multiple pathways to depression treatment:</p>
            <ul>
              <li><strong>VA primary care:</strong> Depression screening is integrated into routine primary care visits at VA facilities. You do not need a mental health referral to be screened</li>
              <li><strong>VA mental health clinics:</strong> Individual therapy, group therapy, and medication management are available at VA medical centers</li>
              <li><strong>Vet Centers:</strong> Community-based counseling centers that provide readjustment services in a non-clinical setting. No VA enrollment required</li>
              <li><strong>VA telehealth:</strong> Video and phone appointments are available for veterans in rural areas or those who prefer remote care</li>
              <li><strong>Community care:</strong> If VA wait times exceed access standards, veterans may be eligible for care from community providers through the MISSION Act</li>
              <li><strong>Veterans Crisis Line:</strong> Dial 988, press 1, available 24/7 for veterans in crisis</li>
            </ul>
            <p>
              Barriers to VA care are real &mdash; wait times, geographic distance, bureaucratic complexity, and stigma within VA facilities themselves. But options are expanding, and many veterans find that the hardest part is making the first call. A screening result can provide the motivation to make that call.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <section>
            <h2>What family members and fellow veterans can do</h2>
            <p>
              If you are concerned about a veteran in your life, direct questions like &quot;are you depressed?&quot; are likely to be met with &quot;I&apos;m fine.&quot; More effective approaches include:
            </p>
            <ul>
              <li>Asking about specific behaviors: &quot;I&apos;ve noticed you haven&apos;t been sleeping well &mdash; how long has that been going on?&quot;</li>
              <li>Normalizing the experience: &quot;A lot of veterans deal with this after getting out&quot;</li>
              <li>Sharing the screening tool: &quot;I came across this &mdash; it takes five minutes and it&apos;s completely private&quot;</li>
              <li>Offering to help with logistics: &quot;I can help you make the appointment or drive you there&quot;</li>
              <li>Being persistent without being pushy: check in regularly, not just once</li>
            </ul>
            <p>
              Fellow veterans often have the most credibility. Peer support programs like the VA&apos;s Peer Support Specialist initiative and organizations like Team Red White &amp; Blue connect veterans with others who understand their experience firsthand.
            </p>
          </section>

          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Take a few minutes to check in on how you&apos;re feeling</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, no account needed. Your answers stay in your browser.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/depression-screening-for-veterans" className="btn-primary text-sm">Veteran Depression Screening</Link>
              <Link href="/pcl-5-ptsd-screening" className="btn-primary text-sm">PTSD Screening (PCL-5)</Link>
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
              <Link href="/depression-screening-for-veterans" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Depression Screening for Veterans</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">PHQ-9 based screening for military veterans</p>
              </Link>
              <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Standard validated depression screening</p>
              </Link>
              <Link href="/pcl-5-ptsd-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PCL-5 PTSD Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">PTSD checklist for DSM-5</p>
              </Link>
              <Link href="/audit-alcohol-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">AUDIT Alcohol Test</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">WHO alcohol use screening</p>
              </Link>
            </div>
          </section>

          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/ptsd-screening-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PTSD Screening Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">How PTSD screening works and what results mean</p>
              </Link>
              <Link href="/blog/depression-screening-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Depression Screening Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">PHQ-9 assessment and treatment options</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
