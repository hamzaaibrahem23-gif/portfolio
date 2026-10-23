import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import {
  SiBootstrap,
  SiClaude,
  SiCss,
  SiCursor,
  SiDeepseek,
  SiDocker,
  SiElementor,
  SiFigma,
  SiGit,
  SiGithubcopilot,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiLaravel,
  SiLinux,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiOdoo,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiStrapi,
  SiWoocommerce,
  SiWordpress,
} from "react-icons/si";
import { BrainCircuit, Code2, Database, LayoutTemplate, Server, ShoppingCart, Wrench, type LucideIcon } from "lucide-react";

import { TraeIcon } from "@/components/icons/trae-icon";

export type Skill = {
  name: string;
  icon?: IconType;
};

export type SkillCategory = {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: Skill[];
  /** Featured categories span the full width of the grid. */
  featured?: boolean;
};

// Add a skill by appending to a category, or add a whole new category object.
export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Responsive, accessible interfaces",
    icon: LayoutTemplate,
    skills: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "jQuery / Ajax", icon: SiJquery },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    title: "Backend & APIs",
    description: "Secure, scalable server logic",
    icon: Server,
    skills: [
      { name: "Laravel", icon: SiLaravel },
      { name: "PHP (OOP)", icon: SiPhp },
      { name: "NestJS", icon: SiNestjs },
      { name: "Java", icon: FaJava },
      { name: "Odoo", icon: SiOdoo },
      { name: "REST APIs" },
      { name: "JWT / Sanctum" },
    ],
  },
  {
    title: "CMS & E-commerce",
    description: "Content-driven sites and stores",
    icon: ShoppingCart,
    skills: [
      { name: "WordPress", icon: SiWordpress },
      { name: "Elementor", icon: SiElementor },
      { name: "WooCommerce", icon: SiWoocommerce },
      { name: "Strapi", icon: SiStrapi },
      { name: "Bagisto" },
    ],
  },
  {
    title: "Databases",
    description: "Relational data modelling",
    icon: Database,
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    title: "DevOps & Tools",
    description: "Shipping and collaborating",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "Linux", icon: SiLinux },
      { name: "Deployment" },
      { name: "Figma", icon: SiFigma },
    ],
  },
  {
    title: "Other",
    description: "Beyond the code editor",
    icon: Code2,
    skills: [{ name: "Computer maintenance" }, { name: "Networking (CCNA)" }, { name: "Teamwork" }],
  },
  {
    title: "AI Tools",
    description: "AI-assisted development for faster, cleaner delivery",
    icon: BrainCircuit,
    featured: true,
    skills: [
      { name: "Cursor AI", icon: SiCursor },
      { name: "Claude", icon: SiClaude },
      { name: "TRAE AI", icon: TraeIcon },
      { name: "DeepSeek", icon: SiDeepseek },
      { name: "Gemini", icon: SiGooglegemini },
      { name: "VS Code Copilot", icon: SiGithubcopilot },
    ],
  },
];
