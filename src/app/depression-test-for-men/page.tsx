import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { PHQ9Client } from "../phq-9-depression-test/PHQ9Client";

const TOOL_URL = `${SITE_URL}/depression-test-for-men`;

export const metadata: Metadata = createMetadata({
  path: "/depression-test-for-men",
  title: "Depression Test for Men — Free PHQ-9 Screening",
  description: "Free depression screening for men using the PHQ-9. Private, instant results. No signup.",
  keywords: [
    "depression test for men", "male depression screening", "depression in men",
    "men depression quiz", "depression symptoms men", "male depression signs",
    "depression anger men", "men mental health test", "phq-9 men",
    "depression irritability men", "free depression test men",
  ],
  openGraph: {
    title: "Depression Test for Men — Free PHQ-9 Screening",
    description: "Free, private depression screening for men using the clinically validated PHQ-9. Instant results, no signup required.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "Why do men experience depression differently?",
    answer: "Depression in men often manifests as anger, irritability, aggression, or recklessness rather than sadness. This is partly biological (hormonal differences affect mood regulation) and partly social (men are socialized to suppress vulnerability and sadness but are permitted to express anger). Many men don\u2019t recognize these symptoms as depression.",
  },
  {
    question: "Can depression cause anger and irritability?",
    answer: "Yes. Irritability and anger are among the most common depression symptoms in men. Research shows that men with depression are more likely to report anger attacks, aggression, risk-taking behavior, and substance use than sadness or crying. If you\u2019ve noticed increased irritability or a shorter fuse, depression may be a factor.",
  },
  {
    question: "Why don\u2019t men seek help for depression?",
    answer: "Multiple barriers exist: stigma around mental health, cultural expectations of self-reliance and toughness, not recognizing symptoms (because they don\u2019t match the stereotypical image of depression), fear of appearing weak, concern about career impact, and difficulty articulating emotional experiences. These barriers are real but surmountable.",
  },
  {
    question: "Is depression linked to substance use in men?",
    answer: "Strongly. Men with depression are more likely to use alcohol and drugs as coping mechanisms. This creates a cycle: substances provide temporary relief but worsen depression over time. If you\u2019re finding yourself drinking more, using substances to manage stress or sleep, or noticing increased tolerance, exploring both depression and substance use is important.",
  },
  {
    question: "What treatments work best for men?",
    answer: "Cognitive behavioral therapy (CBT) is well-suited to many men because it is structured, practical, and skills-based. Medication (SSRIs, SNRIs) is effective and can be prescribed by a primary care provider. Exercise has robust evidence as a complementary treatment. Many men prefer action-oriented approaches. The most important step is starting \u2014 the specific treatment matters less than taking action.",
  },
];

export default function DepressionTestForMenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolPageJsonLd({ name: "Depression Test for Men — PHQ-9 Screening", description: "A free, private depression screening tool for men using the clinically validated PHQ-9 questionnaire.", url: TOOL_URL, datePublished: "2026-03-08", dateModified: "2026-03-08" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "PHQ-9 Depression Test", url: `${SITE_URL}/phq-9-depression-test` }, { name: "Depression Test for Men", url: TOOL_URL }])) }} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">Clinically Validated (PHQ-9)</span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">Men</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">Depression Test for Men</h1>

        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            Depression in men often doesn&apos;t look like what most people picture. It&apos;s not always
            sadness or crying — for many men, it shows up as irritability, anger, recklessness, drinking
            more than usual, throwing yourself into work until you collapse, or physical complaints like
            headaches and back pain that never seem to go away. Men are socialized from a young age not
            to express vulnerability, so when depression hits, it often gets misidentified as stress,
            burnout, or just &quot;being in a bad mood.&quot; Many men don&apos;t recognize what
            they&apos;re feeling as depression because it doesn&apos;t match the stereotype — and that
            means they suffer longer without support.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            This free screening can help you identify patterns you might be overlooking. It uses the
            <strong> PHQ-9</strong>, the same clinically validated tool your doctor uses to screen for
            depression. It takes about 3 minutes, everything happens in your browser, and nothing is
            stored or shared with anyone. This is <strong>not a diagnosis</strong> — it&apos;s a
            private starting point for understanding what you&apos;re going through and deciding
            what to do next.
          </p>
        </div>

        <div className="mb-10">
          <a href="#screening" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold text-base hover:bg-blue-700 transition-colors shadow-sm">Start the Depression Screening</a>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Takes about 3 minutes. Completely private — nothing is stored or shared.</p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Why This Matters</h2>
          <div className="grid gap-4">
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-1">Men are 4x more likely to die by suicide</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">Despite lower reported depression rates, men account for nearly 80% of suicide deaths in the U.S. Depression in men is underrecognized and undertreated.<span className="text-slate-500 dark:text-slate-400"> — CDC / AFSP</span></p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-1">Less than 40% seek help</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">Fewer than 40% of men with depression seek professional help. Stigma, stoicism norms, and not recognizing symptoms are major barriers.<span className="text-slate-500 dark:text-slate-400"> — NIMH</span></p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-1">Different symptoms</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">Men with depression are more likely to present with anger, irritability, risk-taking, substance use, and physical complaints rather than sadness and crying.<span className="text-slate-500 dark:text-slate-400"> — Harvard Health</span></p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Understanding Depression in Men</h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>Depression in men frequently presents differently than the textbook image most people carry. Rather than persistent sadness or tearfulness, men are more likely to experience anger, irritability, aggression, and a noticeably shorter fuse. Reckless behavior — driving too fast, picking fights, risky financial decisions — can also be a sign. Many men throw themselves into work as a way to avoid sitting with how they feel, leading to workaholism that looks productive on the surface but is actually a coping mechanism. Physical symptoms are also common: chronic headaches, digestive problems, back pain, and unexplained fatigue that doesn&apos;t improve with rest.</p>
            <p>The reasons men underreport depression are deeply rooted in how boys are raised. From a young age, many men are taught that expressing vulnerability is weakness, that &quot;real men&quot; handle things on their own, and that emotional pain should be pushed down or powered through. These messages create a framework where acknowledging depression feels like failure. Many men genuinely do not recognize what they&apos;re experiencing as depression because their symptoms don&apos;t match the cultural script — they&apos;re angry, not sad, so they assume it must be something else.</p>
            <p>The connection between depression and substance use in men is particularly strong. Many men self-medicate with alcohol, marijuana, or other substances — not to get high, but to get through the day, to sleep at night, or to quiet the noise in their heads. This creates a destructive cycle: substances provide temporary relief but worsen depression over time, increase isolation, and create additional problems (relationship conflict, health consequences, work issues) that deepen the depression further. If you&apos;ve noticed your drinking increasing or that you need substances to function, depression may be an underlying factor worth exploring.</p>
            <p>Seeking help for depression is not weakness — it is one of the most practical, effective decisions a man can make. Cognitive behavioral therapy (CBT) is structured, skills-based, and action-oriented, which many men find appealing. Medication works. Exercise has strong evidence as a complementary approach. Treatment for depression is effective in the majority of cases, and early intervention prevents escalation into more severe episodes, relationship breakdown, job loss, or worse. The barrier is not whether treatment works — it&apos;s whether men are willing to take the first step. You&apos;re already here. That counts.</p>
          </div>
        </div>
      </div>

      <div id="screening">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">Take the PHQ-9 Depression Screening</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">Answer each question based on how you&apos;ve been feeling over the past two weeks.</p>
        </div>
        <PHQ9Client faqData={FAQ_DATA} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Your Next Steps</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk to your doctor</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                If talking about emotions feels uncomfortable, frame it as physical symptoms — many men
                find it easier to start with their primary care provider. Mention the fatigue, the sleep
                problems, the headaches. Your doctor can screen for depression from there. You don&apos;t
                have to have the perfect words.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Consider therapy</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Cognitive behavioral therapy (CBT) is highly effective for depression and is practical
                and action-oriented — you learn specific skills and strategies, not just talk about
                feelings. Many men find this structured approach appealing. Online therapy options make
                it accessible without needing to sit in a waiting room.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Check your substance use</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                If you&apos;ve been drinking more or using substances to cope with how you&apos;re
                feeling, that&apos;s worth paying attention to. Depression and substance use often
                reinforce each other. Our{" "}
                <Link href="/audit-alcohol-test" className="text-blue-600 dark:text-blue-400 hover:underline">
                  alcohol screening
                </Link>{" "}
                and{" "}
                <Link href="/dast-10-drug-screening" className="text-blue-600 dark:text-blue-400 hover:underline">
                  drug screening
                </Link>{" "}
                tools can help you understand where you stand.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-crisis-50 dark:bg-crisis-950/30 border border-crisis-200 dark:border-crisis-800 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Crisis Resources</h2>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong> — free, 24/7, confidential</li>
            <li><strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> — free referrals, 24/7</li>
          </ul>
        </div>

        <div className="mb-6"><p className="text-sm text-slate-500 dark:text-slate-400 italic">This screening tool is for educational purposes only — it is not a diagnosis. Only a qualified healthcare professional can assess depression. Your responses are processed entirely in your browser and are never stored or transmitted. Always consult a qualified healthcare professional for medical advice.</p></div>

        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400"><strong>Reviewed by Jason Ramirez, Certified Drug and Alcohol Counselor (CADC-II)</strong> with 11 years of clinical experience in substance abuse counseling.</p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Last reviewed: March 2026 by Jason Ramirez, Certified Drug and Alcohol Counselor (CADC-II) with 11 years of clinical experience.</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/phq-9-depression-test" className="text-sky-600 dark:text-sky-400 hover:underline">PHQ-9 Depression Test →</Link>
          <Link href="/gad-7-anxiety-test" className="text-sky-600 dark:text-sky-400 hover:underline">GAD-7 Anxiety Test →</Link>
          <Link href="/audit-alcohol-test" className="text-sky-600 dark:text-sky-400 hover:underline">AUDIT Alcohol Test →</Link>
        </div>
      </div>
    </>
  );
}
