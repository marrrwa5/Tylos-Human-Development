import { MetadataRoute } from "next";
import { getCourses } from "@/data/courses";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tylosthd.com";
  const courses = getCourses();

  const staticRoutes = [
    "/",
    "/about",
    "/courses",
    "/services",
    "/corporate",
    "/media",
    "/faqs",
    "/contact",
    "/upcoming-batches",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));

  const courseRoutes = courses.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...courseRoutes];
}
