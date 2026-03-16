import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, medicalWebPageJsonLd, SITE_URL } from "@/lib/metadata";
import { OCIRClient } from "./OCIRClient";

const TOOL_URL = `${SITE_URL}/oci-r-ocd-screening`;

export const metadata: Metadata = createMetadata({
  path: "/oci-r-ocd-screening",
  title: "OCI-R OCD Screening Test | Free OCD Self-Check",
  description:
    "Take the free OCI-R OCD screening test. 18 questions, 3 minutes. Validated screener with 6 OCD subscales. Private, instant results.",
  keywords: [
    "oci-r", "ocd test", "ocd screening", "obsessive compulsive test",
    "oci-r test", "ocd self-test", "do i have ocd", "ocd quiz",
    "obsessive compulsive inventory", "ocd screening test", "ocd assessment",
    "oci-r scoring", "ocd symptoms test", "free ocd test online",
    "ocd checklist", "ocd subscales",
  ],
  openGraph: {
    title: "OCI-R OCD Screening Test | Free OCD Self-Check",
    description: "Take the free OCI-R OCD screening test. 18 questions, 3 minutes. Validated screener with 6 OCD subscales.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What is OCD?", answer: "Obsessive-Compulsive Disorder (OCD) is a mental health condition characterized by two core features: obsessions (unwanted, intrusive thoughts, images, or urges that cause significant distress) and compulsions (repetitive behaviors or mental acts performed to reduce the distress caused by obsessions). OCD affects approximately 2-3% of the population and can range from mild to severely disabling. Common obsessions include fears of contamination, doubts about safety, unwanted aggressive or sexual thoughts, and a need for symmetry. Common compulsions include washing, checking, ordering, counting, and mental rituals." },
  { question: "What is the difference between OCD and being organized?", answer: "Being organized, neat, or particular about cleanliness is a personality preference that generally feels positive and enhances daily life. OCD is fundamentally different: it involves unwanted, distressing thoughts (obsessions) that drive repetitive behaviors (compulsions) the person feels unable to stop. People with OCD typically do not enjoy their rituals — they feel compelled to perform them to relieve intense anxiety. The key distinction is distress and impairment: OCD symptoms are unwanted, time-consuming (often more than an hour per day), and interfere with work, relationships, and daily functioning." },
  { question: "What does the OCI-R measure?", answer: "The OCI-R (Obsessive-Compulsive Inventory - Revised) measures the distress caused by common OCD symptoms across six dimensions: Hoarding (difficulty discarding items), Checking (repeatedly verifying things), Ordering (need for symmetry and arrangement), Neutralizing (counting or number rituals), Washing (contamination-related cleaning), and Obsessing (unwanted intrusive thoughts). Each dimension is measured by 3 items, and the total score reflects overall OCD symptom severity. A score of 21 or higher suggests possible OCD and the need for professional evaluation." },
  { question: "What are the subtypes of OCD?", answer: "OCD can manifest in many ways. Common presentations include: Contamination OCD (fear of germs, chemicals, or bodily fluids with washing compulsions), Checking OCD (fear of harm or responsibility with repeated verification), Symmetry/Ordering OCD (need for things to be 'just right' with arranging compulsions), Harm OCD (unwanted intrusive thoughts about causing harm), Pure O (primarily obsessional OCD with mental rather than visible compulsions), and Hoarding (difficulty discarding items due to perceived need or distress). Many people experience symptoms across multiple categories." },
  { question: "What are common approaches for OCD?", answer: "The most well-supported approach for OCD is Exposure and Response Prevention (ERP), a specialized form of cognitive-behavioral therapy. ERP involves gradually confronting situations that trigger obsessions while refraining from performing compulsions, which helps the brain learn that the feared outcomes do not occur or that the distress naturally decreases. Medication, particularly SSRIs, is also commonly used and can be combined with ERP. The International OCD Foundation (IOCDF) maintains a directory of OCD specialists and can be reached at 617-973-5801." },
  { question: "Is the OCI-R a way to confirm OCD?", answer: "No. The OCI-R is a screening instrument that measures the distress caused by OCD-like symptoms. A score of 21 or higher suggests that further evaluation by a qualified mental health professional is warranted, but it does not confirm OCD. Many conditions can produce similar symptoms, including generalized anxiety, depression, ADHD, eating disorders, and body-focused repetitive behaviors. Only a comprehensive clinical evaluation can properly assess whether symptoms meet the criteria for OCD." },
  { question: "Is the OCI-R accurate?", answer: "The OCI-R has been extensively validated and demonstrates good reliability and validity for measuring OCD symptom distress. Research by Foa et al. (2002) showed strong internal consistency and test-retest reliability. The clinical cutoff of 21 provides a reasonable balance between sensitivity (correctly identifying people with OCD) and specificity (correctly identifying people without OCD). However, like all screening tools, it can produce false positives and false negatives, which is why professional evaluation is always recommended following a positive screen." },
];

export default function OCIRPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "OCI-R Obsessive-Compulsive Inventory — OCD Screening Test",
              description: "A free online implementation of the OCI-R (Obsessive-Compulsive Inventory - Revised), a validated 18-item screening tool for OCD symptoms with 6 subscales.",
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
              { name: "OCI-R OCD Screening Test", url: TOOL_URL },
            ])
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            medicalWebPageJsonLd({
              name: "OCI-R Obsessive-Compulsive Inventory — OCD Screening Test",
              description: "A free online implementation of the OCI-R (Obsessive-Compulsive Inventory - Revised), a validated 18-item screening tool for OCD symptoms with 6 subscales.",
              url: TOOL_URL,
              lastReviewed: "2026-03-07",
            })
          ),
        }}
      />

      <section className="sr-only">
        <h2>What Is the OCI-R OCD Screening?</h2>
        <h2>How Is the OCI-R Scored?</h2>
        <h2>What Do My OCI-R Results Mean?</h2>
      </section>
      <OCIRClient faqData={FAQ_DATA} />
    </>
  );
}
