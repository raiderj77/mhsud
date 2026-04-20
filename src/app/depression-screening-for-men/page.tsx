import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { PHQ9Client } from "../phq-9-depression-test/PHQ9Client";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";

const TOOL_URL = `${SITE_URL}/depression-screening-for-men`;

export const metadata: Metadata = createMetadata({
  path: "/depression-screening-for-men",
  title: "Depression Screening for Men — Free PHQ-9",
  description:
    "Men are diagnosed with depression at half the rate of women — not because they experience it less, but because it looks different. Free validated PHQ-9 screening with context on how depression actually presents in men.",
  keywords: [
    "depression screening men", "depression test for men", "male depression symptoms",
    "men and depression signs", "PHQ-9 men", "depression in men anger",
    "male depression quiz", "men mental health screening", "free depression test men",
    "depression symptoms men irritability", "men depression underdiagnosed",
  ],
  openGraph: {
    title: "Depression Screening for Men — Free PHQ-9",
    description: "Free, private depression screening for men using the clinically validated PHQ-9. Instant results, no signup required.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "Is it normal to not feel 'sad' with depression?",
    answer: "Yes. Sadness is not required for a depression diagnosis — loss of interest or pleasure (anhedonia) is the alternative core criterion. Many men with clinical depression describe flatness, emptiness, or irritability rather than sadness. The PHQ-9 asks about both.",
  },
  {
    question: "Can exercise fix depression?",
    answer: "Exercise has a meaningful effect on mild to moderate depression — effect sizes comparable to medication in some studies. It is a legitimate part of treatment. It is not a substitute for professional care at moderate to severe severity, and it doesn't address the underlying causes. Use it as a component, not a replacement.",
  },
  {
    question: "What if I don't want to tell anyone?",
    answer: "That position is worth examining. The fear of others knowing is often one of the strongest symptoms of depression — the belief that you should be able to handle this, that disclosing would change how people see you. Many men who finally seek help report that their first appointment was far less difficult than they anticipated, and that they wish they'd gone sooner.",
  },
  {
    question: "Why are men diagnosed with depression less often than women?",
    answer: "Several factors converge: stigma prevents men from reporting symptoms, depression in men more often presents as irritability and anger rather than sadness, screening tools emphasize presentations more common in women, clinicians are statistically less likely to diagnose depression in men with equivalent symptom severity, and men visit primary care less frequently — reducing screening opportunities.",
  },
  {
    question: "Does alcohol make depression worse?",
    answer: "Yes. Alcohol is a CNS depressant that acutely dulls emotional pain but reliably worsens depression over time, especially in the days following drinking. Men who use alcohol to manage low mood typically find their baseline mood deteriorating, requiring more alcohol to achieve the same effect. This is one of the most common pathways to co-occurring depression and alcohol use disorder in men.",
  },
  {
    question: "How effective is treatment for depression in men?",
    answer: "Very effective. Men respond just as well to treatment as anyone else. CBT and other evidence-based therapies, medication (SSRIs), exercise, and lifestyle changes are all effective. Many men find that addressing depression improves not just mental health but physical health, relationships, and work performance. The biggest barrier is not treatment effectiveness — it's getting men to start.",
  },
];

export default function DepressionScreeningForMenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolPageJsonLd({ name: "Depression Screening for Men — PHQ-9", description: "A free, private depression screening tool for men using the clinically validated PHQ-9.", url: TOOL_URL, datePublished: "2026-03-10", dateModified: "2026-03-10" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "PHQ-9 Depression Test", url: `${SITE_URL}/phq-9-depression-test` }, { name: "Depression Screening for Men", url: TOOL_URL }])) }} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">Clinically Validated (PHQ-9)</span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">Men&apos;s Mental Health</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Depression Screening for Men
        </h1>

        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            You might not call it depression. It might feel like a short fuse that wasn&apos;t there
            before. A flatness where motivation used to be. More drinks than you planned. Working
            longer hours to avoid sitting with your own thoughts. Men experience depression
            differently — and because of that, it goes unrecognized, untreated, and sometimes fatal.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Men are diagnosed with depression at roughly <strong>half the rate of women</strong> — not
            because they experience it less, but because it looks different in men, and because asking
            for help conflicts with what many men have been taught strength looks like. This free
            screening uses the <strong>PHQ-9</strong>, the same tool your doctor uses. It is{" "}
            <strong>not a diagnosis</strong> — but it can start to put language to something you may
            have been carrying alone.
          </p>
        </div>

        <div className="mb-10">
          <a href="#screening" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold text-base hover:bg-blue-700 transition-colors shadow-sm">
            Start the Depression Screening
          </a>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Takes about 3 minutes. Completely private — nothing is stored or shared.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Why This Matters</h2>
          <div className="grid gap-4">
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-1">3.5× suicide rate</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Men die by suicide at 3.5 times the rate of women in the United States — despite
                lower diagnosis rates for depression.
                <span className="text-slate-500 dark:text-slate-400"> — AFSP, 2023</span>
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-1">½ the diagnosis rate</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Men are diagnosed with depression at approximately half the rate of women, despite
                comparable underlying prevalence.
                <span className="text-slate-500 dark:text-slate-400"> — NIMH</span>
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-1">6 million</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Estimated US men affected by depression annually, the majority undiagnosed and
                untreated.
                <span className="text-slate-500 dark:text-slate-400"> — NIMH</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            How Depression Actually Looks in Men
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              The classic depression picture — persistent sadness, tearfulness, visible
              withdrawal — is more common in women. Men with depression more frequently present with:
            </p>
            <p>
              <strong>Irritability and anger:</strong> A short fuse, road rage, snapping at family
              members, intolerance for minor frustrations. This is often not recognized as
              depression — by the man experiencing it or the people around him.
            </p>
            <p>
              <strong>Emotional flatness:</strong> Many men with depression describe not sadness but
              numbness — going through the motions, loss of interest in things that used to matter, a
              sense that nothing is particularly worth doing. Anhedonia without the visible sadness.
            </p>
            <p>
              <strong>Risk-taking and recklessness:</strong> Increased alcohol use, substance use,
              gambling, aggressive driving, sexual risk-taking — attempts to feel something, escape
              internal numbness, or self-medicate emotional pain.
            </p>
            <p>
              <strong>Physical complaints:</strong> Chronic headaches, back pain, digestive problems,
              fatigue, and elevated blood pressure. Many men with depression see multiple specialists
              for physical symptoms before anyone screens for depression.
            </p>
            <p>
              <strong>Overworking:</strong> Throwing themselves into work or projects as a way to stay
              out of their own head. Being constantly busy as an avoidance strategy.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            The Underdiagnosis Problem
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>Several factors converge to create systematic underdiagnosis in men:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Stigma:</strong> In many cultural contexts, acknowledging emotional distress
                is framed as weakness. Men who have internalized this are less likely to recognize
                depression, less likely to disclose it, and less likely to seek help.
              </li>
              <li>
                <strong>Screening calibration:</strong> The PHQ-9 emphasizes sadness and
                tearfulness — presentations more common in women. Male-typical presentations
                (irritability, somatic complaints, anhedonia without sadness) can score lower than the
                clinical reality.
              </li>
              <li>
                <strong>Clinician bias:</strong> Research shows clinicians are less likely to diagnose
                depression in men presenting with equivalent symptom severity compared to women
                (Bertakis et al., 2001).
              </li>
              <li>
                <strong>Healthcare avoidance:</strong> Men visit primary care physicians significantly
                less often than women, reducing opportunities for routine screening.
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            The Alcohol Connection
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              Alcohol and male depression have a particularly important relationship. Alcohol is a CNS
              depressant that acutely dulls emotional pain — making it an obvious self-medication tool
              for men who can&apos;t or won&apos;t name what they&apos;re feeling.
            </p>
            <p>
              The problem: alcohol reliably worsens depression, especially in the days following
              drinking. A man using alcohol to manage low mood typically finds his baseline mood
              deteriorating over time, requiring more alcohol to achieve the same effect. This is one
              of the most common pathways to co-occurring depression and alcohol use disorder in men.
            </p>
            <p>
              If alcohol use is part of the picture for you, the{" "}
              <Link href="/audit-alcohol-test" className="text-sky-600 dark:text-sky-400 hover:underline">
                AUDIT alcohol screening
              </Link>{" "}
              alongside this one gives a clearer view. Both together take under 6 minutes.
            </p>
          </div>
        </div>
      </div>

      <div id="screening">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
            Take the PHQ-9 Depression Screening
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Answer honestly — based on how you&apos;ve actually been, not how you present to others.
          </p>
        </div>
              <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A depression screening that highlights how depression often presents differently in men, including anger and risk-taking."
          who="Men who may be experiencing depression but whose symptoms do not match the typical sad-and-tearful stereotype."
          bottomLine="Male depression often looks like irritability, aggression, or withdrawal rather than sadness. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <AuthorByline publishedDate="2025-01-01" modifiedDate="2026-03-20" />
      </div>

      <section className="sr-only">
        <h2>What Is Depression Screening for Men?</h2>
        <h2>How Is the Depression Screen Scored?</h2>
        <h2>What Do My Depression Screening Results Mean?</h2>
      </section>
