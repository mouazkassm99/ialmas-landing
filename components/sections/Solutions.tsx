"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SolutionCard from "@/components/ui/SolutionCard";
import { useLanguage } from "@/components/LanguageProvider";

export default function Solutions() {
  const { content } = useLanguage();
  const { solutionsSection } = content;

  return (
    <>
      <div className="section-divider" />
      <SectionWrapper id="solutions" className="bg-background relative overflow-hidden">
        {/* Faint large watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <svg
            viewBox="0 0 200 200"
            className="w-[700px] h-[700px] opacity-[0.025] text-primary"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          >
            <path d="M100 10 L190 55 L190 145 L100 190 L10 145 L10 55 Z" />
            <path d="M100 30 L170 65 L170 135 L100 170 L30 135 L30 65 Z" />
            <path d="M100 50 L150 75 L150 125 L100 150 L50 125 L50 75 Z" />
          </svg>
        </div>

        <div className="relative text-center mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            {solutionsSection.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground heading-accent inline-block">
            {solutionsSection.title}
          </h2>
          <p className="text-muted mt-7 max-w-2xl mx-auto text-base leading-relaxed">
            {solutionsSection.description}
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutionsSection.items.map((solution) => (
            <SolutionCard
              key={solution.title}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
            />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
