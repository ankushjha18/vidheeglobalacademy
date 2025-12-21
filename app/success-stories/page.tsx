"use client"

import { Navbar } from "@/components/navbar"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export default function SuccessStoriesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              Success Stories
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Real stories from students and professionals who achieved their dreams with ViDHEE Global Academy.
            </p>
          </motion.div>
        </div>
      </section>

      <Testimonials />

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

      <Footer />
    </main>
  )
}
