import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { HALTClient } from "./HALTClient";

const TOOL_URL = `${SITE_URL}/halt-check-in`;

export const metadata: Metadata = createMetadata({
  path: "/halt-check-in",
  title: "HALT Check-In | Free Recovery Self-Check Tool",
  description:
    "Use the free HALT check-in to identify emotional triggers in recovery. Are you Hungry, Angry, Lonely, or Tired? Takes 60 seconds. Reviewed by CADC-II.",
  keywords: [
    "HALT recovery tool", "HALT check in",
    "relapse prevention tool", "am I at risk for relapse",
    "HALT acronym recovery", "hungry angry lonely tired",
    "daily recovery check in", "sobriety check in tool",
    "relapse prevention check in", "HALT self assessment",
    "recovery vulnerability check", "addiction recovery tools",
  ],
  openGraph: {
    title: "HALT Check-In | Free Recovery Self-Check Tool",
    description: "Rate Hungry, Angry, Lonely, Tired on a 1-5 scale. See your vulnerability level and get coping suggestions instantly.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What does HALT stand for in recovery?", answer: "HALT stands for Hungry, Angry, Lonely, Tired — four physical and emotional states that significantly increase vulnerability to relapse. The acronym is widely used in 12-step programs, SMART Recovery, and other recovery frameworks as a quick self-check. When you notice you are experiencing one or more of these states, it is a signal to pause and take care of your basic needs before making decisions. HALT is sometimes called the most important acronym in recovery because addressing these four states can prevent many relapses before they start." },
  { question: "How do I use the HALT check-in?", answer: "Rate each of the four dimensions — Hungry, Angry, Lonely, Tired — on a scale of 1 to 5, where 1 means you are struggling in that area and 5 means you are doing well. The check-in takes less than 60 seconds. After rating all four, you will see a visual radar chart of your current state, an overall vulnerability level, and specific coping suggestions for any areas where you scored low. Many people in recovery do a HALT check-in once or twice a day, especially during early recovery or stressful periods." },
  { question: "Why are hunger, anger, loneliness, and tiredness relapse triggers?", answer: "These four states compromise your ability to cope and make good decisions. Hunger causes low blood sugar, which impairs judgment and increases irritability. Anger and resentment build emotional pressure that substances once relieved. Loneliness removes the social support that is protective in recovery. Tiredness reduces willpower and emotional regulation. Research shows that basic physical and emotional needs must be met for people to maintain the cognitive resources needed for sustained behavior change. When multiple HALT factors are present simultaneously, vulnerability increases significantly." },
  { question: "How often should I do a HALT check-in?", answer: "Many recovery programs recommend checking in with HALT at least once daily — often in the morning and evening. Some people check in whenever they notice cravings, feel off, or before making important decisions. During early recovery (the first 90 days), more frequent check-ins can be especially helpful. There is no wrong frequency. The goal is to build self-awareness so that you notice these vulnerability states before they lead to impulsive decisions. Over time, checking in with HALT becomes automatic — you will start recognizing these states without needing the tool." },
  { question: "What should I do if I score low on multiple HALT dimensions?", answer: "If you score low (1-2) on multiple dimensions, that is an important signal to take immediate action. Start with the easiest one to fix — usually Hungry or Tired, since eating a meal or resting are concrete actions you can take right now. Then address the emotional dimensions: call your sponsor, a supportive friend, or attend a meeting if you are feeling lonely or angry. Multiple low scores mean your vulnerability is elevated, so this is not the time to test your willpower or make major decisions. Take care of your basic needs first, and the cravings or difficult feelings often become more manageable." },
  { question: "Is the HALT check-in a clinical assessment?", answer: "No. The HALT check-in is a self-reflection tool, not a validated clinical instrument. It is based on the HALT concept widely used in recovery programs, but this specific tool was created for educational and self-awareness purposes. It is not a substitute for professional assessment, and it cannot predict or prevent relapse on its own. If you are experiencing cravings, thoughts of using, or are in crisis, please contact SAMHSA at 1-800-662-4357 or call/text 988 for immediate support. The HALT check-in is most useful as one part of a broader recovery practice that includes professional support." },
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
              description: "A free daily recovery check-in tool based on the HALT acronym (Hungry, Angry, Lonely, Tired). Rate each dimension on a 1-5 scale and see your current vulnerability level with personalized coping suggestions.",
              url: TOOL_URL,
              datePublished: "2025-01-01",
              dateModified: new Date().toISOString().split("T")[0],
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
        Last updated: March 16, 2026
      </p>
      <section className="sr-only">
        <h2>What Is the HALT Check-In?</h2>
        <h2>How Does the HALT Check-In Work?</h2>
        <h2>What Do My HALT Check-In Results Mean?</h2>
      </section>
<HALTClient faqData={FAQ_DATA} />
    </>
  );
}
