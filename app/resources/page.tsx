"use client"

import { Navbar } from "@/components/navbar"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export default function ResourcesPage() {
  return (
    <main >
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
              Resources & Insights
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Stay informed with the latest education trends, career advice, and study abroad guidance.
            </p>
          </motion.div>
        </div>
      </section>

      <BlogSection />

      <Footer />
    </main>
  )
}
