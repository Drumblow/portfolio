"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronLeft, ChevronRight, BarChart3, X } from "lucide-react"
import { Project } from "@/app/data/projects"

interface ProjectModalProps {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project) return null

  const hasImages = project.images && project.images.length > 0
  const imageCount = project.images?.length || 0

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imageCount)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + imageCount) % imageCount)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl bg-gray-900 border-gray-700 text-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-start">
            <div>
              <DialogTitle className="text-2xl text-white">{project.title}</DialogTitle>
              <DialogDescription className="text-gray-400">
                {project.subtitle}
              </DialogDescription>
            </div>
            <Badge variant="secondary" className="bg-blue-600 text-white">
              {project.type}
            </Badge>
          </div>
        </DialogHeader>

        {hasImages && (
          <div className="relative rounded-md overflow-hidden bg-gray-800">
            <div className="relative w-full" style={{ paddingBottom: "50%" }}>
              <Image
                src={project.images![currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 896px"
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

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-white mb-1">Description</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-1">Functionality</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{project.functionality}</p>
          </div>

          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-blue-400" />
                Key Metrics
              </h4>
              <ul className="text-gray-300 text-sm space-y-1">
                {project.metrics.map((metric, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    {metric}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h4 className="font-semibold text-white mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="border-gray-600 text-gray-300">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {project.link && (
            <Button asChild className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Project
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
