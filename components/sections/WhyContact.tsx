"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/components/LanguageProvider";

export default function WhyContact() {
  const { content } = useLanguage();
  const { whySection } = content;

  return (
    <>
      <div className="section-divider" />
      <SectionWrapper className="bg-background relative overflow-hidden">
        {/* Red wash gradient sides */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 0% 50%, rgba(235,30,42,0.09), transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 40% 60% at 100% 50%, rgba(235,30,42,0.05), transparent 70%)",
          }}
        />

        {/* Background circuit trace decoration */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#EB1E2A" strokeWidth="1" strokeDasharray="8 12" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#EB1E2A" strokeWidth="1" strokeDasharray="8 12" />
        </svg>

        <div className="relative max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              {whySection.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground heading-accent inline-block mb-3">
              {whySection.title}
            </h2>
            <p className="text-muted text-base mt-7 mb-16 leading-relaxed max-w-xl mx-auto">
              {whySection.description}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-16">
            {whySection.items.map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 100} from="up">
                <div className="why-num-wrap flex flex-col items-center gap-4 text-center group/why cursor-default">
                  <span className="why-num select-none">{item.num}</span>
                  <h3 className="font-semibold text-foreground text-base leading-snug">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Red accent line before CTA */}
          <div className="w-20 h-0.5 bg-primary mx-auto mb-10 opacity-60 rounded-full" />

          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 btn-shimmer text-white font-semibold px-10 py-4 rounded-xl transition-colors duration-150 shadow-lg shadow-primary/25 text-base"
          >
            {whySection.cta}
            <svg
              className="w-4 h-4 flip-rtl"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </SectionWrapper>
    </>
  );
}
