import type { Metadata } from "next";
import { createMetadata, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  path: "/crisis-resources",
  title: "Crisis Resources — Immediate Help for Mental Health & Substance Use",
  description:
    "If you or someone you know is in crisis, help is available now. Free, confidential crisis hotlines and resources for mental health emergencies, suicidal thoughts, substance use, and more.",
  keywords: [
    "crisis hotline", "mental health crisis", "suicide prevention hotline",
    "988 lifeline", "crisis text line", "substance abuse helpline",
    "international crisis resources", "mental health emergency",
    "self-harm help", "alcohol crisis help", "drug crisis help",
  ],
});

const US_RESOURCES = [
  {
    name: "988 Suicide & Crisis Lifeline",
    contact: "Call or text 988",
    detail: "24/7, free, confidential support for people in suicidal crisis or emotional distress. Also available for concerned friends and family.",
    hours: "24/7",
    color: "border-crisis-300 dark:border-crisis-700 bg-crisis-50/50 dark:bg-crisis-950/20",
    accent: "text-crisis-700 dark:text-crisis-400",
  },
  {
    name: "Crisis Text Line",
    contact: "Text HOME to 741741",
    detail: "Free, 24/7 crisis support via text message. Trained crisis counselors respond to texts about any type of crisis.",
    hours: "24/7",
    color: "border-warm-300 dark:border-warm-700 bg-warm-50/50 dark:bg-warm-950/20",
    accent: "text-warm-700 dark:text-warm-400",
  },
  {
    name: "SAMHSA National Helpline",
    contact: "1-800-662-4357",
    detail: "Free, confidential, 24/7 treatment referral and information service for substance use disorders and mental health. Available in English and Spanish.",
    hours: "24/7",
    color: "border-sage-300 dark:border-sage-700 bg-sage-50/50 dark:bg-sage-950/20",
    accent: "text-sage-700 dark:text-sage-400",
  },
  {
    name: "Veterans Crisis Line",
    contact: "Call 988, then press 1",
    detail: "Specialized crisis support for veterans, service members, and their families. Also available by text (838255).",
    hours: "24/7",
    color: "border-sage-300 dark:border-sage-700 bg-sage-50/50 dark:bg-sage-950/20",
    accent: "text-sage-700 dark:text-sage-400",
  },
  {
    name: "Trevor Project (LGBTQ+ Youth)",
    contact: "1-866-488-7386",
    detail: "Crisis intervention and suicide prevention for LGBTQ+ young people ages 13-24. Also available by text (text START to 678-678) and online chat.",
    hours: "24/7",
    color: "border-sage-300 dark:border-sage-700 bg-sage-50/50 dark:bg-sage-950/20",
    accent: "text-sage-700 dark:text-sage-400",
  },
  {
    name: "National Domestic Violence Hotline",
    contact: "1-800-799-7233",
    detail: "Support for anyone affected by domestic violence. Trained advocates offer confidential support, safety planning, and referrals.",
    hours: "24/7",
    color: "border-sand-300 dark:border-neutral-600 bg-sand-50/50 dark:bg-night-700/50",
    accent: "text-neutral-700 dark:text-neutral-300",
  },
  {
    name: "Poison Control / Overdose",
    contact: "1-800-222-1222",
    detail: "Immediate guidance for poisoning or suspected overdose emergencies. Staffed by toxicology experts.",
    hours: "24/7",
    color: "border-sand-300 dark:border-neutral-600 bg-sand-50/50 dark:bg-night-700/50",
    accent: "text-neutral-700 dark:text-neutral-300",
  },
];

const INTL_RESOURCES = [
  { country: "International", name: "Find A Helpline", contact: "findahelpline.com", detail: "Search engine for crisis hotlines in your country and language" },
  { country: "United Kingdom", name: "Samaritans", contact: "116 123", detail: "Free, 24/7 emotional support" },
  { country: "Canada", name: "988 Suicide Crisis Helpline", contact: "Call or text 988", detail: "24/7 crisis support in English and French" },
  { country: "Australia", name: "Lifeline Australia", contact: "13 11 14", detail: "24/7 crisis support and suicide prevention" },
  { country: "New Zealand", name: "Lifeline NZ", contact: "0800 543 354", detail: "24/7 counseling and support" },
  { country: "Ireland", name: "Samaritans Ireland", contact: "116 123", detail: "Free, 24/7 emotional support" },
  { country: "India", name: "iCall / AASRA", contact: "9820466726", detail: "Psychosocial helpline" },
  { country: "South Africa", name: "SADAG", contact: "0800 567 567", detail: "South African Depression and Anxiety Group" },
];

