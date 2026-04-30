"use client";

import { Award, BadgeCheck, UserCheck, BookOpen } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutStorySections() {
  const { t, isAr } = useLanguage();

  const stats = [
    { num: "20+", labelEn: "Years of Excellence", labelAr: "عاماً من التميز" },
    { num: "1,000+", labelEn: "Graduates", labelAr: "خريج" },
    { num: "13+", labelEn: "Programs", labelAr: "برنامج" },
  ];

  const differences = [
    {
      Icon: Award,
      titleEn: "International Accreditation",
      titleAr: "اعتماد دولي",
      descEn: "Certified by NOCN (UK), Cisco, IAB and global bodies — recognized worldwide.",
      descAr: "معتمد من NOCN (المملكة المتحدة) وCisco وIAB وهيئات عالمية — معترف به في جميع أنحاء العالم.",
      color: "turquoise",
    },
    {
      Icon: BadgeCheck,
      titleEn: "100% Funded",
      titleAr: "تمويل 100%",
      descEn: "Access our programs at zero cost through government funding initiatives.",
      descAr: "استفد من برامجنا بدون أي تكلفة من خلال مبادرات التمويل الحكومي.",
      color: "blue",
    },
    {
      Icon: UserCheck,
      titleEn: "Expert Practitioners",
      titleAr: "خبراء متخصصون",
      descEn: "Instructors are industry professionals with genuine real-world experience.",
      descAr: "مدربونا متخصصون في مجالاتهم ولديهم خبرة فعلية في سوق العمل.",
      color: "turquoise",
    },
    {
      Icon: BookOpen,
      titleEn: "Hands-on Methodology",
      titleAr: "منهجية تطبيقية",
      descEn: "Every program blends theory with practice so learning sticks on the job.",
      descAr: "كل برنامج يجمع بين النظرية والتطبيق حتى يترسخ التعلم في بيئة العمل.",
      color: "blue",
    },
  ];

  return (
    <>
      {/* Our Story */}
      <section className="section-padding bg-[#f8fafc] overflow-hidden">
        <div className="container-wide">
          <ScrollReveal direction="left">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-0 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <div className="bg-gradient-to-b from-turquoise to-[#0057A8] w-full md:w-2 flex-shrink-0" />
              <div className="bg-white flex-1 p-10 md:p-12">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-turquoise border border-turquoise/30 bg-turquoise/5 px-3 py-1 rounded-full mb-5">
                  {t("Est. 2002", "تأسس عام 2002")}
                </span>
                <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-5">
                  {t("Our Story", "قصتنا")}
                </h2>
                <p className="text-gray-500 leading-relaxed text-base max-w-3xl">
                  {t(
                    "Tylos Human Development Center, established in 2002, is a trusted training provider dedicated to empowering individuals and organizations through skill development and talent growth. With a strong focus on practical, career-oriented learning, Tylos delivers high-quality, internationally accredited programs in fields such as Business Management, Marketing, Human Resources, Customer Service, Artificial Intelligence, and Information Technology.",
                    "مركز تايلوس للتنمية البشرية، الذي تأسس عام 2002، هو مزود تدريب موثوق مكرّس لتمكين الأفراد والمؤسسات من خلال تطوير المهارات وصقل المواهب. يُركّز المركز على التعلم العملي الموجّه نحو المهنة، ويقدم برامج عالية الجودة ومعتمدة دولياً في مجالات إدارة الأعمال والتسويق والموارد البشرية وخدمة العملاء والذكاء الاصطناعي وتقنية المعلومات."
                  )}
                </p>
                <div className="mt-8 flex flex-wrap gap-6">
                  {stats.map(({ num, labelEn, labelAr }) => (
                    <div key={labelEn} className="flex items-baseline gap-1.5">
                      <span className="text-turquoise font-black text-2xl">{num}</span>
                      <span className="text-gray-400 text-sm">{isAr ? labelAr : labelEn}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="w-10 h-1 rounded-full bg-blue-brand mx-auto mb-4" />
              <h2 className="font-bold text-3xl md:text-4xl text-gray-900">
                {t("What Makes Us Different", "ما الذي يميّزنا")}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differences.map(({ Icon, titleEn, titleAr, descEn, descAr, color }, i) => (
              <ScrollReveal key={titleEn} delay={i * 0.1}>
                <div className="group bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${
                    color === "turquoise" ? "bg-turquoise/10 group-hover:bg-turquoise" : "bg-blue-brand/10 group-hover:bg-blue-brand"
                  }`}>
                    <Icon className={`h-5 w-5 transition-colors duration-300 ${
                      color === "turquoise" ? "text-turquoise group-hover:text-white" : "text-blue-brand group-hover:text-white"
                    }`} />
                  </div>
                  <h3 className={`font-bold text-sm mb-2 ${color === "turquoise" ? "text-turquoise" : "text-blue-brand"}`}>
                    {isAr ? titleAr : titleEn}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{isAr ? descAr : descEn}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
