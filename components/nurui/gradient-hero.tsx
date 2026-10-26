import React, { type CSSProperties, type ReactNode } from "react";

interface GradientHeroProps {
  badge: string;
  greeting?: string;
  name: ReactNode;
  description: string;
  actions?: ReactNode;
  socials?: ReactNode;
  visual?: ReactNode;
  scrollTarget?: string;
}

// Staggered fade-up entrance done in CSS (see .hero-enter in globals.css), so the hero
// paints immediately without waiting for JavaScript — this keeps LCP fast.
const enter = (step: number): CSSProperties => ({ animationDelay: `${step * 0.12}s` });

// Nur UI gradient-hero: floating gradient blobs behind a two-column intro.
// Content is passed in as props so the section stays data-driven.
const GradientHero = ({
  badge,
  greeting = "Hi, I'm",
  name,
  description,
  actions,
  socials,
  visual,
  scrollTarget = "#about",
}: GradientHeroProps) => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20 pb-24 sm:px-6 lg:pt-28"
      style={{ background: "var(--hero-gradient)" }}
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-20 left-10 h-72 w-72 animate-blob rounded-full will-change-transform bg-gold opacity-20 blur-3xl mix-blend-multiply dark:opacity-[0.12] dark:mix-blend-screen" />
        <div className="animation-delay-2000 absolute top-40 right-10 h-72 w-72 animate-blob rounded-full will-change-transform bg-amber-500 opacity-20 blur-3xl mix-blend-multiply dark:opacity-10 dark:mix-blend-screen" />
        <div className="animation-delay-4000 absolute bottom-20 left-1/3 h-72 w-72 animate-blob rounded-full will-change-transform bg-yellow-200 opacity-30 blur-3xl mix-blend-multiply dark:bg-gold-deep dark:opacity-10 dark:mix-blend-screen" />
        <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-5 sm:space-y-6">
          <div style={enter(0)} className="hero-enter inline-block">
            <div className="relative rounded-full border border-line-strong bg-surface/60 px-4 py-1.5 text-sm font-medium text-foreground backdrop-blur-sm">
              <span className="relative z-10 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                </span>
                {badge}
              </span>
              <span className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-gold/10 to-gold-hover/10" />
            </div>
          </div>

          <h1 style={enter(1)} className="hero-enter font-heading text-5xl font-bold tracking-tight md:text-7xl">
            <span className="block text-foreground">{greeting}</span>
            {name}
          </h1>

          <p style={enter(2)} className="hero-enter max-w-[600px] text-lg text-secondary md:text-xl">
            {description}
          </p>

          {actions && (
            <div style={enter(3)} className="hero-enter flex flex-wrap gap-4 pt-2">
              {actions}
            </div>
          )}

          {socials && (
            <div style={enter(4)} className="hero-enter flex flex-wrap gap-3 pt-2">
              {socials}
            </div>
          )}
        </div>

        <div className="order-first flex justify-center lg:order-none">{visual}</div>
      </div>

      <a
        href={scrollTarget}
        aria-label="Scroll to next section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce sm:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-line-strong p-1">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
        </div>
      </a>
    </section>
  );
};

export default GradientHero;
