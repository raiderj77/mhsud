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

const PAGE_URL = `${SITE_URL}/what-is-the-dast-test`;

const TITLE = "What Is the DAST-10? The Drug Abuse Screening Test, Its Scoring, and What a Score Means";
const DESCRIPTION =
  "The DAST-10 drug abuse screening test explained: what the 10 questions measure, how scoring works, Skinner's five score bands and what each one calls for, and why the questionnaire itself is not a lab drug test.";

const LINK_CLASS =
  "underline break-all text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300";

const FAQ_DATA = [
  {
    question: "What does a DAST-10 score mean?",
    answer:
      "Your total, 0 to 10, falls into one of Skinner's five bands: 0 means no problems reported, 1 to 2 is a low level of problems (monitor and re-assess later), 3 to 5 is moderate (further investigation), and 6 to 8 and 9 to 10 are substantial and severe (intensive assessment). The score counts consequences of drug use over the past 12 months. It is a screening result that tells a clinician how urgently to look closer, not a diagnosis.",
  },
  {
    question: "Is the DAST-10 the same as a drug test?",
    answer:
      "No. The DAST-10 is a questionnaire about the consequences of drug use; it collects no sample and cannot detect any substance. A laboratory drug test analyzes urine, blood, saliva, or hair to find whether specific drugs are present, and it cannot diagnose a drug use disorder either. The two answer different questions: one asks what drug use is doing to your life, the other asks what is in your body.",
  },
  {
    question: "Why can't I take the DAST-10 on this site?",
    answer:
      "Because the DAST is copyrighted by Dr. Harvey Skinner and the Centre for Addiction and Mental Health. Their terms allow free clinical use and require permission for commercial reuse, and the author's current guide asks users to contact him and CAMH about permission. MindCheck does not hold that permission for a public website, so this page explains the test and its scoring instead of administering it. Clinicians in primary care, counseling, and treatment programs can administer it in the course of care.",
  },
];

const BANDS = [
  { score: "0", degree: "No problems reported", action: "None at this time" },
  { score: "1 to 2", degree: "Low level", action: "Monitor, re-assess at a later date" },
  { score: "3 to 5", degree: "Moderate level", action: "Further investigation" },
  { score: "6 to 8", degree: "Substantial level", action: "Intensive assessment" },
  { score: "9 to 10", degree: "Severe level", action: "Intensive assessment" },
];

const COMPARISON = [
  {
    test: "DAST-10 questionnaire",
    uses: "Your answers to 10 yes-or-no questions",
    frame: "The past 12 months",
    tells: "How severe the consequences of drug use appear to be, in five bands",
    cannot: "Detect any substance; name the drug; diagnose a disorder",
  },
  {
    test: "Laboratory drug test",
    uses: "A urine, blood, saliva, or hair sample",
    frame: "Hours to days before the test, longer for hair",
    tells: "Whether specific drugs are present in your body",
    cannot: "Measure severity; diagnose a drug use disorder",
  },
  {
    test: "AUDIT questionnaire",
    uses: "Your answers to 10 questions about alcohol",
    frame: "Mostly the past 12 months",
    tells: "Your alcohol risk zone and the next step it calls for",
    cannot: "Say anything about drugs other than alcohol",
  },
];

