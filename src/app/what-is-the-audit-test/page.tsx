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

const PAGE_URL = `${SITE_URL}/what-is-the-audit-test`;

const TITLE = "The AUDIT Alcohol Screening, Explained";
const DESCRIPTION =
  "What the AUDIT alcohol screening is, what its 10 questions cover, how the 0 to 40 score and the four WHO zones work, and what to do next. Free, private, no account.";

const LINK_CLASS =
  "underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300";

const FAQ_DATA = [
  {
    question: "Is the AUDIT a diagnosis?",
    answer:
      "No. The AUDIT is a screening that points to a general zone of risk. Only a qualified professional can diagnose an alcohol use disorder, through a full evaluation.",
  },
  {
    question: "Is the AUDIT free?",
    answer:
      "Yes, the AUDIT screening on MindCheck Tools is free and does not require an account. It takes about 3 minutes.",
  },
  {
    question: "Who made the AUDIT?",
    answer:
      "The AUDIT was developed through a World Health Organization collaborative project, first published by Saunders and colleagues in 1993. The WHO publishes a manual on how to use it.",
  },
  {
    question: "What if I am worried about someone else?",
    answer:
      "You can share the screening or this article and let them choose whether to take it. Choose a calm, private moment and speak from care rather than blame. SAMHSA's National Helpline at 1-800-662-4357 offers free, confidential treatment referrals and information.",
  },
];

const ZONES = [
  { zone: "Zone I", range: "0 to 7", suggests: "Lower risk", support: "Alcohol education" },
  {
    zone: "Zone II",
    range: "8 to 15",
    suggests: "Hazardous use: a pattern research links with increased risk of harm",
    support: "Simple advice",
  },
  {
    zone: "Zone III",
    range: "16 to 19",
    suggests: "Harmful use: a pattern research links with likely harm",
    support: "Simple advice, brief counseling, and continued monitoring",
  },
  { zone: "Zone IV", range: "20 to 40", suggests: "Possible dependence", support: "A full professional evaluation" },
];

