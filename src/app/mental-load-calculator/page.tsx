import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { MentalLoadClient } from "./MentalLoadClient";

const TOOL_URL = `${SITE_URL}/mental-load-calculator`;

export const metadata: Metadata = createMetadata({
  path: "/mental-load-calculator",
  title: "Free Mental Load Calculator — Who Carries the Invisible Work?",
  description:
    "Reflect on how planning, remembering, and organizing tasks are distributed in your household. 100% private, ~3 minutes. A conversation starter — not a clinical tool.",
  keywords: [
    "mental load calculator", "emotional labor assessment", "invisible labor tool",
    "household mental load", "invisible workload check", "cognitive labor quiz",
    "mental load in relationships", "who does more housework", "household task distribution",
    "emotional labor calculator", "planning burden assessment",
  ],
});

const FAQ_DATA = [
  { question: "What is 'mental load'?", answer: "Mental load refers to the invisible cognitive work of managing a household or family — remembering appointments, planning meals, tracking supplies, anticipating needs, coordinating schedules, and noticing what needs to be done. It's the planning and remembering that happens before any task gets executed." },
  { question: "Is this a clinical assessment?", answer: "No. This is a reflection and conversation tool designed to help you identify patterns. It is not based on any clinical scale and cannot diagnose any condition. It's meant to support healthier conversations at home." },
  { question: "Can I use this with my partner?", answer: "Yes — that's one of the best uses. Each person can take it independently, then compare results. The goal is to start a constructive conversation about task distribution, not to assign blame." },
  { question: "Is my data stored?", answer: "No. Everything happens in your browser. Your responses are never sent to any server." },
  { question: "Why does mental load matter for mental health?", answer: "Research suggests that carrying a disproportionate share of cognitive household labor is associated with higher stress, resentment, and burnout — particularly for women and primary caregivers. Recognizing the pattern is often the first step toward more equitable distribution." },
];

export default function MentalLoadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolPageJsonLd({ name: "Mental Load Calculator", description: "Reflect on how planning, remembering, and organizing are distributed in your household.", url: TOOL_URL, datePublished: "2025-02-01", dateModified: new Date().toISOString().split("T")[0] })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Mental Load Calculator", url: TOOL_URL }])) }} />
      <MentalLoadClient faqData={FAQ_DATA} />
    </>
  );
}