export const metadata: Metadata = createMetadata({
  path: "/what-is-the-dast-test",
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

export default function WhatIsTheDastTestPage() {
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
              The DAST-10, short for Drug Abuse Screening Test, 10-item version, is a screening questionnaire about drug use and its consequences. A person answers 10 yes-or-no questions about the past 12 months, each &quot;yes&quot; adds a point (one question is scored in reverse), and the total, 0 to 10, sorts into five bands that run from &quot;no problems reported&quot; to &quot;severe level.&quot; Clinicians have used it since the 1980s to decide who needs a fuller assessment. It is a pencil-and-paper style questionnaire, not a laboratory drug test: nothing is collected from your body, and it cannot say which drug you used or when.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              One honest note before the details. MindCheck Tools does not offer the DAST-10 as an online questionnaire, and this page will not walk you through its questions. The DAST is a copyrighted instrument, and its owners allow free clinical use but require permission for commercial reuse; that permission is not in place for a public website like this one, so the questions stay with the clinicians and publishers who are licensed to use them. What this page does instead is explain exactly how the test works and how its scores are read, so if a clinician hands it to you, or a score shows up in an assessment you are part of, you know what the number means. If the substance you are worried about is alcohol, that screening does live here: the free, private{" "}
              <Link href="/audit-alcohol-test" className={LINK_CLASS}>AUDIT</Link> and{" "}
              <Link href="/audit-c-alcohol-screen" className={LINK_CLASS}>AUDIT-C</Link> run in your browser with no account.
            </p>
          </section>

          <section>
            <h2 className={H2}>First, which &quot;drug test&quot; did you come here for?</h2>
            <p className={P}>
              The words &quot;drug abuse screening test&quot; point at two different things, and about half the people who search them want the other one.
            </p>
            <Bullets
              items={[
                <><strong>The DAST-10 (this page):</strong> a 10-question questionnaire about the consequences of drug use over the past 12 months. It produces a severity score. It is used by clinicians in primary care, counseling, and treatment intake.</>,
                <><strong>A laboratory drug test:</strong> a chemical analysis of urine (most common), blood, saliva, hair, or another sample, which detects whether specific drugs are present in your body. Employers, courts, sports bodies, and treatment programs use these. A lab test can find signs of drugs taken hours to days or more before the test, and it cannot diagnose a drug use disorder. MedlinePlus, the U.S. National Library of Medicine&apos;s consumer site, explains that side well on its{" "}
                  <a href="https://medlineplus.gov/lab-tests/drug-testing/" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>drug testing page</a>.</>,
              ]}
            />
            <p className={P}>
              If you need to know what a urine panel detects or how long a substance stays detectable, the laboratory test is your topic and this page is not. If you want to understand the questionnaire a clinician uses to judge how much trouble drug use is causing, keep reading.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm text-left border border-sand-200 dark:border-neutral-700">
                <caption className="sr-only">The DAST-10 questionnaire, a laboratory drug test, and the AUDIT compared</caption>
                <thead className="bg-sand-50 dark:bg-night-700 text-neutral-800 dark:text-neutral-100">
                  <tr>
                    <th scope="col" className="p-3 font-semibold">Test</th>
                    <th scope="col" className="p-3 font-semibold">What it uses</th>
                    <th scope="col" className="p-3 font-semibold">Time frame</th>
                    <th scope="col" className="p-3 font-semibold">What it can tell you</th>
                    <th scope="col" className="p-3 font-semibold">What it cannot do</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-300">
                  {COMPARISON.map((c) => (
                    <tr key={c.test} className="border-t border-sand-200 dark:border-neutral-700">
                      <th scope="row" className="p-3 font-semibold text-neutral-800 dark:text-neutral-100">{c.test}</th>
                      <td className="p-3">{c.uses}</td>
                      <td className="p-3">{c.frame}</td>
                      <td className="p-3">{c.tells}</td>
                      <td className="p-3">{c.cannot}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className={H2}>What the DAST is</h2>
            <p className={P}>
              The Drug Abuse Screening Test was developed by Dr. Harvey A. Skinner and published in 1982 in the journal Addictive Behaviors. Skinner designed it to give clinicians a brief instrument for screening and for treatment evaluation research: a set of self-report questions about the consequences of drug use, combined into a single total score that works as a quantitative index of problems related to drug misuse. In plain terms, it does not ask how much you use or how often. It asks what your use has done: to your control over it, your body, your family, your obligations, and your safety.
            </p>
            <p className={P}>
              The original 1982 instrument had 28 questions. Two shorter versions followed and are the ones in use now, both published and distributed by the Centre for Addiction and Mental Health (CAMH) in Toronto:
            </p>
            <Bullets
              items={[
                <><strong>DAST-20:</strong> 20 questions. CAMH describes it as constructed similarly to the Michigan Alcoholism Screening Test (MAST), the older alcohol questionnaire the DAST was modeled on, with its questions paralleling the MAST&apos;s.</>,
                <><strong>DAST-10:</strong> the 10-question short form derived from the original, and the version most people mean by &quot;the DAST&quot; today. It takes a few minutes, can be self-administered or given as an interview, and is the version this article covers.</>,
                <><strong>DAST-A:</strong> an adolescent version exists as well, with its own validation literature. Adolescent screening belongs with a clinician who works with young people; MindCheck&apos;s substance-use pages are written for adults, and the site&apos;s{" "}
                  <Link href="/crafft-substance-screening" className={LINK_CLASS}>CRAFFT information page</Link> explains the youth screening boundary.</>,
              ]}
            />
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Every version shares the same frame: the questions concern your possible involvement with drugs <strong>not including alcoholic beverages</strong>, during the <strong>past 12 months</strong>. &quot;Drugs&quot; in the instrument&apos;s own instructions covers cannabis, solvents, tranquilizers, barbiturates, cocaine, stimulants, hallucinogens, and narcotics or opioids, and it also covers prescription and over-the-counter medicines used in excess of the directions or for non-medical reasons. Tobacco sits outside its scope as well. Alcohol is deliberately excluded, because alcohol has its own instruments, the AUDIT family, covered below.
            </p>
          </section>

          <section>
            <h2 className={H2}>What the 10 questions cover</h2>
            <p className={P}>
              The questions themselves are the copyrighted part of the instrument, so they are not printed here. What can be described, because CAMH describes it openly, is the territory they survey. The items ask about consequences in a handful of life areas: whether you can stop when you want to, physical effects such as blackouts and medical problems, guilt and bad feelings about use, complaints from a spouse, partner, or parents, neglect of family and responsibilities, illegal activity connected to use, withdrawal symptoms, and using more than one drug at a time. CAMH summarizes the surveyed problem areas as marital and family relationships, legal problems, and medical symptoms and physical health conditions.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Two design choices are worth knowing. First, the score counts consequences, not consumption, so two people with the same habit can score very differently depending on what the habit is doing to their lives. Second, the DAST deliberately collects no information about which drugs you used or how often, as CAMH itself notes. A DAST score can never tell a clinician what you took. It tells them how much damage the pattern is doing, which is the question that decides the next step.
            </p>
          </section>

          <section>
            <h2 className={H2}>How DAST-10 scoring works</h2>
            <p className={P}>
              Scoring is simple enough to do by hand, which is part of why the instrument spread. Each question answered &quot;yes&quot; scores 1 point, with one exception: a single question is reverse-scored, so a &quot;no&quot; earns the point. The total runs from 0 to 10. Skinner&apos;s interpretation table, reproduced in SAMHSA&apos;s Treatment Improvement Protocol 35, reads the total in five bands:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm text-left border border-sand-200 dark:border-neutral-700">
                <caption className="sr-only">DAST-10 score bands, degree of problems related to drug abuse, and suggested action, from Skinner&apos;s interpretation table</caption>
                <thead className="bg-sand-50 dark:bg-night-700 text-neutral-800 dark:text-neutral-100">
                  <tr>
                    <th scope="col" className="p-3 font-semibold">DAST-10 score</th>
                    <th scope="col" className="p-3 font-semibold">Degree of problems related to drug abuse</th>
                    <th scope="col" className="p-3 font-semibold">Suggested action</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-300">
                  {BANDS.map((b) => (
                    <tr key={b.score} className="border-t border-sand-200 dark:border-neutral-700">
                      <th scope="row" className="p-3 font-semibold text-neutral-800 dark:text-neutral-100">{b.score}</th>
                      <td className="p-3">{b.degree}</td>
                      <td className="p-3">{b.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={P}>A few reading notes that keep the table honest:</p>
            <Bullets
              items={[
                <><strong>The bands grade consequences, not worth.</strong> A higher band means more reported problems in the past 12 months, in more areas of life. It is a triage tool: it sorts who should get a fuller assessment and how urgently.</>,
                <><strong>The step from 2 to 3 is the one clinicians watch.</strong> It is where Skinner&apos;s table first calls for further investigation rather than monitoring, so many settings treat 3 or more as a positive screen. Exact cutoffs still vary by setting and population, and validation studies do not all use the same one.</>,
                <><strong>A score is a snapshot of a year.</strong> The 12-month frame means a score can stay elevated after someone has stopped, and a recent pattern may not be fully visible yet. Scores are read alongside a conversation, never instead of one.</>,
                <><strong>The DAST-20 uses the same logic on a 0 to 20 scale.</strong> Published protocol guidance treats 6 or more on the DAST-20 as the point where further evaluation is indicated. Do not read a DAST-20 score against the DAST-10 table above.</>,
              ]}
            />
          </section>

          <section>
            <h2 className={H2}>How well does it work? (methodology and validation)</h2>
            <p className={P}>
              This guide was assembled from the instrument&apos;s primary and official sources: Skinner&apos;s original 1982 paper for the design and the first reliability figures, CAMH&apos;s professional page for the versions and what the instrument does and does not collect, SAMHSA TIP 35 for the scoring rule and the interpretation table, and the two validation reviews below for accuracy claims. No number in this section comes from a rehab blog or a test-prep site.
            </p>
            <Bullets
              items={[
                <><strong>Original study (Skinner, 1982).</strong> The 28-item DAST was evaluated in a clinical sample of 256 clients seeking help for alcohol or drug problems. Internal consistency was .92, factor analysis supported a single dimension (the items hang together as one scale of drug-problem severity), and the score was only moderately correlated with social desirability and denial, meaning people could not easily fake it into looking clean.</>,
                <><strong>Psychometric review (Yudko, Lozhkina, and Fouts, 2007).</strong> Reviewing the literature from 1982 to 2005 across the 10, 20, and 28-item versions and the adolescent version, the authors found moderate to high test-retest, inter-item, and item-total reliability, and moderate to high validity, sensitivity, and specificity, concluding that all versions give satisfactory measures for clinical and research use.</>,
                <><strong>Meta-analysis (BMC Medical Research Methodology, 2020).</strong> Pooling the DAST-10 studies, the reviewers estimated sensitivity of 0.90 (95% CI 0.75 to 0.97) and specificity of 0.82 (95% CI 0.72 to 0.89) for detecting drug use disorders, with internal consistency of 0.79. Read those as strong screening numbers with a wide error bar: the reviewers flagged high heterogeneity, meaning results varied a lot between studies and populations.</>,
                <><strong>What those numbers mean at the kitchen table.</strong> Sensitivity of 0.90 means the test catches most people who have a drug use disorder; it does not mean a positive score is a diagnosis. Specificity of 0.82 means a meaningful share of positive screens will not hold up as disorders on fuller assessment. That gap is not a defect. It is what screening is for: cast the net, then let a clinician do the diagnosing.</>,
              ]}
            />
            <p className={P}><strong>The honest limits, stated plainly:</strong></p>
            <Bullets
              items={[
                "It is self-report. The score is only as accurate as the answers, and it was designed for settings where someone is answering a clinician, not performing for an employer or a court.",
                "It screens; it does not diagnose. A substance use disorder diagnosis requires a clinical evaluation against diagnostic criteria, which is a different and longer process.",
                "A low score does not rule out a problem. Someone early in a pattern, or using a drug whose consequences have not landed yet, can score 0 to 2 and still be on a bad road. If you are worried, the worry itself is worth a conversation, whatever a questionnaire says.",
                "It says nothing about which substance, how much, or how often, and nothing about alcohol at all.",
              ]}
            />
          </section>

          <section>
            <h2 className={H2}>Which screening fits your situation</h2>
            <Bullets
              items={[
                <><strong>Best fit for the DAST-10:</strong> an adult in a clinical setting (primary care, counseling, treatment intake) where the question is &quot;how much trouble is drug use causing, and does this person need a fuller assessment?&quot; Not a fit for: checking whether a specific drug is in someone&apos;s system, or screening for alcohol problems.</>,
                <><strong>Best fit for a laboratory drug test:</strong> employment, legal, sports, or treatment-monitoring questions about whether specific substances are present. Not a fit for: judging severity, readiness for treatment, or whether someone has a disorder. A lab test cannot diagnose one.</>,
                <><strong>Best fit for the AUDIT or AUDIT-C:</strong> the same consequence-and-pattern questions, but about alcohol, which the DAST excludes on purpose. Both run free and privately on this site: the{" "}
                  <Link href="/audit-alcohol-test" className={LINK_CLASS}>AUDIT</Link> (10 questions) and the{" "}
                  <Link href="/audit-c-alcohol-screen" className={LINK_CLASS}>AUDIT-C</Link> (3 questions). Not a fit for: drug use other than alcohol.</>,
                <><strong>Best fit if you are worried about someone else:</strong> none of these instruments, taken on their behalf. You cannot answer consequence questions for another person honestly. The workable moves are in the worried-about-someone-else section below.</>,
              ]}
            />
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              The objection that usually arrives here: &quot;I found the DAST as a free PDF online, so why can&apos;t this site just run it?&quot; Because free to read is not the same as licensed to operate. The instrument is copyrighted by its author and CAMH; their stated terms allow free clinical use and require permission for commercial reuse, and the author&apos;s current guide asks users to contact him and CAMH about permission. MindCheck is a commercial website, it does not hold that permission, and so it explains the test instead of administering it, the same boundary this site keeps for the{" "}
              <Link href="/cage-aid-substance-abuse-screening" className={LINK_CLASS}>CAGE-AID</Link>. If that ever changes, this page will say so, and the questionnaire will appear with the credit line its owners require.
            </p>
          </section>

          <section>
            <h2 className={H2}>Addiction screening, in plain terms</h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              &quot;Addiction screening&quot; is the umbrella phrase for everything on this page: short, structured checks that estimate whether substance use is causing enough problems to deserve a fuller look. The DAST-10 is the drug-side member of that family, the AUDIT is the alcohol-side member, and clinicians pick between them based on which substance is in question. Screening is the front door of care, not the diagnosis and not the treatment. If you came here searching for addiction screening rather than the DAST by name, you are in the right place: the bands above are how the drug-side screen is read, and the{" "}
              <Link href="/screening-tools" className={LINK_CLASS}>screening tools index</Link> lists every screen and information page this site maintains, with an honest note on which ones run as questionnaires and which are information-only like this one.
            </p>
          </section>

          <section>
            <h2 className={H2}>What to do next, band by band</h2>
            <p className={P}>
              Skinner&apos;s suggested actions, translated into what they mean for a reader rather than a chart:
            </p>
            <p className={P}>
              <strong>Score 0 (no problems reported).</strong> No action is called for by the test. If you took it in a clinic, that is the end of it. If you scored yourself from a paper copy somewhere and the 0 surprises you, remember the limits above: the test reads consequences, and consequences sometimes lag.
            </p>
            <p className={P}>
              <strong>Score 1 to 2 (low level).</strong> Monitor. In practice: notice whether the consequences are growing, and re-screen in a few months or sooner if the pattern changes. This is the cheapest band to leave, and the easiest to drift upward from quietly.
            </p>
            <p className={P}>
              <strong>Score 3 to 5 (moderate level).</strong> Further investigation, which in plain terms means a real assessment conversation with a clinician or counselor who can ask the follow-up questions a questionnaire cannot. This is the band where guessing stops being a strategy.
            </p>
            <p className={P}>
              <strong>Score 6 to 8 (substantial level).</strong> Intensive assessment. Arrange a professional evaluation soon, through a treatment program, an addiction counselor, or your clinician. Bring the score; it helps the assessor start in the right place.
            </p>
            <p className={P}>
              <strong>Score 9 to 10 (severe level).</strong> Intensive assessment, promptly. At this level the consequences are already spread across health, family, legal, or safety, and the assessment is about matching you to actual treatment, not about whether you need it.
            </p>
            <div className="card p-5 sm:p-6 mt-4">
              <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Places to start:
              </h3>
              <Bullets
                items={[
                  <>Worried about alcohol instead, or as well? Take the <Link href="/audit-c-alcohol-screen" className={LINK_CLASS}>AUDIT-C screening</Link> or the <Link href="/audit-alcohol-test" className={LINK_CLASS}>full AUDIT</Link>, free and private.</>,
                  <>Read the evidence and licensing notes for this and the site&apos;s other instruments on the <Link href="/clinical-evidence" className={LINK_CLASS}>clinical evidence</Link> page.</>,
                  <>Browse <Link href="/therapists" className={LINK_CLASS}>therapists</Link> in the MindCheck Tools California directory (listings cover Los Angeles, Monterey, San Benito, and Santa Cruz counties).</>,
                  <>Browse <Link href="/facilities" className={LINK_CLASS}>substance use treatment programs</Link> in the facilities directory.</>,
                  <>Call SAMHSA&apos;s National Helpline at 1-800-662-4357 for free, confidential referrals anywhere in the U.S.</>,
                ]}
              />
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                These links are the same for everyone who reads this article. Nothing here is matched to your answers, because this page collects none.
              </p>
            </div>
          </section>

          <section>
            <h2 className={H2}>If you are worried about someone else</h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              You cannot take the DAST for them, and scoring their life from the outside will start an argument instead of a conversation. What the bands can do for you is calibrate your worry: the consequence areas the test asks about (family complaints, neglect of responsibilities, medical problems, legal trouble) are the same things you have probably been seeing. Name specific events at a calm moment, say plainly that you are worried, and offer the concrete next step, a ride to an assessment or help making the call. SAMHSA&apos;s National Helpline (1-800-662-4357) takes calls from family members too. If the person uses opioids, ask a pharmacist or the helpline about naloxone; it is the one step that can matter in minutes rather than weeks.
            </p>
          </section>

          <section>
            <h2 className={H2}>Your privacy</h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              This page asks you nothing. There is no DAST questionnaire, form, or score on it, by design and by license. The screenings this site does run, like the AUDIT, process answers locally in your browser and are not intentionally sent to MindCheck Tools, and there is no account to create. Ordinary page requests can still create normal hosting records, and anything you copy, print, or leave open on a shared device is outside that protection. Learn more in the{" "}
              <Link href="/privacy" className={LINK_CLASS}>Privacy Policy</Link>.
            </p>
          </section>

          {/* Crisis Resources */}
          <section className="card p-5 sm:p-6">
            <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Help and support</h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
              If you or someone you know is in crisis or immediate danger, call 911 or go to the nearest emergency room. For a suspected overdose, call 911 immediately; opioid overdoses can be reversed with naloxone if it is given in time.
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
                <><Link href="/what-is-the-audit-test" className={LINK_CLASS}>What the AUDIT test is</Link>, the alcohol screening explained, with the questionnaire this site does run</>,
                <><Link href="/signs-of-alcoholism" className={LINK_CLASS}>Signs of alcoholism</Link>, the 11 signs clinicians use, in plain language</>,
                <><Link href="/alcohol-withdrawal-timeline" className={LINK_CLASS}>Alcohol withdrawal timeline</Link>, how long symptoms last, stage by stage</>,
                <><Link href="/clinical-evidence" className={LINK_CLASS}>Clinical evidence</Link>, sources, validation, and licensing notes for the instruments this site documents, including the DAST-10</>,
                <><Link href="/cage-aid-substance-abuse-screening" className={LINK_CLASS}>CAGE-AID information</Link>, another screening instrument this site explains without administering, for the same licensing reason</>,
              ]}
            />
          </section>

          {/* Sources */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Sources</h2>
            <Bullets
              items={[
                <>
                  Skinner HA. The Drug Abuse Screening Test. <em>Addictive Behaviors.</em> 1982;7(4):363-371.{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/7183189/" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>https://pubmed.ncbi.nlm.nih.gov/7183189/</a>
                </>,
                <>
                  Substance Abuse and Mental Health Services Administration. Enhancing Motivation for Change in Substance Use Disorder Treatment. Treatment Improvement Protocol (TIP) Series No. 35. Appendix B, Drug Abuse Screening Test (DAST-10): scoring rule and interpretation of score table.{" "}
                  <a href="https://www.ncbi.nlm.nih.gov/books/NBK571063/" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>https://www.ncbi.nlm.nih.gov/books/NBK571063/</a>
                </>,
                <>
                  Yudko E, Lozhkina O, Fouts A. A Comprehensive Review of the Psychometric Properties of the Drug Abuse Screening Test. <em>Journal of Substance Abuse Treatment.</em> 2007;32(2):189-198.{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/17306727/" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>https://pubmed.ncbi.nlm.nih.gov/17306727/</a>
                </>,
                <>
                  Psychometric properties of measures of substance use: a systematic review and meta-analysis of reliability, validity and diagnostic test accuracy. <em>BMC Medical Research Methodology.</em> 2020.{" "}
                  <a href="https://bmcmedresmethodol.biomedcentral.com/articles/10.1186/s12874-020-00963-7" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>https://bmcmedresmethodol.biomedcentral.com/articles/10.1186/s12874-020-00963-7</a>
                </>,
                <>
                  Centre for Addiction and Mental Health. Drug Abuse Screening Test (DAST-20): versions, purpose, and what the instrument collects.{" "}
                  <a href="https://camh.ca/en/professionals/camh-clinical-tools/drug-abuse-screening-test" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>https://camh.ca/en/professionals/camh-clinical-tools/drug-abuse-screening-test</a>
                </>,
                <>
                  Skinner HA. Guide for Using the Drug Abuse Screening Test (DAST). Revised version, 2023. Copyright and permission-to-use notice; classes of drugs covered by the instrument&apos;s instructions.
                </>,
                <>
                  National Library of Medicine, MedlinePlus. Drug Testing.{" "}
                  <a href="https://medlineplus.gov/lab-tests/drug-testing/" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>https://medlineplus.gov/lab-tests/drug-testing/</a>
                </>,
              ]}
            />
          </section>
        </div>

        {/* Footer */}
        <footer className="border-t border-sand-200 dark:border-neutral-700 pt-6 mt-10 text-center">
          <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Reviewer scope</h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-2">
            Written by Jason Ramirez, Certified Alcohol and Drug Counselor Level II (CADC-II). This credential covers substance use counseling. It is not medical, psychiatric, or psychological review. This article is general information about a screening instrument and how its scores are interpreted, not medical advice, not a diagnosis, and not the instrument itself: the DAST-10 remains the copyrighted work of Dr. Harvey A. Skinner and the Centre for Addiction and Mental Health, and this page neither reproduces nor administers it. Questions about your own drug use and health belong with a medical professional or a licensed counselor who can evaluate you directly. Last reviewed November 25, 2026.
          </p>
          <ToolReviewerBio lastReviewed="November 25, 2026" />
        </footer>
      </div>
    </>
  );
}