export const metadata: Metadata = createMetadata({
  path: "/what-is-the-audit-test",
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

export default function WhatIsTheAuditTestPage() {
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
              datePublished: "2026-11-22",
              dateModified: "2026-11-22",
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
            By Jason Ramirez, CADC-II. Published: November 22, 2026. Updated: November 22, 2026.
          </p>
        </header>

        <div className="prose-mh space-y-10">
          {/* Answer first */}
          <section>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
              The AUDIT is a 10-question alcohol screening developed through a World Health Organization (WHO) project. It asks about how much and how often you drink, possible signs of dependence, and problems alcohol may be causing. Answers add up to a score from 0 to 40. The AUDIT is a screening, not a diagnosis: a score can suggest it may help to talk with a professional, but it cannot tell you whether you have an alcohol use disorder.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              If you want to try it, you can take the{" "}
              <Link href="/audit-alcohol-test" className={LINK_CLASS}>free AUDIT screening on MindCheck Tools</Link>. It takes about 3 minutes and does not require an account.
            </p>
          </section>

          <section>
            <h2 className={H2}>What &quot;AUDIT&quot; means</h2>
            <p className={P}>
              AUDIT stands for Alcohol Use Disorders Identification Test. It was developed through a WHO collaborative project on early detection of harmful alcohol use (Saunders and colleagues, 1993). The WHO publishes a manual explaining how the AUDIT is used, mainly in primary care.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              A screening is a short, standard set of questions that helps sort out who might benefit from a closer look. It is the first step in a conversation, not the last word.
            </p>
          </section>

          <section>
            <h2 className={H2}>What the 10 questions cover</h2>
            <p className={P}>The questions ask about the past year. They fall into three areas:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
              <li>
                <strong>Consumption (questions 1 to 3).</strong> How often you drink, how much you usually drink on a typical day, and how often you have a larger amount at one time.
              </li>
              <li>
                <strong>Possible signs of dependence (questions 4 to 6).</strong> Things like finding it hard to stop once you start, or needing a drink to get going in the morning.
              </li>
              <li>
                <strong>Harm from drinking (questions 7 to 10).</strong> Things like guilt after drinking, trouble remembering what happened, injuries, and whether someone close to you, or a health care worker, has been concerned.
              </li>
            </ol>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              This article describes the topics only. The exact WHO wording, answer choices, and scoring are kept in the screening itself so they stay faithful to the published version.
            </p>
          </section>

          <section>
            <h2 className={H2}>How AUDIT scoring works, in general terms</h2>
            <p className={P}>
              Each answer is worth 0 to 4 points, and the 10 answers add up to a total between 0 and 40. The WHO groups totals into four zones. These zones describe patterns seen in research across many people. They do not describe you as a person, and they are not diagnoses.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm text-left border border-sand-200 dark:border-neutral-700">
                <caption className="sr-only">AUDIT score zones from the WHO manual</caption>
                <thead className="bg-sand-50 dark:bg-night-700 text-neutral-800 dark:text-neutral-100">
                  <tr>
                    <th scope="col" className="p-3 font-semibold">Zone</th>
                    <th scope="col" className="p-3 font-semibold">Score range</th>
                    <th scope="col" className="p-3 font-semibold">What the zone suggests</th>
                    <th scope="col" className="p-3 font-semibold">Type of support the WHO manual pairs with it</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-300">
                  {ZONES.map((z) => (
                    <tr key={z.zone} className="border-t border-sand-200 dark:border-neutral-700">
                      <th scope="row" className="p-3 font-semibold text-neutral-800 dark:text-neutral-100">{z.zone}</th>
                      <td className="p-3">{z.range}</td>
                      <td className="p-3">{z.suggests}</td>
                      <td className="p-3">{z.support}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={P}>
              One more detail: the WHO manual also looks at certain single answers, such as signs of dependence or an alcohol-related injury. Those answers can point toward the next level of support even when the total is lower. The MindCheck Tools screening reflects this. It does not change your total score, and it is not a diagnosis.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              A zone is best read as a suggestion about what kind of conversation might help, and how soon. It is never a label.
            </p>
          </section>

          <section>
            <h2 className={H2}>A worked example (made-up answers)</h2>
            <p className={P}>
              So the zones are easier to picture, here is a made-up set of answers, scored the same way the screening scores them. This is an example, not a real person&apos;s result.
            </p>
            <div className="card p-4 bg-sand-50 dark:bg-night-700 mb-3">
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Imagine someone who drinks two to four times a month (2 points), usually has three or four drinks on a drinking day (1 point), and has six or more drinks on one occasion less than monthly (1 point). They have found it hard to stop once started, less than monthly (1 point), and felt guilt after drinking less than monthly (1 point). The remaining answers score 0, except one: someone was injured because of their drinking, though not in the last year (2 points). The total is 8, which lands in Zone II, hazardous use, where the WHO pairs the result with simple advice.
              </p>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Notice the injury answer. It is the kind of single answer the WHO manual says is worth a conversation even when a total is lower.
            </p>
          </section>

          <section>
            <h2 className={H2}>What a screening can and cannot do</h2>
            <p className={P}><strong>A screening can:</strong></p>
            <Bullets
              items={[
                "give you a structured way to look honestly at your drinking over the past year",
                "show whether your answers fall in a range where talking with a professional is commonly suggested",
                "give you something concrete to bring to a doctor, counselor, or treatment program",
              ]}
            />
            <p className={P}><strong>A screening cannot:</strong></p>
            <Bullets
              items={[
                "diagnose an alcohol use disorder or rule one out",
                "tell you whether you need treatment or what kind",
                "account for your health history, medications, family history, or life situation",
                "prove that your drinking is safe",
              ]}
            />
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Only a qualified professional, through a full evaluation, can diagnose an alcohol use disorder.
            </p>
          </section>

          <section>
            <h2 className={H2}>Who the AUDIT is best for, and who it is not for</h2>
            <p className={P}><strong>Best for:</strong></p>
            <Bullets
              items={[
                "adults who want a private, structured look at their drinking",
                "people getting ready for a conversation with a doctor or counselor",
                "people who want to understand a screening a clinic has already given them",
              ]}
            />
            <p className={P}><strong>Not for:</strong></p>
            <Bullets
              items={[
                "anyone in crisis or immediate danger. Please use the help section below instead.",
                "deciding on a diagnosis or a treatment plan by yourself",
                "children and teens. The MindCheck Tools version is meant for adults.",
                "screening for drugs other than alcohol. The AUDIT asks only about alcohol.",
              ]}
            />
          </section>

          <section>
            <h2 className={H2}>&quot;I don&apos;t drink that much. Why would I take this?&quot;</h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              That is a fair question, and a common one. Many people take the AUDIT and land in the lower-risk zone, and that is useful to know too. The point is not to catch anyone out. It is a few minutes of honest reflection with no account, no label, and no one watching. If your answers do land in a higher zone, you have learned something early, while there are more choices about what to do next.
            </p>
          </section>

          <section>
            <h2 className={H2}>What to do next, zone by zone</h2>
            <p className={P}>
              Whatever your zone, it is always okay to talk with a professional if you have concerns about your drinking.
            </p>
            <p className={P}>
              <strong>Zone I (lower risk).</strong> Keep being mindful of your drinking, especially during stressful times or big life changes. If your pattern changes, you can check in again.
            </p>
            <p className={P}>
              <strong>Zone II (hazardous use).</strong> Consider practical steps to lower your risk, and consider talking with a healthcare professional about your pattern. Many people find even one conversation helpful.
            </p>
            <p className={P}>
              <strong>Zone III (harmful use).</strong> Talking with a healthcare professional or a licensed substance use counselor is encouraged. They can look at your whole situation and help plan follow-up.
            </p>
            <p className={P}>
              <strong>Zone IV (possible dependence).</strong> Please consider arranging a professional evaluation soon. If you drink heavily and want to cut down or stop, do not stop suddenly without medical guidance. Alcohol withdrawal can be medically serious.
            </p>
            <div className="card p-5 sm:p-6 mt-4">
              <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Places to start:
              </h3>
              <Bullets
                items={[
                  <>Take or retake the <Link href="/audit-alcohol-test" className={LINK_CLASS}>AUDIT screening</Link>.</>,
                  <>Browse <Link href="/facilities" className={LINK_CLASS}>substance use treatment programs</Link> in the MindCheck Tools directory.</>,
                  <>Browse <Link href="/therapists" className={LINK_CLASS}>therapists</Link>. Therapist listings currently cover the Los Angeles area.</>,
                  <>Call SAMHSA&apos;s National Helpline at 1-800-662-4357 for free, confidential referrals.</>,
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
              You cannot take a screening for another person, but you can share this article or the screening link and let them decide. Choose a calm, private moment, speak from care rather than blame, and listen more than you talk. SAMHSA&apos;s National Helpline (1-800-662-4357) is a free, confidential treatment referral and information line you can call too.
            </p>
          </section>

          <section>
            <h2 className={H2}>Your privacy</h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              On MindCheck Tools, your AUDIT answers and score are processed locally in your browser and are not intentionally sent to MindCheck Tools. There is no account to create. Ordinary page requests can still create normal hosting records, and anything you copy, print, or leave open on a shared device is outside that protection. Learn more in the{" "}
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
                <><Link href="/audit-score-interpretation" className={LINK_CLASS}>AUDIT score interpretation</Link></>,
                <><Link href="/alcohol-withdrawal-timeline" className={LINK_CLASS}>Alcohol withdrawal timeline</Link>, how long symptoms last, stage by stage</>,
                <><Link href="/audit-vs-audit-c" className={LINK_CLASS}>AUDIT vs AUDIT-C</Link>, a comparison of the full 10-question screening and the 3-question version</>,
                <><Link href="/clinical-evidence#audit" className={LINK_CLASS}>AUDIT clinical evidence</Link></>,
                <><Link href="/cage-aid-substance-abuse-screening" className={LINK_CLASS}>CAGE-AID information</Link>, a different tool that covers alcohol and other drugs</>,
              ]}
            />
          </section>

          {/* Sources */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Sources</h2>
            <Bullets
              items={[
                <>
                  Saunders JB, Aasland OG, Babor TF, de la Fuente JR, Grant M. Development of the Alcohol Use Disorders Identification Test (AUDIT): WHO collaborative project on early detection of persons with harmful alcohol consumption. <em>Addiction.</em> 1993;88(6):791-804.{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/8329970/" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>https://pubmed.ncbi.nlm.nih.gov/8329970/</a>
                </>,
                <>
                  World Health Organization. AUDIT: The Alcohol Use Disorders Identification Test, Guidelines for Use in Primary Care.{" "}
                  <a href="https://www.who.int/publications/i/item/WHO-MSD-MSB-01.6a" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>https://www.who.int/publications/i/item/WHO-MSD-MSB-01.6a</a>
                </>,
              ]}
            />
          </section>
        </div>

        {/* Footer */}
        <footer className="border-t border-sand-200 dark:border-neutral-700 pt-6 mt-10 text-center">
          <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Reviewer scope</h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-2">
            Written by Jason Ramirez, Certified Alcohol and Drug Counselor Level II (CADC-II). This credential covers substance use counseling. It is not medical, psychiatric, or psychological review. Withdrawal and other medical questions belong with a medical professional. Last reviewed November 22, 2026.
          </p>
          <ToolReviewerBio lastReviewed="November 22, 2026" />
        </footer>
      </div>
    </>
  );
}
