"use client";

import { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, ChevronDown } from "lucide-react";

import { CertificateLightbox } from "@/components/cards/certificate-lightbox";
import { CertificationCard } from "@/components/cards/certification-card";
import { Button } from "@/components/nurui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { certifications } from "@/data/certifications";
import { cn } from "@/lib/utils";

const gallery = certifications.filter((c) => c.image);
const others = certifications.filter((c) => !c.image);
const issuers = ["All", ...Array.from(new Set(gallery.map((c) => c.issuer)))];

// Collapsed, the gallery shows two rows on desktop and three cards on phones.
const DESKTOP_LIMIT = 6;
const MOBILE_LIMIT = 3;

export function Certifications() {
  const [filter, setFilter] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);

  const visible = useMemo(() => (filter === "All" ? gallery : gallery.filter((c) => c.issuer === filter)), [filter]);
  const close = useCallback(() => setOpenIndex(null), []);

  return (
    <Section
      id="certifications"
      index="06"
      eyebrow="Certifications"
      title="Always"
      highlight="learning"
      description="Verified courses from IBM, Google Cloud and more — click any certificate to view it."
      aside={
        issuers.length > 2 && (
          <div className="flex flex-wrap gap-1 rounded-full border border-line bg-surface/70 p-1" role="tablist">
            {issuers.map((issuer) => {
              const count = issuer === "All" ? gallery.length : gallery.filter((c) => c.issuer === issuer).length;
              const active = filter === issuer;
              return (
                <button
                  key={issuer}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(issuer)}
                  className={cn(
                    "relative rounded-full px-4 py-1.5 text-sm transition-colors",
                    active ? "text-on-gold" : "text-secondary hover:text-gold",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="cert-filter"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-gold-gradient"
                    />
                  )}
                  <span className="relative">
                    {issuer} <span className="opacity-60">{count}</span>
                  </span>
                </button>
              );
            })}
          </div>
        )
      }
    >
      <motion.div layout className="grid gap-x-6 gap-y-12 pt-3 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((cert, i) => (
            <motion.div
              key={cert.title}
              layout
              // Kept in the HTML (for search engines) but hidden until "Show all".
              className={cn(
                !expanded && i >= DESKTOP_LIMIT && "hidden",
                !expanded && i >= MOBILE_LIMIT && "max-sm:hidden",
              )}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Reveal delay={(i % 3) * 0.06} className="h-full">
                <CertificationCard cert={cert} onOpen={() => setOpenIndex(i)} />
              </Reveal>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length > MOBILE_LIMIT && (
        <div className={cn("mt-12 flex justify-center", visible.length <= DESKTOP_LIMIT && "sm:hidden")}>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full"
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
          >
            {expanded ? "Show fewer certificates" : `Show all ${visible.length} certificates`}
            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
          </Button>
        </div>
      )}

      {others.length > 0 && (
        <Reveal className="mt-16">
          <p className="mb-5 font-mono text-xs tracking-[0.25em] text-muted uppercase">More credentials</p>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((cert) => (
              <li
                key={cert.title}
                className="group flex items-center gap-4 rounded-2xl border border-line bg-surface/60 p-4 transition-colors hover:border-line-strong"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold transition-transform duration-300 group-hover:scale-110">
                  <BadgeCheck className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">{cert.title}</p>
                  <p className="text-xs text-muted">{cert.issuer}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      )}

      <CertificateLightbox items={visible} index={openIndex} onClose={close} onIndexChange={setOpenIndex} />
    </Section>
  );
}
