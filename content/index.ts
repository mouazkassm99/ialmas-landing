// ============================================================
// Central content config — edit all text, links, and data here
// ============================================================

export const siteConfig = {
  name: "iAlmas",
  tagline: "Secure Digital Transformation with Trusted Cybersecurity Solutions",
  description:
    "iAlmas helps organizations discover and adopt proven cybersecurity technologies through a trusted vendor ecosystem and value-added expertise.",
  contact: {
    email: "info@ialmas.com",
    phone: "+966 XX XXX XXXX",
    whatsapp: "+966XXXXXXXXX",
    website: "https://www.ialmas.com",
    linkedin: "https://www.linkedin.com/company/ialmas",
  },
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Partners", href: "#vendors" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroContent = {
  headline: "Secure Digital Transformation with Trusted Cybersecurity Solutions",
  subheadline:
    "iAlmas helps organizations discover and adopt proven cybersecurity technologies through a trusted vendor ecosystem and value-added expertise.",
  primaryCta: { label: "Contact Us", href: "#contact" },
  secondaryCta: { label: "Explore Partners", href: "#vendors" },
  trustChips: [
    "Value-Added Distributor",
    "Enterprise Security",
    "Trusted Vendors",
    "Regional Support",
  ],
} as const;

export const trustCards = [
  {
    icon: "shield",
    title: "Cybersecurity Solutions",
    description:
      "We provide access to best-in-class security technologies spanning endpoint, data, mobile, and network protection.",
  },
  {
    icon: "network",
    title: "Trusted Vendor Ecosystem",
    description:
      "We partner with leading global cybersecurity vendors to bring validated solutions directly to your organization.",
  },
  {
    icon: "briefcase",
    title: "Enterprise-Ready Expertise",
    description:
      "Our team brings deep domain knowledge to help you evaluate, deploy, and operate security solutions confidently.",
  },
  {
    icon: "map",
    title: "Regional Support",
    description:
      "Dedicated support and distribution capabilities tailored to the needs of businesses across the region.",
  },
] as const;

export const solutions = [
  {
    icon: "monitor",
    title: "Endpoint Protection",
    description: "Defend devices against malware, ransomware, and zero-day threats with advanced endpoint security.",
  },
  {
    icon: "lock",
    title: "Data Security",
    description: "Protect sensitive data and prevent unauthorized exfiltration with enterprise-grade DLP solutions.",
  },
  {
    icon: "smartphone",
    title: "Mobile Security",
    description: "Secure corporate mobile devices and enterprise workspaces without compromising productivity.",
  },
  {
    icon: "key",
    title: "Secure Access",
    description: "Enforce zero-trust access controls and protect network perimeters with proven connectivity solutions.",
  },
  {
    icon: "radar",
    title: "Threat Detection & Response",
    description: "Detect, investigate, and respond to threats in real time with EDR and managed security services.",
  },
  {
    icon: "building",
    title: "Enterprise Cybersecurity Distribution",
    description: "One trusted partner for procurement, deployment, and ongoing support of your security stack.",
  },
] as const;

export const vendors = [
  {
    name: "Xcitium",
    logo: "/logos/logo-xcitium.svg",
    description: "Endpoint protection and zero-trust security solutions",
  },
  {
    name: "Zecurion",
    logo: "/logos/zecurion-logo.png",
    description: "Data security and data loss prevention solutions",
  },
  {
    name: "Blinkly",
    logo: "/logos/Blinkly.svg",
    description: "Security-focused digital solutions and monitoring-oriented tooling",
  },
  {
    name: "SyncDog",
    logo: "/logos/syncdog-logo-screenshot.png",
    description: "Mobile security and secure enterprise workspace technology",
  },
  {
    name: "Protelion",
    logo: "/logos/protelion-logo.svg",
    description: "Secure network access and enterprise-grade connectivity protection",
  },
  {
    name: "Viettel Cyber Security",
    logo: "/logos/viettelsecurity-logo.svg",
    description: "Threat detection, EDR, and cybersecurity services",
  },
] as const;

export const whyContact = [
  {
    icon: "search",
    title: "Find the Right Security Stack",
    description: "Discover cybersecurity solutions precisely matched to your organization's threat landscape and requirements.",
  },
  {
    icon: "handshake",
    title: "One Partner, Many Vendors",
    description: "Connect with leading global vendors through a single experienced distribution partner you can trust.",
  },
  {
    icon: "zap",
    title: "Start the Conversation Today",
    description: "Our team is here at the exhibition — reach out now or submit your details for a follow-up.",
  },
] as const;

export const footerLinks = [
  {
    label: "Company",
    links: [
      { label: "About iAlmas", href: "#about" },
      { label: "Our Solutions", href: "#solutions" },
      { label: "Partner Vendors", href: "#vendors" },
    ],
  },
  {
    label: "Connect",
    links: [
      { label: "Contact Us", href: "#contact" },
      { label: "LinkedIn", href: siteConfig.contact.linkedin },
      { label: "Website", href: siteConfig.contact.website },
    ],
  },
] as const;
