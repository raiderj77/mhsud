import type { Metadata } from "next";
import { createMetadata, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { CookieSettingsButton } from "./CookieSettingsButton";

export const metadata: Metadata = createMetadata({
  path: "/cookies",
  title: "Cookie Policy — What Cookies We Use and Why",
  description:
    "MindCheck Tools cookie policy. Details on analytics and advertising cookies, how to manage your preferences, and your rights under GDPR and CCPA.",
  keywords: [
    "cookie policy", "cookie consent", "analytics cookies",
    "GDPR cookie compliance", "CCPA cookie disclosure",
  ],
});

const COOKIE_TABLE = [
  {
    category: "Essential",
    consent: "Not required",
    cookies: [
      { name: "mh-theme", purpose: "Stores your light/dark mode preference", duration: "Persistent (localStorage)", provider: "MindCheck Tools" },
      { name: "mh-cookie-consent", purpose: "Stores your cookie consent preferences", duration: "Persistent (localStorage)", provider: "MindCheck Tools" },
    ],
  },
  {
    category: "Analytics",
    consent: "Required",
    cookies: [
      { name: "_ga", purpose: "Distinguishes unique users for Google Analytics", duration: "2 years", provider: "Google" },
      { name: "_ga_XKHQN1NJ2Z", purpose: "Maintains session state for Google Analytics", duration: "2 years", provider: "Google" },
    ],
  },
  {
    category: "Advertising",
    consent: "Required",
    cookies: [
      { name: "Various", purpose: "Ad network cookies for serving and measuring ads. Not currently active.", duration: "Varies", provider: "TBD — will be disclosed when ads are enabled" },
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
          <p className="text-sm text-neutral-400 dark:text-neutral-500">Last updated: February 17, 2026</p>
        </header>

        <div className="prose-mh space-y-8">
          <section>
            <h2>What are cookies?</h2>
            <p>
              Cookies are small text files placed on your device by websites you visit. They are used for various purposes including remembering preferences, understanding how visitors use a site, and serving relevant advertising. Some cookies are &quot;first-party&quot; (set by the site you&apos;re visiting) and some are &quot;third-party&quot; (set by other services like analytics or ad networks).
            </p>
          </section>

          <section>
            <h2>How we use cookies</h2>
            <p>
              MindCheck Tools uses a minimal number of cookies. Importantly, <strong>cookies are never used to track, store, or access your screening responses</strong>. All questionnaire scoring happens in client-side JavaScript and no answer data is ever transmitted.
            </p>
            <p>
              We use Google Consent Mode v2 to ensure that analytics and advertising cookies are only set after you provide explicit consent through our cookie banner. If you decline, no non-essential cookies are placed on your device.
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
                  <div className="overflow-x-auto">
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
              You can change your cookie preferences at any time by clicking the button below. You can also clear cookies through your browser settings.
            </p>
            <div className="not-prose mt-4">
              <CookieSettingsButton />
            </div>
          </section>

          <section>
            <h2>Google Analytics and Consent Mode</h2>
            <p>
              We use Google Analytics (GA4, measurement ID: G-XKHQN1NJ2Z) with Google Consent Mode v2. This means:
            </p>
            <p>
              If you <strong>accept</strong> analytics cookies, Google Analytics operates normally — setting cookies to distinguish users and sessions, and collecting anonymized usage data (pages visited, traffic sources, geographic region).
            </p>
            <p>
              If you <strong>decline</strong> analytics cookies, no Google Analytics cookies are set on your device. Google may still receive cookieless pings that allow it to model aggregate traffic data, but no individual user data is collected or stored.
            </p>
            <p>
              You can also opt out of Google Analytics entirely by installing the <strong>Google Analytics Opt-out Browser Add-on</strong> at tools.google.com/dlpage/gaoptout.
            </p>
          </section>

          <section>
            <h2>Your rights</h2>
            <p>
              <strong>If you are in the European Economic Area (EEA) or United Kingdom:</strong> Under the GDPR and ePrivacy Directive, we are required to obtain your explicit consent before placing non-essential cookies. Our cookie banner does this. You have the right to withdraw consent at any time.
            </p>
            <p>
              <strong>If you are in California:</strong> Under the CCPA/CPRA, you have the right to opt out of the &quot;sale&quot; or &quot;sharing&quot; of personal information, which may include certain cookie-based data collection. We honor the Global Privacy Control (GPC) signal. If your browser sends a GPC signal, we treat it as a request to opt out.
            </p>
            <p>
              <strong>Everywhere else:</strong> We believe cookie consent is a matter of respect regardless of jurisdiction. Our consent banner is shown to all visitors worldwide.
            </p>
          </section>

          <section>
            <h2>Changes to this policy</h2>
            <p>
              We will update this policy whenever we add or change cookies — particularly when advertising cookies become active. The &quot;Last updated&quot; date at the top reflects the most recent revision.
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
