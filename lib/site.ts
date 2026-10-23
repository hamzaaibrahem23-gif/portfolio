// Absolute site URL, used for canonical links, the sitemap, robots.txt and social previews.
// Set NEXT_PUBLIC_SITE_URL to your domain (e.g. https://hamzaibrahem.dev) when deploying.
// On Vercel the production URL is picked up automatically as a fallback.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");
