"use client"

import { IndiaUaePathwaysSection } from "@/components/india-uae-pathway"
import { motion } from "framer-motion"
import { Flag, Building2, Users2, TrendingUp } from "lucide-react"
import FAQSection from "./faqsection"
import PathwayProcess from "./processindiauae"

export default function IndiaUaePage() {
  const highlights = [
    {
      icon: Building2,
      title: "Top UAE Universities",
      description: "Access to premier institutions in Dubai, Abu Dhabi, and Sharjah",
    },
    {
      icon: Users2,
      title: "Growing Indian Community",
      description: "Join over 3 million Indians thriving in the UAE",
    },
    {
      icon: TrendingUp,
      title: "Career Opportunities",
      description: "Excellent job prospects across diverse industries",
    },
    {
      icon: Flag,
      title: "Cultural Bridge",
      description: "Strong India-UAE ties making transition smoother",
    },
  ]

  return (
    <main className="">

       <IndiaUaePathwaysSection />
       <PathwayProcess />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-accent/10 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                India–UAE
              </span>
              <br />
              Educational Pathway
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Bridging educational excellence between India and UAE with specialized guidance, cultural understanding,
              and career opportunities.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-card p-6 rounded-2xl shadow-lg border border-border/50 hover:shadow-xl hover:border-accent/50 transition-all text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Why Choose UAE Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Why Choose UAE for Education?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-xl border border-border/50">
                <h3 className="text-xl font-bold text-primary mb-3">World-Class Education</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Study at internationally accredited universities with cutting-edge facilities and global recognition.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border/50">
                <h3 className="text-xl font-bold text-primary mb-3">Strategic Location</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Gateway between East and West, offering unique exposure to global markets and cultures.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border/50">
                <h3 className="text-xl font-bold text-primary mb-3">Safe & Modern</h3>
                <p className="text-muted-foreground leading-relaxed">
                  One of the safest countries with world-class infrastructure and quality of life.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border/50">
                <h3 className="text-xl font-bold text-primary mb-3">Post-Study Opportunities</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Excellent career prospects with competitive salaries and growth opportunities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <FAQSection />
      </section>

    </main>
  )
}
