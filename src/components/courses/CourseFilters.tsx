"use client";

import { courseCategories } from "@/data/courses";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

const categoryLabels: Record<string, string> = {
  All: "الكل",
  "Business Management": "إدارة الأعمال",
  "Information Technology": "تقنية المعلومات",
  "Accounting and Finance": "المحاسبة والمالية",
  "English Language": "اللغة الإنجليزية",
};

interface CourseFiltersProps {
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
  showFundedOnly: boolean;
  onFundedChange: (v: boolean) => void;
}

export default function CourseFilters({
  activeCategory,
  onCategoryChange,
  showFundedOnly,
  onFundedChange,
}: CourseFiltersProps) {
  const { isAr, t } = useLanguage();

  return (
    <div className="space-y-4">
      {/* Category tabs - scrollable on mobile */}
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-2 pb-1 w-max">
          {courseCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200",
                activeCategory === cat
                  ? "bg-turquoise text-white shadow-sm"
                  : "bg-gray-100 text-gray-dark hover:bg-turquoise/10 hover:text-turquoise"
              )}
            >
              {isAr ? (categoryLabels[cat] || cat) : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Filter pills */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => onFundedChange(!showFundedOnly)}
          className={cn(
            "px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200",
            showFundedOnly
              ? "bg-green-500 text-white border-green-500"
              : "border-gray-200 text-gray-dark hover:border-green-400 hover:text-green-600"
          )}
        >
          ✓ {t("100% Funded Only", "تمويل 100% فقط")}
        </button>
      </div>
    </div>
  );
}
