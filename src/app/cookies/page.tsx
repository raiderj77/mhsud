import type { Metadata } from "next";
import { createMetadata, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { CookieSettingsButton } from "./CookieSettingsButton";

export const metadata: Metadata = createMetadata({
  path: "/cookies",
  title: "Cookie Policy, What Cookies We Use and Why",
  description:
    "MindCheck Tools cookie and browser-storage policy: Global Privacy Control, local tool storage, privacy-safe aggregate analytics, and no display advertising.",
  keywords: [
    "cookie policy", "browser storage", "privacy controls",
    "GDPR cookie compliance", "CCPA cookie disclosure",
  ],
});

const COOKIE_TABLE = [
  {
    category: "Essential",
    consent: "Not required",
    cookies: [
      { name: "mh-theme", purpose: "Stores your light/dark mode preference", duration: "Persistent (localStorage)", provider: "MindCheck Tools" },
      { name: "empire_gpc", purpose: "Remembers a Global Privacy Control signal so optional services stay off", duration: "30 days (cookie)", provider: "MindCheck Tools" },
    ],
  },
  {
    category: "Browser storage (not cookies)",
    consent: "Tool choice",
    cookies: [
      { name: "mct-safety-plan, mct-thought-records, mct-worry-*", purpose: "Keeps a safety plan, optionally saved thought records, or a worry log available in this browser", duration: "Until reset or site data is cleared", provider: "MindCheck Tools" },
      { name: "mct-recovery-checkins, mindcheck_sobriety_*", purpose: "Keeps recovery check-ins, sobriety date, and optional spending estimate in this browser", duration: "Until reset or site data is cleared", provider: "MindCheck Tools" },
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Cookie Policy", url: `${SITE_URL}/cookies` }])) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">Cookie Policy</h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Last updated: August 28, 2026 (no-display-advertising policy)</p>
        </header>

        <div className="prose-mh space-y-8">
          <section>
            <h2>What are cookies?</h2>
            <p>
              Cookies are small text files placed on your device by websites you visit. They can remember preferences or help measure site use. Some cookies are &quot;first-party&quot; (set by the site you&apos;re visiting) and some are &quot;third-party&quot; (set by other services). MindCheck Tools does not display ads or load advertising networks.
            </p>
          </section>

          <section>
            <h2>How we use cookies</h2>
            <p>
              MindCheck Tools uses a minimal number of cookies. Importantly, <strong>cookies are never used to track, store, or access your screening responses</strong>. All questionnaire scoring happens in client-side JavaScript and no answer data is ever transmitted.
            </p>
            <p>
              LocalStorage is browser storage, not a cookie. The safety plan, CBT thought record,
              worry-time scheduler, daily recovery check-in, and sobriety calculator use it only
              after you choose to enter or save tool data. That information stays available to the
              browser profile until you reset the tool or clear site data, and other users of the
              same browser profile may be able to see it.
            </p>
            <p>
              MindCheck Tools does not use Google Analytics or display advertising. Cookie-free Vercel Web Analytics is described separately below because it does not set a browser cookie.
            </p>
          </section>

          <section>
            <h2>Cookies we use</h2>
            <div className="not-prose space-y-6">
              {COOKIE_TABLE.map((cat) => (
                <div key={cat.category}>
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-100">{cat.category}</h3>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${cat.consent === "Not required" ? "bg-sage-50 dark:bg-sage-950/30 text-sage-600 dark:text-sage-400" : "bg-warm-50 dark:bg-warm-950/30 text-warm-600 dark:text-warm-400"}`}>
                      Consent: {cat.consent}
                    </span>
                  </div>
                  <div
                    className="overflow-x-auto"
                    role="region"
                    aria-label={`${cat.category} cookie details`}
                    tabIndex={0}
                  >
                    <table className="w-full text-sm border border-sand-200 dark:border-neutral-700 rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-sand-100 dark:bg-night-700">
                          <th className="text-left p-3 font-semibold text-neutral-700 dark:text-neutral-200">Cookie</th>
                          <th className="text-left p-3 font-semibold text-neutral-700 dark:text-neutral-200">Purpose</th>
                          <th className="text-left p-3 font-semibold text-neutral-700 dark:text-neutral-200">Duration</th>
                          <th className="text-left p-3 font-semibold text-neutral-700 dark:text-neutral-200">Provider</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cat.cookies.map((c) => (
                          <tr key={c.name} className="border-t border-sand-200 dark:border-neutral-700">
                            <td className="p-3 font-mono text-xs text-neutral-600 dark:text-neutral-300">{c.name}</td>
                            <td className="p-3 text-neutral-500 dark:text-neutral-400">{c.purpose}</td>
                            <td className="p-3 text-neutral-500 dark:text-neutral-400">{c.duration}</td>
                            <td className="p-3 text-neutral-500 dark:text-neutral-400">{c.provider}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>Managing your preferences</h2>
            <p>
              You can clear cookies and local storage through your browser settings. Each persistent local tool also provides an appropriate reset or delete control.
            </p>
            <div className="not-prose mt-4">
              <CookieSettingsButton />
            </div>
          </section>

          <section>
            <h2>Google Analytics and advertising</h2>
            <p>MindCheck Tools does not use Google Analytics, Google Consent Mode, or display advertising. There is no analytics or advertising consent cookie.</p>
          </section>

          <section>
            <h2>Cookie-free aggregate measurement</h2>
            <p>
              Vercel Web Analytics counts aggregate visitors and page views without setting cookies. It runs only on a fixed allowlist of topic-neutral trust, policy, professional, and commercial pages. Assessment, result, crisis, condition-specific, blog-detail, and interactive-tool routes are excluded.
            </p>
            <p>
              The implementation removes query strings and fragments, sends no custom events, and suppresses events when Global Privacy Control is active. Vercel documents that it determines a visitor with a request-derived hash that resets after 24 hours. Because this service does not place a cookie, it is not listed in the cookie table above.
            </p>
          </section>

          <section>
            <h2>Your rights</h2>
            <p>
              <strong>If you are in the European Economic Area (EEA) or United Kingdom:</strong> MindCheck Tools does not place Google Analytics or advertising cookies. Applicable privacy rights and ordinary hosting disclosures are described in the Privacy Policy.
            </p>
            <p>
              <strong>If you are in California:</strong> Under the CCPA/CPRA, you have the right to opt out of the &quot;sale&quot; or &quot;sharing&quot; of personal information, which may include certain cookie-based data collection. We honor the Global Privacy Control (GPC) signal. If your browser sends a GPC signal, we treat it as a request to opt out.
            </p>
            <p>
              <strong>Everywhere else:</strong> The same controls apply regardless of jurisdiction. MindCheck Tools does not show an analytics consent prompt because Google Analytics is not used. Global Privacy Control suppresses Vercel Web Analytics.
            </p>
          </section>

          <section>
            <h2>Changes to this policy</h2>
            <p>
              We will update this policy when cookie or storage practices change. MindCheck Tools does not use Google Analytics or display advertising. The &quot;Last updated&quot; date reflects the most recent revision.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Questions about our cookie practices? Email us at <strong>privacy@mindchecktools.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
