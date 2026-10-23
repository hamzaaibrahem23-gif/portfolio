import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
    // Inline the (small, Tailwind) CSS into the HTML so first paint doesn't wait on a stylesheet request.
    inlineCss: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        // Skip node_modules and Next.js internals (e.g. next/font's generated CSS),
        // which the Tailwind loader breaks in dev.
        condition: { not: "foreign" },
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
