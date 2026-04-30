"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { NAV_LINKS } from "@/data/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function NavMenu() {
  const pathname = usePathname();
  const { lang } = useLanguage();

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {NAV_LINKS.map(({ href, label, labelAr }) => {
        const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
        const text = lang === "ar" ? labelAr : label;

        return (
          <motion.div
            key={href}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Link
              href={href}
              className={`relative px-3 py-1.5 text-sm rounded-md transition-colors duration-200 whitespace-nowrap ${lang === "ar" ? "font-bold" : "font-medium"} ${
                href === "/upcoming-batches"
                  ? isActive
                    ? "bg-turquoise text-white"
                    : "bg-turquoise/20 text-turquoise border border-turquoise/40 hover:bg-turquoise hover:text-white"
                  : isActive
                  ? "text-turquoise"
                  : "text-white/75 hover:text-turquoise"
              }`}
            >
              {text}
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-turquoise rounded-full"
                />
              )}
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
}
