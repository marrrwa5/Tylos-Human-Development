"use client";

import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import CTAButton from "@/components/shared/CTAButton";
import { useLanguage } from "@/context/LanguageContext";

export default function CorporateForm() {
  const { t } = useLanguage();

  return (
    <section id="contact-form" className="section-padding bg-[#f8fafc] scroll-mt-40">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <SectionHeading
              title={t("Request a Corporate Training Proposal", "طلب اقتراح تدريب للشركات")}
              subtitle={t("Tell us about your organization and training needs.", "أخبرنا عن مؤسستك واحتياجاتك التدريبية.")}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form className="mt-10 space-y-5 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { label: t("Contact Name", "اسم جهة الاتصال"), id: "contact_name", type: "text", placeholder: t("Your full name", "اسمك الكامل") },
                  { label: t("Company Name", "اسم الشركة"), id: "company", type: "text", placeholder: t("Your organization", "مؤسستك") },
                  { label: t("Email Address", "البريد الإلكتروني"), id: "email", type: "email", placeholder: "work@company.com" },
                  { label: t("Phone Number", "رقم الهاتف"), id: "phone", type: "tel", placeholder: "+973 XXXX XXXX" },
                ].map((field) => (
                  <div key={field.id} className="space-y-1.5">
                    <label htmlFor={field.id} className="text-sm font-medium text-gray-700">{field.label}</label>
                    <input id={field.id} type={field.type} placeholder={field.placeholder} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-brand focus:ring-1 focus:ring-blue-brand bg-white" />
                  </div>
                ))}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="employees" className="text-sm font-medium text-gray-700">{t("Number of Employees to Train", "عدد الموظفين للتدريب")}</label>
                <select id="employees" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-brand bg-white">
                  <option value="">{t("Select range", "اختر النطاق")}</option>
                  <option>{t("Less than 10", "أقل من 10")}</option>
                  <option>{t("10 to 25", "10 إلى 25")}</option>
                  <option>{t("26 to 50", "26 إلى 50")}</option>
                  <option>{t("51 to 100", "51 إلى 100")}</option>
                  <option>{t("More than 100", "أكثر من 100")}</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="training_need" className="text-sm font-medium text-gray-700">{t("Training Areas of Interest", "مجالات التدريب المهتم بها")}</label>
                <textarea id="training_need" rows={3} placeholder={t("e.g. Customer Service, Leadership, IT, HR Management...", "مثال: خدمة العملاء، القيادة، تقنية المعلومات، إدارة الموارد البشرية...")} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-brand resize-none bg-white" />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">{t("Additional Notes", "ملاحظات إضافية")}</label>
                <textarea id="message" rows={3} placeholder={t("Preferred dates, delivery format (on-site or virtual), budget range...", "التواريخ المفضلة، طريقة التقديم (حضوري أو افتراضي)، نطاق الميزانية...")} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-brand resize-none bg-white" />
              </div>

              <CTAButton type="submit" variant="secondary" size="lg" className="w-full">
                {t("Submit Inquiry", "إرسال الاستفسار")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </CTAButton>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
