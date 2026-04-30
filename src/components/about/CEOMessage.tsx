"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

const members = [
  {
    image: "/images/najeeb-id.png",
    nameEn: "Najeeb Alsayed",
    nameAr: "نجيب السيد",
    titleEn: "Executive Manager",
    titleAr: "المدير التنفيذي",
    accentColor: "turquoise" as const,
    messageEn: [
      "Since Tylos Human Development Center opened its doors in 2002, our purpose has remained unchanged: to help individuals grow, and to help organizations perform better through the power of quality training.",
      "Over the years we have had the privilege of working with thousands of professionals across Bahrain — from fresh graduates entering the workforce for the first time, to experienced managers seeking to sharpen their edge. Every success story strengthens our commitment to what we do.",
      "Our programs are internationally accredited, practically focused, and designed with the real demands of today's labor market in mind. We do not just deliver courses; we invest in people's futures.",
    ],
    messageAr: [
      "منذ أن فتح مركز تايلوس للتنمية البشرية أبوابه عام 2002، ظل هدفنا ثابتاً: مساعدة الأفراد على النمو، ومساعدة المؤسسات على تحسين أدائها من خلال قوة التدريب الجيد.",
      "على مر السنين، حظينا بشرف العمل مع آلاف المهنيين في جميع أنحاء البحرين — من الخريجين الجدد الداخلين إلى سوق العمل لأول مرة، إلى المديرين ذوي الخبرة الساعين إلى صقل مهاراتهم. كل قصة نجاح تعزز التزامنا بما نقوم به.",
      "برامجنا معتمدة دولياً، ذات تركيز عملي، ومصممة مع مراعاة المتطلبات الفعلية لسوق العمل اليوم. نحن لا نقدم الدورات فحسب؛ بل نستثمر في مستقبل الناس.",
    ],
  },
  {
    image: "/images/adel-id.png",
    nameEn: "Adel",
    nameAr: "عادل",
    titleEn: "Director",
    titleAr: "المدير",
    accentColor: "blue" as const,
    messageEn: [
      "At Tylos, we believe that great training goes beyond knowledge transfer. It is about building confidence, opening doors, and creating lasting change in people's careers and lives.",
      "I am proud of the dedicated team we have built and the reputation we have earned across Bahrain's business community. Our commitment to quality, accreditation, and measurable outcomes sets us apart.",
      "I invite every professional, every organization, and every ambitious individual to partner with us on their journey toward excellence.",
    ],
    messageAr: [
      "في تايلوس، نؤمن بأن التدريب الجيد يتجاوز نقل المعرفة. إنه يتعلق ببناء الثقة، وفتح الأبواب، وإحداث تغيير دائم في مسيرة الناس المهنية وحياتهم.",
      "أنا فخور بالفريق المتفاني الذي بنيناه والسمعة التي اكتسبناها في مجتمع الأعمال في البحرين. التزامنا بالجودة والاعتماد والنتائج القابلة للقياس يميزنا.",
      "أدعو كل محترف وكل مؤسسة وكل فرد طموح للشراكة معنا في رحلتهم نحو التميز.",
    ],
  },
];

export default function CEOMessage() {
  const { t, isAr } = useLanguage();

  return (
    <section className="section-padding bg-[#f8fafc]">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="w-10 h-1 rounded-full bg-turquoise mx-auto mb-4" />
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900">
              {t("A Message from Our Leadership", "رسالة من قيادتنا")}
            </h2>
            <p className="text-gray-400 text-sm mt-2 max-w-lg mx-auto">
              {t("The vision and values behind Tylos Human Development Center.", "الرؤية والقيم وراء مركز تايلوس للتنمية البشرية.")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {members.map((member, i) => {
            const isTurquoise = member.accentColor === "turquoise";
            return (
              <ScrollReveal key={member.nameEn} delay={i * 0.15}>
                <div className={`relative bg-white rounded-3xl shadow-lg border overflow-hidden h-full ${
                  isTurquoise ? "border-turquoise/20" : "border-blue-brand/20"
                }`}>
                  {/* Top accent bar */}
                  <div className={`h-1.5 w-full ${isTurquoise ? "bg-turquoise" : "bg-blue-brand"}`} />

                  <div className="p-8">
                    {/* Header: circle photo + name */}
                    <div className="flex items-center gap-5 mb-6">
                      <div className={`relative flex-shrink-0 w-20 h-20 rounded-full overflow-hidden ring-4 shadow-xl ${
                        isTurquoise ? "ring-turquoise/40" : "ring-blue-brand/40"
                      }`}>
                        <Image
                          src={member.image}
                          alt={isAr ? member.nameAr : member.nameEn}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover object-[center_20%]"
                        />
                      </div>
                      <div>
                        <h3 className={`font-bold text-xl ${isTurquoise ? "text-turquoise" : "text-blue-brand"}`}>
                          {isAr ? member.nameAr : member.nameEn}
                        </h3>
                        <p className="text-gray-400 text-sm mt-0.5">
                          {isAr ? member.titleAr : member.titleEn}
                        </p>
                        <div className={`w-8 h-0.5 rounded-full mt-2 ${isTurquoise ? "bg-turquoise" : "bg-blue-brand"}`} />
                      </div>
                    </div>

                    {/* Quote icon */}
                    <Quote className={`h-8 w-8 mb-4 opacity-20 ${isTurquoise ? "text-turquoise" : "text-blue-brand"}`} />

                    {/* Message */}
                    <div className="space-y-3 text-gray-500 text-sm leading-relaxed">
                      {(isAr ? member.messageAr : member.messageEn).map((para, j) => (
                        <p key={j}>{para}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
