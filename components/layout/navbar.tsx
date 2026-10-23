"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { navLinks, profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Highlight the link of the section currently in the middle of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(`#${entry.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    document.querySelectorAll("main section[id]").forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const glass = "border border-line bg-background/70 shadow-[0_8px_32px_rgb(0_0_0/0.18)] backdrop-blur-xl";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-4 transition-all duration-500",
          scrolled ? "pt-0" : "pt-2",
        )}
      >
        <a
          href="#home"
          className={cn(
            "flex h-12 items-center gap-2 rounded-full px-4 font-heading text-lg font-bold tracking-tight text-foreground transition-all duration-500",
            scrolled && glass,
          )}
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-gold-hover via-gold to-gold-deep text-xs font-black text-black">
            {profile.firstName[0]}
          </span>
          <span className="hidden sm:inline">
            {profile.firstName}
            <span className="text-gold">.</span>
          </span>
        </a>

        {/* Center pill */}
        <ul className={cn("hidden h-12 items-center gap-1 rounded-full px-1.5 lg:flex", glass)}>
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href} className="relative">
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-gold/15 ring-1 ring-gold/40"
                  />
                )}
                <a
                  href={link.href}
                  className={cn(
                    "relative block rounded-full px-4 py-2 text-sm transition-colors hover:text-gold",
                    isActive ? "text-gold" : "text-secondary",
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className={cn("flex h-12 items-center gap-1.5 rounded-full p-1 transition-all duration-500", scrolled && glass)}>
          <ThemeToggle />
          <a
            href="#contact"
            className="group hidden h-10 items-center gap-1 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-hover px-5 text-sm font-semibold text-black transition hover:brightness-110 sm:inline-flex"
          >
            Hire me
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-6xl rounded-3xl border border-line bg-background/95 p-2 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-2xl px-4 py-3 text-sm transition-colors hover:bg-elevated hover:text-gold",
                    active === link.href ? "bg-gold/10 text-gold" : "text-foreground",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
