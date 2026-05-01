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
  return (
    <section className="py-10 bg-white">
      <style>{`
        @keyframes img-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .img-marquee-track {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: img-marquee 50s linear infinite;
          will-change: transform;
          direction: ltr;
        }
        .img-marquee-thumb {
          flex-shrink: 0;
          width: 260px;
          height: 180px;
          border-radius: 12px;
          overflow: hidden;
          display: block;
        }
        .img-marquee-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}</style>

      <div
        className="overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
        }}
      >
        {/*
          Two identical copies in one flex row.
          translateX(-50%) moves exactly one copy width — the browser
          computes the real width so there is ZERO drift and ZERO gap.
          When the animation resets to 0, copy 2 is at the same position
          copy 1 started — invisible seam, infinite loop.
        */}
        <div className="img-marquee-track">
          {[...photos, ...photos].map((src, i) => (
            <Link key={i} href="/media" className="img-marquee-thumb">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
