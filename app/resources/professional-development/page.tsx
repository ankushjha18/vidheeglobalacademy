"use client"

import { motion } from "framer-motion"
import { Lightbulb, BookOpen, Users, Target, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function ProfessionalDevelopmentPage() {
  const programs = [
    {
      title: "Skill Enhancement Workshops",
      description: "Hands-on training sessions covering the latest educational methodologies and technologies",
      icon: BookOpen,
      duration: "4-8 weeks",
    },
    {
      title: "Leadership Training",
      description: "Develop strategic thinking and management capabilities for educational leadership roles",
      icon: Users,
      duration: "12 weeks",
    },
    {
      title: "Specialized Certifications",
      description: "Earn industry-recognized credentials in specialized areas of education",
      icon: Target,
      duration: "6-12 months",
    },
    {
      title: "Innovation Programs",
      description: "Learn to integrate cutting-edge teaching methods and educational technology",
      icon: Lightbulb,
      duration: "8 weeks",
    },
  ]

  const benefits = [
    "Stay current with educational trends",
    "Enhance teaching effectiveness",
    "Increase career opportunities",
    "Build professional networks",
    "Gain recognized credentials",
    "Boost confidence and competence",
  ]

  return (
    <div className="min-h-screen pt-32 pb-20">
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Lightbulb className="h-4 w-4" />
            Career Objective
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Professional Development
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Invest in your future. Access world-class training programs and certifications designed to elevate your
            professional capabilities.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full">
              Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Development Programs</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <program.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                    {program.duration}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                <p className="text-muted-foreground">{program.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Invest in Professional Development?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-primary/5 transition-colors"
              >
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Invest in Your Professional Growth Today</h2>
          <p className="text-xl mb-8 opacity-90">Discover the right development program for your career goals</p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="rounded-full">
              Get Started
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
