import type { Metadata } from "next";
import { Settings, Clock, Users, Award, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import CTAButton from "@/components/shared/CTAButton";
import ClientLogos from "@/components/home/ClientLogos";
import CorporateProcess from "@/components/corporate/CorporateProcess";
import PageBannerText from "@/components/shared/PageBannerText";

export const metadata: Metadata = {
  title: "Corporate Training",
  description:
    "Tailored corporate training solutions for organizations across Bahrain. Customized programs, on-site delivery, and measurable results.",
};

const benefits = [
  {
    icon: Settings,
    title: "Customized Curriculum",
    desc: "Programs designed around your organization's specific objectives, culture, and industry context.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    desc: "Training delivered around your operations — weekdays, weekends, morning or evening, on-site or virtual.",
  },
  {
    icon: Users,
    title: "Scalable Groups",
    desc: "From small leadership cohorts to company-wide programs. Group discounts available for 10+ participants.",
  },
  {
    icon: Award,
    title: "Certified Outcomes",
    desc: "Staff receive internationally recognized certificates, adding measurable value to your HR records.",
  },
];

const credentialPills = ["Est. 2002", "NOCN Accredited", "Cisco Partner", "IAB Certified", "100% Funded"];

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
              <CTAButton
                href="/courses"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Browse Programs
              </CTAButton>
            </div>

            {/* Credential pills */}
            <div className="flex flex-wrap gap-2 justify-center">
              {credentialPills.map((pill) => (
                <span
                  key={pill}
                  className="px-4 py-1.5 rounded-full bg-white/8 border border-white/15 text-white/70 text-xs font-medium backdrop-blur-sm"
                >
                  {pill}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <ScrollReveal>
            <SectionHeading
              title="Why Partner with Tylos?"
              subtitle="A strategic partner in your organization's human capital development."
            />
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <ScrollReveal key={benefit.title} delay={index * 0.12}>
                  <div className="group p-6 rounded-2xl border border-gray-100 hover:border-blue-brand/30 hover:bg-blue-50/30 hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-brand transition-colors duration-300">
                      <Icon className="h-6 w-6 text-blue-brand group-hover:text-white transition-colors" />
                    </div>
                    <h3
                      className="font-bold text-lg text-gray-900 mb-2"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {benefit.title}
                    </h3>
                    <p className="text-gray-brand text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Process Timeline ── */}
      <CorporateProcess />

      <ClientLogos />

      {/* ── Inquiry form ── */}
      <section id="contact-form" className="section-padding bg-[#f8fafc] scroll-mt-40">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <SectionHeading
                title="Request a Corporate Training Proposal"
                subtitle="Tell us about your organization and training needs. We respond within 24 hours."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <form className="mt-10 space-y-5 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { label: "Contact Name", id: "contact_name", type: "text", placeholder: "Your full name" },
                    { label: "Company Name", id: "company", type: "text", placeholder: "Your organization" },
                    { label: "Email Address", id: "email", type: "email", placeholder: "work@company.com" },
                    { label: "Phone Number", id: "phone", type: "tel", placeholder: "+973 XXXX XXXX" },
                  ].map((field) => (
                    <div key={field.id} className="space-y-1.5">
                      <label htmlFor={field.id} className="text-sm font-medium text-gray-700">
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-brand focus:ring-1 focus:ring-blue-brand bg-white"
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="employees" className="text-sm font-medium text-gray-700">
                    Number of Employees to Train
                  </label>
                  <select
                    id="employees"
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-brand bg-white"
                  >
                    <option value="">Select range</option>
                    <option>Less than 10</option>
                    <option>10 to 25</option>
                    <option>26 to 50</option>
                    <option>51 to 100</option>
                    <option>More than 100</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="training_need" className="text-sm font-medium text-gray-700">
                    Training Areas of Interest
                  </label>
                  <textarea
                    id="training_need"
                    rows={3}
                    placeholder="e.g. Customer Service, Leadership, IT, HR Management..."
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-brand resize-none bg-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Additional Notes
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Preferred dates, delivery format (on-site or virtual), budget range..."
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-brand resize-none bg-white"
                  />
                </div>

                <CTAButton type="submit" variant="secondary" size="lg" className="w-full">
                  Submit Inquiry
                  <ArrowRight className="ml-2 h-4 w-4" />
                </CTAButton>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
