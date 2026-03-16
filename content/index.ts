// ============================================================
// Central content config — edit all text, links, and data here
// ============================================================

export { default as en } from "./en";
export { default as ar } from "./ar";
export type { SiteContent, Vendor } from "./types";

// Non-translated config — contact info, brand name
export const siteConfig = {
  name: "iAlmas",
  contact: {
    email: "info@ialmas.com",
    phone: "+966 XX XXX XXXX",
    website: "https://www.ialmas.com",
    linkedin: "https://www.linkedin.com/company/ialmas",
  },
} as const;
