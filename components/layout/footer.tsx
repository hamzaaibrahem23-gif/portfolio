import { ArrowUp } from "lucide-react";

import { navLinks, profile, socials } from "@/data/profile";

async function CurrentYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

export function Footer() {
  return (
    <footer className="relative border-t border-line px-4 py-12 sm:px-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#home" className="font-heading text-xl font-bold text-foreground">
            {profile.name}
            <span className="text-gold">.</span>
          </a>
          <p className="mt-2 text-sm text-secondary">
            {profile.title} · {profile.location}
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-secondary transition-colors hover:text-gold">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-secondary transition-colors hover:border-gold hover:text-gold"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl items-center justify-between border-t border-line pt-6 text-xs text-muted">
        <p>
          © <CurrentYear /> {profile.name}. All rights reserved.
        </p>
        <a href="#home" className="inline-flex items-center gap-1 transition-colors hover:text-gold">
          Back to top <ArrowUp className="h-3.5 w-3.5" />
        </a>
      </div>
    </footer>
  );
}
