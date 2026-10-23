import type { SVGProps } from "react";

import { skillCategories } from "@/data/skills";

// Brand logos are large SVG paths and appear several times on the page (marquee + cards).
// They are defined once in a hidden sprite and referenced with <use>, keeping the HTML small.

const iconSkills = skillCategories.flatMap((c) => c.skills).filter((s) => s.icon);

export const skillIconId = (name: string) => `skill-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

export function SkillIconSprite() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
      <defs>
        {iconSkills.map(({ name, icon: Icon }) =>
          Icon ? (
            <symbol key={name} id={skillIconId(name)} viewBox="0 0 24 24">
              <Icon size="24" />
            </symbol>
          ) : null,
        )}
      </defs>
    </svg>
  );
}

export function SkillIcon({ name, ...props }: { name: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <use href={`#${skillIconId(name)}`} />
    </svg>
  );
}
