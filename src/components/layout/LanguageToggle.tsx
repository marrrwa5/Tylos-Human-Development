"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-white/20 p-0.5 bg-white/10">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setLang("en")}
        className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
          lang === "en"
            ? "bg-turquoise text-white shadow-sm"
            : "text-white/60 hover:text-white"
        }`}
      >
        EN
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setLang("ar")}
        className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
          lang === "ar"
            ? "bg-turquoise text-white shadow-sm"
            : "text-white/60 hover:text-white"
        }`}
      >
        عر
      </motion.button>
    </div>
  );
}
