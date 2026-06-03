"use client"

import { useState, useEffect } from "react"
import { projects, Project } from "@/app/data/projects"
import { useIsMobile } from "@/hooks/use-mobile"
import ProjectCard from "@/app/components/ProjectCard"
import ProjectDetails from "@/app/components/ProjectDetails"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const isMobile = useIsMobile()
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (hasMounted) {
      if (isMobile) {
        setSelectedProject(null)
      } else {
        setSelectedProject(projects[0])
      }
    }
  }, [isMobile, hasMounted])

  if (!hasMounted) {
    return (
      <div className="h-96 flex items-center justify-center">
        <p className="text-gray-500">Loading projects...</p>
      </div>
    )
  }

  return (
    <section id="projects" className="mb-12">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-white mb-2">Featured Projects</h3>
        <p className="text-gray-400">Click on a project to see the details.</p>
      </div>

      {isMobile ? (
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.id}>
              <ProjectCard
                project={project}
                isSelected={selectedProject?.id === project.id}
                onClick={() =>
                  setSelectedProject(selectedProject?.id === project.id ? null : project)
                }
              />
              {selectedProject?.id === project.id && (
                <div className="mt-4">
                  <ProjectDetails project={selectedProject} />
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 flex flex-col justify-between gap-4">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isSelected={selectedProject?.id === project.id}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
          <div className="lg:col-span-2">
            <ProjectDetails project={selectedProject} />
          </div>
        </div>
      )}
    </section>
  )
}
