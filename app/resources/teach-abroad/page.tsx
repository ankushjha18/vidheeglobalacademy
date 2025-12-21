"use client"

import { motion } from "framer-motion"
import { Globe, Plane, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function TeachAbroadPage() {
  const destinations = [
    {
      country: "United Arab Emirates",
      highlights: ["Tax-free income", "Modern facilities", "Cultural diversity", "Career growth"],
      icon: "🇦🇪",
    },
    {
      country: "United Kingdom",
      highlights: ["High standards", "Professional development", "Competitive salaries", "Rich history"],
      icon: "🇬🇧",
    },
    {
      country: "Singapore",
      highlights: ["World-class education", "Innovation focus", "Great lifestyle", "Asian hub"],
      icon: "🇸🇬",
    },
    {
      country: "Canada",
      highlights: ["Quality of life", "Multicultural society", "Career pathways", "Beautiful nature"],
      icon: "🇨🇦",
    },
  ]

  const requirements = [
    "Bachelor's degree in Education or relevant field",
    "Teaching certification (TEFL/TESOL/CELTA for ESL)",
    "Minimum 2 years teaching experience",
    "Background check clearance",
    "Valid passport",
    "Visa sponsorship eligibility",
  ]

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Globe className="h-4 w-4" />
            Career Objective
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Teach Abroad
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Expand your horizons and make a global impact. Discover exciting teaching opportunities worldwide with our
            expert guidance.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full">
              Explore Opportunities <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Destinations */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Teaching Destinations</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{dest.icon}</span>
                  <h3 className="text-2xl font-semibold">{dest.country}</h3>
                </div>
                <ul className="space-y-2">
                  {dest.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">General Requirements</h2>
          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-4">
              {requirements.map((req, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{req}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-12 text-center"
        >
          <Plane className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your International Teaching Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">Let us help you navigate the process from start to finish</p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="rounded-full">
              Start Your Journey
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
