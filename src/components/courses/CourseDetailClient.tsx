"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle, Clock, Calendar, Globe, Users, Award, Download,
  MessageCircle, ArrowLeft, BookOpen, Target, GraduationCap,
  Briefcase, ClipboardList, BadgeCheck, ChevronRight,
} from "lucide-react";
import CTAButton from "@/components/shared/CTAButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";
import { Course } from "@/types/course";

interface Props {
  course: Course;
}

const categoryAr: Record<string, string> = {
  "Business Management": "إدارة الأعمال",
  "Information Technology": "تقنية المعلومات",
  "Accounting and Finance": "المحاسبة والمالية",
  "English Language": "اللغة الإنجليزية",
};

export default function CourseDetailClient({ course }: Props) {
  const { t, isAr } = useLanguage();

  const startDate = new Date(course.startDate).toLocaleDateString(
    isAr ? "ar-BH" : "en-BH",
    { weekday: "long", year: "numeric", month: "long", day: "numeric" }
  );

  const startDateShort = new Date(course.startDate).toLocaleDateString(
    isAr ? "ar-BH" : "en-BH",
    { month: "short", day: "numeric", year: "numeric" }
  );

  const title = isAr && course.titleAr ? course.titleAr : course.title;
  const description = isAr && course.descriptionAr ? course.descriptionAr : course.description;

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[#020b13]" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(0,179,164,0.18) 0%, rgba(0,87,168,0.14) 30%, rgba(2,11,19,0.95) 65%)" }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,179,164,0.35) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to right, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.05) 50%, transparent 80%)",
          WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.05) 50%, transparent 80%)",
        }} />

        <div className="relative container-wide">
          <Link href="/courses" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-turquoise text-white text-sm font-semibold mb-8 hover:bg-[#009ea0] transition-colors">
            <ArrowLeft className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
            {t("Back to All Courses", "العودة إلى جميع الدورات")}
          </Link>

          <div className="flex flex-wrap gap-2 mb-5">
            <Badge className="bg-white/10 text-white border-white/20 text-xs">
              {isAr ? (categoryAr[course.category] ?? course.category) : course.category}
            </Badge>
            {course.isFunded && (
              <Badge className="bg-green-500/90 text-white border-green-600 text-xs">
                {t("100% Funded", "تمويل 100%")}
              </Badge>
            )}
            {course.accreditationBodies.map((b) => (
              <Badge key={b} className="bg-turquoise/20 text-turquoise border-turquoise/30 text-xs">
                {b} {t("Accredited", "معتمد")}
              </Badge>
            ))}
          </div>

          <h1
            className="font-bold text-3xl md:text-5xl text-white mb-5 max-w-3xl leading-tight"
            style={isAr ? { fontFamily: '"BahijTheSans", system-ui, sans-serif', fontWeight: 900 } : {}}
          >
            {title}
          </h1>

          <p className="text-white/65 text-base md:text-lg max-w-2xl leading-relaxed mb-8">
            {description}
          </p>

          <div className="flex flex-wrap gap-4">
            {[
              { icon: Clock, label: course.duration },
              { icon: Globe, label: course.language },
              { icon: BookOpen, label: isAr && course.level === "All Levels" ? "جميع المستويات" : course.level },
              { icon: GraduationCap, label: course.certificateType },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-4 py-2 text-white/80 text-sm">
                <Icon className="h-3.5 w-3.5 text-turquoise flex-shrink-0" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* LEFT */}
            <div className="lg:col-span-2 space-y-8">

              {/* Course image */}
              <ScrollReveal>
                <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                  <Image src={course.image} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020b13]/60 via-transparent to-transparent" />
                </div>
              </ScrollReveal>

              {/* Programme Overview */}
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-turquoise/10 flex items-center justify-center flex-shrink-0"><Target className="h-5 w-5 text-turquoise" /></div>
                    <h2 className="font-bold text-xl text-gray-900">{t("Programme Overview", "نظرة عامة على البرنامج")}</h2>
                  </div>
                  <p className="text-gray-500 leading-relaxed text-sm">{description}</p>
                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: t("Duration", "المدة"), value: course.duration },
                      { label: t("Language", "اللغة"), value: isAr ? (course.language === "English" ? "إنجليزي" : course.language === "Arabic" ? "عربي" : "عربي / إنجليزي") : course.language },
                      { label: t("Level", "المستوى"), value: isAr && course.level === "All Levels" ? "جميع المستويات" : course.level },
                      { label: t("Start Date", "تاريخ البدء"), value: startDateShort },
                    ].map(({ label, value }) => (
                      <div key={label} className="bg-gray-50 rounded-xl p-3">
                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{label}</div>
                        <div className="text-sm font-semibold text-gray-800">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Learning Outcomes */}
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-blue-brand/10 flex items-center justify-center flex-shrink-0"><CheckCircle className="h-5 w-5 text-blue-brand" /></div>
                    <h2 className="font-bold text-xl text-gray-900">{t("Learning Outcomes", "مخرجات التعلم")}</h2>
                  </div>
                  <p className="text-gray-400 text-sm mb-5">
                    {t("Upon successful completion of this programme, participants will be able to:", "عند الانتهاء بنجاح من هذا البرنامج، سيكون المشاركون قادرين على:")}
                  </p>
                  <ul className="space-y-3">
                    {(isAr && course.objectivesAr ? course.objectivesAr : course.objectives).map((obj, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-turquoise/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-turquoise text-xs font-bold">{i + 1}</span>
                        </div>
                        <span className="text-gray-600 text-sm leading-relaxed">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Who Should Attend */}
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-turquoise/10 flex items-center justify-center flex-shrink-0"><Users className="h-5 w-5 text-turquoise" /></div>
                    <h2 className="font-bold text-xl text-gray-900">{t("Who Should Attend?", "الفئة المستهدفة")}</h2>
                  </div>
                  <p className="text-gray-400 text-sm mb-5">{t("This programme is designed for:", "تم تصميم هذا البرنامج لـ:")}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {(isAr && course.targetAudienceAr ? course.targetAudienceAr : course.targetAudience).map((ta) => (
                      <div key={ta} className="flex items-start gap-3 p-4 rounded-xl bg-turquoise/5 border border-turquoise/10">
                        <ChevronRight className={`h-4 w-4 text-turquoise flex-shrink-0 mt-0.5 ${isAr ? "rotate-180" : ""}`} />
                        <span className="text-gray-700 text-sm leading-snug">{ta}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Entry Requirements */}
              {course.prerequisites.length > 0 && (
                <ScrollReveal>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-9 h-9 rounded-lg bg-blue-brand/10 flex items-center justify-center flex-shrink-0"><ClipboardList className="h-5 w-5 text-blue-brand" /></div>
                      <h2 className="font-bold text-xl text-gray-900">{t("Entry Requirements", "متطلبات القبول")}</h2>
                    </div>
                    <ul className="space-y-3">
                      {(isAr && course.prerequisitesAr ? course.prerequisitesAr : course.prerequisites).map((pre, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-brand flex-shrink-0 mt-2" />
                          {pre}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              )}

              {/* Assessment Method */}
              {course.assessmentMethod && (
                <ScrollReveal>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-9 h-9 rounded-lg bg-turquoise/10 flex items-center justify-center flex-shrink-0"><BookOpen className="h-5 w-5 text-turquoise" /></div>
                      <h2 className="font-bold text-xl text-gray-900">{t("Assessment Method", "طريقة التقييم")}</h2>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{isAr && course.assessmentMethodAr ? course.assessmentMethodAr : course.assessmentMethod}</p>
                  </div>
                </ScrollReveal>
              )}

              {/* Career Outcomes */}
              {course.careerOutcomes && course.careerOutcomes.length > 0 && (
                <ScrollReveal>
                  <div className="bg-gradient-to-br from-[#020b13] to-[#0a1e35] rounded-2xl p-8 shadow-sm">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-9 h-9 rounded-lg bg-turquoise/20 flex items-center justify-center flex-shrink-0"><Briefcase className="h-5 w-5 text-turquoise" /></div>
                      <h2 className="font-bold text-xl text-white">{t("Career Outcomes", "المسارات المهنية")}</h2>
                    </div>
                    <p className="text-white/50 text-sm mb-5">
                      {t("Graduates of this programme are prepared for roles such as:", "خريجو هذا البرنامج مؤهلون لأدوار مثل:")}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {(isAr && course.careerOutcomesAr ? course.careerOutcomesAr : course.careerOutcomes).map((outcome) => (
                        <div key={outcome} className="flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-4 py-2 text-white/80 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-turquoise" />
                          {outcome}
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* Certification */}
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-blue-brand/10 flex items-center justify-center flex-shrink-0"><Award className="h-5 w-5 text-blue-brand" /></div>
                    <h2 className="font-bold text-xl text-gray-900">{t("Certification & Accreditation", "الشهادة والاعتماد")}</h2>
                  </div>
                  <div className="flex items-start gap-5 p-5 rounded-xl bg-blue-brand/5 border border-blue-brand/10">
                    <div className="w-12 h-12 rounded-xl bg-blue-brand/10 flex items-center justify-center flex-shrink-0"><GraduationCap className="h-6 w-6 text-blue-brand" /></div>
                    <div>
                      <div className="font-bold text-gray-900 text-base mb-1">{course.certificateType}</div>
                      <div className="text-gray-500 text-sm mb-2">
                        {t("Issued by:", "صادر من:")}{" "}
                        <span className="font-medium text-gray-700">
                          {course.accreditationBodies.length > 0 ? course.accreditationBodies.join(" & ") : t("Tylos Human Development Center", "مركز تايلوس للتنمية البشرية")}
                        </span>
                      </div>
                      {course.isFunded && (
                        <div className="inline-flex items-center gap-1.5 mt-1 text-sm text-green-600 font-medium bg-green-50 border border-green-100 px-3 py-1 rounded-full">
                          <BadgeCheck className="h-3.5 w-3.5" />
                          {t("100% Funded", "تمويل 100%")}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT: Sticky sidebar */}
            <div className="lg:col-span-1">
              <ScrollReveal direction="right">
                <div className="sticky top-[88px] space-y-4">

                  {/* Enroll / price card */}
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                    <div className="mb-5 pb-5 border-b border-gray-100">
                      {course.isFunded ? (
                        <div>
                          <div className="text-3xl font-black text-green-600 mb-1">{t("100% Funded", "تمويل 100%")}</div>
                          <div className="text-sm text-gray-500">{t("This programme is fully covered", "هذا البرنامج مموّل بالكامل")}</div>
                          <div className="mt-3 text-xs text-gray-400 leading-relaxed">
                            {t(
                              "Eligible Bahraini nationals may attend at no cost through the government funding scheme.",
                              "يحق للمواطنين البحرينيين المؤهلين الحضور مجاناً من خلال مخطط التمويل الحكومي."
                            )}
                          </div>
                        </div>
                      ) : course.price !== null ? (
                        <div>
                          <div className="text-4xl font-black text-gray-900 mb-1">BD {course.price}</div>
                          <div className="text-sm text-gray-500">{t("per participant", "للمشارك الواحد")}</div>
                        </div>
                      ) : (
                        <div className="text-gray-500 text-sm">{t("Contact us for pricing", "تواصل معنا للاستفسار عن السعر")}</div>
                      )}
                    </div>

                    <div className="space-y-3 mb-6">
                      {[
                        { Icon: Clock, label: t("Duration", "المدة"), value: course.duration },
                        { Icon: Calendar, label: t("Start Date", "تاريخ البدء"), value: startDate },
                        { Icon: Globe, label: t("Language", "اللغة"), value: course.language },
                        { Icon: BookOpen, label: t("Level", "المستوى"), value: isAr && course.level === "All Levels" ? "جميع المستويات" : course.level },
                        { Icon: Target, label: t("Schedule", "الجدول"), value: isAr && course.scheduleAr ? course.scheduleAr : course.schedule },
                      ].map(({ Icon, label, value }) => (
                        <div key={label} className="flex items-start gap-3 text-sm">
                          <Icon className="h-4 w-4 text-turquoise flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-gray-400 text-xs block">{label}</span>
                            <span className="text-gray-700 font-medium">{value}</span>
                          </div>
                        </div>
                      ))}
                      {course.slotsAvailable !== null && (
                        <div className="flex items-start gap-3 text-sm">
                          <Users className="h-4 w-4 text-turquoise flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-gray-400 text-xs block">{t("Availability", "التوفر")}</span>
                            <span className={`font-medium ${course.slotsAvailable <= 5 ? "text-red-500" : "text-gray-700"}`}>
                              {course.slotsAvailable <= 5
                                ? t(`Only ${course.slotsAvailable} seats remaining!`, `${course.slotsAvailable} مقاعد متبقية فقط!`)
                                : t(`${course.slotsAvailable} seats available`, `${course.slotsAvailable} مقاعد متاحة`)}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="space-y-3">
                      <CTAButton
                        href={`https://api.whatsapp.com/send?phone=97334655220&text=${encodeURIComponent(isAr ? `مرحباً، أريد التسجيل في برنامج ${title}` : `Hello, I would like to enroll in the ${course.title} programme.`)}`}
                        variant="primary" size="lg" className="w-full" external
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        {t("Enroll Now", "سجّل الآن")}
                      </CTAButton>
                      {course.brochureUrl && (
                        <CTAButton href={course.brochureUrl} variant="outline" size="md" className="w-full" external>
                          <Download className="mr-2 h-4 w-4" />
                          {t("Download Brochure", "تحميل الكتيب")}
                        </CTAButton>
                      )}
                    </div>
                  </div>

                  {/* Certificate badge */}
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <Award className="h-4 w-4 text-turquoise" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        {t("Certificate Awarded", "الشهادة الممنوحة")}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-gray-800 leading-snug">{course.certificateType}</p>
                    {course.accreditationBodies.length > 0 && (
                      <p className="text-xs text-gray-400 mt-1">
                        {t("Accredited by:", "معتمد من:")} {course.accreditationBodies.join(", ")}
                      </p>
                    )}
                  </div>

                  {/* Tags */}
                  {course.tags.length > 0 && (
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                        {t("Related Topics", "مواضيع ذات صلة")}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {course.tags.map((tag) => (
                          <Link key={tag} href={`/courses?search=${encodeURIComponent(tag)}`}
                            className="text-xs px-2.5 py-1 rounded-full bg-gray-100 hover:bg-turquoise/10 hover:text-turquoise text-gray-600 transition-colors">
                            #{tag}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Questions box */}
                  <div className="bg-turquoise/5 rounded-xl p-5 border border-turquoise/20">
                    <p className="text-sm font-bold text-gray-900 mb-1">
                      {t("Any questions about this course?", "هل لديك استفسار عن هذه الدورة؟")}
                    </p>
                    <p className="text-xs text-gray-500 mb-4">
                      {t("Our team is happy to help.", "فريقنا يسعده مساعدتك.")}
                    </p>
                    <div className="flex flex-col gap-2">
                      <a
                        href={`https://api.whatsapp.com/send?phone=97334655220&text=${encodeURIComponent(isAr ? `مرحباً، لدي استفسار عن برنامج ${title}` : `Hello, I have a question about the ${course.title} programme.`)}`}
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#25D366] text-white text-sm font-semibold hover:bg-[#20bb5a] transition-colors"
                      >
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp
                      </a>
                      <a
                        href="mailto:info@thd.bh"
                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-turquoise/40 text-turquoise text-sm font-semibold hover:bg-turquoise hover:text-white transition-colors"
                      >
                        {t("Email Us", "راسلنا")}
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container-wide text-center">
          <ScrollReveal>
            <h2 className="font-bold text-2xl md:text-3xl text-gray-900 mb-3">
              {t("Ready to take the next step?", "هل أنت مستعد للخطوة التالية؟")}
            </h2>
            <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">
              {t(
                "Enroll today or speak with an advisor who can guide you to the right programme.",
                "سجّل اليوم أو تحدث مع مستشار يرشدك إلى البرنامج المناسب."
              )}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <CTAButton
                href={`https://api.whatsapp.com/send?phone=97334655220&text=${encodeURIComponent(isAr ? `مرحباً، أريد التسجيل في برنامج ${title}` : `Hello, I would like to enroll in the ${course.title} programme.`)}`}
                variant="primary" size="lg" external
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                {t("Enroll Now", "سجّل الآن")}
              </CTAButton>
              <CTAButton href="/courses" variant="outline" size="lg">
                {t("Browse All Courses", "تصفح جميع الدورات")}
              </CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
