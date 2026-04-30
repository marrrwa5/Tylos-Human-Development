import type { Metadata } from "next";
import MissionVisionValues from "@/components/about/MissionVisionValues";
import StatsCounter from "@/components/about/StatsCounter";
import CEOMessage from "@/components/about/CEOMessage";
import InstructorApplicationForm from "@/components/about/InstructorApplicationForm";
import AboutStorySections from "@/components/about/AboutStorySections";
import AccreditationLogos from "@/components/home/AccreditationLogos";
import Testimonials from "@/components/home/Testimonials";
import ClientLogos from "@/components/home/ClientLogos";
import CTABanner from "@/components/home/CTABanner";
import ScrollReveal from "@/components/shared/ScrollReveal";
import CTAButton from "@/components/shared/CTAButton";
import PageBannerText from "@/components/shared/PageBannerText";
import { Download } from "lucide-react";
import BilText from "@/components/shared/BilText";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Tylos Human Development Center — Bahrain's premier training center established in 2002. Our mission, vision, values, and team.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero — matches homepage gradient style ── */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        {/* Base dark navy */}
        <div className="absolute inset-0 bg-[#020b13]" />

        {/* Smooth diagonal gradient — turquoise → teal-navy → deep navy */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(0,179,164,0.20) 0%, rgba(0,155,158,0.15) 12%, rgba(0,100,130,0.12) 25%, rgba(2,20,38,0.90) 48%, rgba(2,11,19,1) 70%)",
          }}
        />

        {/* Dot pattern — fades right */}
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
        <div className="absolute -top-24 -left-24 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,179,164,0.14) 0%, transparent 65%)" }} />
        <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,87,168,0.10) 0%, transparent 65%)" }} />


        <div className="relative container-wide text-center">
          <ScrollReveal>
            <PageBannerText
              eyebrow="Est. 2002"
              eyebrowAr="تأسس عام 2002"
              title="About Tylos Human Development Center"
              titleAr="عن مركز تايلوس للتنمية البشرية"
              subtitle="Dedicated to empowering individuals and organizations through internationally accredited professional training."
              subtitleAr="ملتزمون بتمكين الأفراد والمؤسسات من خلال التدريب المهني المعتمد دولياً."
            />
            <div className="mt-6">
              <CTAButton href="/pdfs/company-profile.pdf" variant="primary" size="lg" external>
                <Download className="mr-2 h-4 w-4" />
                <BilText en="Download Company Profile" ar="تحميل الملف التعريفي" />
              </CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <StatsCounter />
      <AccreditationLogos />
      <AboutStorySections />
      <MissionVisionValues />
      <CEOMessage />
      <ClientLogos />
      <Testimonials />
      <InstructorApplicationForm />
      <CTABanner />
    </>
  );
}
