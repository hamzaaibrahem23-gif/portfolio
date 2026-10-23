"use client";

import { useEffect, useRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

// Nur UI gradient-grid-hero: a grid of particles that scatter away from the pointer.
// Recoloured to gold. The canvas only animates while particles are actually moving
// (pointer nearby), so it costs nothing when idle, on touch devices, or off-screen.
export function GradientGridHero({ className, children }: { className?: string; children?: ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    let running = false;
    let visible = true;

    let mouseX = -1000;
    let mouseY = -1000;
    let targetX = -1000;
    let targetY = -1000;

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      density: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = this.baseX = x;
        this.y = this.baseY = y;
        this.size = Math.random() * 3.5 + 1.5;
        this.density = Math.random() * 30 + 1;
        const hue = Math.random() * 16 + 36; // 36–52: deep gold to champagne
        const light = Math.random() * 25 + 45;
        this.color = `hsla(${hue}, 70%, ${light}%, 0.85)`;
      }

      /** Returns true while the particle is still away from its resting point. */
      update() {
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy) || 1;
        const maxDistance = 100;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          this.x -= (dx / distance) * force * this.density;
          this.y -= (dy / distance) * force * this.density;
          return true;
        }
        this.x -= (this.x - this.baseX) / 10;
        this.y -= (this.y - this.baseY) / 10;
        const away = Math.abs(this.x - this.baseX) + Math.abs(this.y - this.baseY);
        if (away < 0.05) {
          this.x = this.baseX;
          this.y = this.baseY;
          return false;
        }
        return true;
      }

      draw(c: CanvasRenderingContext2D) {
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fill();
      }
    }

    const particles: Particle[] = [];
    const gridSize = 30;

    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles.length = 0;
      const numX = Math.floor(width / gridSize);
      const numY = Math.floor(height / gridSize);
      for (let y = 0; y < numY; y++) {
        for (let x = 0; x < numX; x++) {
          particles.push(new Particle(x * gridSize + gridSize / 2, y * gridSize + gridSize / 2));
        }
      }
    };

    /** Draws one frame; returns true if anything is still moving. */
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const mdx = targetX - mouseX;
      const mdy = targetY - mouseY;
      mouseX += mdx * 0.1;
      mouseY += mdy * 0.1;
      let moving = Math.abs(mdx) + Math.abs(mdy) > 0.5;

      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (p.update()) moving = true;
        p.draw(ctx);
        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          if (dx >= 30 || dx <= -30) continue;
          const dy = p.y - particles[j].y;
          if (dy >= 30 || dy <= -30) continue;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 30) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(212, 175, 55, ${0.25 - distance / 150})`;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      return moving;
    };

    const loop = () => {
      if (render() && visible) {
        frame = requestAnimationFrame(loop);
      } else {
        running = false;
      }
    };

    const start = () => {
      if (running || !visible) return;
      running = true;
      frame = requestAnimationFrame(loop);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      // Only wake up when the pointer is close enough to disturb the grid.
      if (targetX > -120 && targetY > -120 && targetX < width + 120 && targetY < height + 120) start();
    };

    const onResize = () => {
      init();
      render();
    };

    init();
    render();
    window.addEventListener("resize", onResize);

    let observer: IntersectionObserver | undefined;
    if (!reduceMotion) {
      window.addEventListener("mousemove", onMouseMove, { passive: true });
      observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
      });
      observer.observe(canvas);
    }

    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className={cn("hero-fade-in relative h-[400px] w-full md:h-[500px]", className)}>
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" aria-hidden="true" />
      {children}
    </div>
  );
}
