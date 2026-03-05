import Link from "next/link";
import { FooterCookieButton } from "./FooterCookieButton";

/* ─── Categorized tool links for footer ─── */
const SCREENING_TOOLS = [
  { heading: "Depression & Mood", links: [
    { href: "/phq-9-depression-test", label: "PHQ-9 Depression" },
    { href: "/ces-d-depression-scale", label: "CES-D Depression Scale" },
    { href: "/dass-21-depression-anxiety-stress", label: "DASS-21" },
    { href: "/k6-distress-scale", label: "K6 Distress Scale" },
    { href: "/who-5-wellbeing-index", label: "WHO-5 Well-Being" },
  ]},
  { heading: "Anxiety", links: [
    { href: "/gad-7-anxiety-test", label: "GAD-7 Anxiety" },
    { href: "/spin-social-anxiety-test", label: "SPIN Social Anxiety" },
  ]},
  { heading: "PTSD & Trauma", links: [
    { href: "/pcl-5-ptsd-screening", label: "PCL-5 PTSD" },
    { href: "/pc-ptsd-5-screening", label: "PC-PTSD-5" },
    { href: "/ace-questionnaire", label: "ACE Questionnaire" },
  ]},
  { heading: "Substance Use", links: [
    { href: "/audit-alcohol-test", label: "AUDIT Alcohol" },
    { href: "/audit-c-alcohol-screen", label: "AUDIT-C Quick Screen" },
    { href: "/dast-10-drug-screening", label: "DAST-10 Drug Screen" },
    { href: "/cage-aid-substance-abuse-screening", label: "CAGE-AID" },
    { href: "/who-assist-substance-screening", label: "WHO ASSIST" },
    { href: "/crafft-substance-screening", label: "CRAFFT (Teens)" },
  ]},
  { heading: "Other Conditions", links: [
    { href: "/asrs-adhd-screening", label: "ASRS ADHD" },
    { href: "/mdq-bipolar-screening", label: "MDQ Bipolar" },
    { href: "/oci-r-ocd-screening", label: "OCI-R OCD" },
    { href: "/scoff-eating-disorder-screening", label: "SCOFF Eating Disorder" },
    { href: "/aq-10-autism-screening", label: "AQ-10 Autism" },
  ]},
];

