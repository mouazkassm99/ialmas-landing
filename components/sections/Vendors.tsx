"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import VendorCard from "@/components/ui/VendorCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/components/LanguageProvider";

export default function Vendors() {
  const { content } = useLanguage();
  const { vendorsSection } = content;

  return (
    <>
      <div className="section-divider" />
      <SectionWrapper id="vendors" className="bg-surface relative overflow-hidden">
        {/* Corner glow */}
        <div
          className="absolute top-0 left-0 w-[500px] h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at top left, rgba(235,30,42,0.07), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[300px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at bottom right, rgba(235,30,42,0.05), transparent 70%)",
          }}
        />

        <ScrollReveal className="relative text-center mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            {vendorsSection.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground heading-accent inline-block">
            {vendorsSection.title}
          </h2>
          <p className="text-muted mt-7 max-w-2xl mx-auto text-base leading-relaxed">
            {vendorsSection.description}
          </p>
        </ScrollReveal>

        <div className="relative grid grid-cols-2 md:grid-cols-3 gap-5">
          {vendorsSection.items.map((vendor, i) => (
            <ScrollReveal key={vendor.name} delay={i * 60} from="scale">
              <VendorCard
                name={vendor.name}
                logo={vendor.logo}
                url={vendor.url}
                description={vendor.description}
              />
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
