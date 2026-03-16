import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { TreatmentCostClient } from "./TreatmentCostClient";

const TOOL_URL = `${SITE_URL}/treatment-cost-estimator`;

export const metadata: Metadata = createMetadata({
  path: "/treatment-cost-estimator",
  title: "Treatment Cost Estimator — Rehab Costs",
  description:
    "Estimate the cost of addiction treatment: outpatient, IOP, residential rehab, detox, MAT, sober living. Includes insurance and financial aid info. Free, no signup.",
  keywords: [
    "how much does rehab cost", "drug treatment cost",
    "addiction treatment cost estimator", "rehab cost estimator",
    "inpatient rehab cost", "outpatient treatment cost",
    "cost of drug rehab", "substance abuse treatment cost",
    "detox cost", "sober living cost",
    "how to pay for rehab", "does insurance cover rehab",
  ],
  openGraph: {
    title: "Treatment Cost Estimator — Rehab Costs",
    description: "See estimated costs for addiction treatment by type: outpatient, IOP, residential, detox, MAT, and sober living. Insurance and financial aid info included.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "How much does rehab cost without insurance?", answer: "Without insurance, substance abuse treatment costs vary widely by type and location. Outpatient counseling typically runs $100-200 per session. Intensive Outpatient Programs (IOP) cost $3,000-10,000 for an 8-12 week program. Residential inpatient treatment ranges from $10,000-30,000 for 30 days, $20,000-60,000 for 60 days, and $30,000-90,000 for 90 days. Medical detox costs $1,000-5,000 for 3-10 days. These are general national estimates — costs vary significantly by location, facility type (luxury vs. standard), and services included. Many facilities offer sliding scale fees, payment plans, and scholarships for those without insurance." },
  { question: "Does insurance cover addiction treatment?", answer: "Yes, most insurance plans are required to cover substance abuse treatment under the Mental Health Parity and Addiction Equity Act (MHPAEA). This federal law requires that insurance coverage for mental health and substance use disorders be no more restrictive than coverage for medical conditions. This applies to most employer-sponsored plans, Marketplace (ACA) plans, Medicaid, and Medicare. Coverage typically includes detox, inpatient rehabilitation, outpatient counseling, and Medication-Assisted Treatment (MAT). However, plans vary in what they cover and how much you will pay out of pocket (deductibles, copays, coinsurance). Call the number on your insurance card and ask specifically about substance use disorder benefits." },
  { question: "How can I pay for rehab if I have no money or insurance?", answer: "There are several options for people who cannot afford treatment. State-funded treatment programs provide free or low-cost care — contact your state's substance abuse agency or call SAMHSA at 1-800-662-4357. Medicaid covers substance abuse treatment in all states and has expanded eligibility under the ACA. Many treatment facilities offer sliding scale fees based on income. Some nonprofits and foundations offer treatment scholarships. The Salvation Army and some faith-based organizations offer free residential programs. SAMHSA's treatment locator (findtreatment.gov) can help you find affordable options near you." },
  { question: "What is included in the cost of residential rehab?", answer: "Residential (inpatient) treatment typically includes 24/7 supervised care, a room and meals, individual therapy sessions, group therapy and process groups, medical monitoring, psychiatric evaluation, medication management if needed, recreational activities, family programming, and discharge planning. Higher-cost facilities may include amenities like private rooms, specialized therapies (equine, art, adventure), executive accommodations, gourmet meals, and fitness facilities. The quality of clinical care does not necessarily correlate with price — many standard facilities provide excellent evidence-based treatment at lower cost points." },
  { question: "What are the different levels of addiction treatment?", answer: "The American Society of Addiction Medicine (ASAM) defines levels of care from least to most intensive. Level 0.5 is Early Intervention. Level 1 is Outpatient Services (less than 9 hours per week). Level 2.1 is Intensive Outpatient (IOP, 9-19 hours per week). Level 2.5 is Partial Hospitalization (PHP, 20+ hours per week). Level 3.1 is Clinically Managed Low-Intensity Residential. Level 3.5 is Clinically Managed High-Intensity Residential. Level 3.7 is Medically Monitored Intensive Inpatient. Level 4 is Medically Managed Intensive Inpatient. The appropriate level depends on the severity of the substance use disorder, co-occurring conditions, recovery environment, and other factors assessed by a professional." },
  { question: "Is Medication-Assisted Treatment (MAT) expensive?", answer: "MAT costs vary by medication. Buprenorphine/naloxone (Suboxone) typically costs $200-600 per month without insurance, including the medication and required office visits. Methadone costs $100-400 per month through a licensed clinic. Naltrexone injection (Vivitrol) costs $1,000-1,500 per month for the injection alone. However, most insurance plans cover MAT, and many clinics offer sliding scale fees. Compared to the cost of active addiction — and compared to other treatment modalities — MAT is generally the most cost-effective long-term approach. Research consistently shows MAT produces the best outcomes for opioid use disorder." },
];

export default function TreatmentCostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Treatment Cost Estimator",
              description: "A free informational tool that provides estimated cost ranges for different types of substance abuse treatment including outpatient, IOP, residential rehab, medical detox, MAT, and sober living. Includes insurance coverage information and financial assistance options.",
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
              { name: "Treatment Cost Estimator", url: TOOL_URL },
            ])
          ),
        }}
      />

      <section className="sr-only">
        <h2>What Is the Treatment Cost Estimator?</h2>
        <h2>How Does the Treatment Cost Estimator Work?</h2>
        <h2>What Do My Treatment Cost Results Mean?</h2>
      </section>

      <TreatmentCostClient faqData={FAQ_DATA} />
    </>
  );
}
