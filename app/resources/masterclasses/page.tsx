"use client"

import { motion } from "framer-motion"
import { Monitor, Clock, Users, Play, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MasterclassesPage() {
  const masterclasses = [
    {
      title: "Modern Classroom Management Strategies",
      instructor: "Dr. Emily Roberts",
      duration: "2 hours",
      students: "500+",
      level: "Intermediate",
      description:
        "Learn cutting-edge techniques for managing diverse classrooms and creating engaging learning environments.",
    },
    {
      title: "Digital Teaching Tools Mastery",
      instructor: "Prof. James Anderson",
      duration: "3 hours",
      students: "750+",
      level: "Beginner to Advanced",
      description: "Comprehensive guide to leveraging technology for enhanced teaching and student engagement.",
    },
    {
      title: "International Education Standards",
      instructor: "Dr. Aisha Mohammed",
      duration: "2.5 hours",
      students: "450+",
      level: "Advanced",
      description: "Deep dive into global education frameworks including IB, Cambridge, and American curricula.",
    },
    {
      title: "Career Counseling Excellence",
      instructor: "Sarah Williams",
      duration: "2 hours",
      students: "600+",
      level: "Intermediate",
      description: "Master the art of guiding students through career decisions and university applications.",
    },
  ]

  return (
    <div className="min-h-screen pt-32 pb-20">
      <section className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Monitor className="h-4 w-4" />
            Resource Type
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Masterclasses
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Learn from industry experts through in-depth masterclasses designed to elevate your professional skills.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {masterclasses.map((masterclass, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    {masterclass.level}
                  </span>
                  <Play className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{masterclass.title}</h3>
                <p className="text-muted-foreground mb-4">{masterclass.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {masterclass.students} enrolled • by {masterclass.instructor}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{masterclass.duration}</span>
                  </div>
                </div>
                <Button className="w-full rounded-full">
                  Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 mt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Skills?</h2>
          <p className="text-xl mb-8 opacity-90">Access all masterclasses with our premium membership</p>
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
