"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";

const photos = [
  "/images/media/img_0569.jpg",
  "/images/media/img_0649.jpg",
  "/images/media/img_0650.jpg",
  "/images/media/img_0651.jpg",
  "/images/media/img_0652.jpg",
  "/images/media/img_0653.jpg",
  "/images/media/img_0656.jpg",
  "/images/media/img_0657.jpg",
  "/images/media/img_0658.jpg",
  "/images/media/img_0659.jpg",
  "/images/media/img_0660.jpg",
  "/images/media/img_0661.jpg",
  "/images/media/img_0662.jpg",
  "/images/media/img_0668.jpg",
  "/images/media/img_0671.jpg",
  "/images/media/img_0673.jpg",
  "/images/media/img_0682.jpg",
  "/images/media/img_0684.jpg",
];

const IMG_W = 260;
const GAP   = 16;
const ONE_SET = photos.length * (IMG_W + GAP);

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
