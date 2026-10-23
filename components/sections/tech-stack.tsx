import { GlowCard } from "@/components/nurui/spotlight-card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SkillIcon, SkillIconSprite } from "@/components/ui/skill-icons";
import { skillCategories } from "@/data/skills";

// Every skill that has a logo, for the scrolling strip.
const withIcons = skillCategories.flatMap((c) => c.skills).filter((s) => s.icon);

export function TechStack() {
  return (
    <Section
      id="skills"
      index="02"
      eyebrow="Tech stack"
      title="Tools I use to"
      highlight="ship products"
      description="From database to deployment — the technologies I work with day to day."
    >
      <SkillIconSprite />

      {/* Infinite logo marquee */}
      <Reveal className="marquee relative -mx-4 mb-12 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] sm:mx-0">
        <ul className="marquee-track flex w-max gap-3">
          {[...withIcons, ...withIcons].map(({ name }, i) => (
            <li
              key={`${name}-${i}`}
              aria-hidden={i >= withIcons.length}
              className="flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-5 py-2.5 text-sm whitespace-nowrap text-secondary transition-colors hover:border-gold hover:text-gold"
            >
              <SkillIcon name={name} className="h-4 w-4" />
              {name}
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map(({ title, description, icon: Icon, skills, featured }, i) =>
          featured ? (
            <Reveal key={title} className="sm:col-span-2 lg:col-span-3">
              <GlowCard className="group relative overflow-hidden p-6 md:p-8">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
                  <div className="lg:w-72 lg:shrink-0">
                    <div className="mb-5 flex items-center gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-line-strong bg-gradient-to-br from-gold/25 to-transparent text-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="rounded-full border border-line-strong bg-gold/10 px-2.5 py-0.5 font-mono text-[11px] tracking-wider text-gold uppercase">
                        Daily workflow
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-foreground">{title}</h3>
                    <p className="mt-1 text-sm text-muted">{description}</p>
                  </div>
                  <ul className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                    {skills.map(({ name, icon }) => (
                      <li
                        key={name}
                        className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-background/50 px-3 py-5 text-center text-sm text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:text-gold hover:shadow-glow"
                      >
                        {icon && <SkillIcon name={name} className="h-7 w-7 text-foreground" />}
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlowCard>
            </Reveal>
          ) : (
            <Reveal key={title} delay={(i % 3) * 0.06}>
              <GlowCard className="group h-full p-6">
                <div className="mb-6 flex items-start justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-line-strong bg-gradient-to-br from-gold/20 to-transparent text-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {String(skills.length).padStart(2, "0")} tools
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{title}</h3>
                <p className="mb-5 text-sm text-muted">{description}</p>
                <ul className="flex flex-wrap gap-2">
                  {skills.map(({ name, icon }) => (
                    <li
                      key={name}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-background/50 px-2.5 py-1.5 text-sm text-secondary transition-colors duration-300 hover:border-gold hover:text-gold"
                    >
                      {icon && <SkillIcon name={name} className="h-3.5 w-3.5" />}
                      {name}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </Reveal>
          ),
        )}
      </div>
    </Section>
  );
}
