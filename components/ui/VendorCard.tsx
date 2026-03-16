import Image from "next/image";

interface VendorCardProps {
  name: string;
  logo: string;
  description: string;
}

export default function VendorCard({ name, logo, description }: VendorCardProps) {
  return (
    <div className="group flex flex-col items-center gap-4 p-6 rounded-xl border border-border bg-surface transition-all duration-300 vendor-card-glow hover:-translate-y-1 cursor-default">
      <div className="w-full h-14 flex items-center justify-center">
        <Image
          src={logo}
          alt={`${name} logo`}
          width={140}
          height={48}
          className="max-h-12 max-w-[140px] w-auto h-auto object-contain"
          unoptimized
        />
      </div>
      <div className="text-center">
        <p className="font-semibold text-foreground text-sm">{name}</p>
        <p className="text-muted text-xs mt-1 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
