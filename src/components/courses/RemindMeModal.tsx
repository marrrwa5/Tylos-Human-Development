"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CTAButton from "@/components/shared/CTAButton";
import { toast } from "sonner";
import { Bell, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
});
type FormData = z.infer<typeof schema>;

interface RemindMeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  courseTitle: string;
  courseSlug: string;
  startDate: string;
}

export default function RemindMeModal({ open, onOpenChange, courseTitle, courseSlug, startDate }: RemindMeModalProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/remind-me", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, courseSlug, courseTitle, startDate }) });
      if (res.ok) {
        setSubmitted(true);
        toast.success(t("We'll remind you when enrollment opens!", "سنذكرك عند فتح باب التسجيل!"));
        reset();
      } else {
        toast.error(t("Something went wrong. Please try again.", "حدث خطأ ما. يرجى المحاولة مرة أخرى."));
      }
    } catch {
      toast.error(t("Unable to register your interest. Please try again.", "تعذر تسجيل اهتمامك. يرجى المحاولة مرة أخرى."));
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => { onOpenChange(false); setTimeout(() => setSubmitted(false), 300); };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="font-serif text-xl font-bold text-gray-900">{t("You're on the list!", "أنت على القائمة!")}</h3>
            <p className="text-gray-brand text-sm">
              {t("We'll send you a reminder before enrollment opens for", "سنرسل لك تذكيراً قبل فتح التسجيل لـ")} <strong>{courseTitle}</strong>.
            </p>
            <CTAButton onClick={handleClose} variant="primary">{t("Close", "إغلاق")}</CTAButton>
          </div>
        ) : (
          <>
            <DialogHeader>
              <div className="w-10 h-10 rounded-xl bg-turquoise/10 flex items-center justify-center mb-3">
                <Bell className="h-5 w-5 text-turquoise" />
              </div>
              <DialogTitle className="font-serif text-xl">{t("Remind Me About This Course", "ذكّرني بهذه الدورة")}</DialogTitle>
              <DialogDescription className="text-sm">
                {t("Register your interest for", "سجّل اهتمامك بـ")} <strong className="text-gray-900">{courseTitle}</strong>. {t("We'll notify you when enrollment opens.", "سنخطرك عند فتح باب التسجيل.")}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-2">
              <div className="space-y-1.5">
                <Label htmlFor="name">{t("Full Name *", "الاسم الكامل *")}</Label>
                <Input id="name" {...register("name")} placeholder={t("Your full name", "اسمك الكامل")} />
                {errors.name && <p className="text-red-500 text-xs">{t("Name must be at least 2 characters", "يجب أن يكون الاسم حرفين على الأقل")}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">{t("Email Address *", "البريد الإلكتروني *")}</Label>
                <Input id="email" type="email" {...register("email")} placeholder="your@email.com" />
                {errors.email && <p className="text-red-500 text-xs">{t("Please enter a valid email", "يرجى إدخال بريد إلكتروني صحيح")}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone">{t("Phone (optional)", "الهاتف (اختياري)")}</Label>
                <Input id="phone" type="tel" {...register("phone")} placeholder="+973 XXXX XXXX" />
              </div>
              <div className="flex gap-3 pt-2">
                <CTAButton type="submit" variant="primary" className="flex-1" disabled={loading}>
                  {loading ? t("Registering...", "جارٍ التسجيل...") : t("Remind Me", "ذكّرني")}
                </CTAButton>
                <CTAButton type="button" variant="outline" onClick={handleClose} className="flex-1">{t("Cancel", "إلغاء")}</CTAButton>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
