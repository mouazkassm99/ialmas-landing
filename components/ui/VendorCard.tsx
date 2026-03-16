import Image from "next/image";

interface VendorCardProps {
  name: string;
  logo: string;
  url: string;
  description: string;
}

export default function VendorCard({ name, logo, url, description }: VendorCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-5 p-7 rounded-2xl border border-border bg-surface transition-all duration-300 vendor-card-glow hover:-translate-y-1.5 cursor-pointer"
    >
      {/* Logo area */}
      <div className="w-full h-20 flex items-center justify-center bg-surface-alt rounded-xl px-5">
        <Image
          src={logo}
          alt={`${name} logo`}
          width={160}
          height={56}
          className="max-h-12 max-w-[150px] w-auto h-auto object-contain"
          unoptimized
        />
      </div>

      {/* Info */}
      <div className="text-center w-full">
        <p className="font-semibold text-foreground text-base group-hover:text-primary transition-colors duration-200">
          {name}
        </p>
        <p className="text-muted text-sm mt-1.5 leading-relaxed">{description}</p>
      </div>

      {/* Visit arrow */}
      <div className="flex items-center gap-1.5 text-muted text-sm group-hover:text-primary transition-colors duration-200">
        <span>Visit</span>
        <svg
          className="w-3.5 h-3.5 flip-rtl transition-transform duration-200 group-hover:translate-x-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </a>
  );
}
