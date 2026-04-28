"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileText, Handshake, GraduationCap, BarChart3 } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Consultation",
    desc: "We meet with your L&D or HR team to understand your training needs, workforce profile, and strategic objectives.",
    color: "turquoise",
  },
  {
    step: "02",
    icon: FileText,
    title: "Proposal",
    desc: "Our team designs a tailored training plan covering curriculum, delivery format, schedule, and investment breakdown.",
    color: "blue",
  },
  {
    step: "03",
    icon: Handshake,
    title: "Agreement",
    desc: "We finalize the program details, sign the agreement, and handle all administrative logistics for you.",
    color: "turquoise",
  },
  {
    step: "04",
    icon: GraduationCap,
    title: "Delivery",
    desc: "Expert trainers deliver the program at your premises, our center, or virtually with full support throughout.",
    color: "blue",
  },
  {
    step: "05",
    icon: BarChart3,
    title: "Evaluation",
    desc: "We measure learning outcomes, provide completion reports, and recommend follow-up development pathways.",
    color: "turquoise",
  },
];

export default function CorporateProcess() {
  return (
    <section className="section-padding overflow-hidden" style={{ background: "linear-gradient(135deg, #020b13 0%, #0a1e35 60%, #020b13 100%)" }}>
      {/* Dot texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,179,164,0.12) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative container-wide">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-turquoise text-sm uppercase tracking-widest font-semibold mb-3">
            Simple. Collaborative. Effective.
          </p>
          <h2
            className="font-bold text-3xl md:text-4xl text-white"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            How It Works
          </h2>
          <p className="text-white/50 text-base mt-3 max-w-xl mx-auto">
            From first conversation to certified outcomes in five clear steps.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px"
            style={{ background: "linear-gradient(to right, transparent, rgba(0,179,164,0.25) 20%, rgba(0,179,164,0.25) 80%, transparent)" }}
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isTurquoise = step.color === "turquoise";

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.14, duration: 0.5 }}
                className="group flex flex-col items-center text-center px-4 pb-8 lg:pb-0"
              >
                {/* Number circle */}
                <motion.div
                  whileHover={{ scale: 1.12 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  className={`relative w-20 h-20 rounded-full flex items-center justify-center mb-5 z-10 shadow-xl ${
                    isTurquoise
                      ? "bg-turquoise group-hover:shadow-turquoise/40"
                      : "bg-[#0057A8] group-hover:shadow-blue-brand/40"
                  } transition-shadow duration-300`}
                >
                  <Icon className="h-8 w-8 text-white" />
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white flex items-center justify-center text-[10px] font-black text-gray-900 shadow-md">
                    {step.step}
                  </span>
                </motion.div>

                {/* Content card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`w-full bg-white/5 border rounded-2xl p-5 transition-all duration-300 group-hover:bg-white/10 ${
                    isTurquoise ? "border-turquoise/20 group-hover:border-turquoise/40" : "border-[#0057A8]/30 group-hover:border-[#0057A8]/50"
                  }`}
                >
                  <h3
                    className={`font-bold text-base mb-2 ${isTurquoise ? "text-turquoise" : "text-blue-300"}`}
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-white/55 text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
