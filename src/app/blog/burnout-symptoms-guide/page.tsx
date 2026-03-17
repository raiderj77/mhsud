import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/burnout-symptoms-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "burnout-symptoms-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/burnout-symptoms-guide",
  title: "Burnout Symptoms: How to Recognize the Signs Before It Gets Worse",
  description:
    "Learn the WHO ICD-11 definition of burnout, the three Maslach dimensions, physical and emotional warning signs, and how burnout differs from depression.",
  keywords: [
    "burnout symptoms", "signs of burnout", "am I burned out",
    "burnout vs depression", "workplace burnout", "burnout assessment",
    "emotional exhaustion signs", "burnout physical symptoms",
    "Maslach burnout dimensions", "WHO burnout definition",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  { question: "Can burnout cause physical symptoms?", answer: "Yes. Chronic workplace stress triggers sustained activation of the body\u2019s stress-response system, which can produce measurable physical effects. Common physical symptoms associated with burnout include persistent fatigue that sleep does not resolve, frequent headaches and muscle tension, gastrointestinal problems, weakened immune function (getting sick more often), and changes in appetite or sleep patterns. If you are experiencing unexplained physical symptoms alongside emotional exhaustion at work, mention both to your healthcare provider." },
  { question: "How is burnout different from depression?", answer: "The key distinction is context. Burnout is typically anchored to work \u2014 symptoms intensify during the workweek and may partially improve during extended time off. Depression is pervasive and affects how you feel about everything, not just your job. However, the line blurs over time: chronic, unaddressed burnout can develop into clinical depression. If you are unsure which you are experiencing, a mental health professional can help you sort it out." },
  { question: "Can you recover from burnout without quitting your job?", answer: "Yes, though it requires deliberate changes. Research supports strategies such as setting firm boundaries around work hours, renegotiating workload or role expectations, taking real breaks during the day, using available mental health resources (EAP, therapy), and building recovery activities into your routine. Recovery without leaving your job is more feasible when your employer is willing to address systemic issues \u2014 not just individual coping." },
  { question: "How long does it take to recover from burnout?", answer: "Recovery timelines vary widely depending on severity and circumstances. Mild burnout may improve in a few weeks with boundary changes and rest. Moderate to severe burnout often takes several months, even with professional support and workplace changes. Full recovery is not just about feeling less tired \u2014 it involves rebuilding motivation, engagement, and a sense of professional competence. Working with a therapist can help accelerate and sustain recovery." },
];

