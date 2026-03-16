import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { CopingSkillsClient } from "./CopingSkillsClient";

const TOOL_URL = `${SITE_URL}/coping-skills-randomizer`;

export const metadata: Metadata = createMetadata({
  path: "/coping-skills-randomizer",
  title: "Coping Skills Randomizer | What To Do Instead",
  description:
    "Get a random healthy coping skill when you are struggling. 51 evidence-based skills across 6 categories: physical, social, creative, mindfulness, cognitive, sensory. Free and private.",
  keywords: [
    "coping skills for addiction", "healthy coping strategies",
    "what to do instead of using", "coping skills list",
    "addiction coping skills", "recovery coping tools",
    "coping skills randomizer", "healthy alternatives to using",
    "substance abuse coping skills", "coping strategies for cravings",
    "random coping skill generator", "coping toolkit recovery",
  ],
  openGraph: {
    title: "Coping Skills Randomizer | What To Do Instead",
    description: "51 healthy coping skills across 6 categories. Hit the button, get a random skill with instructions. Free and private.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What are coping skills?", answer: "Coping skills are healthy actions, behaviors, and techniques you can use to manage difficult emotions, stress, and cravings without turning to substances. They work by interrupting the craving cycle, redirecting your attention, changing your physical state, or helping you process emotions in a constructive way. Effective coping skills are the foundation of long-term recovery — they replace the role that substances used to play in managing your inner experience. The more coping skills you have in your toolkit, the better prepared you are for different types of challenges." },
  { question: "Why are the skills organized into six categories?", answer: "Different situations call for different types of coping. Physical skills work best when you have nervous energy or physical tension. Social skills help when you are feeling isolated or lonely. Creative skills provide distraction and a sense of accomplishment. Mindfulness skills help you observe cravings without acting on them. Cognitive skills help you challenge unhelpful thinking patterns. Sensory skills use your five senses to ground you in the present moment. By having skills across all six categories, you are prepared for any type of trigger or craving — because what works when you are angry may not work when you are bored." },
  { question: "How do I know which coping skill to use?", answer: "Start by noticing what you are feeling. If you are physically agitated, try a physical skill. If you feel lonely, try a social skill. If your mind is racing, try a mindfulness or cognitive skill. If you are overwhelmed, try a sensory skill to ground yourself quickly. Over time, you will learn which skills work best for you in specific situations. This tool helps you discover new skills you may not have tried. The randomizer is especially useful when you are in a craving and cannot think clearly — just press the button and try whatever comes up." },
  { question: "Do I need to use the skill exactly as described?", answer: "No. The instructions are suggestions to get you started. Adapt each skill to your situation, environment, and abilities. If the tool suggests going for a walk but it is late at night, walk around your apartment instead. If it suggests calling a friend but no one answers, leave a voice message or text. The goal is to do something — anything — other than act on the craving. Imperfect action is always better than perfect inaction. Many people also combine skills: go for a walk (physical) while listening to music (sensory) and calling a friend (social)." },
  { question: "What if the coping skill does not work?", answer: "Try another one. Not every skill works every time, and that is normal. If one skill does not reduce your craving, press the button again and try something different. Cravings typically peak within 15 to 30 minutes, so even if a skill only partially helps, it is buying you time. If you find that no skills are working and cravings are overwhelming, this is a sign to reach out for support — call your sponsor, therapist, or the SAMHSA helpline (1-800-662-4357). Persistent, intense cravings that do not respond to coping skills may indicate that your level of support needs adjustment." },
  { question: "How do I build a personal coping toolkit?", answer: "Start by trying many different skills — that is what this randomizer is for. As you discover skills that work well for you, mark them as favorites. Aim to have at least 3 to 5 go-to skills that you know work. Write them down and keep the list somewhere accessible — on your phone, in your wallet, on your fridge. Practice your top skills when you are not in crisis so they become automatic. Include at least one skill from each category so you are prepared for different situations. Review and update your toolkit regularly, and add your coping skills to your relapse prevention plan." },
];

export default function CopingSkillsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Coping Skills Randomizer",
              description: "A free tool that suggests random healthy coping skills when you are struggling. 51 evidence-based skills across 6 categories: Physical, Social, Creative, Mindfulness, Cognitive, and Sensory. Includes instructions for each skill, category filtering, and favorites.",
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
              { name: "Coping Skills Randomizer", url: TOOL_URL },
            ])
          ),
        }}
      />

            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <section className="sr-only">
        <h2>What Is the Coping Skills Randomizer?</h2>
        <h2>How Does the Coping Skills Randomizer Work?</h2>
        <h2>What Are Evidence-Based Coping Skills?</h2>
      </section>
<CopingSkillsClient faqData={FAQ_DATA} />
    </>
  );
}
