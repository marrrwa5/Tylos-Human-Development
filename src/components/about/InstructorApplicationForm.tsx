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

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(8, "Valid phone required"),
  specialization: z.string().min(2, "Please enter your specialization"),
  experience: z.string().min(1, "Please select your experience level"),
  message: z.string().min(20, "Please tell us more about yourself (min 20 chars)"),
});
type FormData = z.infer<typeof schema>;

export default function InstructorApplicationForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "instructor-application" }),
      });
      if (res.ok) {
        toast.success("Application submitted! We'll be in touch soon.");
        reset();
      } else {
        toast.error("Submission failed. Please try again.");
      }
    } catch {
      toast.error("Unable to submit. Please try again later.");
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
                    Join Our Instructor Team
                  </h2>
                  <p className="text-gray-brand text-sm">
                    Share your expertise and shape the next generation of professionals.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" {...register("name")} placeholder="Your full name" />
                    {errors.name && (
                      <p className="text-red-500 text-xs">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" {...register("email")} placeholder="your@email.com" />
                    {errors.email && (
                      <p className="text-red-500 text-xs">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" {...register("phone")} placeholder="+973 XXXX XXXX" />
                    {errors.phone && (
                      <p className="text-red-500 text-xs">{errors.phone.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="specialization">Area of Specialization *</Label>
                    <Input
                      id="specialization"
                      {...register("specialization")}
                      placeholder="e.g. Business Management, IT, HR..."
                    />
                    {errors.specialization && (
                      <p className="text-red-500 text-xs">{errors.specialization.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="experience">Years of Training Experience *</Label>
                  <select
                    id="experience"
                    {...register("experience")}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-turquoise focus:ring-1 focus:ring-turquoise bg-white"
                  >
                    <option value="">Select experience level</option>
                    <option value="0-2">Less than 2 years</option>
                    <option value="2-5">2 – 5 years</option>
                    <option value="5-10">5 – 10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                  {errors.experience && (
                    <p className="text-red-500 text-xs">{errors.experience.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message">Tell us about yourself *</Label>
                  <textarea
                    id="message"
                    {...register("message")}
                    rows={4}
                    placeholder="Brief bio, qualifications, and areas you'd like to teach..."
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-turquoise focus:ring-1 focus:ring-turquoise resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs">{errors.message.message}</p>
                  )}
                </div>

                <CTAButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Submitting…" : "Submit Application"}
                </CTAButton>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
