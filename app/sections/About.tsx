"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, TestTube, Globe, Rocket } from "lucide-react"

export default function About() {
  return (
    <section className="mb-12">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">About Me</h3>
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  I&apos;m a passionate Brazilian developer based in Sarnia, Ontario, focused on building 
                  <strong className="text-white"> production-ready software</strong> that solves real business problems. 
                  My expertise lies in the Rust ecosystem for high-performance backends, Next.js for modern web applications, 
                  and Flutter for cross-platform mobile experiences.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Over the past years, I&apos;ve developed and deployed three complete products — an e-commerce platform, 
                  a SaaS church management system, and a professional invoicing application — each with automated testing, 
                  CI/CD pipelines, and rigorous security practices.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I believe in <strong className="text-white">clean architecture, comprehensive testing, and security by design</strong>. 
                  Every project I build follows industry best practices: from compile-time checked SQL queries and zero-unwrap 
                  policies in Rust to automated security audits and penetration testing.
                </p>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <Code className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-400">3</div>
                    <div className="text-sm text-gray-400">Live Products</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <TestTube className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-400">592</div>
                    <div className="text-sm text-gray-400">Tests Passing</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <Globe className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-400">3</div>
                    <div className="text-sm text-gray-400">Languages (PT/EN/ES)</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <Rocket className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-400">53K+</div>
                    <div className="text-sm text-gray-400">Lines of Rust</div>
                  </div>
                </div>
                <div className="text-center">
                  <Badge className="bg-blue-900 text-blue-200 px-4 py-2">Open to New Opportunities</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
