"use client"

import { motion } from "framer-motion"
import { GraduationCap, BookOpen, Users, Award, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function StartTeachingPage() {
  const steps = [
    {
      title: "Discover Your Path",
      description: "Explore various teaching opportunities across different education levels and subjects",
      icon: BookOpen,
    },
    {
      title: "Get Certified",
      description: "Obtain necessary qualifications and certifications for your teaching career",
      icon: Award,
    },
    {
      title: "Gain Experience",
      description: "Build practical teaching experience through internships and mentorship programs",
      icon: Users,
    },
    {
      title: "Launch Your Career",
      description: "Secure your first teaching position with our placement assistance",
      icon: GraduationCap,
    },
  ]

  const benefits = [
    "Access to top educational institutions",
    "Competitive salary packages",
    "Professional development opportunities",
    "Work-life balance",
    "Impact young minds",
    "Career advancement pathways",
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
            <GraduationCap className="h-4 w-4" />
            Career Objective
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Start Your Teaching Career
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Transform lives through education. Begin your rewarding journey as a teacher with expert guidance and
            comprehensive support.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full">
              Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Steps Section */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Your Path to Teaching Excellence</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Teaching?</h2>
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

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Inspire the Next Generation?</h2>
          <p className="text-xl mb-8 opacity-90">Connect with us to start your teaching journey today</p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="rounded-full">
              Book a Free Consultation
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
