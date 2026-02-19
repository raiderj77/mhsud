import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";

const ARTICLE_URL = `${SITE_URL}/blog/work-stress-vs-burnout`;

export const metadata: Metadata = createMetadata({
  path: "/blog/work-stress-vs-burnout",
  title: "Work Stress vs. Burnout: How to Tell the Difference (and What Online Quizzes Can't Tell You)",
  description:
    "Am I burned out or just stressed? Learn the WHO-defined signs of clinical burnout vs. normal work stress, why online self-checks have limits, and when to talk to a professional.",
  keywords: [
    "am i burned out or just stressed", "work stress vs burnout difference",
    "signs of burnout vs normal stress", "burnout self-assessment quiz accuracy",
    "is burnout a medical diagnosis", "how to tell if you have burnout",
    "burnout test online free accurate", "can online quiz diagnose burnout",
    "burnout vs depression how to tell", "stages of burnout workplace",
    "when to see a doctor for burnout", "burnout symptoms physical vs emotional",
    "work burnout self-check private online", "burnout risk factors remote workers",
    "three dimensions of burnout WHO definition",
  ],
});

const FAQ_DATA = [
  { question: "Am I burned out or just stressed?", answer: "Stress is typically tied to specific demands and resolves when those demands ease. Burnout is a state of chronic exhaustion, cynicism, and reduced effectiveness that persists even after a vacation or break. If rest doesn't restore you, burnout is more likely — but only a professional can make that determination in your specific context." },
  { question: "Is burnout an official medical diagnosis?", answer: "Not exactly. The WHO included burnout in ICD-11 as an 'occupational phenomenon' — not a medical condition. It is defined by three dimensions: energy depletion or exhaustion, increased mental distance from one's job (cynicism), and reduced professional efficacy. Some clinicians may diagnose adjustment disorder or other conditions when burnout symptoms are severe." },
  { question: "Can an online burnout quiz actually diagnose me?", answer: "No. Online self-checks — including ours — are reflection tools, not diagnostic instruments. They can help you notice patterns and start a conversation with a professional, but they cannot account for your medical history, life circumstances, or the full complexity of your situation. A score is a starting point, never a conclusion." },
  { question: "What is the difference between burnout and depression?", answer: "Burnout and depression share symptoms like fatigue, difficulty concentrating, and low motivation. The key difference is scope: burnout is typically tied to work and may improve when work conditions change, while depression affects all areas of life regardless of circumstances. However, chronic burnout can develop into clinical depression, so the distinction matters less than getting help." },
  { question: "Can you recover from burnout without quitting your job?", answer: "Yes, though it requires deliberate changes. Research supports strategies like setting firm boundaries, renegotiating workload, taking actual breaks (not working through lunch), using available mental health resources, and working with a therapist. Recovery timelines vary — mild burnout may improve in weeks, while severe burnout can take months even with intervention." },
  { question: "When should I see a doctor about work stress or burnout?", answer: "Consider seeking professional help if: stress is affecting your sleep, appetite, or physical health; you feel emotionally numb or detached most of the time; you can't concentrate or make decisions; you've lost interest in things outside work; or you're using alcohol or other substances to cope. You don't need to be in crisis to deserve support." },
];

