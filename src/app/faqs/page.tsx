"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs, policies } from "@/data/faqs";
import { ChevronDown, MessageCircle, ShieldCheck, BookOpen, Clock, CreditCard, Users } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import CTAButton from "@/components/shared/CTAButton";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const categoryIcons: Record<string, React.FC<{ className?: string }>> = {
  Enrollment: ({ className }) => <Users className={className} />,
  Funding: ({ className }) => <ShieldCheck className={className} />,
  Certificates: ({ className }) => <BookOpen className={className} />,
  Scheduling: ({ className }) => <Clock className={className} />,
  Payment: ({ className }) => <CreditCard className={className} />,
};

const categoryAr: Record<string, string> = {
  Enrollment: "التسجيل",
  Funding: "التمويل",
  Certificates: "الشهادات",
  Scheduling: "الجدولة",
  Payment: "الدفع",
};

const categories = [...new Set(faqs.map((f) => f.category))];

function FAQItem({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false);
  const { isAr } = useLanguage();
  const question = isAr && faq.questionAr ? faq.questionAr : faq.question;
  const answer = isAr && faq.answerAr ? faq.answerAr : faq.answer;

  return (
    <div className={`border rounded-xl overflow-hidden transition-all duration-200 ${open ? "border-turquoise/40 shadow-sm" : "border-gray-100"} bg-white`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-5 text-left gap-4">
        <span className={`font-semibold text-sm leading-snug transition-colors duration-200 ${open ? "text-turquoise" : "text-gray-900"}`}>
          {question}
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0">
          <ChevronDown className={`h-4 w-4 transition-colors duration-200 ${open ? "text-turquoise" : "text-gray-400"}`} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }} className="overflow-hidden">
            <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-4">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQsPage() {
  const { t, isAr } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const filteredFaqs = activeCategory ? faqs.filter((f) => f.category === activeCategory) : faqs;

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-[#020b13]" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(0,179,164,0.20) 0%, rgba(0,155,158,0.14) 16%, rgba(0,87,168,0.12) 32%, rgba(2,20,38,0.90) 54%, rgba(2,11,19,1) 74%)" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,179,164,0.40) 1px, transparent 0)", backgroundSize: "28px 28px", maskImage: "linear-gradient(to right, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.07) 50%, transparent 80%)", WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.07) 50%, transparent 80%)" }} />
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,179,164,0.12) 0%, transparent 65%)" }} />

        <div className="relative container-wide text-center">
          <ScrollReveal>
            <p className="text-turquoise text-sm uppercase tracking-widest font-semibold mb-4">{t("Help Center", "مركز المساعدة")}</p>
            <h1
              className="font-bold text-4xl md:text-6xl text-white mb-6"
              style={isAr
                ? { fontFamily: '"BahijTheSans", system-ui, sans-serif', fontWeight: 900 }
                : { fontFamily: "var(--font-sans)" }
              }
            >
              {t("FAQs & Policies", "الأسئلة الشائعة والسياسات")}
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
              {t(
                "Everything you need to know about our programs, enrollment process, funding, and policies, all in one place.",
                "كل ما تحتاج معرفته عن برامجنا وعملية التسجيل والتمويل والسياسات، في مكان واحد."
              )}
            </p>
            <CTAButton href="/contact" variant="primary" size="lg">
              <MessageCircle className="mr-2 h-4 w-4" />
              {t("Still have a question? Contact us", "هل لا تزال لديك استفسارات؟ تواصل معنا")}
            </CTAButton>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Category nav ── */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-[72px] z-30">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === null ? "bg-turquoise text-white shadow-sm" : "bg-gray-100 text-gray-600 hover:bg-turquoise/10 hover:text-turquoise"}`}
            >
              {t("All Topics", "جميع المواضيع")}
            </button>
            {categories.map((cat) => {
              const Icon = categoryIcons[cat];
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat ? "bg-turquoise text-white shadow-sm" : "bg-gray-100 text-gray-600 hover:bg-turquoise/10 hover:text-turquoise"}`}
                >
                  {Icon && <Icon className="h-3.5 w-3.5" />}
                  {isAr ? categoryAr[cat] : cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ Accordion ── */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-wide max-w-3xl">
          {activeCategory ? (
            <ScrollReveal>
              <div className="mb-8">
                <h2 className="font-bold text-2xl text-gray-900 mb-1">
                  {isAr ? categoryAr[activeCategory] : activeCategory}
                </h2>
              </div>
              <div className="space-y-3">
                {filteredFaqs.map((faq) => <FAQItem key={faq.id} faq={faq} />)}
              </div>
            </ScrollReveal>
          ) : (
            categories.map((category) => (
              <div key={category} className="mb-12">
                <ScrollReveal>
                  <div className="flex items-center gap-3 mb-5">
                    {categoryIcons[category] && (
                      <div className="w-9 h-9 rounded-lg bg-turquoise/10 flex items-center justify-center">
                        {(() => { const Icon = categoryIcons[category]; return <Icon className="h-4 w-4 text-turquoise" />; })()}
                      </div>
                    )}
                    <h2 className="font-bold text-xl text-gray-900">
                      {isAr ? categoryAr[category] : category}
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {faqs.filter((f) => f.category === category).map((faq) => (
                      <FAQItem key={faq.id} faq={faq} />
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            ))
          )}

          {/* Bottom CTA */}
          <ScrollReveal>
            <div className="mt-12 bg-gradient-to-br from-[#020b13] to-[#0a1e35] rounded-2xl p-8 text-center border border-turquoise/10">
              <MessageCircle className="h-8 w-8 text-turquoise mx-auto mb-4" />
              <h3 className="font-bold text-white text-lg mb-2">
                {t("Still have a question?", "هل لا تزال لديك استفسار؟")}
              </h3>
              <p className="text-white/50 text-sm mb-5">
                {t("Our team is ready to help you with any inquiry.", "فريقنا مستعد لمساعدتك في أي استفسار.")}
              </p>
              <CTAButton href="/contact" variant="primary" size="md">
                {t("Contact Us", "تواصل معنا")}
              </CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Policies ── */}
      <section id="policies" className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="w-10 h-1 rounded-full bg-turquoise mx-auto mb-4" />
              <h2 className="font-bold text-3xl text-gray-900">
                {t("Our Policies", "سياساتنا")}
              </h2>
              <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
                {t(
                  "Designed to ensure a fair, professional, and safe learning environment for all participants.",
                  "مصممة لضمان بيئة تعلم عادلة ومهنية وآمنة لجميع المشاركين."
                )}
              </p>
            </div>
          </ScrollReveal>

          {/* Equal-height policy cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
            {policies.map((policy, index) => (
              <ScrollReveal key={policy.id} delay={index * 0.1} className="h-full">
                <div className="group h-full flex flex-col bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:border-turquoise/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-turquoise/10 flex items-center justify-center flex-shrink-0 group-hover:bg-turquoise transition-colors duration-300">
                      <ShieldCheck className="h-5 w-5 text-turquoise group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-gray-900">
                      {isAr && policy.titleAr ? policy.titleAr : policy.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {isAr && policy.contentAr ? policy.contentAr : policy.content}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-10 text-center">
              <p className="text-gray-400 text-sm mb-4">{t("Need clarification on any of our policies?", "هل تحتاج توضيحاً لأي من سياساتنا؟")}</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-turquoise text-white text-sm font-semibold hover:bg-[#009ea0] transition-colors"
              >
                {t("Contact our team", "تواصل مع فريقنا")}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
