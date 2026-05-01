"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ScrollReveal from "@/components/shared/ScrollReveal";
import CTAButton from "@/components/shared/CTAButton";
import SectionHeading from "@/components/shared/SectionHeading";
import { toast } from "sonner";
import { useLanguage } from "@/context/LanguageContext";

const schema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject required"),
  message: z.string().min(20, "Please enter at least 20 characters"),
});
type FormData = z.infer<typeof schema>;

const contactCards = [
  { icon: Phone, title: "Phone", titleAr: "الهاتف", lines: ["+973 1762 6484"], color: "turquoise" },
  { icon: MessageCircle, title: "WhatsApp", titleAr: "واتساب", lines: ["+973 3465 5220"], link: "https://api.whatsapp.com/send?phone=97334655220", color: "green" },
  { icon: Mail, title: "Email", titleAr: "البريد الإلكتروني", lines: ["info@thd.bh"], color: "blue" },
  { icon: Clock, title: "Working Hours", titleAr: "ساعات العمل", lines: ["Sun – Wed: 8:30 AM – 5:00 PM", "Thu: 8:30 AM – 4:00 PM", "Fri – Sat: Closed"], linesAr: ["الأحد – الأربعاء: 8:30 ص – 5:00 م", "الخميس: 8:30 ص – 4:00 م", "الجمعة – السبت: مغلق"], color: "turquoise" },
];

