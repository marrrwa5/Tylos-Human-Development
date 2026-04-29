"use client";

import { useLanguage } from "@/context/LanguageContext";

interface BilTextProps {
  en: string;
  ar: string;
}

export default function BilText({ en, ar }: BilTextProps) {
  const { t } = useLanguage();
  return <>{t(en, ar)}</>;
}
