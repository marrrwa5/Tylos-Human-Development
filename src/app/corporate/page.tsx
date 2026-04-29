import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import CTAButton from "@/components/shared/CTAButton";
import ClientLogos from "@/components/home/ClientLogos";
import CorporateProcess from "@/components/corporate/CorporateProcess";
import CorporateClientSections from "@/components/corporate/CorporateClientSections";
import PageBannerText from "@/components/shared/PageBannerText";
import BilText from "@/components/shared/BilText";

export const metadata: Metadata = {
  title: "Corporate Training",
  description:
    "Tailored corporate training solutions for organizations across Bahrain. Customized programs, on-site delivery, and measurable results.",
};


export default function CorporatePage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        {/* Dark navy base */}
        <div className="absolute inset-0 bg-[#020b13]" />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(0,87,168,0.28) 0%, rgba(0,155,158,0.18) 25%, rgba(2,20,38,0.88) 55%, rgba(2,11,19,1) 75%)",
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
          style={{ background: "radial-gradient(circle, rgba(0,87,168,0.16) 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-0 right-[10%] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,179,164,0.10) 0%, transparent 65%)" }}
        />

        <div className="relative container-wide text-center">
          <ScrollReveal>
            <PageBannerText
              eyebrow="Corporate Training Solutions"
              eyebrowAr="حلول تدريب الشركات"
              title="Elevate Your Entire Workforce"
              titleAr="ارفع كفاءة طاقمك الوظيفي بأكمله"
              subtitle="We design and deliver bespoke training programs for organizations across Bahrain, aligned with your strategic goals and your people's potential."
              subtitleAr="نصمم ونقدم برامج تدريبية مخصصة للمؤسسات في جميع أنحاء البحرين، متوافقة مع أهدافك الاستراتيجية وإمكانات موظفيك."
            />
            <div className="flex gap-4 flex-wrap justify-center mt-8 mb-10">
              <CTAButton href="#contact-form" variant="primary" size="lg">
                Request a Proposal
                <ArrowRight className="ml-2 h-4 w-4" />
              </CTAButton>
              <CTAButton href="/courses" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <BilText en="Browse Programs" ar="تصفح البرامج" />
              </CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CorporateClientSections />

      {/* ── Process Timeline ── */}
      <CorporateProcess />

      <ClientLogos />
    </>
  );
}
