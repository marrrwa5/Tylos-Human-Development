"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

const photos = [
  { id: "1",  src: "/images/media/img_0569.jpg" },
  { id: "2",  src: "/images/media/img_0649.jpg" },
  { id: "3",  src: "/images/media/img_0650.jpg" },
  { id: "4",  src: "/images/media/img_0651.jpg" },
  { id: "5",  src: "/images/media/img_0652.jpg" },
  { id: "6",  src: "/images/media/img_0653.jpg" },
  { id: "7",  src: "/images/media/img_0656.jpg" },
  { id: "8",  src: "/images/media/img_0657.jpg" },
  { id: "9",  src: "/images/media/img_0658.jpg" },
  { id: "10", src: "/images/media/img_0659.jpg" },
  { id: "11", src: "/images/media/img_0660.jpg" },
  { id: "12", src: "/images/media/img_0661.jpg" },
  { id: "13", src: "/images/media/img_0662.jpg" },
  { id: "14", src: "/images/media/img_0668.jpg" },
  { id: "15", src: "/images/media/img_0671.jpg" },
  { id: "16", src: "/images/media/img_0673.jpg" },
  { id: "17", src: "/images/media/img_0682.jpg" },
  { id: "18", src: "/images/media/img_0684.jpg" },
  { id: "19", src: "/images/media/whatsapp_image_2026-04-30_at_07.26.55.jpeg" },
  { id: "20", src: "/images/media/whatsapp_image_2026-04-30_at_07.26.55_1.jpeg" },
  { id: "21", src: "/images/media/whatsapp_image_2026-04-30_at_07.26.57.jpeg" },
  { id: "22", src: "/images/media/whatsapp_image_2026-04-30_at_07.26.57_1.jpeg" },
  { id: "23", src: "/images/media/whatsapp_image_2026-04-30_at_07.26.57_2.jpeg" },
  { id: "24", src: "/images/media/whatsapp_image_2026-04-30_at_07.26.57_3.jpeg" },
  { id: "25", src: "/images/media/whatsapp_image_2026-04-30_at_07.26.57_4.jpeg" },
  { id: "26", src: "/images/media/whatsapp_image_2026-04-30_at_07.26.58_1.jpeg" },
  { id: "27", src: "/images/media/whatsapp_image_2026-04-30_at_07.26.58_2.jpeg" },
  { id: "28", src: "/images/media/whatsapp_image_2026-04-30_at_07.26.58_3.jpeg" },
  { id: "29", src: "/images/media/whatsapp_image_2026-04-30_at_07.26.58_4.jpeg" },
  { id: "30", src: "/images/media/whatsapp_image_2026-04-30_at_07.26.59_1.jpeg" },
];

export default function MediaPage() {
  const { t, isAr } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const prev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length);
  };
  const next = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % photos.length);
  };

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-[#020b13]" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(0,179,164,0.20) 0%, rgba(0,155,158,0.14) 18%, rgba(0,87,168,0.12) 35%, rgba(2,20,38,0.90) 55%, rgba(2,11,19,1) 75%)" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,179,164,0.40) 1px, transparent 0)", backgroundSize: "28px 28px", maskImage: "linear-gradient(to right, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.07) 50%, transparent 80%)", WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.07) 50%, transparent 80%)" }} />
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,179,164,0.12) 0%, transparent 65%)" }} />

        <div className="relative container-wide text-center">
          <ScrollReveal>
            <p className="text-turquoise text-sm uppercase tracking-widest font-semibold mb-4">
              {t("Media Center", "مركز الإعلام")}
            </p>
            <h1
              className="font-bold text-4xl md:text-6xl text-white mb-6"
              style={isAr
                ? { fontFamily: '"BahijTheSans", system-ui, sans-serif', fontWeight: 900 }
                : { fontFamily: "var(--font-sans)" }
              }
            >
              {t("Our Gallery", "معرض الصور")}
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              {t(
                "A glimpse into life at Tylos HDC. Training sessions, corporate events, and more.",
                "لمحة عن الحياة في مركز تايلوس. جلسات تدريبية وفعاليات الشركات والمزيد."
              )}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Photo Gallery ── */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-wide">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {photos.map((photo, index) => (
              <ScrollReveal key={photo.id} delay={index * 0.03}>
                <div
                  className="break-inside-avoid cursor-pointer group overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
                  onClick={() => setLightboxIndex(index)}
                >
                  <div className="relative w-full" style={{ paddingBottom: index % 3 === 0 ? "75%" : index % 3 === 1 ? "100%" : "65%" }}>
                    <Image
                      src={photo.src}
                      alt={`Tylos HDC photo ${photo.id}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      <Dialog open={lightboxIndex !== null} onOpenChange={() => setLightboxIndex(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black/95 border-0 shadow-2xl">
          <button onClick={() => setLightboxIndex(null)} className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <X className="h-4 w-4" />
          </button>

          {lightboxIndex !== null && photos[lightboxIndex] && (
            <div className="relative">
              <div className="relative w-full aspect-video">
                <Image
                  src={photos[lightboxIndex].src}
                  alt={`Tylos HDC photo ${photos[lightboxIndex].id}`}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
              <div className="p-4 flex items-center justify-end">
                <div className="flex gap-2">
                  <button onClick={prev} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"><ChevronLeft className="h-4 w-4" /></button>
                  <button onClick={next} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"><ChevronRight className="h-4 w-4" /></button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
