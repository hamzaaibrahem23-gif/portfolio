"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, BadgeCheck, Calendar, Maximize2 } from "lucide-react";

import type { Certification } from "@/data/certifications";

type CertificationCardProps = {
  cert: Certification;
  onOpen: () => void;
};

// Certificate preview with a gentle 3D tilt toward the pointer and a shine sweep on hover.
export function CertificationCard({ cert, onOpen }: CertificationCardProps) {
  const { title, issuer, platform, date, credentialUrl, image } = cert;
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <div className="group flex h-full flex-col">
      <div className="[perspective:1000px]">
        <motion.div
          ref={ref}
          onPointerMove={handleMove}
          onPointerLeave={reset}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative"
        >
          <button
            type="button"
            onClick={onOpen}
            aria-label={`View ${title} certificate`}
            className="shine relative block w-full overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-[0_24px_48px_-24px_rgb(0_0_0/0.6)] transition-shadow duration-500 group-hover:shadow-glow"
          >
            <div className="relative aspect-[1200/927] overflow-hidden rounded-xl">
              {image && (
                <Image
                  src={image}
                  alt={`${title} certificate`}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              )}
            </div>
            <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/35 group-hover:opacity-100">
              <span className="inline-flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-sm font-medium text-foreground backdrop-blur">
                <Maximize2 className="h-4 w-4 text-gold" />
                View certificate
              </span>
            </span>
          </button>
          <span
            className="absolute -top-3 left-4 inline-flex items-center gap-1 rounded-full border border-line-strong bg-background px-2.5 py-1 text-xs font-medium text-gold shadow-glow"
            style={{ transform: "translateZ(30px)" }}
          >
            <BadgeCheck className="h-3.5 w-3.5" />
            {issuer}
          </span>
        </motion.div>
      </div>

      <div className="flex flex-1 flex-col px-1 pt-5">
        <h3 className="font-heading leading-snug font-semibold text-balance text-foreground transition-colors group-hover:text-gold">
          {title}
        </h3>
        <div className="mt-auto flex items-center justify-between gap-3 pt-3 text-xs text-muted">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {[date, platform].filter(Boolean).join(" · ")}
          </span>
          {credentialUrl && (
            <a
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-gold transition-colors hover:text-gold-hover"
            >
              Verify <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
