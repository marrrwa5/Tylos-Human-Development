"use client";

import { useState } from "react";
import { ArrowRight, Calendar, X, Paperclip } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import CTAButton from "@/components/shared/CTAButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useLanguage } from "@/context/LanguageContext";

export default function CTABanner() {
  const { t, isAr } = useLanguage();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [profileFile, setProfileFile] = useState<File | null>(null);
  const [form, setForm] = useState({
    company: "", industry: "", email: "", phone: "", date: "", time: "", notes: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.company,
          email: form.email,
          phone: form.phone,
          message: `Meeting request for ${form.date} at ${form.time}\nIndustry: ${form.industry}\nNotes: ${form.notes}\nProfile: ${profileFile?.name ?? "none"}`,
          subject: "Book a Meeting",
        }),
      });
      toast.success(t("Meeting request sent! We'll confirm your booking shortly.", "تم إرسال طلب الاجتماع! سنؤكد حجزك قريباً."));
      setBookingOpen(false);
      setForm({ company: "", industry: "", email: "", phone: "", date: "", time: "", notes: "" });
      setProfileFile(null);
    } catch {
      toast.error(t("Something went wrong. Please try again.", "حدث خطأ ما. يرجى المحاولة مرة أخرى."));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-dark via-blue-brand to-turquoise" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />

        <div className="relative container-wide py-20 text-center">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <p className="text-white/60 text-sm uppercase tracking-widest font-semibold mb-4">
                {t("Ready to transform your business?", "هل أنت مستعد لتطوير عملك؟")}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-sans)" }}>
                {t("Invest in your employees", "استثمر في موظفيك")}
              </h2>
              <p className={`text-white/75 mb-10 ${isAr ? "text-sm md:text-base leading-relaxed" : "text-lg leading-relaxed"}`}>
                {t(
                  "Join businesses that have elevated their performance with Tylos Human Development Center. Internationally accredited programs. 100% funded.",
                  "انضم إلى الشركات التي رفعت من أدائها مع مركز تايلوس للتنمية البشرية. برامج معتمدة دولياً. تمويل 100%."
                )}
              </p>
              <div className="flex justify-center">
                <CTAButton href="/corporate" variant="white" size="lg">
                  {t("Corporate Training", "تدريب الشركات")}
                  <ArrowRight className={`h-5 w-5 ${isAr ? "mr-2 rotate-180" : "ml-2"}`} />
                </CTAButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Book a Meeting Modal */}
      {bookingOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setBookingOpen(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 z-10 max-h-[90vh] overflow-y-auto">
            <button onClick={() => setBookingOpen(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
              <X className="h-4 w-4" />
            </button>

            <div className="mb-6">
              <div className="w-10 h-10 rounded-xl bg-turquoise/10 flex items-center justify-center mb-3">
                <Calendar className="h-5 w-5 text-turquoise" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{t("Book a Meeting", "احجز اجتماعاً")}</h3>
              <p className="text-gray-500 text-sm mt-1">{t("Schedule a consultation with our team. We'll be in touch to confirm.", "احجز استشارة مع فريقنا. سنتواصل معك للتأكيد.")}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="bm-company">{t("Company Name *", "اسم الشركة *")}</Label>
                <Input id="bm-company" placeholder={t("Your company name", "اسم شركتك")} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} required />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="bm-industry">{t("Industry *", "القطاع *")}</Label>
                <Input id="bm-industry" placeholder={t("e.g. Retail, Banking, Healthcare...", "مثال: تجزئة، بنوك، رعاية صحية...")} value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })} required />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="bm-email">{t("Email Address *", "البريد الإلكتروني *")}</Label>
                <Input id="bm-email" type="email" placeholder="work@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="bm-phone">{t("Phone Number *", "رقم الهاتف *")}</Label>
                <Input id="bm-phone" type="tel" placeholder="+973 XXXX XXXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="bm-date">{t("Preferred Date *", "التاريخ المفضل *")}</Label>
                  <Input id="bm-date" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} min={new Date().toISOString().split("T")[0]} required className="text-gray-800" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="bm-time">{t("Preferred Time *", "الوقت المفضل *")}</Label>
                  <Input id="bm-time" type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} required className="text-gray-800" />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="bm-notes">{t("Notes (optional)", "ملاحظات (اختياري)")}</Label>
                <textarea id="bm-notes" rows={3} placeholder={t("Any additional information or specific topics you'd like to discuss...", "أي معلومات إضافية أو موضوعات محددة تودّ مناقشتها...")} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-turquoise focus:ring-1 focus:ring-turquoise resize-none" />
              </div>

              {/* Company Profile Attachment */}
              <div className="space-y-1.5">
                <Label>{t("Attach Company Profile (optional)", "أرفق ملف الشركة التعريفي (اختياري)")}</Label>
                <label className="flex items-center gap-3 px-4 py-3 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-turquoise/50 hover:bg-turquoise/5 transition-all duration-200 group">
                  <Paperclip className="h-4 w-4 text-gray-400 group-hover:text-turquoise flex-shrink-0" />
                  <span className="text-sm text-gray-500 group-hover:text-turquoise truncate">
                    {profileFile ? profileFile.name : t("Click to attach company profile PDF", "انقر لإرفاق ملف الشركة التعريفي")}
                  </span>
                  <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => setProfileFile(e.target.files?.[0] ?? null)} />
                </label>
                {profileFile && (
                  <button type="button" onClick={() => setProfileFile(null)} className="text-xs text-red-400 hover:text-red-600">{t("Remove", "حذف")}</button>
                )}
              </div>

              <button type="submit" disabled={submitting} className="w-full mt-2 py-3 rounded-xl bg-turquoise text-white font-semibold hover:bg-turquoise/90 transition-colors disabled:opacity-60">
                {submitting ? t("Sending...", "جارٍ الإرسال...") : t("Confirm Booking", "تأكيد الحجز")}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
