import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";

import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  // Only used for small labels below the fold — don't compete with the hero for bandwidth.
  preload: false,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = `${profile.name} — ${profile.title} & ${profile.role}`;
const description =
  "Hamza Ibrahem is a software engineer and full-stack web developer with 4+ years of experience building SaaS, fintech, HR and e-commerce platforms with Laravel, Next.js, NestJS and WordPress.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s · ${profile.name}` },
  description,
  applicationName: `${profile.name} Portfolio`,
  keywords: [
    "Hamza Ibrahem",
    "Software Engineer",
    "Full-Stack Developer",
    "Web Developer",
    "Laravel Developer",
    "Next.js Developer",
    "NestJS",
    "React",
    "WordPress Developer",
    "PHP",
    "SaaS",
    "Fintech",
    "E-commerce",
    "Payment Gateway",
    "Syria",
    "Latakia",
    "Remote Developer",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: `${profile.name} — Portfolio`,
    title,
    description: profile.tagline,
    locale: "en_US",
    firstName: profile.firstName,
    lastName: profile.name.split(" ").slice(1).join(" "),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.tagline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#fafaf7" },
  ],
};

// Applies the saved theme before first paint (dark by default) to avoid a flash.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <SmoothScroll>{children}</SmoothScroll>
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
