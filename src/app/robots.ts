import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Standard search engines and unrecognized crawlers
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        // FIX: Explicitly allow Google's AI/LLM crawlers.
        // These power Google AI Overviews (SGE) and Gemini.
        // Explicit allowance improves visibility in AI-generated answers.
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        // Google-Extended powers AI Overviews and Gemini training
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        // GPTBot powers ChatGPT citations and browsing
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        // Anthropic's Claude crawler (legacy name, kept for backwards compatibility)
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        // Anthropic's Claude crawler (current name)
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        // Perplexity AI crawler for answer citations
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        // Bing/Copilot AI crawler
        userAgent: "Bingbot",
        allow: "/",
      },
      {
        // OpenAI search crawler for ChatGPT search/citations
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      {
        // ChatGPT browsing agent (user-initiated web browsing)
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        // Common Crawl — feeds most AI training datasets
        userAgent: "CCBot",
        allow: "/",
      },
      {
        // Meta AI crawler
        userAgent: "meta-externalagent",
        allow: "/",
      },
      {
        // Apple Intelligence / Siri AI features
        userAgent: "Applebot-Extended",
        allow: "/",
      },
    ],
    sitemap: "https://mindchecktools.com/sitemap.xml",
  };
}
