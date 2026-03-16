import SectionWrapper from "@/components/ui/SectionWrapper";
import VendorCard from "@/components/ui/VendorCard";
import { vendors } from "@/content";

export default function Vendors() {
  return (
    <SectionWrapper id="vendors" className="bg-surface">
      <div className="text-center mb-10">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Partner Ecosystem</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Trusted Vendors, Proven Technologies
        </h2>
        <p className="text-muted mt-3 max-w-xl mx-auto text-sm leading-relaxed">
          We work with leading global cybersecurity vendors to deliver validated solutions across all security domains.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {vendors.map((vendor) => (
          <VendorCard
            key={vendor.name}
            name={vendor.name}
            logo={vendor.logo}
            description={vendor.description}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
