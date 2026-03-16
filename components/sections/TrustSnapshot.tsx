"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getIcon, IconName } from "@/components/ui/Icons";
import { useLanguage } from "@/components/LanguageProvider";

export default function TrustSnapshot() {
  const { content } = useLanguage();
  const { trustSection } = content;

  return (
    <>
      <div className="section-divider" />
      <SectionWrapper id="about" className="bg-surface relative overflow-hidden dot-grid">
        {/* Subtle red radial wash */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 100% 50%, rgba(235,30,42,0.06), transparent 70%)",
          }}
        />

        <ScrollReveal className="relative text-center mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            {trustSection.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground heading-accent inline-block">
            {trustSection.title}
          </h2>
          <p className="text-muted mt-7 max-w-2xl mx-auto text-base leading-relaxed">
            {trustSection.description}
          </p>
        </ScrollReveal>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustSection.cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 80} from="up">
              <div className="trust-card group p-7 rounded-2xl border border-border bg-background hover:border-primary/30 hover:bg-surface-alt transition-all duration-200 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/20 group-hover:ring-2 group-hover:ring-primary/20 transition-all duration-200">
                  {getIcon(card.icon as IconName, "w-6 h-6")}
                </div>
                <h3 className="font-semibold text-foreground text-base mb-2.5">{card.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{card.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
