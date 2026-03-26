import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import AnswerBlock from "@/components/AnswerBlock";
import { BoxBreathingClient } from "./BoxBreathingClient";

const TOOL_URL = `${SITE_URL}/box-breathing-exercise`;

export const metadata: Metadata = createMetadata({
  path: "/box-breathing-exercise",
  title: "Box Breathing Exercise | Free 4-4-4-4 Guided Breathing Tool",
  description:
    "Practice box breathing with a free visual guide. 4-4-4-4 breathing pattern for anxiety, stress, and focus. Animated square, cycle counter, and ambient sound. No signup required.",
  keywords: [
    "box breathing exercise", "box breathing", "4-4-4-4 breathing",
    "breathing exercise for anxiety", "square breathing",
    "box breathing technique", "tactical breathing",
    "breathing exercise for stress", "guided breathing tool",
    "box breathing timer", "navy seal breathing technique",
    "calm breathing exercise", "deep breathing exercise online",
  ],
  openGraph: {
    title: "Box Breathing Exercise | Free 4-4-4-4 Guided Breathing Tool",
    description: "Free visual guided box breathing tool. Follow the animated square through breathe in, hold, breathe out, hold. Multiple patterns and session lengths. No signup.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is box breathing and how does it work?",
    answer: "Box breathing (also called square breathing or 4-4-4-4 breathing) is a deep breathing technique where you breathe in for 4 seconds, hold for 4 seconds, breathe out for 4 seconds, and hold again for 4 seconds. Each phase corresponds to one side of a square, which is why it is called box breathing. It works by activating the parasympathetic nervous system, which is your body's natural calming response. This slows your heart rate, lowers blood pressure, and reduces stress hormones like cortisol. Navy SEALs, first responders, and therapists use this technique because it is simple, effective, and can be done anywhere.",
  },
  {
    question: "How long should I do box breathing?",
    answer: "Even 2 minutes (about 4-5 cycles) of box breathing can produce a noticeable calming effect. For ongoing stress management, 5-10 minutes is ideal. Many practitioners recommend starting with short sessions and gradually increasing as you get more comfortable with the technique. During an acute anxiety or panic episode, continue until you feel your heart rate slow and your body relax — typically 5-15 minutes. For daily practice, 5 minutes in the morning or before bed is a great starting point.",
  },
  {
    question: "Is 4-4-4-4 the only box breathing pattern?",
    answer: "No. While 4-4-4-4 is the most common and well-known pattern, box breathing can be adapted to different durations. Beginners may find a 3-3-3-3 pattern more comfortable, while experienced practitioners may prefer 5-5-5-5 or even 6-6-6-6 for deeper relaxation. The key principle is that all four phases are equal in length, creating the 'box' or 'square' shape. Some people also vary the pattern — for example, extending the exhale (4-4-6-4) — but at that point it becomes a different breathing technique rather than traditional box breathing.",
  },
  {
    question: "Can box breathing help with anxiety and panic attacks?",
    answer: "Box breathing may help reduce anxiety symptoms and can be a useful tool during the early stages of a panic attack. Research shows that slow, controlled breathing activates the vagus nerve, which triggers a relaxation response. During anxiety or panic, your breathing becomes fast and shallow (hyperventilation), which worsens symptoms. Box breathing deliberately slows your breath and gives your mind something specific to focus on, which can interrupt the anxiety cycle. However, box breathing is a wellness tool, not a treatment. If you experience frequent anxiety or panic attacks, please consult a qualified mental health professional.",
  },
  {
    question: "Can I use box breathing for sleep?",
    answer: "Yes, box breathing is an excellent tool for calming your mind before sleep. The slow, rhythmic pattern helps reduce racing thoughts and physical tension that can keep you awake. Many people find it helpful to practice box breathing in bed with the lights off. For sleep, you might want to try the 4-4-4-4 or 5-5-5-5 pattern without the ambient sound, and choose the unlimited session option so there is no timer to watch. Focus on the rhythm of your breath rather than trying to fall asleep, and sleep often comes naturally as your body relaxes.",
  },
  {
    question: "Is box breathing the same as meditation?",
    answer: "Box breathing is not the same as meditation, but it shares some principles and can be used as a meditation technique. Traditional meditation typically involves observing thoughts without judgment, while box breathing is a structured breathing exercise with specific timed intervals. However, the focused attention on breathing in box breathing produces a meditative state. A 2023 Stanford study found that structured breathing exercises like box breathing were actually more effective at improving mood and reducing anxiety than traditional mindfulness meditation. Both practices are valuable — they just work in different ways.",
  },
];

export default function BoxBreathingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Box Breathing Exercise",
              description: "A free visual guided box breathing tool with animated square, multiple breathing patterns (3-3-3-3, 4-4-4-4, 5-5-5-5, custom), session timer, cycle counter, and optional ambient sound. Used for anxiety, stress management, and focus.",
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
              { name: "Box Breathing Exercise", url: TOOL_URL },
            ])
          ),
        }}
      />

            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A guided box breathing timer with visual and audio cues that walks you through the 4-4-4-4 breathing technique."
          who="Anyone experiencing stress or anxiety who wants an immediate, evidence-based calming exercise."
          bottomLine="Box breathing activates the parasympathetic nervous system and can reduce acute stress in minutes. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>
      <section className="sr-only">
        <h2>What Is the Box Breathing Exercise?</h2>
        <h2>How Does Box Breathing Work?</h2>
        <h2>What Are the Benefits of Box Breathing?</h2>
      </section>
<BoxBreathingClient faqData={FAQ_DATA} />
    </>
  );
}
