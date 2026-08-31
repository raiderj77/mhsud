import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  path: "/accessibility",
  title: "Accessibility Statement",
  description:
    "Our commitment to making free mental health self-checks usable by everyone, including people with disabilities.",
  keywords: [
    "accessibility statement", "web accessibility", "WCAG accessibility",
    "accessible mental health tools", "screen reader compatible",
  ],
});

export default function AccessibilityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Accessibility Statement", url: `${SITE_URL}/accessibility` }])) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">Accessibility Statement</h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Last updated: August 30, 2026</p>
        </header>

        <div className="prose-mh space-y-8">
          <section>
            <h2>Our commitment</h2>
            <p>
              MindCheck Tools is committed to making our mental health self-check tools accessible to everyone, including people with disabilities. We believe that mental health screening should be available to all people regardless of ability, and we work to ensure our site meets recognized accessibility standards.
            </p>
            <p>
              We recognize that people may be using our tools during difficult moments, and accessibility barriers should never stand between someone and the support they need.
            </p>
          </section>

          <section>
            <h2>Standards we follow</h2>
            <p>
              We aim to conform to the <strong>Web Content Accessibility Guidelines (WCAG) 2.2 Level AA</strong> standard. WCAG is developed by the World Wide Web Consortium (W3C). This is an ongoing target, not a claim that every page has completed manual conformance testing.
            </p>
          </section>

          <section>
            <h2>What we&apos;ve done</h2>
            <p>
              We have taken the following steps to support accessibility across our site:
            </p>
            <p>
              <strong>Semantic HTML:</strong> Our pages use proper heading hierarchy (h1 through h4), landmark regions (nav, main, footer), and meaningful link text to support screen readers and assistive technology.
            </p>
            <p>
              <strong>Keyboard navigation:</strong> Tool questions, buttons, toggles, and navigation are designed for keyboard use. You can use Tab to move between controls and Enter or Space to activate applicable controls. Please report any keyboard barrier you encounter.
            </p>
            <p>
              <strong>Color contrast:</strong> Our design targets WCAG AA contrast ratios in light and dark modes. We test changes and treat any reported contrast failure as an accessibility defect.
            </p>
            <p>
              <strong>Dark mode:</strong> A system-aware dark mode is available to reduce eye strain and improve readability in low-light conditions. You can toggle it manually using the theme button in the navigation bar.
            </p>
            <p>
              <strong>Responsive design:</strong> Our site is designed for mobile through desktop layouts without requiring horizontal scrolling in core flows.
            </p>
            <p>
              <strong>No time limits:</strong> Our screening tools have no time limits. You can take as long as you need to complete any questionnaire.
            </p>
            <p>
              <strong>Clear language:</strong> We write screening results and educational content in plain language, avoiding unnecessary jargon. Where clinical terms are used (such as &quot;PHQ-9&quot; or &quot;GAD-7&quot;), we provide explanations.
            </p>
            <p>
              <strong>Focus management:</strong> When you complete a screening tool, focus is moved to the results section so screen readers announce your score and interpretation immediately.
            </p>
            <p>
              <strong>ARIA attributes:</strong> We use ARIA roles, labels, states, and live regions where native HTML semantics are insufficient, including tool progress and status feedback.
            </p>
            <p>
              <strong>Motion and media:</strong> The site does not intentionally auto-play audio or video. Interface motion should respect reduced-motion preferences and must not delay crisis or safety information.
            </p>
          </section>

          <section>
            <h2>Known limitations</h2>
            <p>
              While we strive for full accessibility, we are aware of the following limitations:
            </p>
            <p>
              <strong>No display advertising:</strong> MindCheck Tools does not display ads or load advertising networks. This does not establish that every page or interaction meets accessibility standards; please report barriers through the contact options below.
            </p>
            <p>
              <strong>External links:</strong> Our <Link href="/crisis-resources">crisis resources page</Link> links to external hotlines and organizations. We cannot control the accessibility of those external websites, though we link only to established, reputable services.
            </p>
            <p>
              <strong>Older browsers:</strong> Some accessibility features may not function fully in browsers that do not support modern CSS and JavaScript standards. We recommend using a current version of Chrome, Firefox, Safari, or Edge.
            </p>
          </section>

          <section>
            <h2>Assistive technology compatibility</h2>
            <p>
              Our site is designed to work with common assistive technologies including:
            </p>
            <p>
              Screen readers (such as NVDA, JAWS, VoiceOver, and TalkBack), screen magnifiers, speech recognition software, and keyboard-only navigation. If you encounter difficulties using our site with assistive technology, please let us know.
            </p>
          </section>

          <section>
            <h2>Feedback and contact</h2>
            <p>
              We take accessibility seriously and want to hear from you if you encounter any barriers while using our site. If you have difficulty accessing any part of MindCheck Tools, or if you have suggestions for improvement, please contact us:
            </p>
            <p>
              <strong>Email:</strong> accessibility@mindchecktools.com
            </p>
            <p>
              When reporting an issue, it is helpful (but not required) to include: the page URL where you experienced the issue, a description of what happened, the assistive technology or browser you were using, and what you expected to happen. We aim to respond to accessibility feedback within 5 business days and to resolve issues as quickly as possible.
            </p>
          </section>

          <section>
            <h2>Ongoing efforts</h2>
            <p>
              Accessibility is not a one-time project, it is an ongoing practice. We are committed to:
            </p>
            <p>
              Expanding manual screen-reader and keyboard testing of core flows. Reviewing new content and features before deployment. Monitoring WCAG guidance. Responding promptly to accessibility feedback from users.
            </p>
          </section>

          <section>
            <h2>Formal complaints</h2>
            <p>
              If you believe that MindCheck Tools has not adequately addressed an accessibility concern, you have the right to file a complaint with the appropriate regulatory body in your jurisdiction. In the United States, you may contact the Department of Justice, Civil Rights Division, at <strong>ada.gov</strong>. In the European Union, you may contact your national equality body or ombudsman.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
