"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { getIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/content";
import { useLanguage } from "@/components/LanguageProvider";

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
  const { content } = useLanguage();
  const { contactSection } = content;

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
    if (!form.fullName.trim()) e.fullName = contactSection.errors.fullName;
    if (!form.email.trim()) {
      e.email = contactSection.errors.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = contactSection.errors.emailInvalid;
    }
    if (!form.message.trim()) e.message = contactSection.errors.message;
    return e;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
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
    "w-full bg-background border border-border rounded-xl px-4 py-3.5 text-base text-foreground placeholder:text-muted focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-colors duration-150";

  const contactMethods = [
    {
      icon: "mail" as const,
      label: contactSection.contactLabels.email,
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
    },
    {
      icon: "phone" as const,
      label: contactSection.contactLabels.phone,
      value: siteConfig.contact.phone,
      href: `tel:${siteConfig.contact.phone}`,
    },
    {
      icon: "globe" as const,
      label: contactSection.contactLabels.website,
      value: siteConfig.contact.website,
      href: siteConfig.contact.website,
    },
    {
      icon: "linkedin" as const,
      label: contactSection.contactLabels.linkedin,
      value: "iAlmas",
      href: siteConfig.contact.linkedin,
    },
  ];

  return (
    <>
      <div className="section-divider" />
      <SectionWrapper id="contact" className="bg-surface relative overflow-hidden">
        {/* Corner glow */}
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at bottom right, rgba(235,30,42,0.06), transparent 70%)",
          }}
        />

        <div className="relative text-center mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            {contactSection.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground heading-accent inline-block">
            {contactSection.title}
          </h2>
          <p className="text-muted mt-7 max-w-xl mx-auto text-base leading-relaxed">
            {contactSection.description}
          </p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3 form-glow rounded-2xl">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                  {getIcon("check", "w-7 h-7")}
                </div>
                <h3 className="text-foreground font-semibold text-xl">
                  {contactSection.success.title}
                </h3>
                <p className="text-muted text-base max-w-xs leading-relaxed">
                  {contactSection.success.message}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      fullName: "",
                      company: "",
                      email: "",
                      phone: "",
                      interest: "",
                      message: "",
                    });
                  }}
                  className="mt-2 text-primary text-sm hover:underline"
                >
                  {contactSection.success.again}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      placeholder={contactSection.fields.fullName}
                      value={form.fullName}
                      onChange={handleChange}
                      className={`${inputClass} ${errors.fullName ? "border-primary/80" : ""}`}
                    />
                    {errors.fullName && (
                      <p className="text-primary text-xs mt-1">{errors.fullName}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="company"
                      placeholder={contactSection.fields.company}
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
                      placeholder={contactSection.fields.email}
                      value={form.email}
                      onChange={handleChange}
                      className={`${inputClass} ${errors.email ? "border-primary/80" : ""}`}
                    />
                    {errors.email && (
                      <p className="text-primary text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder={contactSection.fields.phone}
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
                  <option value="" className="bg-surface text-muted">
                    {contactSection.fields.interest}
                  </option>
                  {contactSection.solutionOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-surface text-foreground">
                      {opt}
                    </option>
                  ))}
                </select>

                <div>
                  <textarea
                    name="message"
                    placeholder={contactSection.fields.message}
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none ${errors.message ? "border-primary/80" : ""}`}
                  />
                  {errors.message && (
                    <p className="text-primary text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full btn-shimmer text-white font-semibold py-4 rounded-lg active:scale-[0.99] transition-all duration-150 shadow-lg shadow-primary/20 mt-1"
                >
                  {contactSection.fields.submit}
                </button>
              </form>
            )}
          </div>

          {/* Direct contact panel */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="p-6 rounded-xl border border-border bg-surface-alt h-full relative overflow-hidden">
              {/* Red glow in corner */}
              <div
                className="absolute top-0 inset-e-0 w-32 h-32 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(235,30,42,0.08), transparent 70%)",
                }}
              />
              <h3 className="text-foreground font-semibold text-base mb-6">
                {contactSection.directContact}
              </h3>
              <div className="flex flex-col gap-5">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors duration-150">
                      {getIcon(method.icon, "w-4 h-4")}
                    </div>
                    <div>
                      <p className="text-muted text-xs">{method.label}</p>
                      <p className="text-foreground text-base font-medium group-hover:text-primary transition-colors duration-150 break-all">
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
    </>
  );
}
