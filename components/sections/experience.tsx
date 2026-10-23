import { ExperienceItem } from "@/components/cards/experience-item";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      index="04"
      eyebrow="Experience"
      title="Where I've"
      highlight="made an impact"
      description="Roles across product companies and agencies, building for fintech, HR, e-commerce and SaaS."
    >
      <div className="relative ml-2 md:ml-4">
        {/* Vertical timeline line */}
        <div
          className="absolute top-2 bottom-2 left-0 w-px bg-gradient-to-b from-gold via-line-strong to-transparent"
          aria-hidden="true"
        />
        <div className="space-y-8">
          {experience.map((item, i) => (
            <Reveal key={`${item.company}-${item.start}`} delay={i * 0.05}>
              <ExperienceItem item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
