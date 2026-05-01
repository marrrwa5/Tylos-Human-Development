"use client";

import { motion } from "framer-motion";
import { FileText, BookOpen, ClipboardCheck, Headphones, Compass, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getServices } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  FileText: (p) => <FileText {...p} />,
  BookOpen: (p) => <BookOpen {...p} />,
  ClipboardCheck: (p) => <ClipboardCheck {...p} />,
  HeadphonesIcon: (p) => <Headphones {...p} />,
  Compass: (p) => <Compass {...p} />,
  Building2: (p) => <Building2 {...p} />,
};

export default function ServicesGrid() {
  const services = getServices();
  const { isAr, t } = useLanguage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => {
        const Icon = iconMap[service.icon] ?? FileText;
        const isCorp = service.isCorporate;
        const title = isAr ? service.titleAr : service.title;
        const fullDesc = isAr && service.fullDescriptionAr ? service.fullDescriptionAr : service.fullDescription;
        const benefits = isAr && service.benefitsAr ? service.benefitsAr : service.benefits;
        const cardHref = isCorp ? "/corporate" : "/contact";

        if (isCorp) {
          return (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 350, damping: 22 } }}
              className="group md:col-span-2 lg:col-span-1 relative rounded-2xl overflow-hidden flex flex-col p-8 cursor-pointer"
              style={{ background: "linear-gradient(135deg, #020b13 0%, #0a1e35 50%, #0057A8 100%)" }}
              onClick={() => window.location.href = cardHref}
            >
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,179,164,0.18) 1px, transparent 0)", backgroundSize: "22px 22px" }} />
              <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(circle, rgba(0,179,164,0.25) 0%, transparent 70%)" }} />

              <div className="relative flex flex-col h-full">
                <div className="w-14 h-14 rounded-xl bg-turquoise/20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-turquoise">
                  <Icon className="h-7 w-7 text-turquoise group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-xl text-white mb-3">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">{fullDesc}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                      <div className="w-5 h-5 rounded-full bg-turquoise/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-turquoise" />
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link href={cardHref} className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-turquoise text-white text-sm font-semibold hover:bg-[#009ea0] transition-colors mt-auto">
                  {t("Get Started", "ابدأ الآن")}
                  <ArrowRight className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
                </Link>
              </div>
            </motion.article>
          );
        }

        return (
          <motion.article
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            whileHover={{ y: -8, transition: { type: "spring", stiffness: 350, damping: 22 } }}
            className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-turquoise/8 transition-shadow duration-300 p-8 flex flex-col overflow-hidden cursor-pointer"
            onClick={() => window.location.href = cardHref}
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-turquoise to-[#0057A8] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-2xl" />
            <div className="w-14 h-14 rounded-xl bg-turquoise/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-turquoise">
              <Icon className="h-7 w-7 text-turquoise transition-colors duration-300 group-hover:text-white" />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">{fullDesc}</p>
            <ul className="space-y-2.5 mb-8 flex-1">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-turquoise/10 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover:bg-turquoise/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-turquoise" />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>
            <Link href={cardHref} onClick={(e) => e.stopPropagation()} className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-turquoise text-white text-sm font-semibold hover:bg-[#009ea0] transition-colors mt-auto">
              {t("Get Started", "ابدأ الآن")}
              <ArrowRight className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
            </Link>
          </motion.article>
        );
      })}
    </div>
  );
}
