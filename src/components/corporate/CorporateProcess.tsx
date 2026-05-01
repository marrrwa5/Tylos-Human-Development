"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileText, Handshake, GraduationCap, BarChart3 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CorporateProcess() {
  const { t } = useLanguage();

  const steps = [
    {
      step: "01",
      icon: MessageSquare,
      title: t("Consultation", "الاستشارة"),
      desc: t(
        "We meet with your L&D or HR team to understand your training needs, workforce profile, and strategic objectives.",
        "نلتقي بفريق التعلم والتطوير أو الموارد البشرية لديك لفهم احتياجات التدريب وملف القوى العاملة والأهداف الاستراتيجية."
      ),
      color: "turquoise",
    },
    {
      step: "02",
      icon: FileText,
      title: t("Proposal", "الاقتراح"),
      desc: t(
        "Our team designs a tailored training plan covering curriculum, delivery format, schedule, and investment breakdown.",
        "يُصمِّم فريقنا خطة تدريب مخصصة تشمل المنهج وأسلوب التقديم والجدول الزمني وتفاصيل الاستثمار."
      ),
      color: "blue",
    },
    {
      step: "03",
      icon: Handshake,
      title: t("Agreement", "الاتفاقية"),
      desc: t(
        "We finalize the program details, sign the agreement, and handle all administrative logistics for you.",
        "نُنهي تفاصيل البرنامج ونُوقِّع الاتفاقية ونتولى جميع اللوجستيات الإدارية نيابةً عنك."
      ),
      color: "turquoise",
    },
    {
      step: "04",
      icon: GraduationCap,
      title: t("Delivery", "التنفيذ"),
      desc: t(
        "Expert trainers deliver the program at your premises, our center, or virtually with full support throughout.",
        "يُقدِّم مدربون خبراء البرنامج في مقر عملك أو مركزنا أو افتراضياً مع دعم كامل طوال الوقت."
      ),
      color: "blue",
    },
    {
      step: "05",
      icon: BarChart3,
      title: t("Evaluation", "التقييم"),
      desc: t(
        "We measure learning outcomes, provide completion reports, and recommend follow-up development pathways.",
        "نقيس مخرجات التعلم ونُقدِّم تقارير الإتمام ونوصي بمسارات التطوير المتابعة."
      ),
      color: "turquoise",
    },
  ];

  return (
    <section className="section-padding overflow-hidden relative" style={{ background: "linear-gradient(135deg, #020b13 0%, #0a1e35 60%, #020b13 100%)" }}>
      {/* Dot texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,179,164,0.12) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative container-wide">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-turquoise text-sm uppercase tracking-widest font-semibold mb-3">
            {t("Simple. Collaborative. Effective.", "بسيط. تعاوني. فعّال.")}
          </p>
          <h2 className="font-bold text-3xl md:text-4xl text-white">
            {t("How It Works", "منهجية العمل")}
          </h2>
          <p className="text-white/50 text-base mt-3 max-w-xl mx-auto">
            {t("From first conversation to certified outcomes in five clear steps.", "من أول محادثة إلى نتائج معتمدة في خمس خطوات واضحة.")}
          </p>
        </motion.div>

        {/* Steps grid — items-stretch ensures equal height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-[calc(16rem+0px)] left-[10%] right-[10%] h-px"
            style={{ background: "linear-gradient(to right, transparent, rgba(0,179,164,0.25) 20%, rgba(0,179,164,0.25) 80%, transparent)" }}
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isTurquoise = step.color === "turquoise";

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.14, duration: 0.5 }}
                className="group flex flex-col items-center text-center h-full"
              >
                {/* Number circle */}
                <motion.div
                  whileHover={{ scale: 1.12 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  className={`relative w-20 h-20 rounded-full flex items-center justify-center mb-5 z-10 shadow-xl flex-shrink-0 ${
                    isTurquoise ? "bg-turquoise group-hover:shadow-turquoise/40" : "bg-[#0057A8] group-hover:shadow-blue-brand/40"
                  } transition-shadow duration-300`}
                >
                  <Icon className="h-8 w-8 text-white" />
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white flex items-center justify-center text-[10px] font-black text-gray-900 shadow-md">
                    {step.step}
                  </span>
                </motion.div>

                {/* Content card — flex-1 fills remaining height */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`flex-1 w-full bg-white/5 border rounded-2xl p-5 transition-all duration-300 group-hover:bg-white/10 flex flex-col justify-start ${
                    isTurquoise ? "border-turquoise/20 group-hover:border-turquoise/40" : "border-[#0057A8]/30 group-hover:border-[#0057A8]/50"
                  }`}
                >
                  <h3 className={`font-bold text-base mb-2 ${isTurquoise ? "text-turquoise" : "text-blue-300"}`}>
                    {step.title}
                  </h3>
                  <p className="text-white/55 text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
