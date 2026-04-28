export type CourseCategory =
  | "Business Management"
  | "Information Technology"
  | "Accounting and Finance"
  | "English Language";

export interface Course {
  id: string;
  slug: string;
  title: string;
  titleAr: string;
  category: CourseCategory;
  image: string;
  description: string;
  descriptionAr: string;
  duration: string;
  schedule: string;
  startDate: string;
  language: "English" | "Arabic" | "Bilingual";
  level: string;
  targetAudience: string[];
  price: number | null;
  isFunded: boolean;
  fundingBody: string | null;
  slotsAvailable: number | null;
  certificateType: string;
  accreditationBodies: string[];
  prerequisites: string[];
  objectives: string[];
  careerOutcomes?: string[];
  assessmentMethod?: string;
  brochureUrl: string | null;
  isFeatured: boolean;
  isUpcoming: boolean;
  tags: string[];
}
