import { Service } from "@/types/service";

export const services: Service[] = [
  {
    id: "1",
    slug: "cv-consultation",
    title: "CV Consultation",
    titleAr: "استشارة السيرة الذاتية",
    icon: "FileText",
    description: "Professional CV review and optimization by career experts to help you stand out.",
    descriptionAr: "مراجعة وتحسين السيرة الذاتية بشكل احترافي من قِبل خبراء التوظيف لمساعدتك على التميز.",
    fullDescription:
      "Our career consultants provide comprehensive CV reviews, ensuring your profile stands out to recruiters and hiring managers. We align your CV with industry standards and tailor it to your target roles.",
    benefits: [
      "One-on-one session with a career expert",
      "ATS-optimized formatting and keywords",
      "Role-specific tailoring and positioning",
      "LinkedIn profile alignment",
      "Follow-up revision session included",
    ],
    isCorporate: false,
  },
  {
    id: "2",
    slug: "course-selection-consultation",
    title: "Course Selection Consultation",
    titleAr: "استشارة اختيار الدورة",
    icon: "BookOpen",
    description: "Get personalized guidance to choose the right training program for your career goals.",
    descriptionAr: "احصل على إرشادات شخصية لاختيار البرنامج التدريبي المناسب لأهدافك المهنية.",
    fullDescription:
      "Not sure which course is right for you? Our advisors assess your current skills, career aspirations, and learning preferences to recommend the ideal training pathway and accreditation level.",
    benefits: [
      "Personalized skills assessment",
      "Career pathway mapping",
      "Accreditation and funding guidance",
      "Industry-aligned recommendations",
      "Free initial 30-minute consultation",
    ],
    isCorporate: false,
  },
  {
    id: "3",
    slug: "pre-course-assessment",
    title: "Pre-Course Assessment",
    titleAr: "اختبار التقييم قبل الدورة",
    icon: "ClipboardCheck",
    description: "Measure your current competency level before enrolling to ensure the right fit.",
    descriptionAr: "قياس مستوى كفاءتك الحالية قبل التسجيل لضمان الملاءمة الصحيحة.",
    fullDescription:
      "Our pre-enrollment assessments evaluate your existing knowledge and skills to ensure you're placed in the most appropriate course level. This saves time and maximizes your learning ROI.",
    benefits: [
      "Online or in-person assessment options",
      "Instant competency report",
      "Course level recommendation",
      "Identifies skills gaps to address",
      "Prevents mismatched enrollment",
    ],
    isCorporate: false,
  },
  {
    id: "4",
    slug: "student-support",
    title: "Student Support",
    titleAr: "دعم الطلاب",
    icon: "HeadphonesIcon",
    description: "Dedicated support throughout your learning journey from enrollment to certification.",
    descriptionAr: "دعم مخصص طوال رحلتك التعليمية من التسجيل حتى الحصول على الشهادة.",
    fullDescription:
      "From the moment you enroll, our student support team is with you every step of the way. We handle scheduling, materials, exam registration, and any learning challenges you may face.",
    benefits: [
      "Dedicated point of contact",
      "Learning materials and resources",
      "Exam registration assistance",
      "Progress tracking and feedback",
      "Post-course certification support",
    ],
    isCorporate: false,
  },
  {
    id: "5",
    slug: "career-guidance",
    title: "Career Guidance",
    titleAr: "التوجيه المهني",
    icon: "Compass",
    description: "Strategic career planning and job search support to help you land your next role.",
    descriptionAr: "التخطيط الاستراتيجي للمسيرة المهنية ودعم البحث عن عمل لمساعدتك في الحصول على دورك القادم.",
    fullDescription:
      "Beyond training, we support your career journey with mock interviews, job search strategies, employer connections, and ongoing mentorship to help you achieve your professional goals.",
    benefits: [
      "Mock interview preparation",
      "Job search strategy development",
      "Employer network access",
      "Salary negotiation guidance",
      "Ongoing mentorship sessions",
    ],
    isCorporate: false,
  },
  {
    id: "6",
    slug: "corporate-training-solutions",
    title: "Corporate Training Solutions",
    titleAr: "حلول التدريب المؤسسي",
    icon: "Building2",
    description: "Tailored training programs designed to upskill your entire workforce at scale.",
    descriptionAr: "برامج تدريبية مصممة خصيصاً لتطوير مهارات قوتك العاملة بالكامل على نطاق واسع.",
    fullDescription:
      "We design and deliver bespoke training solutions for organizations across Bahrain. Our corporate programs are customized to your industry, culture, and strategic objectives.",
    benefits: [
      "Customized curriculum development",
      "On-site or virtual delivery",
      "Group discounts and packages",
      "Progress reporting and ROI measurement",
      "Flexible scheduling around operations",
    ],
    isCorporate: true,
  },
];

export function getServices(): Service[] {
  return services;
}

export function getIndividualServices(): Service[] {
  return services.filter((s) => !s.isCorporate);
}
