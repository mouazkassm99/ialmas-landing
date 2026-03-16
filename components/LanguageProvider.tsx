"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { en, ar } from "@/content";
import type { SiteContent } from "@/content";

type Lang = "ar" | "en";

interface LanguageContextValue {
  lang: Lang;
  content: SiteContent;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "ar" ? "en" : "ar"));
  const content = lang === "ar" ? ar : en;

  return (
    <LanguageContext.Provider value={{ lang, content, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
