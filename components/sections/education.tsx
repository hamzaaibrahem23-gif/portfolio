import { GraduationCap, MapPin } from "lucide-react";

import { GlowCard } from "@/components/nurui/spotlight-card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { education } from "@/data/education";

export function EducationSection() {
  return (
    <Section id="education" index="05" eyebrow="Education" title="Academic" highlight="background" className="pt-0 md:pt-0">
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((ed, i) => (
          <Reveal key={ed.degree} delay={i * 0.08} className="h-full">
            <GlowCard className="group flex h-full gap-5 p-6">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-elevated text-gold transition-transform duration-300 group-hover:scale-110">
                <GraduationCap className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{ed.degree}</h3>
                <p className="text-gold">{ed.school}</p>
                <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                  <span>{ed.period}</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {ed.location}
                  </span>
                </p>
              </div>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
