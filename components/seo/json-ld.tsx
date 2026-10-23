import { certifications } from "@/data/certifications";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { profile, socials } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { siteUrl } from "@/lib/site";

// schema.org structured data so search engines understand who this site is about.
export function JsonLd() {
  const current = experience.find((e) => e.end === "Present");
  const person = {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: profile.name,
    alternateName: "Hamza Atallah Ibrahem",
    jobTitle: profile.title,
    description: profile.summary,
    url: siteUrl,
    image: `${siteUrl}${profile.photo}`,
    email: `mailto:${profile.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Latakia", addressCountry: "SY" },
    sameAs: socials.filter((s) => s.label !== "WhatsApp").map((s) => s.href),
    knowsAbout: skillCategories.flatMap((c) => c.skills.map((s) => s.name)),
    knowsLanguage: profile.languages.map((l) => l.name),
    alumniOf: education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.school })),
    ...(current && { worksFor: { "@type": "Organization", name: current.company } }),
    hasCredential: certifications
      .filter((c) => c.credentialUrl)
      .map((c) => ({
        "@type": "EducationalOccupationalCredential",
        name: c.title,
        credentialCategory: "certificate",
        url: c.credentialUrl,
        recognizedBy: { "@type": "Organization", name: c.issuer },
      })),
  };

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: `${profile.name} — Portfolio`,
        inLanguage: "en",
        publisher: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profile`,
        url: siteUrl,
        mainEntity: { "@id": `${siteUrl}/#person` },
        hasPart: projects
          .filter((p) => p.links?.length)
          .map((p) => ({
            "@type": "CreativeWork",
            name: p.title,
            description: p.description,
            url: p.links![0].href,
            creator: { "@id": `${siteUrl}/#person` },
            keywords: p.tech.join(", "),
          })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
