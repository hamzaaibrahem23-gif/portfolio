import Image from "next/image";
import { ArrowRight, Download, Mail } from "lucide-react";

import { Button } from "@/components/nurui/button";
import GradientHero from "@/components/nurui/gradient-hero";
import { GradientGridHero } from "@/components/nurui/gradient-grid-hero";
import GradientText from "@/components/nurui/gradient-text";
import { profile, socials } from "@/data/profile";

const socialButtonClass =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface/60 text-secondary backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold hover:shadow-glow";

export function Hero() {
  return (
    <GradientHero
      badge={`${profile.title} · ${profile.role}`}
      name={<GradientText className="pb-2">{profile.name}</GradientText>}
      description={profile.tagline}
      actions={
        <>
          <Button asChild size="lg" className="group max-sm:h-11 max-sm:px-5 max-sm:text-sm">
            <a href="#projects">
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="max-sm:h-11 max-sm:px-5 max-sm:text-sm">
            <a href="#contact">Contact Me</a>
          </Button>
          <Button asChild size="lg" variant="ghost" className="max-sm:h-11 max-sm:px-3 max-sm:text-sm">
            <a href={profile.resume} target="_blank" rel="noopener noreferrer">
              <Download className="h-4 w-4" />
              Resume
            </a>
          </Button>
        </>
      }
      socials={
        <>
          {socials.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={socialButtonClass}>
              <Icon className="h-[18px] w-[18px]" />
            </a>
          ))}
          <a href={`mailto:${profile.email}`} aria-label="Email" className={socialButtonClass}>
            <Mail className="h-[18px] w-[18px]" />
          </a>
        </>
      }
      visual={
        <GradientGridHero className="flex h-[270px] max-w-[520px] items-center justify-center md:h-[500px]">
          <div className="relative">
            {/* Rotating gold ring + soft glow behind the portrait */}
            <div className="absolute -inset-6 rounded-full bg-gold/20 blur-3xl" aria-hidden="true" />
            <div className="gold-ring relative rounded-full p-[3px] shadow-glow">
              <div className="rounded-full bg-background p-1.5">
                <Image
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  width={1024}
                  height={1024}
                  loading="eager"
                  fetchPriority="high"
                  sizes="(min-width: 768px) 340px, 210px"
                  className="h-[210px] w-[210px] rounded-full object-cover md:h-[340px] md:w-[340px]"
                />
              </div>
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-line-strong bg-surface/90 px-4 py-1.5 text-xs font-medium whitespace-nowrap text-foreground shadow-glow backdrop-blur">
              <span className="text-gold">{profile.yearsOfExperience}</span> years building for the web
            </div>
          </div>
        </GradientGridHero>
      }
    />
  );
}
