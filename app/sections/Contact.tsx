"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Globe } from "lucide-react"

export default function Contact() {
  return (
    <section className="text-center mb-12">
      <Card className="max-w-2xl mx-auto bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Let&apos;s Work Together</CardTitle>
          <CardDescription className="text-gray-400">
            I&apos;m available for development opportunities and collaboration on innovative projects.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <a href="mailto:fabricappsdrumblow@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
            >
              <a href="https://github.com/Drumblow" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
            >
              <a href="https://www.drumblow.com/" target="_blank" rel="noopener noreferrer">
                <Globe className="w-4 h-4 mr-2" />
                Website
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
