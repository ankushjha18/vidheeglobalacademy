"use client"

import { Navbar } from "@/components/navbar"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98711 14591"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@vidheeglobalacademy.com"],
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["India & UAE"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Sat: 9AM - 6PM", "Sunday: By Appointment"],
    },
  ]

  return (
    <main className="">
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
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to start your educational journey? We're here to help you every step of the way.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-lg border border-border/50 hover:shadow-xl hover:scale-105 transition-all text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold mb-2">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-sm text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      <Footer />
    </main>
  )
}
