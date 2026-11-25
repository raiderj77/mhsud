import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  createMetadata,
  articleJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
  SITE_URL,
} from "@/lib/metadata";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";

const PAGE_URL = `${SITE_URL}/alcohol-withdrawal-timeline`;

const TITLE = "Alcohol Withdrawal Timeline: How Long Symptoms Last, Stage by Stage";
const DESCRIPTION =
  "The alcohol withdrawal timeline hour by hour and day by day: when symptoms start, when they peak, when seizures and delirium tremens can happen, and when to get medical help now.";

const LINK_CLASS =
  "underline break-all text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300";

const FAQ_DATA = [
  {
    question: "How long do alcohol withdrawal symptoms last?",
    answer:
      "For most people, symptoms begin within 6 to 24 hours of the last drink, peak between 24 and 72 hours, and the acute phase is mostly over within about a week. Sleep problems, anxiety, and low mood can continue for several weeks after the physical symptoms end.",
  },
  {
    question: "Can alcohol withdrawal kill you?",
    answer:
      "Yes. Withdrawal seizures and delirium tremens can be fatal, which is why alcohol withdrawal is treated as a medical issue rather than a willpower test. Delirium tremens develops in about 3 to 5 out of every 100 people in withdrawal; the StatPearls clinical reference puts its death rate at up to 37 in 100 without treatment and below 5 in 100 with early treatment.",
  },
  {
    question: "Can I detox at home?",
    answer:
      "Some people with a mild risk profile go through withdrawal as outpatients, but that is a plan made with a clinician, with monitoring and someone present, not a solo decision. If you drink heavily every day, have had a seizure or delirium tremens before, or have other medical problems, stopping at home on your own is genuinely dangerous. Talk to a clinician before you stop, not after symptoms start.",
  },
];

const TIMELINE = [
  {
    time: "6 to 12 hours",
    happens:
      "Early symptoms: anxiety, shakiness or tremor, sweating, nausea and stomach upset, headache, loss of appetite, trouble sleeping, a faster pulse and raised blood pressure",
    means:
      "Withdrawal is starting. This stage feels like a hangover that keeps building instead of fading.",
  },
  {
    time: "12 to 24 hours",
    happens:
      "Symptoms intensify. Some people begin to see, hear, or feel things that are not there (alcoholic hallucinosis) while otherwise knowing where they are",
    means:
      "The nervous system is more overactive. Hallucinations at any point are a reason to get medical help the same day.",
  },
  {
    time: "24 to 48 hours",
    happens:
      "The highest-risk window for withdrawal seizures, which are generalized (whole-body) seizures. They can happen even when earlier symptoms seemed mild",
    means:
      "This is the window that makes unsupervised detox dangerous. A seizure is a 911 emergency.",
  },
  {
    time: "48 to 72 hours",
    happens:
      "The typical window for delirium tremens (DTs): severe confusion and disorientation, agitation, fever, heavy sweating, racing heart, high blood pressure, vivid hallucinations. It occasionally starts later",
    means:
      "DTs are the most severe form of withdrawal and a medical emergency. About 3 to 5 out of every 100 people going through alcohol withdrawal develop them.",
  },
  {
    time: "Days 3 to 5",
    happens:
      "For most people, symptoms peak somewhere in the 24 to 72 hour range and then begin to ease",
    means:
      "If symptoms are still escalating after day 3 instead of easing, that is a warning sign, not a normal course. Get checked.",
  },
  {
    time: "Days 5 to 7",
    happens: "For most people, the acute physical symptoms have largely settled",
    means:
      "Shaking, sweating, and the racing heart should be mostly behind you. Poor sleep and anxiety often are not.",
  },
  {
    time: "Weeks after",
    happens:
      "A longer tail for some people: broken sleep, anxiety, irritability, low mood, trouble concentrating, and cravings at the old drinking times",
    means:
      "Clinicians sometimes call this protracted withdrawal. It is common, it is not a personal failure, and it is one reason follow-up support matters more than willpower.",
  },
];

export const metadata: Metadata = createMetadata({
  path: "/alcohol-withdrawal-timeline",
  title: TITLE,
  description: DESCRIPTION,
});

