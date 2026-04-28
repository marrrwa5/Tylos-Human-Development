"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/data/navigation";
import { useLanguage } from "@/context/LanguageContext";
import SocialIcons from "./SocialIcons";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { lang } = useLanguage();

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden p-2 rounded-md hover:bg-turquoise/10 transition-colors text-gray-dark"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Overlay + Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.28 }}
              className="fixed top-0 left-0 bottom-0 z-50 w-80 bg-white shadow-2xl flex flex-col lg:hidden"
            >
              {/* Header */}
              <div className="gradient-brand p-6 flex items-center justify-between">
                <div>
                  <div className="text-white font-serif text-xl font-bold">{lang === "ar" ? "مركز تايلوس" : "Tylos HDC"}</div>
                  <div className="text-white/70 text-xs mt-0.5">{lang === "ar" ? "تأسس عام 2002" : "Established 2002"}</div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                {NAV_LINKS.map(({ href, label, labelAr }, index) => {
                  const isActive =
                    pathname === href || (href !== "/" && pathname.startsWith(href));
                  const text = lang === "ar" ? labelAr : label;

                  return (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-turquoise/10 text-turquoise"
                            : "text-gray-700 hover:bg-gray-light hover:text-turquoise"
                        }`}
                      >
                        {isActive && (
                          <div className="w-1.5 h-1.5 rounded-full bg-turquoise flex-shrink-0" />
                        )}
                        {text}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Footer */}
              <div className="border-t border-gray-100 p-4">
                <SocialIcons />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
