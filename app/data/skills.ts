export interface SkillCategory {
  category: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Rust", "TypeScript", "JavaScript", "Dart", "SQL"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React", "Flutter", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["Actix-Web", "Axum", "Node.js", "Express", "REST API Design"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "Redis", "SQLx", "Database Design"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "GitHub Actions", "Linux", "Nginx", "Oracle Cloud", "Vercel"],
  },
  {
    category: "Payments & Integrations",
    items: ["Stripe", "Webhooks", "Canada Post API", "Cloudinary", "Mailgun"],
  },
  {
    category: "Security",
    items: ["JWT (Argon2id)", "Rate Limiting", "CSRF Protection", "Input Validation", "Penetration Testing"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Figma"],
  },
]

export interface Competency {
  title: string
  icon: string
  description: string
}

export const competencies: Competency[] = [
  {
    title: "Systems Programming & Backend Architecture",
    icon: "Server",
    description:
      "Building high-performance backends in Rust with Actix-Web and Axum. Experience with Clean Architecture, multi-tenancy, granular RBAC, and compile-time checked SQL queries with SQLx.",
  },
  {
    title: "Modern Frontend Development",
    icon: "Monitor",
    description:
      "Developing responsive web apps with Next.js 16 and React 19, and cross-platform mobile apps with Flutter. Proficient in Tailwind CSS, Zustand, BLoC, and Framer Motion for polished user experiences.",
  },
  {
    title: "E-commerce & SaaS Business Solutions",
    icon: "ShoppingCart",
    description:
      "End-to-end e-commerce and SaaS platforms with Stripe integrations, product catalogs, admin dashboards, analytics, freemium billing models, and third-party API integrations like Canada Post.",
  },
  {
    title: "DevOps, Security & Quality",
    icon: "Shield",
    description:
      "Automated CI/CD pipelines with GitHub Actions, Docker containerization, and cloud deployment. Security-focused development with JWT Argon2id, rate limiting, CSRF protection, and comprehensive automated testing.",
  },
]
