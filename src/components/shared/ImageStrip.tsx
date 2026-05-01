"use client";

import Link from "next/link";

const photos = [
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=80",
];

export default function ImageStrip() {
  const items = [...photos, ...photos, ...photos];

  return (
    <section className="py-10 bg-white overflow-hidden">
      <style>{`
        @keyframes image-strip-loop {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .image-strip-track {
          display: flex;
          direction: ltr;
          width: max-content;
          animation: image-strip-loop 55s linear infinite;
          will-change: transform;
        }
        .image-strip-item {
          flex-shrink: 0;
          margin-right: 16px;
          width: 256px;
          height: 176px;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
        }
        .image-strip-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}</style>

      <div
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        <div className="image-strip-track">
          {items.map((src, i) => (
            <Link key={i} href="/media" className="image-strip-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="Tylos HDC" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
