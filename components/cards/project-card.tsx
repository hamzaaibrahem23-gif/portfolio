import Image from "next/image";
import { ArrowUpRight, ImageIcon, Lock } from "lucide-react";

import { GlowCard } from "@/components/nurui/spotlight-card";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  /** "spotlight" renders a wide, horizontal card for the top project. */
  variant?: "default" | "spotlight";
};

function hostOf(href?: string) {
  return href ? href.replace(/^https?:\/\//, "").replace(/\/$/, "") : "private project";
}

// Screenshot inside a minimal browser window; falls back to the logo, then to a placeholder.
function ProjectMedia({ project, sizes }: { project: Project; sizes: string }) {
  const { title, image, logo, links } = project;

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-elevated shadow-[0_20px_40px_-20px_rgb(0_0_0/0.5)] transition-transform duration-700 ease-out group-hover:-translate-y-1">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-line bg-surface px-3 py-2">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
        </span>
        <span className="mx-auto flex max-w-[70%] items-center gap-1 truncate rounded-md bg-background/70 px-3 py-0.5 font-mono text-[10px] text-muted">
          {!links?.length && <Lock className="h-2.5 w-2.5 shrink-0" />}
          {hostOf(links?.[0]?.href)}
        </span>
      </div>

      <div className="relative aspect-[19/10] overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={`Screenshot of ${title}`}
            fill
            sizes={sizes}
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : logo ? (
          <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_50%_40%,#ffffff,#f4f1e8)]">
            <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
            <Image
              src={logo}
              alt={`${title} logo`}
              width={320}
              height={160}
              unoptimized={logo.endsWith(".svg")}
              className="relative h-[34%] w-auto max-w-[60%] object-contain transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ) : (
          <div className="bg-grid flex h-full flex-col items-center justify-center gap-2 text-muted">
            <ImageIcon className="h-8 w-8 text-gold/60" />
            <span className="text-xs tracking-wider uppercase">Screenshot coming soon</span>
          </div>
        )}
      </div>
    </div>
  );
}

export function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
  const { title, category, description, highlights, tech, links } = project;
  const spotlight = variant === "spotlight";

  return (
    <GlowCard
      className={cn(
        "group flex h-full flex-col gap-6 p-4 sm:p-5",
        spotlight && "lg:grid lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-10 lg:p-6",
      )}
    >
      <ProjectMedia
        project={project}
        sizes={spotlight ? "(min-width: 1024px) 640px, 100vw" : "(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"}
      />

      <div className={cn("flex flex-1 flex-col px-1 pb-1", spotlight && "lg:py-4")}>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-line-strong bg-gold/10 px-2.5 py-0.5 text-xs font-medium text-gold">
            {category}
          </span>
          {spotlight && <span className="font-mono text-xs text-muted">Featured project</span>}
        </div>

        <h3
          className={cn(
            "font-heading font-semibold tracking-tight text-foreground transition-colors group-hover:text-gold",
            spotlight ? "text-2xl md:text-3xl" : "text-lg",
          )}
        >
          {title}
        </h3>
        <p className={cn("mt-2 leading-relaxed text-secondary", spotlight ? "text-base" : "text-sm")}>{description}</p>

        {highlights && highlights.length > 0 && (
          <ul className="mt-4 space-y-1.5 text-sm text-secondary">
            {highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <li key={t} className="rounded-md border border-line bg-background/50 px-2 py-1 font-mono text-[11px] text-secondary">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {links && links.length > 0 ? (
            links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all",
                  i === 0
                    ? "bg-gold-gradient text-on-gold hover:brightness-110"
                    : "border border-line text-foreground hover:border-gold hover:text-gold",
                )}
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ))
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm text-muted">
              <Lock className="h-3.5 w-3.5" />
              Private / internal project
            </span>
          )}
        </div>
      </div>
    </GlowCard>
  );
}
