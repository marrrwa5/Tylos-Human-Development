"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0 });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + increment, target);
      setCount(Math.floor(current));
      if (current >= target) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  const { t } = useLanguage();

  const stats = [
    { value: 20, suffix: "+", label: t("Years of Excellence", "سنوات من التميز"), sub: t("Est. 2002", "تأسس عام 2002") },
    { value: 1000, suffix: "+", label: t("Graduates", "خريج"), sub: t("Across different industries", "عبر مختلف القطاعات") },
    { value: 13, suffix: "+", label: t("Programs", "برنامج"), sub: t("Across multiple disciplines", "في تخصصات متعددة") },
    { value: 4, suffix: "", label: t("International Accreditations", "اعتماد دولي"), sub: "NOCN, Cisco, IAB & more" },
  ];

  return (
    <section className="py-8 gradient-brand">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center py-4">
              <div className="text-3xl md:text-4xl font-black text-white mb-1" style={{ fontFamily: "var(--font-sans)" }}>
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white font-semibold text-sm mb-0.5">{stat.label}</div>
              <div className="text-white/60 text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
