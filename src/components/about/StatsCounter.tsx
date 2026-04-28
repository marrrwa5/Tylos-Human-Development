"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 20, suffix: "+", label: "Years of Excellence", sub: "Est. 2002" },
  { value: 1000, suffix: "+", label: "Graduates", sub: "Across different industries" },
  { value: 13, suffix: "+", label: "Programs", sub: "Across multiple disciplines" },
  { value: 4, suffix: "", label: "International Accreditations", sub: "NOCN, Cisco, IAB & more" },
];

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
