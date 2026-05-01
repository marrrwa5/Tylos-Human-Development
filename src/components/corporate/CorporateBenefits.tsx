"use client";

import { Settings, Clock, Users, Award } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function CorporateBenefits() {
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
    <section className="section-padding bg-white">
      <div className="container-wide">
        <ScrollReveal>
          <SectionHeading
            title={t("Why Partner with Tylos?", "لماذا تختار تايلوس؟")}
            subtitle={t("A strategic partner in your organization's human capital development.", "شريك استراتيجي في تطوير رأس المال البشري لمؤسستك.")}
          />
        </ScrollReveal>

        {/* Equal-height grid using items-stretch */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal key={benefit.title} delay={index * 0.12} className="h-full">
                <div className="group h-full flex flex-col p-6 rounded-2xl border border-gray-100 hover:border-blue-brand/30 hover:bg-blue-50/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-brand transition-colors duration-300 flex-shrink-0">
                    <Icon className="h-6 w-6 text-blue-brand group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-brand text-sm leading-relaxed flex-1">{benefit.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