export default function BurnoutSymptomsGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Burnout Symptoms: How to Recognize the Signs Before It Gets Worse", description: "A comprehensive guide to recognizing burnout symptoms, understanding the WHO ICD-11 definition, the three Maslach dimensions, and distinguishing burnout from depression.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Burnout Symptoms Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">8 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Burnout Symptoms: How to Recognize the Signs Before It Gets Worse
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Burnout doesn&apos;t arrive all at once. It builds gradually &mdash; a slow erosion of energy, motivation, and purpose that many people don&apos;t recognize until they&apos;re deep in it. According to a 2023 Gallup survey, 77% of workers have experienced burnout at their current job. This guide explains what burnout actually is, what the warning signs look like, how it differs from depression, and what to do if you think you&apos;re heading in that direction.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/burnout-assessment-tool" className="btn-primary text-sm">
              Take the Burnout Assessment &rarr;
            </Link>
            <Link href="/work-stress-check" className="btn-primary text-sm">
              Take the Work Stress Self-Check &rarr;
            </Link>
          </div>
        </header>

        <div className="prose-mh space-y-8">
          <section>
            <h2>What is burnout? The WHO ICD-11 definition</h2>
            <p>
              In 2019, the World Health Organization formally included burnout in the 11th Revision of the International Classification of Diseases (ICD-11). Importantly, burnout is classified as an &quot;occupational phenomenon&quot; &mdash; not a medical condition. The WHO defines it as a syndrome resulting from chronic workplace stress that has not been successfully managed.
            </p>
            <p>
              This classification matters because it frames burnout as context-specific. Unlike depression or anxiety disorders, burnout is explicitly tied to the work environment. It is not something that happens to you in isolation &mdash; it emerges from a mismatch between a person and their job. The WHO definition also means that burnout is not a formal medical or psychiatric diagnosis, which can make it harder to address through traditional healthcare channels.
            </p>
            <p>
              The ICD-11 description specifies three dimensions of burnout, which align closely with the Maslach Burnout Inventory (MBI) &mdash; the most widely used research instrument for measuring burnout, developed by Christina Maslach and Susan Jackson.
            </p>
          </section>

          <section>
            <h2>The three dimensions of burnout (Maslach model)</h2>
            <p>
              Both the WHO and decades of research identify three core dimensions that define burnout. All three must be present for the experience to qualify as burnout rather than ordinary stress.
            </p>
            <p>
              <strong>Emotional exhaustion</strong> is the most recognized dimension. It goes beyond feeling tired after a long day. Emotional exhaustion means feeling chronically drained &mdash; physically, emotionally, and cognitively &mdash; in a way that rest does not resolve. People experiencing emotional exhaustion often describe waking up already tired, even after adequate sleep. They feel depleted before the workday begins.
            </p>
            <p>
              <strong>Depersonalization and cynicism</strong> refers to an increasing mental distance from your work, colleagues, or clients. You may notice yourself becoming cynical, sarcastic, or emotionally detached. Healthcare workers may begin referring to patients by their conditions rather than their names. Teachers may stop caring whether students learn. This dimension is the mind&apos;s way of protecting itself from further emotional depletion &mdash; but it comes at a significant cost to both the individual and those around them.
            </p>
            <p>
              <strong>Reduced personal accomplishment</strong> involves a declining sense of competence and effectiveness. Even when you are objectively performing well, burnout makes you feel like nothing you do matters or makes a difference. This dimension often creates a vicious cycle: feeling ineffective reduces motivation, which reduces effort, which produces poorer results, which confirms the feeling of ineffectiveness.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Physical symptoms of burnout</h2>
            <p>
              One reason burnout is hard to recognize is that people often attribute its physical symptoms to other causes. Chronic workplace stress produces measurable physiological effects through sustained activation of the hypothalamic-pituitary-adrenal (HPA) axis &mdash; the body&apos;s primary stress-response system.
            </p>
            <p>
              <strong>Chronic fatigue</strong> is the hallmark physical symptom. Unlike ordinary tiredness, burnout-related fatigue persists regardless of how much sleep you get. Your body feels heavy. Simple tasks require disproportionate effort. Recovery time after work grows longer until there isn&apos;t enough evening or weekend to bounce back.
            </p>
            <p>
              <strong>Sleep disruption</strong> is common, including difficulty falling asleep, staying asleep, or waking unrefreshed. Paradoxically, exhausted people with burnout often struggle with insomnia because their stress-response system remains activated even at rest.
            </p>
            <p>
              <strong>Headaches and muscle tension</strong> &mdash; particularly in the neck, shoulders, and jaw &mdash; are frequently reported. <strong>Gastrointestinal issues</strong> including nausea, stomach pain, and changes in appetite are also common. <strong>Weakened immunity</strong> shows up as frequent colds, infections, or slow healing. Research has linked chronic occupational stress to elevated cortisol levels, systemic inflammation, and increased cardiovascular risk.
            </p>
            <p>
              If you are experiencing persistent physical symptoms alongside work-related exhaustion, it is worth mentioning both to your healthcare provider. The connection between chronic stress and physical health is well-established.
            </p>
          </section>

          <section>
            <h2>Emotional and behavioral warning signs</h2>
            <p>
              The emotional symptoms of burnout extend well beyond feeling tired or frustrated. <strong>Detachment and cynicism</strong> may show up as dark humor about work, emotional numbness toward colleagues or clients, or a pervasive sense that nothing about your job matters. <strong>Feeling ineffective</strong> &mdash; questioning your competence, doubting your contributions, or feeling like an impostor &mdash; is a hallmark of the reduced accomplishment dimension.
            </p>
            <p>
              <strong>Loss of motivation</strong> is common. Tasks that once engaged you now feel meaningless. You may dread Mondays with a visceral intensity. Irritability and a shortened temper often bleed into personal relationships &mdash; snapping at a partner or withdrawing from friends not because of anything they did, but because you have no emotional reserves left.
            </p>
            <p>
              Behaviorally, burnout tends to produce <strong>withdrawal</strong> &mdash; pulling back from social interaction, skipping meetings, avoiding collaboration. <strong>Reduced productivity</strong> follows, not from laziness but from genuine cognitive depletion. <strong>Neglecting responsibilities</strong> at work and home, increased use of alcohol or other substances to cope, and difficulty making even small decisions are all behavioral indicators that burnout may be progressing.
            </p>
            <p>
              If several of these patterns feel familiar, our free <Link href="/burnout-assessment-tool" className="text-sage-600 dark:text-sage-400 underline">burnout self-assessment</Link> can help you reflect on where you stand &mdash; though it is a starting point for self-awareness, not a clinical evaluation.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Burnout vs. depression: how to tell the difference</h2>
            <p>
              Burnout and depression share many symptoms &mdash; fatigue, difficulty concentrating, loss of motivation, sleep disruption, and feelings of hopelessness. This overlap is one reason professional assessment matters, and why self-screening alone is never sufficient.
            </p>
            <p>
              The key distinction is scope. <strong>Burnout is context-specific</strong>: it is anchored to work and may partially improve during extended time off or when work conditions change. <strong>Depression is pervasive</strong> &mdash; it affects how you feel about everything, not just your job. A person with burnout may still enjoy hobbies, relationships, and activities outside work. A person with depression typically finds that pleasure and motivation diminish across all domains of life.
            </p>
            <p>
              However, this distinction becomes less clear over time. Chronic, unaddressed burnout can develop into clinical depression. A 2021 meta-analysis published in <em>Annals of Medicine</em> found significant overlap between burnout and depressive symptoms, with prolonged burnout increasing the risk of developing major depressive disorder. At that point, the label matters less than getting professional support.
            </p>
            <p>
              If you are wondering whether what you are experiencing may be depression, our <Link href="/dass-21-depression-anxiety-stress" className="text-sage-600 dark:text-sage-400 underline">DASS-21 screening</Link> can help you reflect on depression, anxiety, and stress symptoms together.
            </p>
          </section>

          <section>
            <h2>Risk factors: who is most vulnerable?</h2>
            <p>
              Burnout is not simply a matter of individual resilience or coping skills &mdash; it is fundamentally a problem of fit between a person and their work environment. Research by Maslach and Leiter identified six key areas of work-life mismatch that drive burnout:
            </p>
            <p>
              <strong>Workload</strong> &mdash; consistently too much work with too little time or too few resources. <strong>Lack of control</strong> &mdash; insufficient autonomy over how, when, or where you do your work. <strong>Insufficient reward</strong> &mdash; inadequate financial, social, or intrinsic recognition for effort. <strong>Breakdown of community</strong> &mdash; isolation, conflict, or lack of social support at work. <strong>Absence of fairness</strong> &mdash; inequity in workload, pay, promotions, or accountability. <strong>Value conflict</strong> &mdash; being required to do work that contradicts your personal values or professional ethics.
            </p>
            <p>
              Certain professions carry elevated risk. Healthcare workers, teachers, social workers, and first responders consistently show higher burnout rates due to high emotional demands combined with systemic under-resourcing. A 2022 Surgeon General advisory specifically identified healthcare worker burnout as a national crisis. But burnout can affect anyone in any field when these mismatches persist.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <section>
            <h2>What to do if you think you are burning out</h2>
            <p>
              Recognizing burnout is the first step. Here are evidence-informed actions to consider:
            </p>
            <p>
              <strong>Name it.</strong> Simply acknowledging that what you are experiencing may be burnout &mdash; rather than personal weakness or laziness &mdash; can reduce shame and open the door to constructive action. Our <Link href="/burnout-assessment-tool" className="text-sage-600 dark:text-sage-400 underline">burnout assessment tool</Link> can help you structure that reflection.
            </p>
            <p>
              <strong>Talk to someone.</strong> A therapist, counselor, or your primary care provider can help you determine whether you are dealing with burnout, depression, or both &mdash; and can work with you on a plan that accounts for your specific circumstances. Employee Assistance Programs (EAPs) often provide free, confidential sessions.
            </p>
            <p>
              <strong>Set boundaries.</strong> This does not mean doing less &mdash; it means being deliberate about when work ends. Stop checking email after hours. Take real lunch breaks. Use your vacation days. These are not luxuries; they are maintenance.
            </p>
            <p>
              <strong>Address systemic issues where possible.</strong> Burnout is rarely solved by individual coping alone. If your workload is unsustainable, have a direct conversation with your manager. If the culture is toxic, document and escalate. Some situations can be improved from within; others require leaving. Both are valid.
            </p>
            <p>
              <strong>Prioritize recovery activities.</strong> Exercise has strong evidence for reducing stress and improving mood. Social connection outside work, creative activities, and time in nature all support recovery. The key is that recovery requires activities that genuinely restore you &mdash; not passive scrolling or numbing out.
            </p>
          </section>

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is for educational purposes only. It is not a substitute for professional evaluation, and nothing here should be interpreted as a diagnosis or treatment recommendation. Burnout screening tools &mdash; including ours &mdash; are reflection aids, not diagnostic instruments. If you are experiencing persistent exhaustion, cynicism, or reduced effectiveness at work, please consult a qualified healthcare provider.
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
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Think you might be burning out?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, takes about 3 minutes. Your answers never leave your browser.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/burnout-assessment-tool" className="btn-primary text-sm">Take the Burnout Assessment</Link>
              <Link href="/work-stress-check" className="btn-primary text-sm">Take the Work Stress Self-Check</Link>
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
              <Link href="/burnout-assessment-tool" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Burnout Assessment Tool</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Reflect on the three dimensions of burnout</p>
              </Link>
              <Link href="/work-stress-check" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Work Stress Self-Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Assess your current work stress levels</p>
              </Link>
              <Link href="/dass-21-depression-anxiety-stress" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">DASS-21 Depression, Anxiety &amp; Stress</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Screen for depression, anxiety, and stress in one sitting</p>
              </Link>
              <Link href="/compassion-fatigue-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Compassion Fatigue Test</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">For caregivers and helping professionals</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/work-stress-vs-burnout" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Work Stress vs. Burnout</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">How to tell the difference and when online quizzes fall short</p>
              </Link>
              <Link href="/blog/when-should-i-see-a-therapist" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">When Should I See a Therapist?</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">10 signs it may be time to talk to a mental health professional</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
