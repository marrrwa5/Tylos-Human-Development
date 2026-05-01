"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "en" | "ar";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  isAr: boolean;
  t: (en: string, ar: string) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  isAr: false,
  t: (en) => en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Lazy initializer: reads localStorage synchronously on first client render.
  // No useEffect delay = no flash. Falls back to "en" on SSR (window undefined).
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const saved = localStorage.getItem("tylos-lang");
    return saved === "ar" ? "ar" : "en";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("tylos-lang", l);
  };

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const t = (en: string, ar: string) => (lang === "ar" ? ar : en);

  return (
    <LanguageContext.Provider value={{ lang, setLang, isAr: lang === "ar", t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
