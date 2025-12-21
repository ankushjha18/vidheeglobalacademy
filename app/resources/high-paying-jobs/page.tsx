"use client"

import { motion } from "framer-motion"
import { DollarSign, Briefcase, TrendingUp, Award, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function HighPayingJobsPage() {
  const opportunities = [
    {
      role: "International School Principal",
      salary: "$80,000 - $150,000",
      location: "UAE, Singapore, UK",
      requirements: ["Master's degree", "10+ years experience", "Leadership certification"],
    },
    {
      role: "Curriculum Director",
      salary: "$70,000 - $120,000",
      location: "Global opportunities",
      requirements: ["Educational leadership", "Curriculum expertise", "8+ years experience"],
    },
    {
      role: "IB Coordinator",
      salary: "$60,000 - $100,000",
      location: "International schools",
      requirements: ["IB training", "5+ years teaching", "Coordination experience"],
    },
    {
      role: "Educational Consultant",
      salary: "$75,000 - $130,000",
      location: "Remote/Travel",
      requirements: ["Specialized expertise", "Consulting skills", "Proven track record"],
    },
  ]

  const qualifications = [
    "Advanced degrees (Master's or PhD)",
    "Specialized certifications",
    "Proven leadership experience",
    "International teaching experience",
    "Strong track record of results",
    "Professional network",
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
            <DollarSign className="h-4 w-4" />
            Career Objective
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Find High-Paying Jobs
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Unlock premium career opportunities in education. Access exclusive high-paying positions worldwide with our
            expert placement services.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full">
              Explore Opportunities <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">High-Paying Opportunities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {opportunities.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                  <span className="text-lg font-bold text-accent">{job.salary}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{job.role}</h3>
                <p className="text-muted-foreground mb-4">{job.location}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Key Requirements:</p>
                  {job.requirements.map((req, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Qualifications for High-Paying Positions</h2>
          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-4">
              {qualifications.map((qual, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <Award className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>{qual}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-12 text-center"
        >
          <TrendingUp className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Advance Your Career?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let us connect you with premium opportunities matching your expertise
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="rounded-full">
              Apply Now
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
