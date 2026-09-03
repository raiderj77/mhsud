import type { Metadata, Viewport } from "next";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CrisisBanner } from "@/components/CrisisBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { OfflineIndicator } from "@/components/OfflineIndicator";
import { AppInstallPrompt } from "@/components/AppInstallPrompt";
import { PrivacySafeAggregateAnalytics } from "@/components/PrivacySafeAggregateAnalytics";
import { SensitiveRouteLifecycle } from "@/components/SensitiveRouteLifecycle";
import { ToolClassificationNotice } from "@/components/ToolClassificationNotice";
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
      "Free, private mental health and substance use self-checks. Screening answers are processed in your browser and are not intentionally sent to MindCheck Tools.",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "MindCheck Tools - Free, Private Mental Health Self-Checks" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MindCheck Tools - Free, Private Mental Health Self-Checks",
    description:
      "Free, private mental health and substance use self-checks. Screening answers are processed in your browser and are not intentionally sent to MindCheck Tools.",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "MindCheck Tools - Free, Private Mental Health Self-Checks" }],
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "https://mindchecktools.com",
      "x-default": "https://mindchecktools.com",
    },
  },
  verification: {
    google: "2ieYhzyPUNxUGKoS_QEQUvsuojYLusDJdHBsNIs6UCU",
  },
  other: {
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
  return (
    <html lang="en" className={`${dmSans.variable} ${sourceSerif.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker
                    .register('/service-worker.js', { updateViaCache: 'none' })
                    .catch(function() {
                      // The site remains fully usable online if registration is unavailable.
                    });
                });
              }
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <SensitiveRouteLifecycle />
        <PrivacySafeAggregateAnalytics />
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
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:inline-flex focus:min-h-[44px] focus:items-center focus:px-4 focus:py-2 focus:bg-sage-700 focus:text-white focus:rounded-lg focus:text-base focus:font-medium"
          >
            Skip to main content
          </a>
          <OfflineIndicator />
          <CrisisBanner />
          <AppInstallPrompt />
          <Navbar />
          <main id="main-content" tabIndex={-1} className="flex-1 scroll-mt-20 focus:outline-none">
            <ToolClassificationNotice />
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