const WELLNESS_TOOLS = [
  { href: "/holmes-rahe-stress-inventory", label: "Holmes-Rahe Stress" },
  { href: "/burnout-assessment-tool", label: "Burnout Assessment" },
  { href: "/rosenberg-self-esteem-scale", label: "Self-Esteem Scale" },
  { href: "/ucla-loneliness-scale", label: "UCLA Loneliness" },
  { href: "/athens-insomnia-scale", label: "Athens Insomnia" },
  { href: "/brief-resilience-scale", label: "Brief Resilience" },
  { href: "/work-stress-check", label: "Work Stress Check" },
  { href: "/sleep-and-mood-check", label: "Sleep & Mood" },
  { href: "/mental-load-calculator", label: "Mental Load" },
  { href: "/box-breathing-exercise", label: "Box Breathing" },
  { href: "/five-senses-grounding", label: "5-4-3-2-1 Grounding" },
  { href: "/cognitive-distortion-identifier", label: "Thought Patterns" },
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

const TARGETED_LINKS = [
  { href: "/depression-test-for-teens", label: "Depression: Teens" },
  { href: "/anxiety-test-for-women", label: "Anxiety: Women" },
  { href: "/alcohol-screening-for-college-students", label: "Alcohol: College" },
  { href: "/burnout-test-for-nurses", label: "Burnout: Nurses" },
  { href: "/depression-screening-for-veterans", label: "Depression: Veterans" },
];

const INFO_LINKS = [
  { href: "/blog", label: "Blog & Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/cookies", label: "Cookie Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/accessibility", label: "Accessibility" },
];

export function Footer() {
  return (
    <footer className="border-t border-sand-200 dark:border-neutral-800 bg-sand-100 dark:bg-night-950 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Top section: Brand + columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10">

          {/* Brand column */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sage-400 to-sage-600 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="font-serif font-bold text-neutral-800 dark:text-neutral-100">MindCheck Tools</span>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-5">
              Free, private mental health self-checks. Your answers never leave your browser.
            </p>

            {/* Resources links */}
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">Resources</h4>
            <ul className="space-y-1.5">
              {INFO_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-sage-600 dark:hover:text-sage-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Screening Tools column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">Screening Tools</h4>
            <div className="space-y-4">
              {SCREENING_TOOLS.map((group) => (
                <div key={group.heading}>
                  <p className="text-xs font-semibold text-sage-600 dark:text-sage-400 mb-1.5">{group.heading}</p>
                  <ul className="space-y-1">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-sage-600 dark:hover:text-sage-400 transition-colors">
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
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">Stress &amp; Well-Being</h4>
            <ul className="space-y-1.5">
              {WELLNESS_TOOLS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-sage-600 dark:hover:text-sage-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Targeted Screenings */}
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2 mt-6">Targeted Screenings</h4>
            <ul className="space-y-1.5">
              {TARGETED_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-sage-600 dark:hover:text-sage-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recovery Tools column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">Recovery Tools</h4>
            <ul className="space-y-1.5">
              {RECOVERY_TOOLS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-sage-600 dark:hover:text-sage-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Crisis Resources */}
        <div className="border-t border-amber-200 dark:border-amber-800 pt-6 mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-3 text-center">
            Crisis Resources
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="text-center p-3 bg-amber-50 dark:bg-amber-900/30 rounded-lg">
              <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                988 Suicide &amp; Crisis Lifeline
              </p>
              <p className="text-xs text-amber-600 dark:text-amber-300">
                Call or text 988 &bull; 24/7 free &amp; confidential support
              </p>
            </div>
            <div className="text-center p-3 bg-amber-50 dark:bg-amber-900/30 rounded-lg">
              <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                SAMHSA National Helpline
              </p>
              <p className="text-xs text-amber-600 dark:text-amber-300">
                1-800-662-4357 &bull; Treatment referral &amp; information
              </p>
            </div>
          </div>
          <p className="text-xs text-amber-600 dark:text-amber-400 text-center mt-3">
            <Link href="/crisis-resources" className="hover:text-amber-800 dark:hover:text-amber-200 underline">
              View all crisis resources and international helplines &rarr;
            </Link>
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-sand-200 dark:border-neutral-800 pt-6">
          <p className="text-xs text-neutral-400 dark:text-neutral-500 leading-relaxed text-center max-w-2xl mx-auto">
            All tools on this site are for educational and self-reflection purposes only. They are not a diagnosis, medical advice, or treatment recommendation. Always consult a qualified healthcare professional for mental health concerns. Your responses are processed entirely in your browser and are never stored or transmitted.
          </p>
          <p className="text-xs text-neutral-400 dark:text-neutral-500 text-center mt-3">
            &copy; {new Date().getFullYear()} MindCheck Tools. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-3">
            <FooterCookieButton />
            <span className="text-neutral-300 dark:text-neutral-700">&middot;</span>
            <Link href="/terms#do-not-sell" className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-sage-600 dark:hover:text-sage-400 transition-colors">
              Do Not Sell or Share My Personal Information
            </Link>
          </div>
          {/* Sister Sites */}
          <p className="text-xs text-neutral-400 dark:text-neutral-500 text-center mt-4">
            More Free Tools:{" "}
            <a href="https://fibertools.app" className="hover:text-sage-600 dark:hover:text-sage-400 transition-colors">FiberTools</a>
            {" · "}
            <a href="https://creatorrevenuecalculator.com" className="hover:text-sage-600 dark:hover:text-sage-400 transition-colors">Creator Revenue Calculator</a>
            {" · "}
            <a href="https://flipmycase.com" className="hover:text-sage-600 dark:hover:text-sage-400 transition-colors">FlipMyCase</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
