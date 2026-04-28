export const NAV_LINKS = [
  { label: "Home",             labelAr: "الرئيسية",            href: "/" },
  { label: "About Us",         labelAr: "من نحن",              href: "/about" },
  { label: "Courses",          labelAr: "الدورات",             href: "/courses" },
  { label: "Services",         labelAr: "الخدمات",             href: "/services" },
  { label: "Corporate",        labelAr: "تدريب الشركات",       href: "/corporate" },
  { label: "Media",            labelAr: "مركز الإعلام",        href: "/media" },
  { label: "FAQs & Policies",  labelAr: "الأسئلة والسياسات",  href: "/faqs" },
  { label: "Contact",          labelAr: "اتصل بنا",            href: "/contact" },
  {
    label: "Upcoming Batches",
    labelAr: "الدفعات القادمة",
    href: "/upcoming-batches",
  },
] as const;

export const SOCIAL_LINKS = [
  { platform: "whatsapp",  href: "https://api.whatsapp.com/send?phone=97334655220",     label: "WhatsApp" },
  { platform: "instagram", href: "https://www.instagram.com/thd_bh/",                  label: "Instagram" },
  { platform: "linkedin",  href: "https://www.linkedin.com/company/thd-bh/",           label: "LinkedIn" },
  { platform: "tiktok",    href: "https://www.tiktok.com/@thd_bh",                     label: "TikTok" },
] as const;
