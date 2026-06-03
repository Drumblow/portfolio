"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronLeft, ChevronRight, BarChart3 } from "lucide-react"
import { Project } from "@/app/data/projects"

interface ProjectDetailsProps {
  project: Project | null
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project) {
    return (
      <Card className="bg-gray-900/80 border-gray-800 shadow-xl flex items-center justify-center h-full min-h-96">
        <CardContent className="pt-6">
          <p className="text-gray-400">Select a project to see the details.</p>
        </CardContent>
      </Card>
    )
  }

  const hasImages = project.images && project.images.length > 0
  const imageCount = project.images?.length || 0

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imageCount)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + imageCount) % imageCount)
  }

  return (
    <Card className="bg-gray-900/80 border-gray-800 shadow-xl">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl text-white">{project.title}</CardTitle>
            <CardDescription className="text-gray-400">{project.subtitle}</CardDescription>
          </div>
          <Badge variant="secondary" className="bg-blue-600 text-white">
            {project.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        {hasImages && (
          <div className="relative mb-4 rounded-md overflow-hidden bg-gray-800">
            <div className="relative w-full" style={{ paddingBottom: "50%" }}>
              <Image
                src={project.images![currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>
            {imageCount > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-1.5 rounded-full transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-1.5 rounded-full transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {project.images!.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        idx === currentImageIndex ? "bg-blue-400" : "bg-gray-500"
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        <div>
          <h4 className="font-semibold text-white mb-2">Description</h4>
          <p className="text-gray-300 mb-4">{project.description}</p>

          <h4 className="font-semibold text-white mb-2">Functionality</h4>
          <p className="text-gray-300 mb-4">{project.functionality}</p>

          {project.metrics && project.metrics.length > 0 && (
            <>
              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-blue-400" />
                Key Metrics
              </h4>
              <ul className="text-gray-300 mb-4 space-y-1">
                {project.metrics.map((metric, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    {metric}
                  </li>
                ))}
              </ul>
            </>
          )}

          <h4 className="font-semibold text-white mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="border-gray-600 text-gray-300">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-4">
            {project.link && (
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
