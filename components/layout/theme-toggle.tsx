"use client";

import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";

// The current theme lives on <html data-theme> (set before paint by the script in app/layout.tsx),
// so both icons are rendered and CSS decides which one shows — no hydration mismatch.
export function ThemeToggle({ className }: { className?: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark / light mode"
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/60 text-secondary transition-colors hover:border-gold hover:text-gold",
        className,
      )}
    >
      <Sun className="h-[18px] w-[18px] scale-0 rotate-90 transition-transform duration-300 dark:scale-100 dark:rotate-0" />
      <Moon className="absolute h-[18px] w-[18px] scale-100 rotate-0 transition-transform duration-300 dark:scale-0 dark:-rotate-90" />
    </button>
  );
}
