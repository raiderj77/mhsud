import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { WorkStressClient } from "./WorkStressClient";

const TOOL_URL = `${SITE_URL}/work-stress-check`;

export const metadata: Metadata = createMetadata({
  path: "/work-stress-check",
  title: "Free Work Stress & Burnout Self-Check (Private, Not a Diagnosis)",
  description:
    "Reflect on your work stress and burnout risk with this original 12-question self-check. 100% private, ~3 minutes. Not a clinical tool — for personal reflection only.",
  keywords: [
    "work stress test", "burnout self-check", "job burnout questionnaire",
    "work stress assessment", "burnout risk check", "workplace stress test",
    "am i burned out", "burnout screening", "work exhaustion test",
    "occupational stress check", "work-life balance assessment",
    "work stress symptoms", "burnout reflection tool",
  ],
});

const FAQ_DATA = [
  { question: "Is this a clinical burnout assessment?", answer: "No. This is an original self-reflection tool written from scratch. It is not based on any proprietary or copyrighted scale. It is designed to help you reflect on work stress patterns, not to diagnose burnout or any clinical condition." },
  { question: "What's the difference between work stress and clinical burnout?", answer: "Work stress is a normal response to workplace demands. Clinical burnout is a state of chronic physical and emotional exhaustion, often accompanied by cynicism and reduced professional efficacy. The distinction typically requires professional assessment. This tool can help you notice patterns, but cannot determine where stress ends and burnout begins." },
  { question: "Is my data stored?", answer: "No. All scoring happens in your browser. Your answers are never sent to any server or stored anywhere." },
  { question: "What should I do if my results suggest high stress?", answer: "Consider talking with a healthcare provider, therapist, or counselor — especially if stress is affecting your sleep, health, or relationships. Workplace stress is also worth discussing with a trusted manager or HR department when appropriate." },
  { question: "Can I show these results to my therapist?", answer: "Yes. While this is not a clinical tool, your responses can help start a conversation about how work is affecting your well-being." },
  { question: "How often should I take this?", answer: "Every few weeks can help you notice trends. Work stress fluctuates, so periodic check-ins give a better picture than a single snapshot." },
];

export default function WorkStressPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolPageJsonLd({ name: "Work Stress & Burnout Self-Check", description: "Original 12-question work stress reflection tool. Private, free, not a diagnosis.", url: TOOL_URL, datePublished: "2025-02-01", dateModified: new Date().toISOString().split("T")[0] })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Work Stress & Burnout Self-Check", url: TOOL_URL }])) }} />
      <WorkStressClient faqData={FAQ_DATA} />
    </>
  );
}
