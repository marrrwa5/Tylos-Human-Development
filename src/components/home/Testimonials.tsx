"use client";

import { useState } from "react";
import { Star, Quote, MessageSquarePlus } from "lucide-react";
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
  const { t, isAr } = useLanguage();
  const testimonials = getTestimonials();
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackName, setFeedbackName] = useState("");
  const [feedbackText, setFeedbackText] = useState("");

  const handleFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t("Thank you for your feedback!", "شكراً على ملاحظاتك!"));
    setFeedbackOpen(false);
    setFeedbackName("");
    setFeedbackText("");
  };

  // Triple for seamless loop
  const items = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="section-padding bg-[#f8fafc] overflow-hidden">
      <style>{`
        @keyframes reviews-loop {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .reviews-track {
          display: flex;
          direction: ltr;
          gap: 1.5rem;
          width: max-content;
          animation: reviews-loop 30s linear infinite;
          will-change: transform;
        }
        .review-card {
          flex-shrink: 0;
          width: 320px;
        }
      `}</style>

      <div className="container-wide">
        <ScrollReveal>
          <div className="mb-12">
            <SectionHeading
              title={t("What Our Graduates Said", "ماذا قال متدربينا")}
              subtitle={t("Real stories from professionals who transformed their careers at Tylos.", "قصص حقيقية من محترفين غيّروا مساراتهم المهنية في تايلوس.")}
              centered
            />
            <div className="flex justify-center mt-6">
              <CTAButton onClick={() => setFeedbackOpen(true)} variant="outline" size="sm">
                <MessageSquarePlus className="h-4 w-4 mr-1.5" />
                {t("Share Your Feedback", "شاركنا رأيك")}
              </CTAButton>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Infinite scrolling ticker */}
      <div
        style={{
          direction: "ltr",
          maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        <div className="reviews-track px-3">
          {items.map((review, i) => (
            <div key={i} className="review-card relative bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4 hover:border-turquoise/30 hover:shadow-md transition-all duration-300">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-turquoise/15" />
              <Stars rating={review.rating} />
              <blockquote className="text-gray-600 text-sm leading-relaxed flex-1 italic">
                &ldquo;{isAr && review.quoteAr ? review.quoteAr : review.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full gradient-brand flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                  {(isAr && review.nameAr ? review.nameAr : review.name).charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{isAr && review.nameAr ? review.nameAr : review.name}</div>
                  <div className="text-xs text-gray-400">{review.role} · {review.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feedback dialog */}
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
