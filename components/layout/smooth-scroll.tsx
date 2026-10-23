"use client";

import type { ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { ReactLenis } from "lenis/react";

// Inertia-based smooth scrolling for the whole page (Lenis).
// In-page anchor links (#about, #projects, …) are animated too, offset for the fixed navbar.
// Falls back to native wheel scrolling for visitors who prefer reduced motion.
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: !reduceMotion, anchors: { offset: -80 } }}>
      {children}
    </ReactLenis>
  );
}
