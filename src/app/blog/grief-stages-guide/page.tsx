import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/grief-stages-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "grief-stages-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/grief-stages-guide",
  title: "Understanding Grief: Stages, Symptoms, and When to Seek Help",
  description:
    "Grief is universal but experienced uniquely. Learn about the stages of grief, prolonged grief disorder, physical and emotional symptoms, and when to seek professional support.",
  keywords: [
    "stages of grief", "grief symptoms", "prolonged grief disorder", "grief assessment",
    "grief process", "complicated grief", "K\u00fcbler-Ross stages", "dual process model grief",
    "anticipatory grief", "disenfranchised grief", "grief and depression",
    "when to seek help for grief", "grief screening", "bereavement support",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  { question: "Is there a right way to grieve?", answer: "There is no single right way to grieve. Grief is a deeply personal process shaped by your relationship with the person who died, your cultural background, your support system, and your individual temperament. While frameworks like the K\u00fcbler-Ross stages can help name common experiences, research consistently shows that grief does not follow a predictable sequence. Some people cry frequently; others feel numb. Some want to talk about their loss; others need solitude. All of these responses are normal. The key indicator of concern is not how you grieve, but whether your grief is preventing you from functioning in daily life for an extended period." },
  { question: "How long does grief normally last?", answer: "There is no fixed timeline for grief. Most bereaved individuals experience a gradual reduction in the intensity of acute grief over the first 6 to 12 months, but waves of grief can resurface for years &mdash; especially around anniversaries, holidays, or unexpected reminders. This is normal and does not indicate a problem. The concept of &quot;getting over&quot; grief is misleading; most people learn to integrate the loss into their lives rather than leaving it behind entirely. If intense grief symptoms persist at the same intensity for 12 months or more and significantly impair your ability to function, this may indicate prolonged grief disorder, and a professional evaluation is recommended." },
  { question: "What is prolonged grief disorder?", answer: "Prolonged grief disorder (PGD) is a clinical condition recognized in both the DSM-5-TR (2022) and ICD-11. It describes a pattern of persistent, intense grief that goes beyond what is culturally expected and significantly impairs daily functioning. Key features include intense longing or yearning for the deceased, preoccupation with the death or the person who died, identity disruption, emotional numbness, difficulty engaging in life, and avoidance of reminders of the loss. Under DSM-5-TR criteria, these symptoms must persist for at least 12 months after the death (6 months in ICD-11). Approximately 7 to 10 percent of bereaved individuals develop PGD. Effective treatments are available, including prolonged grief disorder therapy and cognitive behavioral approaches." },
  { question: "When should I see a therapist for grief?", answer: "Consider seeking professional support if your grief feels stuck at the same intensity for many months without any gradual easing, if you are unable to perform basic daily tasks like work or self-care, if you feel persistent hopelessness or that life has no meaning without the deceased, if you are using alcohol or other substances to cope, if you are having thoughts of harming yourself or joining the person who died, or if people close to you have expressed concern about how you are coping. You do not need to meet criteria for a clinical condition to benefit from grief counseling &mdash; many people find professional support helpful simply for having a structured space to process their experience." },
];

