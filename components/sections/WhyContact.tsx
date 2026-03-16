import SectionWrapper from "@/components/ui/SectionWrapper";
import { getIcon, IconName } from "@/components/ui/Icons";
import { whyContact } from "@/content";

export default function WhyContact() {
  return (
    <SectionWrapper className="bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Why Engage</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          Start the Conversation Now
        </h2>
        <p className="text-muted text-sm mb-10 leading-relaxed">
          Connect with the iAlmas team today and find the right security solution for your organization.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {whyContact.map((item) => (
            <div key={item.title} className="flex flex-col items-center gap-3 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                {getIcon(item.icon as IconName, "w-5 h-5")}
              </div>
              <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
              <p className="text-muted text-xs leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-lg hover:bg-primary-hover transition-colors duration-150 shadow-lg shadow-primary/20"
          >
            Contact iAlmas
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
