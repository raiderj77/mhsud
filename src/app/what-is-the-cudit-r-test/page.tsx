import type { Metadata } from "next";
import Link from "next/link";
import {
  createMetadata,
  articleJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
  SITE_URL,
} from "@/lib/metadata";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";

const PATH = "/what-is-the-cudit-r-test";
const PAGE_URL = `${SITE_URL}${PATH}`;
const TOOL_PATH = "/cudit-r-cannabis-screening";
const TITLE = "What Is the CUDIT-R Test? Scoring, the 8 and 12 Cut Points, and What a Positive Screen Means";
const DESCRIPTION = "Learn what the CUDIT-R cannabis screen measures, how its eight items are scored, and what the cut points of 8 and 12 mean.";
const LINK_CLASS = "text-sage-700 dark:text-sage-400 underline underline-offset-2";

const FAQ_DATA = [
  { question: "What is the CUDIT-R test?", answer: "The Cannabis Use Disorders Identification Test–Revised (CUDIT-R) is an eight-question screening tool. It asks about cannabis use and related experiences, primarily over the past six months." },
  { question: "What is a positive CUDIT-R score?", answer: "A score of 8 or more meets the hazardous-use screening threshold. A score of 12 or more flags possible cannabis use disorder and suggests a professional assessment." },
  { question: "Can the CUDIT-R diagnose cannabis use disorder?", answer: "No. A score can flag concerns for follow-up, and a qualified clinician can assess whether diagnostic criteria are met." },
  { question: "Who should take the CUDIT-R?", answer: "This version is for adults 18 and older who used cannabis in the past six months. Adolescents should use an age-appropriate screening tool with a qualified professional." },
  { question: "How is the CUDIT-R different from the original CUDIT?", answer: "The 2010 revision reduced the original 10 items to eight. It rebalanced the questions across consumption, problems, dependence, and psychological features." },
  { question: "Is the CUDIT-R private?", answer: "Your screening answers and score are processed locally in your browser and are not intentionally sent to MindCheck Tools. The screening does not require an account." },
];

export const metadata: Metadata = createMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["cudit-r test", "cudit-r scoring", "cudit-r cut points", "cannabis use screening"],
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL, type: "article" },
});

const CELL = "p-3 text-left align-top";
const EXAMPLE = [
  ["1. Use frequency", "2-4 times a month", 2],
  ["2. Hours on a typical use day", "3 or 4", 2],
  ["3. Difficulty stopping once started", "Monthly", 2],
  ["4. Did not meet usual expectations", "Monthly", 2],
  ["5. Time getting, using, or recovering", "Less than monthly", 1],
  ["6. Memory or concentration problems", "Less than monthly", 1],
  ["7. Use in hazardous situations", "Less than monthly", 1],
  ["8. Thoughts of cutting down or stopping", "Yes, but not in the past 6 months", 2],
] as const;

const SCORE_ROWS = [
  ["0–7", "Below the hazardous-use threshold", "Discuss any continuing concerns with a qualified healthcare professional."],
  ["8–11", "Hazardous use range", "Discuss your use and how it affects you with a qualified healthcare professional."],
  ["12–32", "Possible cannabis use disorder range", "Seek an assessment from a qualified healthcare professional."],
] as const;

const COMPARISON_ROWS = [
  ["CUDIT-R", "Cannabis", "8", "Past 6 months, with a lifetime component in the final item", "32", "8+ hazardous use, 12+ possible disorder", "Screening adults who have recently used cannabis", "Diagnosis or measuring impairment"],
  ["CUDIT", "Cannabis", "10", "Mainly the past 6 months", "40", "8+ in the original study", "Interpreting records that used the original version", "Applying the revised tool’s cut points"],
  ["AUDIT", "Alcohol", "10", "Mainly the past 12 months", "40", "8+ for elevated risk in standard WHO scoring", "Screening for alcohol-related risk and consequences", "Screening for cannabis use"],
] as const;

const H2 = "font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4";
const P = "text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3";

