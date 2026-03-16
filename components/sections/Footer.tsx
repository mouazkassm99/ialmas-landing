"use client";

import Image from "next/image";
import FooterLinkGroup from "@/components/ui/FooterLinkGroup";
import { siteConfig } from "@/content";
import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { content } = useLanguage();
  const { footer } = content;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface pb-24 md:pb-0">
      <div className="footer-top-line" />
      <div className="max-w-6xl mx-auto px-4 py-12 relative overflow-hidden">
        {/* Faint red glow behind logo area */}
        <div
          className="absolute top-0 inset-s-0 w-64 h-64 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at top left, rgba(235,30,42,0.05), transparent 70%)",
          }}
        />

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
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
            <p className="text-muted text-base leading-relaxed max-w-xs">
              {footer.description}
            </p>
          </div>

          {/* Link groups */}
          <div className="md:col-span-2 grid grid-cols-2 gap-6">
            {footer.links.map((group) => (
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
