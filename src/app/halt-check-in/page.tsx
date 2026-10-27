import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { HALTClient } from "./HALTClient";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";

const TOOL_URL = `${SITE_URL}/halt-check-in`;

export const metadata: Metadata = createMetadata({
  path: "/halt-check-in",
  title: "HALT Recovery Check-In: Hungry, Angry, Lonely, Tired",
  description:
    "Use a free 60-second HALT recovery check-in to notice hunger, anger, loneliness, and tiredness, then review practical next steps. Educational only.",
  keywords: [
    "HALT recovery tool", "HALT check in",
    "recovery reflection tool", "recovery self check",
    "HALT acronym recovery", "hungry angry lonely tired",
    "daily recovery check in", "sobriety check in tool",
    "HALT needs check in", "HALT self reflection",
    "recovery support check in", "addiction recovery tools",
  ],
  openGraph: {
    title: "HALT Recovery Check-In: Hungry, Angry, Lonely, Tired",
    description: "Rate hunger, anger, loneliness, and tiredness, then review practical next steps. A 60-second educational recovery reflection, not a relapse predictor.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What does HALT stand for in recovery?", answer: "HALT stands for Hungry, Angry, Lonely, Tired. SAMHSA presents it as a memory aid for noticing important needs and choosing an appropriate response. It is not a validated relapse-risk scale, and this check-in cannot predict or prevent relapse." },
  { question: "How do I use the HALT check-in?", answer: "Rate hungry, angry, lonely, and tired from 1 to 5 as a moment-in-time reflection. The page shows the four ratings separately and offers optional ideas for needs you marked as difficult. The ratings and suggestions are educational, not a clinical score or treatment recommendation." },
  { question: "Does research show that HALT predicts relapse?", answer: "No validated HALT cutoff or composite relapse-risk score was identified. A 2026 peer-reviewed mini-review describes direct scientific research on HALT as scant and calls for more evaluation. SAMHSA includes HALT as a counseling memory aid, which is narrower than claiming it predicts an individual's relapse risk." },
  { question: "How often should I do a HALT check-in?", answer: "There is no validated schedule. Some people use the mnemonic when stressed or experiencing a craving; others may not find it useful. Choose a frequency that supports reflection without replacing professional care or a recovery plan." },
  { question: "What should I do if I rate multiple needs as difficult?", answer: "The ratings do not indicate a risk category. You can consider one practical need and contact a trusted support person or qualified professional. If you are experiencing cravings, thoughts of using, or a crisis, use professional or crisis support rather than relying on this check-in." },
  { question: "Is the HALT check-in a clinical assessment?", answer: "No. The HALT check-in is a self-reflection tool, not a validated clinical instrument. It is based on the HALT concept widely used in recovery programs, but this specific tool was created for educational and self-awareness purposes. It is not a substitute for professional assessment, and it cannot predict or prevent relapse on its own. If you are experiencing cravings, thoughts of using, or are in crisis, please contact SAMHSA at 1-800-662-4357 or call/text 988 for immediate support. The HALT check-in is most useful as one part of a broader recovery practice that includes professional support." },
  {
    question: "What if none of the four words fits my experience?",
    answer: "You can leave the mnemonic aside and describe what you notice in your own words. HALT is not a complete account of emotions, physical needs, or recovery concerns. A trusted support person or qualified professional can help you explore concerns that do not fit these categories.",
  },
  {
    question: "Should I wait for a difficult rating before contacting support?",
    answer: "No. The ratings do not set a threshold for deserving help or establish that a situation is safe. You can contact support whenever it would be useful, including before a difficult moment. Use professional or crisis support promptly when needed rather than waiting to complete another check-in.",
  },
];

export default function HALTPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "HALT Check-In Tool",
              description: "An educational reflection based on the HALT acronym (Hungry, Angry, Lonely, Tired). Rate each need separately and review optional ideas; not a validated risk score.",
              url: TOOL_URL,
              datePublished: "2025-01-01",
              dateModified: "2026-08-05",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(FAQ_DATA)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "HALT Check-In", url: TOOL_URL },
            ])
          ),
        }}
      />

            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: August 5, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="An educational check-in for four states used in recovery reflection: hungry, angry, lonely, and tired."
          who="Adults in recovery who want to pause and notice basic physical or emotional needs before choosing a next step."
          bottomLine="HALT can support reflection, but it cannot predict or prevent relapse and is not a clinical assessment, treatment plan, or emergency service."
          lastUpdated="2026-08-05"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <AuthorByline publishedDate="2025-01-01" modifiedDate="2026-08-05" />
      </div>

