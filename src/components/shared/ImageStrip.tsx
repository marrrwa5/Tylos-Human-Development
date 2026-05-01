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

const IMG_W = 260;   // px width of each image
const GAP   = 16;    // px gap between images
const STEP  = IMG_W + GAP;
const TOTAL = photos.length * STEP; // one full set width

export default function ImageStrip() {
  // Duplicate once — we translate by exactly TOTAL px so the reset is invisible
  const items = [...photos, ...photos];

  return (
    <section className="py-10 bg-white overflow-hidden">
      <style>{`
        @keyframes img-strip {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-${TOTAL}px); }
        }
        .img-strip-inner {
          display: flex;
          direction: ltr;
          /* width must accommodate both copies exactly */
          width: ${items.length * STEP}px;
          animation: img-strip ${Math.round(photos.length * 4.5)}s linear infinite;
          will-change: transform;
        }
        .img-strip-thumb {
          flex-shrink: 0;
          width: ${IMG_W}px;
          height: 180px;
          margin-right: ${GAP}px;
          border-radius: 12px;
          overflow: hidden;
        }
        .img-strip-thumb img {
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
        <div className="img-strip-inner">
          {items.map((src, i) => (
            <Link key={i} href="/media" className="img-strip-thumb" style={{ textDecoration: "none" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
