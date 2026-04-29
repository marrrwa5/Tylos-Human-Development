"use client";

import { Target, Eye, Heart } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function MissionVisionValues() {
  const { t, isAr } = useLanguage();

  const cards = [
    {
      icon: Target,
      title: t("Our Mission", "مهمتنا"),
      color: "turquoise",
      content: t(
        "We strive to enable our partners to achieve excellence by developing human capital through specialized professional training programs. Drawing on our extensive experience and qualified team, we help raise performance levels and support sustainable growth.",
        "نسعى إلى تمكين شركائنا من تحقيق التميز من خلال تطوير رأس المال البشري عبر برامج تدريب مهنية متخصصة. بالاعتماد على خبرتنا الواسعة وفريقنا المؤهل، نساعد على رفع مستويات الأداء ودعم النمو المستدام.",
      ),
      list: null,
    },
    {
      icon: Eye,
      title: t("Our Vision", "رؤيتنا"),
      color: "blue",
      content: t(
        "To be a leading institution dedicated to empowering individuals and developing human capital by delivering high-quality education and training that enhances skills, increases productivity, and creates a sustainable, positive impact in the labor market.",
        "أن نكون مؤسسة رائدة مكرسة لتمكين الأفراد وتنمية رأس المال البشري من خلال تقديم تعليم وتدريب عالي الجودة يعزز المهارات ويزيد الإنتاجية ويُحدث أثراً إيجابياً ومستداماً في سوق العمل.",
      ),
      list: null,
    },
    {
      icon: Heart,
      title: t("Our Core Values", "قيمنا الأساسية"),
      color: "turquoise",
      content: null,
      list: isAr
        ? ["التعلم المستمر والابتكار", "روح الفريق", "التميز", "المسؤولية الاجتماعية والاستدامة", "المثابرة والعزيمة"]
        : ["Continuous Learning & Innovation", "Team Spirit", "Excellence", "Social Responsibility & Sustainability", "Perseverance & Determination"],
    },
  ];

  return (
    <section className="section-padding bg-gray-light/30">
      <div className="container-wide">
        <ScrollReveal>
          <SectionHeading
            title={t("Mission, Vision & Values", "المهمة والرؤية والقيم")}
            subtitle={t(
              "The principles that guide everything we do at Tylos Human Development Center.",
              "المبادئ التي توجه كل ما نقوم به في مركز تايلوس للتنمية البشرية."
            )}
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={card.title} delay={index * 0.15}>
                <div
                  className={`bg-white rounded-2xl p-8 border-t-4 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full ${
                    card.color === "turquoise" ? "border-t-turquoise" : "border-t-blue-brand"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                      card.color === "turquoise" ? "bg-turquoise/10" : "bg-blue-50"
                    }`}
                  >
                    <Icon className={`h-6 w-6 ${card.color === "turquoise" ? "text-turquoise" : "text-blue-brand"}`} />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-4" style={{ fontFamily: "var(--font-sans)" }}>
                    {card.title}
                  </h3>
                  {card.content ? (
                    <p className="text-gray-500 leading-relaxed text-sm">{card.content}</p>
                  ) : (
                    <ul className="space-y-3">
                      {card.list?.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-turquoise flex-shrink-0 mt-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
