import { ArrowUpRight, Award, Briefcase, Download, Languages, MapPin, Sparkles } from "lucide-react";

import { GlowCard } from "@/components/nurui/spotlight-card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { certifications } from "@/data/certifications";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

const stats = [
  { label: "Years of experience", value: profile.yearsOfExperience, icon: Briefcase },
  { label: "Projects delivered", value: `${projects.length}+`, icon: Sparkles },
  { label: "Certifications", value: `${certifications.length}`, icon: Award },
];

const current = experience.find((e) => e.end === "Present");

export function About() {
  return (
    <Section id="about" index="01" eyebrow="About me" title="Engineering with a" highlight="product mindset">
      {/* Bento grid */}
      <div className="grid auto-rows-auto gap-4 md:grid-cols-6">
        <Reveal className="md:col-span-4 md:row-span-2">
          <GlowCard className="flex h-full flex-col gap-5 p-7 md:p-9">
            {profile.about.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-pretty text-secondary">
                {paragraph}
              </p>
            ))}
            <ul className="mt-auto flex flex-wrap gap-2 pt-2">
              {profile.focusAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-line bg-background/60 px-3.5 py-1.5 text-sm text-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  {area}
                </li>
              ))}
            </ul>
          </GlowCard>
        </Reveal>

        {current && (
          <Reveal delay={0.08} className="md:col-span-2">
            <GlowCard className="relative h-full overflow-hidden p-6">
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gold/20 blur-2xl" aria-hidden="true" />
              <p className="flex items-center gap-2 text-xs font-medium tracking-wider text-muted uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Currently
              </p>
              <p className="mt-4 font-heading text-xl font-semibold text-foreground">{current.role}</p>
              <p className="text-gold">@ {current.company}</p>
            </GlowCard>
          </Reveal>
        )}

        <Reveal delay={0.12} className="md:col-span-2">
          <GlowCard className="h-full p-6">
            <div className="flex items-center gap-2 text-foreground">
              <MapPin className="h-4 w-4 text-gold" />
              <span className="text-sm">{profile.location}</span>
            </div>
            <div className="mt-5 flex items-center gap-2 text-sm text-foreground">
              <Languages className="h-4 w-4 text-gold" />
              Languages
            </div>
            <div className="mt-3 space-y-3">
              {profile.languages.map((lang) => (
                <div key={lang.name}>
                  <div className="mb-1.5 flex justify-between text-xs">
                    <span className="text-foreground">{lang.name}</span>
                    <span className="text-muted">{lang.level}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-elevated">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-hover"
                      style={{ width: `${lang.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlowCard>
        </Reveal>

        {stats.map(({ label, value, icon: Icon }, i) => (
          <Reveal key={label} delay={0.16 + i * 0.06} className="md:col-span-2 lg:col-span-1">
            <GlowCard className="flex h-full flex-col justify-between gap-6 p-6">
              <Icon className="h-5 w-5 text-gold" />
              <div>
                <p className="font-heading text-4xl font-bold tracking-tight text-foreground">{value}</p>
                <p className="mt-1 text-sm text-muted">{label}</p>
              </div>
            </GlowCard>
          </Reveal>
        ))}

        <Reveal delay={0.34} className="md:col-span-6 lg:col-span-3">
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="group block h-full">
            <GlowCard className="relative flex h-full items-center justify-between gap-6 overflow-hidden p-6">
              <div
                className="absolute inset-0 bg-gradient-to-r from-gold/15 via-gold/5 to-transparent opacity-80"
                aria-hidden="true"
              />
              <div className="relative flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-hover via-gold to-gold-deep text-black">
                  <Download className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-heading text-lg font-semibold text-foreground">Download my resume</p>
                  <p className="text-sm text-muted">PDF · full work history</p>
                </div>
              </div>
              <ArrowUpRight className="relative h-6 w-6 text-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </GlowCard>
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
