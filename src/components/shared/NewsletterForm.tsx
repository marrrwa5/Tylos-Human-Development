"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import CTAButton from "./CTAButton";
import { toast } from "sonner";
import { Mail } from "lucide-react";

const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
});
type FormData = z.infer<typeof schema>;

export default function NewsletterForm() {
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
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        toast.success("You're subscribed! We'll keep you updated.");
        reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Unable to subscribe. Please try again later.");
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
            placeholder="Your email address"
            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-turquoise"
          />
        </div>
        <CTAButton type="submit" variant="primary" size="sm" disabled={loading}>
          {loading ? "..." : "Subscribe"}
        </CTAButton>
      </div>
      {errors.email && (
        <p className="text-red-400 text-xs">{errors.email.message}</p>
      )}
    </form>
  );
}
