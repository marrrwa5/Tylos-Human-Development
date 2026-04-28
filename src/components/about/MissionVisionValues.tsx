import { Target, Eye, Heart } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";

const values = [
  "Continuous Learning & Innovation",
  "Team Spirit",
  "Excellence",
  "Social Responsibility & Sustainability",
  "Perseverance & Determination",
];

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    color: "turquoise",
    content:
      "We strive to enable our partners to achieve excellence by developing human capital through specialized professional training programs. Drawing on our extensive experience and qualified team, we help raise performance levels and support sustainable growth.",
    list: null,
  },
  {
    icon: Eye,
    title: "Our Vision",
    color: "blue",
    content:
      "To be a leading institution dedicated to empowering individuals and developing human capital by delivering high-quality education and training that enhances skills, increases productivity, and creates a sustainable, positive impact in the labor market.",
    list: null,
  },
  {
    icon: Heart,
    title: "Our Core Values",
    color: "turquoise",
    content: null,
    list: values,
  },
];

export default function MissionVisionValues() {
  return (
    <section className="section-padding bg-gray-light/30">
      <div className="container-wide">
        <ScrollReveal>
          <SectionHeading
            title="Mission, Vision & Values"
            subtitle="The principles that guide everything we do at Tylos Human Development Center."
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={card.title} delay={index * 0.15}>
                <div
                  className={`bg-white rounded-2xl p-8 border-t-4 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full ${
                    card.color === "turquoise" ? "border-t-turquoise" : "border-t-blue-brand"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                      card.color === "turquoise" ? "bg-turquoise/10" : "bg-blue-50"
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${
                        card.color === "turquoise" ? "text-turquoise" : "text-blue-brand"
                      }`}
                    />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-4" style={{ fontFamily: "var(--font-sans)" }}>
                    {card.title}
                  </h3>
                  {card.content ? (
                    <p className="text-gray-500 leading-relaxed text-sm">{card.content}</p>
                  ) : (
                    <ul className="space-y-3">
                      {card.list?.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-turquoise flex-shrink-0 mt-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
