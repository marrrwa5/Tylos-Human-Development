"use client";

import { useLanguage } from "@/context/LanguageContext";

interface PageBannerTextProps {
  eyebrow: string;
  eyebrowAr: string;
  title: string;
  titleAr: string;
  subtitle: string;
  subtitleAr: string;
  pills?: string[];
}

export default function PageBannerText({
  eyebrow, eyebrowAr,
  title, titleAr,
  subtitle, subtitleAr,
  pills,
}: PageBannerTextProps) {
  const { t, isAr } = useLanguage();

  return (
    <>
      <p className="text-turquoise text-sm uppercase tracking-widest font-semibold mb-4">
        {t(eyebrow, eyebrowAr)}
      </p>
      <h1
        className="font-bold text-4xl md:text-6xl text-white mb-6"
        style={isAr
          ? { fontFamily: '"BahijTheSans", system-ui, sans-serif', fontWeight: 900 }
          : { fontFamily: "var(--font-sans)" }
        }
      >
        {t(title, titleAr)}
      </h1>
      <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
        {t(subtitle, subtitleAr)}
      </p>
      {pills && (
        <div className="flex flex-wrap gap-2 justify-center">
          {pills.map((pill) => (
            <span key={pill} className="px-4 py-1.5 rounded-full bg-white/8 border border-white/15 text-white/70 text-xs font-medium backdrop-blur-sm">
              {pill}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
