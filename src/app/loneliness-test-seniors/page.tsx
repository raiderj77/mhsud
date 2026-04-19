import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { UCLAClient } from "../ucla-loneliness-scale/UCLAClient";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";

const TOOL_URL = `${SITE_URL}/loneliness-test-seniors`;

export const metadata: Metadata = createMetadata({
  path: "/loneliness-test-seniors",
  title: "Loneliness Test for Seniors — Free Assessment",
  description:
    "Free loneliness assessment for older adults using the UCLA scale. Private, instant results.",
  keywords: [
    "loneliness test seniors", "elderly loneliness screening", "senior loneliness assessment",
    "ucla loneliness scale elderly", "older adult isolation test", "senior isolation screening",
    "loneliness quiz for seniors", "elderly social isolation test", "am i lonely senior",
    "older adult loneliness", "retirement loneliness test", "senior mental health screening",
    "elderly loneliness assessment", "social isolation older adults", "free loneliness test seniors",
  ],
  openGraph: {
    title: "Loneliness Test for Seniors — Free Assessment",
    description: "Free, private loneliness assessment for older adults using the UCLA Loneliness Scale. Instant results, no signup required.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "Is loneliness a real health problem for seniors?",
    answer: "Yes. Loneliness and social isolation are recognized as serious public health concerns for older adults. Research shows that prolonged loneliness increases the risk of heart disease, stroke, dementia, depression, and premature death. The U.S. Surgeon General has called loneliness an epidemic with health consequences comparable to smoking 15 cigarettes a day.",
  },
  {
    question: "How common is loneliness among older adults?",
    answer: "Approximately 25% of adults aged 65 and older are considered socially isolated, and up to 43% of older adults report feeling lonely on a regular basis. These numbers increased significantly during the COVID-19 pandemic and have not fully returned to pre-pandemic levels. Loneliness can affect anyone regardless of living situation — even people in assisted living or with nearby family.",
  },
  {
    question: "Is there a connection between loneliness and physical illness?",
    answer: "Yes. Research consistently links chronic loneliness to increased inflammation, weakened immune function, higher blood pressure, increased risk of heart disease, and accelerated cognitive decline. Socially isolated older adults have a 50% increased risk of developing dementia and a 29% increased risk of heart disease. Loneliness is not just an emotional issue — it is a medical one.",
  },
  {
    question: "How is loneliness different from depression?",
    answer: "Loneliness is the distress caused by a gap between desired and actual social connection. Depression is a clinical mood disorder involving persistent sadness, loss of interest, and other symptoms. They frequently overlap — loneliness is a risk factor for depression, and depression can increase social withdrawal, creating a cycle. However, they are distinct conditions and may require different approaches.",
  },
  {
    question: "How can seniors combat loneliness?",
    answer: "Start with small, consistent social contacts rather than trying to build an entire social life at once. Options include senior centers, faith communities, volunteer work, phone or video calls with family, walking groups, classes at community colleges, and intergenerational programs. Even brief daily interactions — chatting with a neighbor, calling a friend — can significantly reduce loneliness.",
  },
  {
    question: "Are there community programs that help with senior loneliness?",
    answer: "Yes. Area Agencies on Aging offer social programs, meal delivery with wellness checks, and transportation services. Many communities have senior centers, friendly visitor programs, and telephone reassurance programs. The Eldercare Locator (1-800-677-1116) can connect you with local resources. AARP also offers community connection programs in many areas.",
  },
  {
    question: "Can technology help reduce loneliness in older adults?",
    answer: "Technology can be a valuable tool for maintaining connections, especially for seniors with mobility limitations. Video calls, social media, online communities, and even simple phone calls help maintain relationships. However, technology works best as a supplement to — not a replacement for — in-person interaction. Many libraries and senior centers offer free technology training.",
  },
  {
    question: "Should I talk to my doctor about loneliness?",
    answer: "Yes. Healthcare providers increasingly screen for social isolation because of its significant health impacts. Your doctor can assess whether loneliness is contributing to other health issues, screen for related depression, and connect you with community resources. There is no shame in discussing loneliness — it is a health concern, not a personal failure.",
  },
];

export default function LonelinessTestSeniorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Loneliness Test for Seniors — Free Assessment",
              description: "A free, private loneliness assessment tool for older adults using the UCLA Loneliness Scale.",
              url: TOOL_URL,
              datePublished: "2026-03-05",
              dateModified: "2026-03-05",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "UCLA Loneliness Scale", url: `${SITE_URL}/ucla-loneliness-scale` },
              { name: "Loneliness Test for Seniors", url: TOOL_URL },
            ])
          ),
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">
            Clinically Validated (UCLA Scale)
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
            Older Adults 60+
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Loneliness Test for Seniors
        </h1>

        {/* Warm Empathetic Intro */}
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            The house used to be full of noise — conversations, laughter, the everyday sounds
            of a life shared with others. Now the silence has a weight to it. Maybe you lost
            a spouse and the evenings feel endless. Maybe your children moved far away and
            phone calls, however well-meaning, cannot fill the space. Maybe your friends have
            passed on one by one, and the world you built your life around has quietly
            disappeared. You&apos;re not being ungrateful or weak. You&apos;re experiencing
            something millions of older adults face, and it deserves attention.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Loneliness is not just an emotion — it is a health condition as serious as smoking
            or obesity. Research shows it increases the risk of heart disease, dementia, and
            depression. This free, private assessment uses the <strong>UCLA Loneliness
            Scale</strong>, a trusted tool used by researchers and healthcare providers
            worldwide. It is <strong>not a diagnosis</strong>, but it can help you understand
            what you&apos;re experiencing and find the right support.
          </p>
        </div>

        {/* Prominent CTA */}
        <div className="mb-10">
          <a
            href="#screening"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-amber-600 text-white font-semibold text-base hover:bg-amber-700 transition-colors shadow-sm"
          >
            Start the Loneliness Assessment
          </a>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Takes about 5 minutes. Completely private — nothing is stored or shared.
          </p>
        </div>

        {/* Why This Matters */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Why This Matters
          </h2>
          <div className="grid gap-4">
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-amber-700 dark:text-amber-300 mb-1">25% socially isolated</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Approximately one in four adults aged 65 and older is considered socially
                isolated. Up to 43% of older adults report feeling lonely regularly.
                <span className="text-slate-500 dark:text-slate-400"> — National Academies of Sciences</span>
              </p>
            </div>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-amber-700 dark:text-amber-300 mb-1">15 cigarettes a day</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                The health impact of chronic loneliness has been compared to smoking 15
                cigarettes a day. Social isolation increases the risk of premature death by 26%.
                <span className="text-slate-500 dark:text-slate-400"> — U.S. Surgeon General</span>
              </p>
            </div>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-amber-700 dark:text-amber-300 mb-1">50% higher dementia risk</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Socially isolated older adults face a 50% increased risk of developing dementia
                and a 29% increased risk of heart disease. Connection is not optional — it is
                essential for health.
                <span className="text-slate-500 dark:text-slate-400"> — CDC</span>
              </p>
            </div>
          </div>
        </div>

        {/* What To Expect */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            What To Expect
          </h2>
          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-5">
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                This assessment uses the <strong>UCLA Loneliness Scale</strong>, a widely
                researched tool that measures subjective feelings of loneliness and social
                isolation.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Retirement transition:</strong> Retirement removes a major source of daily social interaction, structure, and identity. Many people are unprepared for how isolating this transition can be, even when they looked forward to it. Building new routines and social connections takes intentional effort.</p>
                <p><strong>Loss of spouse and friends:</strong> Grief and loneliness often overlap but are distinct experiences. Losing a life partner changes every aspect of daily life. As friends pass away or become less mobile, the social network that once sustained you shrinks in ways that are difficult to rebuild.</p>
                <p><strong>Mobility limitations:</strong> Physical health challenges can make it harder to leave home, drive, or participate in activities you once enjoyed. Transportation barriers are one of the most common — and most solvable — contributors to senior isolation.</p>
                <p><strong>Technology and connection:</strong> Video calls, social media, and online communities can supplement in-person interaction, especially for those with limited mobility. Many libraries and senior centers offer free technology classes designed specifically for older adults.</p>
                <p><strong>Community programs:</strong> Senior centers, faith communities, volunteer programs, Meals on Wheels, and friendly visitor services all provide opportunities for meaningful connection. The Eldercare Locator (1-800-677-1116) can help you find local resources.</p>
                <p><strong>Your privacy:</strong> Everything happens in your browser. Nothing is stored, transmitted, or visible to anyone — not your family, not your doctor, not anyone.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Screening Tool */}
      <div id="screening">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
            Take the UCLA Loneliness Assessment
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Answer each question based on how you&apos;ve been feeling recently.
          </p>
        </div>
              <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A loneliness assessment adapted for older adults that measures social isolation and its impact on health and wellbeing."
          who="Seniors or their family members who are concerned about social isolation and its health effects."
          bottomLine="Loneliness in older adults is a serious health risk comparable to smoking — connection is medicine. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <AuthorByline publishedDate="2025-01-01" modifiedDate="2026-03-20" />
      </div>

      <section className="sr-only">
        <h2>What Is the Senior Loneliness Screening?</h2>
        <h2>How Is the Loneliness Test Scored?</h2>
        <h2>What Do My Loneliness Screening Results Mean?</h2>
      </section>
<UCLAClient faqData={FAQ_DATA} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        {/* Next Steps */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Your Next Steps
          </h2>
          <div className="space-y-4">
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Call the Eldercare Locator</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>1-800-677-1116</strong> — a free service that connects older adults with
                local resources including senior centers, meal programs, transportation services,
                and social activities. They can help you find what&apos;s available in your
                community. Available Monday through Friday, 9 a.m. to 8 p.m. ET.
              </p>
            </div>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Explore AARP Community Connections</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>AARP</strong> offers community connection programs, volunteer opportunities,
                and local events designed to bring older adults together. Even starting with one
                weekly activity — a walking group, a book club, a volunteer shift — can make
                a meaningful difference.
              </p>
            </div>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk to your doctor</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Mention loneliness at your next appointment. Healthcare providers increasingly
                recognize social isolation as a health risk factor and can screen for related
                depression, connect you with community resources, and help address mobility
                or transportation barriers that contribute to isolation.
              </p>
            </div>
          </div>
        </div>

        {/* Crisis Resources */}
        <div className="bg-crisis-50 dark:bg-crisis-950/30 border border-crisis-200 dark:border-crisis-800 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
            Crisis Resources
          </h2>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li>
              <strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong> — free, 24/7, confidential
            </li>
            <li>
              <strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> — free referrals, 24/7
            </li>
            <li>
              <strong>Eldercare Locator:</strong> <strong>1-800-677-1116</strong> — connects older adults with local services and support
            </li>
          </ul>
        </div>

        {/* Clinical Disclaimer */}
        <div className="mb-6">
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            This assessment tool is for educational purposes only — it is not a diagnosis. Only a qualified
            healthcare professional can assess loneliness-related health conditions. Your responses are
            processed entirely in your browser and are never stored or transmitted. Always consult a
            qualified healthcare professional for medical advice.
          </p>
        </div>

        {/* Author Bio */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Reviewed by a Certified Drug and Alcohol Counselor (CADC-II).
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Last reviewed: March 2026
          </p>
        </div>

        {/* Internal Links */}
        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/ucla-loneliness-scale" className="text-sky-600 dark:text-sky-400 hover:underline">
            UCLA Loneliness Scale →
          </Link>
          <Link href="/depression-test-for-seniors" className="text-sky-600 dark:text-sky-400 hover:underline">
            Depression Test for Seniors →
          </Link>
          <Link href="/athens-insomnia-scale" className="text-sky-600 dark:text-sky-400 hover:underline">
            Athens Insomnia Scale →
          </Link>
        </div>
      </div>
    </>
  );
}
