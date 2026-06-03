export interface Project {
  id: number
  title: string
  subtitle: string
  description: string
  technologies: string[]
  functionality: string
  link?: string
  github?: string
  images?: string[]
  type: string
  status: "Live" | "In Development" | "Maintenance"
  isPrivate?: boolean
  metrics?: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: "BeeNorth3D",
    subtitle: "E-commerce for Custom 3D-Printed Home Decor & Gifts",
    description:
      "Full-stack e-commerce platform based in Sarnia, Ontario, specializing in custom 3D-printed home decor and personalized gifts. Built with a modern Next.js 16 frontend and a high-performance Rust backend, the platform handles real-time product customization, secure payments, automated shipping, and a complete admin dashboard.",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Rust",
      "Axum",
      "PostgreSQL",
      "Stripe",
      "Canada Post API",
    ],
    functionality:
      "Product catalog with dynamic customization fields, persistent cart, Stripe Payment Intents checkout, real-time Canada Post shipping rates and label generation, order tracking, admin dashboard with analytics, blog CMS, newsletter system, and automated CI/CD deployment.",
    link: "https://beenorth3d.com",
    images: [
      "/projects/beenorth-home.png",
      "/projects/beenorth-products.png",
      "/projects/beenorth-product-detail.png",
    ],
    type: "E-commerce Platform",
    status: "Live",
    metrics: [
      "Full CI/CD with automated rollback",
      "Rate limiting & CSRF protection",
      "SEO-optimized with dynamic sitemap",
    ],
  },
  {
    id: 2,
    title: "Igreja Manager",
    subtitle: "SaaS Church Management Platform",
    description:
      "Comprehensive SaaS platform for church administration with multi-tenant architecture supporting multiple congregations. Features granular RBAC, financial control, member management, Sunday School (EBD), ministries, and a gamified Bible Academy learning module. The backend is built in Rust with Clean Architecture, and the frontend is a cross-platform Flutter application.",
    technologies: [
      "Rust",
      "Actix-Web",
      "Flutter",
      "Dart",
      "PostgreSQL",
      "Redis",
      "Stripe",
      "Cloudinary",
      "Mailgun",
    ],
    functionality:
      "Multi-tenant church management with member CRUD, family trees, financial control (tithes, offerings, campaigns), asset management, Sunday School attendance and grading, ministry scheduling, Bible Academy gamified tracks, comprehensive reporting, and multi-language support (PT/EN/ES).",
    link: "https://igreja.drumblow.com",
    images: [
      "/projects/igreja-login.png",
    ],
    type: "SaaS Platform",
    status: "Live",
    isPrivate: true,
    metrics: [
      "53,000+ lines of Rust backend",
      "592 automated tests passing",
      "41+ database migrations",
    ],
  },
  {
    id: 3,
    title: "Drumblow Invoice",
    subtitle: "Professional Invoice & Quote Management for Canadian Businesses",
    description:
      "Multi-platform business application for professional invoice and quote management targeting Canadian businesses. Built with Flutter for Web, Android, and iOS from a single codebase, backed by a Rust API. Features native PDF generation, secure authentication, and a freemium billing model.",
    technologies: [
      "Flutter",
      "Dart",
      "Rust",
      "PostgreSQL",
      "Stripe",
      "Google Sign-In",
      "Apple Sign-In",
      "PDF Generation",
    ],
    functionality:
      "Create and manage professional invoices and quotes, generate PDFs natively, share via email, print directly, authenticate with Google or Apple, manage clients and items, track payment status, and handle subscriptions via Stripe and Google Play Billing.",
    link: "https://invoice.drumblow.com",
    images: [
      "/projects/invoice-landing.png",
      "/projects/invoice-mobile.png",
      "/projects/invoice-feature.png",
    ],
    type: "Business Application",
    status: "Live",
    isPrivate: true,
    metrics: [
      "Security audit: 21 vulnerabilities remediated",
      "Freemium + trial business model",
      "Cross-platform: Web, Android, iOS",
    ],
  },
]
