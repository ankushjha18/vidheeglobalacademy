"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import Image from "next/image"

export function UniversitiesSection() {
  const universities = [
    {
      name: "University of Dubai",
      location: "Dubai, UAE",
      programs: "120+ Programs",
      image: "/modern-university-campus.png",
    },
    {
      name: "American University of Sharjah",
      location: "Sharjah, UAE",
      programs: "90+ Programs",
      image: "/university-building-architecture.jpg",
    },
    {
      name: "Manipal Academy",
      location: "Dubai, UAE",
      programs: "80+ Programs",
      image: "/education-campus-aerial-view.jpg",
    },
    {
      name: "Heriot-Watt University",
      location: "Dubai, UAE",
      programs: "100+ Programs",
      image: "/international-university.jpg",
    },
    {
      name: "Middlesex University",
      location: "Dubai, UAE",
      programs: "75+ Programs",
      image: "/global-university-campus.jpg",
    },
    {
      name: "BITS Pilani",
      location: "Dubai, UAE",
      programs: "65+ Programs",
      image: "/tech-university-campus.jpg",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Partner Universities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Collaborate with top-tier institutions across UAE and India for your academic journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universities.map((uni, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-border/50">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={uni.image || "/placeholder.svg"}
                    alt={uni.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white/90 text-sm mb-1">
                      <MapPin className="h-4 w-4" />
                      {uni.location}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {uni.name}
                  </h3>
                  <p className="text-muted-foreground">{uni.programs}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
