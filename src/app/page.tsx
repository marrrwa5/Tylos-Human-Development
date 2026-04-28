import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AudienceSegments from "@/components/home/AudienceSegments";
import AccreditationLogos from "@/components/home/AccreditationLogos";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import AboutPreview from "@/components/home/AboutPreview";
import UpcomingCourses from "@/components/home/UpcomingCourses";
import CourseAdvisor from "@/components/home/CourseAdvisor";
import ServicesPreview from "@/components/home/ServicesPreview";
import ClientLogos from "@/components/home/ClientLogos";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Tylos Human Development Center | Bahrain's Premier Training Center",
  description:
    "Internationally accredited training programs in Bahrain since 2002. NOCN, Cisco, and IAB certified courses in Business, IT, HR, Marketing, AI, and more. All programs 100% funded.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AudienceSegments />
      <AccreditationLogos />
      <FeaturedCourses />
      <AboutPreview />
      <UpcomingCourses />
      <CourseAdvisor />
      <ServicesPreview />
      <ClientLogos />
      <Testimonials />
      <CTABanner />
    </>
  );
}
