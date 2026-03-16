export interface Vendor {
  name: string;
  logo: string;
  url: string;
  description: string;
}

export interface SiteContent {
  navLinks: { label: string; href: string }[];
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    trustChips: string[];
  };
  trustSection: {
    label: string;
    title: string;
    description: string;
    cards: { icon: string; title: string; description: string }[];
  };
  solutionsSection: {
    label: string;
    title: string;
    description: string;
    items: { icon: string; title: string; description: string }[];
  };
  vendorsSection: {
    label: string;
    title: string;
    description: string;
    items: Vendor[];
  };
  whySection: {
    label: string;
    title: string;
    description: string;
    cta: string;
    items: { num: string; title: string; description: string }[];
  };
  contactSection: {
    label: string;
    title: string;
    description: string;
    directContact: string;
    contactLabels: { email: string; phone: string; website: string; linkedin: string };
    fields: {
      fullName: string;
      company: string;
      email: string;
      phone: string;
      interest: string;
      message: string;
      submit: string;
    };
    solutionOptions: string[];
    errors: {
      fullName: string;
      emailRequired: string;
      emailInvalid: string;
      message: string;
    };
    success: { title: string; message: string; again: string };
  };
  footer: {
    description: string;
    links: { label: string; links: { label: string; href: string }[] }[];
  };
  sticky: {
    contactUs: string;
    viewPartners: string;
  };
}
