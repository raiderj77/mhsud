import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { MoneySavedClient } from "./MoneySavedClient";

const TOOL_URL = `${SITE_URL}/money-saved-recovery-calculator`;

export const metadata: Metadata = createMetadata({
  path: "/money-saved-recovery-calculator",
  title: "Money Saved in Recovery Calculator",
  description:
    "Calculate how much money you've saved by not drinking or using. Enter your substance, spending, and sober date. Free, private, instant results.",
  keywords: [
    "money saved not drinking calculator", "how much money saved sober",
    "cost of addiction calculator", "savings from quitting drinking",
    "money saved quitting smoking", "recovery savings calculator",
    "sobriety savings", "cost of alcoholism calculator",
    "money saved not using drugs", "financial recovery calculator",
  ],
  openGraph: {
    title: "Money Saved in Recovery Calculator",
    description: "Calculate how much money you've saved by not drinking or using. Free, private, instant results.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "How much does the average person spend on alcohol?", answer: "The average American who drinks regularly spends approximately $150-300 per month on alcohol, according to Bureau of Labor Statistics data. However, spending varies widely based on drinking patterns. Someone having 2-3 drinks per day at home might spend $150-250/month, while someone who frequents bars could easily spend $400-800/month or more. Heavy drinkers often underestimate their spending because costs are spread across many small purchases. This calculator helps you see the cumulative impact of those daily costs." },
  { question: "How much money does a smoker spend per year?", answer: "At current prices of $8-14 per pack, a pack-a-day smoker spends approximately $2,900-$5,100 per year on cigarettes alone. This does not include additional costs associated with smoking such as higher health insurance premiums ($1,500-2,000 more per year), increased healthcare costs, higher life insurance rates, and decreased home resale value. The total economic cost of smoking has been estimated at over $19,000 per year for a pack-a-day smoker when all related expenses are included." },
  { question: "Is this calculator accurate?", answer: "This calculator provides estimates based on the spending amount you enter. The preset averages are based on general population data and published research on substance use costs. Your actual spending may have been higher or lower than these averages. The calculator uses simple multiplication (daily cost times days sober) and does not account for inflation, price changes over time, or spending that might have increased with tolerance. Think of the result as a reasonable estimate rather than an exact figure." },
  { question: "What is the true cost of addiction?", answer: "The financial cost of substance use goes far beyond the direct purchase price. Additional costs include: medical bills and emergency room visits, legal fees (DUI, possession charges), lost wages from missed work or reduced productivity, higher insurance premiums, relationship costs (divorce, therapy), damaged property, and reduced career advancement. The National Institute on Drug Abuse estimates that substance use disorders cost the United States over $600 billion annually in healthcare, crime, and lost productivity. The personal financial cost is often much higher than people realize until they track it." },
  { question: "What can I do with the money I save in recovery?", answer: "Many people in recovery are surprised by how much money they save. Common uses include: building an emergency fund (a critical stability factor in early recovery), paying off debt accumulated during active use, investing in health and wellness (gym membership, therapy, nutrition), saving for meaningful goals (vacation, car, home down payment), investing for retirement, pursuing education or career development, and supporting causes they care about. Financial recovery often parallels emotional recovery — rebuilding financial stability is a concrete measure of progress." },
  { question: "How does substance use affect long-term finances?", answer: "Substance use affects finances far beyond the daily cost of purchasing substances. Research shows that substance use disorders are associated with lower lifetime earnings, higher unemployment rates, increased healthcare utilization, and reduced retirement savings. A 2019 study in the Journal of Studies on Alcohol and Drugs found that heavy alcohol use was associated with a significant reduction in lifetime earnings. Recovery reverses many of these financial impacts over time — improved job performance, fewer sick days, lower healthcare costs, and better financial decision-making all contribute to long-term financial recovery." },
];

export default function MoneySavedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Money Saved in Recovery Calculator",
              description: "A free calculator that estimates how much money you have saved by not using alcohol, cigarettes, or other substances. Includes preset spending averages by substance type, savings projections, and fun comparisons.",
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
              { name: "Money Saved Calculator", url: TOOL_URL },
            ])
          ),
        }}
      />

            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <section className="sr-only">
        <h2>What Is the Recovery Savings Calculator?</h2>
        <h2>How Does the Recovery Savings Calculator Work?</h2>
        <h2>What Do My Recovery Savings Results Mean?</h2>
      </section>
<MoneySavedClient faqData={FAQ_DATA} />
    </>
  );
}
