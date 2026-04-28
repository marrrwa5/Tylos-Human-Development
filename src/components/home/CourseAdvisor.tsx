"use client";

import { useState } from "react";
import { Brain, ArrowRight, ChevronRight, Phone, MessageCircle, Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CTAButton from "@/components/shared/CTAButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { courses } from "@/data/courses";
import CourseCard from "@/components/courses/CourseCard";

type Step = {
  question: string;
  key: string;
  options: { label: string; value: string }[];
};

const steps: Step[] = [
  {
    question: "What best describes you right now?",
    key: "role",
    options: [
      { label: "I'm looking for work / just graduated", value: "job-seeker" },
      { label: "I'm employed and want to upskill", value: "employee" },
      { label: "I manage a team or business", value: "manager" },
    ],
  },
  {
    question: "Which area interests you most?",
    key: "area",
    options: [
      { label: "Business & Leadership", value: "business" },
      { label: "Technology & AI", value: "tech" },
      { label: "Marketing & Communication", value: "marketing" },
      { label: "HR & People Management", value: "hr" },
      { label: "Customer Service", value: "cs" },
    ],
  },
  {
    question: "How much experience do you have?",
    key: "level",
    options: [
      { label: "I'm just starting out (0-2 years)", value: "beginner" },
      { label: "Some experience (2-5 years)", value: "intermediate" },
      { label: "Experienced professional (5+ years)", value: "advanced" },
    ],
  },
];

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

  return courses
    .filter(
      (c) =>
        targetCategories.includes(c.category) &&
        (c.level === targetLevel || c.level === "All Levels")
    )
    .slice(0, 3);
}

export default function CourseAdvisor() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [recommendations, setRecommendations] = useState<typeof courses>([]);

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

  const reset = () => {
    setStep(0);
    setAnswers({});
    setRecommendations([]);
  };

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
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <Brain className="h-12 w-12 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="text-white/60 text-sm uppercase tracking-wider font-semibold mb-2">
                  Smart Course Advisor
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-sans)" }}>
                  Not Sure Which Course Is Right for You?
                </h2>
                <p className="text-white/75 text-base leading-relaxed max-w-xl mb-6">
                  Answer 3 quick questions and our advisor will match you with the
                  perfect training program for your goals and experience level.
                </p>
                <CTAButton
                  onClick={() => { setOpen(true); reset(); }}
                  variant="white"
                  size="lg"
                >
                  Start the Quiz
                  <ArrowRight className="ml-2 h-4 w-4" />
                </CTAButton>
              </div>

              {/* Advisor CTAs */}
              <div className="flex-shrink-0 flex flex-col gap-3 w-full lg:w-auto">
                <p className="text-white/50 text-xs uppercase tracking-wider font-semibold text-center lg:text-left mb-1">
                  Prefer to speak with someone?
                </p>
                <a
                  href="tel:+97317626484"
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-200 text-white font-medium text-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  Call an Advisor
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=97334655220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-200 text-white font-medium text-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-4 w-4 text-white" />
                  </div>
                  WhatsApp an Advisor
                </a>
                <a
                  href="mailto:info@thd.bh"
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-200 text-white font-medium text-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  Email an Advisor
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          {step < steps.length ? (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-1">
                    {steps.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i <= step ? "w-8 bg-turquoise" : "w-4 bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-brand ml-2">
                    Step {step + 1} of {steps.length}
                  </span>
                </div>
                <DialogTitle className="text-xl">
                  {steps[step].question}
                </DialogTitle>
              </DialogHeader>

              <div className="grid gap-3 mt-2">
                {steps[step].options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleAnswer(steps[step].key, opt.value)}
                    className="group flex items-center justify-between px-5 py-4 rounded-xl border border-gray-200 hover:border-turquoise hover:bg-turquoise/5 transition-all duration-200 text-left"
                  >
                    <span className="font-medium text-gray-800 group-hover:text-turquoise transition-colors">
                      {opt.label}
                    </span>
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
                <DialogTitle className="text-xl">
                  Your Recommended Courses
                </DialogTitle>
              </DialogHeader>

              {recommendations.length > 0 ? (
                <div className="grid gap-4 mt-4">
                  {recommendations.map((course) => (
                    <CourseCard key={course.id} course={course} compact />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-brand">
                  <p>No exact matches found. Browse all our courses instead.</p>
                </div>
              )}

              <div className="flex gap-3 mt-6">
                <CTAButton href="/courses" variant="primary" className="flex-1">
                  View All Courses
                </CTAButton>
                <CTAButton onClick={reset} variant="outline" className="flex-1">
                  Retake Quiz
                </CTAButton>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
