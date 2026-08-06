import Link from "next/link";
import { FooterCookieButton } from "./FooterCookieButton";

/* ─── Categorized tool links for footer ─── */
const SCREENING_TOOLS = [
  { heading: "Depression & Mood", links: [
    { href: "/phq-9-depression-test", label: "PHQ-9 Depression" },
    { href: "/ces-d-depression-scale", label: "CES-D Depression Scale" },
    { href: "/dass-21-depression-anxiety-stress", label: "DASS-21 Information" },
    { href: "/k6-distress-scale", label: "K6 Distress Scale" },
    { href: "/who-5-wellbeing-index", label: "WHO-5 Well-Being" },
  ]},
  { heading: "Anxiety", links: [
    { href: "/gad-7-anxiety-test", label: "GAD-7 Anxiety" },
    { href: "/spin-social-anxiety-test", label: "SPIN Information" },
  ]},
  { heading: "PTSD & Trauma", links: [
    { href: "/pcl-5-ptsd-screening", label: "PCL-5 PTSD" },
    { href: "/pc-ptsd-5-screening", label: "PC-PTSD-5" },
    { href: "/ace-questionnaire", label: "ACE Information" },
  ]},
  { heading: "Substance Use", links: [
    { href: "/audit-alcohol-test", label: "AUDIT Alcohol" },
    { href: "/audit-c-alcohol-screen", label: "AUDIT-C Quick Screen" },
    { href: "/cage-aid-substance-abuse-screening", label: "CAGE-AID Information" },
    { href: "/who-assist-substance-screening", label: "WHO ASSIST Information" },
    { href: "/crafft-substance-screening", label: "CRAFFT Information" },
  ]},
  { heading: "Other Conditions", links: [
    { href: "/asrs-adhd-screening", label: "ASRS ADHD" },
    { href: "/scoff-eating-disorder-screening", label: "SCOFF Information" },
    { href: "/aq-10-autism-screening", label: "AQ-10 Information" },
    { href: "/msi-bpd-screening", label: "MSI-BPD Information" },
  ]},
];

const WELLNESS_TOOLS = [
  { href: "/holmes-rahe-stress-inventory", label: "Holmes-Rahe Information" },
  { href: "/burnout-assessment-tool", label: "Burnout Assessment" },
  { href: "/rosenberg-self-esteem-scale", label: "Self-Esteem Scale" },
  { href: "/ucla-loneliness-scale", label: "UCLA Information" },
  { href: "/athens-insomnia-scale", label: "Athens Information" },
  { href: "/brief-resilience-scale", label: "Resilience Information" },
  { href: "/work-stress-check", label: "Work Stress Check" },
  { href: "/sleep-and-mood-check", label: "Sleep & Mood" },
  { href: "/mental-load-calculator", label: "Mental Load" },
  { href: "/box-breathing-exercise", label: "Box Breathing" },
  { href: "/five-senses-grounding", label: "5-4-3-2-1 Grounding" },
  { href: "/cognitive-distortion-identifier", label: "Thought Patterns" },
  { href: "/safety-plan", label: "Safety Plan" },
  { href: "/cbt-thought-record", label: "Thought Record" },
  { href: "/worry-time-scheduler", label: "Worry Time Scheduler" },
  { href: "/values-card-sort", label: "Values Card Sort" },
  { href: "/dbt-crisis-skills", label: "DBT Crisis Skills" },
  { href: "/attachment-style-quiz", label: "ECR-R Information" },
  { href: "/big-five-personality-test", label: "Big Five Personality" },
];

