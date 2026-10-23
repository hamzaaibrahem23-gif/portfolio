"use client";
import React, { useRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

// Nur UI spotlight-card (GlowCard): a gold spotlight and border glow that follow the pointer.
// The pointer position is tracked per card (no fixed backgrounds), so cards cost nothing while scrolling.
const GlowCard: React.FC<GlowCardProps> = ({ children, className, onPointerMove, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    }
    onPointerMove?.(e);
  };

  return (
    <div ref={ref} onPointerMove={handlePointerMove} className={cn("glow-card group/glow", className)} {...props}>
      {children}
    </div>
  );
};

export { GlowCard };
