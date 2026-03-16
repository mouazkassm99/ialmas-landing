"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/content";
import { useLanguage } from "@/components/LanguageProvider";

export default function StickyBar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, content, toggleLang } = useLanguage();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Desktop sticky header */}
      <header
        className={`hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-6 h-14 transition-all duration-300 ${
          scrolled
            ? "bg-surface/95 backdrop-blur-md border-b border-border shadow-lg"
            : "bg-transparent"
        }`}
      >
        <a href="#hero" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logos/ialmas-logo.png"
            alt={siteConfig.name}
            width={100}
            height={32}
            className="h-7 w-auto object-contain"
            unoptimized
          />
        </a>

        <nav className="flex items-center gap-6">
          {content.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted text-base hover:text-foreground transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="text-muted text-xs font-semibold border border-border rounded-md px-3 py-1.5 hover:border-primary/50 hover:text-foreground transition-colors duration-150"
            aria-label="Toggle language"
          >
            {lang === "ar" ? "EN" : "عربي"}
          </button>

          <a
            href="#contact"
            className="bg-primary text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-primary-hover transition-colors duration-150 shadow-md shadow-primary/20"
          >
            {content.sticky.contactUs}
          </a>
        </div>
      </header>

      {/* Mobile sticky bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pt-2">
        <div className="flex gap-3 bg-surface/95 backdrop-blur-md border border-border rounded-2xl p-3 shadow-2xl">
          <a
            href="#contact"
            className="flex-1 bg-primary text-white text-sm font-semibold py-3 rounded-xl text-center hover:bg-primary-hover transition-colors duration-150"
          >
            {content.sticky.contactUs}
          </a>
          <a
            href="#vendors"
            className="flex-1 border border-border text-foreground text-sm font-semibold py-3 rounded-xl text-center hover:border-primary/60 hover:text-primary transition-colors duration-150"
          >
            {content.sticky.viewPartners}
          </a>
          <button
            onClick={toggleLang}
            className="border border-border text-muted text-xs font-semibold px-4 rounded-xl hover:border-primary/50 hover:text-foreground transition-colors duration-150"
            aria-label="Toggle language"
          >
            {lang === "ar" ? "EN" : "عربي"}
          </button>
        </div>
      </div>
    </>
  );
}