export default function WhatIsTheCuditrTestPage() {
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
              datePublished: "2026-11-26",
              dateModified: "2026-11-26",
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
            By Jason Ramirez, CADC-II. Published: November 26, 2026. Updated: November 26, 2026.
          </p>
        </header>

        <div className="prose-mh space-y-10">
          <section>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
              The Cannabis Use Disorders Identification Test–Revised (CUDIT-R) is an eight-question screen about cannabis use and related experiences, primarily over the past six months. Scores range from 0 to 32. A score of <strong>8 or more</strong> flags hazardous use, and <strong>12 or more</strong> flags possible cannabis use disorder. A positive screen can guide a conversation with a qualified healthcare professional.
            </p>
            <Link href={TOOL_PATH} className="btn-primary inline-flex items-center min-h-[44px] px-5 py-2">Take the free CUDIT-R screen</Link>
          </section>

          <section>
            <h2 className={H2}>What the CUDIT-R is</h2>
            <p className={P}>The CUDIT-R helps identify patterns of cannabis use and related problems that may warrant follow-up. This version is for adults 18 and older who have used cannabis in the past six months.</p>
            <h3 className="font-serif text-lg font-semibold mb-2">What it is not</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>A diagnosis of cannabis use disorder</li>
              <li>A drug test that detects cannabis or its metabolites</li>
              <li>A screening tool for adolescents on MindCheck Tools</li>
              <li>A measure of current impairment or fitness to drive</li>
            </ul>
          </section>

          <section>
            <h2 className={H2}>Where it came from</h2>
            <p className={P}>Simon Adamson and Douglas Sellman published the original 10-item CUDIT in 2003, modeling it on the World Health Organization’s AUDIT for alcohol. In 2010, Adamson and colleagues analyzed how individual items performed and developed the eight-item CUDIT-R. The revised tool covers consumption, problems, dependence, and psychological features.</p>
          </section>

          <section>
            <h2 className={H2}>How scoring works</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Items 1 through 7 each score from 0 through 4.</li>
              <li>Item 8 scores 0, 2, or 4, depending on whether and when the person considered cutting down or stopping.</li>
              <li>Add the eight values for a total from 0 to 32.</li>
            </ul>
            <p className={P}>In this fictional example, an adult answers yes to the initial question about cannabis use in the past six months. That answer determines whether the questionnaire applies and adds zero points.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <caption className="text-left font-semibold pb-2">Worked example with a CUDIT-R score of 13</caption>
                <thead>
                  <tr>{["Item", "Example answer", "Points"].map((heading) => <th key={heading} scope="col" className={CELL}>{heading}</th>)}</tr>
                </thead>
                <tbody className="divide-y divide-sand-200 dark:divide-neutral-700">
                  {EXAMPLE.map(([item, answer, points]) => (
                    <tr key={item}>
                      <th scope="row" className={CELL}>{item}</th>
                      <td className={CELL}>{answer}</td>
                      <td className={CELL}>{points}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot><tr><th scope="row" colSpan={2} className={CELL}>Total</th><td className={CELL}>13</td></tr></tfoot>
              </table>
            </div>
            <p className={P}>The sum is 2 + 2 + 2 + 2 + 1 + 1 + 1 + 2 = 13. It falls in the possible cannabis use disorder range, where a professional assessment is appropriate.</p>
          </section>

          <section>
            <h2 className={H2}>CUDIT-R scoring table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr>{["Score range", "What it indicates", "Suggested next step"].map((heading) => <th key={heading} scope="col" className={CELL}>{heading}</th>)}</tr>
                </thead>
                <tbody className="divide-y divide-sand-200 dark:divide-neutral-700">
                  {SCORE_ROWS.map(([score, meaning, nextStep]) => (
                    <tr key={score}>
                      <th scope="row" className={CELL}>{score}</th>
                      <td className={CELL}>{meaning}</td>
                      <td className={CELL}>{nextStep}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 id="instrument-comparison" className={H2}>CUDIT-R vs CUDIT vs AUDIT</h2>
            <div className="overflow-x-auto" role="region" aria-labelledby="instrument-comparison" tabIndex={0}>
              <table className="w-full min-w-[44rem] text-sm">
                <thead>
                  <tr>{["Instrument", "Substance", "Items", "Time frame", "Max score", "Published cut points", "Best for", "Not for"].map((heading) => <th key={heading} scope="col" className={CELL}>{heading}</th>)}</tr>
                </thead>
                <tbody className="divide-y divide-sand-200 dark:divide-neutral-700">
                  {COMPARISON_ROWS.map(([name, ...cells]) => (
                    <tr key={name}>
                      <th scope="row" className={CELL}>{name}</th>
                      {cells.map((value, index) => <td key={index} className={CELL}>{value}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className={H2}>How to choose a screen</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><Link href={TOOL_PATH} className={LINK_CLASS}>CUDIT-R</Link> covers cannabis use and related problems.</li>
              <li><Link href="/audit-c-alcohol-screen" className={LINK_CLASS}>AUDIT-C</Link> is a quick alcohol consumption screen.</li>
              <li><Link href="/audit-alcohol-test" className={LINK_CLASS}>Full AUDIT</Link> covers alcohol consumption, consequences, and signs of dependence in more detail.</li>
              <li><Link href="/who-assist-substance-screening" className={LINK_CLASS}>WHO ASSIST information</Link> explains a multi-substance instrument.</li>
            </ul>
          </section>

          <section>
            <h2 className={H2}>A score of 12 is not a diagnosis</h2>
            <p className={P}>Adamson and colleagues studied 144 clinical-trial patients and compared CUDIT-R results with a structured clinical interview (SCID). At the cut point of 12, the original validation reported 91% sensitivity and 90% specificity for current cannabis use disorder. In that sample, the screen flagged about 91% of people who met the interview criteria and scored below the cut point for about 90% of people who did not.</p>
            <p className={P}>Those figures describe how the screen performed in that sample. They do not give your personal probability of having cannabis use disorder, and accuracy can differ across settings and populations. A qualified clinician diagnoses cannabis use disorder after evaluating symptoms, history, and their impact.</p>
          </section>

          <section>
            <h2 className={H2}>Limits of the CUDIT-R</h2>
            <p className={P}>The screen relies on self-report and recall. Most items focus on recent use. The final item asks whether the person has ever thought about cutting down or stopping, with different points for recent and earlier thoughts.</p>
            <p className={P}>The CUDIT and CUDIT-R were first developed and evaluated in New Zealand clinical samples. Later studies examined the CUDIT-R in community samples. Screening performance can vary across populations, and a score below 8 cannot rule out a concern.</p>
          </section>

          <section>
            <h2 className={H2}>Frequently asked questions</h2>
            <p className={P}><Link href={TOOL_PATH} className={LINK_CLASS}>Take the free CUDIT-R cannabis screen</Link> if you have used cannabis in the past six months.</p>
            <div className="space-y-6">
              {FAQ_DATA.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">{faq.question}</h3>
                  <p className={P}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className={H2}>Sources</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Adamson SJ and Sellman JD (2003). A prototype screening instrument for cannabis use disorder. <a href="https://doi.org/10.1080/0959523031000154440" className={LINK_CLASS}>Original CUDIT study</a></li>
              <li>Adamson SJ et al. (2010). Drug and Alcohol Dependence 110(1–2), 137–143. <a href="https://pubmed.ncbi.nlm.nih.gov/20347232/" className={LINK_CLASS}>CUDIT-R validation study</a></li>
              <li>PhenX Toolkit, protocol 510310. <a href="https://www.phenxtoolkit.org/protocols/view/510310" className={LINK_CLASS}>CUDIT-R protocol</a></li>
              <li>Schultz NR, Bassett DT, Messina BG, Correia CJ (2019). Evaluation of the psychometric properties of the CUDIT-R among college students. Addictive Behaviors 95, 11–15. <a href="https://www.phenxtoolkit.org/protocols/view/510310" className={LINK_CLASS}>Listed in the PhenX protocol references</a></li>
              <li>World Health Organization. <a href="https://www.who.int/publications/i/item/WHO-MSD-MSB-01.6a" className={LINK_CLASS}>AUDIT guidelines for use in primary care</a></li>
            </ol>
          </section>

          <section>
            <h2 className={H2}>Take the CUDIT-R or explore related guides</h2>
            <Link href={TOOL_PATH} className="btn-primary inline-flex items-center min-h-[44px] px-5 py-2 mb-4">Start the free CUDIT-R screen</Link>
            <ul className="list-disc pl-6 space-y-2">
              <li><Link href="/audit-alcohol-test" className={LINK_CLASS}>Full AUDIT alcohol screen</Link></li>
              <li><Link href="/what-is-the-dast-test" className={LINK_CLASS}>DAST-10 guide</Link></li>
              <li><Link href="/who-assist-substance-screening" className={LINK_CLASS}>WHO ASSIST information</Link></li>
            </ul>
          </section>
        </div>

        <footer className="border-t border-sand-200 dark:border-neutral-700 pt-6 mt-10 text-center">
          <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Reviewer scope</h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-2">
            Jason Ramirez’s CADC-II credential covers substance use counseling. This guide provides general education about cannabis screening. It does not provide medical advice or a diagnosis.
          </p>
          <ToolReviewerBio lastReviewed="November 26, 2026" />
        </footer>
      </div>
    </>
  );
}
