import { Calendar } from "lucide-react";

import { GlowCard } from "@/components/nurui/spotlight-card";
import type { Experience } from "@/data/experience";

export function ExperienceItem({ item }: { item: Experience }) {
  const current = item.end === "Present";

  return (
    <div className="relative pl-10 md:pl-14">
      {/* Timeline dot */}
      <span className="absolute top-7 left-0 flex h-[15px] w-[15px] -translate-x-1/2 items-center justify-center md:left-0">
        {current && <span className="absolute h-full w-full animate-ping rounded-full bg-gold/60" />}
        <span className="relative h-[15px] w-[15px] rounded-full border-2 border-gold bg-background" />
      </span>

      <GlowCard className="p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">{item.role}</h3>
            <p className="font-medium text-gold">{item.company}</p>
          </div>
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-line bg-elevated px-3 py-1 text-xs text-secondary">
            <Calendar className="h-3.5 w-3.5" />
            {item.start} — {item.end}
          </span>
        </div>

        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-secondary">
          {item.achievements.map((a) => (
            <li key={a} className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
              {a}
            </li>
          ))}
        </ul>

        {item.tech && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {item.tech.map((t) => (
              <li key={t} className="rounded-md bg-elevated px-2 py-1 font-mono text-xs text-secondary">
                {t}
              </li>
            ))}
          </ul>
        )}
      </GlowCard>
    </div>
  );
}
