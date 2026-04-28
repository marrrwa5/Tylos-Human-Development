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
  department: z.string().min(1, "Please select a department"),
  message: z.string().min(20, "Please enter at least 20 characters"),
});
type FormData = z.infer<typeof schema>;

const credentialPills = ["Est. 2002", "NOCN Accredited", "Cisco Partner", "IAB Certified", "100% Funded"];

const contactCards = [
  { icon: Phone, title: "Phone", titleAr: "الهاتف", lines: ["+973 1700 0000", "+973 1700 0001"], color: "turquoise" },
  { icon: MessageCircle, title: "WhatsApp", titleAr: "واتساب", lines: ["+973 3465 5220"], link: "https://api.whatsapp.com/send?phone=97334655220", color: "green" },
  { icon: Mail, title: "Email", titleAr: "البريد الإلكتروني", lines: ["info@tylosthd.com", "training@tylosthd.com"], color: "blue" },
  { icon: Clock, title: "Working Hours", titleAr: "ساعات العمل", lines: ["Sun to Thu: 8:00 AM to 5:00 PM", "Sat: 9:00 AM to 1:00 PM"], linesAr: ["الأحد إلى الخميس: 8:00 ص إلى 5:00 م", "السبت: 9:00 ص إلى 1:00 م"], color: "turquoise" },
];

const departments = [
  { label: "General Inquiry", labelAr: "استفسار عام", value: "general" },
  { label: "Course Enrollment", labelAr: "التسجيل في الدورات", value: "enrollment" },
  { label: "Corporate Training", labelAr: "تدريب الشركات", value: "corporate" },
  { label: "100% Funded Programs", labelAr: "البرامج الممولة 100%", value: "funding" },
  { label: "Certificate Inquiry", labelAr: "الاستفسار عن الشهادات", value: "certificate" },
  { label: "Instructor Application", labelAr: "طلب انضمام كمدرب", value: "instructor" },
  { label: "Technical Support", labelAr: "الدعم التقني", value: "support" },
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
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {t("Get in Touch", "تواصل معنا")}
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
              {t(
                "Whether you have a question about courses, funding, or corporate training, our team is ready to help.",
                "سواء كان لديك استفسار عن الدورات أو التمويل أو تدريب الشركات، فريقنا مستعد للمساعدة."
              )}
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {credentialPills.map((pill) => (
                <span key={pill} className="px-4 py-1.5 rounded-full bg-white/8 border border-white/15 text-white/70 text-xs font-medium backdrop-blur-sm">
                  {pill}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Contact cards ── */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <ScrollReveal key={card.title} delay={index * 0.1}>
                  <div className={`p-6 rounded-2xl border border-gray-100 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
                    card.color === "turquoise" ? "hover:border-turquoise/30" : card.color === "blue" ? "hover:border-blue-brand/30" : "hover:border-green-300"
                  }`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                      card.color === "turquoise" ? "bg-turquoise/10" : card.color === "blue" ? "bg-blue-50" : "bg-green-50"
                    }`}>
                      <Icon className={`h-6 w-6 ${card.color === "turquoise" ? "text-turquoise" : card.color === "blue" ? "text-blue-brand" : "text-green-600"}`} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">{isAr && card.titleAr ? card.titleAr : card.title}</h3>
                    {(isAr && "linesAr" in card && card.linesAr ? card.linesAr as string[] : card.lines).map((line) =>
                      card.link ? (
                        <a key={line} href={card.link} target="_blank" rel="noopener noreferrer"
                          className="block text-sm text-gray-500 hover:text-turquoise transition-colors">{line}</a>
                      ) : (
                        <p key={line} className="text-sm text-gray-500">{line}</p>
                      )
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Map + Form ── */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Map column */}
            <ScrollReveal direction="left" className="lg:col-span-2">
              <div className="space-y-4 h-full">
                {/* Map embed */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 aspect-square">
                  <iframe
                    src="https://www.google.com/maps?q=Manama+Bahrain&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Tylos HDC Location"
                  />
                </div>

                {/* Address card */}
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-turquoise/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-turquoise" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{t("Our Location", "موقعنا")}</div>
                      <div className="text-gray-500 text-sm mt-1 leading-relaxed">
                        {t("Kadhem Bushehri Building", "مبنى كاظم بوشهري")}<br />
                        {t("Manama, Kingdom of Bahrain", "المنامة، مملكة البحرين")}
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/FqmcpdJsHL43H3Yz9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-turquoise text-white text-sm font-semibold hover:bg-[#009ea0] transition-colors"
                  >
                    <MapPin className="h-4 w-4" />
                    Get Directions
                  </a>
                </div>

                {/* Department contacts */}
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900 text-sm mb-3">{t("Department Contacts", "جهات الاتصال بالأقسام")}</h4>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex justify-between">
                      <span>{t("Sales and Enrollment", "المبيعات والتسجيل")}</span>
                      <a href="mailto:sales@tylosthd.com" className="text-turquoise hover:underline">sales@tylosthd.com</a>
                    </div>
                    <div className="flex justify-between">
                      <span>{t("Student Support", "دعم الطلاب")}</span>
                      <a href="mailto:support@tylosthd.com" className="text-turquoise hover:underline">support@tylosthd.com</a>
                    </div>
                    <div className="flex justify-between">
                      <span>{t("Corporate Training", "تدريب الشركات")}</span>
                      <a href="mailto:corporate@tylosthd.com" className="text-turquoise hover:underline">corporate@tylosthd.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal direction="right" className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
                <SectionHeading
                  title={t("Send Us a Message", "أرسل لنا رسالة")}
                  subtitle={t("We respond to all inquiries within 24 business hours.", "نرد على جميع الاستفسارات خلال 24 ساعة عمل.")}
                  centered={false}
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label htmlFor="phone">{t("Phone (optional)", "الهاتف (اختياري)")}</Label>
                      <Input id="phone" type="tel" {...register("phone")} placeholder="+973 XXXX XXXX" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="department">{t("Department", "القسم")}</Label>
                      <select id="department" {...register("department")}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-turquoise focus:ring-1 focus:ring-turquoise bg-white">
                        <option value="">{t("Select department", "اختر القسم")}</option>
                        {departments.map((d) => (
                          <option key={d.value} value={d.value}>{isAr ? d.labelAr : d.label}</option>
                        ))}
                      </select>
                      {errors.department && <p className="text-red-500 text-xs">{errors.department.message}</p>}
                    </div>
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
