import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "João Ewerton — Full-Stack Developer | Rust, Next.js, Flutter",
  description:
    "Full-stack software developer building production-ready systems with Rust, Next.js, and Flutter. Portfolio featuring e-commerce platforms, SaaS applications, and cross-platform business tools.",
  keywords: [
    "Full-Stack Developer",
    "Rust",
    "Next.js",
    "Flutter",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Software Engineer",
    "Web Developer",
    "Mobile Developer",
    "Sarnia Ontario",
  ],
  authors: [{ name: "João Roberto Alvares Ewerton" }],
  creator: "João Roberto Alvares Ewerton",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.drumblow.com",
    siteName: "João Ewerton Portfolio",
    title: "João Ewerton — Full-Stack Developer",
    description:
      "Building production-ready systems with Rust, Next.js, and Flutter. E-commerce, SaaS, and cross-platform business applications.",
    images: [
      {
        url: "https://res.cloudinary.com/djc3smoxw/image/upload/v1752117069/1733256468717_emkw6h.jpg",
        width: 400,
        height: 400,
        alt: "João Ewerton",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "João Ewerton — Full-Stack Developer",
    description:
      "Building production-ready systems with Rust, Next.js, and Flutter.",
    images: ["https://res.cloudinary.com/djc3smoxw/image/upload/v1752117069/1733256468717_emkw6h.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
