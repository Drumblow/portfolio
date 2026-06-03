"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Server, Monitor, ShoppingCart, Shield } from "lucide-react"
import { competencies } from "@/app/data/skills"

const iconMap: Record<string, React.ReactNode> = {
  Server: <Server className="w-5 h-5 text-blue-400" />,
  Monitor: <Monitor className="w-5 h-5 text-blue-400" />,
  ShoppingCart: <ShoppingCart className="w-5 h-5 text-blue-400" />,
  Shield: <Shield className="w-5 h-5 text-blue-400" />,
}

export default function Competencies() {
  return (
    <section className="mb-12">
      <h3 className="text-2xl font-bold text-white mb-8 text-center">Technical Competencies</h3>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {competencies.map((comp) => (
          <Card key={comp.title} className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-blue-400 flex items-center gap-2">
                {iconMap[comp.icon]}
                {comp.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{comp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
