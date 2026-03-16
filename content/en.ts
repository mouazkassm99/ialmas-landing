import type { SiteContent } from "./types";

const en: SiteContent = {
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Solutions", href: "#solutions" },
    { label: "Partners", href: "#vendors" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    headline: "Secure Digital Transformation with Trusted Cybersecurity Solutions",
    subheadline:
      "iAlmas helps organizations discover and adopt proven cybersecurity technologies through a trusted vendor ecosystem and value-added expertise.",
    primaryCta: "Contact Us",
    secondaryCta: "Explore Partners",
    trustChips: ["Value-Added Distributor", "Enterprise Security", "Trusted Vendors", "Regional Support"],
  },
  trustSection: {
    label: "Who We Are",
    title: "Your Trusted Cybersecurity Partner",
    description:
      "iAlmas is a value-added distributor and cybersecurity solutions provider supporting secure digital transformation across the region.",
    cards: [
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
    ],
  },
  solutionsSection: {
    label: "Capabilities",
    title: "Security Solutions for Every Layer",
    description:
      "We bring together proven technologies that address the full spectrum of enterprise cybersecurity challenges.",
    items: [
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
        description:
          "Enforce zero-trust access controls and protect network perimeters with proven connectivity solutions.",
      },
      {
        icon: "radar",
        title: "Threat Detection & Response",
        description:
          "Detect, investigate, and respond to threats in real time with EDR and managed security services.",
      },
      {
        icon: "building",
        title: "Enterprise Cybersecurity Distribution",
        description:
          "One trusted partner for procurement, deployment, and ongoing support of your security stack.",
      },
    ],
  },
  vendorsSection: {
    label: "Partner Ecosystem",
    title: "Trusted Vendors, Proven Technologies",
    description:
      "We work with leading global cybersecurity vendors to deliver validated solutions across all security domains.",
    items: [
      {
        name: "Xcitium",
        logo: "/logos/logo-xcitium.svg",
        url: "https://www.xcitium.com/",
        description: "Endpoint protection and zero-trust security solutions",
      },
      {
        name: "Zecurion",
        logo: "/logos/zecurion-logo.png",
        url: "https://zecurion.com/",
        description: "Data security and data loss prevention solutions",
      },
      {
        name: "Blinkly",
        logo: "/logos/Blinkly.svg",
        url: "https://blinkly.com/",
        description: "Security-focused digital solutions and monitoring-oriented tooling",
      },
      {
        name: "SyncDog",
        logo: "/logos/syncdog-logo-screenshot.png",
        url: "https://www.syncdog.com/",
        description: "Mobile security and secure enterprise workspace technology",
      },
      {
        name: "Protelion",
        logo: "/logos/protelion-logo.svg",
        url: "https://protelion.com/",
        description: "Secure network access and enterprise-grade connectivity protection",
      },
      {
        name: "Viettel Cyber Security",
        logo: "/logos/viettelsecurity-logo.svg",
        url: "https://viettelsecurity.com/",
        description: "Threat detection, EDR, and cybersecurity services",
      },
    ],
  },
  whySection: {
    label: "Why Engage",
    title: "Start the Conversation Now",
    description:
      "Connect with the iAlmas team today and find the right security solution for your organization.",
    cta: "Contact iAlmas",
    items: [
      {
        num: "01",
        title: "Find the Right Security Stack",
        description:
          "Discover cybersecurity solutions precisely matched to your organization's threat landscape and requirements.",
      },
      {
        num: "02",
        title: "One Partner, Many Vendors",
        description:
          "Connect with leading global vendors through a single experienced distribution partner you can trust.",
      },
      {
        num: "03",
        title: "Start the Conversation Today",
        description:
          "Our team is here at the exhibition — reach out now or submit your details for a follow-up.",
      },
    ],
  },
  contactSection: {
    label: "Get in Touch",
    title: "Contact iAlmas",
    description: "Fill in your details and a member of our team will be in touch shortly.",
    directContact: "Direct Contact",
    contactLabels: {
      email: "Email",
      phone: "Phone / WhatsApp",
      website: "Website",
      linkedin: "LinkedIn",
    },
    fields: {
      fullName: "Full Name *",
      company: "Company Name",
      email: "Email Address *",
      phone: "Phone / WhatsApp",
      interest: "Interest / Solution Needed",
      message: "Your Message *",
      submit: "Send Message",
    },
    solutionOptions: [
      "Endpoint Protection",
      "Data Security",
      "Mobile Security",
      "Secure Access",
      "Threat Detection & Response",
      "Enterprise Distribution",
      "Other / General Inquiry",
    ],
    errors: {
      fullName: "Full name is required",
      emailRequired: "Email is required",
      emailInvalid: "Enter a valid email address",
      message: "Message is required",
    },
    success: {
      title: "Message Received",
      message: "Thank you for reaching out. The iAlmas team will contact you shortly.",
      again: "Send another message",
    },
  },
  footer: {
    description:
      "Value-added cybersecurity distributor helping organizations adopt proven security technologies through a trusted partner ecosystem.",
    links: [
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
          { label: "LinkedIn", href: "https://www.linkedin.com/company/ialmas" },
          { label: "Website", href: "https://www.ialmas.com" },
        ],
      },
    ],
  },
  sticky: {
    contactUs: "Contact Us",
    viewPartners: "View Partners",
  },
};

export default en;
