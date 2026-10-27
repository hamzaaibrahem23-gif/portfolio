import type { IconType } from "react-icons";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

export const profile = {
  name: "Hamza Ibrahem",
  firstName: "Hamza",
  title: "Software Engineer",
  role: "Full-Stack Web Developer",
  tagline: "I build production-grade web applications — from secure APIs to polished, fast interfaces.",
  summary:
    "Results-driven web developer with 4+ years of experience in full-stack development using Laravel, JavaScript, and WordPress. Skilled in building, optimizing, and delivering web applications that improve functionality, user experience, and performance.",
  about: [
    "I'm a full-stack engineer who cares about the whole system — the database schema, the API contract, and the pixel the user actually clicks. Over the past 4+ years I've shipped HR platforms, payment gateways, e-commerce stores, and SaaS marketing sites for teams across the region.",
    "I approach every project with an engineering mindset: clear architecture, secure authentication, maintainable code, and performance that holds up as the product grows. I work closely with cross-functional teams and follow modern web development best practices.",
  ],
  focusAreas: ["Fintech systems", "APIs & integrations", "SaaS platforms", "E-commerce systems", "Scalable full-stack architecture"],
  yearsOfExperience: "4+",
  location: "Latakia, Syria",
  email: "hamzaaibrahem23@gmail.com",
  phone: "+963 931 612 289",
  whatsapp: "https://wa.me/+963931612289",
  resume: "/Hamza-Ibrahem-Resume.pdf",
  photo: "/hamza.jpg",
  languages: [
    { name: "Arabic", level: "Native", value: 100 },
    { name: "English", level: "Very good", value: 75 },
  ],
};

export const socials: SocialLink[] = [
  { label: "WhatsApp", href: "https://wa.me/+963931612289", icon: FaWhatsapp },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hamza-ibrahem-bb5b99371", icon: FaLinkedinIn },
  { label: "Facebook", href: "https://www.facebook.com/share/1D1ehQQfVJ/", icon: FaFacebookF },
  { label: "Instagram", href: "https://www.instagram.com/7amza_ibrahem?xtok=a2JoZ2FxYjlsYmw5", icon: FaInstagram },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
