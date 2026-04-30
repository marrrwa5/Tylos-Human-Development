"use client";

import { useState } from "react";
import { getUpcomingCourses } from "@/data/courses";
import { Calendar, Clock, Globe, Bell, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/shared/ScrollReveal";
import CTAButton from "@/components/shared/CTAButton";
import RemindMeModal from "@/components/courses/RemindMeModal";
import { Course } from "@/types/course";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function UpcomingBatchesPage() {
  const { isAr, t } = useLanguage();
  const upcomingCourses = getUpcomingCourses();
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleRemindMe = (course: Course) => {
    setSelectedCourse(course);
    setModalOpen(true);
  };

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#020b13]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(0,179,164,0.20) 0%, rgba(0,155,158,0.15) 15%, rgba(0,87,168,0.12) 35%, rgba(2,20,38,0.88) 55%, rgba(2,11,19,1) 75%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,179,164,0.40) 1px, transparent 0)",
            backgroundSize: "28px 28px",
            maskImage: "linear-gradient(to right, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.07) 50%, transparent 80%)",
            WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.07) 50%, transparent 80%)",
          }}
        />
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,179,164,0.12) 0%, transparent 65%)" }} />

        <div className="relative container-wide text-center">
          <ScrollReveal>
            <p className="text-turquoise text-sm uppercase tracking-widest font-semibold mb-4">
              {t("Course Calendar", "تقويم الدورات")}
            </p>
            <h1
              className="font-bold text-4xl md:text-6xl text-white mb-6"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {t("Upcoming Batches", "الدفعات القادمة")}
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              {t(
                "Browse upcoming course start dates. Register your interest and we will remind you when enrollment opens.",
                "استعرض تواريخ بدء الدورات القادمة. سجّل اهتمامك وسنُذكّرك عند فتح باب التسجيل."
              )}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Upcoming courses list ── */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-wide">
          <ScrollReveal>
            <p className="text-sm text-gray-500 mb-8 text-center">
              {isAr ? (
                <>عرض <span className="font-semibold text-gray-900">{upcomingCourses.length}</span> برامج قادمة</>
              ) : (
                <>Showing <span className="font-semibold text-gray-900">{upcomingCourses.length}</span> upcoming programmes</>
              )}
            </p>
          </ScrollReveal>

          <div className="space-y-4">
            {upcomingCourses.map((course, index) => {
              const startDate = new Date(course.startDate).toLocaleDateString(isAr ? "ar-BH" : "en-BH", {
                weekday: "short", year: "numeric", month: "short", day: "numeric",
              });

              return (
                <ScrollReveal key={course.id} delay={index * 0.08}>
                  <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-turquoise/30 transition-all duration-300 p-5 md:p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">

                      {/* Category + Title */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <Badge className={`text-xs font-medium border ${
                            course.category === "Information Technology"
                              ? "bg-blue-50 text-blue-brand border-blue-100"
                              : course.category === "Accounting and Finance"
                              ? "bg-amber-50 text-amber-700 border-amber-100"
                              : course.category === "English Language"
                              ? "bg-purple-50 text-purple-700 border-purple-100"
                              : "bg-turquoise/10 text-turquoise border-turquoise/20"
                          }`}>
                            {isAr
                              ? course.category === "Business Management" ? "إدارة الأعمال"
                              : course.category === "Information Technology" ? "تقنية المعلومات"
                              : course.category === "Accounting and Finance" ? "المحاسبة والمالية"
                              : "اللغة الإنجليزية"
                              : course.category}
                          </Badge>
                          {course.isFunded && (
                            <Badge className="bg-green-50 text-green-700 border-green-200 text-xs">
                              {t("100% Funded", "تمويل 100%")}
                            </Badge>
                          )}
                        </div>
                        <h3 className="font-bold text-gray-900 text-base md:text-lg group-hover:text-turquoise transition-colors leading-snug">
                          {isAr && course.titleAr ? course.titleAr : course.title}
                        </h3>
                        <p className="text-gray-500 text-xs mt-1">
                          {course.certificateType}
                        </p>
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 md:flex-shrink-0">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4 text-turquoise flex-shrink-0" />
                          {startDate}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4 text-turquoise flex-shrink-0" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Globe className="h-4 w-4 text-turquoise flex-shrink-0" />
                          {course.language}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 flex-shrink-0">
                        <Link
                          href={`/courses/${course.slug}`}
                          className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg border border-turquoise/30 text-turquoise hover:bg-turquoise hover:text-white transition-colors font-medium"
                        >
                          {t("View Course", "عرض الدورة")}
                          <ArrowRight className={`h-3.5 w-3.5 ${isAr ? "rotate-180" : ""}`} />
                        </Link>
                        <button
                          onClick={() => handleRemindMe(course)}
                          className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg bg-turquoise text-white hover:bg-[#009ea0] transition-colors font-medium"
                        >
                          <Bell className="h-3.5 w-3.5" />
                          {t("Remind Me", "ذكّرني")}
                        </button>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Browse all CTA */}
          <ScrollReveal>
            <div className="mt-14 text-center">
              <p className="text-gray-500 text-sm mb-4">{t("Looking for more programs?", "هل تبحث عن مزيد من البرامج؟")}</p>
              <CTAButton href="/courses" variant="primary" size="lg">
                {t("Browse All Courses", "تصفح جميع الدورات")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {selectedCourse && (
        <RemindMeModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          courseTitle={selectedCourse.title}
          courseSlug={selectedCourse.slug}
          startDate={selectedCourse.startDate}
        />
      )}
    </>
  );
}
