import { Testimonial } from "@/types/testimonial";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ahmed Al-Mannai",
    nameAr: "أحمد المنعي",
    role: "Customer Service Manager",
    company: "Bapco Energies",
    avatar: null,
    quote:
      "Tylos Human Development Center completely transformed how our team handles customer interactions. The NOCN-certified Customer Service Excellence program was practical, engaging, and immediately applicable to our daily operations.",
    quoteAr:
      "مركز تايلوس لتنمية الإنسان غيّر تماماً طريقة تعامل فريقنا مع تفاعلات العملاء. كان برنامج التميز في خدمة العملاء عملياً وجذاباً وقابلاً للتطبيق فوراً.",
    rating: 5,
    courseId: "1",
  },
  {
    id: "2",
    name: "Fatima Al-Khalifa",
    nameAr: "فاطمة الخليفة",
    role: "HR Director",
    company: "Aluminium Bahrain (ALBA)",
    avatar: null,
    quote:
      "The Strategic HR Management course gave me a fresh perspective on aligning people strategy with business objectives. The instructors brought real-world experience that made every session valuable.",
    quoteAr:
      "أعطاني مقرر إدارة الموارد البشرية الاستراتيجية منظوراً جديداً لمواءمة استراتيجية الأفراد مع أهداف الأعمال. أحضر المدربون خبرة واقعية جعلت كل جلسة قيّمة.",
    rating: 5,
    courseId: "4",
  },
  {
    id: "3",
    name: "Mohammed Hassan",
    nameAr: "محمد حسن",
    role: "IT Network Engineer",
    company: "Batelco",
    avatar: null,
    quote:
      "I passed the Cisco CCNA exam on my first attempt after completing the course at Tylos. The hands-on lab sessions and the instructors' guidance made complex networking concepts easy to understand.",
    quoteAr:
      "اجتزت امتحان Cisco CCNA من المحاولة الأولى بعد إتمام المقرر في تايلوس. جعلت الجلسات العملية في المختبر وإرشادات المدربين المفاهيم المعقدة سهلة الفهم.",
    rating: 5,
    courseId: "5",
  },
  {
    id: "4",
    name: "Sara Al-Zayani",
    nameAr: "سارة الزياني",
    role: "Marketing Specialist",
    company: "GFH Financial Group",
    avatar: null,
    quote:
      "The Digital Marketing course at Tylos was exactly what I needed to transition from traditional to digital marketing. Within weeks of completing it, I had launched my first successful Google Ads campaign.",
    quoteAr:
      "كان مقرر التسويق الرقمي في تايلوس ما احتجته تماماً للانتقال من التسويق التقليدي إلى الرقمي. في غضون أسابيع من إتمامه، أطلقت أول حملة إعلانات Google ناجحة.",
    rating: 5,
    courseId: "3",
  },
  {
    id: "5",
    name: "Yusuf Abdulla",
    nameAr: "يوسف عبدالله",
    role: "Operations Manager",
    company: "Nass Corporation",
    avatar: null,
    quote:
      "Excellent training environment, professional instructors, and internationally recognized certifications. Tylos has been our go-to partner for employee development for over five years.",
    quoteAr:
      "بيئة تدريب ممتازة ومدربون محترفون وشهادات معترف بها دولياً. كان تايلوس شريكنا المفضل لتطوير الموظفين لأكثر من خمس سنوات.",
    rating: 5,
    courseId: null,
  },
  {
    id: "6",
    name: "Noura Al-Dosari",
    nameAr: "نورة الدوسري",
    role: "Fresh Graduate",
    company: "University of Bahrain",
    avatar: null,
    quote:
      "As a fresh graduate, Tylos helped me build the professional skills that my degree couldn't provide. The career guidance service was particularly valuable in preparing me for the job market.",
    quoteAr:
      "بصفتي خريجة حديثة، ساعدني تايلوس على بناء المهارات المهنية التي لم تستطع شهادتي تقديمها. كانت خدمة التوجيه المهني ذات قيمة خاصة في إعدادي لسوق العمل.",
    rating: 4,
    courseId: null,
  },
];

export function getTestimonials(): Testimonial[] {
  return testimonials;
}
