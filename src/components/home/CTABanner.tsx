"use client";

import { useState } from "react";
import { ArrowRight, Calendar, X } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import CTAButton from "@/components/shared/CTAButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useLanguage } from "@/context/LanguageContext";

export default function CTABanner() {
  const { t } = useLanguage();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", time: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: `Meeting request for ${form.date} at ${form.time}`,
          subject: "Book a Meeting",
        }),
      });
      toast.success("Meeting request sent! We'll confirm your booking shortly.");
      setBookingOpen(false);
      setForm({ name: "", email: "", phone: "", date: "", time: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-dark via-blue-brand to-turquoise" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative container-wide py-20 text-center">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <p className="text-white/60 text-sm uppercase tracking-widest font-semibold mb-4">
                {t("Ready to transform your business?", "هل أنت مستعد لتطوير عملك؟")}
              </p>
              <h2
                className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {t("Invest in your employees today", "استثمر في موظفيك اليوم")}
              </h2>
              <p className="text-white/75 text-lg mb-10 leading-relaxed">
                {t(
                  "Join businesses that have elevated their performance with Tylos Human Development Center. Internationally accredited programs. 100% funded.",
                  "انضم إلى الشركات التي رفعت من أدائها مع مركز تايلوس للتنمية البشرية. برامج معتمدة دولياً. تمويل 100%."
                )}
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <CTAButton href="/corporate" variant="white" size="lg">
                  {t("Corporate", "تدريب الشركات")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </CTAButton>
                <CTAButton
                  onClick={() => setBookingOpen(true)}
                  variant="outline"
                  size="lg"
                  className="border-white/40 text-white hover:bg-white hover:text-blue-brand"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {t("Book a Meeting", "احجز اجتماعاً")}
                </CTAButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Book a Meeting Modal */}
      {bookingOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setBookingOpen(false)}
          />
          {/* Modal */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 z-10">
            {/* Close */}
            <button
              onClick={() => setBookingOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <div className="w-10 h-10 rounded-xl bg-turquoise/10 flex items-center justify-center mb-3">
                <Calendar className="h-5 w-5 text-turquoise" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{t("Book a Meeting", "احجز اجتماعاً")}</h3>
              <p className="text-gray-500 text-sm mt-1">
                {t("Schedule a consultation with our team. We'll be in touch to confirm.", "احجز استشارة مع فريقنا. سنتواصل معك للتأكيد.")}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="bm-name">{t("Full Name", "الاسم الكامل")}</Label>
                <Input
                  id="bm-name"
                  placeholder={t("Your full name", "اسمك الكامل")}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="bm-email">{t("Email Address", "البريد الإلكتروني")}</Label>
                <Input
                  id="bm-email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="bm-phone">{t("Phone Number", "رقم الهاتف")}</Label>
                <Input
                  id="bm-phone"
                  type="tel"
                  placeholder="+973 XXXX XXXX"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="bm-date">{t("Preferred Date", "التاريخ المفضل")}</Label>
                  <Input
                    id="bm-date"
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    min={new Date().toISOString().split("T")[0]}
                    required
                    className="text-gray-800"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="bm-time">{t("Preferred Time", "الوقت المفضل")}</Label>
                  <Input
                    id="bm-time"
                    type="time"
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    required
                    className="text-gray-800"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full mt-2 py-3 rounded-xl bg-turquoise text-white font-semibold hover:bg-turquoise/90 transition-colors disabled:opacity-60"
              >
                {submitting ? t("Sending...", "جارٍ الإرسال...") : t("Confirm Booking", "تأكيد الحجز")}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
