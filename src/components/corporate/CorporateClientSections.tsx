"use client";

import { Settings, Clock, Users, Award, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import CTAButton from "@/components/shared/CTAButton";
import { useLanguage } from "@/context/LanguageContext";

export default function CorporateClientSections() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Settings,
      title: t("Customized Curriculum", "منهج مخصص"),
      desc: t("Programs designed around your organization's specific objectives, culture, and industry context.", "برامج مصممة حول الأهداف المحددة لمؤسستك وثقافتها وسياقها الصناعي."),
    },
    {
      icon: Clock,
      title: t("Flexible Scheduling", "جدول زمني مرن"),
      desc: t("Training delivered around your operations — weekdays, weekends, morning or evening, on-site or virtual.", "تدريب يُقدَّم حول عملياتك — أيام الأسبوع، عطلات نهاية الأسبوع، صباحاً أو مساءً، حضورياً أو افتراضياً."),
    },
    {
      icon: Users,
      title: t("Scalable Groups", "مجموعات قابلة للتوسع"),
      desc: t("From small leadership cohorts to company-wide programs. Group discounts available for 10+ participants.", "من مجموعات القيادة الصغيرة إلى البرامج الشاملة للشركة. خصومات للمجموعات لـ 10+ مشاركين."),
    },
    {
      icon: Award,
      title: t("Certified Outcomes", "نتائج معتمدة"),
      desc: t("Staff receive internationally recognized certificates, adding measurable value to your HR records.", "يحصل الموظفون على شهادات معترف بها دولياً، مما يضيف قيمة قابلة للقياس لسجلات الموارد البشرية."),
    },
  ];

  return (
    <>
      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <ScrollReveal>
            <SectionHeading
              title={t("Why Partner with Tylos?", "لماذا الشراكة مع تايلوس؟")}
              subtitle={t("A strategic partner in your organization's human capital development.", "شريك استراتيجي في تطوير رأس المال البشري لمؤسستك.")}
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
                    <h3 className="font-bold text-lg text-gray-900 mb-2" style={{ fontFamily: "var(--font-sans)" }}>
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

      {/* Inquiry Form */}
      <section id="contact-form" className="section-padding bg-[#f8fafc] scroll-mt-40">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <SectionHeading
                title={t("Request a Corporate Training Proposal", "طلب اقتراح تدريب للشركات")}
                subtitle={t("Tell us about your organization and training needs. We respond within 24 hours.", "أخبرنا عن مؤسستك واحتياجاتك التدريبية. نرد خلال 24 ساعة.")}
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
    </>
  );
}
