import type { ReactNode } from "react";

import GradientText from "@/components/nurui/gradient-text";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  /** Two-digit section number shown before the eyebrow, e.g. "01". */
  index?: string;
  eyebrow: string;
  title: string;
  /** The part of the title rendered with the gold gradient. */
  highlight?: string;
  description?: string;
  /** Optional content aligned to the right of the heading (filters, links…). */
  aside?: ReactNode;
  className?: string;
  children: ReactNode;
};

// Shared wrapper for every page section: consistent spacing and heading.
export function Section({ id, index, eyebrow, title, highlight, description, aside, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("relative px-4 py-24 sm:px-6 md:py-32", className)}>
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-gold uppercase">
              {index && <span className="text-muted">{index}</span>}
              <span className="h-px w-10 bg-gradient-to-r from-gold to-transparent" />
              {eyebrow}
            </p>
            <h2 className="font-heading text-4xl leading-[1.05] font-bold tracking-tight text-balance text-foreground md:text-6xl">
              {title} {highlight && <GradientText>{highlight}</GradientText>}
            </h2>
            {description && <p className="mt-5 text-lg text-pretty text-secondary">{description}</p>}
          </div>
          {aside}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
