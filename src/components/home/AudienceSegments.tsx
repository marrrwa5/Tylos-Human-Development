"use client";

import { Briefcase, Building2, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const segments = [
  {
    icon: Briefcase,
    title: "Launch Your Career",
    titleAr: "انطلق في مسيرتك المهنية",
    subtitle: "Job Seekers",
    subtitleAr: "الباحثون عن عمل",
    description:
      "Accelerate your career with internationally recognized certifications. Our programs are designed to make you job-ready and stand out to employers.",
    descriptionAr:
      "طوّر مسيرتك المهنية بشهادات معترف بها دولياً. برامجنا مصممة لتجعلك جاهزاً لسوق العمل وتميزك أمام أصحاب العمل.",
    cta: "Find your course",
    ctaAr: "ابحث عن دورتك",
    href: "/courses?audience=job-seekers",
    highlights: ["CV & Interview Support", "100% Funded"],
    highlightsAr: ["دعم في إعداد السيرة الذاتية", "تمويل 100%"],
    accent: "turquoise",
  },
  {
    icon: Building2,
    title: "Level Up at Work",
    titleAr: "طوّر مستواك في العمل",
    subtitle: "Private Sector Employees",
    subtitleAr: "موظفو القطاع الخاص",
    description:
      "Upskill and advance within your current organization. Gain new competencies, earn higher qualifications, and unlock new career opportunities.",
    descriptionAr:
      "طوّر مهاراتك وتقدم داخل مؤسستك. اكتسب كفاءات جديدة، واحصل على مؤهلات أعلى، وافتح آفاقاً مهنية جديدة.",
    cta: "Upgrade your skills",
    ctaAr: "طوّر مهاراتك",
    href: "/courses?audience=employees",
    highlights: ["Professional Development", "100% Funded", "Flexible Scheduling"],
    highlightsAr: ["التطوير المهني", "تمويل 100%", "جداول مرنة"],
    accent: "blue",
  },
  {
    icon: Users,
    title: "Build a Stronger Team",
    titleAr: "ابنِ فريقاً أقوى",
    subtitle: "Corporate Clients",
    subtitleAr: "عملاء الشركات",
    description:
      "Transform your workforce with customized training solutions. We design and deliver tailored programs that align with your organization's strategic goals.",
    descriptionAr:
      "طوّر كوادرك البشرية بحلول تدريبية مخصصة. نصمم ونقدم برامج مُصممة تتوافق مع أهداف مؤسستك الاستراتيجية.",
    cta: "Train your team",
    ctaAr: "درّب فريقك",
    href: "/corporate",
    highlights: ["Customized Programs", "On-site Delivery", "100% Funded"],
    highlightsAr: ["برامج مخصصة", "تدريب في موقع العمل", "تمويل 100%"],
    accent: "turquoise",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function AudienceSegments() {
  const { isAr, t } = useLanguage();

  return (
    <section id="about-preview" className="section-padding bg-[#0d1e35]">
      <div className="container-wide">
        <ScrollReveal>
          <SectionHeading
            title={t("Who Is This For?", "لمن هذا البرنامج؟")}
            subtitle={t(
              "Whether you're just starting out, growing professionally, or developing your entire organization, we have a solution designed for you.",
              "سواء كنت في بداية مسيرتك، أو تسعى للنمو المهني، أو تطوير مؤسستك بأكملها، لدينا الحل المناسب لك."
            )}
            light
          />
        </ScrollReveal>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {segments.map((seg) => {
            const Icon = seg.icon;
            const isTurquoise = seg.accent === "turquoise";
            return (
              <motion.div
                key={seg.title}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="group bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-turquoise/40 hover:bg-white/[0.08] transition-colors duration-300 flex flex-col"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                    isTurquoise
                      ? "bg-turquoise/20 text-turquoise group-hover:bg-turquoise group-hover:text-white"
                      : "bg-blue-brand/20 text-blue-light group-hover:bg-blue-brand group-hover:text-white"
                  }`}
                >
                  <Icon className="h-7 w-7" />
                </div>

                {/* Heading block */}
                <div className="mb-3">
                  <h3
                    className={`font-black text-base uppercase tracking-wider mb-1.5 transition-colors duration-300 ${
                      isTurquoise ? "text-turquoise group-hover:text-white" : "text-blue-light group-hover:text-white"
                    }`}
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {isAr ? seg.subtitleAr : seg.subtitle}
                  </h3>
                  <p className="text-sm font-normal text-white/55">
                    {isAr ? seg.titleAr : seg.title}
                  </p>
                </div>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                  {isAr ? seg.descriptionAr : seg.description}
                </p>

                {/* Highlight pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {(isAr ? seg.highlightsAr : seg.highlights).map((h) => (
                    <span
                      key={h}
                      className={`text-xs px-2.5 py-1 rounded-full font-medium border ${
                        isTurquoise
                          ? "bg-turquoise/15 text-turquoise border-turquoise/20"
                          : "bg-blue-brand/15 text-blue-light border-blue-brand/20"
                      }`}
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={seg.href}
                  className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                    isTurquoise
                      ? "text-turquoise hover:text-turquoise/80"
                      : "text-blue-light hover:text-white"
                  }`}
                >
                  {isAr ? seg.ctaAr : seg.cta}
                  <ArrowRight className={`h-4 w-4 transition-transform ${isAr ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
