"use client"

import { useState, useEffect } from "react"
import { Github, ExternalLink, Mail, Phone, MapPin, Download, Code, Database, Globe, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useIsMobile } from "@/hooks/use-mobile"

const projects = [
  {
    id: 1,
    title: "BR Engraving",
    subtitle: "Premium Laser Engraving E-commerce Platform",
    description:
      "Modern and comprehensive e-commerce system specialized in personalized laser engraving for the Canadian market. Features product catalog, administrative panel, secure authentication, PostgreSQL and Cloudinary integration, responsive design, and advanced management and sales features.",
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL", "Cloudinary"],
    functionality:
      "E-commerce platform for premium laser engraving services with product management, order processing, and complete administrative panel.",
    link: "https://brengraving.vercel.app/",
    images: [
      "https://res.cloudinary.com/djc3smoxw/image/upload/v1752109738/portfolio/br_engraving1_wqdzzl.jpg",
      "https://res.cloudinary.com/djc3smoxw/image/upload/v1752109738/portfolio/br_engraving2_uze2q6.jpg",
    ],
    type: "E-commerce System",
    status: "In Development",
    isPrivate: true,
  },
  {
    id: 2,
    title: "Dreams Officiant",
    subtitle: "Corporate Website Development",
    description:
      "Institutional website developed for Dreams Officiant, focused on presenting company services and information in a clear and modern way. Uses TypeScript as the main development language, providing a responsive and efficient web experience for users.",
    technologies: ["TypeScript", "Responsive Design", "Modern Web Standards"],
    functionality: "Institutional website for service promotion, business information, and contact management.",
    link: "https://www.dreamsofficiant.com/",
    github: "https://github.com/Drumblow/dreamsofficiant",
    images: ["https://res.cloudinary.com/djc3smoxw/image/upload/v1752119967/dreamsofficiantHome_xv8dsm.jpg"],
    type: "Corporate Website",
    status: "In Development",
    isPrivate: true,
  },
  {
    id: 3,
    title: "Fake News Detector",
    subtitle: "AI-Powered Fact-Checking Application",
    description:
      "Advanced web application for real-time fake news detection and verification, developed for the Perplexity Hackathon 2025. Uses artificial intelligence and multiple OCR engines for text and image analysis, enabling information checking, disinformation pattern identification, and clear user recommendations.",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Framer Motion",
      "Perplexity Sonar API",
      "Tesseract.js",
    ],
    functionality:
      "Automated fact-checking tool, news credibility analysis, intelligent text extraction from images, and accessible results presentation with focus on performance, accessibility, and social impact.",
    link: "https://fake-news-detector-ten.vercel.app/",
    github: "https://github.com/Drumblow/fake-news-detector",
    hackathonLink: "https://devpost.com/software/research-paper-assistant-r2q94w",
    videoDemo: "https://youtu.be/MbHyiaevFmM",
    images: ["https://res.cloudinary.com/djc3smoxw/image/upload/v1752120627/gallery_fsv7em.jpg"],
    type: "AI Application",
    status: "In Development",
  },
  {
    id: 4,
    title: "UBFS - ErikaUBSF API",
    subtitle: "Healthcare Management System",
    description:
      "API developed for creating and managing schedules in healthcare facilities. Uses JavaScript as the main technology, focusing on administrative process automation and improving organization of routines in public health environments.",
    technologies: ["JavaScript", "Node.js", "Express", "REST API"],
    functionality: "API for schedule and process management in basic health units with documented endpoints.",
    github: "https://github.com/Drumblow/ErikaUBSF",
    type: "API Backend",
    status: "In Development",
  },
  {
    id: 5,
    title: "UBFS - ErikaUBSF Frontend",
    subtitle: "Mobile Healthcare Management App",
    description:
      "Mobile application developed in TypeScript, optimized for Android and iOS. Offers a modern, responsive, and intuitive experience for users of the ErikaUBSF healthcare management system. Prioritizing clean design and usability on mobile devices.",
    technologies: ["TypeScript", "React", "Mobile-First Design", "Responsive UI"],
    functionality: "Mobile application for healthcare management system with interface optimized for mobile devices.",
    github: "https://github.com/Drumblow/ErikaFrontend",
    link: "https://erika-frontend.vercel.app/",
    images: [
      "https://res.cloudinary.com/djc3smoxw/image/upload/v1752112069/UBSF_dtgier.png",
      "https://res.cloudinary.com/djc3smoxw/image/upload/v1752112318/UBSFatividades_hh8bu7.jpg",
      "https://res.cloudinary.com/djc3smoxw/image/upload/v1752112318/modelo_cronograma_ozosyr.jpg",
    ],
    type: "Mobile Application",
    status: "In Development",
  },
  {
    id: 6,
    title: "ConnectCorp Hub",
    subtitle: "Corporate E-learning Platform",
    description:
      "Integrated corporate learning platform focused on training and professional development in companies. Features course management, assessments, gamification, digital certificates, and real-time analytics, offering a complete e-learning solution for corporations.",
    technologies: ["React", "TypeScript", "TailwindCSS", "Node.js", "Express", "PostgreSQL", "Redis"],
    functionality:
      "Corporate e-learning platform with content management, assessments, gamification, and documented API.",
    link: "https://connectcorp.vercel.app/",
    apiDocs: "https://connectcorp-api.vercel.app/api-docs/",
    images: [
      "https://res.cloudinary.com/djc3smoxw/image/upload/v1752115088/swagger_qgszad.jpg",
      "https://res.cloudinary.com/djc3smoxw/image/upload/v1752115088/swagger2_fx6uib.jpg",
      "https://res.cloudinary.com/djc3smoxw/image/upload/v1752115088/swagger3_ehhl2j.jpg",
    ],
    type: "Corporate Platform",
    status: "In Development",
    isPrivate: true,
  },
]