export default function ContactPage() {
  const { isAr, t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "contact" }),
      });
      if (res.ok) { toast.success("Message sent! We'll respond within 24 hours."); reset(); }
      else toast.error("Failed to send. Please try again.");
    } catch {
      toast.error("Unable to send. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-[#020b13]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(0,179,164,0.20) 0%, rgba(0,155,158,0.14) 16%, rgba(0,87,168,0.12) 32%, rgba(2,20,38,0.90) 54%, rgba(2,11,19,1) 74%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,179,164,0.40) 1px, transparent 0)",
            backgroundSize: "28px 28px",
            maskImage: "linear-gradient(to right, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.07) 50%, transparent 80%)",
            WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.07) 50%, transparent 80%)",
          }}
        />
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,179,164,0.12) 0%, transparent 65%)" }} />

        <div className="relative container-wide text-center">
          <ScrollReveal>
            <p className="text-turquoise text-sm uppercase tracking-widest font-semibold mb-4">
              {t("We Are Here to Help", "نحن هنا للمساعدة")}
            </p>
            <h1
              className="font-bold text-4xl md:text-6xl text-white mb-6"
              style={isAr
                ? { fontFamily: '"BahijTheSans", system-ui, sans-serif', fontWeight: 900 }
                : { fontFamily: "var(--font-sans)" }
              }
            >
              {t("Get in Touch", "تواصل معنا")}
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
              {t(
                "Whether you have a question about courses, funding, or corporate training, our team is ready to help.",
                "سواء كان لديك استفسار عن الدورات أو التمويل أو تدريب الشركات، فريقنا مستعد للمساعدة."
              )}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Contact cards ── */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              const lines = isAr && "linesAr" in card && card.linesAr ? card.linesAr as string[] : card.lines;
              const cardLinks: Record<string, string> = {
                Phone: "tel:+97317626484",
                WhatsApp: "https://api.whatsapp.com/send?phone=97334655220",
                Email: "mailto:info@thd.bh",
              };
              const href = cardLinks[card.title];

              const CardWrapper = ({ children }: { children: React.ReactNode }) =>
                href ? (
                  <a href={href} target={card.title === "WhatsApp" ? "_blank" : undefined} rel="noopener noreferrer"
                    className={`flex flex-col h-full p-6 rounded-2xl border border-gray-100 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
                      card.color === "turquoise" ? "hover:border-turquoise/30" : card.color === "blue" ? "hover:border-blue-brand/30" : "hover:border-green-300"
                    }`}>
                    {children}
                  </a>
                ) : (
                  <div className={`flex flex-col h-full p-6 rounded-2xl border border-gray-100 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
                    card.color === "turquoise" ? "hover:border-turquoise/30" : "hover:border-green-300"
                  }`}>
                    {children}
                  </div>
                );

              return (
                <ScrollReveal key={card.title} delay={index * 0.1} className="h-full">
                  <CardWrapper>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                      card.color === "turquoise" ? "bg-turquoise/10" : card.color === "blue" ? "bg-blue-50" : "bg-green-50"
                    }`}>
                      <Icon className={`h-6 w-6 ${card.color === "turquoise" ? "text-turquoise" : card.color === "blue" ? "text-blue-brand" : "text-green-600"}`} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-3 text-sm">{isAr && card.titleAr ? card.titleAr : card.title}</h3>
                    <div className="flex-1 flex flex-col justify-center gap-1">
                      {lines.map((line) => (
                        <p key={line} className="text-sm text-gray-500">{line}</p>
                      ))}
                    </div>
                  </CardWrapper>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Map + Form ── */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

            {/* Map column */}
            <ScrollReveal direction="left" className="lg:col-span-2">
              <div className="flex flex-col gap-4">
                {/* Map embed */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 aspect-square">
                  <iframe
                    src="https://maps.google.com/maps?q=Building+698+Road+7325+Block+473+Abu+Saiba+Bahrain&output=embed&z=16"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Tylos HDC Location"
                  />
                </div>

                {/* Address + email card */}
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-turquoise/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-turquoise" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{t("Our Location", "موقعنا")}</div>
                      <div className="text-gray-500 text-sm mt-1 leading-relaxed">
                        {t("Office 21, 2nd Floor, Building 698", "مكتب 21، الطابق الثاني، المبنى 698")}<br />
                        {t("Road 7325, Block 473, Abu Saiba, Bahrain", "طريق 7325، بلوك 473، أبو صيبع، البحرين")}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                    <Mail className="h-4 w-4 text-turquoise flex-shrink-0" />
                    <a href="mailto:info@thd.bh" className="text-turquoise hover:underline font-medium">info@thd.bh</a>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/ysSMTdyVrpHD8E2A6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-turquoise text-white text-sm font-semibold hover:bg-[#009ea0] transition-colors"
                  >
                    <MapPin className="h-4 w-4" />
                    {t("Get Directions", "احصل على الاتجاهات")}
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal direction="right" className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
                <SectionHeading
                  title={t("Let's Keep in Touch", "تواصل معنا")}
                  subtitle={t("We're more than happy to help you with any inquiry.", "يسعدنا مساعدتك في أي استفسار.")}
                  centered={false}
                  className={isAr ? "text-right" : ""}
                />

                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label htmlFor="name">{t("Full Name", "الاسم الكامل")}</Label>
                      <Input id="name" {...register("name")} placeholder={t("Your name", "اسمك")} />
                      {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email">{t("Email Address", "البريد الإلكتروني")}</Label>
                      <Input id="email" type="email" {...register("email")} placeholder="your@email.com" />
                      {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="phone">{t("Phone (optional)", "الهاتف (اختياري)")}</Label>
                    <Input id="phone" type="tel" {...register("phone")} placeholder="+973 XXXX XXXX" />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="subject">{t("Subject", "الموضوع")}</Label>
                    <Input id="subject" {...register("subject")} placeholder={t("What is your inquiry about?", "ما موضوع استفسارك؟")} />
                    {errors.subject && <p className="text-red-500 text-xs">{errors.subject.message}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message">{t("Message", "الرسالة")}</Label>
                    <textarea id="message" {...register("message")} rows={5}
                      placeholder={t("Please describe your inquiry in detail...", "يرجى وصف استفسارك بالتفصيل...")}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-turquoise focus:ring-1 focus:ring-turquoise resize-none" />
                    {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
                  </div>

                  <CTAButton type="submit" variant="primary" size="lg" className="w-full" disabled={loading}>
                    <Send className="mr-2 h-4 w-4" />
                    {loading ? t("Sending...", "جارٍ الإرسال...") : t("Send Message", "أرسل الرسالة")}
                  </CTAButton>
                </form>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </>
  );
}
