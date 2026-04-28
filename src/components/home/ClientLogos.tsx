import ScrollReveal from "@/components/shared/ScrollReveal";

const clients = [
  { name: "Jamal Showaiter Sweets" },
  { name: "Mirza Alhelli" },
  { name: "Bapco Gas" },
  { name: "Effect Media" },
  { name: "Raffles Al Areen Palace" },
  { name: "Jahez International Co. W.L.L" },
  { name: "Ammar Optician" },
  { name: "LuLu Store Maintenance Equipment Co. WLL" },
  { name: "Lotuse Food Stuff" },
  { name: "Bluebell Computer" },
  { name: "Glam and Glow Beauty Lounge" },
  { name: "Tojjar BH Co. W.L.L" },
  { name: "Ebrahim Yousif Foodstuff" },
  { name: "Alnoor 369 Consulting and Human Development" },
  { name: "Kanoo Vehicle Leasing" },
  { name: "Jawad Business Group" },
  { name: "Dairy Queen" },
  { name: "Twinz Perfume" },
  { name: "Albayan Perfumes" },
  { name: "Atlas Aluminum" },
  { name: "Golden Nooran" },
  { name: "Dr. Nabeel Tammam" },
  { name: "Alawael Kindergarten" },
  { name: "Rsha Contracting" },
];

export default function ClientLogos() {
  return (
    <section className="py-14 bg-[#0d1e35] border-y border-white/10">
      <div className="container-wide">
        <ScrollReveal>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-white/40 mb-10">
            Trusted by Leaders Across Industries
          </p>
        </ScrollReveal>

        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 animate-marquee w-max items-center">
            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-5 py-2.5 rounded-xl bg-white/8 border border-white/10 hover:border-turquoise/30 hover:bg-white/12 transition-all duration-200"
              >
                <span className="text-white/65 font-medium text-sm whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
