"use client";

import { useLanguage } from "@/context/LanguageContext";

const clients = [
  { name: "Jamal Showaiter Sweets", nameAr: "حلويات جمال شويطر" },
  { name: "Mirza Alhelli", nameAr: "مرزا الحلي" },
  { name: "Bapco Gas", nameAr: "بابكو للغاز" },
  { name: "Effect Media", nameAr: "إيفكت ميديا" },
  { name: "Raffles Al Areen Palace", nameAr: "رافلز قصر العرين" },
  { name: "Jahez International Co.", nameAr: "شركة جاهز الدولية" },
  { name: "Ammar Optician", nameAr: "بصريات عمار" },
  { name: "LuLu Store Maintenance", nameAr: "صيانة متاجر لولو" },
  { name: "Lotuse Food Stuff", nameAr: "لوتس للمواد الغذائية" },
  { name: "Bluebell Computer", nameAr: "بلوبيل للكمبيوتر" },
  { name: "Glam and Glow Beauty Lounge", nameAr: "جلام آند جلو" },
  { name: "Tojjar BH Co.", nameAr: "شركة تجار البحرين" },
  { name: "Ebrahim Yousif Foodstuff", nameAr: "إبراهيم يوسف للمواد الغذائية" },
  { name: "Alnoor 369 Consulting", nameAr: "النور 369 للاستشارات" },
  { name: "Kanoo Vehicle Leasing", nameAr: "كانو لتأجير السيارات" },
  { name: "Jawad Business Group", nameAr: "مجموعة جواد" },
  { name: "Dairy Queen", nameAr: "داري كوين" },
  { name: "Twinz Perfume", nameAr: "توينز للعطور" },
  { name: "Albayan Perfumes", nameAr: "البيان للعطور" },
  { name: "Atlas Aluminum", nameAr: "أطلس للألومنيوم" },
  { name: "Golden Nooran", nameAr: "نوران الذهبية" },
  { name: "Dr. Nabeel Tammam", nameAr: "د. نبيل تمام" },
  { name: "Alawael Kindergarten", nameAr: "روضة الأوائل" },
  { name: "Rsha Contracting", nameAr: "رشا للمقاولات" },
];

export default function ClientLogos() {
  const { t, isAr } = useLanguage();

  return (
    <section className="py-14 bg-[#0d1e35] border-y border-white/10 overflow-hidden">
      {/* Headline */}
      <div className="container-wide mb-10">
        <p className={`text-center font-bold text-white ${isAr ? "text-3xl md:text-4xl" : "text-lg uppercase tracking-widest"}`}>
          {t("Trusted by Leaders Across Industries", "موثوق به من قبل")}
        </p>
      </div>

      {/* Infinite ticker — uses CSS animation, never stops, no JS */}
      <div
        className="overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            width: "max-content",
            animation: "ticker-scroll 50s linear infinite",
          }}
        >
          {/* Triple the items so the seam is never visible */}
          {[...clients, ...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-5 py-2.5 rounded-xl bg-white/8 border border-white/10"
              style={{ whiteSpace: "nowrap" }}
            >
              <span className="text-white/70 font-medium text-sm">
                {isAr ? client.nameAr : client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
