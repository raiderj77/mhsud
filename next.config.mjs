/** @type {import('next').NextConfig} */
const quarantinedRedirects = [
  ["/depression-test-for-teens", "/phq-9-depression-test"],
  ["/depression-test-for-seniors", "/phq-9-depression-test"],
  ["/depression-test-for-new-moms", "/phq-9-depression-test"],
  ["/depression-screening-for-veterans", "/phq-9-depression-test"],
  ["/depression-test-for-men", "/phq-9-depression-test"],
  ["/depression-screening-for-men", "/phq-9-depression-test"],
  ["/am-i-depressed-quiz", "/phq-9-depression-test"],
  ["/anxiety-test-for-women", "/gad-7-anxiety-test"],
  ["/anxiety-test-for-teens", "/gad-7-anxiety-test"],
  ["/anxiety-test-for-men", "/gad-7-anxiety-test"],
  ["/ptsd-test-veterans", "/pcl-5-ptsd-screening"],
  ["/ptsd-test-first-responders", "/pcl-5-ptsd-screening"],
  ["/do-i-have-ptsd-quiz", "/pcl-5-ptsd-screening"],
  ["/adhd-test-adults", "/asrs-adhd-screening"],
  ["/adhd-test-women", "/asrs-adhd-screening"],
  ["/adhd-test-for-teens", "/asrs-adhd-screening"],
  ["/social-anxiety-test-college", "/spin-social-anxiety-test"],
  ["/alcohol-screening-for-college-students", "/audit-alcohol-test"],
  ["/alcohol-screening-for-women", "/audit-alcohol-test"],
  ["/alcohol-screening-military", "/audit-alcohol-test"],
  ["/am-i-an-alcoholic-quiz", "/audit-alcohol-test"],
  ["/drug-screening-teens", "/crafft-substance-screening"],
  ["/substance-abuse-test-parents", "/cage-aid-substance-abuse-screening"],
  ["/stress-test-college-students", "/dass-21-depression-anxiety-stress"],
  ["/burnout-test-for-nurses", "/burnout-assessment-tool"],
  ["/burnout-test-for-healthcare-workers", "/burnout-assessment-tool"],
  ["/burnout-test-for-teachers", "/burnout-assessment-tool"],
  ["/burnout-test-parents", "/burnout-assessment-tool"],
  ["/loneliness-test-seniors", "/ucla-loneliness-scale"],
  ["/eating-disorder-test-athletes", "/scoff-eating-disorder-screening"],
  ["/bpd-test-for-women", "/msi-bpd-screening"],
  ["/bpd-screening-for-young-adults", "/msi-bpd-screening"],
  ["/attachment-style-test-for-couples", "/attachment-style-quiz"],
].map(([source, destination]) => ({ source, destination, permanent: true }));

const nextConfig = {
  // Performance
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,


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
          { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
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
        // Health content pages: no-referrer to prevent health URLs leaking to third parties
        source: "/:path(phq-9-depression-test|gad-7-anxiety-test|audit-alcohol-test|audit-c-alcohol-screen|cage-aid-substance-abuse-screening|dass-21-depression-anxiety-stress|pcl-5-ptsd-screening|pc-ptsd-5-screening|spin-social-anxiety-test|msi-bpd-screening|asrs-adhd-screening|scoff-eating-disorder-screening|aq-10-autism-screening|crafft-substance-screening|who-assist-substance-screening|ces-d-depression-scale|k6-distress-scale|phq-4-anxiety-depression-screen|postpartum-depression-test|ace-questionnaire|who-5-wellbeing-index|athens-insomnia-scale|holmes-rahe-stress-inventory|rosenberg-self-esteem-scale|ucla-loneliness-scale|brief-resilience-scale|big-five-personality-test|attachment-style-quiz|burnout-assessment-tool|compassion-fatigue-test|grief-assessment|mental-load-calculator|maternal-mental-health)",
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
      { source: "/dast-10-drug-screening", destination: "/audit-alcohol-test", permanent: true },
      { source: "/mdq-bipolar-screening", destination: "/blog/what-is-bipolar-disorder", permanent: true },
      { source: "/oci-r-ocd-screening", destination: "/blog/what-is-ocd", permanent: true },
      { source: "/ocd-test-teens", destination: "/blog/what-is-ocd", permanent: true },
      { source: "/bipolar-test-young-adults", destination: "/blog/what-is-bipolar-disorder", permanent: true },
      { source: "/blog/what-does-oci-r-score-mean", destination: "/blog/what-is-ocd", permanent: true },
      { source: "/mdq-score-interpretation", destination: "/blog/what-is-bipolar-disorder", permanent: true },
      { source: "/audit-vs-dast-10", destination: "/audit-alcohol-test", permanent: true },
      { source: "/dast-10-score-interpretation", destination: "/audit-alcohol-test", permanent: true },
      { source: "/blog/dast-10-guide", destination: "/audit-alcohol-test", permanent: true },
      ...quarantinedRedirects,
      { source: "/blog/:path*", destination: "/screening-tools", permanent: true },
      { source: "/blog", destination: "/screening-tools", permanent: true },
    ];
  },
};

export default nextConfig;
