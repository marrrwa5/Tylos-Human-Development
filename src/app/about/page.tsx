import type { Metadata } from "next";
import MissionVisionValues from "@/components/about/MissionVisionValues";
import StatsCounter from "@/components/about/StatsCounter";
import CEOMessage from "@/components/about/CEOMessage";
import InstructorApplicationForm from "@/components/about/InstructorApplicationForm";
import AccreditationLogos from "@/components/home/AccreditationLogos";
import Testimonials from "@/components/home/Testimonials";
import ClientLogos from "@/components/home/ClientLogos";
import CTABanner from "@/components/home/CTABanner";
import ScrollReveal from "@/components/shared/ScrollReveal";
import CTAButton from "@/components/shared/CTAButton";
import PageBannerText from "@/components/shared/PageBannerText";
import { Download, Award, BadgeCheck, UserCheck, BookOpen } from "lucide-react";

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
              pills={["Est. 2002", "NOCN Accredited", "Cisco Partner", "IAB Certified", "100% Funded"]}
            />
            <div className="mt-6">
              <CTAButton href="/pdfs/company-profile.pdf" variant="primary" size="lg" external>
                <Download className="mr-2 h-4 w-4" />
                Download Company Profile
              </CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <StatsCounter />
      <AccreditationLogos />

      {/* ── Our Story ── */}
      <section className="section-padding bg-[#f8fafc] overflow-hidden">
        <div className="container-wide">
          <ScrollReveal direction="left">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-0 rounded-3xl overflow-hidden shadow-xl border border-gray-100">

              {/* Accent sidebar */}
              <div className="bg-gradient-to-b from-turquoise to-[#0057A8] w-full md:w-2 flex-shrink-0" />

              {/* Content */}
              <div className="bg-white flex-1 p-10 md:p-12">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-turquoise border border-turquoise/30 bg-turquoise/5 px-3 py-1 rounded-full mb-5">
                  Est. 2002
                </span>
                <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-5" style={{ fontFamily: "var(--font-sans)" }}>
                  Our Story
                </h2>
                <p className="text-gray-500 leading-relaxed text-base max-w-3xl">
                  Tylos Human Development Center, established in 2002, is a trusted training provider
                  dedicated to empowering individuals and organizations through skill development and
                  talent growth. With a strong focus on practical, career-oriented learning, Tylos
                  delivers high-quality, internationally accredited programs in fields such as Business
                  Management, Marketing, Human Resources, Customer Service, Artificial Intelligence,
                  and Information Technology.
                </p>
                <div className="mt-8 flex flex-wrap gap-6">
                  {[
                    { num: "20+", label: "Years of Excellence" },
                    { num: "1,000+", label: "Graduates" },
                    { num: "13+", label: "Programs" },
                  ].map(({ num, label }) => (
                    <div key={label} className="flex items-baseline gap-1.5">
                      <span className="text-turquoise font-black text-2xl" style={{ fontFamily: "var(--font-sans)" }}>{num}</span>
                      <span className="text-gray-400 text-sm">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── What Makes Us Different ── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="w-10 h-1 rounded-full bg-blue-brand mx-auto mb-4" />
              <h2 className="font-bold text-3xl md:text-4xl text-gray-900" style={{ fontFamily: "var(--font-sans)" }}>
                What Makes Us Different
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                Icon: Award,
                title: "International Accreditation",
                desc: "Certified by NOCN (UK), Cisco, IAB and global bodies — recognized worldwide.",
                color: "turquoise",
              },
              {
                Icon: BadgeCheck,
                title: "100% Funded",
                desc: "Access our programs at zero cost through government funding initiatives.",
                color: "blue",
              },
              {
                Icon: UserCheck,
                title: "Expert Practitioners",
                desc: "Instructors are industry professionals with genuine real-world experience.",
                color: "turquoise",
              },
              {
                Icon: BookOpen,
                title: "Hands-on Methodology",
                desc: "Every program blends theory with practice so learning sticks on the job.",
                color: "blue",
              },
            ].map(({ Icon, title, desc, color }, i) => (
              <ScrollReveal key={title} delay={i * 0.1}>
                <div className="group bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${
                    color === "turquoise"
                      ? "bg-turquoise/10 group-hover:bg-turquoise"
                      : "bg-blue-brand/10 group-hover:bg-blue-brand"
                  }`}>
                    <Icon className={`h-5 w-5 transition-colors duration-300 ${
                      color === "turquoise"
                        ? "text-turquoise group-hover:text-white"
                        : "text-blue-brand group-hover:text-white"
                    }`} />
                  </div>
                  <h3 className={`font-bold text-sm mb-2 ${color === "turquoise" ? "text-turquoise" : "text-blue-brand"}`}>
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <MissionVisionValues />
      <CEOMessage />
      <ClientLogos />
      <Testimonials />
      <InstructorApplicationForm />
      <CTABanner />
    </>
  );
}
