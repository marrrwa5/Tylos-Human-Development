"use client";

import { useState, useMemo } from "react";
import { Course } from "@/types/course";
import CourseCard from "./CourseCard";
import CourseFilters from "./CourseFilters";
import { Search } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface CourseGridProps {
  courses: Course[];
  initialSearch?: string;
}

export default function CourseGrid({ courses, initialSearch = "" }: CourseGridProps) {
  const { isAr, t } = useLanguage();
  const [category, setCategory] = useState("All");
  const [showFunded, setShowFunded] = useState(false);
  const [search, setSearch] = useState(initialSearch);

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchCat = category === "All" || c.category === category;
      const matchFunded = !showFunded || c.isFunded;
      const matchSearch =
        !search ||
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        (c.titleAr && c.titleAr.includes(search)) ||
        c.category.toLowerCase().includes(search.toLowerCase()) ||
        c.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
      return matchCat && matchFunded && matchSearch;
    });
  }, [courses, category, showFunded, search]);

  return (
    <div>
      {/* Search bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-brand" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t("Search courses by name, category, or keyword…", "ابحث عن الدورات بالاسم أو الفئة أو الكلمة الرئيسية...")}
          className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/20 bg-white"
        />
      </div>

      {/* Filters */}
      <CourseFilters
        activeCategory={category}
        onCategoryChange={setCategory}
        showFundedOnly={showFunded}
        onFundedChange={setShowFunded}
      />

      {/* Results count */}
      <p className="text-sm text-gray-brand mt-4 mb-8">
        {isAr ? (
          <>
            عرض <span className="font-semibold text-gray-900">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "دورة" : "دورات"}
            {category !== "All" && ` في ${
              category === "Business Management" ? "إدارة الأعمال"
              : category === "Information Technology" ? "تقنية المعلومات"
              : category === "Accounting and Finance" ? "المحاسبة والمالية"
              : "اللغة الإنجليزية"
            }`}
          </>
        ) : (
          <>
            Showing{" "}
            <span className="font-semibold text-gray-900">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "course" : "courses"}
            {category !== "All" && ` in ${category}`}
          </>
        )}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{t("No courses found", "لم يتم العثور على دورات")}</h3>
          <p className="text-gray-brand text-sm">
            {t("Try adjusting your filters or search terms.", "حاول تعديل الفلاتر أو مصطلحات البحث.")}
          </p>
        </div>
      )}
    </div>
  );
}