export default function WorkStressBurnoutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Work Stress vs. Burnout: How to Tell the Difference", description: "A plain-language guide to the difference between everyday work stress and clinical burnout — what the WHO says, why online quizzes have limits, and when to talk to a professional.", url: ARTICLE_URL, datePublished: "2025-02-01", dateModified: new Date().toISOString().split("T")[0] })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Work Stress vs. Burnout", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-400 dark:text-neutral-500">6 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Work Stress vs. Burnout: How to Tell the Difference (and What Online Quizzes Can&apos;t Tell You)
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Everyone has stressful days at work. But when exhaustion becomes your baseline and no amount of rest seems to help, you might wonder: am I burned out or just stressed? This guide breaks down the real differences, explains what the WHO actually says about burnout, and is honest about why online self-checks — including ours — are only a starting point.
          </p>
          <div className="mt-6">
            <Link href="/work-stress-check" className="btn-primary text-sm">
              Take the Work Stress Self-Check →
            </Link>
          </div>
        </header>

        <div className="prose-mh space-y-8">
          <section>
            <h2>What is burnout? The WHO definition</h2>
            <p>
              In 2019, the World Health Organization included burnout in the 11th Revision of the International Classification of Diseases (ICD-11) — but not as a medical condition. The WHO classifies burnout as an &quot;occupational phenomenon&quot; resulting from chronic workplace stress that has not been successfully managed.
            </p>
            <p>
              The WHO defines burnout through three dimensions: feelings of energy depletion or exhaustion; increased mental distance from one&apos;s job, or feelings of negativism or cynicism related to work; and reduced professional efficacy. All three must be present and specifically tied to the occupational context — burnout is not meant to describe experiences in other areas of life.
            </p>
            <p>
              This distinction matters. Burnout is not simply &quot;being tired of work.&quot; It&apos;s a specific syndrome with defined characteristics, and its classification as an occupational phenomenon (rather than a medical diagnosis) means it exists in a gray area that can make it harder to address through traditional healthcare channels.
            </p>
          </section>

          <section>
            <h2>Work stress vs. burnout: a side-by-side comparison</h2>
            <p>
              Stress and burnout exist on a continuum, but they are qualitatively different experiences. Understanding where you fall can help you decide what kind of support you need.
            </p>
            <div className="not-prose my-6 space-y-2">
              {[
                { label: "Energy", stress: "Depleted but recoverable after rest", burnout: "Chronically exhausted; rest doesn't help" },
                { label: "Emotions", stress: "Reactive — anxiety, urgency, frustration", burnout: "Flat — numbness, detachment, cynicism" },
                { label: "Motivation", stress: "Still engaged, often over-engaged", burnout: "Disengaged, going through the motions" },
                { label: "Focus", stress: "Scattered but functional", burnout: "Difficulty concentrating or making decisions" },
                { label: "Duration", stress: "Tied to specific demands; eases when demands do", burnout: "Persists even after vacation or time off" },
                { label: "Physical impact", stress: "Tension headaches, muscle tightness, poor sleep", burnout: "Chronic fatigue, frequent illness, GI problems" },
                { label: "Outlook", stress: "\"If I can get through this week...\"", burnout: "\"What's the point?\"" },
              ].map((r) => (
                <div key={r.label} className="card p-3">
                  <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">{r.label}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                    <p className="text-sm text-neutral-600 dark:text-neutral-300"><span className="font-medium">Stress:</span> {r.stress}</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300"><span className="font-medium">Burnout:</span> {r.burnout}</p>
                  </div>
                </div>
              ))}
            </div>
            <p>
              The core difference is this: stress is characterized by over-engagement, while burnout is characterized by disengagement. Stressed people feel like there&apos;s too much on their plate. Burned-out people feel like nothing on their plate matters anymore.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>The stages of workplace burnout</h2>
            <p>
              Burnout doesn&apos;t happen overnight. Researchers have identified a general progression that many people experience, though individual paths vary:
            </p>
            <div className="not-prose my-6 space-y-2">
              {[
                { stage: "1", name: "Honeymoon phase", desc: "High energy, optimism, and commitment to work. Stress exists but feels manageable and even motivating." },
                { stage: "2", name: "Onset of stress", desc: "Certain days feel harder. You notice fatigue, irritability, or difficulty sleeping — but attribute it to a busy period." },
                { stage: "3", name: "Chronic stress", desc: "Stress becomes the default state. Procrastination, resentment, social withdrawal, and physical symptoms increase. Work-life boundaries erode." },
                { stage: "4", name: "Burnout", desc: "Exhaustion is pervasive. Cynicism and detachment dominate. You may feel numb, question your career, or struggle to care about outcomes." },
                { stage: "5", name: "Habitual burnout", desc: "Burnout symptoms become embedded in daily life. Chronic mental and physical health problems may develop. Professional help is critical at this stage." },
              ].map((s) => (
                <div key={s.stage} className="flex items-start gap-3 p-3 card">
                  <span className="text-sm font-mono font-bold text-sage-600 dark:text-sage-400 w-6 flex-shrink-0">{s.stage}</span>
                  <div>
                    <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">{s.name}</span>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400"> — {s.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <p>
              Most people who take a burnout self-check are somewhere between stages 2 and 4. The important thing is not to identify your exact stage but to recognize that the trajectory is real — and that earlier intervention leads to better outcomes.
            </p>
          </section>

          <section>
            <h2>Burnout symptoms: physical vs. emotional</h2>
            <p>
              One reason burnout is hard to recognize is that people often attribute its physical symptoms to other causes. Burnout is not just an emotional experience — chronic workplace stress produces measurable physiological effects.
            </p>
            <p>
              <strong>Emotional symptoms</strong> include persistent exhaustion that sleep doesn&apos;t fix, cynicism or negativity toward work and colleagues, feeling ineffective or questioning your competence, emotional numbness or detachment, loss of satisfaction from accomplishments, and irritability or short temper that bleeds into personal relationships.
            </p>
            <p>
              <strong>Physical symptoms</strong> include chronic fatigue regardless of sleep, frequent headaches or muscle pain, gastrointestinal problems, weakened immune system (getting sick more often), changes in appetite or sleep patterns, and elevated heart rate or blood pressure.
            </p>
            <p>
              If you&apos;re experiencing physical symptoms alongside emotional exhaustion at work, it&apos;s worth mentioning both to your healthcare provider. The connection between chronic stress and physical health is well-established, and addressing only one side often isn&apos;t enough.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Burnout vs. depression: how to tell the difference</h2>
            <p>
              Burnout and depression share many symptoms — fatigue, difficulty concentrating, loss of motivation, sleep disruption, and feelings of hopelessness. This overlap is one reason professional assessment matters.
            </p>
            <p>
              The key distinction is context. Burnout is typically anchored to work: symptoms intensify during the workweek and may partially improve during extended time off (at least initially). Depression, by contrast, is pervasive — it affects how you feel about everything, not just your job.
            </p>
            <p>
              However, this distinction becomes less clear over time. Chronic, unaddressed burnout can develop into clinical depression. Someone who started with work-specific exhaustion may find that hopelessness has spread to their relationships, hobbies, and sense of self. At that point, the burnout-depression boundary blurs, and the most important step is getting professional support regardless of the label.
            </p>
            <p>
              If you&apos;re wondering whether what you&apos;re experiencing might be depression, our <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9 depression self-check</Link> can help you reflect on those symptoms — with the same caveat that it&apos;s a starting point, not a diagnosis.
            </p>
          </section>

          <section>
            <h2>Can an online burnout quiz actually diagnose you?</h2>
            <p>
              No — and any site that implies otherwise is misleading you. Here&apos;s why online burnout self-checks have real limitations:
            </p>
            <p>
              The gold standard for measuring burnout in research is the Maslach Burnout Inventory (MBI), developed by Christina Maslach and Susan Jackson. The MBI is a validated, copyrighted instrument that measures the three WHO burnout dimensions (exhaustion, cynicism, reduced efficacy) using 22 carefully worded items. It is not freely available online, and any free &quot;burnout quiz&quot; you find is either using different questions or is using the MBI without authorization.
            </p>
            <p>
              Even the MBI itself is a research and screening tool — it does not produce a diagnosis. Burnout is not a binary condition you either have or don&apos;t. It exists on a spectrum, interacts with your physical health, personal circumstances, workplace culture, and coping resources, and can only be fully understood in the context of your whole life.
            </p>
            <p>
              Our <Link href="/work-stress-check" className="text-sage-600 dark:text-sage-400 underline">Work Stress Self-Check</Link> is an original reflection tool — not based on any proprietary scale. It&apos;s designed to help you notice patterns, not to tell you whether you&apos;re burned out. Think of it as a structured way to check in with yourself, not as a verdict.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <section>
            <h2>Burnout risk for remote and hybrid workers</h2>
            <p>
              Remote work eliminated commutes but introduced new burnout risk factors. Without physical separation between work and home, many remote workers struggle with &quot;always on&quot; culture — the laptop is right there, the Slack notifications keep coming, and the boundary between &quot;at work&quot; and &quot;at home&quot; dissolves.
            </p>
            <p>
              Research from the Mental Health UK 2024 Burnout Report found that 91% of UK adults experienced high or extreme stress in the past year, with remote and hybrid workers reporting particular difficulty disconnecting. The absence of casual social interaction, the fatigue of back-to-back video calls, and the isolation of working alone all contribute to a distinct remote burnout profile.
            </p>
            <p>
              If you work remotely, pay extra attention to boundaries: a consistent end-of-day ritual, a physical workspace you can leave, and regular in-person social connection (even outside work) can make a meaningful difference.
            </p>
          </section>

          <section>
            <h2>When to see a doctor about burnout</h2>
            <p>
              You don&apos;t need to be in crisis to seek help. Consider talking to a healthcare provider if work stress is affecting your sleep or physical health for more than a few weeks; if you feel emotionally numb, detached, or unable to care about things that used to matter; if you&apos;re relying on alcohol, substances, or other coping mechanisms to get through the day; if your relationships are suffering because of work-related irritability or withdrawal; or if you&apos;ve tried making changes (boundaries, time off, workload adjustments) and nothing has helped.
            </p>
            <p>
              A therapist, counselor, or your primary care provider can help you determine whether what you&apos;re experiencing is situational stress, burnout, depression, or something else entirely — and can work with you on a plan that accounts for your specific circumstances, which no online tool can do.
            </p>
          </section>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Want to reflect on your work stress?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, takes about 3 minutes. Your answers never leave your browser.</p>
            <Link href="/work-stress-check" className="btn-primary text-sm">Take the Work Stress Self-Check</Link>
          </div>

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

          <AdSlot position="Blog In-Content 4" className="my-8" />

          {/* Related */}
          <section className="not-prose mt-10">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/sleep-and-mood" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">How Sleep and Mood Affect Each Other</p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">The bidirectional relationship between sleep quality and mental health</p>
              </Link>
              <Link href="/blog/phq-9-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Screening Guide</p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">How clinicians use and interpret depression scores</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
