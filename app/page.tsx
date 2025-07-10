"use client"

import { useState, useEffect } from "react"
import { Github, ExternalLink, Mail, Phone, MapPin, Download, Code, Database, Globe, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

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
  { name: "JavaScript/TypeScript", level: 90 },
  { name: "Database Integration", level: 85 },
  { name: "System Development", level: 88 },
  { name: "API Development", level: 82 },
  { name: "Dashboard Creation", level: 80 },
  { name: "Template Development", level: 85 },
  { name: "Data Migration", level: 78 },
  { name: "Process Automation", level: 75 },
]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(projects[0])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedProject.images && selectedProject.images.length > 1) {
        setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [selectedProject])

  useEffect(() => {
    setCurrentImageIndex(0)
  }, [selectedProject])

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
                <p className="text-lg text-blue-400 font-medium">Junior Computer Programmer</p>
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
              Computer Programmer Specialized in Digital Systems & Automation
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Experienced in developing and setting up digital systems from scratch, integrating and digitizing files,
              creating dashboards with dropdown menus, and developing templates for estimates. Focused on data accuracy,
              system reliability, and effective collaboration with senior developers.
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

        {/* Skills Relevantes para a Vaga */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Technical Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="text-center bg-gray-900 border-gray-800">
              <CardContent className="pt-6">
                <Code className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <h4 className="font-semibold text-white">Digital Systems Development</h4>
                <p className="text-sm text-gray-400">Setting up systems from scratch</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-gray-900 border-gray-800">
              <CardContent className="pt-6">
                <Database className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <h4 className="font-semibold text-white">Integration & Digitization</h4>
                <p className="text-sm text-gray-400">File migration and processes</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-gray-900 border-gray-800">
              <CardContent className="pt-6">
                <Globe className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <h4 className="font-semibold text-white">Dashboards & Templates</h4>
                <p className="text-sm text-gray-400">Interface and estimate creation</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-gray-900 border-gray-800">
              <CardContent className="pt-6">
                <Zap className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                <h4 className="font-semibold text-white">Collaboration & Precision</h4>
                <p className="text-sm text-gray-400">Teamwork and reliability</p>
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
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Featured Projects</h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Project List */}
            <div className="space-y-4">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className={`cursor-pointer transition-all duration-200 hover:shadow-md bg-gray-900 border-gray-800 ${
                    selectedProject.id === project.id ? "ring-2 ring-blue-500 bg-gray-800" : ""
                  }`}
                  onClick={() => setSelectedProject(project)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg text-white">{project.title}</CardTitle>
                        <CardDescription className="text-sm text-gray-400">{project.subtitle}</CardDescription>
                      </div>
                      <div className="flex flex-col gap-1">
                        <Badge variant={project.status === "Completed" ? "default" : "secondary"} className="text-xs">
                          {project.status}
                        </Badge>
                        {project.isPrivate && (
                          <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                            Private
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-gray-600 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Project Details */}
            <div className="lg:col-span-2">
              <Card className="h-full bg-gray-900 border-gray-800">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-white">{selectedProject.title}</CardTitle>
                      <CardDescription className="text-gray-400">{selectedProject.subtitle}</CardDescription>
                    </div>
                    <Badge className="bg-blue-900 text-blue-200">{selectedProject.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Project Image */}
                  {selectedProject.images && selectedProject.images.length > 0 && (
                    <div className="relative">
                      <img
                        src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                        alt={`${selectedProject.title} - Screenshot ${currentImageIndex + 1}`}
                        className={`w-full rounded-lg border border-gray-700 ${
                          selectedProject.type === "Mobile Application"
                            ? "h-96 object-contain bg-gray-800"
                            : "h-64 object-cover"
                        }`}
                      />
                      {selectedProject.images.length > 1 && (
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                          {selectedProject.images.map((_, index) => (
                            <button
                              key={index}
                              className={`w-2 h-2 rounded-full ${
                                index === currentImageIndex ? "bg-white" : "bg-white/50"
                              }`}
                              onClick={() => setCurrentImageIndex(index)}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Description */}
                  <div>
                    <h4 className="font-semibold mb-2 text-white">Description</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{selectedProject.description}</p>
                  </div>

                  {/* Functionality */}
                  <div>
                    <h4 className="font-semibold mb-2 text-white">Functionality</h4>
                    <p className="text-gray-300 text-sm">{selectedProject.functionality}</p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-2 text-white">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-gray-800 text-gray-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Separator className="bg-gray-700" />

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.github && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                      >
                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {selectedProject.link && (
                      <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </a>
                      </Button>
                    )}
                    {selectedProject.apiDocs && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                      >
                        <a href={selectedProject.apiDocs} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          API Docs
                        </a>
                      </Button>
                    )}
                    {selectedProject.videoDemo && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                      >
                        <a href={selectedProject.videoDemo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Video Demo
                        </a>
                      </Button>
                    )}
                    {selectedProject.hackathonLink && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                      >
                        <a href={selectedProject.hackathonLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Hackathon
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
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
