"use client";

import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import CTAButton from "@/components/shared/CTAButton";
import CourseCard from "@/components/courses/CourseCard";
import { getFeaturedCourses } from "@/data/courses";
import { useLanguage } from "@/context/LanguageContext";

export default function FeaturedCourses() {
  const featured = getFeaturedCourses();
  const { t, isAr } = useLanguage();

  return (
    <section className="section-padding bg-[#0d1e35]">
      <div className="container-wide">
        <ScrollReveal>
          <div className={`flex flex-col gap-4 mb-12 ${isAr ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"}`}>
            <SectionHeading
              title={t("Featured Courses", "أبرز الدورات")}
              subtitle={t("Explore our most popular internationally accredited programs.", "استكشف أكثر برامجنا المعتمدة دولياً شعبيةً.")}
              centered={isAr}
              light
            />
            <CTAButton href="/courses" variant="outline" size="sm" className="flex-shrink-0 border-white/30 text-white hover:bg-white hover:text-blue-dark">
              {t("View All Courses", "عرض جميع الدورات")}
              <ArrowRight className={`h-4 w-4 ${isAr ? "mr-2 rotate-180" : "ml-2"}`} />
            </CTAButton>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {featured.map((course, index) => (
            <ScrollReveal key={course.id} delay={index * 0.12} className="h-full">
              <CourseCard course={course} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
