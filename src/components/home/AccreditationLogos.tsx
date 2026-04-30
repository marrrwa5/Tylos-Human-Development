"use client";

import Image from "next/image";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

const accreditations = [
  { name: "IAB", file: "/images/iab.png" },
  { name: "OCN", file: "/images/ocn.jpg" },
  { name: "NOCN", file: "/images/nocn.png" },
  { name: "Cisco", file: "/images/cisco.png" },
];

export default function AccreditationLogos() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container-wide">
        <ScrollReveal>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-12">
            {t("Internationally Accredited & Recognized By", "معتمد و معترف به دوليًا من قبل")}
          </p>
        </ScrollReveal>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {accreditations.map((acc, index) => (
            <ScrollReveal key={acc.name} delay={index * 0.1}>
              <div className="group flex flex-col items-center gap-3">
                <div className="relative w-40 h-24 flex items-center justify-center bg-white">
                  <Image
                    src={acc.file}
                    alt={acc.name}
                    fill
                    className="object-contain p-2 transition-all duration-300"
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
