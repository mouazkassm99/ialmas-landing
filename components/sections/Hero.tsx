"use client";

import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";
import { siteConfig } from "@/content";
import { useLanguage } from "@/components/LanguageProvider";
import HeroVisual from "@/components/sections/HeroVisual";

export default function Hero() {
  const { content } = useLanguage();
  const { hero } = content;

  return (
    <section
      id="hero"
      className="hero-bg scanline-overlay min-h-svh flex flex-col justify-center px-4 pt-20 pb-32 md:pt-24 md:pb-24 relative overflow-hidden"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #E9EDF3 1px, transparent 1px), linear-gradient(to bottom, #E9EDF3 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated concentric rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="hero-ring hero-ring-1" />
        <div className="hero-ring hero-ring-2" />
        <div className="hero-ring hero-ring-3" />
      </div>

      {/* Red accent corner glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-[0.07]"
        style={{
          background: "radial-gradient(circle at top right, #EB1E2A, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none opacity-[0.04]"
        style={{
          background: "radial-gradient(circle at bottom left, #EB1E2A, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text side */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-start gap-6 flex-1">
          {/* Logo */}
          <div className="mb-2">
            <Image
              src="/logos/ialmas-logo.png"
              alt={siteConfig.name}
              width={160}
              height={52}
              className="h-12 w-auto object-contain"
              priority
              unoptimized
            />
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-foreground leading-tight tracking-tight">
            {hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-muted text-lg md:text-xl max-w-2xl leading-relaxed">
            {hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full sm:w-auto justify-center lg:justify-start">
            <CtaButton href="#contact" variant="primary" size="lg" className="btn-shimmer">
              {hero.primaryCta}
            </CtaButton>
            <CtaButton href="#vendors" variant="secondary" size="lg">
              {hero.secondaryCta}
            </CtaButton>
          </div>

          {/* Trust chips */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-2">
            {hero.trustChips.map((chip) => (
              <span
                key={chip}
                className="text-xs text-muted border border-border rounded-full px-3 py-1 bg-surface/60 hover:border-primary/40 hover:text-foreground transition-colors duration-150"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Visual side */}
        <div className="hero-visual-float flex-1 w-full max-w-[480px] lg:max-w-none hidden md:block">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
