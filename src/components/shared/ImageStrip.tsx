"use client";

import { useRef, useEffect } from "react";
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

const IMG_W = 260;
const GAP   = 16;
const ONE_SET = photos.length * (IMG_W + GAP); // exact pixel width of one copy

export default function ImageStrip() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef   = useRef(0);
  const rafRef   = useRef<number>(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const tick = () => {
      posRef.current += 0.6;                    // speed: px per frame (~60fps = ~36px/s)
      if (posRef.current >= ONE_SET) {
        posRef.current -= ONE_SET;              // reset by exactly one set — zero gap
      }
      track.style.transform = `translateX(-${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Render 3 copies so there is always content visible even at max offset
  const items = [...photos, ...photos, ...photos];

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          overflow: "hidden",
        }}
      >
        <div
          ref={trackRef}
          style={{
            display: "flex",
            flexWrap: "nowrap",
            direction: "ltr",
            willChange: "transform",
          }}
        >
          {items.map((src, i) => (
            <Link
              key={i}
              href="/media"
              style={{
                flexShrink: 0,
                width: IMG_W,
                height: 180,
                marginRight: GAP,
                borderRadius: 12,
                overflow: "hidden",
                display: "block",
                textDecoration: "none",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                draggable={false}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
