"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import CTAButton from "./CTAButton";
import { toast } from "sonner";
import { Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const schema = z.object({ email: z.string().email() });
type FormData = z.infer<typeof schema>;

export default function NewsletterForm() {
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/xzdozpwj", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) });
      if (res.ok) {
        toast.success(t("You're subscribed! We'll keep you updated.", "تم اشتراكك! سنبقيك على اطلاع."));
        reset();
      } else {
        toast.error(t("Something went wrong. Please try again.", "حدث خطأ ما. يرجى المحاولة مرة أخرى."));
      }
    } catch {
      toast.error(t("Unable to subscribe. Please try again later.", "تعذر الاشتراك. يرجى المحاولة لاحقاً."));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-brand" />
          <Input
            {...register("email")}
            placeholder={t("Your email address", "بريدك الإلكتروني")}
            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-turquoise"
          />
        </div>
        <CTAButton type="submit" variant="primary" size="sm" disabled={loading}>
          {loading ? "..." : t("Subscribe", "اشترك")}
        </CTAButton>
      </div>
      {errors.email && <p className="text-red-400 text-xs">{t("Please enter a valid email address", "يرجى إدخال بريد إلكتروني صحيح")}</p>}
    </form>
  );
}