<HALTClient faqData={FAQ_DATA} />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-10 mb-12 space-y-8 text-neutral-600 dark:text-neutral-300 leading-relaxed">
        <section aria-labelledby="halt-check-in-guide-0" className="space-y-4">
          <h2 id="halt-check-in-guide-0" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50">Noticing the four HALT states</h2>
          <p>Hungry can be a straightforward reminder to ask when you last had an opportunity to eat. Some people notice an empty stomach, distraction, or difficulty settling into a task. These experiences do not establish a cause. If it fits your usual needs and any existing care guidance, consider an available meal or snack rather than expecting yourself to push through every demand.</p>
          <p>Angry can feel like frustration, tension, or an impulse to respond quickly. A low-pressure next step might be pausing a conversation, stepping away when safe, or giving yourself time before sending a message. The aim is to make room for a considered response. A check-in does not decide who is right, excuse harmful behavior, or resolve an unsafe situation.</p>
          <p>Lonely may mean wanting company, feeling disconnected while around others, or wishing someone understood what the day has been like. Consider a small form of connection with someone safe: a brief conversation, a support contact, or an established recovery group. You do not need to explain everything at once, and contact with an unsafe person is not a requirement.</p>
          <p>Tired may involve sleepiness, low energy, or feeling worn down by demands. A pause, a quieter activity, or an opportunity to rest may be more realistic than finishing everything. If you feel too sleepy to drive or do another hazardous task safely, stop that activity and arrange a safer option. Persistent or unusual tiredness deserves discussion with a healthcare professional.</p>
        </section>
        <section aria-labelledby="halt-check-in-guide-1" className="space-y-4">
          <h2 id="halt-check-in-guide-1" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50">Turning a check-in into one small step</h2>
          <p>Look at the four states separately. Choose a need you can respond to with the resources available now, rather than trying to fix the entire day. Make the step concrete: put food within reach, ask a trusted person for a short call, or postpone a nonessential task. If several needs overlap, you can ask someone to help you choose where to begin.</p>
          <p>After the step, notice whether anything feels different without requiring a better rating. An unchanged feeling does not cancel the value of asking for support. Practical barriers matter too: limited time, money, privacy, or safe company can make simple suggestions difficult. The check-in is a prompt for reflection, not a judgment about effort or recovery.</p>
        </section>
        <section aria-labelledby="halt-check-in-guide-2" className="space-y-4">
          <h2 id="halt-check-in-guide-2" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50">Limits and other recovery supports</h2>
          <p>HALT leaves out many experiences and does not explain a craving or determine safety. The <Link href="/urge-surfing-timer" className="font-semibold underline">urge surfing timer</Link> offers an optional craving practice, while a <Link href="/relapse-prevention-plan" className="font-semibold underline">relapse-prevention plan</Link> can organize broader support. Use an existing professional care plan when one is in place; these educational tools are not substitutes for professional care.</p>
          <p>For a broader reflection, explore the <Link href="/daily-recovery-check-in" className="font-semibold underline">daily recovery check-in</Link>. The <Link href="/sleep-and-mood-check" className="font-semibold underline">sleep and mood reflection</Link> considers sleep experience without keeping a diary. You do not need to complete several tools before seeking help. Use <Link href="/crisis-resources" className="font-semibold underline">crisis resources</Link> if support is urgent.</p>
        </section>
      </div>
    </>
  );
}
