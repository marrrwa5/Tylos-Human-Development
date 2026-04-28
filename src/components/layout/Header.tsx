"use client";

import Image from "next/image";
import Link from "next/link";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import { useScrolled } from "@/hooks/useScrolled";

export default function Header() {
  const scrolled = useScrolled(20);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#1d1c3a] ${
        scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.4)]" : ""
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center py-3 gap-6">
          {/* LEFT: Logo */}
          <Link href="/" aria-label="Tylos Human Development Center — Home" className="flex-shrink-0 -ml-8">
            <Image
              src="/images/TylosLogoWhiteBG.png"
              alt="Tylos Human Development Center"
              width={160}
              height={56}
              className="h-14 w-auto object-contain"
              priority
              quality={100}
            />
          </Link>

          {/* CENTER: Desktop Nav */}
          <div className="flex-1 flex justify-center">
            <NavMenu />
          </div>

          {/* RIGHT: Search + Mobile */}
          <div className="flex items-center gap-2 flex-shrink-0 pr-2">
            <div className="hidden md:block">
              <SearchBar />
            </div>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
