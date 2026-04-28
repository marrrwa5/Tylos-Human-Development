import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getCourseBySlug, getCourses } from "@/data/courses";
import {
  CheckCircle,
  Clock,
  Calendar,
  Globe,
  Users,
  Award,
  Download,
  MessageCircle,
  ArrowLeft,
  BookOpen,
  Target,
  GraduationCap,
  Briefcase,
  ClipboardList,
  BadgeCheck,
  ChevronRight,
} from "lucide-react";
import CTAButton from "@/components/shared/CTAButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Badge } from "@/components/ui/badge";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const courses = getCourses();
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Course Not Found" };
  return {
    title: `${course.title} | Tylos Human Development Center`,
    description: course.description,
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const startDate = new Date(course.startDate).toLocaleDateString("en-BH", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[#020b13]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(0,179,164,0.18) 0%, rgba(0,87,168,0.14) 30%, rgba(2,11,19,0.95) 65%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,179,164,0.35) 1px, transparent 0)",
            backgroundSize: "28px 28px",
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.05) 50%, transparent 80%)",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.05) 50%, transparent 80%)",
          }}
        />

        <div className="relative container-wide">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-white/50 hover:text-turquoise text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Courses
          </Link>

          <div className="flex flex-wrap gap-2 mb-5">
            <Badge className="bg-white/10 text-white border-white/20 text-xs">
              {course.category}
            </Badge>
            {course.isFunded && (
              <Badge className="bg-green-500/90 text-white border-green-600 text-xs">
                100% Funded
              </Badge>
            )}
            {course.accreditationBodies.map((b) => (
              <Badge key={b} className="bg-turquoise/20 text-turquoise border-turquoise/30 text-xs">
                {b} Accredited
              </Badge>
            ))}
          </div>

          <h1
            className="font-bold text-3xl md:text-5xl text-white mb-5 max-w-3xl leading-tight"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {course.title}
          </h1>

          <p className="text-white/65 text-base md:text-lg max-w-2xl leading-relaxed mb-8">
            {course.description}
          </p>

          {/* Quick stat pills */}
          <div className="flex flex-wrap gap-4">
            {[
              { icon: Clock, label: course.duration },
              { icon: Globe, label: course.language },
              { icon: BookOpen, label: course.level },
              { icon: GraduationCap, label: course.certificateType },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-4 py-2 text-white/80 text-sm"
              >
                <Icon className="h-3.5 w-3.5 text-turquoise flex-shrink-0" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Course Image + Content ── */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* ── LEFT: Main content ── */}
            <div className="lg:col-span-2 space-y-8">

              {/* Course image */}
              <ScrollReveal>
                <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020b13]/60 via-transparent to-transparent" />
                </div>
              </ScrollReveal>

              {/* Programme Overview */}
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-turquoise/10 flex items-center justify-center flex-shrink-0">
                      <Target className="h-5 w-5 text-turquoise" />
                    </div>
                    <h2 className="font-bold text-xl text-gray-900" style={{ fontFamily: "var(--font-sans)" }}>
                      Programme Overview
                    </h2>
                  </div>
                  <p className="text-gray-500 leading-relaxed text-sm">{course.description}</p>
                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Duration", value: course.duration },
                      { label: "Language", value: course.language },
                      { label: "Level", value: course.level },
                      { label: "Start Date", value: new Date(course.startDate).toLocaleDateString("en-BH", { month: "short", day: "numeric", year: "numeric" }) },
                    ].map(({ label, value }) => (
                      <div key={label} className="bg-gray-50 rounded-xl p-3">
                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{label}</div>
                        <div className="text-sm font-semibold text-gray-800">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Learning Outcomes */}
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-blue-brand/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-blue-brand" />
                    </div>
                    <h2 className="font-bold text-xl text-gray-900" style={{ fontFamily: "var(--font-sans)" }}>
                      Learning Outcomes
                    </h2>
                  </div>
                  <p className="text-gray-400 text-sm mb-5">
                    Upon successful completion of this programme, participants will be able to:
                  </p>
                  <ul className="space-y-3">
                    {course.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-turquoise/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-turquoise text-xs font-bold">{i + 1}</span>
                        </div>
                        <span className="text-gray-600 text-sm leading-relaxed">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Who Is This For */}
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-turquoise/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-turquoise" />
                    </div>
                    <h2 className="font-bold text-xl text-gray-900" style={{ fontFamily: "var(--font-sans)" }}>
                      Who Should Attend?
                    </h2>
                  </div>
                  <p className="text-gray-400 text-sm mb-5">
                    This programme is designed for:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {course.targetAudience.map((ta) => (
                      <div
                        key={ta}
                        className="flex items-start gap-3 p-4 rounded-xl bg-turquoise/5 border border-turquoise/10"
                      >
                        <ChevronRight className="h-4 w-4 text-turquoise flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm leading-snug">{ta}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Entry Requirements */}
              {course.prerequisites.length > 0 && (
                <ScrollReveal>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-9 h-9 rounded-lg bg-blue-brand/10 flex items-center justify-center flex-shrink-0">
                        <ClipboardList className="h-5 w-5 text-blue-brand" />
                      </div>
                      <h2 className="font-bold text-xl text-gray-900" style={{ fontFamily: "var(--font-sans)" }}>
                        Entry Requirements
                      </h2>
                    </div>
                    <ul className="space-y-3">
                      {course.prerequisites.map((pre, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-brand flex-shrink-0 mt-2" />
                          {pre}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              )}

              {/* Assessment Method */}
              {course.assessmentMethod && (
                <ScrollReveal>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-9 h-9 rounded-lg bg-turquoise/10 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="h-5 w-5 text-turquoise" />
                      </div>
                      <h2 className="font-bold text-xl text-gray-900" style={{ fontFamily: "var(--font-sans)" }}>
                        Assessment Method
                      </h2>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{course.assessmentMethod}</p>
                  </div>
                </ScrollReveal>
              )}

              {/* Career Outcomes */}
              {course.careerOutcomes && course.careerOutcomes.length > 0 && (
                <ScrollReveal>
                  <div className="bg-gradient-to-br from-[#020b13] to-[#0a1e35] rounded-2xl p-8 shadow-sm">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-9 h-9 rounded-lg bg-turquoise/20 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="h-5 w-5 text-turquoise" />
                      </div>
                      <h2 className="font-bold text-xl text-white" style={{ fontFamily: "var(--font-sans)" }}>
                        Career Outcomes
                      </h2>
                    </div>
                    <p className="text-white/50 text-sm mb-5">
                      Graduates of this programme are prepared for roles such as:
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {course.careerOutcomes.map((outcome) => (
                        <div
                          key={outcome}
                          className="flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-4 py-2 text-white/80 text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-turquoise" />
                          {outcome}
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* Certification & Accreditation */}
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-blue-brand/10 flex items-center justify-center flex-shrink-0">
                      <Award className="h-5 w-5 text-blue-brand" />
                    </div>
                    <h2 className="font-bold text-xl text-gray-900" style={{ fontFamily: "var(--font-sans)" }}>
                      Certification &amp; Accreditation
                    </h2>
                  </div>
                  <div className="flex items-start gap-5 p-5 rounded-xl bg-blue-brand/5 border border-blue-brand/10">
                    <div className="w-12 h-12 rounded-xl bg-blue-brand/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="h-6 w-6 text-blue-brand" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-base mb-1">{course.certificateType}</div>
                      <div className="text-gray-500 text-sm mb-2">
                        Issued by:{" "}
                        <span className="font-medium text-gray-700">
                          {course.accreditationBodies.length > 0
                            ? course.accreditationBodies.join(" & ")
                            : "Tylos Human Development Center"}
                        </span>
                      </div>
                      {course.isFunded && (
                        <div className="inline-flex items-center gap-1.5 mt-1 text-sm text-green-600 font-medium bg-green-50 border border-green-100 px-3 py-1 rounded-full">
                          <BadgeCheck className="h-3.5 w-3.5" />
                          100% Funded
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

            </div>

            {/* ── RIGHT: Sticky sidebar ── */}
            <div className="lg:col-span-1">
              <ScrollReveal direction="right">
                <div className="sticky top-[88px] space-y-4">

                  {/* Enroll / price card */}
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">

                    {/* Price / funding */}
                    <div className="mb-5 pb-5 border-b border-gray-100">
                      {course.isFunded ? (
                        <div>
                          <div
                            className="text-3xl font-black text-green-600 mb-1"
                            style={{ fontFamily: "var(--font-sans)" }}
                          >
                            100% Funded
                          </div>
                          <div className="text-sm text-gray-500">
                            This programme is fully covered
                          </div>
                          <div className="mt-3 text-xs text-gray-400 leading-relaxed">
                            Eligible Bahraini nationals may attend at no cost through the
                            government funding scheme.
                          </div>
                        </div>
                      ) : course.price !== null ? (
                        <div>
                          <div
                            className="text-4xl font-black text-gray-900 mb-1"
                            style={{ fontFamily: "var(--font-sans)" }}
                          >
                            BD {course.price}
                          </div>
                          <div className="text-sm text-gray-500">per participant</div>
                        </div>
                      ) : (
                        <div className="text-gray-500 text-sm">Contact us for pricing</div>
                      )}
                    </div>

                    {/* Details list */}
                    <div className="space-y-3 mb-6">
                      {[
                        { Icon: Clock, label: "Duration", value: course.duration },
                        { Icon: Calendar, label: "Start Date", value: startDate },
                        { Icon: Globe, label: "Language", value: course.language },
                        { Icon: BookOpen, label: "Level", value: course.level },
                        { Icon: Target, label: "Schedule", value: course.schedule },
                      ].map(({ Icon, label, value }) => (
                        <div key={label} className="flex items-start gap-3 text-sm">
                          <Icon className="h-4 w-4 text-turquoise flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-gray-400 text-xs block">{label}</span>
                            <span className="text-gray-700 font-medium">{value}</span>
                          </div>
                        </div>
                      ))}
                      {course.slotsAvailable !== null && (
                        <div className="flex items-start gap-3 text-sm">
                          <Users className="h-4 w-4 text-turquoise flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-gray-400 text-xs block">Availability</span>
                            <span
                              className={`font-medium ${
                                course.slotsAvailable <= 5 ? "text-red-500" : "text-gray-700"
                              }`}
                            >
                              {course.slotsAvailable <= 5
                                ? `Only ${course.slotsAvailable} seats remaining!`
                                : `${course.slotsAvailable} seats available`}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* CTAs */}
                    <div className="space-y-3">
                      <CTAButton
                        href={`/contact?course=${course.slug}`}
                        variant="primary"
                        size="lg"
                        className="w-full"
                      >
                        Enroll Now
                      </CTAButton>
                      <CTAButton
                        href={`https://api.whatsapp.com/send?phone=97334655220&text=Hello, I am interested in the ${encodeURIComponent(course.title)} programme.`}
                        variant="outline"
                        size="md"
                        className="w-full"
                        external
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Ask on WhatsApp
                      </CTAButton>
                      {course.brochureUrl && (
                        <CTAButton
                          href={course.brochureUrl}
                          variant="outline"
                          size="md"
                          className="w-full"
                          external
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download Brochure
                        </CTAButton>
                      )}
                    </div>
                  </div>

                  {/* Certificate badge */}
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <Award className="h-4 w-4 text-turquoise" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Certificate Awarded
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-gray-800 leading-snug">{course.certificateType}</p>
                    {course.accreditationBodies.length > 0 && (
                      <p className="text-xs text-gray-400 mt-1">
                        Accredited by: {course.accreditationBodies.join(", ")}
                      </p>
                    )}
                  </div>

                  {/* Tags */}
                  {course.tags.length > 0 && (
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                        Related Topics
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {course.tags.map((tag) => (
                          <Link
                            key={tag}
                            href={`/courses?search=${encodeURIComponent(tag)}`}
                            className="text-xs px-2.5 py-1 rounded-full bg-gray-100 hover:bg-turquoise/10 hover:text-turquoise text-gray-600 transition-colors"
                          >
                            #{tag}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container-wide text-center">
          <ScrollReveal>
            <h2
              className="font-bold text-2xl md:text-3xl text-gray-900 mb-3"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Ready to take the next step?
            </h2>
            <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">
              Enroll today or speak with an advisor who can guide you to the right programme.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <CTAButton href={`/contact?course=${course.slug}`} variant="primary" size="lg">
                Enroll Now
              </CTAButton>
              <CTAButton href="/courses" variant="outline" size="lg">
                Browse All Courses
              </CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
