"use client"

import { Card, CardContent } from "@/components/ui/card"
import { skillCategories } from "@/app/data/skills"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  return (
    <section className="mb-12">
      <h3 className="text-2xl font-bold text-white mb-8 text-center">Technology Stack</h3>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat) => (
          <Card key={cat.category} className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h4 className="font-semibold text-white mb-3">{cat.category}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
