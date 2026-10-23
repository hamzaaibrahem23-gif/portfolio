"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, FileText, X } from "lucide-react";
import { useLenis } from "lenis/react";

import type { Certification } from "@/data/certifications";

type CertificateLightboxProps = {
  items: Certification[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

// Full-screen certificate viewer with keyboard navigation (Esc, ←, →).
export function CertificateLightbox({ items, index, onClose, onIndexChange }: CertificateLightboxProps) {
  const lenis = useLenis();
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = index !== null;
  const cert = open ? items[index] : null;

  useEffect(() => {
    if (!open) return;
    lenis?.stop();
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndexChange((index + 1) % items.length);
      if (e.key === "ArrowLeft") onIndexChange((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      lenis?.start();
    };
  }, [open, index, items.length, lenis, onClose, onIndexChange]);

  return (
    <AnimatePresence>
      {cert && index !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${cert.title} certificate`}
          data-lenis-prevent
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            key={index}
            className="relative w-full max-w-4xl"
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-2xl">
              <div className="relative aspect-[1200/927]">
                {cert.image && (
                  <Image
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    fill
                    loading="eager"
                    sizes="(min-width: 900px) 900px, 100vw"
                    className="object-contain"
                  />
                )}
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-3 text-white sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-heading text-lg font-semibold">{cert.title}</p>
                <p className="text-sm text-white/60">
                  {[cert.issuer, cert.platform, cert.date].filter(Boolean).join(" · ")}
                </p>
              </div>
              <div className="flex shrink-0 gap-2">
                {cert.pdf && (
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-2 text-sm transition-colors hover:border-[#d4af37] hover:text-[#f0d878]"
                  >
                    <FileText className="h-4 w-4" /> PDF
                  </a>
                )}
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#f0d878] px-4 py-2 text-sm font-medium text-black"
                  >
                    Verify <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>

            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute -top-3 -right-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-110"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>

          {items.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous certificate"
                onClick={(e) => {
                  e.stopPropagation();
                  onIndexChange((index - 1 + items.length) % items.length);
                }}
                className="absolute top-1/2 left-2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition-colors hover:border-[#d4af37] hover:text-[#f0d878] sm:inline-flex"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next certificate"
                onClick={(e) => {
                  e.stopPropagation();
                  onIndexChange((index + 1) % items.length);
                }}
                className="absolute top-1/2 right-2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition-colors hover:border-[#d4af37] hover:text-[#f0d878] sm:inline-flex"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs text-white/50">
                {index + 1} / {items.length}
              </p>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
