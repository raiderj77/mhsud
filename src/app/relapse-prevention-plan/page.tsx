import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { RelapsePlanClient } from "./RelapsePlanClient";

const TOOL_URL = `${SITE_URL}/relapse-prevention-plan`;

export const metadata: Metadata = createMetadata({
  path: "/relapse-prevention-plan",
  title: "Relapse Prevention Plan Builder",
  description:
    "Build a free personalized relapse prevention plan. Identify triggers, coping strategies, and support contacts. Reviewed by a CADC-II counselor.",
  keywords: [
    "relapse prevention plan", "relapse prevention worksheet",
    "relapse prevention plan template", "relapse prevention strategies",
    "relapse prevention tool", "craving action plan",
    "addiction recovery plan", "substance abuse relapse prevention",
    "recovery planning worksheet", "trigger identification worksheet",
    "coping strategies for addiction", "relapse prevention plan PDF",
  ],
  openGraph: {
    title: "Relapse Prevention Plan Builder",
    description: "Build your own relapse prevention plan: triggers, warning signs, coping strategies, emergency contacts, and a craving action plan. Free and printable.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What is a relapse prevention plan?", answer: "A relapse prevention plan is a personalized, written document that outlines your triggers, warning signs, coping strategies, support contacts, and action steps for managing cravings. It serves as a concrete reference you can turn to when you are struggling — because in moments of crisis, it is difficult to think clearly and remember what to do. Having a plan written down means you do not have to rely on willpower or memory alone. Research shows that people who have a written relapse prevention plan are significantly more likely to maintain long-term recovery." },
  { question: "How do I identify my triggers?", answer: "Triggers are people, places, situations, emotions, or experiences that increase your urge to use. They fall into two categories: external triggers (specific people, locations, events, times of day, social situations) and internal triggers (emotions like anger, loneliness, boredom, stress, anxiety, or physical sensations like pain or fatigue). To identify your triggers, reflect on past relapses or near-relapses and ask: what was happening right before the craving started? Keeping a journal for a few weeks can help you spot patterns. Common triggers include stress, social pressure, relationship conflicts, celebrations, certain locations, financial problems, and unstructured time." },
  { question: "What are the warning signs of relapse?", answer: "Relapse is usually a process, not a single event. Warning signs can be emotional (mood swings, anxiety, anger, isolation), mental (romanticizing past use, thinking 'just once won't hurt,' fantasizing about using, bargaining with yourself), physical (disrupted sleep, neglecting self-care, changes in appetite, tension), and behavioral (skipping meetings, avoiding sponsor calls, returning to old routines, spending time with people who use, neglecting responsibilities). Recognizing these warning signs early gives you time to intervene before a full relapse occurs. This is why a written plan that lists your personal warning signs is so valuable." },
  { question: "What should I do when I have a craving?", answer: "Cravings are normal in recovery and do not mean you are failing. They are temporary — most cravings peak within 15-30 minutes and then subside. When a craving hits: (1) Recognize it for what it is — a temporary feeling, not a command. (2) Delay — tell yourself you will wait 30 minutes before making any decision. (3) Distract — do something from your safe activities list. (4) Call someone from your emergency contacts. (5) Remove yourself from the triggering situation if possible. (6) Review your relapse prevention plan. (7) Practice a grounding technique or breathing exercise. Having these steps written down in advance means you do not have to figure them out in the moment." },
  { question: "How often should I update my relapse prevention plan?", answer: "Review and update your plan regularly — at minimum every 30 days during the first year of recovery, and quarterly after that. Update it whenever your circumstances change significantly: new job, new relationship, move to a new area, change in support network, or after a close call with relapse. Your triggers, warning signs, and coping strategies will evolve as you grow in recovery. A plan that was right for month one may not be right for month twelve. Many people review their plan with a counselor, sponsor, or therapist during regular sessions." },
  { question: "Should I share my relapse prevention plan with others?", answer: "Yes, sharing your plan with trusted people in your support network is strongly recommended. Give copies to your sponsor, therapist, close family members, or sober friends. When they know your warning signs, they can gently point them out when they notice changes in your behavior — often before you recognize them yourself. Sharing your emergency contacts with your support network also means that if someone notices you struggling, they know exactly who to call. You do not need to share every detail with everyone — choose what feels appropriate for each person in your life." },
];

export default function RelapsePlanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Relapse Prevention Plan Builder",
              description: "A free interactive worksheet for building a personalized relapse prevention plan. Identify triggers, warning signs, coping strategies, emergency contacts, safe activities, places to avoid, and a craving action plan. Generates a printable plan document.",
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
              { name: "Relapse Prevention Plan", url: TOOL_URL },
            ])
          ),
        }}
      />

      <RelapsePlanClient faqData={FAQ_DATA} />
    </>
  );
}
