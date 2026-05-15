import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, medicalWebPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { PHQ9Client } from "../phq-9-depression-test/PHQ9Client";
import AnswerBlock from "@/components/AnswerBlock";

const TOOL_URL = `${SITE_URL}/postpartum-depression-test`;

export const metadata: Metadata = createMetadata({
  path: "/postpartum-depression-test",
  title: "Postpartum Depression Test | Free Screening for New Moms",
  description:
    "Free postpartum depression screening for new mothers. Uses the PHQ-9, validated for perinatal use. Private, instant results. If something feels wrong after birth, this is a safe place to check.",
  keywords: [
    "postpartum depression test", "postpartum depression quiz", "ppd test free",
    "postpartum depression screening", "am i depressed after baby", "postpartum depression symptoms quiz",
    "baby blues vs postpartum depression test", "ppd quiz", "new mom depression test",
    "postpartum depression self test", "free postpartum depression test",
    "postpartum anxiety test", "perinatal depression screening", "after baby depression quiz",
    "postpartum mental health test", "ppd screening online", "postpartum depression check",
    "mom depression test", "postpartum depression assessment", "phq-9 postpartum",
  ],
  openGraph: {
    title: "Postpartum Depression Test | Free Screening for New Moms",
    description:
      "Free postpartum depression screening for new mothers using the PHQ-9. Private, instant results. No sign-up required.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "Is this screening a substitute for professional medical care?",
    answer:
      "No. This is an educational screening tool, not a diagnostic instrument. Your results do not constitute a diagnosis of postpartum depression. If you are having thoughts of harming yourself or your baby, please call or text 988 (Suicide and Crisis Lifeline) or text HOME to 741741 right now. For any mental health concerns during the postpartum period, speak with your OB-GYN, midwife, psychiatrist, or therapist.",
  },
  {
    question: "What is the difference between baby blues and postpartum depression?",
    answer:
      "Baby blues are extremely common - affecting up to 80% of new mothers - and typically involve mood swings, tearfulness, anxiety, and irritability in the first 1-2 weeks after birth. They resolve on their own as hormones stabilize. Postpartum depression (PPD) is more intense, lasts longer (beyond 2 weeks), and significantly interferes with daily functioning. PPD can develop any time in the first year after birth. If your symptoms are severe, persistent, or getting worse rather than better, please speak with your OB-GYN or midwife.",
  },
  {
    question: "How common is postpartum depression?",
    answer:
      "Postpartum depression affects approximately 1 in 7 new mothers (about 15%). It is one of the most common complications of childbirth. It can also affect fathers and non-birthing partners (paternal postpartum depression affects about 10% of new fathers). Despite being common, PPD is frequently underdiagnosed because many mothers feel shame about not feeling happy after birth, or because symptoms are attributed to normal new-parent exhaustion.",
  },
  {
    question: "Can postpartum depression start months after birth?",
    answer:
      "Yes. While PPD most commonly develops within the first few weeks to months after birth, it can develop at any point in the first year postpartum. Some mothers experience a delayed onset, particularly around the time they stop breastfeeding (due to hormonal changes) or return to work. If you are within the first year of giving birth and experiencing depression symptoms, postpartum depression is a possible explanation worth discussing with your healthcare provider.",
  },
  {
    question: "Is it safe to take antidepressants while breastfeeding?",
    answer:
      "Several antidepressants are considered compatible with breastfeeding, including sertraline and paroxetine, which have low transfer into breast milk. This is a decision to make with your prescribing doctor or psychiatrist, who can weigh the risks and benefits for your specific situation. Untreated postpartum depression also carries risks for you and for your baby's development. You do not have to choose between treating your depression and breastfeeding.",
  },
  {
    question: "What should I do if my score suggests postpartum depression?",
    answer:
      "Contact your OB-GYN, midwife, or primary care doctor as soon as possible. Postpartum depression is highly treatable with therapy (especially CBT and interpersonal therapy), medication, and support. Postpartum Support International (postpartum.net, 1-800-944-4773) offers a helpline, support groups, and a provider directory. If you are having thoughts of harming yourself or your baby, please call or text 988 or go to your nearest emergency room immediately.",
  },
  {
    question: "Can fathers or non-birthing partners get postpartum depression?",
    answer:
      "Yes. Paternal postpartum depression affects approximately 10% of new fathers, with rates highest in the 3-6 months after birth. Partners can experience depression, anxiety, irritability, and withdrawal. Risk factors include a partner with PPD, financial stress, relationship conflict, and lack of social support. This screening can be used by any new parent, regardless of gender or birth role.",
  },
];

export default function PostpartumDepressionTestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
      ...toolPageJsonLd({
              name: "Postpartum Depression Test | Free Screening for New Moms",
              description:
                "A free, private postpartum depression screening using the PHQ-9, validated for perinatal use.",
              url: TOOL_URL,
              datePublished: "2026-03-08",
              dateModified: "2026-05-14",
            }),
      reviewedBy: { "@type": "Organization", "name": "Your Friendly Developer LLC" },
    }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
      ...medicalWebPageJsonLd({
              name: "Postpartum Depression Test | Free Screening for New Moms",
              description:
                "A free postpartum depression screening using the PHQ-9, clinically validated for perinatal use. Covers depressed mood, anhedonia, sleep, energy, appetite, concentration, and suicidal ideation.",
              url: TOOL_URL,
              lastReviewed: "2026-05-14",
            }),
      reviewedBy: { "@type": "Organization", "name": "Your Friendly Developer LLC" },
    }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "PHQ-9 Depression Test", url: `${SITE_URL}/phq-9-depression-test` },
              { name: "Postpartum Depression Test", url: TOOL_URL },
            ])
          ),
        }}
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">
            Clinically Validated (PHQ-9)
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300">
            New Parents
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
            100% Private
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Postpartum Depression Test
        </h1>

        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            You were supposed to feel joy. And maybe you do, sometimes - but underneath it
            there&apos;s something else. Exhaustion that goes beyond sleep deprivation.
            A sadness that does not lift. Feeling disconnected from your baby, or from
            yourself. Wondering if you made a terrible mistake. Feeling like you&apos;re
            failing at the one thing you were supposed to do.
          </p>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            These feelings are not a reflection of your love for your child. They are symptoms
            of a medical condition - postpartum depression - that affects{" "}
            <a href="https://www.nimh.nih.gov/health/topics/depression" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline">
              approximately 1 in 7 new mothers
            </a>
            . It is not your fault. And it is treatable.
          </p>
          <p className="text-slate-600 dark:text-slate-300">
            This free screening uses the{" "}
            <a href="https://pubmed.ncbi.nlm.nih.gov/11556941/" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline">
              PHQ-9
            </a>
            , a validated depression measure used routinely in perinatal care. Your answers are
            scored entirely in your browser. Nothing is stored or shared.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          What PPD Actually Feels Like
        </h2>
        <div className="mb-6 space-y-4 text-slate-600 dark:text-slate-300">
          <p>
            Postpartum depression is not always crying every day. For many people it shows up as
            numbness: going through the motions of feeding and changing without feeling anything.
            Or as rage - sudden, disproportionate anger at a partner or older child that feels
            frightening and foreign. Or as intrusive thoughts: brief, unwanted mental images of
            something bad happening to the baby. Intrusive thoughts are a symptom, not a sign you
            are dangerous. They are the brain misfiring under extreme stress.
          </p>
          <p>
            PPD also shows up physically. Disrupted appetite (not just from newborn chaos, but a
            genuine loss of interest in food), heaviness in the body, and a kind of cognitive
            fog that makes simple decisions feel impossible. The{" "}
            <a href="https://www.cdc.gov/reproductivehealth/depression/" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline">
              CDC notes
            </a>{" "}
            that postpartum depression is one of the most underdiagnosed conditions in obstetric
            care, partly because mothers minimize their own symptoms and partly because routine
            screening is still inconsistent across healthcare settings.
          </p>
          <p>
            One symptom that rarely gets discussed: the feeling of being a stranger to your baby.
            The expectation is instant, overwhelming love. When that does not arrive, or when it
            arrives mixed with dread or indifference, the shame can be immobilizing. That shame
            is also a symptom. It is not the truth about who you are.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Who Is Most at Risk?
        </h2>
        <div className="mb-6 space-y-3 text-slate-600 dark:text-slate-300">
          <p>
            Any new parent can develop PPD, but{" "}
            <a href="https://www.samhsa.gov/find-help/national-helpline" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline">
              SAMHSA
            </a>{" "}
            and the WHO identify several factors that raise the odds:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm ml-2">
            <li>Personal or family history of depression or anxiety</li>
            <li>Difficult or traumatic birth experience</li>
            <li>Baby admitted to NICU or born with health complications</li>
            <li>Limited social support or partner conflict</li>
            <li>Financial stress or housing instability</li>
            <li>Unintended or closely spaced pregnancies</li>
            <li>Previous pregnancy loss or infertility treatment</li>
          </ul>
          <p>
            Having risk factors does not mean PPD is inevitable. It does mean it is worth
            screening early and often, especially in the first six months.{" "}
            <a href="https://www.who.int/news-room/fact-sheets/detail/maternal-mental-health" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline">
              The WHO estimates
            </a>{" "}
            that 10 to 15 percent of women in high-income countries and up to 20 percent in
            low-income countries experience postpartum depression.
          </p>
        </div>

        <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
          Last updated: May 14, 2026
        </p>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
          <AnswerBlock
            what="The PHQ-9, a 9-item validated depression measure used routinely in perinatal and OB-GYN care."
            who="New parents in the postpartum period who are experiencing mood changes, anxiety, or difficulty coping."
            bottomLine="Postpartum depression is common, not a character flaw, and highly treatable with proper support. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
            lastUpdated="2026-05-14"
          />
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
          <div className="border-l-4 border-sage-200 dark:border-sage-800 pl-4 my-6">
  <div className="flex flex-col gap-1">
    <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
      Published by MindCheck Tools &middot; Your Friendly Developer LLC
    </p>
    <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 mt-1">
      <span>
        Published:{" "}
        <time dateTime="2025-01-01">
          {new Date("2025-01-01T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </time>
      </span>
      <span>
        Last reviewed:{" "}
        <time dateTime="2026-05-14">
          {new Date("2026-05-14T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </time>
      </span>
    </div>
  </div>
</div>
        </div>

        <section className="sr-only">
          <h2>What Is the Postpartum Depression Test?</h2>
          <h2>How Is the Postpartum Depression Test Scored?</h2>
          <h2>What Do My Postpartum Depression Results Mean?</h2>
        </section>
        <PHQ9Client faqData={FAQ_DATA} />

        <div className="mt-10 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Baby Blues vs. Postpartum Depression
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300 rounded-tl-lg">Feature</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Baby Blues</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300 rounded-tr-lg">Postpartum Depression</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">How common</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Up to 80% of new mothers</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">About 1 in 7 (15%)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">When it starts</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Days 2-5 after birth</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Any time in first year</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">How long it lasts</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">1-2 weeks, resolves on its own</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Weeks to months without treatment</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">Severity</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Mild mood swings, tearfulness</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Significant impairment in daily life</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">Treatment needed</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Support, rest, time</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Therapy, medication, professional support</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQ_DATA.map((item) => (
              <div
                key={item.question}
                className="border border-slate-200 dark:border-slate-700 rounded-xl p-5"
              >
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {item.question}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-crisis-50 dark:bg-crisis-950/30 border border-crisis-200 dark:border-crisis-800 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
            Crisis &amp; Support Resources
          </h2>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li>
              <strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text{" "}
              <strong>988</strong> - if you are having thoughts of harming yourself or your baby
            </li>
            <li>
              <strong>Postpartum Support International:</strong>{" "}
              <strong>1-800-944-4773</strong> - helpline, support groups, provider directory
            </li>
            <li>
              <strong>Crisis Text Line:</strong> Text <strong>HOME to 741741</strong>
            </li>
            <li>
              <strong>SAMHSA National Helpline:</strong>{" "}
              <strong>1-800-662-4357</strong> - free, confidential, 24/7
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            This screening is for educational purposes only - it is not a diagnosis. Only a
            licensed healthcare professional can diagnose postpartum depression. If you are
            having thoughts of harming yourself or your baby, please seek immediate help.
            Your responses are processed entirely in your browser and are never stored or transmitted.
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Compiled by Jason Ramirez, CADC-II. Clinical content drawn from CDC, NIMH, SAMHSA, and WHO. For postpartum-specific clinical evaluation, consult your OB-GYN, midwife, or a licensed mental health professional.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Last reviewed: May 2026
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/" className="text-sky-600 dark:text-sky-400 hover:underline">
            MindCheck Tools Home &rarr;
          </Link>
          <Link href="/depression-test-for-new-moms" className="text-sky-600 dark:text-sky-400 hover:underline">
            Depression Test for New Moms &rarr;
          </Link>
          <Link href="/burnout-test-parents" className="text-sky-600 dark:text-sky-400 hover:underline">
            Burnout Test for Parents &rarr;
          </Link>
        </div>
      </div>
    </>
  );
}
