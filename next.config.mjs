/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  // Eliminate legacy polyfills for modern browsers (saves ~12KB)
  experimental: {
    browsersListForSwc: true,
  },

  // Aggressive image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },

  // Security & caching headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Security
          { key: "X-Frame-Options", value: "SAMEORIGIN" }, // DENY blocks AdSense iframes — changed to SAMEORIGIN
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), interest-cohort=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // AdSense + GTM + Cookiebot + Analytics — all required for ads to render
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://pagead2.googlesyndication.com https://adservice.google.com https://consent.cookiebot.com https://consentcdn.cookiebot.com https://www.googleadservices.com https://tpc.googlesyndication.com https://fundingchoicesmessages.google.com https://ep2.adtrafficquality.google",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              // AdSense ad images and tracking pixels
              "img-src 'self' data: https: https://pagead2.googlesyndication.com https://tpc.googlesyndication.com https://www.googletagmanager.com",
              // AdSense + Analytics + Cookiebot connections
              "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://analytics.google.com https://pagead2.googlesyndication.com https://adservice.google.com https://consent.cookiebot.com https://consentcdn.cookiebot.com https://fundingchoicesmessages.google.com https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google",
              // AdSense iframes (required for ad rendering)
              "frame-src https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://www.google.com https://consent.cookiebot.com https://consentcdn.cookiebot.com https://fundingchoicesmessages.google.com https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google",
            ].join("; "),
          },
        ],
      },
      {
        // Screening pages: no-referrer to prevent health URLs leaking to third parties
        source: "/:path(phq-9-depression-test|gad-7-anxiety-test|audit-alcohol-test|audit-c-alcohol-screen|dast-10-drug-screening|cage-aid-substance-abuse-screening|dass-21-depression-anxiety-stress|pcl-5-ptsd-screening|pc-ptsd-5-screening|oci-r-ocd-screening|spin-social-anxiety-test|mdq-bipolar-screening|msi-bpd-screening|asrs-adhd-screening|scoff-eating-disorder-screening|aq-10-autism-screening|crafft-substance-screening|who-assist-substance-screening|ces-d-depression-scale|k6-distress-scale|phq-4-anxiety-depression-screen|postpartum-depression-test|ace-questionnaire|who-5-wellbeing-index|athens-insomnia-scale|holmes-rahe-stress-inventory|rosenberg-self-esteem-scale|ucla-loneliness-scale|brief-resilience-scale|big-five-personality-test|attachment-style-quiz|burnout-assessment-tool|compassion-fatigue-test|grief-assessment|mental-load-calculator)",
        headers: [
          { key: "Referrer-Policy", value: "no-referrer" },
        ],
      },
      {
        // Cache static assets aggressively
        source: "/(.*)\\.(js|css|woff2|woff|ttf|ico|png|jpg|svg)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      // Common misspellings / variants
      { source: "/phq9", destination: "/phq-9-depression-test", permanent: true },
      { source: "/gad7", destination: "/gad-7-anxiety-test", permanent: true },
      { source: "/audit", destination: "/audit-alcohol-test", permanent: true },
      { source: "/depression-test", destination: "/phq-9-depression-test", permanent: true },
      { source: "/anxiety-test", destination: "/gad-7-anxiety-test", permanent: true },
    ];
  },
};

export default nextConfig;
