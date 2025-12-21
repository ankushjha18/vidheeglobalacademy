"use client"

import { Navbar } from "@/components/navbar"
import { CorePillars } from "@/components/core-pillars"
import { ProcessSection } from "@/components/process-section"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* About Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              About ViDHEE Global Academy
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Dedicated to guiding students, educators, and professionals through education choices, career transitions,
              and global opportunities, with a strong focus on India–UAE pathways.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border/50 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To offer trusted guidance, personalised mentoring, and future-ready solutions that empower individuals
                to make informed decisions about their education and career paths.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border/50 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted partner for students and professionals seeking global education and career
                opportunities, particularly in strengthening India-UAE educational pathways.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <CorePillars />
      <ProcessSection />

      {/* Experience Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Years of Experience in Education</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              With years of experience in education, training, and international exposure, our team brings deep
              expertise and practical insights to help you navigate your educational journey with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
