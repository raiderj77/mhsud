import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { SleepMoodClient } from "./SleepMoodClient";

const TOOL_URL = `${SITE_URL}/sleep-and-mood-check`;

export const metadata: Metadata = createMetadata({
  path: "/sleep-and-mood-check",
  title: "Free Sleep & Mood Reflection Tool (Private, Not a Diagnosis)",
  description:
    "Reflect on how your sleep quality, duration, and habits relate to your mood and energy. 10 questions, ~2 minutes, 100% private. Not a diagnosis tool.",
  keywords: [
    "sleep and mood tracker", "sleep quality check", "insomnia self-check",
    "sleep habits and mental health", "sleep mood connection", "sleep assessment",
    "am i sleeping enough", "sleep quality quiz", "sleep and anxiety",
    "sleep and depression", "sleep reflection tool", "sleep hygiene check",
  ],
});

const FAQ_DATA = [
  { question: "Is this a sleep disorder diagnostic tool?", answer: "No. This is a self-reflection tool that helps you think about patterns in your sleep and mood. It cannot diagnose insomnia, sleep apnea, or any other sleep disorder. If you suspect a sleep disorder, please consult a healthcare provider." },
  { question: "How are sleep and mood connected?", answer: "Research consistently shows a bidirectional relationship between sleep and mental health. Poor sleep can worsen anxiety and depression, while anxiety and depression can disrupt sleep. This tool helps you notice whether these patterns may be present in your life." },
  { question: "Is my data stored?", answer: "No. All processing happens in your browser. Your responses are never sent to any server." },
  { question: "How much sleep do I need?", answer: "Most adults need 7-9 hours per night, though individual needs vary. This tool doesn't prescribe a specific amount — it asks about your experience of sleep quality, daytime energy, and mood to help you reflect on whether your current sleep pattern is working for you." },
  { question: "What if my results suggest problems?", answer: "Consider talking with your healthcare provider about your sleep. Good sleep hygiene practices can help many people, but persistent sleep problems often benefit from professional assessment to rule out underlying causes." },
];

export default function SleepMoodPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolPageJsonLd({ name: "Sleep & Mood Reflection Tool", description: "Original 10-question tool to reflect on sleep quality, duration, and mood impact.", url: TOOL_URL, datePublished: "2025-02-01", dateModified: new Date().toISOString().split("T")[0] })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Sleep & Mood Reflection", url: TOOL_URL }])) }} />
      <SleepMoodClient faqData={FAQ_DATA} />
    </>
  );
}
