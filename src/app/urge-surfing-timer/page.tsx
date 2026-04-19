import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { UrgeSurfingClient } from "./UrgeSurfingClient";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";

const TOOL_URL = `${SITE_URL}/urge-surfing-timer`;

export const metadata: Metadata = createMetadata({
  path: "/urge-surfing-timer",
  title: "Urge Surfing Timer | Free Craving Mindfulness Tool",
  description:
    "Ride out cravings with a guided urge surfing timer. Wave animation, breathing cues, mindfulness prompts, and a countdown timer. Free, private, based on Alan Marlatt's technique.",
  keywords: [
    "urge surfing", "urge surfing timer", "craving timer",
    "how to resist cravings", "mindfulness for addiction",
    "urge surfing technique", "ride out cravings",
    "craving mindfulness", "urge surfing meditation",
    "Alan Marlatt urge surfing", "craving coping tool",
    "substance craving help", "addiction mindfulness tool",
  ],
  openGraph: {
    title: "Urge Surfing Timer | Free Craving Mindfulness Tool",
    description: "Guided timer to ride out cravings using urge surfing. Wave animation, breathing cues, and mindfulness prompts. Free and private.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What is urge surfing?", answer: "Urge surfing is a mindfulness technique developed by psychologist Alan Marlatt, PhD, a pioneer in relapse prevention research. Instead of fighting a craving or giving in to it, you observe it like a wave — it rises, peaks, and eventually falls on its own. The key insight is that cravings are temporary. By paying attention to the craving without acting on it, you learn that you can tolerate discomfort and that urges pass naturally. Over time, this builds confidence in your ability to handle cravings without using." },
  { question: "How long do cravings typically last?", answer: "Research consistently shows that most cravings peak within 15 to 30 minutes and then begin to subside on their own — even if you do nothing. This is why our timer defaults range from 5 to 30 minutes. The intensity of a craving may feel unbearable in the moment, but it is neurologically impossible for a craving to stay at peak intensity indefinitely. Your brain simply cannot sustain that level of activation. Knowing this fact — that the craving will pass — is one of the most powerful tools in recovery." },
  { question: "Does urge surfing really work?", answer: "Yes. Multiple studies support urge surfing as an effective craving management technique. Research by Bowen et al. (2009) found that mindfulness-based relapse prevention, which includes urge surfing, significantly reduced substance use and cravings compared to standard relapse prevention alone. A 2014 follow-up study showed these benefits persisted at 12 months. Urge surfing works because it changes your relationship with cravings — instead of seeing them as commands you must obey, you learn to see them as temporary sensations you can observe and ride out." },
  { question: "Can I use urge surfing for things other than substance cravings?", answer: "Absolutely. While urge surfing was developed in the context of addiction recovery, the technique works for any unwanted urge or impulse. People use it for emotional eating, smoking cessation, compulsive shopping, gambling urges, anger management, nail biting, phone checking habits, and other behaviors they want to change. The underlying principle is the same: observe the urge without acting on it, and it will pass. The timer and breathing exercises in this tool work for any type of craving." },
  { question: "What if the urge does not go away after the timer ends?", answer: "If a craving persists after one session, you can start another timer — cravings sometimes come in waves, with a second, smaller wave following the first. You can also try changing your environment (go for a walk, move to a different room), calling someone from your support network, or using a different coping strategy from your relapse prevention plan. If cravings are frequent and intense, this is worth discussing with a counselor or therapist who can help you develop additional strategies. Persistent, intense cravings may indicate that your current level of support needs adjustment." },
  { question: "How do I get better at urge surfing?", answer: "Like any skill, urge surfing improves with practice. Start by using it for mild cravings or even non-substance urges (like the urge to check your phone) to build the skill when stakes are low. Practice the breathing exercises daily, even when you are not experiencing a craving, so they become automatic. Over time, you will notice that cravings feel less overwhelming and pass more quickly. Many people find it helpful to practice urge surfing as part of a daily mindfulness routine, alongside tools like the HALT Check-In, so that the technique is second nature when a real craving hits." },
];

export default function UrgeSurfingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Urge Surfing Timer",
              description: "A free guided mindfulness timer for riding out cravings using the urge surfing technique. Includes wave animation, box breathing cues, rotating mindfulness prompts, and a countdown timer. Based on Alan Marlatt's research in relapse prevention.",
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
              { name: "Urge Surfing Timer", url: TOOL_URL },
            ])
          ),
        }}
      />

            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A guided urge surfing timer based on mindfulness principles that helps you ride out cravings without acting on them."
          who="Anyone in recovery experiencing cravings who wants a structured technique to wait them out."
          bottomLine="Cravings typically peak and pass within 15-30 minutes — urge surfing teaches you to ride the wave. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <AuthorByline publishedDate="2025-01-01" modifiedDate="2026-03-20" />
      </div>

      <section className="sr-only">
        <h2>What Is the Urge Surfing Timer?</h2>
        <h2>How Does Urge Surfing Work?</h2>
        <h2>What Are the Benefits of Urge Surfing?</h2>
      </section>
<UrgeSurfingClient faqData={FAQ_DATA} />
    </>
  );
}
