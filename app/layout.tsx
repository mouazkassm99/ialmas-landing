import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/content";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Trusted Cybersecurity Solutions`,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
