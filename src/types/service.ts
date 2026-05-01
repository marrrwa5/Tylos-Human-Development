export interface Service {
  id: string;
  slug: string;
  title: string;
  titleAr: string;
  icon: string;
  description: string;
  descriptionAr: string;
  fullDescription: string;
  fullDescriptionAr?: string;
  benefits: string[];
  benefitsAr?: string[];
  isCorporate: boolean;
}
