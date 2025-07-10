import type { Metadata } from 'next'
import './globals.css'
import { Inter } from "next/font/google"

export const metadata: Metadata = {
  title: "João Ewerton - Portfolio",
  description: "Computer Programmer specialized in Digital Systems & Automation.",
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
