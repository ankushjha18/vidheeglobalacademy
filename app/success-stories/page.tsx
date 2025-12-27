"use client"


import { Testimonials } from "@/components/testimonials"
import { motion } from "framer-motion"
import SuccessStoriesHero from "./successhero"
import FAQSection from "./faqsection"
import { WhoWeHelpSection } from "@/components/whowehelp"

export default function SuccessStoriesPage() {
  return (
    <main className="">
      <SuccessStoriesHero />

      
     

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-16"
            >
              Our Impact
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: "98%", label: "Success Rate" },
                { number: "500+", label: "Students Placed" },
                { number: "50+", label: "Partner Universities" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-8 rounded-2xl shadow-lg border border-border/50 text-center hover:shadow-xl hover:scale-105 transition-all"
                >
                  <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <WhoWeHelpSection />

       <Testimonials />
      <FAQSection />

    </main>
  )
}
