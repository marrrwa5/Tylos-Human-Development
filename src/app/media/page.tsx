"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

const photos = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80",
    title: "Classroom Training Session",
    category: "Training",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
    title: "Corporate Workshop",
    category: "Workshops",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80",
    title: "Graduation Ceremony",
    category: "Ceremonies",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
    title: "IT & Computing Lab",
    category: "Training",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=80",
    title: "Group Discussion",
    category: "Training",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&auto=format&fit=crop&q=80",
    title: "Corporate Conference",
    category: "Events",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
    title: "Professional Presentation",
    category: "Training",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
    title: "Team Learning Session",
    category: "Training",
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800&auto=format&fit=crop&q=80",
    title: "Board Skills Workshop",
    category: "Workshops",
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop&q=80",
    title: "Hands-on Practice",
    category: "Training",
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop&q=80",
    title: "Networking Event",
    category: "Events",
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
    title: "Training Facility",
    category: "Facility",
  },
];

export default function MediaPage() {
  const { t } = useLanguage();
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
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(0,179,164,0.20) 0%, rgba(0,155,158,0.14) 18%, rgba(0,87,168,0.12) 35%, rgba(2,20,38,0.90) 55%, rgba(2,11,19,1) 75%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,179,164,0.40) 1px, transparent 0)",
            backgroundSize: "28px 28px",
            maskImage: "linear-gradient(to right, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.07) 50%, transparent 80%)",
            WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.07) 50%, transparent 80%)",
          }}
        />
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,179,164,0.12) 0%, transparent 65%)" }} />

        <div className="relative container-wide text-center">
          <ScrollReveal>
            <p className="text-turquoise text-sm uppercase tracking-widest font-semibold mb-4">
              {t("Media Center", "مركز الإعلام")}
            </p>
            <h1
              className="font-bold text-4xl md:text-6xl text-white mb-6"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {t("Our Gallery", "معرض الصور")}
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              {t(
                "A glimpse into life at Tylos HDC. Training sessions, graduation ceremonies, corporate events, and more.",
                "لمحة عن الحياة في مركز تايلوس. جلسات تدريبية، حفلات تخرج، فعاليات الشركات، والمزيد."
              )}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Photo Gallery ── */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-wide">
          {/* Masonry grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {photos.map((photo, index) => (
              <ScrollReveal key={photo.id} delay={index * 0.04}>
                <div
                  className="break-inside-avoid cursor-pointer group overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
                  onClick={() => setLightboxIndex(index)}
                >
                  <div className={`relative w-full ${index % 3 === 0 ? "h-56" : index % 3 === 1 ? "h-72" : "h-44"}`}>
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-white text-xs font-semibold">{photo.title}</p>
                      <p className="text-white/70 text-xs">{photo.category}</p>
                    </div>
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
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>

          {lightboxIndex !== null && photos[lightboxIndex] && (
            <div className="relative">
              <div className="relative w-full aspect-video">
                <Image
                  src={photos[lightboxIndex].src}
                  alt={photos[lightboxIndex].title}
                  fill
                  className="object-cover"
                  sizes="90vw"
                />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold text-sm">{photos[lightboxIndex].title}</p>
                  <p className="text-white/50 text-xs">{photos[lightboxIndex].category}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={prev} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button onClick={next} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
