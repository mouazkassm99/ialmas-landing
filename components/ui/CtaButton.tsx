import { ReactNode } from "react";

interface CtaButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: ReactNode;
}

export default function CtaButton({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
}: CtaButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 whitespace-nowrap";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-hover active:scale-95 shadow-lg shadow-primary/20",
    secondary:
      "border border-border text-foreground hover:border-primary/60 hover:text-primary bg-transparent",
    ghost: "text-muted hover:text-foreground bg-transparent",
  };

  return (
    <a
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
