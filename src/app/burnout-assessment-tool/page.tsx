import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { BurnoutClient } from "./BurnoutClient";

const TOOL_URL = `${SITE_URL}/burnout-assessment-tool`;

export const metadata: Metadata = createMetadata({
  path: "/burnout-assessment-tool",
  title: "Burnout Assessment Tool | Free Professional Self-Check",
  description: "Take our free, clinically-informed burnout screening tool. Assess emotional exhaustion, depersonalization, and reduced personal accomplishment with immediate results and guidance.",
  keywords: [
    "burnout assessment", "burnout test", "emotional exhaustion", "work burnout", 
    "professional burnout", "mental health screening", "stress assessment", "burnout symptoms",
    "burnout questionnaire", "workplace stress", "occupational burnout", "burnout scale",
    "burnout screening", "job burnout", "caregiver burnout", "teacher burnout",
    "healthcare burnout", "burnout recovery", "burnout prevention", "burnout symptoms test"
  ],
  openGraph: {
    title: "Burnout Assessment Tool — Free Professional Self-Check",
    description: "Take our free, clinically-informed burnout screening tool. Assess emotional exhaustion, depersonalization, and reduced personal accomplishment.",
    url: TOOL_URL,
    type: "website",
  },
});

const faqData = [
  {
    question: "What is burnout?",
    answer: "Burnout is a state of emotional, physical, and mental exhaustion caused by excessive and prolonged stress. It often occurs when you feel overwhelmed, emotionally drained, and unable to meet constant demands. The three main dimensions are emotional exhaustion, depersonalization (cynicism), and reduced personal accomplishment.",
  },
  {
    question: "Is this tool a clinical diagnosis?",
    answer: "No. This tool is a self-assessment screening instrument based on established burnout research. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical or mental health condition.",
  },
  {
    question: "How accurate is this burnout assessment?",
    answer: "This tool is based on clinically-informed questions that assess the three core dimensions of burnout. While it provides valuable insight into your current experience, it is not a diagnostic tool. For a formal assessment, please consult with a healthcare professional.",
  },
  {
    question: "What should I do if my results suggest high burnout?",
    answer: "If your results suggest high levels of burnout, consider reaching out to a healthcare professional, counselor, or employee assistance program. Burnout is treatable, and early intervention can prevent more serious health consequences. Practical steps include setting boundaries, practicing self-care, seeking social support, and considering workplace adjustments.",
  },
  {
    question: "How often should I take this assessment?",
    answer: "You can take this assessment whenever you feel it might be helpful. Some people find it useful to check in monthly or quarterly, especially during periods of high stress or workload. Tracking changes over time can help you recognize patterns and take proactive steps.",
  },
  {
    question: "Are my results private?",
    answer: "Yes. This tool runs entirely in your browser. No data is sent to any server, and no results are stored. Your privacy is protected, and you can feel comfortable answering honestly.",
  },
];

export default function BurnoutAssessmentPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Burnout Assessment Tool",
              description: "Free, clinically-informed burnout screening tool assessing emotional exhaustion, depersonalization, and reduced personal accomplishment. Immediate results with guidance.",
              url: TOOL_URL,
              datePublished: "2025-02-25",
              dateModified: "2025-02-25",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(faqData)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "Tools", url: `${SITE_URL}/tools` },
              { name: "Burnout Assessment Tool", url: TOOL_URL },
            ])
          ),
        }}
      />
      <BurnoutClient faqData={faqData} />
    </>
  );
}