import SectionWrapper from "@/components/ui/SectionWrapper";
import SolutionCard from "@/components/ui/SolutionCard";
import { solutions } from "@/content";

export default function Solutions() {
  return (
    <SectionWrapper id="solutions" className="bg-background">
      <div className="text-center mb-10">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Capabilities</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Security Solutions for Every Layer
        </h2>
        <p className="text-muted mt-3 max-w-xl mx-auto text-sm leading-relaxed">
          We bring together proven technologies that address the full spectrum of enterprise cybersecurity challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {solutions.map((solution) => (
          <SolutionCard
            key={solution.title}
            icon={solution.icon}
            title={solution.title}
            description={solution.description}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
