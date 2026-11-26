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

const PAGE_URL = `${SITE_URL}/what-is-the-cage-questionnaire`;

const TITLE = "What Is the CAGE Questionnaire? Scoring, the 2-Answer Threshold, and What a Positive Screen Means";
const DESCRIPTION =
  "The CAGE questionnaire explained: the four topic areas behind the acronym, how scoring works, why 2 or more yes answers is the clinically significant threshold, how it compares to the CAGE-AID and the AUDIT, and what a positive screen does and does not mean.";

const LINK_CLASS =
  "underline break-all text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300";

const FAQ_DATA = [
  {
    question: "What is a positive CAGE score?",
    answer:
      "Two or more yes answers out of four. Each yes scores one point, and the published rule, printed on the form state health agencies distribute citing Ewing's 1984 paper, treats a total of 2 or greater as clinically significant: a positive screen that calls for a fuller diagnostic evaluation. A score of 1 sits below the cutoff, though some primary care guidance treats even one yes as a reason to keep asking.",
  },
  {
    question: "I would have answered yes to two of these years ago, but I barely drink now. Does that make me an alcoholic?",
    answer:
      "No, and the question shows the CAGE's main limit. The questions are framed as 'have you ever,' so a positive screen can be entirely about a past period of drinking; the tool flags history, not your current state. It also does not diagnose anything: alcohol use disorder is a clinical judgment made against diagnostic criteria, usually about the past 12 months. If an old positive screen is sitting in your records, the accurate reading is 'this person once showed signs worth evaluating,' and a clinician can update that picture in one conversation about the present.",
  },
  {
    question: "Why can't I take the CAGE questionnaire on this site?",
    answer:
      "Because MindCheck only administers instruments its rights register has cleared, and the register has no documented clearance on file for the CAGE. The site takes the same position on the CAGE-AID and the DAST, whose pages explain the instruments and their scoring without running them. The alcohol screens this site does run are the AUDIT-C and the full AUDIT, which ask about your drinking now and return a zone with next steps. If the register records a CAGE clearance in the future, this page will say so.",
  },
];

const FAQ_HISTORY_ANSWER =
  "No, and the question shows the CAGE's main limit. The questions are framed as \"have you ever,\" so a positive screen can be entirely about a past period of drinking; the tool flags history, not your current state. It also does not diagnose anything: alcohol use disorder is a clinical judgment made against diagnostic criteria, usually about the past 12 months. If an old positive screen is sitting in your records, the accurate reading is \"this person once showed signs worth evaluating,\" and a clinician can update that picture in one conversation about the present.";

