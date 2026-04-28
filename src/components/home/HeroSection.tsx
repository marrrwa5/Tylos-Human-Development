"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import CTAButton from "@/components/shared/CTAButton";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden -mt-[72px]">

      {/* ── Base: solid deep navy ── */}
      <div className="absolute inset-0 bg-[#020b13]" />

      {/*
        ── Single smooth background gradient ──
        Many stops = no banding. Goes from turquoise-tinted at top-left
        through teal-navy then deep navy. No overlapping divs.
      */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            "linear-gradient(120deg,",
            "  rgba(0,179,164,0.20) 0%,",
            "  rgba(0,155,158,0.17) 8%,",
            "  rgba(0,110,135,0.14) 18%,",
            "  rgba(2,35,60,0.80)  30%,",
            "  rgba(2,20,38,0.93)  42%,",
            "  rgba(2,11,19,1)     56%,",
            "  rgba(2,11,19,1)    100%",
            ")",
          ].join(""),
        }}
      />

      {/* ── Dot pattern — fades out left→right so it doesn't reach the image ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,179,164,0.45) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.08) 40%, transparent 68%)",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.08) 40%, transparent 68%)",
        }}
      />

      {/* ── Ambient glow orbs (no lines, only soft radial blobs) ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -left-32 w-[680px] h-[680px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,179,164,0.16) 0%, rgba(0,110,140,0.08) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[28%] -left-24 w-[480px] h-[480px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,87,168,0.14) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-40px] left-[4%] w-[360px] h-[360px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,179,164,0.10) 0%, transparent 60%)",
          }}
        />

        {/* Floating dots only — NO line elements */}
        <motion.div
          className="absolute top-[20%] left-[5%] w-3 h-3 rounded-full bg-turquoise/35"
          animate={{ opacity: [0.35, 0.75, 0.35], y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-[52%] left-[20%] w-2 h-2 rounded-full bg-turquoise/25"
          animate={{ opacity: [0.25, 0.55, 0.25], y: [0, 7, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-[72%] left-[9%] w-1.5 h-1.5 rounded-full bg-blue-brand/35"
          animate={{ opacity: [0.2, 0.45, 0.2], y: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/*
        ── Right-half image ──
        mask-image makes the image pixels themselves transparent.
        The background gradient behind bleeds through seamlessly — no overlay color needed.
        Result: zero visible edge, zero colour mismatch.
      */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.25) 14%, rgba(0,0,0,0.65) 28%, rgba(0,0,0,0.90) 42%, black 58%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.25) 14%, rgba(0,0,0,0.65) 28%, rgba(0,0,0,0.90) 42%, black 58%)",
        }}
      >
        <Image
          src="/images/man2.png"
          alt="Professional at Tylos Human Development Center"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gray2 overlay on top of the image */}
        <Image
          src="/images/gray2.png"
          alt=""
          fill
          className="object-cover object-center mix-blend-multiply opacity-90"
          aria-hidden="true"
        />
      </div>

      {/* ── Text content ── */}
      <div className="relative container-wide w-full pt-[100px] pb-24">
        <div className="max-w-xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-turquoise/30 bg-turquoise/10 text-turquoise text-sm font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-turquoise animate-pulse" />
            {t("A Trusted Accredited Training Center In Bahrain · Est. 2002", "مركز تدريب معتمد وموثوق في البحرين · تأسس عام 2002")}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {t("The First Step", "الخطوة الأولى")}<br />
            <span className="text-gradient-brand">{t("Starts At Tylos", "تبدأ في تايلوس")}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/70 text-lg max-w-lg mb-10 leading-relaxed"
          >
            {t(
              "Professional training programs across various fields, officially accredited by the Ministry of Labour, and awarded international certifications in the Kingdom of Bahrain.",
              "برامج تدريبية مهنية في مختلف المجالات، معتمدة رسمياً من وزارة العمل، ومنحت شهادات دولية معترف بها في مملكة البحرين."
            )}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <CTAButton href="/courses" variant="primary" size="lg">
              {t("Explore Courses", "استكشف الدورات")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </CTAButton>
            <CTAButton
              href="/services"
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white hover:text-blue-brand"
            >
              {t("Our Services", "خدماتنا")}
            </CTAButton>
          </motion.div>
        </div>
      </div>

      {/*
        ── Bottom fade — full section width ──
        Sits over both image and background. Uses exact bg color so there
        is zero colour mismatch and zero visible edge.
      */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to top, #020b13 0%, rgba(2,11,19,0.85) 35%, rgba(2,11,19,0.40) 65%, transparent 100%)",
        }}
      />

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Link href="#about-preview" aria-label="Scroll down">
          <ChevronDown className="h-6 w-6 text-white/40" />
        </Link>
      </motion.div>
    </section>
  );
}
