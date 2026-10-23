"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { ProjectCard } from "@/components/cards/project-card";
import { Button } from "@/components/nurui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { projects } from "@/data/projects";

const featured = projects.filter((p) => p.featured);
const others = projects.filter((p) => !p.featured);
const [spotlight, ...restFeatured] = featured;

export function Projects() {
  const [showAll, setShowAll] = useState(false);

  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Featured work"
      title="Projects I've"
      highlight="built & shipped"
      description="A selection of SaaS, fintech and e-commerce products I've worked on."
    >
      {spotlight && (
        <Reveal className="mb-6">
          <ProjectCard project={spotlight} variant="spotlight" />
        </Reveal>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {restFeatured.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 0.08} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
        {/* Always in the HTML so search engines index every project; hidden until "Show all". */}
        {others.map((project, i) => (
          <div
            key={project.slug}
            hidden={!showAll}
            className="hero-enter h-full"
            style={{ animationDelay: `${(i % 3) * 0.06}s` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {others.length > 0 && (
        <div className="mt-12 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full"
            onClick={() => setShowAll((s) => !s)}
            aria-expanded={showAll}
          >
            {showAll ? "Show fewer projects" : `Show all ${projects.length} projects`}
            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
          </Button>
        </div>
      )}
    </Section>
  );
}
