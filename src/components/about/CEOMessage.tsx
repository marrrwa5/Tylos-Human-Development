import { Quote } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function CEOMessage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">

            {/* Photo */}
            <ScrollReveal direction="left" className="lg:col-span-2 lg:-ml-8">
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative">
                  <Image
                    src="/images/chairman.png"
                    alt="Chairman — Tylos Human Development Center"
                    fill
                    className="object-cover object-top"
                  />
                  {/* Bottom name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 px-6 py-5 bg-gradient-to-t from-[#020b13]/90 via-[#020b13]/50 to-transparent">
                    <div className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-sans)" }}>
                      Najeeb Alsayed
                    </div>
                    <div className="text-turquoise text-sm mt-0.5">Executive Manager</div>
                    <div className="text-white/50 text-xs mt-0.5">Tylos Human Development Center</div>
                  </div>
                </div>
                {/* Decorative accents */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl gradient-brand opacity-20 -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-gray-100 -z-10" />
              </div>
            </ScrollReveal>

            {/* Message */}
            <ScrollReveal direction="right" className="lg:col-span-3">
              <div className="relative">
                <div className="w-10 h-1 rounded-full bg-turquoise mb-6" />
                <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-6" style={{ fontFamily: "var(--font-sans)" }}>
                  A Message from Our Executive Manager
                </h2>

                <Quote className="h-10 w-10 text-turquoise/20 mb-4" />

                <div className="space-y-4 text-gray-500 leading-relaxed">
                  <p>
                    Since Tylos Human Development Center opened its doors in 2002, our purpose
                    has remained unchanged: to help individuals grow, and to help organizations
                    perform better through the power of quality training.
                  </p>
                  <p>
                    Over the years we have had the privilege of working with thousands of
                    professionals across Bahrain, from fresh graduates entering the workforce
                    for the first time to experienced managers seeking to sharpen their edge.
                    Every success story strengthens our commitment to what we do.
                  </p>
                  <p>
                    Our programs are internationally accredited, practically focused, and
                    designed with the real demands of today's labor market in mind. We do not
                    just deliver courses; we invest in people's futures.
                  </p>
                  <p>
                    I invite you to explore what Tylos has to offer and take the next step
                    in your professional journey with us.
                  </p>
                </div>

                {/* Signature */}
                <div className="mt-8 flex items-center gap-4">
                  <div>
                    <div className="font-bold text-xl text-gray-900" style={{ fontFamily: "var(--font-sans)" }}>
                      Najeeb Alsayed
                    </div>
                    <div className="text-gray-400 text-sm">Executive Manager, Tylos Human Development Center</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  );
}
