import type { MetadataRoute } from "next";

const privateRoutes = ["/thank-you", "/confirmation", "/request-samples/confirmation"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          // All crawlers
          "*",
          // OpenAI
          "OAI-SearchBot",
          "GPTBot",
          "ChatGPT-User",
          // Anthropic
          "ClaudeBot",
          "Claude-SearchBot",
          "anthropic-ai",
          // Perplexity
          "PerplexityBot",
          // Google
          "Google-Extended",
          "Googlebot",
          "Googlebot-Image",
          "GoogleOther",
          // Apple
          "Applebot",
          "Applebot-Extended",
          // Meta
          "FacebookBot",
          // Microsoft / Bing
          "bingbot",
          "BingPreview",
          // Amazon
          "Amazonbot",
          // Diffbot (used by many AI knowledge bases)
          "Diffbot",
          // Bytedance
          "Bytespider",
          // Common
          "CCBot",
          "DataForSeoBot",
          "iaskspider",
          "img2dataset",
          "omgili",
          "omgilibot",
          // Cohere
          "cohere-ai",
          // AI21
          "AI2Bot",
          // Mistral
          "MistralBot",
          // You.com
          "YouBot",
          // Brave
          "BraveBot",
          // Gemini
          "Google-InspectionTool",
          "Gemini",
          // Alexa / Amazon knowledge
          "ia_archiver",
        ],
        allow: "/",
        disallow: privateRoutes,
      },
    ],
    sitemap: "https://www.flavorfactory.net/sitemap.xml",
    host: "https://www.flavorfactory.net",
  };
}
