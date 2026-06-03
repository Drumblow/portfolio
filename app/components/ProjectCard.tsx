"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Project } from "@/app/data/projects"

interface ProjectCardProps {
  project: Project
  isSelected: boolean
  onClick: () => void
}

export default function ProjectCard({ project, isSelected, onClick }: ProjectCardProps) {
  return (
    <Card
      onClick={onClick}
      className={`cursor-pointer transition-all duration-200 hover:shadow-md border-gray-800 ${
        isSelected ? "ring-2 ring-blue-500 bg-gray-800" : "bg-gray-900 hover:bg-gray-800"
      }`}
    >
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <p className="font-bold text-white">{project.title}</p>
            <p className="text-sm text-gray-400">{project.subtitle}</p>
          </div>
          <div className="flex flex-col items-end gap-2 ml-2">
            <Badge
              variant={project.status === "Live" ? "default" : "secondary"}
              className={project.status === "Live" ? "bg-green-600 text-white hover:bg-green-700" : ""}
            >
              {project.status}
            </Badge>
            {project.isPrivate && <Badge variant="outline">Private</Badge>}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="outline" className="border-gray-700 text-gray-300">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 5 && (
            <Badge variant="outline" className="border-gray-700 text-gray-300">
              +{project.technologies.length - 5}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
