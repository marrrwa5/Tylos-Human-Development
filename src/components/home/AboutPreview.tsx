"use client";

import { ArrowRight, Award, Globe, Download, BookOpen } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import CTAButton from "@/components/shared/CTAButton";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPreview() {
  const { t } = useLanguage();
  return (
    <section className="section-padding bg-[#07111e]">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT: Content */}
          <ScrollReveal direction="left">
            <div className="space-y-6">

              {/* Animated heading */}
              <div>
                <motion.div
                  className="w-10 h-1 rounded-full bg-turquoise mb-4"
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                />
                <motion.h2
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-5"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  <span className="text-white">{t("About ", "عن ")} </span>
                  <span
                    style={{
                      background: "linear-gradient(90deg, #00B3A4 0%, #0090e0 50%, #00B3A4 100%)",
                      backgroundSize: "200% auto",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      animation: "gradientShift 4s linear infinite",
                    }}
                  >
                    {t("Tylos Center", "مركز تايلوس")}
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-white/60 leading-relaxed text-base"
                >
                  {t(
                    "Tylos Human Development Center, established in 2002, is a trusted training provider dedicated to empowering individuals and organizations through skill development and talent growth. With a strong focus on practical, career-oriented learning, Tylos delivers high-quality, internationally accredited programs in fields such as Business Management, Marketing, Human Resources, Customer Service, Artificial Intelligence, and Information Technology.",
                    "مركز تايلوس للتنمية البشرية، تأسس عام 2002، هو مزود تدريب موثوق ومتخصص في تمكين الأفراد والمؤسسات من خلال تطوير المهارات وصقل المواهب. يُركز المركز على التعلم العملي والموجّه نحو المهنة، ويقدم برامج عالية الجودة ومعتمدة دولياً في مجالات إدارة الأعمال والتسويق والموارد البشرية وخدمة العملاء والذكاء الاصطناعي وتكنولوجيا المعلومات."
                  )}
                </motion.p>
              </div>

              {/* 2×2 button grid */}
              <motion.div
                className="grid grid-cols-2 gap-3"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {/* Row 1 */}
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-turquoise/15 flex items-center justify-center flex-shrink-0">
                    <Award className="h-4 w-4 text-turquoise" />
                  </div>
                  <span className="text-sm font-medium text-white/80">{t("20+ Years of Excellence", "+20 عاماً من التميز")}</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-turquoise/15 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-4 w-4 text-turquoise" />
                  </div>
                  <span className="text-sm font-medium text-white/80">{t("4 International Accreditations", "4 اعتمادات دولية")}</span>
                </div>

                {/* Row 2 */}
                <CTAButton href="/about" variant="primary" className="w-full justify-center">
                  <BookOpen className="mr-2 h-4 w-4" />
                  {t("Learn More", "اعرف أكثر")}
                </CTAButton>

                <CTAButton
                  href="/pdfs/company-profile.pdf"
                  variant="outline"
                  className="w-full justify-center border-white/30 text-white hover:bg-white hover:text-blue-dark"
                  external
                >
                  <Download className="mr-2 h-4 w-4" />
                  {t("Download Profile", "تحميل الملف التعريفي")}
                </CTAButton>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* RIGHT: Image */}
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                <Image
                  src="/images/the-center.jpg"
                  alt="Tylos Human Development Center"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050e1a]/50 via-transparent to-transparent" />
              </div>

            </div>
          </ScrollReveal>

        </div>
      </div>

      {/* Gradient shift keyframe */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
}
