import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CrisisBanner } from "@/components/CrisisBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SwUpdateNotification } from "@/components/SwUpdateNotification";
import { OfflineIndicator } from "@/components/OfflineIndicator";
import { AppInstallPrompt } from "@/components/AppInstallPrompt";
import { createMetadata, organizationJsonLd } from "@/lib/metadata";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-source-serif",
});

export const metadata: Metadata = {
  ...createMetadata({ path: "/" }),
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mindchecktools.com",
    siteName: "MindCheck Tools",
    title: "MindCheck Tools - Free, Private Mental Health Self-Checks",
    description:
      "Free, private mental health and substance use self-checks. Your screening answers are scored in your browser and never stored. PHQ-9, GAD-7, AUDIT, and more.",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "MindCheck Tools - Free, Private Mental Health Self-Checks" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MindCheck Tools - Free, Private Mental Health Self-Checks",
    description:
      "Free, private mental health and substance use self-checks. Your screening answers are scored in your browser and never stored. PHQ-9, GAD-7, AUDIT, and more.",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "MindCheck Tools - Free, Private Mental Health Self-Checks" }],
  },
  alternates: {
    canonical: "/",
    languages: {
      "en": "https://mindchecktools.com",
      "x-default": "https://mindchecktools.com",
    },
  },
  verification: {
    google: "2ieYhzyPUNxUGKoS_QEQUvsuojYLusDJdHBsNIs6UCU",
  },
  other: {
    "google-adsense-account": "ca-pub-7171402107622932",
    "msvalidate.01": "C4C9B6256BDEDED169E4DE01CA953390",
    "p:domain_verify": "ecdd00e78a1c7734db06450b3540c3dc",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1b1e" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // GPC is handled client-side per-visitor by the gpc-auto-decline script below,
  // which calls Cookiebot.decline() when navigator.globalPrivacyControl is set.
  // Server-side header gating was removed because it cached one visitor GPC state
  // into the static HTML and froze Cookiebot off for everyone. Keep this false.
  const gpcHeader = false;

  return (
    <html lang="en" className={`${dmSans.variable} ${sourceSerif.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://consent.cookiebot.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fundingchoicesmessages.google.com" />
        <link rel="dns-prefetch" href="https://adservice.google.com" />

        <link
          rel="preload"
          href="/_next/static/media/13971731025ec697-s.p.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Consent Mode v2 defaults - must fire before Cookiebot and all analytics */}
        <Script
          id="consent-mode"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'granted',
                'functionality_storage': 'granted',
                'personalization_storage': 'denied',
                'security_storage': 'granted'
              });
              gtag('consent', 'default', {
                'region': ['GB','BE','BG','CZ','DK','DE','EE','IE','GR','ES','FR','HR','IT','CY','LV','LT','LU','HU','MT','NL','AT','PL','PT','RO','SI','SK','FI','SE','IS','LI','NO'],
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
                'functionality_storage': 'denied',
                'personalization_storage': 'denied',
                'security_storage': 'granted',
                'wait_for_update': 500
              });
              // GPC override: runs before any analytics tag can initialize.
              // Checks navigator.globalPrivacyControl (browser-native signal) AND the
              // empire_gpc cookie set by middleware from the sec-gpc request header.
              // Only overrides the signals that GPC requires; does not affect non-GPC visitors.
              if (
                navigator.globalPrivacyControl ||
                document.cookie.indexOf('empire_gpc=1') !== -1
              ) {
                gtag('consent', 'update', {
                  'ad_storage': 'denied',
                  'ad_user_data': 'denied',
                  'ad_personalization': 'denied',
                  'analytics_storage': 'denied',
                  'personalization_storage': 'denied',
                });
              }
            `,
          }}
        />

        {/* Cookiebot consent management. data-blockingmode auto handles script blocking; data-georegions gates EU/GB consent banner. */}
        {!gpcHeader && (
          <Script
            id="Cookiebot"
            src="https://consent.cookiebot.com/uc.js"
            data-cbid="a9a99ccb-4863-4e33-a895-a6d5642f408d"
            data-blockingmode="auto"
            data-georegions={"{'region':'GB,EU','cbid':'a9a99ccb-4863-4e33-a895-a6d5642f408d'}"}
            strategy="beforeInteractive"
          />
        )}

        {/* GPC client-side fallback: declines via Cookiebot when navigator.globalPrivacyControl is set. */}
        {!gpcHeader && (
          <Script
            id="gpc-auto-decline"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.addEventListener('CookiebotOnLoad', function () {
                  try {
                    var gpcActive =
                      !!navigator.globalPrivacyControl ||
                      document.cookie.indexOf('empire_gpc=1') !== -1;
                    if (gpcActive && window.Cookiebot) {
                      window.Cookiebot.decline();
                    }
                  } catch (e) {}
                });
              `,
            }}
          />
        )}

        <Script
          id="gtag-script"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XKHQN1NJ2Z"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XKHQN1NJ2Z', { anonymize_ip: true });
            `,
          }}
        />

        <Script
          id="adsense-script"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7171402107622932"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />

        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (
                !navigator.globalPrivacyControl &&
                document.cookie.indexOf('empire_gpc=1') === -1
              ) {
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window,document,"clarity","script","vsqobt7va0");
              }
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/service-worker.js').then(
                    function(registration) {
                      console.log('Service Worker registered successfully:', registration);
                    },
                    function(err) {
                      console.log('Service Worker registration failed:', err);
                    }
                  );
                });
              }
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <ThemeProvider>
          <ScrollToTop />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                try {
                  const t = localStorage.getItem('mh-theme');
                  if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              `,
            }}
          />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-sage-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
          >
            Skip to main content
          </a>
          <OfflineIndicator />
          <CrisisBanner />
          <SwUpdateNotification />
          <AppInstallPrompt />
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
