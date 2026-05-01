import type { Metadata } from "next";
import "./globals.css";
import { inter, lalezar, notoSansArabic } from "@/lib/fonts";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AIChatbot from "@/components/shared/AIChatbot";
import WhatsAppCTA from "@/components/shared/WhatsAppCTA";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: {
    default: "Tylos Human Development Center | Bahrain",
    template: "%s | Tylos HDC",
  },
  description:
    "Tylos Human Development Center — Bahrain's premier internationally accredited training center, established 2002. NOCN, Cisco, and IAB certified programs in Business, IT, HR, Marketing, AI, and more.",
  keywords: [
    "training center Bahrain",
    "NOCN courses Bahrain",
    "Cisco certification Bahrain",
    "professional development Bahrain",
    "100% funded courses Bahrain",
    "human development",
    "Tylos training",
  ],
  authors: [{ name: "Tylos Human Development Center" }],
  creator: "Tylos Human Development Center",
  openGraph: {
    type: "website",
    locale: "en_BH",
    url: "https://tylosthd.com",
    siteName: "Tylos Human Development Center",
    title: "Tylos Human Development Center | Bahrain",
    description:
      "Empowering individuals and organizations since 2002 with internationally accredited training programs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tylos Human Development Center",
    description: "Internationally accredited training programs in Bahrain.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${lalezar.variable} ${notoSansArabic.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      {/* Blocking script — runs before any paint, prevents Arabic/English flash */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var lang = localStorage.getItem('tylos-lang');
                if (lang === 'ar') {
                  document.documentElement.setAttribute('dir', 'rtl');
                  document.documentElement.setAttribute('lang', 'ar');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <LanguageProvider>
          <Header />
          <main className="flex-1 pt-[72px]">
            {children}
          </main>
          <Footer />
          <AIChatbot />
          <WhatsAppCTA />
          <Toaster position="bottom-right" richColors />
        </LanguageProvider>
      </body>
    </html>
  );
}
