"use client";

import { useState } from "react";
import { Calendar, Clock, Globe, Bell } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import CTAButton from "@/components/shared/CTAButton";
import RemindMeModal from "@/components/courses/RemindMeModal";
import { getUpcomingCourses } from "@/data/courses";
import { Course } from "@/types/course";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";

export default function UpcomingCourses() {
  const { isAr, t } = useLanguage();
  const upcoming = getUpcomingCourses().filter((c) =>
    c.slug === "media-techniques" || c.slug === "certificate-international-accounting-ifrs"
  );
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleRemindMe = (course: Course) => {
    setSelectedCourse(course);
    setModalOpen(true);
  };

  return (
    <section className="section-padding bg-[#0d1e35]">
      <div className="container-wide">
        {/* Turquoise highlight frame */}
        <div className="relative rounded-3xl border border-turquoise/40 bg-turquoise/[0.07] p-6 md:p-10 shadow-[0_0_80px_rgba(0,179,164,0.14),inset_0_1px_0_rgba(0,179,164,0.15)]">
          {/* Outer glow */}
          <div className="absolute inset-0 rounded-3xl bg-turquoise/5 blur-xl pointer-events-none -z-10 scale-105" />
          {/* Top shimmer */}
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-turquoise/60 to-transparent" />
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-14 h-14 rounded-tl-3xl border-t-2 border-l-2 border-turquoise/60" />
          <div className="absolute bottom-0 right-0 w-14 h-14 rounded-br-3xl border-b-2 border-r-2 border-turquoise/60" />
        <ScrollReveal>
          <SectionHeading
            title={t("Upcoming Course Batches", "الدفعات القادمة")}
            subtitle={t("Enrollment is opening soon for these programs. Register your interest and we'll notify you.", "سيُفتح التسجيل قريباً في هذه البرامج. سجّل اهتمامك وسنُخطرك.")}
            light
          />
        </ScrollReveal>

        <div className="mt-12 space-y-4">
          {upcoming.map((course, index) => (
            <ScrollReveal key={course.id} delay={index * 0.1}>
              <div className="group bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 hover:border-turquoise/40 hover:bg-white/8 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Category dot + title */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className="bg-turquoise/15 text-turquoise border-turquoise/25 text-xs">
                        {isAr
                          ? course.category === "Business Management" ? "إدارة الأعمال"
                          : course.category === "Information Technology" ? "تقنية المعلومات"
                          : course.category === "Accounting and Finance" ? "المحاسبة والمالية"
                          : "اللغة الإنجليزية"
                          : course.category}
                      </Badge>
                      {course.isFunded && (
                        <Badge className="bg-green-900/40 text-green-400 border-green-700/40 text-xs">
                          {t("100% Funded", "تمويل 100%")}
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-bold text-white text-base md:text-lg group-hover:text-turquoise transition-colors">
                      {isAr && course.titleAr ? course.titleAr : course.title}
                    </h3>
                    <p className="text-white/50 text-sm mt-1 line-clamp-1">
                      {course.certificateType}
                    </p>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-white/55 md:flex-shrink-0">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-turquoise" />
                      {new Date(course.startDate).toLocaleDateString("en-BH", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-turquoise" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Globe className="h-4 w-4 text-turquoise" />
                      {course.language}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 flex-shrink-0">
                    <CTAButton
                      href={`/courses/${course.slug}`}
                      variant="outline"
                      size="sm"
                      className="border-white/25 text-white hover:bg-white hover:text-blue-dark"
                    >
                      {t("Learn More", "اعرف أكثر")}
                    </CTAButton>
                    <CTAButton
                      onClick={() => handleRemindMe(course)}
                      variant="primary"
                      size="sm"
                    >
                      <Bell className="h-4 w-4 mr-1.5" />
                      {t("Remind Me", "ذكّرني")}
                    </CTAButton>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-10">
            <CTAButton href="/upcoming-batches" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-blue-dark">
              {t("View Full Course Calendar", "عرض تقويم الدورات الكامل")}
            </CTAButton>
          </div>
        </ScrollReveal>
        </div>{/* end turquoise highlight frame */}
      </div>

      {selectedCourse && (
        <RemindMeModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          courseTitle={selectedCourse.title}
          courseSlug={selectedCourse.slug}
          startDate={selectedCourse.startDate}
        />
      )}
    </section>
  );
}
