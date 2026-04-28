export interface Testimonial {
  id: string;
  name: string;
  nameAr: string;
  role: string;
  company: string;
  avatar: string | null;
  quote: string;
  quoteAr: string;
  rating: 1 | 2 | 3 | 4 | 5;
  courseId: string | null;
}
