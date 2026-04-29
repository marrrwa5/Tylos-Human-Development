"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CTAButton from "@/components/shared/CTAButton";
import { toast } from "sonner";
import { GraduationCap } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  specialization: z.string().min(2),
  experience: z.string().min(1),
  message: z.string().min(20),
});
type FormData = z.infer<typeof schema>;

export default function InstructorApplicationForm() {
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "instructor-application" }),
      });
      if (res.ok) {
        toast.success(t("Application submitted! We'll be in touch soon.", "تم إرسال طلبك! سنتواصل معك قريباً."));
        reset();
      } else {
        toast.error(t("Submission failed. Please try again.", "فشل الإرسال. يرجى المحاولة مرة أخرى."));
      }
    } catch {
      toast.error(t("Unable to submit. Please try again later.", "تعذر الإرسال. يرجى المحاولة لاحقاً."));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding bg-gray-light/30">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="bg-white rounded-3xl shadow-card border border-gray-100 p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl gradient-brand flex items-center justify-center">
                  <GraduationCap className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-gray-900">
                    {t("Join Our Instructor Team", "انضم إلى فريق المدربين")}
                  </h2>
                  <p className="text-gray-brand text-sm">
                    {t("Share your expertise and shape the next generation of professionals.", "شارك خبرتك وشكّل الجيل القادم من المهنيين.")}
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">{t("Full Name *", "الاسم الكامل *")}</Label>
                    <Input id="name" {...register("name")} placeholder={t("Your full name", "اسمك الكامل")} />
                    {errors.name && <p className="text-red-500 text-xs">{t("Name must be at least 2 characters", "يجب أن يكون الاسم حرفين على الأقل")}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email">{t("Email Address *", "البريد الإلكتروني *")}</Label>
                    <Input id="email" type="email" {...register("email")} placeholder="your@email.com" />
                    {errors.email && <p className="text-red-500 text-xs">{t("Valid email required", "يرجى إدخال بريد إلكتروني صحيح")}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="phone">{t("Phone Number *", "رقم الهاتف *")}</Label>
                    <Input id="phone" type="tel" {...register("phone")} placeholder="+973 XXXX XXXX" />
                    {errors.phone && <p className="text-red-500 text-xs">{t("Valid phone required", "يرجى إدخال رقم هاتف صحيح")}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="specialization">{t("Area of Specialization *", "مجال التخصص *")}</Label>
                    <Input id="specialization" {...register("specialization")} placeholder={t("e.g. Business Management, IT, HR...", "مثال: إدارة أعمال، تقنية معلومات...")} />
                    {errors.specialization && <p className="text-red-500 text-xs">{t("Please enter your specialization", "يرجى إدخال تخصصك")}</p>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="experience">{t("Years of Training Experience *", "سنوات خبرة التدريب *")}</Label>
                  <select
                    id="experience"
                    {...register("experience")}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-turquoise focus:ring-1 focus:ring-turquoise bg-white"
                  >
                    <option value="">{t("Select experience level", "اختر مستوى الخبرة")}</option>
                    <option value="0-2">{t("Less than 2 years", "أقل من سنتين")}</option>
                    <option value="2-5">{t("2 – 5 years", "2 – 5 سنوات")}</option>
                    <option value="5-10">{t("5 – 10 years", "5 – 10 سنوات")}</option>
                    <option value="10+">{t("10+ years", "أكثر من 10 سنوات")}</option>
                  </select>
                  {errors.experience && <p className="text-red-500 text-xs">{t("Please select your experience level", "يرجى اختيار مستوى الخبرة")}</p>}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message">{t("Tell us about yourself *", "أخبرنا عن نفسك *")}</Label>
                  <textarea
                    id="message"
                    {...register("message")}
                    rows={4}
                    placeholder={t("Brief bio, qualifications, and areas you'd like to teach...", "نبذة مختصرة، مؤهلاتك، والمجالات التي تودّ تدريسها...")}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-turquoise focus:ring-1 focus:ring-turquoise resize-none"
                  />
                  {errors.message && <p className="text-red-500 text-xs">{t("Please tell us more about yourself (min 20 chars)", "يرجى إخبارنا المزيد عن نفسك (20 حرفاً على الأقل)")}</p>}
                </div>

                <CTAButton type="submit" variant="primary" size="lg" className="w-full" disabled={loading}>
                  {loading ? t("Submitting…", "جارٍ الإرسال…") : t("Submit Application", "إرسال الطلب")}
                </CTAButton>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
