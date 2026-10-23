"use client";
import { useRef, useState, type InputHTMLAttributes } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

type ShinyInputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

// Nur UI shiny-input: a gold border that follows the pointer while hovering/focused.
const ShinyInput = ({ className, ...props }: ShinyInputProps) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const positionX = useMotionValue(0);
  const positionY = useMotionValue(0);
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
    if (!overlayRef.current) return;
    const rect = overlayRef.current.getBoundingClientRect();
    positionX.set(e.clientX - rect.left);
    positionY.set(e.clientY - rect.top);
  };

  const shineBorder = useTransform(
    [positionX, positionY],
    ([x, y]) => `radial-gradient(30% 30px at ${x}px ${y}px, black 45%, transparent)`,
  );

  return (
    <div className={cn("relative", className)}>
      <input
        {...props}
        onMouseMove={handleMouseMove}
        onFocus={() => setOpacity(1)}
        onBlur={() => setOpacity(0)}
        onMouseEnter={() => setOpacity(1)}
        onMouseLeave={(e) => document.activeElement !== e.currentTarget && setOpacity(0)}
        className="h-12 w-full rounded-lg border border-line bg-elevated/60 p-3.5 text-foreground transition-colors duration-500 placeholder:text-muted focus:border-gold focus:outline-none"
      />
      <motion.div
        ref={overlayRef}
        aria-hidden="true"
        style={{ opacity, WebkitMaskImage: shineBorder, maskImage: shineBorder }}
        className="pointer-events-none absolute inset-0 rounded-lg border border-gold transition-opacity duration-500"
      />
    </div>
  );
};

export default ShinyInput;