const skills = [
  { name: "Next.js / React", level: 90 },
  { name: "Node.js / Express", level: 85 },
  { name: "TypeScript / JavaScript", level: 90 },
  { name: "Databases (SQL & NoSQL)", level: 85 },
  { name: "REST API Development", level: 88 },
  { name: "Tailwind CSS", level: 85 },
  { name: "AI & API Integration", level: 80 },
  { name: "Cloudinary & Git Versioning", level: 82 },
]

type Project = (typeof projects)[0]

const ProjectDetails = ({ project, currentImageIndex }: { project: Project | null; currentImageIndex: number }) => {
  if (!project) {
    return (
      <Card className="bg-gray-900/80 border-gray-800 shadow-xl flex items-center justify-center h-full min-h-96">
        <CardContent className="pt-6">
          <p className="text-gray-400">Select a project to see the details.</p>
        </CardContent>
      </Card>
    )
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
        {project.images && project.images.length > 0 && (
          <div className="relative mb-4" style={{ paddingBottom: "56.25%" }}>
            <img
              src={project.images?.[currentImageIndex] || "https://via.placeholder.com/1280x720"}
              alt={project.title}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-md transition-opacity duration-500"
            />
          </div>
        )}
        <div>
          <h4 className="font-semibold text-white mb-2">Description</h4>
          <p className="text-gray-300 mb-4">{project.description}</p>

          <h4 className="font-semibold text-white mb-2">Functionality</h4>
          <p className="text-gray-300 mb-4">{project.functionality}</p>

          <h4 className="font-semibold text-white mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech: string) => (
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
                  View Project
                </a>
              </Button>
            )}
            {project.github && (
              <Button asChild variant="outline" className="border-gray-600 text-white hover:bg-gray-800 bg-transparent">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function ProjectsContent() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedProject && selectedProject.images && selectedProject.images.length > 1) {
        setCurrentImageIndex((prev) => (prev + 1) % (selectedProject.images?.length || 1))
      }
    }, 4000)
    return () => clearInterval(interval)
  }, [selectedProject])

  useEffect(() => {
    setCurrentImageIndex(0)
  }, [selectedProject])

  if (!hasMounted) {
    return (
      <div className="h-96 flex items-center justify-center">
        <p className="text-gray-500">Loading projects...</p>
      </div>
    )
  }

  return isMobile ? (
    <div className="space-y-4">
      {projects.map((project) => (
        <div key={project.id}>
          <Card
            onClick={() => setSelectedProject(selectedProject?.id === project.id ? null : project)}
            className={`cursor-pointer transition-all duration-200 hover:shadow-md border-gray-800 ${
              selectedProject?.id === project.id ? "ring-2 ring-blue-500 bg-gray-800" : "bg-gray-900 hover:bg-gray-800"
            }`}
          >
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-white">{project.title}</p>
                  <p className="text-sm text-gray-400">{project.subtitle}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={project.status === "In Development" ? "secondary" : "default"}>
                    {project.status}
                  </Badge>
                  {project.isPrivate && <Badge variant="outline">Private</Badge>}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.slice(0, 3).map((tech: string) => (
                  <Badge key={tech} variant="outline" className="border-gray-700 text-gray-300">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge variant="outline" className="border-gray-700 text-gray-300">
                    +{project.technologies.length - 3}
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
          {selectedProject?.id === project.id && (
            <div className="mt-4">
              <ProjectDetails project={selectedProject} currentImageIndex={currentImageIndex} />
            </div>
          )}
        </div>
      ))}
    </div>
  ) : (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1 flex flex-col justify-between gap-4">
        {projects.map((project) => (
          <Card
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className={`cursor-pointer transition-all duration-200 hover:shadow-md border-gray-800 ${
              selectedProject?.id === project.id ? "ring-2 ring-blue-500 bg-gray-800" : "bg-gray-900 hover:bg-gray-800"
            }`}
          >
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="font-bold text-white">{project.title}</p>
                  <p className="text-sm text-gray-400">{project.subtitle}</p>
                </div>
                <div className="flex flex-col items-end gap-2 ml-2">
                  <Badge variant={project.status === "In Development" ? "secondary" : "default"}>
                    {project.status}
                  </Badge>
                  {project.isPrivate && <Badge variant="outline">Private</Badge>}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.map((tech: string) => (
                  <Badge key={tech} variant="outline" className="border-gray-700 text-gray-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="lg:col-span-2">
        <ProjectDetails project={selectedProject} currentImageIndex={currentImageIndex} />
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src="https://res.cloudinary.com/djc3smoxw/image/upload/v1752117069/1733256468717_emkw6h.jpg"
                alt="João Roberto Alvares Ewerton"
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-400 shadow-md"
              />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white">João Roberto Alvares Ewerton</h1>
                <p className="text-lg text-blue-400 font-medium">Full-Stack Software Developer</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                <span>fabricappsdrumblow@gmail.com</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <span>(437) 829-6820</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Sarnia, ON</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Systems Programmer | Web & AI Applications
            </h2>
            <p className="text-lg text-gray-300 mb-8 text-justify">
              A software developer focused on building innovative applications and solving complex challenges with modern
              technology. Proven experience in developing innovative applications, including an AI-powered fake news
              detector for the Perplexity Hackathon and complete e-commerce systems. Proficient in Next.js, TypeScript,
              and Node.js, with the ability to integrate third-party APIs, build efficient back-ends, and deliver
              intuitive, high-performance user interfaces.
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

        {/* About Me Section */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">About Me</h3>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      I'm a passionate Brazilian developer who moved to Canada 1.5 years ago with my family. I'm married
                      and have three wonderful children who inspire me to constantly grow and improve.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Currently seeking opportunities to grow and develop my skills in the Canadian tech industry. I'm
                      not afraid to face new challenges and believe that every obstacle is a chance to learn and become
                      a better professional.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      My journey from Brazil to Canada has taught me resilience, adaptability, and the importance of
                      continuous learning. I bring a unique perspective combining Brazilian creativity with Canadian
                      work ethics.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-gray-800 rounded-lg">
                        <div className="text-2xl font-bold text-blue-400">1.5</div>
                        <div className="text-sm text-gray-400">Years in Canada</div>
                      </div>
                      <div className="text-center p-4 bg-gray-800 rounded-lg">
                        <div className="text-2xl font-bold text-green-400">3</div>
                        <div className="text-sm text-gray-400">Children</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 p-4 bg-gray-800 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-4 bg-green-500 rounded-sm"></div>
                        <span className="text-sm text-gray-300">Brazil</span>
                      </div>
                      <span className="text-gray-500">→</span>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-4 bg-red-500 rounded-sm relative">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                        <span className="text-sm text-gray-300">Canada</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <Badge className="bg-blue-900 text-blue-200 px-4 py-2">Ready for New Challenges</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technical Competencies Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Technical Competencies</h3>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-blue-400">Full-Stack Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Designing and developing complete, end-to-end web applications, from server-side logic and database
                  modeling with Node.js and PostgreSQL to building interactive and responsive user interfaces with
                  Next.js and React.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-blue-400">API Development & Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Building secure and efficient RESTful APIs to support business operations. Experienced in integrating
                  third-party services, including cloud storage (Cloudinary), and advanced AI APIs (Perplexity).
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-blue-400">E-commerce & Business Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Developing specialized commercial platforms with essential features like product catalogs,
                  administrative dashboards, and order management. Focused on creating reliable and scalable
                  business-oriented systems.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-blue-400">Agile Development & Code Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Working in dynamic development cycles, using Git for version control, and focusing on writing clean,
                  maintainable, and well-documented code. Collaborative approach to problem-solving and feature
                  implementation.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Progress */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-white">{skill.name}</span>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-2">Featured Projects</h3>
            <p className="text-gray-400">Click on a project to see the details.</p>
          </div>
          <ProjectsContent />
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <Card className="max-w-2xl mx-auto bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Let's Work Together?</CardTitle>
              <CardDescription className="text-gray-400">
                I'm available for development opportunities and collaboration on innovative projects.
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
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 João Roberto Alvares Ewerton. Computer Programmer specialized in digital systems and automation.
          </p>
        </div>
      </footer>
    </div>
  )
}
