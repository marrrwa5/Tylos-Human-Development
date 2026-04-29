import { Playfair_Display, Inter, Lalezar, Noto_Sans_Arabic } from "next/font/google";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const lalezar = Lalezar({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic-heading",
  display: "swap",
  weight: ["400"],
});

export const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});
