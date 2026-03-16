import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, medicalWebPageJsonLd, SITE_URL } from "@/lib/metadata";
import { ASRSClient } from "./ASRSClient";

const TOOL_URL = `${SITE_URL}/asrs-adhd-screening`;

export const metadata: Metadata = createMetadata({
  path: "/asrs-adhd-screening",
  title: "ASRS Adult ADHD Screening Test",
  description:
    "Take the free ASRS v1.1 adult ADHD screening test. 6 questions, 2 minutes. WHO-developed screener for adult ADHD. Private, instant results.",
  keywords: [
    "asrs", "asrs v1.1", "adhd test adults", "adult adhd screening",
    "adhd self-report scale", "adhd screening test", "adult adhd test",
    "asrs adhd", "adhd questionnaire", "do i have adhd",
    "adhd test online free", "adult adhd self-assessment", "asrs screener",
    "who adhd screening", "adhd checklist adults",
  ],
  openGraph: {
    title: "ASRS Adult ADHD Screening Test",
    description: "Take the free ASRS v1.1 adult ADHD screening test. 6 questions, 2 minutes. WHO-developed screener for adult ADHD.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What is the ASRS v1.1?", answer: "The ASRS v1.1 (Adult ADHD Self-Report Scale) is a 6-item screening tool developed by the World Health Organization (WHO) in collaboration with leading ADHD researchers. It is designed to help identify adults who may have ADHD by asking about common symptoms related to attention, organization, and hyperactivity-impulsivity. The Part A screener is the validated screening version used in clinical and research settings." },
  { question: "What does the ASRS screen for?", answer: "The ASRS screens for symptoms of adult Attention-Deficit/Hyperactivity Disorder (ADHD). The six questions cover core ADHD symptoms including difficulty with organization, trouble completing tasks, problems with memory, procrastination, restlessness, and feeling driven. It is not a diagnostic tool \u2014 it identifies individuals who may benefit from a comprehensive ADHD evaluation." },
  { question: "Can adults develop ADHD?", answer: "ADHD is a neurodevelopmental condition that begins in childhood, but it is often not identified until adulthood. Research suggests that approximately 2.5\u20134% of adults have ADHD. Many adults are not recognized until later in life because their symptoms were misattributed to other causes, masked by coping strategies, or not severe enough to be identified during childhood. The ASRS helps identify adults who may have been living with unrecognized ADHD." },
  { question: "How is the ASRS scored?", answer: "The ASRS uses a unique scoring method based on research-validated thresholds. For questions 1\u20133, responses of \u201cSometimes,\u201d \u201cOften,\u201d or \u201cVery Often\u201d count as positive. For questions 4\u20136, only \u201cOften\u201d or \u201cVery Often\u201d count as positive. If 4 or more of the 6 responses are positive, the screen is considered positive and further evaluation is recommended." },
  { question: "What is the difference between ADHD and normal distraction?", answer: "Everyone experiences occasional difficulty concentrating, disorganization, or restlessness. What distinguishes ADHD is that these symptoms are persistent (present since childhood), pervasive (affecting multiple areas of life such as work, relationships, and daily functioning), and significantly impairing. The ASRS helps identify when these experiences may exceed normal variation and warrant professional evaluation." },
  { question: "What should I do after a positive ASRS screen?", answer: "A positive screen means that your symptom pattern is consistent with adult ADHD and that a comprehensive evaluation by a qualified professional is recommended. This typically involves a detailed clinical interview, developmental history, and assessment of how symptoms affect your daily life. Your primary care provider can be a good starting point, or you can seek a specialist in adult ADHD. A positive screen does not confirm ADHD \u2014 it identifies the need for further evaluation." },
  { question: "Is the ASRS accurate?", answer: "The ASRS v1.1 Part A has been extensively validated in research studies and has demonstrated good sensitivity and specificity for identifying adult ADHD. However, no screening tool is perfect. It can produce false positives (flagging ADHD when another condition is responsible) and false negatives (missing ADHD in some individuals). This is why a positive screen should always be followed by a comprehensive professional evaluation." },
];

export default function ASRSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "ASRS v1.1 Adult ADHD Screening Test",
              description: "A free online implementation of the ASRS v1.1 (Adult ADHD Self-Report Scale), a WHO-developed 6-item screening tool for adult ADHD.",
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
              { name: "ASRS ADHD Screening Test", url: TOOL_URL },
            ])
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            medicalWebPageJsonLd({
              name: "ASRS v1.1 Adult ADHD Screening Test",
              description: "A free online implementation of the ASRS v1.1 (Adult ADHD Self-Report Scale), a WHO-developed 6-item screening tool for adult ADHD.",
              url: TOOL_URL,
              lastReviewed: "2026-03-07",
            })
          ),
        }}
      />

      <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <section className="sr-only">
        <h2>What Is the ASRS ADHD Screening?</h2>
        <h2>How Is the ASRS Scored?</h2>
        <h2>What Do My ASRS Results Mean?</h2>
      </section>
      <ASRSClient faqData={FAQ_DATA} />
    </>
  );
}
