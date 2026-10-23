import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type BackgroundShineButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

// Nur UI background-shine-button: a sheen that sweeps across the button.
const BackgroundShineButton = ({ children, className, type = "submit", ...props }: BackgroundShineButtonProps) => {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex h-12 animate-shine items-center justify-center gap-2 rounded-lg border border-gold bg-[linear-gradient(110deg,color-mix(in_srgb,var(--gold)_12%,transparent),45%,color-mix(in_srgb,var(--gold)_35%,transparent),55%,color-mix(in_srgb,var(--gold)_12%,transparent))] bg-[length:200%_100%] px-6 font-medium text-foreground transition-all hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default BackgroundShineButton;
