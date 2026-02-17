/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  // Output standalone for smaller deploys
  output: "standalone",

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
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https:",
              "connect-src 'self'",
            ].join("; "),
          },
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
