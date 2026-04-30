"use client";

import Image from "next/image";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

const members = [
  {
    image: "/images/najeeb-id.png",
    nameEn: "Najeeb Alsayed",
    nameAr: "نجيب السيد",
    titleEn: "Executive Manager",
    titleAr: "المدير التنفيذي",
    messageEn: [
      "Since Tylos Human Development Center opened its doors in 2002, our purpose has remained unchanged: to help individuals grow, and to help organizations perform better through the power of quality training.",
      "Over the years we have had the privilege of working with thousands of professionals across Bahrain, from fresh graduates entering the workforce for the first time to experienced managers seeking to sharpen their edge. Every success story strengthens our commitment to what we do.",
      "Our programs are internationally accredited, practically focused, and designed with the real demands of today's labor market in mind. We do not just deliver courses; we invest in people's futures.",
    ],
    messageAr: [
      "منذ أن فتح مركز تايلوس للتنمية البشرية أبوابه عام 2002، ظل هدفنا ثابتاً: مساعدة الأفراد على النمو، ومساعدة المؤسسات على تحسين أدائها من خلال قوة التدريب الجيد.",
      "على مر السنين، حظينا بشرف العمل مع آلاف المهنيين في جميع أنحاء البحرين، من الخريجين الجدد إلى المديرين ذوي الخبرة. كل قصة نجاح تعزز التزامنا بما نقوم به.",
      "برامجنا معتمدة دولياً، ذات تركيز عملي، ومصممة مع مراعاة المتطلبات الفعلية لسوق العمل اليوم. نحن نستثمر في مستقبل الناس.",
    ],
  },
  {
    image: "/images/adel-id.png",
    nameEn: "Adel",
    nameAr: "عادل",
    titleEn: "Director",
    titleAr: "المدير",
    messageEn: [
      "At Tylos, we believe that great training goes beyond knowledge transfer. It's about building confidence, opening doors, and creating lasting change in people's careers and lives.",
      "I am proud of the dedicated team we have built and the reputation we have earned across Bahrain's business community. Our commitment to quality, accreditation, and measurable outcomes sets us apart.",
      "I invite every professional, every organization, and every ambitious individual to partner with us on their journey toward excellence.",
    ],
    messageAr: [
      "في تايلوس، نؤمن بأن التدريب الجيد يتجاوز نقل المعرفة. إنه يتعلق ببناء الثقة وفتح الأبواب وإحداث تغيير دائم في مسيرة الناس المهنية وحياتهم.",
      "أنا فخور بالفريق المتفاني الذي بنيناه والسمعة التي اكتسبناها في مجتمع الأعمال في البحرين. التزامنا بالجودة والاعتماد والنتائج القابلة للقياس يميزنا.",
      "أدعو كل محترف وكل مؤسسة وكل فرد طموح للشراكة معنا في رحلتهم نحو التميز.",
    ],
  },
];

export default function CEOMessage() {
  const { t, isAr } = useLanguage();

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="w-10 h-1 rounded-full bg-turquoise mb-4 mx-auto" />
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-12 text-center" style={{ fontFamily: "var(--font-sans)" }}>
              {t("A Message from Our Leadership", "رسالة من قيادتنا")}
            </h2>
          </ScrollReveal>

          <div className="space-y-16">
            {members.map((member, i) => (
              <ScrollReveal key={member.nameEn} delay={i * 0.15}>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Circle photo + name */}
                  <div className="flex flex-col items-center flex-shrink-0 w-32">
                    <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-turquoise/20 shadow-lg mb-3">
                      <Image
                        src={member.image}
                        alt={isAr ? member.nameAr : member.nameEn}
                        width={96}
                        height={96}
                        className="object-cover object-top w-full h-full"
                      />
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900 text-sm">{isAr ? member.nameAr : member.nameEn}</div>
                      <div className="text-turquoise text-xs mt-0.5">{isAr ? member.titleAr : member.titleEn}</div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex-1 space-y-4 text-gray-500 leading-relaxed text-sm">
                    <div className="w-8 h-0.5 bg-turquoise rounded-full" />
                    {(isAr ? member.messageAr : member.messageEn).map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                </div>

                {i < members.length - 1 && <div className="border-t border-gray-100 mt-8" />}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
