import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { TriggerWorksheetClient } from "./TriggerWorksheetClient";

const TOOL_URL = `${SITE_URL}/trigger-identification-worksheet`;

export const metadata: Metadata = createMetadata({
  path: "/trigger-identification-worksheet",
  title: "Trigger Identification Worksheet | Free Tool",
  description:
    "Identify your personal addiction triggers across 6 categories: people, places, emotions, situations, times, and sensory cues. Free worksheet with coping strategies. Private and printable.",
  keywords: [
    "addiction triggers worksheet", "identify my triggers",
    "relapse triggers list", "trigger identification tool",
    "addiction trigger categories", "substance abuse triggers",
    "emotional triggers addiction", "people places things triggers",
    "relapse trigger worksheet", "coping strategies for triggers",
    "free trigger worksheet", "printable trigger worksheet",
  ],
  openGraph: {
    title: "Trigger Identification Worksheet | Free Tool",
    description: "Identify your addiction triggers across 6 categories and get personalized coping strategies. Free, private, and printable.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What are addiction triggers?", answer: "Triggers are people, places, emotions, situations, times, or sensory experiences that activate a craving or urge to use substances. They work through conditioned associations — your brain has learned to connect certain cues with the reward of using, so encountering those cues produces an automatic urge. Triggers can be external (a specific bar, a friend who uses, a billboard ad) or internal (stress, loneliness, boredom, anxiety). Understanding your personal triggers is one of the most important steps in relapse prevention, because once you know what sets off a craving, you can plan how to respond before it happens." },
  { question: "Why are there six categories of triggers?", answer: "Triggers are complex and come from many sources. The six categories in this worksheet — People, Places, Emotional, Situational, Time-Based, and Sensory — cover the full range of trigger types identified in addiction research. People and places are the most commonly discussed (the classic 'people, places, and things'), but emotional triggers like stress, loneliness, and boredom are often the most powerful. Time-based triggers (Friday nights, paydays) and sensory triggers (the smell of alcohol, the sound of a lighter) are frequently overlooked but can be just as strong. By checking all six categories, you get a complete picture of your trigger landscape." },
  { question: "How do I use the coping strategies this tool suggests?", answer: "Each trigger in your profile is paired with coping strategies specific to its category. The goal is not to memorize every strategy but to have a few go-to responses ready for each type of trigger. For people triggers, the key strategies involve boundaries and exit plans. For emotional triggers, the focus is on recognizing the emotion early and using techniques like the HALT check-in or urge surfing. Write down your top strategies and put them in your relapse prevention plan, your phone, or wherever you will see them when you need them most." },
  { question: "Can triggers change over time?", answer: "Yes. Triggers evolve as your life changes. Some triggers weaken over time as your brain builds new associations — a bar you used to frequent may lose its pull after months of sobriety. But new triggers can also appear: a new stressful job, a breakup, moving to a new city, or even positive events like celebrations. This is why it is important to revisit your trigger worksheet periodically — every few months during the first year of recovery, and at least annually after that. Many people review their triggers with a counselor or sponsor during regular check-ins." },
  { question: "What if I have triggers I cannot avoid?", answer: "Some triggers are unavoidable — you cannot quit your job because a coworker drinks, or avoid all family gatherings because a relative uses. For unavoidable triggers, the strategy shifts from avoidance to preparation. This means having a plan before you encounter the trigger: who will you call if a craving hits? What is your exit strategy if things get too intense? What coping technique will you use in the moment? Practice your response in advance so it feels automatic when you need it. Many people rehearse difficult scenarios with a therapist or sponsor using role-playing." },
  { question: "Should I share my trigger list with anyone?", answer: "Sharing your trigger list with trusted people in your support network is strongly recommended. When your sponsor, therapist, close friends, or family members know your triggers, they can help you avoid them, warn you when they notice you heading toward one, and support you in the moment. You do not have to share everything with everyone — choose what feels appropriate for each person. Some people share their full list with their therapist or sponsor and a shorter version with family members. The important thing is that someone besides you knows what to watch for." },
];

export default function TriggerWorksheetPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Trigger Identification Worksheet",
              description: "A free interactive worksheet for identifying personal addiction triggers across six categories: people, places, emotional, situational, time-based, and sensory. Generates a personalized trigger profile with category-specific coping strategy suggestions. Printable output.",
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
              { name: "Trigger Identification Worksheet", url: TOOL_URL },
            ])
          ),
        }}
      />

            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <section className="sr-only">
        <h2>What Is the Trigger Identification Worksheet?</h2>
        <h2>How Does the Trigger Identification Worksheet Work?</h2>
        <h2>What Do My Trigger Identification Results Mean?</h2>
      </section>
<TriggerWorksheetClient faqData={FAQ_DATA} />
    </>
  );
}
