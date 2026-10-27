import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { UrgeSurfingClient } from "./UrgeSurfingClient";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";

const TOOL_URL = `${SITE_URL}/urge-surfing-timer`;

export const metadata: Metadata = createMetadata({
  path: "/urge-surfing-timer",
  title: "Urge Surfing Timer for Cravings | Free, Private Guided Tool",
  description:
    "Use a free, private urge surfing timer to pause, notice craving sensations, and practice observing an urge without acting on it. Includes optional breathing prompts.",
  keywords: [
    "urge surfing", "urge surfing timer", "craving timer",
    "urge surfing technique", "craving mindfulness",
    "substance craving coping tool", "mindfulness for cravings",
  ],
  openGraph: {
    title: "Urge Surfing Timer for Cravings | Free, Private Guided Tool",
    description: "Pause and observe a craving with a private guided timer, body-awareness prompts, and optional paced breathing.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is urge surfing?",
    answer: "Urge surfing is a coping exercise that treats an urge like a wave: notice where you feel it, describe the sensations, and observe how they change without automatically acting on the urge. The U.S. Department of Veterans Affairs and SAMHSA both publish urge-surfing exercises for substance-use treatment settings.",
  },
  {
    question: "How long does a craving last?",
    answer: "There is no single reliable duration for every person or craving. The timer offers several practice intervals, but it does not predict when an urge will peak or end. If the urge remains strong, use another part of your support or treatment plan rather than treating the timer as a guarantee.",
  },
  {
    question: "Does urge surfing make a craving disappear?",
    answer: "Not necessarily. The VA explains that the purpose is to experience a craving in a new way, not to force it to disappear. Some people notice an urge changing or fading during practice; others may need additional coping strategies or support.",
  },
  {
    question: "What should I do if the urge is still strong?",
    answer: "Pause the exercise and follow your treatment or relapse-prevention plan, change to a safer environment, or contact a trusted support person or qualified professional. If you may harm yourself or someone else, call emergency services. In the United States, call or text 988 for crisis support.",
  },
  {
    question: "Can I practice when I am not experiencing a craving?",
    answer: "You can explore the controls and practice gently noticing ordinary sensations during a settled moment. This can help you decide whether the format feels usable. It does not establish how you will respond during a future craving, and there is no need to deliberately trigger an urge.",
  },
  {
    question: "Do I need to close my eyes or follow the breathing prompts?",
    answer: "No. Keep your eyes open if that feels more comfortable, and breathe naturally if paced breathing is unpleasant. The exercise is optional. You can stop or choose another source of support at any point without completing the interval.",
  },
];

export default function UrgeSurfingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Urge Surfing Timer for Cravings",
              description: "A private guided timer for pausing, noticing craving sensations, and practicing the urge-surfing exercise without a fixed-duration or outcome guarantee.",
              url: TOOL_URL,
              datePublished: "2025-01-01",
              dateModified: "2026-07-17",
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
              { name: "Urge Surfing Timer", url: TOOL_URL },
            ])
          ),
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A private guided timer for pausing, noticing craving sensations, and observing how an urge changes without automatically acting on it."
          who="People who want to practice urge surfing as one coping skill within a broader recovery or support plan."
          bottomLine="Choose a manageable practice interval. The timer does not predict when a craving will end and is not a replacement for treatment, crisis support, or a relapse-prevention plan."
          lastUpdated="2026-07-17"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <AuthorByline publishedDate="2025-01-01" modifiedDate="2026-07-17" />
      </div>

      <UrgeSurfingClient faqData={FAQ_DATA} />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-10 mb-12 space-y-8 text-neutral-600 dark:text-neutral-300 leading-relaxed">
        <section aria-labelledby="urge-surfing-timer-guide-0" className="space-y-4">
          <h2 id="urge-surfing-timer-guide-0" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50">Practicing urge surfing step by step</h2>
          <p>Begin in a place where pausing is reasonably safe. If access to alcohol or drugs makes the situation harder to manage, consider moving away from that setting or contacting support first. Choose an interval that feels manageable, rather than a duration you feel obliged to finish. The timer is a practice aid, not a test of willpower.</p>
          <p>Notice where the urge is most apparent. You might describe a sensation in ordinary words such as tight, restless, warm, or shifting, without deciding what it proves. Let breathing remain natural. If it feels comfortable, observe whether the sensation stays the same, moves, or changes in intensity. There is no requirement to find a clear wave or to feel calmer.</p>
          <p>At the end, pause before choosing what comes next. Ask whether your surroundings feel safe enough and whether another person could help. An urge that remains present does not mean the exercise was done incorrectly. You can stop early, use a different coping skill, or follow the next step in an existing recovery plan.</p>
        </section>
        <section aria-labelledby="urge-surfing-timer-guide-1" className="space-y-4">
          <h2 id="urge-surfing-timer-guide-1" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50">Common difficulties</h2>
          <p>Attention may wander to plans, worries, or thoughts about using. When you notice this, gently return to a sensation or to something you can see around you. Repeatedly bringing attention back can be part of practice; there is no need to restart the timer or criticize yourself for losing focus.</p>
          <p>If an urge feels too strong to observe comfortably, do not make finishing the exercise the priority. Reach out to a trusted support person or qualified professional and use your established support plan. If breathing prompts feel uncomfortable, skip them and breathe normally. You can keep your eyes open, notice your feet on the floor, or leave the exercise altogether.</p>
        </section>
        <section aria-labelledby="urge-surfing-timer-guide-2" className="space-y-4">
          <h2 id="urge-surfing-timer-guide-2" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50">How this fits with other coping tools</h2>
          <p>A <Link href="/halt-check-in" className="font-semibold underline">HALT check-in</Link> offers a separate prompt to notice basic needs. A <Link href="/relapse-prevention-plan" className="font-semibold underline">relapse-prevention plan</Link> can help organize support contacts and practical responses before a difficult moment. Neither requires waiting for an urge to reach a particular level.</p>
          <p>If inward attention is unhelpful, <Link href="/five-senses-grounding" className="font-semibold underline">five-senses grounding</Link> offers an outward focus. The <Link href="/box-breathing-exercise" className="font-semibold underline">box breathing exercise</Link> is another optional practice if paced breathing feels comfortable; it is not a required next step. These educational tools are not a substitute for professional care. For urgent support, use <Link href="/crisis-resources" className="font-semibold underline">U.S. and international crisis resources</Link> rather than continuing a timer.</p>
        </section>
      </div>
    </>
  );
}
