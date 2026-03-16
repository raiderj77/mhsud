import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { GroundingClient } from "./GroundingClient";

const TOOL_URL = `${SITE_URL}/five-senses-grounding`;

export const metadata: Metadata = createMetadata({
  path: "/five-senses-grounding",
  title: "5-4-3-2-1 Grounding Exercise | Free Anxiety Grounding Tool",
  description:
    "Free guided 5-4-3-2-1 grounding technique for anxiety and panic. Name 5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste. No signup required.",
  keywords: [
    "grounding techniques for anxiety", "5-4-3-2-1 technique",
    "grounding exercise for panic attacks", "5-4-3-2-1 grounding",
    "sensory grounding exercise", "grounding technique for dissociation",
    "anxiety grounding tool", "five senses grounding",
    "panic attack grounding", "grounding coping skill",
    "DBT grounding technique", "mindfulness grounding exercise",
  ],
  openGraph: {
    title: "5-4-3-2-1 Grounding Exercise | Free Anxiety Grounding Tool",
    description: "Free guided 5-4-3-2-1 sensory grounding exercise. Walk through all five senses step by step to manage anxiety, panic, and dissociation. No signup.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is the 5-4-3-2-1 grounding technique?",
    answer: "The 5-4-3-2-1 grounding technique is a sensory awareness exercise used to manage anxiety, panic attacks, and dissociation. You name 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, and 1 thing you can taste. By systematically engaging each of your five senses, you redirect your brain's attention away from distressing thoughts and into the present moment. It is one of the most widely recommended grounding exercises in cognitive behavioral therapy (CBT) and dialectical behavior therapy (DBT).",
  },
  {
    question: "When should I use the 5-4-3-2-1 technique?",
    answer: "Use it whenever you feel overwhelmed, anxious, panicky, or disconnected from reality. Common situations include during or before a panic attack, after a triggering memory or flashback, when you feel dissociated or 'spaced out,' during intense cravings in recovery, before a stressful event like a presentation or exam, or any time racing thoughts feel unmanageable. You can also use it as a daily mindfulness practice — it does not have to be reserved for crisis moments.",
  },
  {
    question: "Does the 5-4-3-2-1 grounding technique actually work?",
    answer: "Yes, grounding techniques are well-supported by clinical evidence. They are a core component of dialectical behavior therapy (DBT) distress tolerance skills and are widely used in trauma therapy, anxiety treatment, and addiction recovery. The technique works by activating the prefrontal cortex (rational thinking) and reducing amygdala activation (fear response). Research on mindfulness-based interventions consistently shows that redirecting attention to sensory experience reduces physiological stress markers including heart rate and cortisol levels. However, grounding is a coping tool — not a treatment for anxiety disorders. If you experience frequent, severe anxiety, please consult a mental health professional.",
  },
  {
    question: "What if I cannot smell or taste anything?",
    answer: "That is completely normal, especially for smell and taste. For smell, try noticing the air itself — does the room smell like anything at all? Is there a faint scent from your clothes, your skin, or a nearby object? For taste, you can notice the taste already in your mouth — perhaps toothpaste, coffee, or just the neutral taste of saliva. If you truly cannot identify anything, it is okay to name something you remember tasting or smelling recently. The goal is engagement, not perfection.",
  },
  {
    question: "Can children use the 5-4-3-2-1 technique?",
    answer: "Yes, the 5-4-3-2-1 technique is excellent for children and is frequently used by school counselors and child therapists. The counting structure makes it easy to follow, and engaging the senses feels like a game rather than therapy. For younger children (under 7), you might simplify it to 3-2-1 (3 things you see, 2 you hear, 1 you touch). For teens, the full 5-4-3-2-1 exercise works well. This tool's text input format can help older children and teens engage more deeply, though younger children may prefer doing it verbally with a parent or counselor.",
  },
  {
    question: "How is this different from box breathing or meditation?",
    answer: "Box breathing focuses specifically on controlling your breath in a timed pattern (breathe in, hold, breathe out, hold). Meditation typically involves observing thoughts without judgment or focusing on a single point of attention. The 5-4-3-2-1 grounding technique is different because it actively engages all five senses and asks you to interact with your physical environment. This makes it particularly effective for dissociation and panic, where you need to feel reconnected to reality — not just calm. Many people find it helpful to use grounding techniques and breathing exercises together. For example, you might start with box breathing to slow your heart rate, then move to 5-4-3-2-1 grounding to reconnect with the present.",
  },
];

export default function FiveSensesGroundingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "5-4-3-2-1 Grounding Exercise",
              description: "A free guided 5-4-3-2-1 sensory grounding tool for anxiety, panic attacks, and dissociation. Step-by-step exercise: name 5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste. Includes text inputs for engagement, progress indicator, optional breathing pause between steps, and calming completion summary.",
              url: TOOL_URL,
              datePublished: "2026-03-05",
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
              { name: "5-4-3-2-1 Grounding Exercise", url: TOOL_URL },
            ])
          ),
        }}
      />

            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: <time dateTime="2026-03-16">March 16, 2026</time>
      </p>
      <section className="sr-only">
        <h2>What Is the Five Senses Grounding Exercise?</h2>
        <h2>How Does Five Senses Grounding Work?</h2>
        <h2>What Are the Benefits of Grounding Exercises?</h2>
      </section>
<GroundingClient faqData={FAQ_DATA} />
    </>
  );
}
