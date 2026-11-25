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

const PAGE_URL = `${SITE_URL}/signs-of-alcoholism`;

const TITLE = "Signs of Alcoholism: The Full Checklist, Including High-Functioning Signs";
const DESCRIPTION =
  "The signs of alcoholism are the 11 signs clinicians use for alcohol use disorder, in plain language: how to count them, the high-functioning signs that hide behind a normal life, and a free, private screening.";

const LINK_CLASS =
  "underline break-all text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300";

const FAQ_DATA = [
  {
    question: "What are the first signs of alcoholism?",
    answer:
      "The signs people usually notice first are drinking more or longer than intended, rules about drinking that keep breaking, and needing more alcohol to feel the same effect. Those are criteria 1, 2, and 10, and they tend to show up before the visible consequences do.",
  },
  {
    question: "Can you have alcohol use disorder and still keep your job?",
    answer:
      "Yes. In NIAAA's national subtype research, about 1 in 5 people with alcohol dependence fit the \"functional\" subtype: typically middle-aged, well-educated, with stable jobs and families. The 11 criteria ask about control, craving, consequences, and physical adaptation, not employment, so a working life and a real diagnosis often coexist.",
  },
  {
    question: "How many signs do you need for it to be alcohol use disorder?",
    answer:
      "Clinicians use 2 or more of the 11 DSM-5-TR criteria within a 12-month period: 2 to 3 is mild, 4 to 5 is moderate, 6 or more is severe. Counting signs at home is a recognition step that tells you whether to screen and talk to a professional; the diagnosis itself is a clinician's call.",
  },
];

const SIGNS = [
  {
    sign: "Drinking more than intended",
    looks: "\"One drink\" becomes three or four",
    criterion: "1. Larger amounts or longer than intended",
  },
  {
    sign: "Broken drinking rules",
    looks: "Dry January ends on the 9th; \"weekends only\" gains a Thursday",
    criterion: "2. Unsuccessful efforts to cut down",
  },
  {
    sign: "Time spent on alcohol",
    looks: "Evenings planned around drinking; mornings written off",
    criterion: "3. A great deal of time obtaining, using, or recovering",
  },
  {
    sign: "Craving",
    looks: "Clock-watching until the first drink",
    criterion: "4. Craving, a strong desire or urge to drink",
  },
  {
    sign: "Slipping responsibilities",
    looks: "Late work, missed deadlines, chores quietly dropped",
    criterion: "5. Failure to fulfill major role obligations",
  },
  {
    sign: "Drinking through conflict",
    looks: "Family have raised it more than once; nothing changes",
    criterion: "6. Continued use despite interpersonal problems",
  },
  {
    sign: "Shrinking life",
    looks: "Hobbies, exercise, and non-drinking friends fade out",
    criterion: "7. Important activities given up or reduced",
  },
  {
    sign: "Risky drinking",
    looks: "Driving home after \"a few\"; drinking before swimming",
    criterion: "8. Recurrent use in hazardous situations",
  },
  {
    sign: "Drinking through harm",
    looks: "Continuing after a liver warning or a blackout",
    criterion: "9. Continued use despite a physical or psychological problem",
  },
  {
    sign: "Tolerance",
    looks: "Four drinks to feel what two used to do",
    criterion: "10. Tolerance: needing more, or getting less effect",
  },
  {
    sign: "Withdrawal",
    looks: "Morning shakes or nausea that a drink fixes",
    criterion: "11. Withdrawal, or drinking to relieve or avoid it",
  },
];

const SEVERITY = [
  {
    criteria: "0 to 1",
    severity: "No AUD diagnosis",
    means:
      "The line is not crossed. Heavy drinking can still harm your health, and one sign is worth watching.",
  },
  {
    criteria: "2 to 3",
    severity: "Mild AUD",
    means: "A real diagnosis, not a technicality. This is the stage where change is easiest.",
  },
  {
    criteria: "4 to 5",
    severity: "Moderate AUD",
    means:
      "The pattern is established. Willpower-only attempts have usually failed by now, which is information, not shame.",
  },
  {
    criteria: "6 or more",
    severity: "Severe AUD",
    means:
      "Drinking runs a large part of daily life. Professional help is strongly indicated, and stopping suddenly can be dangerous.",
  },
];

