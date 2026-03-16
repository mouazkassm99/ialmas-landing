import SectionWrapper from "@/components/ui/SectionWrapper";
import { getIcon, IconName } from "@/components/ui/Icons";
import { trustCards } from "@/content";

export default function TrustSnapshot() {
  return (
    <SectionWrapper id="about" className="bg-surface">
      <div className="text-center mb-10">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Who We Are</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Your Trusted Cybersecurity Partner
        </h2>
        <p className="text-muted mt-3 max-w-xl mx-auto text-sm leading-relaxed">
          iAlmas is a value-added distributor and cybersecurity solutions provider supporting secure digital transformation across the region.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {trustCards.map((card) => (
          <div
            key={card.title}
            className="p-6 rounded-xl border border-border bg-background hover:border-primary/30 transition-colors duration-200"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
              {getIcon(card.icon as IconName)}
            </div>
            <h3 className="font-semibold text-foreground text-sm mb-2">{card.title}</h3>
            <p className="text-muted text-xs leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