const RECOVERY_TOOLS = [
  { href: "/sobriety-calculator", label: "Sobriety Calculator" },
  { href: "/money-saved-recovery-calculator", label: "Money Saved" },
  { href: "/health-recovery-timeline", label: "Health Timeline" },
  { href: "/bac-calculator", label: "BAC Calculator" },
  { href: "/standard-drinks-calculator", label: "Standard Drinks" },
  { href: "/halt-check-in", label: "HALT Check-In" },
  { href: "/withdrawal-timeline", label: "Withdrawal Timeline" },
  { href: "/treatment-cost-estimator", label: "Treatment Costs" },
  { href: "/relapse-prevention-plan", label: "Prevention Plan" },
  { href: "/urge-surfing-timer", label: "Urge Surfing Timer" },
  { href: "/readiness-to-change", label: "Readiness to Change" },
  { href: "/trigger-identification-worksheet", label: "Trigger Worksheet" },
  { href: "/coping-skills-randomizer", label: "Coping Skills" },
  { href: "/daily-recovery-check-in", label: "Daily Check-In" },
  { href: "/family-impact-assessment", label: "Family Impact" },
];

const INFO_LINKS = [
  { href: "/screening-tools", label: "All Tools & Information" },
  { href: "/about", label: "About" },
  { href: "/clinical-evidence", label: "Clinical Evidence" },
  { href: "/methodology", label: "Methodology" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/consumer-health-data-privacy", label: "Consumer Health Data Privacy" },
  { href: "/cookies", label: "Cookie Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/accessibility", label: "Accessibility" },
  { href: "/disclaimer", label: "Disclaimer" },
];

const FOOTER_LINK_CLASS =
  "inline-flex min-h-[44px] min-w-[44px] items-center text-sm text-neutral-500 dark:text-neutral-400 hover:text-sage-600 dark:hover:text-sage-400 transition-colors";

const SISTER_SITE_LINK_CLASS =
  "inline-flex min-h-[44px] items-center rounded-lg px-2 text-sm text-neutral-600 dark:text-neutral-300 hover:bg-sand-200 dark:hover:bg-night-800 hover:text-sage-600 dark:hover:text-sage-400 transition-colors";

export function Footer() {
  return (
    <footer className="no-print border-t border-sand-200 dark:border-neutral-800 bg-sand-100 dark:bg-night-950 mt-20">
      {/* 988 Crisis Lifeline Banner */}
      <div className="bg-crisis-50 dark:bg-crisis-950/40 border-b border-crisis-200 dark:border-crisis-800 py-3 px-4 text-center">
        <p className="text-base text-crisis-700 dark:text-crisis-300">
          If you or someone you know is in crisis, call or text{" "}
          <strong className="font-semibold">988</strong> (Suicide &amp; Crisis Lifeline) or visit{" "}
          <a
            href="https://988lifeline.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold hover:text-crisis-900 dark:hover:text-crisis-100 transition-colors"
          >
            988lifeline.org
          </a>
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Top section: Brand + columns */}
        <nav aria-label="Footer navigation" className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10">
          <h2 className="sr-only">Footer navigation</h2>

          {/* Brand column */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sage-400 to-sage-600 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="font-serif font-bold text-neutral-800 dark:text-neutral-100">MindCheck Tools</span>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-5">
              Private mental health self-checks, calculators, and rights-aware instrument information. Interactive answers are processed in your browser and are not sent to us; information-only pages ask no assessment questions.
            </p>

            {/* Resources links */}
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">Resources</h3>
            <ul>
              {INFO_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={FOOTER_LINK_CLASS}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Screening Tools column */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">Screening &amp; Instrument Information</h3>
            <div className="space-y-4">
              {SCREENING_TOOLS.map((group) => (
                <div key={group.heading}>
                  <h4 className="text-xs font-semibold text-sage-600 dark:text-sage-400 mb-1.5">{group.heading}</h4>
                  <ul>
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className={FOOTER_LINK_CLASS}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Wellness & Stress column */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">Stress &amp; Well-Being</h3>
            <ul>
              {WELLNESS_TOOLS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={FOOTER_LINK_CLASS}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Recovery Tools column */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">Recovery Tools</h3>
            <ul>
              {RECOVERY_TOOLS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={FOOTER_LINK_CLASS}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Crisis Resources */}
        <div className="border-t border-amber-200 dark:border-amber-800 pt-6 mb-6">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-3 text-center">
            Crisis Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <a href="tel:988" className="block min-h-[44px] text-center p-3 bg-amber-50 dark:bg-amber-900/30 rounded-lg hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-colors">
              <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                988 Suicide &amp; Crisis Lifeline
              </p>
              <p className="text-sm text-amber-700 dark:text-amber-300">
                Call or text 988 &bull; 24/7 free &amp; confidential support
              </p>
            </a>
            <a href="sms:741741" className="block min-h-[44px] text-center p-3 bg-amber-50 dark:bg-amber-900/30 rounded-lg hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-colors">
              <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                Crisis Text Line
              </p>
              <p className="text-sm text-amber-700 dark:text-amber-300">
                Text HOME to 741741 &bull; 24/7 crisis support
              </p>
            </a>
            <a href="tel:1-800-662-4357" className="block min-h-[44px] text-center p-3 bg-amber-50 dark:bg-amber-900/30 rounded-lg hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-colors">
              <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                SAMHSA National Helpline
              </p>
              <p className="text-sm text-amber-700 dark:text-amber-300">
                1-800-662-4357 &bull; Treatment referral &amp; information
              </p>
            </a>
          </div>
          <p className="text-xs text-amber-700 dark:text-amber-400 text-center mt-3">
            <Link href="/crisis-resources" className="inline-flex min-h-[44px] items-center hover:text-amber-800 dark:hover:text-amber-200 underline">
              View all crisis resources and international helplines &rarr;
            </Link>
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-sand-200 dark:border-neutral-800 pt-6">
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed text-center max-w-2xl mx-auto">
            Interactive self-checks and instrument-information pages are educational and are not a substitute for professional medical or mental health advice. Always consult a qualified healthcare provider or licensed mental health professional regarding any mental health concerns. Interactive answers are processed in your browser and are not sent to MindCheck Tools. Information-only pages ask no assessment questions and produce no score or result. Features that save information on your device say so before use.
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed text-center max-w-2xl mx-auto mt-2">
            If you are in crisis, call or text <strong>988</strong> (Suicide &amp; Crisis Lifeline), available 24/7.
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center mt-3">
            Advertising is currently disabled. &middot; &copy; {new Date().getFullYear()} MindCheck Tools. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-3">
            <FooterCookieButton />
            <span className="text-neutral-300 dark:text-neutral-700">&middot;</span>
            <Link href="/terms#do-not-sell" className="inline-flex min-h-[44px] items-center text-xs text-neutral-500 dark:text-neutral-400 hover:text-sage-600 dark:hover:text-sage-400 transition-colors">
              Do Not Sell or Share My Personal Information
            </Link>
          </div>
          {/* Sister Sites */}
          <nav aria-label="More free tools" className="mt-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">More Free Tools</p>
            <ul className="mt-2 flex flex-wrap items-center justify-center gap-1">
              <li><a href="https://fibertools.app" className={SISTER_SITE_LINK_CLASS}>FiberTools</a></li>
              <li><a href="https://flipmycase.com" className={SISTER_SITE_LINK_CLASS}>FlipMyCase</a></li>
              <li><a href="https://creatorrevenuecalculator.com" className={SISTER_SITE_LINK_CLASS}>Creator Revenue Calculator</a></li>
              <li><a href="https://contractextract.com" className={SISTER_SITE_LINK_CLASS}>ContractExtract</a></li>
              <li><a href="https://medicalbillreader.com" className={SISTER_SITE_LINK_CLASS}>Medical Bill Reader</a></li>
              <li><a href="https://taxbreaktools.com" className={SISTER_SITE_LINK_CLASS}>TaxBreakTools</a></li>
              <li><a href="https://524tracker.com" className={SISTER_SITE_LINK_CLASS}>524Tracker</a></li>
              <li><a href="https://aibusinessalternative.com" className={SISTER_SITE_LINK_CLASS}>AI Business Alternative</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
