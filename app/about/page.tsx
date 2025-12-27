"use client"

import { WhatWeDoSection } from "@/components/whatdowedo"
import { ProcessSection } from "@/components/process-section"
import { motion } from "framer-motion"
import AboutHero from "./abouthero"
import { WhoWeHelpSection } from "@/components/whowehelp"
import { WhyVidhee } from "@/components/why-vidhee"
import { Testimonials } from "@/components/testimonials"

export default function AboutPage() {
  return (
    <main className="">

      <AboutHero/>

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
      <WhoWeHelpSection />
      <ProcessSection />
      <WhatWeDoSection />
      <WhyVidhee />
      <Testimonials />

      

     
    </main>
  )
}
