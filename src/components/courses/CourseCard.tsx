"use client";

import { Course } from "@/types/course";
import { Badge } from "@/components/ui/badge";
import { Clock, Globe, CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

interface CourseCardProps {
  course: Course;
  compact?: boolean;
}

export default function CourseCard({ course, compact = false }: CourseCardProps) {
  const { isAr, t } = useLanguage();
  const badgeColor =
    course.category === "Information Technology"
      ? "bg-blue-100 text-blue-700 border-blue-300 font-bold"
      : course.category === "Accounting and Finance"
      ? "bg-amber-100 text-amber-800 border-amber-300 font-bold"
      : course.category === "English Language"
      ? "bg-purple-100 text-purple-800 border-purple-300 font-bold"
      : "bg-turquoise/20 text-turquoise border-turquoise/40 font-bold";

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full"
    >
      {/* Image header */}
      <div className={cn("relative overflow-hidden", compact ? "h-32" : "h-48")}>
        {course.image ? (
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full gradient-brand" />
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Category badge — bottom left */}
        <div className="absolute bottom-3 left-3">
          <Badge className={cn("text-xs font-medium border bg-white/90", badgeColor)}>
            {isAr
              ? course.category === "Business Management" ? "إدارة الأعمال"
              : course.category === "Information Technology" ? "تقنية المعلومات"
              : course.category === "Accounting and Finance" ? "المحاسبة والمالية"
              : "اللغة الإنجليزية"
              : course.category}
          </Badge>
        </div>

        {/* Funded badge — bottom right */}
        {course.isFunded && (
          <div className="absolute bottom-3 right-3 bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
            <CheckCircle className="h-3 w-3" />
            {t("100% Funded", "تمويل 100%")}
          </div>
        )}

        {/* Accreditation — top left */}
        {course.accreditationBodies.length > 0 && (
          <div className="absolute top-3 left-3 flex gap-1">
            {course.accreditationBodies.map((body) => (
              <span
                key={body}
                className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-white/20 text-white border border-white/30 backdrop-blur-sm"
              >
                {body}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Body — flex-1 fills all remaining space after image */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Title */}
        <h3 className="font-sans text-base font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-turquoise transition-colors">
          {isAr && course.titleAr ? course.titleAr : course.title}
        </h3>

        {/* Description — flex-1 fills remaining space, clamp-2 keeps equal height */}
        {!compact && (
          <p className="hidden md:block text-gray-brand text-sm leading-relaxed line-clamp-2 flex-1">
            {isAr && course.descriptionAr ? course.descriptionAr : course.description}
          </p>
        )}
        {!compact && <div className="md:hidden flex-1" />}
        {compact && <div className="flex-1" />}

        {/* Meta */}
        <div className="flex flex-wrap gap-3 text-xs text-gray-brand">
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-turquoise flex-shrink-0" />
            {course.duration}
          </div>
          <div className="flex items-center gap-1.5">
            <Globe className="h-3.5 w-3.5 text-turquoise flex-shrink-0" />
            {course.language}
          </div>
        </div>

        {/* Certificate type — always same position */}
        <div className="text-xs font-medium text-gray-dark bg-gray-light/80 rounded-lg px-3 py-2">
          🏆 {course.certificateType}
        </div>

        {/* Read More button — always at bottom */}
        <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
          {course.isFunded && !isAr && (
            <span className="text-green-600 font-bold text-sm">{t("100% Funded", "تمويل 100%")}</span>
          )}
          {isAr && <span />}
          <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-turquoise text-white text-sm font-semibold rounded-lg group-hover:bg-[#009ea0] transition-colors">
            {t("Read More", "اقرأ المزيد")}
            <ArrowRight className={`h-3.5 w-3.5 ${isAr ? "rotate-180 group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5"} transition-transform duration-200`} />
          </span>
        </div>
      </div>
    </Link>
  );
}
