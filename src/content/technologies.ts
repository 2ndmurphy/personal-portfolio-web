export type TechnologyEvidence = {
  label: string;
  href: string;
  provenance:
    | "Public implementation"
    | "Approved sanitized artifact"
    | "Independent reconstruction";
};

export type Technology = {
  id: string;
  name: string;
  description: string;
  icons: { slug: string; monogram: string }[];
};

export type TechnologyGroup = {
  id: string;
  title: string;
  items: Technology[];
};

export const technologyGroups: TechnologyGroup[] = [
  {
    id: "languages",
    title: "Languages",
    items: [
      {
        id: "javascript-typescript",
        name: "JavaScript / TypeScript",
        description: "Programming languages",
        icons: [
          { slug: "javascript", monogram: "JS" },
          { slug: "typescript", monogram: "TS" },
        ],
      },
      {
        id: "csharp",
        name: "C#",
        description: ".NET development",
        icons: [{ slug: "csharp", monogram: "C#" }],
      },
      {
        id: "python",
        name: "Python",
        description: "General-purpose programming",
        icons: [{ slug: "python", monogram: "Py" }],
      },
    ],
  },
  {
    id: "frameworks",
    title: "Libraries & frameworks",
    items: [
      {
        id: "react",
        name: "React",
        description: "User interfaces",
        icons: [{ slug: "react", monogram: "Re" }],
      },
      {
        id: "aspnet",
        name: "ASP.NET",
        description: "Web applications & APIs",
        icons: [{ slug: "dotnet", monogram: ".NET" }],
      },
      {
        id: "fastapi",
        name: "FastAPI",
        description: "Python APIs",
        icons: [{ slug: "fastapi", monogram: "FA" }],
      },
    ],
  },
  {
    id: "data-tools",
    title: "Data & tools",
    items: [
      {
        id: "postgresql",
        name: "PostgreSQL",
        description: "Relational database",
        icons: [{ slug: "postgresql", monogram: "PG" }],
      },
      {
        id: "git",
        name: "Git",
        description: "Version control",
        icons: [{ slug: "git", monogram: "Git" }],
      },
    ],
  },
];

export const technologyEvidence: TechnologyEvidence[] = [];