export default function GriefStagesGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Understanding Grief: Stages, Symptoms, and When to Seek Help", description: "Grief is universal but experienced uniquely. Learn about the stages of grief, prolonged grief disorder, physical and emotional symptoms, and when to seek professional support.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Understanding Grief", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Understanding Grief: Stages, Symptoms, and When to Seek Help
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Grief is one of the most universal human experiences &mdash; and one of the most misunderstood. Whether you are mourning the death of a loved one, processing an anticipated loss, or struggling with a grief that others do not recognize, understanding what grief looks like and when it may warrant professional support can be a vital first step. This guide covers the stages of grief, modern research models, prolonged grief disorder, and how to know when it is time to seek help.
          </p>
          <div className="mt-6">
            <Link href="/grief-assessment" className="btn-primary text-sm">
              Take the Grief Assessment Screening &rarr;
            </Link>
          </div>
        </header>

        <div className="prose-mh space-y-8">
          <section>
            <h2>How common is grief &mdash; and how many people are affected?</h2>
            <p>
              Approximately 2.5 million people die in the United States each year, and research suggests that each death directly affects an average of five close individuals &mdash; family members, partners, and close friends. That means roughly 12.5 million Americans enter acute bereavement in any given year. For most, grief follows a painful but ultimately adaptive course. For approximately 7 to 10 percent of bereaved individuals, however, grief becomes persistent and debilitating &mdash; a condition now formally recognized as prolonged grief disorder.
            </p>
            <p>
              These numbers underscore an important reality: grief is not rare, and struggling with it is not a sign of weakness. It is a predictable consequence of forming meaningful attachments to other people.
            </p>
          </section>

          <section>
            <h2>The K&uuml;bler-Ross five stages of grief</h2>
            <p>
              The most widely known grief framework comes from psychiatrist Elisabeth K&uuml;bler-Ross, who introduced the &quot;five stages of grief&quot; in her 1969 book <em>On Death and Dying</em>. The five stages are:
            </p>
            <div className="not-prose my-6 space-y-2">
              {[
                { stage: "Denial", detail: "An initial sense of disbelief or numbness. The loss feels unreal. This response serves as a temporary defense mechanism that helps buffer the immediate shock." },
                { stage: "Anger", detail: "As denial fades, frustration and helplessness may surface as anger &mdash; directed at the situation, at others, at oneself, or even at the person who died. This is a normal part of processing pain." },
                { stage: "Bargaining", detail: "A period of dwelling on &quot;what if&quot; and &quot;if only&quot; statements. Bereaved individuals may replay events and imagine ways the outcome could have been different." },
                { stage: "Depression", detail: "Deep sadness as the full weight of the loss settles in. Withdrawal, crying, sleep changes, and difficulty concentrating are common. This is not clinical depression but a natural response to significant loss." },
                { stage: "Acceptance", detail: "Not &quot;being okay&quot; with the loss, but gradually acknowledging the reality of it and finding ways to move forward. Acceptance does not mean the grief disappears &mdash; it means learning to live with it." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 card">
                  <span className="text-sm font-mono font-bold text-sage-600 dark:text-sage-400 w-4 flex-shrink-0">{i + 1}</span>
                  <div>
                    <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-200">{item.stage}</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <p>
              <strong>An important caveat:</strong> K&uuml;bler-Ross herself later clarified that these stages were never meant to be a linear, prescriptive framework. Modern grief research has moved well beyond this model, and clinicians now emphasize that grief does not follow a predictable sequence. You may experience some stages and not others, revisit stages you thought you had passed, or experience multiple stages simultaneously. The stages remain useful as a vocabulary for common grief experiences, but they should not be treated as a roadmap.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Modern grief models: how research has evolved</h2>
            <p>
              Contemporary grief research offers frameworks that better reflect the complexity and variability of the grief experience.
            </p>
            <p>
              <strong>The Dual Process Model</strong> (Stroebe &amp; Schut, 1999) describes grief as an oscillation between two orientations: loss-oriented coping (confronting the emotional pain of the loss, yearning for the deceased, processing the death) and restoration-oriented coping (attending to the practical changes that follow loss, building a new identity, engaging with the world). Healthy grieving involves moving back and forth between these two orientations rather than staying stuck in either one.
            </p>
            <p>
              <strong>Continuing Bonds theory</strong> challenges the older assumption that &quot;successful&quot; grief requires severing emotional ties with the deceased. Research now shows that maintaining an ongoing internal relationship with the person who died &mdash; through memories, rituals, conversations, or a sense of their continued presence &mdash; is common, healthy, and often comforting. Grief does not require letting go; it requires finding a new way to hold on.
            </p>
            <p>
              These models help explain why grief looks so different from person to person and why well-meaning advice like &quot;you need to move on&quot; can feel so dismissive. Grief is not a problem to solve &mdash; it is a process to live through.
            </p>
          </section>

          <section>
            <h2>Physical and emotional symptoms of grief</h2>
            <p>
              Grief is not just an emotional experience &mdash; it has significant physical manifestations that many people do not expect.
            </p>
            <p>
              <strong>Physical symptoms</strong> commonly include sleep disruption (insomnia or sleeping too much), appetite changes (loss of appetite or overeating), profound fatigue, headaches, muscle tension, digestive problems, and a weakened immune system. Research has shown that bereaved individuals have higher rates of illness and medical visits in the months following a significant loss. The stress hormones released during acute grief can affect cardiovascular health, which is why the risk of heart attack increases in the weeks after losing a spouse.
            </p>
            <p>
              <strong>Emotional symptoms</strong> can include profound sadness, numbness or emotional flatness, guilt (especially &quot;survivor&apos;s guilt&quot; or guilt about things left unsaid), anger, anxiety about the future or about one&apos;s own mortality, difficulty concentrating, and a sense that life has lost its meaning. These responses are all within the range of normal grief. They become concerning when they persist at high intensity for 12 months or more without any gradual improvement.
            </p>
            <p>
              If you are noticing symptoms that overlap with depression &mdash; persistent hopelessness, loss of interest in everything, difficulty functioning at work or in daily life &mdash; a screening tool like the <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9 depression screening</Link> can help you reflect on whether additional support may be warranted. Grief and depression can coexist, and recognizing that overlap is important.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Types of grief you may not recognize</h2>
            <p>
              Not all grief follows the expected pattern of mourning after a death. Several types of grief are commonly experienced but less frequently discussed:
            </p>
            <p>
              <strong>Anticipatory grief</strong> occurs before the actual loss &mdash; when a loved one has a terminal illness, for example. You may begin grieving while the person is still alive, which can bring guilt and confusion alongside the sadness. Anticipatory grief is real grief, and it deserves the same support and compassion.
            </p>
            <p>
              <strong>Disenfranchised grief</strong> refers to losses that society does not fully acknowledge or validate &mdash; the death of an ex-partner, a miscarriage, the loss of a pet, the death of someone you knew only online, or the grief that accompanies estrangement from a living family member. When grief is not socially recognized, bereaved individuals often feel they have no right to mourn, which can intensify the pain and delay processing.
            </p>
            <p>
              <strong>Ambiguous loss</strong> describes situations where the loss lacks clarity or closure &mdash; a missing person, a loved one with severe dementia who is physically present but psychologically absent, or the loss of a relationship without a clear ending. Ambiguous loss is particularly challenging because it resists the resolution that other forms of grief eventually allow.
            </p>
          </section>

          <section>
            <h2>Prolonged grief disorder: when grief becomes a clinical concern</h2>
            <p>
              In 2022, the American Psychiatric Association added prolonged grief disorder (PGD) to the DSM-5-TR, making it a formally recognized clinical condition for the first time. The World Health Organization had previously included it in the ICD-11 as &quot;prolonged grief disorder.&quot;
            </p>
            <p>
              PGD is characterized by intense longing or yearning for the deceased and preoccupation with the death that persists for at least 12 months after the loss (6 months or more under ICD-11 criteria). Additional symptoms may include identity disruption (&quot;I don&apos;t know who I am without them&quot;), emotional numbness, difficulty reengaging with life, avoidance of reminders of the loss, and a sense that life is meaningless.
            </p>
            <p>
              Approximately 7 to 10 percent of bereaved individuals develop PGD. Risk factors include the sudden or violent death of a loved one, loss of a child or partner, a history of mental health conditions, limited social support, and a highly dependent relationship with the deceased. PGD is distinct from depression and PTSD, though it can co-occur with both.
            </p>
            <p>
              Effective treatments for PGD exist, including targeted psychotherapy approaches. If you are concerned that your grief may have become prolonged or complicated, taking the <Link href="/grief-assessment" className="text-sage-600 dark:text-sage-400 underline">grief assessment screening</Link> on this site can help you reflect on your experience. It is free, private, and may provide useful context for a conversation with a healthcare provider.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <section>
            <h2>When to seek professional help for grief</h2>
            <p>
              Grief is not inherently something that requires professional intervention &mdash; most people process loss with the support of family, friends, community, and time. However, there are situations where professional help can make a significant difference:
            </p>
            <p>
              You may benefit from grief counseling or therapy if your grief symptoms remain at the same intensity for many months without any gradual easing, if you are unable to carry out daily responsibilities, if you are relying on alcohol or other substances to manage the pain, if you are experiencing persistent thoughts that life is not worth living, if you feel &quot;stuck&quot; and unable to process the loss, or if people close to you are expressing concern about how you are coping.
            </p>
            <p>
              Grief therapy is not about &quot;fixing&quot; your grief or making you &quot;get over&quot; the loss. It provides a structured, supportive space to process your experience, develop coping strategies, and begin integrating the loss into your ongoing life. If your symptoms overlap with depression or anxiety, a clinician can help determine whether additional screening or support is appropriate. A <Link href="/safety-plan" className="text-sage-600 dark:text-sage-400 underline">safety plan</Link> can also be a valuable resource if you are experiencing thoughts of self-harm during the grieving process.
            </p>
          </section>

          {/* Crisis Resources */}
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-700 dark:text-red-400 mb-2">Crisis Resources</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-2">
              If you or someone you know is in crisis or experiencing thoughts of suicide, please reach out immediately:
            </p>
            <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
              <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong> (available 24/7)</li>
              <li><strong>Crisis Text Line:</strong> Text <strong>HOME</strong> to <strong>741741</strong></li>
              <li><strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <strong className="text-amber-700 dark:text-amber-400">Important:</strong> This article is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Screening tools may help you reflect on your experience but are not a clinical assessment. If you are concerned about your grief or mental health, please consult a qualified healthcare provider.
            </p>
          </div>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">How is your grief affecting you?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Our grief assessment screening is free, private, and takes just a few minutes. Your answers are processed in your browser and never stored.</p>
            <Link href="/grief-assessment" className="btn-primary text-sm">Take the Grief Assessment Screening</Link>
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
              <Link href="/grief-assessment" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Grief Assessment</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">A private screening to help you reflect on how grief is affecting your daily life</p>
              </Link>
              <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">A validated screening for depressive symptoms used by clinicians worldwide</p>
              </Link>
              <Link href="/safety-plan" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Safety Plan</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Create a personal safety plan with coping strategies and emergency contacts</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
