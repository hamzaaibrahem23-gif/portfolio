export type Experience = {
  role: string;
  company: string;
  /** Display strings, e.g. "Mar 2024". Use "Present" for a current role. */
  start: string;
  end: string;
  achievements: string[];
  tech?: string[];
};

// Listed top to bottom on the timeline — add new roles at the top.
export const experience: Experience[] = [
  {
    role: "Full-Stack Web Developer",
    company: "DEVSY Tech",
    start: "Mar 2024",
    end: "Present",
    achievements: [
      "Building a comprehensive B2B HR Management System, implementing both frontend and backend components of an integrated HR platform",
      "Developed a payment gateway intermediary platform bridging users, mobile apps and WooCommerce stores for the Quick-Checkout app",
      "Shipped the Naspro.ai company website with Next.js and the Clickfix website with Next.js + Strapi",
      "Built the responsive marketing website for NIIO, an AI customer-support agent platform",
    ],
    tech: ["Next.js", "Laravel", "Strapi", "WordPress"],
  },
  {
    role: "Full-Stack Web Developer",
    company: "Leading Cities Company",
    start: "Oct 2023",
    end: "Apr 2026",
    achievements: [
      "Developed an artwork marketplace with a multi-role dashboard using Laravel, Bootstrap and jQuery",
      "Built the Biladmart e-commerce store on Laravel with the Bagisto package",
      "Delivered a survey-engineering company profile with full-stack JavaScript (NestJS, Next.js)",
    ],
    tech: ["Laravel", "Bagisto", "NestJS", "Next.js"],
  },
  {
    role: "Back-End Web Developer",
    company: "Deepblue Technologies",
    start: "Dec 2024",
    end: "Jul 2025",
    achievements: [
      "Worked on an attendance tracking system with digital time-clock functionality",
      "Implemented real-time check-in / check-out recording using the Odoo framework",
    ],
    tech: ["Odoo"],
  },
  {
    role: "Back-End Developer",
    company: "Future Code",
    start: "Sep 2023",
    end: "Dec 2023",
    achievements: ["Developed delivery-system APIs for both the dashboard and the mobile app using Laravel"],
    tech: ["Laravel", "REST APIs"],
  },
  {
    role: "Full-Stack Web Developer",
    company: "Eterna Tech",
    start: "Nov 2022",
    end: "Apr 2023",
    achievements: [
      "Developed a fintech dashboard using the Next.js framework",
      "Created the company website with WordPress Elementor",
      "Worked on the frontend of a delivery system project with Next.js",
    ],
    tech: ["Next.js", "WordPress", "Elementor"],
  },
];
