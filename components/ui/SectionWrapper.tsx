import { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export default function SectionWrapper({ id, className = "", children }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`w-full px-4 py-16 md:py-24 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
}
