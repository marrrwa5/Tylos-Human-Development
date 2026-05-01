"use client";

const photos = [
  { id: "1", src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80", title: "Classroom Training Session" },
  { id: "2", src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80", title: "Corporate Workshop" },
  { id: "3", src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&auto=format&fit=crop&q=80", title: "Graduation Ceremony" },
  { id: "4", src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80", title: "IT & Computing Lab" },
  { id: "5", src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&auto=format&fit=crop&q=80", title: "Group Discussion" },
  { id: "6", src: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=600&auto=format&fit=crop&q=80", title: "Corporate Conference" },
  { id: "7", src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80", title: "Professional Presentation" },
  { id: "8", src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80", title: "Team Learning Session" },
  { id: "9", src: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=600&auto=format&fit=crop&q=80", title: "Board Skills Workshop" },
  { id: "10", src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&auto=format&fit=crop&q=80", title: "Hands-on Practice" },
  { id: "11", src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&auto=format&fit=crop&q=80", title: "Networking Event" },
  { id: "12", src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=80", title: "Training Facility" },
];

export default function ImageStrip() {
  const items = [...photos, ...photos, ...photos];

  return (
    <section className="py-10 bg-[#020b13] overflow-hidden">
      <style>{`
        @keyframes image-strip-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .image-strip-track {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: image-strip-scroll 35s linear infinite;
          will-change: transform;
          direction: ltr;
        }
        .image-strip-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        <div className="image-strip-track">
          {items.map((photo, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-64 h-44 rounded-xl overflow-hidden relative group cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-xs font-semibold">{photo.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
