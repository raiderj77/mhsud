import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { PHQ9Client } from "../phq-9-depression-test/PHQ9Client";
import AnswerBlock from "@/components/AnswerBlock";

const TOOL_URL = `${SITE_URL}/depression-test-for-new-moms`;

export const metadata: Metadata = createMetadata({
  path: "/depression-test-for-new-moms",
  title: "Depression Test for New Moms — Free Screening",
  description: "Free postpartum depression screening for new mothers. Private, instant results. No signup.",
  keywords: [
    "postpartum depression test", "depression test new moms", "ppd screening",
    "postpartum depression quiz", "new mom depression test", "baby blues vs ppd",
    "postnatal depression screening", "am i depressed new mom", "ppd symptoms test",
    "postpartum depression self-assessment", "free ppd test",
  ],
  openGraph: { title: "Depression Test for New Moms — Free Screening", description: "Free, private postpartum depression screening for new mothers. Instant results, no signup.", url: TOOL_URL, type: "website" },
});

const FAQ_DATA = [
  { question: "What is the difference between baby blues and postpartum depression?", answer: "Baby blues affect up to 80% of new mothers and involve mood swings, crying spells, anxiety, and difficulty sleeping in the first 1-2 weeks after delivery. They resolve on their own. Postpartum depression (PPD) is more severe and longer-lasting — symptoms persist beyond two weeks and can include intense sadness, hopelessness, difficulty bonding with the baby, withdrawal from family, thoughts of harm, excessive worry, and inability to function normally. PPD requires professional support and affects about 1 in 7 mothers." },
  { question: "When does postpartum depression start?", answer: "PPD can begin any time during the first year after birth, though it most commonly develops within the first 1-3 months. Some women experience symptoms during pregnancy (perinatal depression). Onset can be sudden or gradual. Late-onset PPD (developing 6-12 months postpartum) is also recognized and may coincide with returning to work, weaning, or hormonal shifts. If you are experiencing symptoms at any point in the first year, screening is appropriate." },
  { question: "Can dads get postpartum depression?", answer: "Yes. Paternal postpartum depression affects an estimated 8-10% of new fathers, with rates even higher when the mother is also experiencing PPD. Fathers may experience irritability, withdrawal, anger, increased substance use, or feeling disconnected from the baby. Hormonal changes (testosterone drops), sleep deprivation, and relationship stress all contribute. Dads experiencing these symptoms should also seek support." },
  { question: "Will PPD go away on its own?", answer: "Unlike baby blues, PPD typically does not resolve on its own and usually requires treatment. Without treatment, PPD can last months or even years, and can worsen over time. Early intervention is associated with better outcomes for both mother and baby. Treatment options include therapy (especially CBT and interpersonal therapy), medication (SSRIs are compatible with breastfeeding in many cases), and support groups. Please reach out to a healthcare provider." },
  { question: "Is it safe to take antidepressants while breastfeeding?", answer: "Several antidepressants, particularly certain SSRIs like sertraline (Zoloft) and paroxetine (Paxil), are considered compatible with breastfeeding based on available research. The amount transferred through breast milk is generally very low. The decision should be made with your healthcare provider, weighing the benefits of treatment against any potential risks. Untreated depression also carries risks for both mother and baby, including disrupted bonding and developmental effects." },
  { question: "How does PPD affect the baby?", answer: "Untreated PPD can affect mother-infant bonding, which is important for the baby's emotional and cognitive development. Research shows that babies of mothers with untreated depression may have more difficulty with attachment, emotional regulation, and language development. This is not about blame — it is about understanding that treating PPD benefits the entire family. Seeking help is one of the most important things you can do for your baby." },
  { question: "Where can new moms get help for PPD?", answer: "Postpartum Support International (PSI) offers a helpline at 1-800-944-4773 (call or text). You can also contact your OB-GYN, midwife, or primary care provider. Many communities have postpartum support groups. The 988 Suicide and Crisis Lifeline (call or text 988) is available 24/7 if you are in crisis. PSI also maintains a provider directory of clinicians specializing in perinatal mental health at postpartum.net." },
  { question: "Is this the same as the Edinburgh Postnatal Depression Scale?", answer: "No. This screening uses the PHQ-9, which is a validated general depression screener widely used in clinical settings, including postpartum care. The Edinburgh Postnatal Depression Scale (EPDS) is specifically designed for perinatal populations and includes questions about anxiety and self-harm that are particularly relevant postpartum. For the most perinatal-specific screening, ask your healthcare provider about the EPDS. The PHQ-9 used here is a solid general screening tool." },
];

