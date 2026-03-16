"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { getIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/content";

const solutionOptions = [
  "Endpoint Protection",
  "Data Security",
  "Mobile Security",
  "Secure Access",
  "Threat Detection & Response",
  "Enterprise Distribution",
  "Other / General Inquiry",
];

interface FormState {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.email.trim()) {
      e.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Enter a valid email address";
    }
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // TODO: wire to backend / form service
    console.log("Form submission:", form);
    setSubmitted(true);
  }

  const inputClass =
    "w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors duration-150";

  const contactMethods = [
    { icon: "mail" as const, label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
    { icon: "phone" as const, label: "Phone / WhatsApp", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` },
    { icon: "globe" as const, label: "Website", value: siteConfig.contact.website, href: siteConfig.contact.website },
    { icon: "linkedin" as const, label: "LinkedIn", value: "iAlmas on LinkedIn", href: siteConfig.contact.linkedin },
  ];

  return (
    <SectionWrapper id="contact" className="bg-surface">
      <div className="text-center mb-10">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Get in Touch</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Contact iAlmas</h2>
        <p className="text-muted mt-3 max-w-xl mx-auto text-sm leading-relaxed">
          Fill in your details and a member of our team will be in touch shortly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {/* Form */}
        <div className="lg:col-span-3">
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                {getIcon("check", "w-7 h-7")}
              </div>
              <h3 className="text-foreground font-semibold text-lg">Message Received</h3>
              <p className="text-muted text-sm max-w-xs leading-relaxed">
                Thank you for reaching out. The iAlmas team will contact you shortly.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ fullName: "", company: "", email: "", phone: "", interest: "", message: "" }); }}
                className="mt-2 text-primary text-sm hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name *"
                    value={form.fullName}
                    onChange={handleChange}
                    className={`${inputClass} ${errors.fullName ? "border-primary/80" : ""}`}
                  />
                  {errors.fullName && <p className="text-primary text-xs mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={form.company}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={handleChange}
                    className={`${inputClass} ${errors.email ? "border-primary/80" : ""}`}
                  />
                  {errors.email && <p className="text-primary text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone / WhatsApp"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <select
                name="interest"
                value={form.interest}
                onChange={handleChange}
                className={`${inputClass} ${!form.interest ? "text-muted" : "text-foreground"}`}
              >
                <option value="" className="bg-surface text-muted">Interest / Solution Needed</option>
                {solutionOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-surface text-foreground">{opt}</option>
                ))}
              </select>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none ${errors.message ? "border-primary/80" : ""}`}
                />
                {errors.message && <p className="text-primary text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold py-4 rounded-lg hover:bg-primary-hover active:scale-[0.99] transition-all duration-150 shadow-lg shadow-primary/20 mt-1"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Direct contact panel */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="p-6 rounded-xl border border-border bg-surface-alt h-full">
            <h3 className="text-foreground font-semibold text-sm mb-6">Direct Contact</h3>
            <div className="flex flex-col gap-5">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors duration-150">
                    {getIcon(method.icon, "w-4 h-4")}
                  </div>
                  <div>
                    <p className="text-muted text-xs">{method.label}</p>
                    <p className="text-foreground text-sm font-medium group-hover:text-primary transition-colors duration-150 break-all">
                      {method.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
