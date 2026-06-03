"use client"

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} João Roberto Alvares Ewerton. Full-Stack Software Developer.
        </p>
      </div>
    </footer>
  )
}