export const metadata: Metadata = createMetadata({
  path: "/what-is-the-cage-questionnaire",
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

export default function WhatIsTheCageQuestionnairePage() {
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
          <section>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
              The CAGE questionnaire is a four-question alcohol screening tool used in clinics since the 1980s. Each question is answered yes or no, each &quot;yes&quot; scores one point, and a total of <strong>2 or more out of 4 is considered clinically significant</strong>: a positive screen that calls for a fuller conversation about drinking. The name is an acronym built from the four things the questions ask about: feeling you should <strong>C</strong>ut down, being <strong>A</strong>nnoyed by criticism of your drinking, feeling <strong>G</strong>uilty about drinking, and needing an <strong>E</strong>ye-opener, a drink first thing in the morning. Unusually for a screening tool, the questions are asked in a lifetime frame, &quot;have you ever,&quot; so the CAGE flags a history of problem drinking rather than measuring what you drank this month.
            </p>
            <p className={P}>
              One honest note before the details. MindCheck Tools does not offer the CAGE as an online questionnaire, and this page explains the instrument instead of administering it. The site&#x27;s instrument register has no documented clearance on file for the CAGE, and MindCheck does not run questionnaires it has not cleared, the same boundary it keeps for the <Link href="/cage-aid-substance-abuse-screening" className={LINK_CLASS}>CAGE-AID</Link> and the DAST. What does run here, free and private, is the alcohol screening family the CAGE is most often compared with: the <Link href="/audit-c-alcohol-screen" className={LINK_CLASS}>AUDIT-C</Link> (3 questions about current drinking) and the full <Link href="/audit-alcohol-test" className={LINK_CLASS}>AUDIT</Link> (10 questions). If a clinician has handed you the CAGE, or a CAGE score appears in your records and you want to know what it means, this page is the explanation.
            </p>
          </section>

          <section>
            <h2 className={H2}>What the CAGE is</h2>
            <p className={P}>
              The CAGE is a brief screening questionnaire for alcohol problems, designed to be asked in an ordinary clinical interview in under a minute. It does not ask how much you drink or how often. It asks about four experiences that tend to show up when drinking has become a problem: trying or feeling you should cut back, other people&#x27;s criticism of your drinking getting under your skin, guilt about drinking, and morning drinking to steady yourself. A screening tool&#x27;s job is triage, not verdicts: the CAGE sorts people into &quot;no flag from these four questions&quot; and &quot;worth a real assessment,&quot; and it does that job with four questions instead of forty. A flag that stays down is not proof that drinking is safe; it only means these four experiences were not reported, and the limits covered below are real.
            </p>
            <p className={P}>
              What the CAGE is not:
            </p>
            <Bullets
              items={[
                <><strong>Not a diagnosis.</strong> A positive screen is a reason for a diagnostic evaluation, not the evaluation itself. Alcohol use disorder is diagnosed against clinical criteria by a professional who can ask follow-up questions.</>,
                <><strong>Not a measure of current drinking.</strong> The lifetime frame means a person who drank problematically a decade ago and has been sober since can still screen positive. That is by design, and it is also the tool&#x27;s biggest interpretive trap, covered below.</>,
                <><strong>Not a consumption count.</strong> Someone drinking heavily right now whose drinking has not yet produced these four experiences can screen negative. The CAGE detects consequences and loss-of-control signals, not volume.</>,
                <><strong>Not the CAGE-AID.</strong> The CAGE-AID is a separate, later adaptation that widens the same four questions to cover other drugs as well as alcohol. It has its own evidence and its own rights status on this site, and the comparison section below separates the two.</>,
              ]}
            />
          </section>

          <section>
            <h2 className={H2}>Where it came from</h2>
            <p className={P}>
              The questions were developed by Dr. John A. Ewing, a psychiatrist at the University of North Carolina, out of clinical interview work on alcohol problems. A first validation study by Mayfield, McLeod, and Hall appeared in the American Journal of Psychiatry in 1974. Ewing&#x27;s own description, &quot;Detecting alcoholism: The CAGE questionnaire,&quot; was published in JAMA in 1984, and it is the reference nearly every later paper cites. In that paper Ewing describes four clinical interview questions that had proved useful in identifying alcoholism, focusing on cutting down, annoyance at criticism, guilty feelings, and eye-openers, with the acronym serving as a memory aid for the physician.
            </p>
            <p className={P}>
              Two things about that history matter for a modern reader. First, the tool was built for a clinician to ask out loud, in a conversation where the answers could be followed up. Its migration onto paper forms, PDFs, and websites came later. Second, the 1984 paper&#x27;s language is of its time: it says &quot;alcoholism,&quot; where clinicians today diagnose alcohol use disorder on a severity scale. The questions survived the vocabulary change because the four experiences they ask about did not change.
            </p>
          </section>

          <section>
            <h2 className={H2}>The four questions, at the level of what they ask about</h2>
            <p className={P}>
              The item wording belongs to the instrument, so this page describes the four concept areas rather than reprinting the questions. In practice the areas are so widely summarized that the acronym itself gives them away:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm text-left border border-sand-200 dark:border-neutral-700">
                <caption className="sr-only">The four CAGE concept areas named by the acronym</caption>
                <thead className="bg-sand-50 dark:bg-night-700 text-neutral-800 dark:text-neutral-100">
                  <tr>
                    <th scope="col" className="p-3 font-semibold">Letter</th>
                    <th scope="col" className="p-3 font-semibold">Concept area</th>
                    <th scope="col" className="p-3 font-semibold">What it is getting at</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-300">
                  <tr className="border-t border-sand-200 dark:border-neutral-700">
                    <th scope="row" className="p-3 font-semibold text-neutral-800 dark:text-neutral-100">C</th>
                    <td className="p-3">Cut down</td>
                    <td className="p-3">Whether the person has felt they should reduce their drinking, a sign the habit has grown past their own intentions</td>
                  </tr>
                  <tr className="border-t border-sand-200 dark:border-neutral-700">
                    <th scope="row" className="p-3 font-semibold text-neutral-800 dark:text-neutral-100">A</th>
                    <td className="p-3">Annoyed</td>
                    <td className="p-3">Whether criticism of their drinking from other people has annoyed them, a sign drinking has become visible and contested at home or at work</td>
                  </tr>
                  <tr className="border-t border-sand-200 dark:border-neutral-700">
                    <th scope="row" className="p-3 font-semibold text-neutral-800 dark:text-neutral-100">G</th>
                    <td className="p-3">Guilty</td>
                    <td className="p-3">Whether the person has felt bad or guilty about drinking, a sign their own judgment is registering a problem</td>
                  </tr>
                  <tr className="border-t border-sand-200 dark:border-neutral-700">
                    <th scope="row" className="p-3 font-semibold text-neutral-800 dark:text-neutral-100">E</th>
                    <td className="p-3">Eye-opener</td>
                    <td className="p-3">Whether the person has needed a drink first thing in the morning to steady nerves or clear a hangover, a physical sign associated with dependence and withdrawal relief</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={P}>
              Read as a set, the four areas trace a pattern rather than a quantity: intention failing (C), relationships straining (A), conscience registering it (G), and the body asking for alcohol to start the day (E). That is why the tool can be four questions long. It is not sampling your drinking; it is checking whether the recognizable footprint of problem drinking is present anywhere in your history.
            </p>
          </section>

          <section>
            <h2 className={H2}>How CAGE scoring works</h2>
            <p className={P}>
              Scoring is the simplest in the screening family. Each &quot;yes&quot; scores 1 point and each &quot;no&quot; scores 0, for a total from 0 to 4. The published scoring rule, as printed on the form distributed by state health agencies citing Ewing&#x27;s 1984 paper, reads the total like this:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm text-left border border-sand-200 dark:border-neutral-700">
                <caption className="sr-only">CAGE questionnaire score interpretation: total yes answers and what each range means</caption>
                <thead className="bg-sand-50 dark:bg-night-700 text-neutral-800 dark:text-neutral-100">
                  <tr>
                    <th scope="col" className="p-3 font-semibold">Total yes answers</th>
                    <th scope="col" className="p-3 font-semibold">Reading</th>
                    <th scope="col" className="p-3 font-semibold">What it calls for</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-300">
                  <tr className="border-t border-sand-200 dark:border-neutral-700">
                    <th scope="row" className="p-3 font-semibold text-neutral-800 dark:text-neutral-100">0</th>
                    <td className="p-3">Negative screen</td>
                    <td className="p-3">No indication of an alcohol problem from this tool</td>
                  </tr>
                  <tr className="border-t border-sand-200 dark:border-neutral-700">
                    <th scope="row" className="p-3 font-semibold text-neutral-800 dark:text-neutral-100">1</th>
                    <td className="p-3">Below threshold</td>
                    <td className="p-3">Not a positive screen; some primary care guidance still treats one yes as a reason to ask more</td>
                  </tr>
                  <tr className="border-t border-sand-200 dark:border-neutral-700">
                    <th scope="row" className="p-3 font-semibold text-neutral-800 dark:text-neutral-100">2 to 4</th>
                    <td className="p-3">Positive screen, clinically significant</td>
                    <td className="p-3">A fuller diagnostic evaluation of drinking</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={P}>
              Three reading notes that keep the table honest:
            </p>
            <Bullets
              items={[
                <><strong>The cutoff is a decision point, not a severity ladder.</strong> A score of 4 is not &quot;twice as bad&quot; as a score of 2. The CAGE has no zones and no gradient; it answers one question, whether the threshold for a closer look has been crossed. Severity is what the follow-up assessment is for.</>,
                <><strong>Some clinicians lower the threshold to 1.</strong> The Connecticut Department of Mental Health and Addiction Services&#x27; published form notes that the normal cutoff is two positive answers, and recommends primary care clinicians lower it to one to cast a wider net. Settings choose the tradeoff between catching more cases and flagging more people who turn out fine.</>,
                <><strong>The frame is &quot;ever.&quot;</strong> Every question is about whether something has happened at any point, not in the last year. A positive screen can be entirely about the past, which is why the result has to be read alongside a conversation about the present.</>,
              ]}
            />
          </section>

          <section>
            <h2 className={H2}>How well does it work? (methodology and validation)</h2>
            <p className={P}>
              This guide was assembled from the instrument&#x27;s primary sources and its main validation review: Ewing&#x27;s 1984 JAMA paper for the design, the 1974 Mayfield validation study, Dhalla and Kopec&#x27;s 2007 review of the reliability and validity literature for the accuracy figures, Brown and Rounds 1995 for the CAGE-AID comparison, and the scoring rule as published on state health agency forms citing Ewing. No number in this section comes from a rehab blog or a calculator site.
            </p>
            <Bullets
              items={[
                <><strong>Validation review (Dhalla and Kopec, 2007).</strong> Reviewing the CAGE literature across populations, the authors found high test-retest reliability (0.80 to 0.95) and adequate correlations (0.48 to 0.70) with other screening instruments. For detecting alcohol abuse and dependence, the CAGE performed validly in medical and surgical inpatients, ambulatory medical patients, and psychiatric inpatients, with average sensitivity of 0.71 and specificity of 0.90 at the standard cutoff.</>,
                <><strong>Where it performs unevenly.</strong> The same review found performance in primary care patients was varied, and that the CAGE has not performed well in white women, in prenatal women, and in college students. It also concluded the CAGE is not an appropriate screening test for less severe forms of drinking: it was built to catch abuse and dependence, the heavier end of the spectrum, and quieter hazardous drinking passes under it.</>,
                <><strong>What those numbers mean at the kitchen table.</strong> Specificity of 0.90 means most people without an alcohol problem screen negative, so a positive deserves to be taken seriously. Sensitivity of 0.71 means the tool misses a real share of people who do have a problem, roughly three in ten in the populations studied, so a negative screen is weaker evidence than a positive one. Both directions point the same way: the screen opens a conversation, and a proper diagnostic evaluation using standard clinical criteria is what settles the question, which is the review&#x27;s own conclusion.</>,
              ]}
            />
            <p className={P}>
              <strong>The honest limits, stated plainly:</strong>
            </p>
            <Bullets
              items={[
                <>It flags history, not the present. Because the frame is lifetime, the CAGE cannot tell a clinician whether drinking is a problem now. A positive screen in someone years sober is a prompt to ask about the past, not evidence about today.</>,
                <>It misses current heavy drinking that has not yet produced its four experiences, and it was not designed for the less severe end of drinking problems at all.</>,
                <>Its accuracy varies by population, and it has underperformed in women in several studied groups, including prenatal women, which is one reason pregnancy care developed its own screening tools.</>,
                <>It is four self-reported answers. Like every screen, it is only as good as the honesty of the answers, and it screens; it does not diagnose.</>,
              ]}
            />
          </section>

          <section>
            <h2 className={H2}>CAGE vs CAGE-AID vs AUDIT</h2>
            <p className={P}>
              The three names get mixed up constantly, and they are different instruments with different jobs:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm text-left border border-sand-200 dark:border-neutral-700">
                <caption className="sr-only">The CAGE, the CAGE-AID, and the AUDIT compared</caption>
                <thead className="bg-sand-50 dark:bg-night-700 text-neutral-800 dark:text-neutral-100">
                  <tr>
                    <td className="p-3" />
                    <th scope="col" className="p-3 font-semibold">CAGE</th>
                    <th scope="col" className="p-3 font-semibold">CAGE-AID</th>
                    <th scope="col" className="p-3 font-semibold">AUDIT</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-300">
                  <tr className="border-t border-sand-200 dark:border-neutral-700">
                    <th scope="row" className="p-3 font-semibold text-neutral-800 dark:text-neutral-100">Covers</th>
                    <td className="p-3">Alcohol only</td>
                    <td className="p-3">Alcohol and other drugs together</td>
                    <td className="p-3">Alcohol only</td>
                  </tr>
                  <tr className="border-t border-sand-200 dark:border-neutral-700">
                    <th scope="row" className="p-3 font-semibold text-neutral-800 dark:text-neutral-100">Questions</th>
                    <td className="p-3">4, yes or no</td>
                    <td className="p-3">4, yes or no, adapted to include drugs</td>
                    <td className="p-3">10, mostly frequency scales</td>
                  </tr>
                  <tr className="border-t border-sand-200 dark:border-neutral-700">
                    <th scope="row" className="p-3 font-semibold text-neutral-800 dark:text-neutral-100">Time frame</th>
                    <td className="p-3">Lifetime (&quot;have you ever&quot;)</td>
                    <td className="p-3">Lifetime</td>
                    <td className="p-3">Mostly the past 12 months</td>
                  </tr>
                  <tr className="border-t border-sand-200 dark:border-neutral-700">
                    <th scope="row" className="p-3 font-semibold text-neutral-800 dark:text-neutral-100">Output</th>
                    <td className="p-3">A total, 0 to 4; 2 or more is a positive screen</td>
                    <td className="p-3">A total, 0 to 4; read as a conjoint alcohol-and-drug screen</td>
                    <td className="p-3">A total, 0 to 40, read in four risk zones</td>
                  </tr>
                  <tr className="border-t border-sand-200 dark:border-neutral-700">
                    <th scope="row" className="p-3 font-semibold text-neutral-800 dark:text-neutral-100">Origin</th>
                    <td className="p-3">Ewing, JAMA, 1984</td>
                    <td className="p-3">Brown and Rounds, 1995, adapted from the CAGE</td>
                    <td className="p-3">World Health Organization</td>
                  </tr>
                  <tr className="border-t border-sand-200 dark:border-neutral-700">
                    <th scope="row" className="p-3 font-semibold text-neutral-800 dark:text-neutral-100">Status on this site</th>
                    <td className="p-3">Explained on this page; not administered</td>
                    <td className="p-3"><Link href="/cage-aid-substance-abuse-screening" className={LINK_CLASS}>Information only</Link>; not administered</td>
                    <td className="p-3"><Link href="/audit-alcohol-test" className={LINK_CLASS}>Runs here</Link>, free and private</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={P}>
              The CAGE-AID (CAGE Adapted to Include Drugs) was built because the plain CAGE says nothing about drugs other than alcohol. In Brown and Rounds&#x27; 1995 primary care study, the CAGE-AID was more sensitive than the CAGE for substance use disorders across most patient groups, and less specific, meaning it caught more real cases and raised more false alarms. It is a genuinely different tool, not a newer edition of the CAGE, and on this site it sits behind an explicit rights boundary: the register records it as blocked for reproduction, which is why its page explains without administering, like the DAST page. For drug-side screening questions in general, the <Link href="/what-is-the-dast-test" className={LINK_CLASS}>DAST guide</Link> explains the instrument clinicians use there.
            </p>
            <p className={P}>
              The practical difference between the CAGE and the AUDIT is the clock. The CAGE asks whether problem drinking has ever left its footprint; the AUDIT asks what your drinking looks like now and sorts it into zones with a next step attached to each. A clinician who wants a sixty-second lifetime check reaches for the CAGE. A reader who wants to understand their current pattern is better served by the AUDIT family, which is why those are the tools this site runs.
            </p>
          </section>

          <section>
            <h2 className={H2}>Which screen fits your situation</h2>
            <Bullets
              items={[
                <><strong>Best fit for the CAGE:</strong> a clinician who needs a very brief lifetime screen for alcohol abuse or dependence inside an interview, or a reader trying to understand a CAGE score that already exists in their records. Not a fit for: measuring current drinking, catching hazardous drinking early, or screening for drug use.</>,
                <><strong>Best fit for the AUDIT or AUDIT-C:</strong> anyone who wants to screen their drinking as it is now and get a zone with a concrete next step. Both run free and privately on this site: the <Link href="/audit-c-alcohol-screen" className={LINK_CLASS}>AUDIT-C</Link> (3 questions) and the <Link href="/audit-alcohol-test" className={LINK_CLASS}>full AUDIT</Link> (10 questions). Not a fit for: drugs other than alcohol.</>,
                <><strong>Best fit for the CAGE-AID:</strong> a primary care setting screening for alcohol and drug problems together, administered by the clinician. Not a fit for: self-scoring from this website, where it is information-only.</>,
                <><strong>Best fit if you are worried about someone else:</strong> none of these, answered on their behalf. The CAGE&#x27;s questions are about the drinker&#x27;s own experience (their guilt, their annoyance), and a partner&#x27;s guesses are not a screen. The workable moves are in the worried-about-someone-else section below.</>,
              ]}
            />
            <p className={P}>
              The objection that usually arrives here: &quot;The four questions are printed on half the health websites in the country, so why won&#x27;t this site just run them?&quot; Two honest answers. First, widespread copying is not the same as a documented clearance, and MindCheck&#x27;s register, the file where the site records what it may lawfully use, has no entry for the plain CAGE at all. Until that file records a determination, the site explains the instrument and runs the ones it has cleared, which is the same rule it applies to the DAST and the CAGE-AID. Second, the part readers actually need from this page, how the scoring works, where the threshold sits, and what a positive result does and does not mean, is all here. What is missing is only the answer form, and a clinician who uses the CAGE can put it in front of you in the setting it was designed for.
            </p>
          </section>

          <section>
            <h2 className={H2}>What to do next, by result</h2>
            <p className={P}>
              If a clinician gave you the CAGE, or you answered it from a paper form and want to read your own total:
            </p>
            <p className={P}>
              <strong>Score 0.</strong> No action is called for by this tool. Keep the limit in mind: the CAGE cannot see current heavy drinking that has not yet caused its four experiences. If your drinking worries you anyway, the <Link href="/audit-c-alcohol-screen" className={LINK_CLASS}>AUDIT-C</Link> reads the present tense and takes a minute.
            </p>
            <p className={P}>
              <strong>Score 1.</strong> Below the standard cutoff, and not nothing. One yes means one of the four experiences has happened. Some primary care guidance treats a single yes as enough to keep asking, and it is a reasonable prompt to run the AUDIT-C and see what your current pattern scores.
            </p>
            <p className={P}>
              <strong>Score 2 to 4.</strong> A positive screen, clinically significant by the published rule. The next step is a real assessment: a conversation with a clinician or a licensed substance use counselor who can separate past from present and judge severity properly. Bring the score; it tells the assessor where to start. If the drinking behind the score is in the past and you are sober now, say so plainly; the assessment will land very differently, and that conversation is still worth having once.
            </p>
            <div className="card p-5 sm:p-6 mt-4">
              <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Places to start:
              </h3>
              <Bullets
                items={[
                  <>Screen your current drinking with the <Link href="/audit-c-alcohol-screen" className={LINK_CLASS}>AUDIT-C</Link> or the <Link href="/audit-alcohol-test" className={LINK_CLASS}>full AUDIT</Link>, free and private.</>,
                  <>Read how the AUDIT works in <Link href="/what-is-the-audit-test" className={LINK_CLASS}>What the AUDIT test is</Link>, including its four zones.</>,
                  <>Read the evidence and licensing notes for this and the site&#x27;s other instruments on the <Link href="/clinical-evidence" className={LINK_CLASS}>clinical evidence</Link> page.</>,
                  <>Browse <Link href="/therapists" className={LINK_CLASS}>therapists</Link> in the MindCheck Tools California directory (listings cover Los Angeles, Monterey, San Benito, and Santa Cruz counties).</>,
                  <>Browse <Link href="/facilities" className={LINK_CLASS}>substance use treatment programs</Link> in the facilities directory.</>,
                  <>Call SAMHSA&#x27;s National Helpline at 1-800-662-4357 for free, confidential referrals anywhere in the U.S.</>,
                ]}
              />
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                These links are the same for everyone who reads this article. Nothing here is matched to your answers, because this page collects none.
              </p>
            </div>
          </section>

          <section>
            <h2 className={H2}>If you are worried about someone else</h2>
            <p className={P}>
              Two of the four CAGE areas are, in effect, about you: the criticism that annoys the drinker is usually coming from the people who live with the drinking, and family complaints are often what brings the pattern into a clinic. You still cannot score the CAGE for them, because the other two areas, guilt and the felt need to cut down, live inside the drinker&#x27;s own head. What you can do is name what you have seen, in specific events rather than verdicts, at a calm moment, and attach it to a concrete offer: an assessment appointment, a call to the SAMHSA helpline together, a ride. SAMHSA&#x27;s National Helpline (1-800-662-4357) takes calls from family members too, and can talk through how to raise it. If the person drinks heavily every day, do not push a sudden stop on your own: withdrawal can be dangerous, and the <Link href="/alcohol-withdrawal-timeline" className={LINK_CLASS}>alcohol withdrawal timeline</Link> explains why a clinician should plan it.
            </p>
          </section>

          <section>
            <h2 className={H2}>Your privacy</h2>
            <p className={P}>
              This page asks you nothing. There is no CAGE questionnaire, form, or score on it. The screenings this site does run, like the AUDIT and AUDIT-C, process answers locally in your browser and are not intentionally sent to MindCheck Tools, and there is no account to create. Ordinary page requests can still create normal hosting records, and anything you copy, print, or leave open on a shared device is outside that protection. Learn more in the <Link href="/privacy" className={LINK_CLASS}>Privacy Policy</Link>.
            </p>
          </section>

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
                  <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">{i === 1 ? FAQ_HISTORY_ANSWER : faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className={H2}>Related reading on MindCheck Tools</h2>
            <Bullets
              items={[
                <><Link href="/what-is-the-audit-test" className={LINK_CLASS}>What the AUDIT test is</Link>, the alcohol screening explained, with the questionnaire this site does run</>,
                <><Link href="/what-is-the-dast-test" className={LINK_CLASS}>What the DAST-10 is</Link>, the drug-side screening instrument, explained the same way</>,
                <><Link href="/cage-aid-substance-abuse-screening" className={LINK_CLASS}>CAGE-AID information</Link>, the combined alcohol-and-drug adaptation, and why this site explains it without administering it</>,
                <><Link href="/signs-of-alcoholism" className={LINK_CLASS}>Signs of alcoholism</Link>, the 11 signs clinicians use, in plain language</>,
                <><Link href="/alcohol-withdrawal-timeline" className={LINK_CLASS}>Alcohol withdrawal timeline</Link>, how long symptoms last, stage by stage</>,
                <><Link href="/clinical-evidence" className={LINK_CLASS}>Clinical evidence</Link>, sources, validation, and licensing notes for the instruments this site documents</>,
              ]}
            />
          </section>

          <section>
            <h2 className={H2}>Sources</h2>
            <ol className="list-decimal pl-6 space-y-2 text-neutral-600 dark:text-neutral-300 leading-relaxed">
              <li>Ewing JA. Detecting alcoholism: The CAGE questionnaire. JAMA. 1984;252(14):1905-1907. <a href="https://pubmed.ncbi.nlm.nih.gov/6471323/" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>https://pubmed.ncbi.nlm.nih.gov/6471323/</a></li>
              <li>Mayfield D, McLeod G, Hall P. The CAGE questionnaire: validation of a new alcoholism screening instrument. American Journal of Psychiatry. 1974;131(10):1121-1123. <a href="https://pubmed.ncbi.nlm.nih.gov/4416585/" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>https://pubmed.ncbi.nlm.nih.gov/4416585/</a></li>
              <li>Dhalla S, Kopec JA. The CAGE questionnaire for alcohol misuse: a review of reliability and validity studies. Clinical and Investigative Medicine. 2007;30(1):E33-E41. <a href="https://pubmed.ncbi.nlm.nih.gov/17716538/" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>https://pubmed.ncbi.nlm.nih.gov/17716538/</a></li>
              <li>Brown RL, Rounds LA. Conjoint screening questionnaires for alcohol and other drug abuse: criterion validity in a primary care practice. Wisconsin Medical Journal. 1995;94(3):135-140. <a href="https://pubmed.ncbi.nlm.nih.gov/7778330/" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>https://pubmed.ncbi.nlm.nih.gov/7778330/</a></li>
              <li>Virginia Department of Behavioral Health and Developmental Services. The CAGE Questionnaire (form document): item responses scored 0 for &quot;no&quot; and 1 for &quot;yes&quot;; a total score of 2 or greater is considered clinically significant; source cited on the form: Ewing, 1984.</li>
              <li>Connecticut Department of Mental Health and Addiction Services. CAGE-AID questionnaire document: the normal cutoff for the CAGE is two positive answers; primary care clinicians are advised to lower the threshold to one positive answer to cover a wider range.</li>
              <li>Aisel scale library. CAGE: Scoring, Cutoffs and Interpretation. Development history entry: the questions were developed by John Ewing at the University of North Carolina, with a first validation study by Mayfield and colleagues in 1974, before Ewing&#x27;s 1984 JAMA description.</li>
              <li>MindCheck Tools instrument evidence and rights register, and the live CAGE-AID information page: the register&#x27;s CAGE-AID row (blocked, reproduction terms unresolved), the absence of a plain CAGE row, and the site&#x27;s information-only posture, verified against the live site 2026-11-25.</li>
            </ol>
          </section>
        </div>

        {/* Footer */}
        <footer className="border-t border-sand-200 dark:border-neutral-700 pt-6 mt-10 text-center">
          <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Reviewer scope</h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-2">
            Written by Jason Ramirez, Certified Alcohol and Drug Counselor Level II (CADC-II). This credential covers substance use counseling. It is not medical, psychiatric, or psychological review. This article is general information about a screening instrument and how its scores are interpreted, not medical advice and not a diagnosis. The CAGE questionnaire remains the work of its author and publisher; this page neither reproduces nor administers it, and the CAGE-AID page on this site states the same boundary for that instrument. Questions about your own drinking and health belong with a medical professional or a licensed counselor who can evaluate you directly. Last reviewed November 25, 2026.
          </p>
          <ToolReviewerBio lastReviewed="November 25, 2026" />
        </footer>
      </div>
    </>
  );
}
