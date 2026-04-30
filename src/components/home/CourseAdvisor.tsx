"use client";

import { useState } from "react";
import { Brain, ArrowRight, ChevronRight, Phone, MessageCircle, Mail } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import CTAButton from "@/components/shared/CTAButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { courses } from "@/data/courses";
import CourseCard from "@/components/courses/CourseCard";
import { useLanguage } from "@/context/LanguageContext";

function getRecommendations(answers: Record<string, string>) {
  const areaMap: Record<string, string[]> = {
    business: ["Business Management", "Leadership", "Finance & Accounting"],
    tech: ["Information Technology", "Artificial Intelligence"],
    marketing: ["Marketing", "Media & Communications"],
    hr: ["Human Resources"],
    cs: ["Customer Service"],
  };
  const levelMap: Record<string, string> = {
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
  };
  const targetCategories = areaMap[answers.area] || [];
  const targetLevel = levelMap[answers.level] || "All Levels";

  // Try exact match first
  let results = courses.filter(
    (c) => targetCategories.includes(c.category) && (c.level === targetLevel || c.level === "All Levels")
  ).slice(0, 3);

  // If no exact match, relax level constraint
  if (results.length === 0) {
    results = courses.filter((c) => targetCategories.includes(c.category)).slice(0, 3);
  }

  // If still nothing, return top 3 featured courses as fallback
  if (results.length === 0) {
    results = courses.filter((c) => c.isFeatured).slice(0, 3);
  }

  // Absolute fallback: first 3 courses
  if (results.length === 0) {
    results = courses.slice(0, 3);
  }

  return results;
}

