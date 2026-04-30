import type { Metadata } from "next";
import { getCourses } from "@/data/courses";
import CourseGrid from "@/components/courses/CourseGrid";
import AccreditationLogos from "@/components/home/AccreditationLogos";
import ScrollReveal from "@/components/shared/ScrollReveal";
import PageBannerText from "@/components/shared/PageBannerText";

export const metadata: Metadata = {
  title: "All Courses",
  description:
    "Browse internationally accredited courses at Tylos Human Development Center — Business Management, IT, Accounting and Finance, and English Language. All programs are 100% funded.",
};

export default async function CoursesPage() {
  const allCourses = getCourses();
  const initialSearch = "";

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Dark navy base */}
        <div className="absolute inset-0 bg-[#020b13]" />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(0,179,164,0.20) 0%, rgba(0,155,158,0.15) 15%, rgba(0,87,168,0.12) 35%, rgba(2,20,38,0.88) 55%, rgba(2,11,19,1) 75%)",
          }}
        />

        {/* Dot pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,179,164,0.40) 1px, transparent 0)",
            backgroundSize: "28px 28px",
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.07) 50%, transparent 80%)",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.07) 50%, transparent 80%)",
          }}
        />

        {/* Ambient orbs */}
        <div
          className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,179,164,0.12) 0%, transparent 65%)" }}
        />

        <div className="relative container-wide text-center">
          <ScrollReveal>
            <PageBannerText
              eyebrow="Internationally Accredited"
              eyebrowAr="معتمد دولياً"
              title="Explore Our Courses"
              titleAr="استكشف دوراتنا"
              subtitle="Professional development programs in Business Management, Information Technology, Accounting and Finance, and English Language. All programs are 100% funded."
              subtitleAr="برامج التطوير المهني في إدارة الأعمال وتقنية المعلومات والمحاسبة والمالية واللغة الإنجليزية. جميع البرامج ممولة 100%."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Accreditations strip */}
      <AccreditationLogos />

      {/* Course catalog */}
      <section className="section-padding bg-gray-light/30 min-h-[60vh]">
        <div className="container-wide">
          <CourseGrid courses={allCourses} initialSearch={initialSearch} />
        </div>
      </section>
    </>
  );
}
