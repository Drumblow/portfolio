"use client"

import Image from "next/image"
import { Github, Mail, Phone, MapPin } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <Image
              src="/profile.jpg"
              alt="João Roberto Alvares Ewerton"
              width={64}
              height={64}
              className="rounded-full object-cover border-2 border-blue-400 shadow-md"
              priority
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
  )
}
