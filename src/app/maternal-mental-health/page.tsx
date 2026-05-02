import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AuthorByline } from "@/components/AuthorByline";
import AnswerBlock from "@/components/AnswerBlock";

const PAGE_URL = `${SITE_URL}/maternal-mental-health`;

export const metadata: Metadata = createMetadata({
  path: "/maternal-mental-health",
  title: "Maternal Mental Health Screening | PHQ-9 and GAD-7 During Pregnancy & Postpartum",
  description:
    "Learn about maternal mental health screening with the PHQ-9 and GAD-7 during pregnancy and postpartum. Evidence-based info on perinatal depression and anxiety.",
  keywords: [
    "maternal mental health screening",
    "perinatal mental health",
    "PHQ-9 pregnancy",
    "PHQ-9 postpartum",
    "GAD-7 pregnancy",
    "GAD-7 postpartum",
    "perinatal depression screening",
    "perinatal anxiety screening",
    "maternal depression",
    "postpartum anxiety",
    "pregnancy anxiety",
    "perinatal mood disorders",
  ],
  openGraph: {
    title: "Maternal Mental Health Screening | PHQ-9 and GAD-7 During Pregnancy & Postpartum",
    description:
      "Evidence-based information on maternal mental health screening with validated tools. Learn about perinatal depression, anxiety, and where to find support.",
    url: PAGE_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is maternal mental health?",
    answer:
      "Maternal mental health refers to the emotional and psychological well-being of people during pregnancy, childbirth, and the postpartum period. This includes mood, anxiety, stress responses, and overall mental functioning. A significant proportion of pregnant and postpartum people experience mood or anxiety disorders — these are medical conditions, not character flaws or failures.",
  },
  {
    question: "How common are perinatal mood and anxiety disorders?",
    answer:
      "Perinatal mood and anxiety disorders affect approximately 1 in 5 pregnant or postpartum people. Depression, anxiety, obsessive-compulsive disorder, and post-traumatic stress disorder can all occur during and after pregnancy. These conditions are among the most common complications of childbirth, yet they often go undiagnosed due to stigma or attribution to 'normal' adjustment.",
  },
  {
    question: "Can I use the PHQ-9 during pregnancy or postpartum?",
    answer:
      "Yes. The PHQ-9 has been validated for use in pregnant and postpartum populations and is recommended by major clinical organizations including the American College of Obstetricians and Gynecologists (ACOG) for perinatal screening. A score of 10 or higher warrants professional evaluation during pregnancy or postpartum.",
  },
  {
    question: "Can I use the GAD-7 during pregnancy or postpartum?",
    answer:
      "Yes. The GAD-7 is validated for assessing anxiety symptoms in pregnant and postpartum people. Perinatal anxiety is common and treatable, yet it is often overlooked in favor of depression screening. If you are experiencing persistent worry, physical tension, or panic during pregnancy or postpartum, the GAD-7 can provide a useful snapshot of symptom severity.",
  },
  {
    question: "What is the difference between baby blues and postpartum depression?",
    answer:
      "Baby blues are extremely common (affecting 50–80% of new mothers) and typically occur in the first 1–2 weeks after birth. Symptoms include mood swings, tearfulness, irritability, and anxiety — and they resolve on their own as hormones stabilize. Postpartum depression is a clinical condition that lasts longer than two weeks, is more severe, and interferes significantly with functioning and bonding. If symptoms persist or worsen beyond two weeks, professional evaluation is important.",
  },
  {
    question: "When should I talk to my doctor about maternal mental health?",
    answer:
      "Contact your OB-GYN, midwife, or primary care doctor as soon as you notice persistent mood or anxiety symptoms during pregnancy or postpartum — especially if they are interfering with daily functioning, sleep beyond normal newborn-related sleep deprivation, appetite, or your ability to care for yourself or your baby. Do not wait for symptoms to get worse. Perinatal mood and anxiety disorders are highly treatable.",
  },
  {
    question: "What treatment options exist for perinatal mood disorders?",
    answer:
      "Evidence-based treatments include psychotherapy (cognitive-behavioral therapy, interpersonal therapy), medication (several antidepressants are safe during pregnancy and breastfeeding), lifestyle interventions, and support groups. The choice depends on symptom severity, personal preference, and any breastfeeding plans. Many pregnant and postpartum people benefit from a combination of approaches. Your healthcare provider can help you weigh the risks and benefits of each option.",
  },
  {
    question: "Where can I find maternal mental health support?",
    answer:
      "Postpartum Support International (PSI) operates a helpline (1-800-944-4773) and a directory of perinatal mental health specialists. Your OB-GYN or primary care doctor can provide referrals to therapists, psychiatrists, and support groups. The SAMHSA National Helpline (1-800-662-4357) offers free referrals 24/7. If you are in crisis, call 988 (Suicide & Crisis Lifeline) or text HOME to 741741.",
  },
];

export default function MaternalMentalHealthPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: "Maternal Mental Health Screening: PHQ-9 and GAD-7 During and After Pregnancy",
              description:
                "Evidence-based information on maternal mental health screening and the use of PHQ-9 and GAD-7 in perinatal populations.",
              url: PAGE_URL,
              datePublished: "2026-05-01",
              dateModified: "2026-05-01",
            })
          ),
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
              { name: "Maternal Mental Health", url: PAGE_URL },
            ])
          ),
        }}
      />

      <main className="min-h-screen bg-white dark:bg-slate-950">
        {/* Crisis Resources at Top */}
        <div
          role="alert"
          className="bg-amber-50 dark:bg-amber-950/30 border-b border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-sm leading-relaxed px-4 py-4"
        >
          <div className="max-w-2xl mx-auto">
            <p className="font-semibold mb-2">⚠️ If you are in crisis or having thoughts of self-harm:</p>
            <ul className="space-y-1 text-sm">
              <li><strong>988 Suicide & Crisis Lifeline:</strong> Call or text <strong>988</strong> — free, 24/7</li>
              <li><strong>Crisis Text Line:</strong> Text <strong>HOME to 741741</strong> — free, 24/7</li>
              <li><strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> — free, 24/7</li>
              <li><strong>Postpartum Support International:</strong> <strong>1-800-944-4773</strong> (call or text; text &quot;Help&quot; to 800-944-4773 English or 971-203-7773 Spanish)</li>
            </ul>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Disclaimer */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
            <p className="text-sm text-blue-900 dark:text-blue-200">
              <strong>Medical Disclaimer:</strong> This content and the linked screening tools are for informational and educational purposes only. They are not diagnostic tools and should not be used as a substitute for professional evaluation, diagnosis, or treatment. If you are pregnant or postpartum and experiencing distress, please consult your OB-GYN, midwife, or mental health professional.
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">
              Evidence-Based
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
              Perinatal-Validated Instruments
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
              Crisis Resources Included
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Maternal Mental Health Screening: PHQ-9 and GAD-7 During and After Pregnancy
          </h1>

          {/* Intro Paragraph */}
          <div className="prose prose-slate dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              Pregnancy and the postpartum period bring profound physical, emotional, and life changes. For many, these changes include mood or anxiety symptoms that go beyond typical adjustment. If you are pregnant or postpartum and wondering whether what you are experiencing might be a perinatal mood or anxiety disorder, this page provides evidence-based information on screening and support options.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              The <Link href="/phq-9-depression-test" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">PHQ-9</Link> and <Link href="/gad-7-anxiety-test" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">GAD-7</Link> are clinically validated screening tools that have been specifically tested in pregnant and postpartum populations. They are recommended by major clinical organizations, including the <a href="https://www.acog.org/clinical-guidance/committee-opinion/articles/2018/04/screening-for-perinatal-depression-and-anxiety" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold" rel="noopener noreferrer" target="_blank">American College of Obstetricians and Gynecologists</a>, for routine perinatal mental health screening.
            </p>
          </div>

          <AnswerBlock
            what="A comprehensive resource for understanding maternal mental health screening, including when and how to use validated screening tools like the PHQ-9 and GAD-7 during pregnancy and postpartum."
            who="Anyone who is pregnant, postpartum, or planning pregnancy and wants to understand perinatal mood and anxiety disorders, or who is concerned about their mental health during this period."
            bottomLine="Perinatal mood and anxiety disorders are common, treatable, and not a sign of weakness. Professional support is available and effective."
            lastUpdated="2026-05-01"
          />

          {/* What is Maternal Mental Health */}
          <section className="mt-10 mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What is maternal mental health?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Maternal mental health encompasses the emotional and psychological well-being of people during pregnancy, childbirth, and the postpartum period — often referred to as the perinatal period. This includes mood regulation, anxiety responses, stress management, and overall psychological functioning. Perinatal mental health is not simply about &quot;being happy&quot; after having a baby; it is about emotional stability, the ability to cope with change, and having adequate support and resources.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              During pregnancy and postpartum, hormonal shifts, sleep disruption, physical recovery, identity changes, and life circumstances can all affect mental health. While some degree of adjustment stress is normal, persistent or severe mood and anxiety symptoms are medical conditions — not character failures or signs that you are an inadequate parent. These conditions are treatable, and seeking help is a sign of strength and self-awareness.
            </p>
          </section>

          {/* Prevalence Section */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">How common are perinatal mood and anxiety disorders?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Perinatal mood and anxiety disorders are far more common than many people realize. According to the <a href="https://www.nimh.nih.gov/" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold" rel="noopener noreferrer" target="_blank">National Institute of Mental Health (NIMH)</a>, approximately <strong>1 in 5 pregnant or postpartum people</strong> experience a diagnosable perinatal mood or anxiety disorder. This includes major depressive disorder, generalized anxiety disorder, panic disorder, obsessive-compulsive disorder, and post-traumatic stress disorder.
            </p>
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 mb-4 border border-slate-200 dark:border-slate-700">
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3"><strong>Key statistics:</strong></p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>• <strong>Depression during pregnancy:</strong> Affects approximately 10% of pregnant people</li>
                <li>• <strong>Postpartum depression:</strong> Affects approximately 15% of new mothers</li>
                <li>• <strong>Perinatal anxiety:</strong> Affects approximately 10% of pregnant and postpartum people</li>
                <li>• <strong>Paternal depression:</strong> Affects approximately 10% of new fathers, especially in the 3–6 months after birth</li>
              </ul>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Despite this high prevalence, many cases go undiagnosed. Barriers include stigma surrounding mental illness and motherhood, attribution of symptoms to &quot;normal&quot; new-parent exhaustion, and lack of routine screening in some healthcare settings. Proactive screening with validated tools can help identify those who need support.
            </p>
          </section>

          {/* PHQ-9 in Pregnancy and Postpartum */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Can I use the PHQ-9 during pregnancy or postpartum?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Yes. The PHQ-9 (Patient Health Questionnaire-9) has been extensively validated for use in pregnant and postpartum populations. The tool measures depressive symptoms over the past two weeks and is recommended by <a href="https://www.acog.org" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold" rel="noopener noreferrer" target="_blank">ACOG</a>, the <a href="https://www.cdc.gov" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold" rel="noopener noreferrer" target="_blank">Centers for Disease Control and Prevention (CDC)</a>, and the <a href="https://www.samhsa.gov" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold" rel="noopener noreferrer" target="_blank">Substance Abuse and Mental Health Services Administration (SAMHSA)</a> for routine perinatal screening.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              The nine questions of the PHQ-9 assess core depressive symptoms: low mood, loss of interest, sleep changes, fatigue, appetite changes, feelings of worthlessness, difficulty concentrating, psychomotor changes, and thoughts of self-harm. Scores range from 0 to 27, with a score of 10 or higher typically warranting professional evaluation during pregnancy or postpartum.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              If you are pregnant or postpartum and experiencing persistent low mood, emptiness, hopelessness, or loss of interest in things that usually bring you joy, the <Link href="/phq-9-depression-test" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">PHQ-9 screening tool</Link> can provide a quick snapshot of symptom severity.
            </p>
          </section>

          {/* GAD-7 in Pregnancy and Postpartum */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Can I use the GAD-7 during pregnancy or postpartum?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Yes. The GAD-7 (Generalized Anxiety Disorder-7) is a validated 7-question screening tool for anxiety symptoms and has been specifically validated in pregnant and postpartum populations. While depression screening receives more attention in perinatal care, perinatal anxiety is equally common and equally treatable — yet it often goes unrecognized.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Perinatal anxiety can present as persistent worry about the pregnancy or baby&apos;s health, physical tension, irritability, difficulty concentrating, or panic attacks. Some people experience &quot;pregnancy-related OCD&quot; with intrusive thoughts and compulsive behaviors. These are real medical symptoms, not character flaws, and they respond well to treatment.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              The GAD-7 measures anxiety symptoms over the past two weeks and produces a score from 0 to 21. A score of 10 or higher suggests moderate to severe anxiety warranting professional evaluation. If you are experiencing persistent worry, physical tension, panic, or intrusive thoughts during pregnancy or postpartum, the <Link href="/gad-7-anxiety-test" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">GAD-7 screening tool</Link> can help you assess symptom severity.
            </p>
          </section>

          {/* Baby Blues vs PPD */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What is the difference between baby blues and postpartum depression?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              This is one of the most important distinctions to understand. <strong>Baby blues</strong> are extremely common, affecting 50–80% of new mothers. They typically appear in the first 1–2 days after birth and resolve within 1–2 weeks. Symptoms include mood swings, tearfulness, irritability, anxiety, and difficulty concentrating. Baby blues are driven by hormonal shifts and are not a clinical disorder.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              <strong>Postpartum depression (PPD)</strong> is different. It lasts longer than two weeks, is more intense, and significantly interferes with daily functioning and your ability to care for yourself or your baby. Symptoms include persistent low mood or emptiness, loss of interest in activities, fatigue, sleep problems beyond newborn-related sleep deprivation, appetite changes, difficulty concentrating, feelings of worthlessness or excessive guilt, and in severe cases, thoughts of harming yourself or your baby.
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-5 mb-4">
              <p className="text-sm font-semibold text-green-900 dark:text-green-200 mb-3">If symptoms persist beyond two weeks, worsen, or include thoughts of harm, contact your OB-GYN, midwife, or call 988 immediately.</p>
            </div>
          </section>

          {/* When to Talk to Doctor */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">When should I talk to my doctor about maternal mental health?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Do not wait for symptoms to get worse or to feel &quot;sick enough.&quot; Contact your healthcare provider as soon as you notice:
            </p>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400 mb-4 list-disc list-inside">
              <li>Persistent low mood or emptiness lasting more than two weeks</li>
              <li>Loss of interest in activities you normally enjoy</li>
              <li>Persistent excessive worry or anxiety</li>
              <li>Difficulty sleeping beyond normal newborn-related sleep loss</li>
              <li>Changes in appetite or weight</li>
              <li>Difficulty concentrating or making decisions</li>
              <li>Feelings of worthlessness, guilt, or shame about your parenting</li>
              <li>Intrusive or unwanted thoughts about harming your baby or yourself</li>
              <li>Withdrawing from family or friends</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Perinatal mood and anxiety disorders are highly treatable. Early identification and treatment improve outcomes for both you and your baby. Your healthcare provider will not judge you — they want to help.
            </p>
          </section>

          {/* Treatment Options */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What treatment options exist for perinatal mood disorders?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Evidence-based treatment options for perinatal mood and anxiety disorders include:
            </p>
            <div className="space-y-4 mb-4">
              <div className="border-l-4 border-sky-400 pl-4">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Psychotherapy</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Cognitive-behavioral therapy (CBT) and interpersonal therapy (IPT) are both evidence-based approaches for perinatal depression and anxiety. These therapies teach coping strategies and address thought patterns and relationship dynamics.
                </p>
              </div>
              <div className="border-l-4 border-sky-400 pl-4">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Medication</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Several antidepressants and anti-anxiety medications are safe during pregnancy and while breastfeeding. Sertraline, paroxetine, and other SSRIs have low transfer into breast milk. Your psychiatrist or OB-GYN can discuss which options are appropriate for your situation.
                </p>
              </div>
              <div className="border-l-4 border-sky-400 pl-4">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Support Groups</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Perinatal support groups, both in-person and online, provide community and normalize the experience of perinatal mood disorders.
                </p>
              </div>
              <div className="border-l-4 border-sky-400 pl-4">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Lifestyle Interventions</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Sleep optimization, social support, exercise, and stress reduction techniques complement therapy and/or medication.
                </p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Many people benefit from a combination of approaches. Your healthcare team will help you weigh the risks and benefits of each option based on your specific situation, including any plans to breastfeed or conceive in the future.
            </p>
          </section>

          {/* Where to Find Support */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Where can I find maternal mental health support?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Multiple resources are available to help you find professional support and community:
            </p>
            <div className="space-y-3 mb-4">
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                <p className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Postpartum Support International (PSI)</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Call or text <strong>1-800-944-4773</strong> (English); text &quot;Help&quot; to 800-944-4773 (English) or 971-203-7773 (Spanish). PSI also offers support groups and a provider directory at <a href="https://www.postpartum.net" className="text-sky-600 dark:text-sky-400 hover:underline" rel="noopener noreferrer" target="_blank">postpartum.net</a>.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                <p className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Your Healthcare Provider</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Your OB-GYN, midwife, or primary care doctor can provide referrals to therapists, psychiatrists, and support resources in your area.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                <p className="font-semibold text-slate-800 dark:text-slate-200 mb-1">SAMHSA National Helpline</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Call <strong>1-800-662-4357</strong> for free, confidential referrals to local treatment and support services. Available 24/7.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mt-12 mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {FAQ_DATA.map((item) => (
                <details
                  key={item.question}
                  className="group border border-slate-200 dark:border-slate-700 rounded-lg p-4 hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
                >
                  <summary className="cursor-pointer font-semibold text-slate-900 dark:text-white group-open:text-sky-600 dark:group-open:text-sky-400">
                    {item.question}
                  </summary>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-10 p-6 bg-sage-50 dark:bg-sage-900/20 rounded-lg border border-sage-200 dark:border-sage-800">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Related Screening Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/phq-9-depression-test"
                  className="text-sky-600 dark:text-sky-400 hover:underline font-semibold"
                >
                  PHQ-9 Depression Screening →
                </Link>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Free, validated 9-question depression screening used by healthcare providers worldwide. Takes about 2 minutes.
                </p>
              </li>
              <li className="pt-3 border-t border-sage-200 dark:border-sage-800">
                <Link
                  href="/gad-7-anxiety-test"
                  className="text-sky-600 dark:text-sky-400 hover:underline font-semibold"
                >
                  GAD-7 Anxiety Screening →
                </Link>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Free, validated 7-question anxiety screening. Equally important as depression screening during pregnancy and postpartum.
                </p>
              </li>
            </ul>
          </section>

          {/* Author Bio */}
          <div className="my-8">
            <AuthorByline publishedDate="2026-05-01" modifiedDate="2026-05-01" />
          </div>

          {/* Crisis Resources at Bottom */}
          <div
            role="alert"
            className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg text-amber-900 dark:text-amber-200 text-sm leading-relaxed px-4 py-4 mt-12 mb-8"
          >
            <p className="font-semibold mb-2">⚠️ If you are in crisis or having thoughts of self-harm:</p>
            <ul className="space-y-1">
              <li><strong>988 Suicide & Crisis Lifeline:</strong> Call or text <strong>988</strong> — free, 24/7</li>
              <li><strong>Crisis Text Line:</strong> Text <strong>HOME to 741741</strong> — free, 24/7</li>
              <li><strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> — free, 24/7</li>
              <li><strong>Postpartum Support International:</strong> <strong>1-800-944-4773</strong> (call or text)</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
