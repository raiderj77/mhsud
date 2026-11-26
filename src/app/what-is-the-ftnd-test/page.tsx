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

import { FTND_RANGES } from "@/lib/ftndScoring.mjs";

const PAGE_URL = `${SITE_URL}/what-is-the-ftnd-test`;

const TITLE = "What Is the FTND Test? The Fagerström Score, Its 0 to 10 Scale, and What Your Dependence Level Means";
const DESCRIPTION =
  "Learn how the six-question Fagerström Test for Nicotine Dependence grades physical dependence on cigarettes, how the score is calculated, and what the five levels mean.";

const LINK_CLASS =
  "underline break-all text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300";

const FAQ_DATA = [
  { question: "What is the FTND?", answer: "The Fagerström Test for Nicotine Dependence is a six-question screener for adults who smoke cigarettes. It grades physical dependence on cigarettes on a scale from 0 to 10." },
  { question: "What is a high FTND score?", answer: "A score of 6 or 7 out of 10 falls in the high dependence range. Scores of 8 to 10 fall in the very high range." },
  { question: "What is \"time to first cigarette\" and why does it matter?", answer: "It is the time between waking up and smoking your first cigarette. It is the strongest single sign of dependence measured by the FTND, with shorter times contributing more points." },
  { question: "Does the FTND work for vaping or other nicotine products?", answer: "The FTND was developed and validated for cigarettes. In 2012, Fagerström renamed it the Test for Cigarette Dependence to make that focus explicit." },
  { question: "Can the FTND diagnose tobacco use disorder?", answer: "The FTND grades physical dependence on cigarettes. A diagnosis of tobacco use disorder requires a broader clinical assessment." },
  { question: "Is the FTND private?", answer: "Your answers and score are processed locally in your browser. You can use the test without signing up." },
];