export default function CrisisResourcesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Crisis Resources", url: `${SITE_URL}/crisis-resources` }])) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Crisis Resources
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            If you or someone you know is in immediate danger, call your local emergency number (911 in the US). The resources below offer free, confidential support for mental health crises, suicidal thoughts, substance use emergencies, and more.
          </p>
        </header>

        {/* Immediate danger callout */}
        <div className="bg-crisis-50 dark:bg-crisis-950/30 border-2 border-crisis-300 dark:border-crisis-800 rounded-2xl p-6 sm:p-8 mb-10">
          <div className="flex gap-3 items-start">
            <span className="text-2xl">🚨</span>
            <div>
              <h2 className="font-serif text-xl font-semibold text-crisis-800 dark:text-crisis-300 mb-2">In immediate danger?</h2>
              <p className="text-sm text-crisis-700 dark:text-crisis-400 leading-relaxed mb-2">
                If you or someone near you is in immediate physical danger — from self-harm, overdose, violence, or a medical emergency — <strong>call your local emergency number now</strong> (911 in the US, 999 in the UK, 112 in the EU, 000 in Australia).
              </p>
              <p className="text-sm text-crisis-700 dark:text-crisis-400 leading-relaxed">
                Emergency services can dispatch help to your location. You do not need to handle a crisis alone.
              </p>
            </div>
          </div>
        </div>

        {/* US Resources */}
        <section className="mb-12">
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-6">
            United States
          </h2>
          <div className="space-y-3">
            {US_RESOURCES.map((r) => (
              <div key={r.name} className={`rounded-xl border-2 p-5 ${r.color}`}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <h3 className={`font-semibold ${r.accent}`}>{r.name}</h3>
                  <span className={`text-sm font-bold ${r.accent} whitespace-nowrap`}>{r.contact}</span>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{r.detail}</p>
                <span className="inline-block mt-2 text-xs text-neutral-400 dark:text-neutral-500">{r.hours}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Types of support */}
        <section className="mb-12">
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-6">
            Understanding types of support
          </h2>
          <div className="space-y-4">
            <div className="card p-5">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Crisis hotlines</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                For immediate crisis situations — suicidal thoughts, active self-harm, panic, or acute emotional distress. Staffed by trained crisis counselors available 24/7.
              </p>
            </div>
            <div className="card p-5">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Warm lines</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                For non-emergency emotional support — when you&apos;re struggling but not in immediate danger. Think of these as a step before crisis. Hours vary by provider. Search &quot;warm line&quot; + your state for local options.
              </p>
            </div>
            <div className="card p-5">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Treatment referral lines</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                For help finding a therapist, treatment program, or support group. SAMHSA&apos;s helpline (1-800-662-4357) is the primary US resource and can connect you with local services, including those that accept Medicaid or offer sliding-scale fees.
              </p>
            </div>
            <div className="card p-5">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Emergency rooms</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                When there is immediate physical danger — overdose, severe withdrawal symptoms, active suicidal behavior, or any situation where someone&apos;s life may be at risk. ERs are equipped for medical stabilization.
              </p>
            </div>
          </div>
        </section>

        {/* International */}
        <section className="mb-12">
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-6">
            International Resources
          </h2>
          <div className="space-y-2">
            {INTL_RESOURCES.map((r) => (
              <div key={r.country + r.name} className="card p-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 w-28 flex-shrink-0 uppercase tracking-wide">{r.country}</span>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">{r.name}</span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400"> — {r.detail}</span>
                </div>
                <span className="text-sm font-bold text-sage-600 dark:text-sage-400 whitespace-nowrap">{r.contact}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-neutral-400 dark:text-neutral-500 mt-4 leading-relaxed">
            This is not a comprehensive list. For crisis resources in your specific country and language, visit <strong>findahelpline.com</strong> — a search engine for crisis lines worldwide.
          </p>
        </section>

        {/* Helping someone else */}
        <section className="mb-12">
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            If you&apos;re worried about someone else
          </h2>
          <div className="prose-mh">
            <p>
              If someone you care about is in crisis, you don&apos;t need to be a trained professional to help. Listening without judgment, staying calm, and helping them connect with professional support can make a real difference.
            </p>
            <p>
              You can call any of the crisis lines above on behalf of someone else to get guidance on how to help. The 988 Lifeline, for example, specifically welcomes calls from concerned family and friends.
            </p>
            <p>
              If you believe someone is in immediate physical danger, do not hesitate to call emergency services. It is better to overreact than to wait.
            </p>
          </div>
        </section>

        {/* Footer note */}
        <div className="border-t border-sand-200 dark:border-neutral-700 pt-6 text-center">
          <p className="text-xs text-neutral-400 dark:text-neutral-500 leading-relaxed">
            This page is for informational purposes only. MindCheck Tools is not a crisis service and cannot provide emergency support. If you are in danger, please contact emergency services or a crisis hotline directly.
          </p>
          <p className="text-xs text-neutral-400 dark:text-neutral-500 leading-relaxed mt-2">
            Resource information is believed to be accurate as of the date of publication. If you notice outdated information, please contact us at hello@mindchecktools.com.
          </p>
        </div>
      </div>
    </>
  );
}
