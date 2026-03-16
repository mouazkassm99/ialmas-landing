import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";
import { heroContent, siteConfig } from "@/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-bg min-h-[100svh] flex flex-col items-center justify-center px-4 pt-20 pb-32 md:pt-24 md:pb-24 text-center relative overflow-hidden"
    >
      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #E9EDF3 1px, transparent 1px), linear-gradient(to bottom, #E9EDF3 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-3xl mx-auto flex flex-col items-center gap-6">
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
        <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
          {heroContent.headline}
        </h1>

        {/* Subheadline */}
        <p className="text-muted text-base md:text-lg max-w-xl leading-relaxed">
          {heroContent.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full sm:w-auto justify-center">
          <CtaButton href={heroContent.primaryCta.href} variant="primary" size="lg">
            {heroContent.primaryCta.label}
          </CtaButton>
          <CtaButton href={heroContent.secondaryCta.href} variant="secondary" size="lg">
            {heroContent.secondaryCta.label}
          </CtaButton>
        </div>

        {/* Trust chips */}
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {heroContent.trustChips.map((chip) => (
            <span
              key={chip}
              className="text-xs text-muted border border-border rounded-full px-3 py-1 bg-surface/60"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
