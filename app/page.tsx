import Header from "@/app/sections/Header"
import Hero from "@/app/sections/Hero"
import About from "@/app/sections/About"
import Competencies from "@/app/sections/Competencies"
import Skills from "@/app/sections/Skills"
import Projects from "@/app/sections/Projects"
import Contact from "@/app/sections/Contact"
import Footer from "@/app/sections/Footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Competencies />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