<PHQ9Client faqData={FAQ_DATA} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            What to Do With Your Results
          </h2>
          <div className="space-y-3">
            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Score 0–4:</strong> Minimal symptoms. No clinical concern from this screening alone.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Score 5–9:</strong> Mild range. Worth monitoring. If this has been your experience
                for more than a few weeks, a conversation with your primary care physician is reasonable.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Score 10–14:</strong> Moderate range. A professional evaluation is recommended. In
                men, this score is particularly important to act on given systematic underdiagnosis patterns.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Score 15+:</strong> Moderately severe to severe. Please reach out to a healthcare
                provider. If alcohol or substance use is involved, mention it — it&apos;s clinically
                relevant and your provider needs to know.
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
            <Link href="/blog/how-to-talk-to-doctor-about-mental-health" className="text-sky-600 dark:text-sky-400 hover:underline">
              How to talk to your doctor about mental health →
            </Link>
          </p>
        </div>

        <div className="bg-crisis-50 dark:bg-crisis-950/30 border border-crisis-200 dark:border-crisis-800 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Crisis Resources</h2>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong> — free, 24/7, confidential</li>
            <li><strong>Crisis Text Line:</strong> Text <strong>HOME</strong> to <strong>741741</strong> — free, 24/7</li>
            <li><strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> — free referrals, 24/7</li>
          </ul>
        </div>

        <div className="mb-6">
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            This screening tool is for informational and educational purposes only. It is not a
            diagnostic tool and should not be used as a substitute for professional evaluation,
            diagnosis, or treatment.
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Reviewed by a Certified Drug and Alcohol Counselor (CADC-II).
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Last reviewed: March 2026
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/phq-9-depression-test" className="text-sky-600 dark:text-sky-400 hover:underline">PHQ-9 Depression Test →</Link>
          <Link href="/audit-alcohol-test" className="text-sky-600 dark:text-sky-400 hover:underline">AUDIT Alcohol Test →</Link>
          <Link href="/depression-test-for-men" className="text-sky-600 dark:text-sky-400 hover:underline">Depression Test for Men →</Link>
          <Link href="/anxiety-test-for-men" className="text-sky-600 dark:text-sky-400 hover:underline">Anxiety Test for Men →</Link>
        </div>
      </div>
    </>
  );
}
