"use client";

import { useState } from "react";
import { Building2, Mail, Phone, Users, Send, Paperclip, Briefcase } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";
import { toast } from "sonner";

export default function CorporateInquiryForm() {
  const { t } = useLanguage();
  const [profileFile, setProfileFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    company: "",
    size: "",
    industry: "",
    email: "",
    phone: "",
    employees: "",
    message: "",
  });

  const set = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("Company Name", form.company);
      fd.append("Company Size", form.size);
      fd.append("Industry", form.industry);
      fd.append("Email", form.email);
      fd.append("Phone", form.phone);
      fd.append("Employees to Train", form.employees);
      fd.append("Message", form.message);
      if (profileFile) fd.append("Company Profile", profileFile);

      await fetch("https://formspree.io/f/xqenkvgk", {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });
      toast.success(t("Inquiry sent! We'll be in touch shortly.", "تم إرسال الاستفسار! سنتواصل معك قريباً."));
      setForm({ company: "", size: "", industry: "", email: "", phone: "", employees: "", message: "" });
      setProfileFile(null);
    } catch {
      toast.error(t("Something went wrong. Please try again.", "حدث خطأ ما. يرجى المحاولة مرة أخرى."));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="section-padding bg-[#f8fafc] scroll-mt-24">
      <div className="container-wide max-w-3xl">
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="w-10 h-1 rounded-full bg-turquoise mx-auto mb-4" />
            <h2 className="font-bold text-3xl text-gray-900 mb-3">
              {t("Request a Corporate Training Proposal", "طلب اقتراح تدريب للشركات")}
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              {t(
                "Fill in the form below and our team will prepare a tailored training proposal for your organization.",
                "أكمل النموذج أدناه وسيُعدّ فريقنا اقتراح تدريب مخصصاً لمؤسستك."
              )}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10 space-y-6">

            {/* Row 1: Company name + Size */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                  <Building2 className="h-3.5 w-3.5 text-turquoise" />
                  {t("Company Name *", "اسم الشركة *")}
                </label>
                <input
                  type="text" required value={form.company} onChange={(e) => set("company", e.target.value)}
                  placeholder={t("Your organization name", "اسم مؤسستك")}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/20 bg-white"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5 text-turquoise" />
                  {t("Company Size *", "حجم الشركة *")}
                </label>
                <select
                  required value={form.size} onChange={(e) => set("size", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/20 bg-white"
                >
                  <option value="">{t("Select size", "اختر الحجم")}</option>
                  <option value="1-10">{t("1 – 10 employees", "1 – 10 موظفين")}</option>
                  <option value="11-50">{t("11 – 50 employees", "11 – 50 موظفاً")}</option>
                  <option value="51-200">{t("51 – 200 employees", "51 – 200 موظف")}</option>
                  <option value="201-500">{t("201 – 500 employees", "201 – 500 موظف")}</option>
                  <option value="500+">{t("500+ employees", "أكثر من 500 موظف")}</option>
                </select>
              </div>
            </div>

            {/* Row 2: Industry */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                <Briefcase className="h-3.5 w-3.5 text-turquoise" />
                {t("Industry *", "القطاع *")}
              </label>
              <input
                type="text" required value={form.industry} onChange={(e) => set("industry", e.target.value)}
                placeholder={t("e.g. Retail, Banking, Healthcare, Government...", "مثال: تجزئة، بنوك، رعاية صحية، حكومة...")}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/20 bg-white"
              />
            </div>

            {/* Row 3: Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-turquoise" />
                  {t("Email Address *", "البريد الإلكتروني *")}
                </label>
                <input
                  type="email" required value={form.email} onChange={(e) => set("email", e.target.value)}
                  placeholder="work@company.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/20 bg-white"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-turquoise" />
                  {t("Phone Number *", "رقم الهاتف *")}
                </label>
                <input
                  type="tel" required value={form.phone} onChange={(e) => set("phone", e.target.value)}
                  placeholder="+973 XXXX XXXX"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/20 bg-white"
                />
              </div>
            </div>

            {/* Row 4: Number of employees to train — pill selector */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-turquoise" />
                {t("Number of Employees to Train *", "عدد الموظفين المرشحين للتدريب *")}
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  { value: "1-9",   label: "1 – 9" },
                  { value: "10-25", label: "10 – 25" },
                  { value: "26-50", label: "26 – 50" },
                  { value: "51-100",label: "51 – 100" },
                  { value: "100+",  label: "100+" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => set("employees", opt.value)}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                      form.employees === opt.value
                        ? "bg-turquoise text-white border-turquoise shadow-sm"
                        : "bg-white text-gray-600 border-gray-200 hover:border-turquoise hover:text-turquoise"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              {/* Hidden required input for form validation */}
              <input type="text" required value={form.employees} readOnly className="sr-only" aria-hidden />
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">
                {t("Training Needs & Notes", "احتياجات التدريب والملاحظات")}
              </label>
              <textarea
                rows={4} value={form.message} onChange={(e) => set("message", e.target.value)}
                placeholder={t(
                  "Describe your training objectives, preferred topics, schedule preferences, or any specific requirements...",
                  "صف أهداف التدريب والمواضيع المفضلة وتفضيلات الجدول الزمني أو أي متطلبات محددة..."
                )}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/20 resize-none bg-white"
              />
            </div>

            {/* Company Profile Upload */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">
                {t("Attach Company Profile (optional)", "أرفق ملف الشركة التعريفي (اختياري)")}
              </label>
              <label className="flex items-center gap-4 px-4 py-4 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-turquoise/50 hover:bg-turquoise/5 transition-all duration-200 group">
                <div className="w-10 h-10 rounded-lg bg-turquoise/10 flex items-center justify-center flex-shrink-0 group-hover:bg-turquoise transition-colors">
                  <Paperclip className="h-5 w-5 text-turquoise group-hover:text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  {profileFile ? (
                    <span className="text-sm text-turquoise font-semibold truncate block">{profileFile.name}</span>
                  ) : (
                    <>
                      <span className="text-sm font-semibold text-gray-700 block">
                        {t("Click to upload", "انقر للرفع")}
                      </span>
                      <span className="text-xs text-gray-400">
                        {t("PDF, DOC, DOCX, PPT — max 20MB", "PDF أو DOC أو DOCX أو PPT — بحد أقصى 20MB")}
                      </span>
                    </>
                  )}
                </div>
                <input
                  type="file" accept=".pdf,.doc,.docx,.ppt,.pptx" className="hidden"
                  onChange={(e) => setProfileFile(e.target.files?.[0] ?? null)}
                />
              </label>
              {profileFile && (
                <button type="button" onClick={() => setProfileFile(null)} className="text-xs text-red-400 hover:text-red-600 transition-colors">
                  {t("Remove file", "حذف الملف")}
                </button>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit" disabled={submitting}
              className="w-full py-4 rounded-xl bg-turquoise text-white font-bold text-base hover:bg-[#009ea0] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {submitting ? t("Sending…", "جارٍ الإرسال…") : (
                <>
                  <Send className="h-5 w-5" />
                  {t("Submit Inquiry", "إرسال الاستفسار")}
                </>
              )}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
