import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
}

const goldColors = ["var(--gold-deep)", "var(--gold)", "var(--gold-hover)", "var(--gold)", "var(--gold-deep)"];

// Nur UI gradient-text: an animated linear-gradient clipped to the text.
export default function GradientText({
  children,
  className,
  colors = goldColors,
  animationSpeed = 8,
}: GradientTextProps) {
  return (
    <span
      className={cn("inline-block animate-gradient bg-clip-text text-transparent", className)}
      style={{
        backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
        backgroundSize: "300% 100%",
        WebkitBackgroundClip: "text",
        animationDuration: `${animationSpeed}s`,
      }}
    >
      {children}
    </span>
  );
}