export const metadata: Metadata = createMetadata({
  path: "/what-is-the-ftnd-test",
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

export default function WhatIsTheFtndTestPage() {
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
              The Fagerström Test for Nicotine Dependence (FTND) uses six questions to grade physical dependence on cigarettes in adults who smoke. The answers add up to a score from <strong>0 to 10</strong> across five dependence levels, from very low to very high.
            </p>
            <Link href="/nicotine-dependence-test" className="btn-primary inline-flex">Take the FTND Nicotine Dependence Test</Link>
          </section>

          <section>
            <h2 className={H2}>What the FTND is</h2>
            <p className={P}>The FTND asks about cigarette use, including how soon you smoke after waking and how many cigarettes you smoke a day. The score can help you start a conversation about quitting support.</p>
            <h3 className="font-serif text-lg font-semibold mb-3">What it is not</h3>
            <Bullets items={[
              <>A diagnosis of tobacco use disorder. A clinician considers a broader set of symptoms and circumstances.</>,
              <>A measure of harm. The score cannot tell you what damage smoking has caused.</>,
              <>A screener for vaping or other nicotine products. The questions and scoring were developed for cigarettes.</>,
              <>A measure of quit readiness. Your score cannot tell you how ready you feel to quit.</>,
            ]} />
          </section>

          <section>
            <h2 className={H2}>Where it came from</h2>
            <p className={P}>Karl Fagerström introduced the Fagerström Tolerance Questionnaire in 1978. In 1991, Heatherton, Kozlowski, Frecker, and Fagerström revised it into the six-item FTND. In 2012, Fagerström renamed it the Fagerström Test for Cigarette Dependence to emphasize its focus on cigarettes.</p>
          </section>

          <section>
            <h2 className={H2}>How scoring works</h2>
            <Bullets items={[
              <>Two items carry up to 3 points each. They ask how soon you smoke after waking and how many cigarettes you smoke per day.</>,
              <>The other four items carry up to 1 point each.</>,
              <>Add the points from all six answers for a total from 0 to 10.</>,
            ]} />
            <h3 className="font-serif text-lg font-semibold mb-3">Worked example</h3>
            <ol className="list-decimal pl-6 space-y-2 mb-4 text-neutral-600 dark:text-neutral-300">
              <li>First cigarette within 5 minutes of waking earns 3 points.</li>
              <li>Difficulty avoiding smoking where it is forbidden earns 1 point.</li>
              <li>The first cigarette in the morning is the hardest to give up, earning 1 point.</li>
              <li>Smoking 11 to 20 cigarettes per day earns 1 point.</li>
              <li>No increase in smoking frequency during the first hours after waking earns 0 points.</li>
              <li>Refraining from smoking when ill in bed most of the day earns 0 points.</li>
            </ol>
            <p className={P}>The total is <strong>3 + 1 + 1 + 1 + 0 + 0 = 6</strong>, which falls in the <strong>High Dependence</strong> range.</p>
          </section>

          <section>
            <h2 className={H2}>FTND scoring table</h2>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm text-left border border-sand-200 dark:border-neutral-700">
                <caption className="sr-only">FTND score ranges and quitting support</caption>
                <thead className="bg-sand-50 dark:bg-night-700 text-neutral-800 dark:text-neutral-100">
                  <tr>
                    <th scope="col" className="p-3">Score</th>
                    <th scope="col" className="p-3">Dependence level</th>
                    <th scope="col" className="p-3">What it usually means for quitting support</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-300">
                  {FTND_RANGES.map(({ min, max, key, level, suggestion }) => (
                    <tr key={key} className="border-t border-sand-200 dark:border-neutral-700">
                      <th scope="row" className="p-3 whitespace-nowrap">{min === max ? min : `${min}–${max}`}</th>
                      <td className="p-3">{level}</td>
                      <td className="p-3">{suggestion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className={H2}>FTND, Fagerström Tolerance Questionnaire, and Heaviness of Smoking Index</h2>
            <div className="overflow-x-auto mb-4" tabIndex={0} role="region" aria-label="Instrument comparison table">
              <table className="w-full text-sm text-left border border-sand-200 dark:border-neutral-700">
                <caption className="sr-only">Comparison of cigarette dependence instruments</caption>
                <thead className="bg-sand-50 dark:bg-night-700">
                  <tr>
                    {["Instrument", "Items", "Max score", "What it keeps or drops", "Best for", "Not for"].map((heading) => (
                      <th key={heading} scope="col" className="p-3">{heading}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-300">
                  {[
                    ["FTND", 6, 10, "Drops the older questionnaire’s nicotine yield and inhalation items and revises scoring.", "Grading physical dependence on cigarettes", "Diagnosing tobacco use disorder"],
                    ["Fagerström Tolerance Questionnaire (FTQ)", 8, 11, "Includes nicotine yield and inhalation items.", "Interpreting records or research that used the original questionnaire", "Interpreting a score using FTND ranges"],
                    ["Heaviness of Smoking Index (HSI)", 2, 6, "Keeps only time to first cigarette and cigarettes per day.", "A brief measure using the two most heavily weighted FTND items", "Capturing the four other behaviors asked about by the FTND"],
                  ].map(([instrument, ...cells]) => (
                    <tr key={instrument} className="border-t border-sand-200 dark:border-neutral-700">
                      <th scope="row" className="p-3">{instrument}</th>
                      {cells.map((cell, index) => <td key={index} className="p-3">{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className={H2}>How to choose a screener</h2>
            <Bullets items={[
              <>Use the FTND to grade physical dependence on cigarettes.</>,
              <>Use the <Link href="/audit-c-alcohol-screen" className={LINK_CLASS}>AUDIT-C</Link> for alcohol screening or the <Link href="/cudit-r-cannabis-screening" className={LINK_CLASS}>CUDIT-R</Link> for cannabis screening.</>,
              <>Talk with a clinician for a fuller picture of your tobacco use, health, and options for quitting.</>,
            ]} />
          </section>

          <section>
            <h2 className={H2}>A low score is not a clean bill of health</h2>
            <p className={P}>The FTND grades physical dependence. Someone who smokes only a few cigarettes a day might still reach for one right after waking. Someone who smokes heavily in social settings might wait much longer for their first cigarette. Both patterns can cause harm because smoking itself is harmful, even when a dependence score is low.</p>
          </section>

          <section>
            <h2 className={H2}>Limits of the FTND</h2>
            <p className={P}>The score depends on your own report, and the broad cigarettes-per-day categories can group different patterns together. The test was built for people who smoke cigarettes. During pregnancy or in different clinical settings, some items may carry different weight in a clinician’s interpretation.</p>
          </section>

          <section>
            <h2 className={H2}>Your privacy</h2>
            <p className={P}>The online test processes your answers and score locally in your browser. Learn more in the <Link href="/privacy" className={LINK_CLASS}>Privacy Policy</Link>.</p>
          </section>

          <section>
            <h2 className={H2}>Frequently asked questions</h2>
            <div className="space-y-6">
              {FAQ_DATA.map(({ question, answer }) => (
                <div key={question}>
                  <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">{question}</h3>
                  <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">{answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className={H2}>Sources</h2>
            <ol className="list-decimal pl-6 space-y-2 text-neutral-600 dark:text-neutral-300 leading-relaxed">
              <li>Fagerström KO (1978). Measuring degree of physical dependence to tobacco smoking with reference to individualization of treatment.</li>
              <li>Heatherton TF, Kozlowski LT, Frecker RC, Fagerström KO (1991). British Journal of Addiction, 86, 1119–1127. <a href="https://pubmed.ncbi.nlm.nih.gov/1932883/" className={LINK_CLASS}>Original FTND study</a>.</li>
              <li>Fagerström K (2012). Determinants of tobacco use and renaming the FTND to the Fagerström Test for Cigarette Dependence.</li>
              <li>U.S. National Library of Medicine. <a href="https://cde.nlm.nih.gov/formView?tinyId=myLzkabPx" className={LINK_CLASS}>NIDA Clinical Trials Network FTND form</a>.</li>
              <li>Centers for Disease Control and Prevention. <a href="https://www.cdc.gov/tobacco/" className={LINK_CLASS}>Smoking and Tobacco Use</a>.</li>
            </ol>
          </section>

          <section>
            <h2 className={H2}>Take the test or explore related tools</h2>
            <Link href="/nicotine-dependence-test" className="btn-primary inline-flex mb-4">Take the FTND Nicotine Dependence Test</Link>
            <Bullets items={[
              <Link key="cudit-r" href="/cudit-r-cannabis-screening" className={LINK_CLASS}>CUDIT-R Cannabis Screen</Link>,
              <Link key="audit-c" href="/audit-c-alcohol-screen" className={LINK_CLASS}>AUDIT-C Alcohol Screen</Link>,
              <Link key="cudit-r-guide" href="/what-is-the-cudit-r-test" className={LINK_CLASS}>What Is the CUDIT-R Test?</Link>,
            ]} />
          </section>
        </div>

        <footer className="border-t border-sand-200 dark:border-neutral-700 pt-6 mt-10 text-center">
          <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Reviewer scope</h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-2">
            Jason Ramirez, CADC-II, covers substance use education and screening interpretation. This guide is for general education. Last reviewed November 26, 2026.
          </p>
          <ToolReviewerBio lastReviewed="November 26, 2026" />
        </footer>
      </div>
    </>
  );
}
