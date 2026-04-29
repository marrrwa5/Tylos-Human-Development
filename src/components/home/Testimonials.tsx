"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquarePlus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import CTAButton from "@/components/shared/CTAButton";
import { getTestimonials } from "@/data/testimonials";
import { toast } from "sonner";
import { useLanguage } from "@/context/LanguageContext";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-white/20"}`} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { t } = useLanguage();
  const testimonials = getTestimonials();
  const n = testimonials.length;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackName, setFeedbackName] = useState("");
  const [feedbackText, setFeedbackText] = useState("");

  const next = useCallback(() => { setDirection(1); setCurrent((c) => (c + 1) % n); }, [n]);
  const prev = () => { setDirection(-1); setCurrent((c) => (c - 1 + n) % n); };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const visible = [
    testimonials[current % n],
    testimonials[(current + 1) % n],
    testimonials[(current + 2) % n],
  ];

  const handleFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t("Thank you for your feedback!", "شكراً على ملاحظاتك!"));
    setFeedbackOpen(false);
    setFeedbackName("");
    setFeedbackText("");
  };

  return (
    <section className="section-padding bg-[#07111e]">
      <div className="container-wide">
        <ScrollReveal>
          <SectionHeading
            title={t("What Our Graduates Said", "ماذا قال خريجونا")}
            subtitle={t("Real stories from professionals who transformed their careers at Tylos.", "قصص حقيقية من محترفين غيّروا مساراتهم المهنية في تايلوس.")}
            light
          />
        </ScrollReveal>

        <div className="mt-12 relative">
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-turquoise hover:bg-turquoise text-white/60 hover:text-white transition-all duration-200 hidden lg:flex" aria-label="Previous">
            <ChevronLeft className="h-5 w-5" />
          </button>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {visible.map((t2, i) => (
                <div key={`${t2.id}-${i}`} className="relative bg-white/5 rounded-2xl border border-white/10 p-6 flex flex-col gap-4 hover:border-turquoise/20 transition-colors duration-300">
                  <Quote className="absolute top-4 right-4 h-10 w-10 text-turquoise/10" />
                  <Stars rating={t2.rating} />
                  <blockquote className="text-white/80 text-sm leading-relaxed flex-1 italic">&ldquo;{t2.quote}&rdquo;</blockquote>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <div className="w-10 h-10 rounded-full gradient-brand flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                      {t2.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">{t2.name}</div>
                      <div className="text-xs text-white/45">{t2.role} · {t2.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-turquoise hover:bg-turquoise text-white/60 hover:text-white transition-all duration-200 hidden lg:flex" aria-label="Next">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center justify-between mt-8">
          <div className="flex gap-2 lg:hidden">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-turquoise hover:bg-turquoise text-white/60 hover:text-white transition-all duration-200"><ChevronLeft className="h-5 w-5" /></button>
            <button onClick={next} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-turquoise hover:bg-turquoise text-white/60 hover:text-white transition-all duration-200"><ChevronRight className="h-5 w-5" /></button>
          </div>
          <div className="flex gap-1.5 mx-auto lg:mx-0">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }} className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-turquoise" : "w-1.5 bg-white/20"}`} aria-label={`Go to ${i + 1}`} />
            ))}
          </div>
          <CTAButton onClick={() => setFeedbackOpen(true)} variant="outline" size="sm" className="border-white/25 text-white hover:bg-white hover:text-blue-dark hidden md:flex">
            <MessageSquarePlus className="h-4 w-4 mr-1.5" />
            {t("Share Your Feedback", "شاركنا رأيك")}
          </CTAButton>
        </div>
      </div>

      <Dialog open={feedbackOpen} onOpenChange={setFeedbackOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">{t("Share Your Experience", "شاركنا تجربتك")}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleFeedback} className="space-y-4 mt-2">
            <div className="space-y-1.5">
              <Label>{t("Your Name", "اسمك")}</Label>
              <Input value={feedbackName} onChange={(e) => setFeedbackName(e.target.value)} placeholder={t("Full name", "الاسم الكامل")} required />
            </div>
            <div className="space-y-1.5">
              <Label>{t("Your Feedback", "ملاحظاتك")}</Label>
              <textarea value={feedbackText} onChange={(e) => setFeedbackText(e.target.value)} placeholder={t("Tell us about your experience at Tylos...", "أخبرنا عن تجربتك في تايلوس...")} required rows={4} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-turquoise focus:ring-1 focus:ring-turquoise resize-none" />
            </div>
            <div className="flex gap-3">
              <CTAButton type="submit" variant="primary" className="flex-1">{t("Submit", "إرسال")}</CTAButton>
              <CTAButton type="button" variant="outline" className="flex-1" onClick={() => setFeedbackOpen(false)}>{t("Cancel", "إلغاء")}</CTAButton>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
