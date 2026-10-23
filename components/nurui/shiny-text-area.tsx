"use client";
import { useRef, useState, type TextareaHTMLAttributes } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

type ShinyTextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string;
};

// Nur UI shiny-text-area: the textarea counterpart of ShinyInput.
const ShinyTextArea = ({ className, rows = 5, ...props }: ShinyTextAreaProps) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const positionX = useMotionValue(0);
  const positionY = useMotionValue(0);
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLTextAreaElement>) => {
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
      <textarea
        {...props}
        rows={rows}
        onMouseMove={handleMouseMove}
        onFocus={() => setOpacity(1)}
        onBlur={() => setOpacity(0)}
        onMouseEnter={() => setOpacity(1)}
        onMouseLeave={(e) => document.activeElement !== e.currentTarget && setOpacity(0)}
        className="block w-full resize-none rounded-lg border border-line bg-elevated/60 p-3.5 text-foreground transition-colors duration-500 placeholder:text-muted focus:border-gold focus:outline-none"
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

export default ShinyTextArea;
