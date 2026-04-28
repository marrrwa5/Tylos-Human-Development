"use client";

import { ArrowRight, FileText, BookOpen, ClipboardCheck, Headphones, Compass } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import CTAButton from "@/components/shared/CTAButton";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  FileText: ({ className }) => <FileText className={className} />,
  BookOpen: ({ className }) => <BookOpen className={className} />,
  ClipboardCheck: ({ className }) => <ClipboardCheck className={className} />,
  HeadphonesIcon: ({ className }) => <Headphones className={className} />,
  Compass: ({ className }) => <Compass className={className} />,
};

const services = [
  {
    icon: "FileText",
    title: "CV Consultation",
    titleAr: "استشارة السيرة الذاتية",
    description: "Expert CV review and optimization to help you stand out to employers.",
    descriptionAr: "مراجعة وتحسين السيرة الذاتية من قِبل خبراء لمساعدتك على التميز أمام أصحاب العمل.",
    href: "/services#cv-consultation",
  },
  {
    icon: "BookOpen",
    title: "Course Selection",
    titleAr: "اختيار الدورة",
    description: "Personalized guidance to choose the right program for your career goals.",
    descriptionAr: "توجيه شخصي لاختيار البرنامج المناسب لأهدافك المهنية.",
    href: "/services#course-selection-consultation",
  },
  {
    icon: "ClipboardCheck",
    title: "Pre-Course Assessment",
    titleAr: "تقييم ما قبل الدورة",
    description: "Evaluate your current level before enrolling to ensure the perfect fit.",
    descriptionAr: "تقييم مستواك الحالي قبل التسجيل للتأكد من الملاءمة التامة.",
    href: "/services#pre-course-assessment",
  },
  {
    icon: "HeadphonesIcon",
    title: "Student Support",
    titleAr: "دعم الطلاب",
    description: "Dedicated support from enrollment through to certification.",
    descriptionAr: "دعم متخصص من التسجيل حتى الحصول على الشهادة.",
    href: "/services#student-support",
  },
  {
    icon: "Compass",
    title: "Career Guidance",
    titleAr: "التوجيه المهني",
    description: "Strategic career planning and job search support to land your next role.",
    descriptionAr: "تخطيط مهني استراتيجي ودعم في البحث الوظيفي لمساعدتك على الحصول على وظيفتك القادمة.",
    href: "/services#career-guidance",
  },
];

export default function ServicesPreview() {
  const { isAr, t } = useLanguage();

  return (
    <section className="section-padding bg-[#07111e]">
      <div className="container-wide">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <SectionHeading
              title={t("What We Offer", "ما نقدمه")}
              subtitle={t("Beyond training, a full ecosystem of support services to help you succeed.", "ما وراء التدريب، منظومة متكاملة من الخدمات الداعمة لمساعدتك على النجاح.")}
              centered={false}
              light
            />
            <CTAButton href="/services" variant="outline" size="sm" className="flex-shrink-0 border-white/30 text-white hover:bg-white hover:text-blue-dark">
              {t("All Services", "جميع الخدمات")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </CTAButton>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <Link href={service.href}>
                  <div className="group p-6 rounded-2xl border border-white/10 hover:border-turquoise/40 hover:bg-white/5 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col gap-4 cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-turquoise/15 flex items-center justify-center group-hover:bg-turquoise transition-colors duration-300">
                      {Icon && (
                        <Icon className="h-6 w-6 text-turquoise group-hover:text-white transition-colors" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2 group-hover:text-turquoise transition-colors text-sm">
                        {isAr ? service.titleAr : service.title}
                      </h3>
                      <p className="text-white/55 text-xs leading-relaxed">
                        {isAr ? service.descriptionAr : service.description}
                      </p>
                    </div>
                    <div className="flex items-center text-turquoise text-xs font-semibold mt-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      {t("Learn more", "اعرف أكثر")} <ArrowRight className={`h-3 w-3 ml-1 ${isAr ? "rotate-180" : ""}`} />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
