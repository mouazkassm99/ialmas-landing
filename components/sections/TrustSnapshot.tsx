"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { getIcon, IconName } from "@/components/ui/Icons";
import { useLanguage } from "@/components/LanguageProvider";

export default function TrustSnapshot() {
  const { content } = useLanguage();
  const { trustSection } = content;

  return (
    <>
      <div className="section-divider" />
      <SectionWrapper id="about" className="bg-surface relative overflow-hidden">
        {/* Subtle diagonal pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #E9EDF3 0, #E9EDF3 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative text-center mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            {trustSection.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground heading-accent inline-block">
            {trustSection.title}
          </h2>
          <p className="text-muted mt-7 max-w-2xl mx-auto text-base leading-relaxed">
            {trustSection.description}
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustSection.cards.map((card) => (
            <div
              key={card.title}
              className="trust-card group p-7 rounded-2xl border border-border bg-background hover:border-primary/30 hover:bg-surface-alt transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/20 transition-colors duration-200">
                {getIcon(card.icon as IconName, "w-6 h-6")}
              </div>
              <h3 className="font-semibold text-foreground text-base mb-2.5">{card.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