function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2 mb-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 text-neutral-600 dark:text-neutral-300 leading-relaxed">
          <span className="text-sage-500 mt-1 flex-shrink-0" aria-hidden="true">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const H2 = "font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4";
const P = "text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3";

export default function AlcoholWithdrawalTimelinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: TITLE,
              description: DESCRIPTION,
              url: PAGE_URL,
              datePublished: "2026-11-25",
              dateModified: "2026-11-25",
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
              { name: "Tools and guides", url: `${SITE_URL}/screening-tools` },
              { name: TITLE, url: PAGE_URL },
            ])
          ),
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Guide</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">
            {TITLE}
          </h1>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-3">
            By Jason Ramirez, CADC-II. Published: November 25, 2026. Updated: November 25, 2026.
          </p>
        </header>

        <div className="prose-mh space-y-10">
          {/* Answer first */}
          <section>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
              Alcohol withdrawal follows a rough timeline. For most heavy drinkers who stop, early symptoms start 6 to 12 hours after the last drink: shakiness, sweating, anxiety, nausea, and trouble sleeping. Symptoms usually peak between 24 and 72 hours. That middle window is also when the dangerous complications can appear: seizures most often within 48 hours, and delirium tremens, a severe confusion state that can be fatal, most often 48 to 72 hours after the last drink. For most people the acute phase eases over about 5 to 7 days, although sleep and mood symptoms can linger for weeks.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              If you drink heavily every day, do not use this timeline to talk yourself into detoxing alone. Withdrawal is one of the few substance use problems that can kill an otherwise healthy person, and there is no reliable way to predict in advance whose withdrawal will stay mild. The safer first step is a plan made with a clinician before you stop. If you want to understand your drinking risk first, take the free, private{" "}
              <Link href="/audit-c-alcohol-screen" className={LINK_CLASS}>AUDIT-C screening</Link>{" "}
              (3 questions, about a minute) or the full{" "}
              <Link href="/audit-alcohol-test" className={LINK_CLASS}>AUDIT screening</Link>. Neither one requires an account.
            </p>
          </section>

          {/* Get help now */}
          <section className="card p-5 sm:p-6">
            <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
              Get medical help now, do not wait and see, if any of these are happening:
            </h2>
            <Bullets
              items={[
                "A seizure, or someone near you is having one",
                "Confusion, disorientation, or not recognizing people or places",
                "Seeing, hearing, or feeling things that are not there, especially with agitation",
                "Fever, a racing or pounding heart, or heavy sweating that keeps escalating",
                "Repeated vomiting, or being unable to keep fluids down",
                "Severe shaking or agitation that keeps getting worse instead of better",
              ]}
            />
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Call 911 or go to the nearest emergency room. Do not drive yourself. If the person is having thoughts of harming themselves, call or text 988 (Suicide and Crisis Lifeline, U.S., 24/7).
            </p>
          </section>

          <section>
            <h2 className={H2}>What alcohol withdrawal is</h2>
            <p className={P}>
              Alcohol withdrawal is the set of symptoms that can start when someone who has been drinking heavily for weeks, months, or years suddenly stops or sharply cuts down. Alcohol slows the brain down. Over time the brain adjusts to its constant presence, so when the alcohol is removed, the nervous system rebounds into overactivity. That rebound is withdrawal: the shakes, the racing heart, the anxiety, and, at the severe end, seizures and delirium.
            </p>
            <p className={P}>
              Withdrawal is not a hangover. A hangover follows a single episode of drinking and fades within a day. Withdrawal follows sustained heavy drinking, builds over days, and can become a medical emergency. Withdrawal is also not a diagnosis and not a character verdict. It is a physical response to the absence of a substance the body has adapted to, and it is one of the clearest physical signs that dependence may be present.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              The National Institute on Alcohol Abuse and Alcoholism (NIAAA) notes that up to half of people with an alcohol use disorder have some withdrawal symptoms when they stop drinking, and a smaller share need medical care and monitoring to get through it safely.
            </p>
          </section>

          <section>
            <h2 className={H2}>The alcohol withdrawal timeline</h2>
            <p className={P}>
              Times below are counted from the last drink. They are the typical windows given in clinical references, not a personal schedule. Your timing can run earlier or later, and symptoms do not always arrive in this order.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm text-left border border-sand-200 dark:border-neutral-700">
                <caption className="sr-only">Alcohol withdrawal timeline from clinical references</caption>
                <thead className="bg-sand-50 dark:bg-night-700 text-neutral-800 dark:text-neutral-100">
                  <tr>
                    <th scope="col" className="p-3 font-semibold">Time since last drink</th>
                    <th scope="col" className="p-3 font-semibold">What can happen</th>
                    <th scope="col" className="p-3 font-semibold">What it means</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-300">
                  {TIMELINE.map((row) => (
                    <tr key={row.time} className="border-t border-sand-200 dark:border-neutral-700">
                      <th scope="row" className="p-3 font-semibold text-neutral-800 dark:text-neutral-100">{row.time}</th>
                      <td className="p-3">{row.happens}</td>
                      <td className="p-3">{row.means}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className={H2}>How long do alcohol withdrawal symptoms last?</h2>
            <p className={P}>
              For most people: symptoms start within the first day, peak between 24 and 72 hours after the last drink, and the acute phase is mostly over within about a week. Two honest exceptions matter more than the average.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              First, the dangerous complications run on a later clock than the early symptoms. Seizures cluster in the first 48 hours and delirium tremens most often starts on day 2 or 3, which is why someone can seem to be doing fine at hour 20 and be in an emergency at hour 55. Second, the tail is real. Sleep problems, anxiety, and low mood can continue for weeks after the physical symptoms end. NIAAA counts roughly 260,000 emergency department visits and about 850 deaths a year in the United States from alcohol withdrawal, which is why clinicians take the first week seriously even when most cases stay mild.
            </p>
          </section>

          <section>
            <h2 className={H2}>When withdrawal becomes a medical emergency</h2>
            <p className={P}>Two complications account for most of the danger.</p>
            <p className={P}>
              <strong>Withdrawal seizures.</strong> These are generalized tonic-clonic seizures, the whole-body kind. They usually occur within 48 hours of the last drink, most often in the 24 to 48 hour window, and they can be the first severe sign, arriving without much warning from the milder symptoms before them.
            </p>
            <p className={P}>
              <strong>Delirium tremens (DTs).</strong> The most severe form of alcohol withdrawal: profound confusion and disorientation, agitation, fever, drenching sweats, a racing heart, high blood pressure, and vivid hallucinations. DTs develop in about 3 to 5 out of every 100 people going through alcohol withdrawal. The StatPearls clinical reference on delirium tremens puts the anticipated death rate at up to 37 out of 100 cases without appropriate treatment, and notes that early treatment brings it below 5 in 100. That gap, 37 versus under 5, is the entire argument for medical supervision in one pair of numbers.
            </p>
            <p className={P}><strong>The risk of severe withdrawal is higher for people who:</strong></p>
            <Bullets
              items={[
                "Have had a withdrawal seizure or delirium tremens before",
                "Have been through detox or withdrawal multiple times",
                "Have drunk heavily every day for a long period",
                "Have other medical problems, including liver disease",
                "Are older",
                "Already need a drink in the morning to stop the shakes",
              ]}
            />
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              If several of those describe you or someone you love, treat stopping as a medical event to plan with a clinician, not a home project.
            </p>
          </section>

          <section>
            <h2 className={H2}>Why heavy drinkers should not detox alone</h2>
            <p className={P}>
              The obvious objection is &quot;I have quit before and I was fine.&quot; There are two problems with it. First, withdrawal is not reliably predictable: NIAAA&apos;s clinical resource is blunt that you cannot tell in advance who will need medical care. Second, research on withdrawal describes a kindling effect, in which repeated withdrawals can lower the seizure threshold, so each episode can be more severe than the last. A past mild withdrawal is not a promise about the next one.
            </p>
            <p className={P}>
              None of this means every person who stops drinking needs a hospital. It means the decision about setting belongs in a conversation with a clinician who knows your history, ideally before your last drink, not during hour 30. In medical settings, clinicians track withdrawal severity with a standard 10-item scale called the CIWA-Ar and adjust medication to the score. The American Society of Addiction Medicine (ASAM) publishes the clinical guideline for that care. The CIWA-Ar is a monitoring tool for clinicians during withdrawal; it is not a self-test, and no home checklist replaces it.
            </p>
            <p className={P}><strong>Choosing how to stop, by situation:</strong></p>
            <Bullets
              items={[
                <><strong>Best fit for a clinician-planned outpatient withdrawal:</strong> a shorter or lighter drinking history, no past seizures or DTs, no major medical problems, a stable home, and someone sober who can stay with you and get help fast.</>,
                <><strong>Not a fit for stopping on your own:</strong> daily heavy drinking over a long period, any past withdrawal seizure or DTs, previous detoxes, serious medical conditions, or needing a morning drink to function. For this group, the safe version of stopping is medically supervised withdrawal, arranged in advance.</>,
                <><strong>If you are already in withdrawal and symptoms are escalating:</strong> skip the planning stage entirely and use the emergency guidance at the top of this page.</>,
              ]}
            />
          </section>

          <section>
            <h2 className={H2}>How this timeline was put together (methodology)</h2>
            <Bullets
              items={[
                <><strong>Primary timeline source:</strong> the staging table in Sachdeva, Choudhary, and Chandra, &quot;Alcohol Withdrawal Syndrome: Benzodiazepines and Beyond,&quot; Journal of Clinical and Diagnostic Research, 2015, which gives the 6 to 12 hour, 12 to 24 hour, 24 to 48 hour, and 48 to 72 hour windows used in the table above.</>,
                <><strong>Cross-checks:</strong> Cleveland Clinic&apos;s withdrawal page (symptoms peak 24 to 72 hours; some symptoms continue for weeks) and the StatPearls clinical references on alcohol withdrawal syndrome (seizures within 8 to 48 hours; about 3 to 5 percent progress to delirium) and delirium tremens (mortality up to 37 percent untreated, below 5 percent with early treatment).</>,
                <><strong>Population figures:</strong> NIAAA&apos;s Core Resource on Alcohol (up to half of people with an alcohol use disorder experience withdrawal symptoms; about 260,000 emergency department visits and 850 deaths a year in the U.S.).</>,
                <><strong>Care standards:</strong> the ASAM Clinical Practice Guideline on Alcohol Withdrawal Management (2020) for how withdrawal is monitored and treated in medical settings, including the CIWA-Ar&apos;s role as a monitoring scale.</>,
                <><strong>What the windows are:</strong> typical ranges across many patients, drawn from the sources above. They are not a prediction for any one person, and where the sources give slightly different edges (for example, seizures at 24 to 48 hours versus 8 to 48 hours), this article uses the wider, safer framing.</>,
              ]}
            />
          </section>

          <section>
            <h2 className={H2}>Before you stop: check your drinking</h2>
            <p className={P}>
              Withdrawal risk grows out of a drinking pattern, and it helps to see your own pattern clearly before you change it. MindCheck Tools runs the same screenings used in clinics:
            </p>
            <Bullets
              items={[
                <>The <Link href="/audit-c-alcohol-screen" className={LINK_CLASS}>AUDIT-C</Link>: 3 questions about how much and how often you drink. About a minute.</>,
                <>The full <Link href="/audit-alcohol-test" className={LINK_CLASS}>AUDIT</Link>: 10 questions covering drinking, possible dependence signs, and harm. About 3 minutes. New to it? Read <Link href="/what-is-the-audit-test" className={LINK_CLASS}>what the AUDIT test is</Link> first.</>,
              ]}
            />
            <p className={P}>
              One limit, stated plainly: a screening score describes your drinking risk. It does not predict how severe your withdrawal would be, and a low score does not clear anyone to detox alone. Only a clinician who knows your history can judge that. If you drink heavily every day, the screening is the second step. The first step is the conversation with a clinician about stopping safely.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              You can also explore the site&apos;s interactive{" "}
              <Link href="/withdrawal-timeline" className={LINK_CLASS}>withdrawal timeline tool</Link>, which shows phase-by-phase timelines for alcohol and other substances.
            </p>
          </section>

          <section>
            <h2 className={H2}>What to do next, zone by zone</h2>
            <p className={P}>
              The AUDIT sorts scores into four zones. Whatever your zone, it is always okay to talk with a professional if you are concerned about your drinking, and if you drink heavily, every zone below starts with the same rule: plan stopping with a clinician, do not stop suddenly on your own.
            </p>
            <p className={P}>
              <strong>Zone I (score 0 to 7, lower risk).</strong> Keep being mindful of your drinking, especially in stressful stretches. If your pattern creeps up, check in again.
            </p>
            <p className={P}>
              <strong>Zone II (score 8 to 15, hazardous use).</strong> Your pattern carries increased risk of harm. Practical steps to cut down help, and if you plan to stop entirely, raise it with a healthcare professional first so withdrawal is part of the plan.
            </p>
            <p className={P}>
              <strong>Zone III (score 16 to 19, harmful use).</strong> Talking with a healthcare professional or a licensed substance use counselor is encouraged. They can look at your whole situation, including withdrawal risk, and help plan follow-up.
            </p>
            <p className={P}>
              <strong>Zone IV (score 20 to 40, possible dependence).</strong> Please arrange a professional evaluation soon. At this level, stopping suddenly without medical guidance can be dangerous. A clinician can plan a supervised withdrawal and what comes after it.
            </p>
            <div className="card p-5 sm:p-6 mt-4">
              <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Places to start:
              </h3>
              <Bullets
                items={[
                  <>Take or retake the <Link href="/audit-c-alcohol-screen" className={LINK_CLASS}>AUDIT-C screening</Link> or the <Link href="/audit-alcohol-test" className={LINK_CLASS}>full AUDIT</Link>.</>,
                  <>Browse <Link href="/therapists" className={LINK_CLASS}>therapists</Link> in the MindCheck Tools California directory (listings cover Los Angeles, Monterey, San Benito, and Santa Cruz counties).</>,
                  <>Browse <Link href="/facilities" className={LINK_CLASS}>substance use treatment programs</Link> in the facilities directory.</>,
                  <>Call SAMHSA&apos;s National Helpline at 1-800-662-4357 for free, confidential referrals anywhere in the U.S.</>,
                ]}
              />
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                These links are the same for everyone who reads this article. Nothing here is matched to your answers or your score.
              </p>
            </div>
          </section>

          <section>
            <h2 className={H2}>If you are worried about someone else</h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              You cannot watch a clock for someone else, but you can know the danger signs: a seizure, confusion, hallucinations, fever, or agitation that keeps escalating in the first three days after they stop drinking means call 911, not wait until morning. If they drink heavily and talk about quitting, the most useful thing you can offer is help arranging a clinician conversation before they stop, and a ride when it happens. SAMHSA&apos;s National Helpline (1-800-662-4357) takes calls from family members too.
            </p>
          </section>

          <section>
            <h2 className={H2}>Your privacy</h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              On MindCheck Tools, your screening answers and score are processed locally in your browser and are not intentionally sent to MindCheck Tools. There is no account to create. Ordinary page requests can still create normal hosting records, and anything you copy, print, or leave open on a shared device is outside that protection. Learn more in the{" "}
              <Link href="/privacy" className={LINK_CLASS}>Privacy Policy</Link>.
            </p>
          </section>

          {/* Crisis Resources */}
          <section className="card p-5 sm:p-6">
            <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Help and support</h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
              If you or someone you know is in crisis or immediate danger, call 911 or go to the nearest emergency room.
            </p>
            <div className="space-y-2.5">
              {[
                { label: "988 Suicide and Crisis Lifeline:", detail: "call or text 988, 24 hours a day, 7 days a week (U.S.).", color: "text-crisis-600 dark:text-crisis-400" },
                { label: "SAMHSA National Helpline:", detail: "1-800-662-4357. Free, confidential, 24/7 treatment referral and information (U.S.).", color: "text-sage-600 dark:text-sage-400" },
                { label: "Crisis Text Line:", detail: "text HOME to 741741 (U.S.).", color: "text-warm-600 dark:text-warm-400" },
              ].map((r) => (
                <div key={r.label} className="p-3.5 rounded-xl border border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700">
                  <p className={`text-sm font-semibold ${r.color}`}>{r.label}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{r.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4">
              More options are on the{" "}
              <Link href="/crisis-resources" className={LINK_CLASS}>crisis resources page</Link>.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-5">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {FAQ_DATA.map((faq, i) => (
                <div key={i}>
                  <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related reading */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
              Related reading on MindCheck Tools
            </h2>
            <Bullets
              items={[
                <><Link href="/what-is-the-audit-test" className={LINK_CLASS}>What the AUDIT test is</Link>, the 10-question screening explained</>,
                <><Link href="/signs-of-alcoholism" className={LINK_CLASS}>Signs of alcoholism</Link>, the full checklist, including high-functioning signs</>,
                <><Link href="/audit-score-interpretation" className={LINK_CLASS}>AUDIT score interpretation</Link></>,
                <><Link href="/withdrawal-timeline" className={LINK_CLASS}>Withdrawal timeline tool</Link>, phase-by-phase timelines for alcohol and 7 other substances</>,
                <><Link href="/audit-vs-audit-c" className={LINK_CLASS}>AUDIT vs AUDIT-C</Link>, the full screening and the 3-question version compared</>,
              ]}
            />
          </section>

          {/* Sources */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Sources</h2>
            <Bullets
              items={[
                <>
                  Sachdeva A, Choudhary M, Chandra M. Alcohol Withdrawal Syndrome: Benzodiazepines and Beyond. <em>Journal of Clinical and Diagnostic Research.</em> 2015;9(9):VE01-VE07.{" "}
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4606320/" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>https://pmc.ncbi.nlm.nih.gov/articles/PMC4606320/</a>
                </>,
                <>
                  National Institute on Alcohol Abuse and Alcoholism. Alcohol Use Disorder: From Risk to Diagnosis to Recovery. Core Resource on Alcohol.{" "}
                  <a href="https://www.niaaa.nih.gov/health-professionals-communities/core-resource-on-alcohol/alcohol-use-disorder-risk-diagnosis-recovery" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>https://www.niaaa.nih.gov/health-professionals-communities/core-resource-on-alcohol/alcohol-use-disorder-risk-diagnosis-recovery</a>
                </>,
                <>
                  Canver BR, Newman RK, Gomez AE. Alcohol Withdrawal Syndrome. <em>StatPearls.</em> NCBI Bookshelf NBK441882.{" "}
                  <a href="https://www.ncbi.nlm.nih.gov/books/NBK441882/" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>https://www.ncbi.nlm.nih.gov/books/NBK441882/</a>
                </>,
                <>
                  Rahman A, Paul M. Delirium Tremens. <em>StatPearls.</em> NCBI Bookshelf NBK482134.{" "}
                  <a href="https://www.ncbi.nlm.nih.gov/books/NBK482134/" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>https://www.ncbi.nlm.nih.gov/books/NBK482134/</a>
                </>,
                <>
                  American Society of Addiction Medicine. The ASAM Clinical Practice Guideline on Alcohol Withdrawal Management. <em>Journal of Addiction Medicine.</em> 2020;14(3S Suppl 1):1-72.
                </>,
                <>
                  Cleveland Clinic. Alcohol Withdrawal: Symptoms, Treatment &amp; Timeline.{" "}
                  <a href="https://my.clevelandclinic.org/health/diseases/alcohol-withdrawal" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>https://my.clevelandclinic.org/health/diseases/alcohol-withdrawal</a>
                </>,
              ]}
            />
          </section>
        </div>

        {/* Footer */}
        <footer className="border-t border-sand-200 dark:border-neutral-700 pt-6 mt-10 text-center">
          <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Reviewer scope</h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-2">
            Written by Jason Ramirez, Certified Alcohol and Drug Counselor Level II (CADC-II). This credential covers substance use counseling. It is not medical, psychiatric, or psychological review. This article is general information about how alcohol withdrawal usually unfolds, not medical advice and not a detox plan. Withdrawal and other medical questions belong with a medical professional. Last reviewed November 25, 2026.
          </p>
          <ToolReviewerBio lastReviewed="November 25, 2026" />
        </footer>
      </div>
    </>
  );
}
