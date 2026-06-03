"use client"

import { Github, Globe, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="text-center mb-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Building Production-Ready Systems with Rust, Next.js & Flutter
        </h2>
        <p className="text-lg text-gray-300 mb-8 text-justify leading-relaxed">
          Full-stack software developer specializing in high-performance backends and modern user interfaces. 
          I build complete products — from Rust APIs with Clean Architecture to Next.js 16 frontends and 
          cross-platform Flutter apps. My work spans e-commerce platforms, SaaS business applications, and 
          multi-tenant systems, all delivered with automated testing, CI/CD, and security-first practices.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <a href="https://github.com/Drumblow" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
          >
            <a href="https://www.drumblow.com/" target="_blank" rel="noopener noreferrer">
              <Globe className="w-5 h-5 mr-2" />
              Website
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
          >
            <a href="mailto:fabricappsdrumblow@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Hire Me
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
