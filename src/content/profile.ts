export const profile = {
  displayName: "2ndmurphy",
  role: "Software developer",
  introduction:
    "I’m Muhamad Jibril Muqodas, a software developer focused on backend features, APIs, and the business logic that makes software useful.",
  portrait: null as { src: string; alt: string } | null,
  email: null as string | null,
  experience: [
    {
      title: "Professional development",
      label: "Employment",
      description:
        "Working in a professional software development environment, contributing to backend features, API implementation, database integration, and business logic.",
    },
    {
      title: "Learning through real work",
      label: "Nine-month internship",
      description:
        "Practical experience in a software development team, followed by employment. A foundation in taking requirements through to implementation.",
    },
    {
      title: "A practical foundation",
      label: "Vocational education",
      description:
        "A vocational education background and an interest in building practical software solutions.",
    },
  ],
};

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  workType: "Professional" | "Personal";
  contribution: string;
  evidenceLabel: string;
};

// Add records only after the contribution and supporting evidence are reviewed.
export const publishedWork: CaseStudy[] = [];
