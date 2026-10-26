"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import BackgroundShineButton from "@/components/nurui/background-shine-button";
import ShinyInput from "@/components/nurui/shiny-input";
import ShinyTextArea from "@/components/nurui/shiny-text-area";
import { GlowCard } from "@/components/nurui/spotlight-card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { profile, socials } from "@/data/profile";

const linkedin = socials.find((s) => s.label === "LinkedIn")?.href ?? "";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "WhatsApp", value: profile.phone, href: profile.whatsapp, icon: FaWhatsapp },
  { label: "LinkedIn", value: "Hamza Ibrahem", href: linkedin, icon: FaLinkedinIn },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  // No backend: the form opens the visitor's email app with the message pre-filled.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "") || `Portfolio inquiry from ${name}`;
    const body = `${data.get("message")}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <Section
      id="contact"
      index="07"
      eyebrow="Contact"
      title="Let's build something"
      highlight="great together"
      description="Have a project in mind or a role to fill? I usually reply within a day."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-4">
          {channels.map(({ label, value, href, icon: Icon }, i) => (
            <Reveal key={label} delay={i * 0.06}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="block"
              >
                <GlowCard className="group flex items-center gap-4 p-5">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-elevated text-gold transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs tracking-wider text-muted uppercase">{label}</p>
                    <p className="truncate font-medium text-foreground transition-colors group-hover:text-gold">{value}</p>
                  </div>
                </GlowCard>
              </a>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <p className="flex items-center gap-2 px-1 pt-2 text-sm text-secondary">
              <MapPin className="h-4 w-4 text-gold" /> {profile.location} — open to remote work
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <GlowCard className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <ShinyInput id="name" name="name" type="text" placeholder="Your name" required autoComplete="name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <ShinyInput
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  autoComplete="email"
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <ShinyInput id="subject" name="subject" type="text" placeholder="What's it about?" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <ShinyTextArea id="message" name="message" placeholder="Tell me about your project…" required />
              </div>
              <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
                <BackgroundShineButton className="w-full sm:w-auto">
                  <Send className="h-4 w-4" />
                  Send message
                </BackgroundShineButton>
                <p className="text-sm text-muted" aria-live="polite">
                  {sent ? "Your email app should open with the message ready to send." : "Opens your email app."}
                </p>
              </div>
            </form>
          </GlowCard>
        </Reveal>
      </div>
    </Section>
  );
}