export default function CourseAdvisor() {
  const { t, isAr } = useLanguage();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [recommendations, setRecommendations] = useState<typeof courses>([]);

  const steps = [
    {
      question: t("What best describes you right now?", "ما الذي يصفك أكثر في الوقت الحالي؟"),
      key: "role",
      options: [
        { label: t("I'm looking for work / just graduated", "أبحث عن عمل / تخرجت مؤخراً"), value: "job-seeker" },
        { label: t("I'm employed and want to upskill", "أعمل وأريد تطوير مهاراتي"), value: "employee" },
        { label: t("I manage a team or business", "أدير فريقاً أو شركة"), value: "manager" },
      ],
    },
    {
      question: t("Which area interests you most?", "ما المجال الذي يثير اهتمامك أكثر؟"),
      key: "area",
      options: [
        { label: t("Business & Leadership", "الأعمال والقيادة"), value: "business" },
        { label: t("Technology & AI", "التكنولوجيا والذكاء الاصطناعي"), value: "tech" },
        { label: t("Marketing & Communication", "التسويق والتواصل"), value: "marketing" },
        { label: t("HR & People Management", "الموارد البشرية وإدارة الأفراد"), value: "hr" },
        { label: t("Customer Service", "خدمة العملاء"), value: "cs" },
      ],
    },
    {
      question: t("How much experience do you have?", "كم لديك من الخبرة؟"),
      key: "level",
      options: [
        { label: t("I'm just starting out (0-2 years)", "أنا في البداية (0-2 سنوات)"), value: "beginner" },
        { label: t("Some experience (2-5 years)", "لديّ بعض الخبرة (2-5 سنوات)"), value: "intermediate" },
        { label: t("Experienced professional (5+ years)", "محترف ذو خبرة (5+ سنوات)"), value: "advanced" },
      ],
    },
  ];

  const handleAnswer = (key: string, value: string) => {
    const newAnswers = { ...answers, [key]: value };
    setAnswers(newAnswers);
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setRecommendations(getRecommendations(newAnswers));
      setStep(steps.length);
    }
  };

  const reset = () => { setStep(0); setAnswers({}); setRecommendations([]); };

  return (
    <>
      <section className="section-padding gradient-brand relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative container-wide">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <Brain className="h-12 w-12 text-white" />
                </div>
              </div>

              <div className={`flex-1 text-center ${isAr ? "lg:text-right" : "lg:text-left"}`}>
                <div className="text-white/60 text-sm uppercase tracking-wider font-semibold mb-2">
                  {t("Smart Course Advisor", "مستشار الدورات الذكي")}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-sans)" }}>
                  {t("Not Sure Which Course Is Right for You?", "لست متأكداً من الدورة المناسبة لك؟")}
                </h2>
                <p className="text-white/75 text-base leading-relaxed max-w-xl mb-6">
                  {t(
                    "Answer 3 quick questions and our advisor will match you with the perfect training program for your goals and experience level.",
                    "أجب على 3 أسئلة سريعة وسيجد مستشارنا لك البرنامج التدريبي المثالي بناءً على أهدافك ومستوى خبرتك."
                  )}
                </p>
                <CTAButton onClick={() => { setOpen(true); reset(); }} variant="white" size="lg">
                  {t("Start the Quiz", "ابدأ الاختبار")}
                  <ArrowRight className={`h-4 w-4 ${isAr ? "mr-2 rotate-180" : "ml-2"}`} />
                </CTAButton>
              </div>

              <div className="flex-shrink-0 flex flex-col gap-3 w-full lg:w-auto">
                <p className={`text-xs uppercase tracking-wider font-semibold mb-1 text-center ${isAr ? "lg:text-right text-white font-bold text-sm" : "text-white/50 lg:text-left"}`}>
                  {t("Prefer to speak with someone?", "تفضل التحدث مع شخص؟")}
                </p>
                <a href="tel:+97317626484" className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-200 text-white font-medium text-sm">
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0"><Phone className="h-4 w-4 text-white" /></div>
                  {t("Call an Advisor", "أفضل الاتصال")}
                </a>
                <a href="https://api.whatsapp.com/send?phone=97334655220" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-200 text-white font-medium text-sm">
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0"><MessageCircle className="h-4 w-4 text-white" /></div>
                  {t("WhatsApp an Advisor", "أفضل رسالة واتساب")}
                </a>
                <a href="mailto:info@thd.bh" className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-200 text-white font-medium text-sm">
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0"><Mail className="h-4 w-4 text-white" /></div>
                  {t("Email an Advisor", "أفضل الإيميل")}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          {step < steps.length ? (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-1">
                    {steps.map((_, i) => (
                      <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i <= step ? "w-8 bg-turquoise" : "w-4 bg-gray-200"}`} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-brand ml-2">
                    {t(`Step ${step + 1} of ${steps.length}`, `الخطوة ${step + 1} من ${steps.length}`)}
                  </span>
                </div>
                <DialogTitle className="text-xl">{steps[step].question}</DialogTitle>
              </DialogHeader>
              <div className="grid gap-3 mt-2">
                {steps[step].options.map((opt) => (
                  <button key={opt.value} onClick={() => handleAnswer(steps[step].key, opt.value)} className="group flex items-center justify-between px-5 py-4 rounded-xl border border-gray-200 hover:border-turquoise hover:bg-turquoise/5 transition-all duration-200 text-left">
                    <span className="font-medium text-gray-800 group-hover:text-turquoise transition-colors">{opt.label}</span>
                    <ChevronRight className="h-4 w-4 text-gray-brand group-hover:text-turquoise transition-colors" />
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div>
              <DialogHeader>
                <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center mb-3">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <DialogTitle className="text-xl">{t("Your Recommended Courses", "الدورات الموصى بها لك")}</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 mt-4">
                {recommendations.map((course) => (<CourseCard key={course.id} course={course} compact />))}
              </div>
              <div className="flex gap-3 mt-6">
                <CTAButton href="/courses" variant="primary" className="flex-1">{t("View All Courses", "عرض جميع الدورات")}</CTAButton>
                <CTAButton onClick={reset} variant="outline" className="flex-1">{t("Retake Quiz", "إعادة الاختبار")}</CTAButton>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
