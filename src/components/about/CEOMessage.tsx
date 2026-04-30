"use client";

import Image from "next/image";
import { Quote, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

const members = [
  {
    image: "/images/najeeb-id.png",
    nameEn: "Najeeb Alsayed",
    nameAr: "نجيب السيد",
    titleEn: "Executive Manager",
    titleAr: "المدير التنفيذي",
    accentColor: "#00B3A4",
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
    accentColor: "#0057A8",
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
    <section className="section-padding bg-[#020b13] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,179,164,0.08) 0%, transparent 70%)" }} />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,87,168,0.08) 0%, transparent 70%)" }} />
        <div className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,179,164,0.06) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }} />
      </div>

      <div className="relative container-wide">
        {/* Section heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-turquoise/10 border border-turquoise/20 text-turquoise text-xs font-semibold uppercase tracking-widest mb-5">
              <Sparkles className="h-3.5 w-3.5" />
              {t("Leadership", "القيادة")}
            </div>
            <h2 className="font-bold text-3xl md:text-4xl text-white">
              {t("A Message from Our Leadership", "رسالة من قيادتنا")}
            </h2>
            <p className="text-white/40 text-sm mt-3 max-w-md mx-auto">
              {t("The vision and values behind Tylos Human Development Center.", "الرؤية والقيم وراء مركز تايلوس للتنمية البشرية.")}
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {members.map((member, i) => (
            <motion.div
              key={member.nameEn}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="relative group h-full">
                {/* Glow on hover */}
                <div
                  className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                  style={{ background: `linear-gradient(135deg, ${member.accentColor}40, transparent)` }}
                />

                <div className="relative bg-white/[0.04] border border-white/10 rounded-3xl p-8 h-full group-hover:border-white/20 transition-all duration-300">
                  {/* Quote icon */}
                  <Quote className="absolute top-6 right-6 h-12 w-12 opacity-[0.06] text-white" />

                  {/* Header */}
                  <div className="flex items-center gap-5 mb-8">
                    {/* Circle photo with colored ring */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative flex-shrink-0"
                    >
                      <div
                        className="w-20 h-20 rounded-full p-[3px]"
                        style={{ background: `linear-gradient(135deg, ${member.accentColor}, transparent 60%)` }}
                      >
                        <div className="w-full h-full rounded-full overflow-hidden bg-[#020b13]">
                          <Image
                            src={member.image}
                            alt={isAr ? member.nameAr : member.nameEn}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover object-[center_15%]"
                          />
                        </div>
                      </div>
                      {/* Online dot */}
                      <div
                        className="absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-[#020b13]"
                        style={{ backgroundColor: member.accentColor }}
                      />
                    </motion.div>

                    <div>
                      <h3 className="font-bold text-white text-xl leading-tight">
                        {isAr ? member.nameAr : member.nameEn}
                      </h3>
                      <p className="text-sm mt-1" style={{ color: member.accentColor }}>
                        {isAr ? member.titleAr : member.titleEn}
                      </p>
                      <div className="mt-2 flex items-center gap-1">
                        {[...Array(3)].map((_, j) => (
                          <div key={j} className="w-1 h-1 rounded-full" style={{ backgroundColor: member.accentColor, opacity: 1 - j * 0.3 }} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Message paragraphs */}
                  <div className="space-y-4">
                    {(isAr ? member.messageAr : member.messageEn).map((para, j) => (
                      <motion.p
                        key={j}
                        initial={{ opacity: 0, x: isAr ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.2 + j * 0.1 }}
                        className="text-white/65 text-sm leading-relaxed"
                      >
                        {para}
                      </motion.p>
                    ))}
                  </div>

                  {/* Bottom accent line */}
                  <div className="mt-8 h-px w-full"
                    style={{ background: `linear-gradient(to right, ${member.accentColor}60, transparent)` }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
