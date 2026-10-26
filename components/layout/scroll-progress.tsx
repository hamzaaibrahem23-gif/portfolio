"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";

// Gold reading-progress bar at the top of the page plus a floating "back to top" button.
export function ScrollProgress() {
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const [showTop, setShowTop] = useState(false);
  const lenis = useLenis();

  useMotionValueEvent(scrollY, "change", (y) => setShowTop(y > 900));

  const toTop = () => (lenis ? lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: "smooth" }));

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-gold-deep via-gold to-gold-hover"
      />
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            onClick={toTop}
            aria-label="Back to top"
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            className="fixed right-5 bottom-5 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-surface/90 text-gold shadow-glow backdrop-blur transition-colors hover:bg-gold hover:text-on-gold"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
