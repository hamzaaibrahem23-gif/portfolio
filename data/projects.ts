export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  /** Unique id, also used as the React key. */
  slug: string;
  title: string;
  category: string;
  description: string;
  highlights?: string[];
  tech: string[];
  /** Screenshot path under /public, e.g. "/projects/my-app.webp". */
  image?: string;
  /** Logo shown instead of a screenshot (e.g. for private projects), e.g. "/projects/logos/my-app.svg". */
  logo?: string;
  links?: ProjectLink[];
  /** Featured projects are shown first; the rest appear under "Show all projects". */
  featured?: boolean;
};

// To add a project: drop a screenshot in public/projects/ and append an object below.
export const projects: Project[] = [
  {
    slug: "niio",
    title: "NIIO — AI Customer Support Platform",
    category: "SaaS",
    description:
      "Responsive marketing website for NIIO, a platform for creating and deploying AI-powered customer support agents.",
    highlights: [
      "Interactive product sections for knowledge-base integrations, real-time data syncing and smart escalation workflows",
      "Showcases agent customization, analytics and enterprise security with a polished UI",
    ],
    tech: ["Next.js", "React", "Vercel"],
    image: "/projects/niio.webp",
    links: [{ label: "Live demo", href: "https://niio-website-zeta.vercel.app" }],
    featured: true,
  },
  {
    slug: "tamleek",
    title: "Tamleek — Partial Real-Estate Ownership",
    category: "Fintech · PropTech",
    description:
      "A platform that lets users buy shares in listed properties and own a fraction of real estate, end to end.",
    highlights: ["Authentication and e-payments", "CMS-managed property listings"],
    tech: ["Next.js", "E-payments", "CMS"],
    image: "/projects/tamleek-home.webp",
    links: [{ label: "Live site", href: "https://tamleek.maktab.sa" }],
    featured: true,
  },
  {
    slug: "quick-checkout",
    title: "Quick-Checkout Payment Gateway",
    category: "Fintech · API",
    description:
      "Payment gateway intermediary platform bridging users, mobile apps and WordPress WooCommerce stores to streamline transactions.",
    highlights: [
      "Secure Laravel API with JWT / Sanctum authentication",
      "Payment processing endpoints and webhook integration",
      "Custom WordPress plugin (PHP REST API client) for seamless WooCommerce integration",
    ],
    tech: ["Laravel", "JWT", "Sanctum", "Webhooks", "WordPress", "WooCommerce"],
    logo: "/projects/logos/quick-checkout.svg",
    featured: true,
  },
  {
    slug: "wild-and-org",
    title: "Wild&Org — Headless CMS Web App",
    category: "Web App",
    description:
      "Responsive website with all content dynamically managed through a Strapi headless CMS, built and deployed end to end.",
    highlights: ["Designed and implemented the Strapi content types", "Next.js frontend consuming the CMS API"],
    tech: ["Next.js", "Strapi", "Headless CMS"],
    image: "/projects/wildandorg.webp",
    links: [
      { label: "Live site", href: "https://wildandorg.com" },
      { label: "Vercel", href: "https://wildnorg.vercel.app" },
    ],
    featured: true,
  },
  {
    slug: "hr-management-system",
    title: "B2B HR Management System",
    category: "SaaS · B2B",
    description:
      "A comprehensive HR platform integrating human-resource operations, built across both the frontend and backend.",
    highlights: ["Implemented frontend and backend components of an integrated HR platform"],
    tech: ["Full-stack", "B2B SaaS"],
    logo: "/projects/logos/hr-management.svg",
    featured: true,
  },
  {
    slug: "biladmart",
    title: "Biladmart — E-commerce Store",
    category: "E-commerce",
    description: "Full e-commerce website built on Laravel with the Bagisto package.",
    tech: ["Laravel", "Bagisto"],
    image: "/projects/biladmart.webp",
    links: [{ label: "Live site", href: "https://biladmart.com" }],
    featured: true,
  },
  {
    slug: "clickfix",
    title: "Clickfix — Company Website",
    category: "Corporate",
    description: "Company website built with Next.js, with all content managed through Strapi.",
    tech: ["Next.js", "Strapi"],
    image: "/projects/clickfix-home.webp",
    links: [{ label: "Live site", href: "https://clickfix.me" }],
  },
  {
    slug: "naspro",
    title: "Naspro.ai — Company Website",
    category: "Corporate",
    description: "Company website for the team behind the B2B HR management platform.",
    tech: ["Next.js"],
    image: "/projects/naspro.webp",
    links: [{ label: "Live site", href: "https://naspro.ai" }],
  },
  {
    slug: "jaaz",
    title: "Jaaz.tech — Product Showcase",
    category: "Product",
    description: "Dynamic product showcase website designed and developed with a modern React / Next.js frontend.",
    tech: ["Next.js", "React"],
    image: "/projects/jaaz-home.webp",
    links: [{ label: "Live site", href: "https://jaaz.tech" }],
  },
  {
    slug: "gate-of-arts",
    title: "Gate of Arts — Artwork Marketplace",
    category: "Marketplace",
    description: "Website that showcases and sells artworks by artists, with a multi-role dashboard.",
    tech: ["Laravel", "Bootstrap", "jQuery"],
    image: "/projects/gate-of-arts.webp",
    links: [{ label: "Live site", href: "https://gateofarts.com" }],
  },
  {
    slug: "masaheen",
    title: "Masaheen — Survey Engineering Profile",
    category: "Corporate",
    description: "Company profile for a survey engineering firm, built with full-stack JavaScript.",
    tech: ["NestJS", "Next.js"],
    image: "/projects/masaheen-home.webp",
    links: [{ label: "Live site", href: "https://masaheen.com" }],
  },
  {
    slug: "fintech-dashboard",
    title: "Fintech Dashboard & Delivery System",
    category: "Fintech",
    description:
      "Fintech dashboard providing analytics and insights, a website promoting the company's services, and a delivery system interface.",
    highlights: [
      "Dashboard and delivery-system frontend built with Next.js",
      "Company website built with WordPress Elementor",
    ],
    tech: ["Next.js", "WordPress", "Elementor"],
    image: "/projects/zein-group.webp",
    links: [{ label: "Company site", href: "https://zein-group.in" }],
  },
  {
    slug: "attendance-tracking",
    title: "Attendance Tracking System",
    category: "ERP",
    description:
      "Database and functionality development to accurately track employee attendance and generate reports.",
    highlights: ["Digital time clock", "Real-time check-in / check-out recording"],
    tech: ["Odoo"],
    logo: "/projects/logos/odoo.png",
  },
];