export const metadata: Metadata = createMetadata({
  path: "/signs-of-alcoholism",
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

export default function SignsOfAlcoholismPage() {
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
              The signs of alcoholism are not a mystery list. They are the 11 criteria clinicians use to diagnose alcohol use disorder, and every one is recognizable in ordinary life: drinking more than you meant to, setting rules about drinking and breaking them, needing more alcohol to feel the same effect, craving a drink, letting drinking crowd out work, family, and activities you used to care about, and feeling sick when the alcohol wears off. If 2 or more of the 11 have been true for you in the past 12 months, you are in the range where a clinician would look seriously at alcohol use disorder: 2 to 3 criteria is mild, 4 to 5 is moderate, 6 or more is severe.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Reading a checklist is a start, but a checklist cannot score you. MindCheck Tools runs the screening clinics use, the{" "}
              <Link href="/audit-alcohol-test" className={LINK_CLASS}>AUDIT</Link>{" "}
              (10 questions, about 3 minutes), and the shorter{" "}
              <Link href="/audit-c-alcohol-screen" className={LINK_CLASS}>AUDIT-C</Link>{" "}
              (3 questions, about a minute). Both are free, both run privately in your browser, and neither requires an account. Take one now, then come back and read your signs against your score.
            </p>
          </section>

          <section>
            <h2 className={H2}>What alcohol use disorder is, and what it is not</h2>
            <p className={P}>
              Alcohol use disorder (AUD) is the medical condition behind the everyday words &quot;alcoholism,&quot; &quot;alcohol addiction,&quot; and &quot;alcohol dependence.&quot; The National Institute on Alcohol Abuse and Alcoholism (NIAAA) defines it as an impaired ability to stop or control alcohol use despite adverse social, occupational, or health consequences. Clinicians diagnose it with the DSM-5-TR criteria: a problematic pattern of drinking, shown by at least 2 of 11 signs within a 12-month period.
            </p>
            <p className={P}>
              AUD is not a drinking amount. No number of drinks per week makes the diagnosis by itself, which is why two people drinking the same amount can land in different places: what matters is the pattern of control, craving, consequences, and physical adaptation around the drinking. AUD is also not a character verdict. NIAAA notes that the older words, including &quot;alcoholism,&quot; can add stigma, while the diagnostic term describes a treatable medical condition. And AUD is not always visible. It can be mild, and it can sit inside a life that still looks intact from the outside. The high-functioning section below covers that pattern directly.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              For scale: in a 2023 national survey, about 1 in 7 men and 1 in 11 women in the United States met the criteria for AUD in the past year, and the condition mostly goes unrecognized by the people who have it.
            </p>
          </section>

          <section>
            <h2 className={H2}>The 11 signs, in plain language</h2>
            <p className={P}>
              These are the DSM-5-TR criteria as published by NIAAA, rewritten the way they show up in a week. Read them against the past 12 months, and be strict about &quot;has this happened more than once.&quot;
            </p>
            <ol className="list-decimal pl-6 space-y-2 mb-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
              <li>
                <strong>You drink more, or longer, than you meant to.</strong> Two drinks become the bottle; one after work becomes closing time.
              </li>
              <li>
                <strong>You want to cut down or stop, and you cannot manage it.</strong> The rules you set (only weekends, only beer, never before 5, a dry month) keep quietly expiring.
              </li>
              <li>
                <strong>Drinking, getting alcohol, and recovering take up a lot of your time.</strong> Evenings are organized around it, mornings lost to hangovers.
              </li>
              <li>
                <strong>You crave alcohol.</strong> A strong urge that crowds out other thoughts, often at the same time each day or the moment a stressful thing happens.
              </li>
              <li>
                <strong>Drinking gets in the way of responsibilities.</strong> Missed or sloppy work, calling out, slipping bills and chores, kids&apos; events missed or attended while drinking.
              </li>
              <li>
                <strong>You keep drinking even though it is causing trouble with family or friends.</strong> The arguments have happened, people have said something, and the drinking continues.
              </li>
              <li>
                <strong>You give up things that mattered to you so you can drink.</strong> Hobbies, sports, mornings, friends who do not drink get cut back or dropped.
              </li>
              <li>
                <strong>You drink in situations where it is physically dangerous.</strong> Driving, swimming, using machinery or tools, mixing alcohol with sedating medication.
              </li>
              <li>
                <strong>You keep drinking even though it is making a health problem worse.</strong> Blood pressure, liver numbers, anxiety, depression, blackouts. The dots have been connected, and the drinking continues.
              </li>
              <li>
                <strong>You need more alcohol to get the same effect.</strong> Your usual amount does less than it used to. &quot;Holding your liquor&quot; is this sign wearing a compliment.
              </li>
              <li>
                <strong>You feel withdrawal when the alcohol wears off.</strong> Shakiness, sweating, nausea, anxiety, or trouble sleeping in the morning or after a gap, or drinking to make those feelings stop. This sign has its own safety rules, covered in the{" "}
                <Link href="/alcohol-withdrawal-timeline" className={LINK_CLASS}>alcohol withdrawal timeline</Link>.
              </li>
            </ol>
          </section>

          <section>
            <h2 className={H2}>The signs table: what each sign looks like day to day</h2>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm text-left border border-sand-200 dark:border-neutral-700">
                <caption className="sr-only">Signs of alcoholism mapped to the DSM-5-TR criteria for alcohol use disorder</caption>
                <thead className="bg-sand-50 dark:bg-night-700 text-neutral-800 dark:text-neutral-100">
                  <tr>
                    <th scope="col" className="p-3 font-semibold">Sign</th>
                    <th scope="col" className="p-3 font-semibold">What it looks like day to day</th>
                    <th scope="col" className="p-3 font-semibold">DSM-5-TR criterion</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-300">
                  {SIGNS.map((s) => (
                    <tr key={s.sign} className="border-t border-sand-200 dark:border-neutral-700">
                      <th scope="row" className="p-3 font-semibold text-neutral-800 dark:text-neutral-100">{s.sign}</th>
                      <td className="p-3">{s.looks}</td>
                      <td className="p-3">{s.criterion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className={H2}>How to count: the severity bands</h2>
            <p className={P}>
              Clinicians count how many of the 11 criteria are met in the same 12-month period:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm text-left border border-sand-200 dark:border-neutral-700">
                <caption className="sr-only">Alcohol use disorder severity by number of criteria met in the past 12 months</caption>
                <thead className="bg-sand-50 dark:bg-night-700 text-neutral-800 dark:text-neutral-100">
                  <tr>
                    <th scope="col" className="p-3 font-semibold">Criteria met in 12 months</th>
                    <th scope="col" className="p-3 font-semibold">Severity</th>
                    <th scope="col" className="p-3 font-semibold">What it means in practice</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-300">
                  {SEVERITY.map((row) => (
                    <tr key={row.criteria} className="border-t border-sand-200 dark:border-neutral-700">
                      <th scope="row" className="p-3 font-semibold text-neutral-800 dark:text-neutral-100">{row.criteria}</th>
                      <td className="p-3">{row.severity}</td>
                      <td className="p-3">{row.means}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Two honest limits on counting at home. First, score the way a clinician would: a pattern over 12 months, not one bad weekend. Second, your count is a recognition tool, not a diagnosis. Only a clinician who can ask follow-up questions can diagnose AUD. A home count tells you whether the conversation is worth having; at 2 or more, it is. Below the line is not the same as no risk, either: NIAAA defines heavy drinking as 4 or more drinks on any day or 8 or more per week for women, and 5 or more on any day or 15 or more per week for men.
            </p>
          </section>

          <section>
            <h2 className={H2}>High-functioning alcoholism: the signs that hide</h2>
            <p className={P}>
              &quot;High-functioning alcoholic&quot; is not a diagnosis. It is a description of a pattern: the criteria above are being met while the job, the family, the mortgage, and the public image stay intact.
            </p>
            <p className={P}>
              Researchers have measured this group. In NIAAA&apos;s national survey research (Moss, Chen, and Yi, 2007, analyzing the NESARC survey), people with alcohol dependence sorted into five subtypes. The &quot;functional&quot; subtype was 19.5 percent of the total, roughly 1 in 5: typically middle-aged, well-educated, with stable jobs and families. About a third had a multigenerational family history of alcohol problems, and about a quarter had experienced major depression at some point.
            </p>
            <p className={P}>Why the signs hide in this pattern:</p>
            <Bullets
              items={[
                <><strong>Drinking is scheduled around obligations, not instead of them.</strong> Only after work, only at home, never before the kids are down. The structure looks like control, until the schedule starts being defended like it is the point.</>,
                <><strong>Tolerance reads as a strength.</strong> &quot;Holding your liquor&quot; is criterion 10 with good PR. Needing five drinks to feel two drinks&apos; worth of effect is adaptation, not constitution.</>,
                <><strong>Money and other people absorb the consequences.</strong> No missed payments, no DUI because there is a ride service, a partner calls in the excuse, friends learn not to mention it. The costs land in quieter places: sleep, mood, blood pressure, presence.</>,
                <><strong>Success in one area is used as proof about all areas.</strong> The promotion becomes the argument that the drinking cannot be a problem. The criteria contain no such exemption.</>,
              ]}
            />
            <p className={P}>
              What still shows, in the private data: drinking rules that keep getting renegotiated. Drinking alone, or before the event where drinking will happen. Real distress when drinking is interrupted. A drink required to sleep, to socialize, to get through the evening. Morning symptoms (shaky, sweaty, anxious, nauseated) that lift after the first drink. Hiding bottles, understating amounts, keeping a separate count no one else sees. None of these require a lost job or an arrest. Most are criteria 1, 2, 4, 10, and 11, happening offstage.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              The objection, handled plainly: &quot;I cannot have a drinking problem. I still have my job, my family, my house.&quot; The 11 criteria ask nothing about employment, housing, or reputation. A person can meet 2, 4, or 6 of them with a perfect attendance record, and the subtype data says about 1 in 5 people with alcohol dependence do roughly that. Keeping your life running is genuinely good; it is just not evidence about the criteria, because the criteria never asked. From the same research, only about 1 in 4 people with alcohol dependence ever received any treatment. &quot;Nobody has ever said I need help&quot; is the normal state of this condition, not proof of its absence.
            </p>
          </section>

          <section>
            <h2 className={H2}>Signs in yourself vs. signs in someone you love</h2>
            <p className={P}>
              The same 11 criteria read differently depending on which side of them you are standing on.
            </p>
            <p className={P}>
              <strong>In yourself,</strong> you have the private data no one else can see: what you intended versus what happened, the rules you set and broke, the cravings, the morning symptoms, the amount you actually drink versus the amount you report. Score the intentions and the failures, not just the visible events.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              <strong>In someone you love,</strong> you can only see the outside: amounts on visible occasions, consequences, changed priorities, personality while drinking, promises made and missed. You cannot see their cravings or their private rules, so you cannot count their criteria for them, and a count you assign will start an argument instead of a conversation. What you can do is notice patterns over months, pick a calm and sober moment, and talk about specific events and your own worry rather than labels. Mayo Clinic&apos;s guidance to families makes the same point: many people with AUD do not recognize the problem themselves, and a loved one&apos;s concern, raised well, helps some people accept help. SAMHSA&apos;s signs list even includes &quot;loved ones or trusted friends have made comments about your drinking&quot; as one of the signs. If they drink heavily every day, the most practical help is a screening link they can open privately, and, if they decide to stop, help arranging a clinician conversation first, because stopping suddenly can be dangerous.
            </p>
          </section>

          <section>
            <h2 className={H2}>Which way of checking fits your situation</h2>
            <Bullets
              items={[
                <><strong>Best fit if you want a private, scored answer about yourself:</strong> the <Link href="/audit-c-alcohol-screen" className={LINK_CLASS}>AUDIT-C</Link> (3 questions) or the full <Link href="/audit-alcohol-test" className={LINK_CLASS}>AUDIT</Link> (10 questions). A score with zones beats a vibe, and it runs in your browser with no account. Not a fit if you need a diagnosis: a screening sorts risk, only a clinician diagnoses.</>,
                <><strong>Best fit if you want to understand the pattern first:</strong> this checklist. Read the 11 signs, count honestly, then take the screening to check your count against a validated instrument. Not a fit as a stand-alone verdict on anyone else.</>,
                <><strong>Best fit if you are worried about someone else:</strong> read the signs for recognition, share the screening link, and use the worried-about-someone-else section below. Not a fit: counting their criteria out loud. It will be heard as an accusation, and you are missing half the data anyway.</>,
                <><strong>Best fit if you drink heavily every day and are thinking about stopping:</strong> skip ahead to safety. Read the <Link href="/alcohol-withdrawal-timeline" className={LINK_CLASS}>alcohol withdrawal timeline</Link> and talk to a clinician before your last drink, because withdrawal at that level can be a medical emergency.</>,
              ]}
            />
          </section>

          <section>
            <h2 className={H2}>How this checklist was put together (methodology)</h2>
            <Bullets
              items={[
                <><strong>Primary source:</strong> the 11 DSM-5-TR criteria and the severity bands (2 to 3 mild, 4 to 5 moderate, 6 or more severe), as published in NIAAA&apos;s Core Resource on Alcohol, &quot;Alcohol Use Disorder: From Risk to Diagnosis to Recovery.&quot; The criteria and the 12-month window come from that source, not from memory.</>,
                <><strong>Cross-checks:</strong> NIAAA&apos;s consumer page &quot;Understanding Alcohol Use Disorder,&quot; which asks the same 11 criteria as plain questions, and SAMHSA&apos;s alcohol page, whose &quot;Signs of Drinking Too Much&quot; list matches the criteria in plain language. Mayo Clinic&apos;s symptoms page was used as a cross-check only.</>,
                <><strong>High-functioning figures:</strong> the functional subtype share (19.5 percent) and its description come from Moss, Chen, and Yi, &quot;Subtypes of Alcohol Dependence in a Nationally Representative Sample,&quot; <em>Drug and Alcohol Dependence</em>, 2007, an analysis of NIAAA&apos;s NESARC survey, as reported by NIAAA.</>,
                <><strong>The day-to-day column is ours.</strong> A plain-language rendering written for recognition, built from the criteria themselves. It adds examples, not new signs: every row maps back to a numbered criterion.</>,
                <><strong>The honest limit, stated plainly:</strong> a checklist of signs is not a diagnosis, and counting criteria at home does not make one. Diagnosis belongs to a clinician who can ask follow-up questions and rule out other causes. The AUDIT gives you a validated score and a risk zone; it screens, it does not diagnose. Together, the checklist and the screening show you whether your pattern matches the one clinicians treat.</>,
              ]}
            />
          </section>

          <section>
            <h2 className={H2}>Check your drinking: the screening</h2>
            <p className={P}>
              MindCheck Tools runs the screenings used in clinics, free and without an account:
            </p>
            <Bullets
              items={[
                <>The <Link href="/audit-c-alcohol-screen" className={LINK_CLASS}>AUDIT-C</Link>: 3 questions about how much and how often you drink. About a minute.</>,
                <>The full <Link href="/audit-alcohol-test" className={LINK_CLASS}>AUDIT</Link>: 10 questions covering drinking, possible dependence signs, and harm. About 3 minutes. New to it? Read <Link href="/what-is-the-audit-test" className={LINK_CLASS}>what the AUDIT test is</Link> first, or see how scores map to zones in <Link href="/audit-score-interpretation" className={LINK_CLASS}>AUDIT score interpretation</Link>.</>,
              ]}
            />
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              The checklist tells you what the signs are. The screening, scored on a 0 to 40 scale with action zones, tells you where your pattern lands.
            </p>
          </section>

          <section>
            <h2 className={H2}>What to do next, zone by zone</h2>
            <p className={P}>
              The AUDIT sorts scores into four zones. Whatever your zone, it is always okay to talk with a professional if you are concerned about your drinking.
            </p>
            <p className={P}>
              <strong>Zone I (score 0 to 7, lower risk).</strong> Keep being mindful of your drinking, especially in stressful stretches. If you recognized several signs despite a low score, trust the recognition and retake the screening in a few months.
            </p>
            <p className={P}>
              <strong>Zone II (score 8 to 15, hazardous use).</strong> Your pattern carries increased risk of harm. Practical steps to cut down help at this level, and this is the easiest zone to leave. If cutting down keeps failing, that failure is itself sign 2.
            </p>
            <p className={P}>
              <strong>Zone III (score 16 to 19, harmful use).</strong> Talking with a healthcare professional or a licensed substance use counselor is encouraged. They can look at your whole situation and help plan follow-up.
            </p>
            <p className={P}>
              <strong>Zone IV (score 20 to 40, possible dependence).</strong> Please arrange a professional evaluation soon. If you drink heavily every day, do not stop suddenly on your own: withdrawal can be dangerous. A clinician can plan a safe way to stop. Start with the{" "}
              <Link href="/alcohol-withdrawal-timeline" className={LINK_CLASS}>alcohol withdrawal timeline</Link>{" "}
              so you know the risks before you change anything.
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
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-3">
                Treatment a clinician can discuss includes behavioral therapy, mutual-support groups, and three FDA-approved medications (naltrexone, acamprosate, disulfiram).
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                These links are the same for everyone who reads this article. Nothing here is matched to your answers or your score.
              </p>
            </div>
          </section>

          <section>
            <h2 className={H2}>If you are worried about someone else</h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              You cannot take the screening for them, and you cannot count their signs for them. What works better: share this article or the screening link at a calm moment, describe the specific things you have seen, and say plainly that you are worried. Expect the first conversation to be one of several. If they drink heavily and decide to stop, the most useful concrete help is a ride to a clinician appointment before they stop, because withdrawal can turn dangerous in the first three days. SAMHSA&apos;s National Helpline (1-800-662-4357) takes calls from family members too, even if the person drinking is not ready to call.
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
                <><Link href="/alcohol-withdrawal-timeline" className={LINK_CLASS}>Alcohol withdrawal timeline</Link>, how long symptoms last, stage by stage</>,
                <><Link href="/what-is-the-audit-test" className={LINK_CLASS}>What the AUDIT test is</Link>, the 10-question screening explained</>,
                <><Link href="/audit-score-interpretation" className={LINK_CLASS}>AUDIT score interpretation</Link></>,
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
                  National Institute on Alcohol Abuse and Alcoholism. Alcohol Use Disorder: From Risk to Diagnosis to Recovery. Core Resource on Alcohol.{" "}
                  <a href="https://www.niaaa.nih.gov/health-professionals-communities/core-resource-on-alcohol/alcohol-use-disorder-risk-diagnosis-recovery" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>https://www.niaaa.nih.gov/health-professionals-communities/core-resource-on-alcohol/alcohol-use-disorder-risk-diagnosis-recovery</a>
                </>,
                <>
                  National Institute on Alcohol Abuse and Alcoholism. Understanding Alcohol Use Disorder.{" "}
                  <a href="https://www.niaaa.nih.gov/publications/brochures-and-fact-sheets/understanding-alcohol-use-disorder" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>https://www.niaaa.nih.gov/publications/brochures-and-fact-sheets/understanding-alcohol-use-disorder</a>
                </>,
                <>
                  Substance Abuse and Mental Health Services Administration. Alcohol Use Disorder: Causes, Symptoms, Treatment &amp; Help.{" "}
                  <a href="https://www.samhsa.gov/substance-use/learn/alcohol" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>https://www.samhsa.gov/substance-use/learn/alcohol</a>
                </>,
                <>
                  Moss HB, Chen CM, Yi HY. Subtypes of Alcohol Dependence in a Nationally Representative Sample. <em>Drug and Alcohol Dependence.</em> 2007;91(2-3):149-158. (Functional subtype figures as reported by NIAAA.)
                </>,
                <>
                  Mayo Clinic. Alcohol Use Disorder: Symptoms and Causes.{" "}
                  <a href="https://www.mayoclinic.org/diseases-conditions/alcohol-use-disorder/symptoms-causes/syc-20369243" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>https://www.mayoclinic.org/diseases-conditions/alcohol-use-disorder/symptoms-causes/syc-20369243</a>
                </>,
              ]}
            />
          </section>
        </div>

        {/* Footer */}
        <footer className="border-t border-sand-200 dark:border-neutral-700 pt-6 mt-10 text-center">
          <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Reviewer scope</h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-2">
            Written by Jason Ramirez, Certified Alcohol and Drug Counselor Level II (CADC-II). This credential covers substance use counseling. It is not medical, psychiatric, or psychological review. This article is general information about the signs clinicians use to recognize alcohol use disorder, not medical advice and not a diagnosis. Questions about your own drinking and health belong with a medical professional or a licensed counselor who can evaluate you directly. Last reviewed November 25, 2026.
          </p>
          <ToolReviewerBio lastReviewed="November 25, 2026" />
        </footer>
      </div>
    </>
  );
}
