import type { Metadata } from "next";
import { createMetadata, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { CookieSettingsButton } from "./CookieSettingsButton";

export const metadata: Metadata = createMetadata({
  path: "/cookies",
  title: "Cookie & Browser Storage Policy",
  description:
    "How MindCheck Tools uses browser-local storage, Global Privacy Control, and privacy-safe aggregate analytics.",
});

export default function CookiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "Cookie & Browser Storage Policy", url: `${SITE_URL}/cookies` },
            ]),
          ),
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Cookie &amp; Browser Storage Policy
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Last reviewed: August 28, 2026
          </p>
        </header>

        <div className="prose-mh space-y-8">
          <section>
            <h2>The short version</h2>
            <p>
              MindCheck Tools does not use Google Analytics, Google AdSense, or display-advertising cookies. Screening answers and scores are processed in your browser and are not intentionally sent to analytics. Some tools deliberately use browser-local storage so a plan, journal, check-in, or preference can remain on your device.
            </p>
          </section>

          <section>
            <h2>Browser-local storage</h2>
            <p>
              The site uses <strong>localStorage</strong> for the light/dark theme preference and for tools that explicitly say they save information in the browser. Examples include the safety plan, CBT thought record, worry-time scheduler, daily recovery check-in, and sobriety calculator.
            </p>
            <p>
              Browser-local records remain available to the same browser profile until you use the tool&apos;s delete/reset control, clear site data, or the browser removes them. Someone with access to the same browser profile may be able to view them. Screenshots, downloads, device backups, browser extensions, and other software are outside the application&apos;s browser-local storage boundary.
            </p>
          </section>

          <section>
            <h2>Aggregate analytics</h2>
            <p>
              MindCheck Tools uses Vercel Web Analytics only on a fixed allowlist of topic-neutral and professional pages. The application does not send custom screening events, answers, scores, severity labels, crisis states, recovery entries, or journal content to that analytics service. Query strings and URL fragments are excluded from the analytics path, and analytics is suppressed when Global Privacy Control is active.
            </p>
            <p>
              Vercel Web Analytics is configured as cookie-free aggregate measurement. Ordinary hosting requests are separate from Web Analytics and may create infrastructure records as described in the Privacy Policy.
            </p>
          </section>

          <section>
            <h2>Global Privacy Control</h2>
            <p>
              When a browser sends the Global Privacy Control request header, MindCheck Tools middleware may set a small first-party <code>empire_gpc=1</code> cookie so the browser-side application can continue honoring that signal. It does not contain screening answers, scores, or health-tool entries.
            </p>
          </section>

          <section id="browser-controls">
            <h2>Your browser controls</h2>
            <p>
              You can clear MindCheck Tools site data through your browser&apos;s privacy or site-data settings. Clearing site data can also remove browser-local plans, journals, check-ins, theme preferences, and other information you intentionally saved on this device.
            </p>
            <CookieSettingsButton />
          </section>

          <section>
            <h2>No display advertising</h2>
            <p>
              MindCheck Tools does not use display advertising. The application does not load Google AdSense, advertising pixels, retargeting scripts, or an advertising consent runtime.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
