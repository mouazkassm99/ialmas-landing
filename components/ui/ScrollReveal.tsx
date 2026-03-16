"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  from?: "up" | "left" | "right" | "scale";
}

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  from = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("in-view"), delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal-${from} ${className}`}>
      {children}
    </div>
  );
}
