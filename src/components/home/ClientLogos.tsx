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

const ITEM_GAP = 20; // px — must match marginRight below

export default function ClientLogos() {
  const { t, isAr } = useLanguage();

  return (
    <section className="py-14 bg-[#0d1e35] border-y border-white/10">
      <style>{`
        @keyframes clients-loop {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .clients-track {
          display: flex;
          direction: ltr;
          animation: clients-loop 25s linear infinite;
          will-change: transform;
        }
        .clients-item {
          flex-shrink: 0;
          margin-right: ${ITEM_GAP}px;
          padding: 10px 20px;
          border-radius: 12px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          cursor: default;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          white-space: nowrap;
          font-size: 0.875rem;
          font-weight: 500;
          color: rgba(255,255,255,0.7);
        }
        .clients-item:hover {
          background: #ffffff;
          border-color: #ffffff;
          color: #0d1e35;
        }
      `}</style>

      {/* Headline */}
      <div className="container-wide mb-10">
        <p className={`text-center font-bold text-white ${isAr ? "text-2xl md:text-3xl" : "text-lg uppercase tracking-widest"}`}>
          {t("Trusted by Leaders Across Industries", "نفتخر بثقة عملائنا")}
        </p>
      </div>

      {/* Ticker — overflow hidden with soft fade edges */}
      <div
        className="overflow-hidden"
        style={{
          direction: "ltr",
          maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        {/*
          Two identical copies side by side.
          translateX(-50%) moves exactly one copy width → seamless reset.
          margin-right on every item (including last of copy 1) keeps
          the gap between copy 1 end → copy 2 start identical to all others.
        */}
        <div className="clients-track">
          {[...clients, ...clients, ...clients].map((client, i) => (
            <div key={i} className="clients-item">
              {isAr ? client.nameAr : client.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
