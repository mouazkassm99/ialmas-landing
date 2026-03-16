import Image from "next/image";
import FooterLinkGroup from "@/components/ui/FooterLinkGroup";
import { siteConfig, footerLinks } from "@/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border pb-24 md:pb-0">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="/logos/ialmas-logo.png"
              alt={siteConfig.name}
              width={120}
              height={40}
              className="h-9 w-auto object-contain mb-4"
              unoptimized
            />
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Value-added cybersecurity distributor helping organizations adopt proven security technologies through a trusted partner ecosystem.
            </p>
          </div>

          {/* Link groups */}
          <div className="md:col-span-2 grid grid-cols-2 gap-6">
            {footerLinks.map((group) => (
              <FooterLinkGroup key={group.label} label={group.label} links={group.links} />
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted text-xs">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="text-muted text-xs hover:text-foreground transition-colors duration-150"
          >
            {siteConfig.contact.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
