import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "iAlmas — Trusted Cybersecurity Solutions",
  description:
    "iAlmas helps organizations discover and adopt proven cybersecurity technologies through a trusted vendor ecosystem and value-added expertise.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className="bg-background text-foreground antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
