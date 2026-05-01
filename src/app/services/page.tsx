import type { Metadata } from "next";
import ScrollReveal from "@/components/shared/ScrollReveal";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesPageContent from "@/components/services/ServicesPageContent";
import CTABanner from "@/components/home/CTABanner";
import PageBannerText from "@/components/shared/PageBannerText";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Beyond training — Tylos HDC offers CV consultation, course selection guidance, pre-course assessment, student support, career guidance, and corporate training solutions.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        {/* Dark navy base */}
        <div className="absolute inset-0 bg-[#020b13]" />

        {/* Diagonal gradient — turquoise to navy */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(0,179,164,0.22) 0%, rgba(0,155,158,0.16) 14%, rgba(0,87,168,0.13) 30%, rgba(2,20,38,0.90) 52%, rgba(2,11,19,1) 72%)",
          }}
        />

        {/* Dot pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,179,164,0.45) 1px, transparent 0)",
            backgroundSize: "28px 28px",
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.07) 50%, transparent 80%)",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.07) 50%, transparent 80%)",
          }}
        />

        {/* Ambient orbs */}
        <div
          className="absolute -top-24 -left-24 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,179,164,0.13) 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-0 right-[10%] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,87,168,0.10) 0%, transparent 65%)" }}
        />

        <div className="relative container-wide text-center">
          <ScrollReveal>
            <PageBannerText
              eyebrow="Support Beyond Training"
              eyebrowAr="دعم ما بعد التدريب"
              title="Our Services"
              titleAr="خدماتنا"
              subtitle="From choosing the right course to landing your next role, we support you at every step of your professional development journey."
              subtitleAr="من اختيار الدورة المناسبة حتى الحصول على وظيفتك القادمة، ندعمك في كل خطوة من رحلة تطورك المهني."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <ServicesPageContent />

      <CTABanner />
    </>
  );
}