export default function DepressionTestForNewMomsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolPageJsonLd({ name: "Depression Test for New Moms — PHQ-9 Screening", description: "A free, private depression screening tool for new mothers using the PHQ-9.", url: TOOL_URL, datePublished: "2026-03-05", dateModified: "2026-03-05" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "PHQ-9 Depression Test", url: `${SITE_URL}/phq-9-depression-test` }, { name: "Depression Test for New Moms", url: TOOL_URL }])) }} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">Clinically Validated (PHQ-9)</span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300">New &amp; Expecting Mothers</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">Depression Test for New Moms</h1>

        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            You were supposed to feel happy. Everyone says this is the best time of your life. But
            if instead you&apos;re feeling empty, overwhelmed, disconnected from your baby, crying
            for no reason, or wondering if your family would be better off without you — you&apos;re
            not a bad mother. You may be experiencing postpartum depression, and it affects about
            <strong> 1 in 7 new mothers</strong>.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            This free screening can help you understand what you&apos;re going through. It is <strong>not
            a diagnosis</strong>, but it can be the first step toward feeling like yourself again.
          </p>
        </div>

        {/* PHQ-9 note */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-6">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Note:</strong> This screening uses the PHQ-9, a validated general depression tool.
            For a perinatal-specific assessment, ask your OB-GYN or midwife about the Edinburgh
            Postnatal Depression Scale (EPDS).
          </p>
        </div>

        <div className="mb-10">
          <a href="#screening" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-pink-600 text-white font-semibold text-base hover:bg-pink-700 transition-colors shadow-sm">Start the Depression Screening</a>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Takes about 3 minutes. Completely private — nothing is stored or shared.</p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Why This Matters</h2>
          <div className="grid gap-4">
            <div className="bg-pink-50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-pink-700 dark:text-pink-300 mb-1">1 in 7 mothers</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">experience postpartum depression. It is one of the most common complications of childbirth.<span className="text-slate-500 dark:text-slate-400"> — ACOG</span></p>
            </div>
            <div className="bg-pink-50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-pink-700 dark:text-pink-300 mb-1">50% undiagnosed</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">Roughly half of PPD cases go undiagnosed. Many mothers suffer in silence, thinking they should be able to handle it.<span className="text-slate-500 dark:text-slate-400"> — Postpartum Support International</span></p>
            </div>
            <div className="bg-pink-50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-pink-700 dark:text-pink-300 mb-1">Highly treatable</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">With proper treatment — therapy, medication, or both — most mothers recover fully. Breastfeeding-compatible medications are available.<span className="text-slate-500 dark:text-slate-400"> — APA</span></p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Understanding Postpartum Depression</h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>Postpartum depression is not a character flaw or a sign that you do not love your baby. It is a medical condition caused by a combination of hormonal shifts (the dramatic drop in estrogen and progesterone after delivery), sleep deprivation, physical recovery from birth, and the overwhelming demands of newborn care. Risk factors include history of depression or anxiety, lack of support, stressful life events, traumatic birth experience, and premature or NICU babies.</p>
            <p>PPD can look different from what you might expect. Some mothers experience intense sadness, but others feel nothing — an emotional flatness that is equally distressing. Scary intrusive thoughts about the baby (which are a symptom, not a desire) are common and very treatable. Difficulty bonding with the baby, withdrawing from your partner, inability to sleep even when the baby sleeps, and a sense that you are not cut out for motherhood are all classic PPD symptoms.</p>
            <p>Partners can also develop postpartum depression. About 8-10% of new fathers experience PPD, with higher rates when the mother is also affected. The entire family benefits when PPD is identified and treated early.</p>
            <p>Treatment is effective and available. Cognitive behavioral therapy and interpersonal therapy are first-line treatments. Several antidepressants are considered compatible with breastfeeding. Postpartum Support International (1-800-944-4773) provides immediate support and provider referrals. You do not have to white-knuckle through this.</p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Baby Blues vs. Postpartum Depression: The Key Distinctions
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              These two experiences are frequently confused — including by new mothers living through
              them.
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-300 dark:border-slate-600">
                    <th className="text-left py-2 pr-4 font-semibold">Feature</th>
                    <th className="text-left py-2 px-4 font-semibold">Baby Blues</th>
                    <th className="text-left py-2 pl-4 font-semibold">Postpartum Depression</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600 dark:text-slate-400">
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-2 pr-4 font-medium">Onset</td>
                    <td className="py-2 px-4">Days 2–5 after birth</td>
                    <td className="py-2 pl-4">Within 4 weeks (up to 12 months)</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-2 pr-4 font-medium">Duration</td>
                    <td className="py-2 px-4">Resolves within 2 weeks</td>
                    <td className="py-2 pl-4">Persists without treatment</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-2 pr-4 font-medium">Severity</td>
                    <td className="py-2 px-4">Mild to moderate</td>
                    <td className="py-2 pl-4">Moderate to severe</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-2 pr-4 font-medium">Daily functioning</td>
                    <td className="py-2 px-4">Largely intact</td>
                    <td className="py-2 pl-4">Significantly impaired</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-2 pr-4 font-medium">Resolves without treatment</td>
                    <td className="py-2 px-4">Yes</td>
                    <td className="py-2 pl-4">Rarely</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium">Affects</td>
                    <td className="py-2 px-4">70–80% of new mothers</td>
                    <td className="py-2 pl-4">~1 in 7 new mothers</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <strong>The single most important indicator:</strong> if significant symptoms persist
              beyond two weeks postpartum, it is not baby blues. A professional evaluation is
              warranted.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            How PPD Actually Presents — Beyond the Obvious
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              Postpartum depression doesn&apos;t always look like the tearful, overwhelmed mother who
              can&apos;t get out of bed. The presentation is often more complex, and these
              less-recognized forms are the ones most likely to go unidentified:
            </p>
            <p>
              <strong>Anxiety as the primary feature:</strong> Many women with PPD present primarily
              with anxiety — intrusive thoughts about harm coming to the baby, inability to sleep
              even when the baby sleeps, constant monitoring and hypervigilance. This is often not
              recognized as PPD.
            </p>
            <p>
              <strong>Irritability and anger:</strong> Some women experience PPD as rage —
              disproportionate anger at partners, older children, or themselves. This presentation is
              especially associated with shame and non-disclosure because it conflicts with
              expectations of new motherhood.
            </p>
            <p>
              <strong>Emotional numbness:</strong> Feeling detached from the baby, unable to feel the
              love that&apos;s &quot;supposed&quot; to be there, going through caregiving motions
              without emotional connection. This symptom is particularly likely to be hidden out of
              fear of judgment.
            </p>
            <p>
              <strong>Intrusive thoughts:</strong> Unwanted, frightening thoughts about accidentally
              or intentionally harming the baby. These thoughts are ego-dystonic — the mother is
              horrified by them, not planning to act — and are a symptom of PPD and perinatal OCD,
              not evidence of danger. They should be disclosed to a clinician, who will not interpret
              them as intent.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Treatment: What&apos;s Now Available
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              Treatment for PPD has expanded significantly. Most women recover fully with appropriate
              care.
            </p>
            <p>
              <strong>Therapy:</strong> Interpersonal therapy (IPT) and CBT both have strong evidence
              for PPD. IPT specifically addresses the role transitions and relationship changes of new
              parenthood.
            </p>
            <p>
              <strong>SSRIs:</strong> Several are considered compatible with breastfeeding. Sertraline
              and paroxetine have the most safety data in breastfeeding populations. The decision
              weighs medication exposure against the documented risks of untreated maternal
              depression — a conversation for your prescribing physician.
            </p>
            <p>
              <strong>Zuranolone (Zurzuvae):</strong> FDA-approved specifically for PPD in 2023. Oral
              medication, taken once daily for 14 days. Targets the neurosteroid pathway implicated in
              postpartum hormonal shifts. Clinical trials showed rapid onset — symptom improvement
              within days rather than the weeks typical of SSRIs. This is a significant development
              for women who need faster relief.
            </p>
            <p>
              <strong>Brexanolone (Zulresso):</strong> Also FDA-approved specifically for PPD;
              administered as a 60-hour IV infusion in a healthcare setting.
            </p>
            <p>
              <strong>Peer support:</strong> Postpartum Support International (PSI) — postpartum.net,
              helpline <strong>1-800-944-4773</strong> — provides warmlines, peer support groups, and
              referrals specifically for perinatal mental health. Often the fastest access point.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            When PPD Can Start — It&apos;s Not Just the First Weeks
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              PPD can onset any time within the <strong>first year postpartum</strong> — not just
              immediately after birth. Many cases begin at 3–6 months, sometimes triggered by:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Returning to work</li>
              <li>Weaning from breastfeeding (estrogen drop)</li>
              <li>Sleep deprivation accumulation</li>
              <li>Relationship stress in the postpartum adjustment period</li>
            </ul>
            <p>
              If you&apos;re six months postpartum and this screen resonates, it&apos;s not too late
              for PPD — and it&apos;s not too late for treatment.
            </p>
          </div>
        </div>
      </div>

      <div id="screening">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">Take the PHQ-9 Depression Screening</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">Answer each question based on how you&apos;ve been feeling over the past two weeks.</p>
        </div>
              <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="The Edinburgh Postnatal Depression Scale (EPDS), a validated screening specifically designed for postpartum depression."
          who="New mothers experiencing mood changes, anxiety, or difficulty bonding who want to screen for postpartum depression."
          bottomLine="Postpartum depression affects up to 1 in 5 mothers and is highly treatable — you are not failing as a parent. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>

      <section className="sr-only">
        <h2>What Is the Postpartum Depression Screening?</h2>
        <h2>How Is the Postpartum Depression Screen Scored?</h2>
        <h2>What Do My Postpartum Depression Results Mean?</h2>
      </section>
<PHQ9Client faqData={FAQ_DATA} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Your Next Steps</h2>
          <div className="space-y-4">
            <div className="bg-pink-50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Postpartum Support International</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">Call or text <strong>1-800-944-4773</strong>. Trained counselors, provider referrals, and support groups for new parents. En Espa&ntilde;ol: 1-800-944-4773, press 1.</p>
            </div>
          </div>
        </div>

        <div className="bg-crisis-50 dark:bg-crisis-950/30 border border-crisis-200 dark:border-crisis-800 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Crisis Resources</h2>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong> — free, 24/7</li>
            <li><strong>Postpartum Support International:</strong> <strong>1-800-944-4773</strong></li>
            <li><strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> — free referrals, 24/7</li>
          </ul>
        </div>

        <div className="mb-6"><p className="text-sm text-slate-500 dark:text-slate-400 italic">This screening tool is for educational purposes only — it is not a diagnosis. Only a qualified healthcare professional can diagnose postpartum depression. Your responses are processed entirely in your browser and are never stored or transmitted.</p></div>

        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">Reviewed by a Certified Drug and Alcohol Counselor (CADC-II).</p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Last reviewed: March 2026</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/phq-9-depression-test" className="text-sky-600 dark:text-sky-400 hover:underline">PHQ-9 Depression Test →</Link>
          <Link href="/gad-7-anxiety-test" className="text-sky-600 dark:text-sky-400 hover:underline">GAD-7 Anxiety Test →</Link>
          <Link href="/sleep-and-mood-check" className="text-sky-600 dark:text-sky-400 hover:underline">Sleep &amp; Mood Check →</Link>
        </div>
      </div>
    </>
  );
}
