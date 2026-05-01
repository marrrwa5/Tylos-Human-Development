"use client";

import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import ServicesGrid from "./ServicesGrid";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPageContent() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-[#f8fafc]">
      <div className="container-wide">
        <ScrollReveal>
          <SectionHeading
            title={t("What We Offer", "ما نقدمه")}
            subtitle={t(
              "A complete ecosystem of support services designed to help you grow, succeed, and thrive in your career.",
              "منظومة متكاملة من خدمات الدعم المصممة لمساعدتك على النمو والنجاح والازدهار في مسيرتك المهنية."
            )}
          />
        </ScrollReveal>
        <div className="mt-14">
          <ServicesGrid />
        </div>
      </div>
    </section>
  );
}
