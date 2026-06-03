"use client"

import { useState } from "react"
import Image from "next/image"
import { projects, Project } from "@/app/data/projects"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Eye } from "lucide-react"
import ProjectModal from "@/app/components/ProjectModal"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  return (
    <section id="projects" className="mb-12">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-white mb-2">Featured Projects</h3>
        <p className="text-gray-400">Products I&apos;ve designed, built, and shipped to production.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="bg-gray-900 border-gray-800 overflow-hidden flex flex-col h-full hover:border-gray-600 transition-colors"
          >
            {project.images && project.images.length > 0 && (
              <div className="relative w-full bg-gray-800" style={{ paddingBottom: "52%" }}>
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 right-3">
                  <Badge
                    variant={project.status === "Live" ? "default" : "secondary"}
                    className={
                      project.status === "Live"
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : ""
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                {project.isPrivate && (
                  <div className="absolute top-3 left-3">
                    <Badge variant="outline" className="bg-gray-900/80 text-gray-300 border-gray-600">
                      Private
                    </Badge>
                  </div>
                )}
              </div>
            )}

            <CardContent className="p-5 flex flex-col flex-1">
              <h4 className="text-xl font-bold text-white mb-1">{project.title}</h4>
              <p className="text-sm text-gray-400 mb-3">{project.subtitle}</p>
              <p className="text-sm text-gray-300 mb-4 line-clamp-3 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 5).map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="border-gray-700 text-gray-300 text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 5 && (
                  <Badge variant="outline" className="border-gray-700 text-gray-300 text-xs">
                    +{project.technologies.length - 5}
                  </Badge>
                )}
              </div>

              <div className="flex gap-3 mt-auto">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                  onClick={() => openModal(project)}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Details
                </Button>
                {project.link && (
                  <Button asChild size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  )
}
