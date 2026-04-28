"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { NAV_LINKS } from "@/data/navigation";
import { getIndividualServices } from "@/data/services";
import NewsletterForm from "@/components/shared/NewsletterForm";
import { useLanguage } from "@/context/LanguageContext";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.87a8.18 8.18 0 004.78 1.52V7a4.85 4.85 0 01-1.01-.31z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  const services = getIndividualServices();
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main grid */}
      <div className="container-wide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">

        {/* Col 1: Logo + contact + social */}
        <div className="space-y-5">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/TylosLogoWhiteBG.png"
              alt="Tylos Human Development Center"
              width={100}
              height={40}
              className="h-10 w-auto object-contain brightness-[5] opacity-90"
            />
          </div>
          <p className="text-[10px] text-white/40 tracking-wider uppercase -mt-2">{t("Established 2002", "تأسس عام 2002")}</p>

          <p className="text-white/55 text-sm leading-relaxed">
            {t(
              "Bahrain training center empowering individuals and organizations since 2002 with internationally accredited programs.",
              "مركز تدريب بحريني يمكّن الأفراد والمؤسسات منذ عام 2002 ببرامج معتمدة دولياً."
            )}
          </p>

          {/* Contact info */}
          <div className="space-y-2.5 text-sm">
            <div className="flex items-start gap-2 text-white/65">
              <MapPin className="h-4 w-4 text-turquoise flex-shrink-0 mt-0.5" />
              <span>Office 21, 2nd Floor, Building 698, Road 7325, Block 473, Abu Saiba, Bahrain</span>
            </div>
            <div className="flex items-center gap-2 text-white/65">
              <Phone className="h-4 w-4 text-turquoise flex-shrink-0" />
              <a href="tel:+97317626484" className="hover:text-turquoise transition-colors">
                1762 6484
              </a>
            </div>
            <div className="flex items-center gap-2 text-white/65">
              <Mail className="h-4 w-4 text-turquoise flex-shrink-0" />
              <a href="mailto:info@thd.bh" className="hover:text-turquoise transition-colors">
                info@thd.bh
              </a>
            </div>
            <div className="flex items-start gap-2 text-white/65">
              <Clock className="h-4 w-4 text-turquoise flex-shrink-0 mt-0.5" />
              <div className="text-xs space-y-0.5">
                <div>{t("Sun – Wed: 8:30 AM – 5:00 PM", "الأحد – الأربعاء: 8:30 ص – 5:00 م")}</div>
                <div>{t("Thursday: 8:30 AM – 4:00 PM", "الخميس: 8:30 ص – 4:00 م")}</div>
                <div className="text-white/40">{t("Fri – Sat: Closed", "الجمعة – السبت: مغلق")}</div>
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div>
            <p className="text-white/35 text-xs uppercase tracking-wider mb-3">{t("Follow Us", "تابعنا")}</p>
            <div className="flex items-center gap-3">
              <a
                href="https://api.whatsapp.com/send?phone=97334655220"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4 text-white/70" />
              </a>
              <a
                href="https://www.instagram.com/thd_bh/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <InstagramIcon className="h-4 w-4 text-white/70" />
              </a>
              <a
                href="https://www.linkedin.com/company/thd-bh/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <LinkedInIcon className="h-4 w-4 text-white/70" />
              </a>
              <a
                href="https://www.tiktok.com/@thd_bh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <TikTokIcon className="h-4 w-4 text-white/70" />
              </a>
            </div>
          </div>
        </div>

        {/* Col 2: Useful Links */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-turquoise rounded-full" />
            {t("Useful Links", "روابط مفيدة")}
          </h4>
          <ul className="space-y-2.5">
            {NAV_LINKS.map(({ href, label, labelAr }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-white/55 hover:text-turquoise text-sm transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-turquoise/50 group-hover:bg-turquoise transition-colors" />
                  {lang === "ar" ? labelAr : label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Services + Accreditations */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-turquoise rounded-full" />
            {t("Our Services", "خدماتنا")}
          </h4>
          <ul className="space-y-2.5">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  href={`/services#${service.slug}`}
                  className="text-white/55 hover:text-turquoise text-sm transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-turquoise/50 group-hover:bg-turquoise transition-colors" />
                  {service.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/corporate"
                className="text-white/55 hover:text-turquoise text-sm transition-colors duration-200 flex items-center gap-2 group"
              >
                <span className="w-1 h-1 rounded-full bg-turquoise/50 group-hover:bg-turquoise transition-colors" />
                Corporate Training
              </Link>
            </li>
          </ul>

          {/* Accreditations */}
          <div className="mt-6">
            <h5 className="text-white/40 text-xs uppercase tracking-wider mb-3">{t("Accredited By", "معتمد من")}</h5>
            <div className="flex flex-wrap gap-2">
              {["NOCN", "Cisco", "IAB", "OCN"].map((acc) => (
                <span
                  key={acc}
                  className="px-2.5 py-1 text-xs border border-turquoise/30 text-turquoise rounded font-medium"
                >
                  {acc}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Col 4: Newsletter */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-turquoise rounded-full" />
            {t("Stay Updated", "ابقَ على اطلاع")}
          </h4>
          <p className="text-white/55 text-sm mb-4 leading-relaxed">
            {t(
              "Get the latest course announcements, special offers, and career development tips delivered to your inbox.",
              "احصل على أحدث إعلانات الدورات والعروض الخاصة ونصائح التطوير المهني في بريدك الإلكتروني."
            )}
          </p>
          <NewsletterForm />
        </div>
      </div>

      {/* Bottom bar — centered copyright */}
      <div className="border-t border-white/10">
        <div className="container-wide py-5">
          <p className="text-white/35 text-xs text-center">
            {t(
              "© 2026 Tylos Human Development Center. All rights reserved. Kingdom of Bahrain.",
              "© 2026 مركز تايلوس للتنمية البشرية. جميع الحقوق محفوظة. مملكة البحرين."
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
