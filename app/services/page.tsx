"use client"


import { UniversitiesSection } from "@/components/universities-section"
import { motion } from "framer-motion"
import { GraduationCap, Globe, Users, FileCheck, Briefcase, Plane } from "lucide-react"
import { ProgramsServicesSection } from "@/components/programe"
import ServicesHero from "./serviceshero"
import { Testimonials } from "@/components/testimonials"
import HowWeGuide from "./howweguideyou"
import HolisticLearning from "./hostile"
import FAQSection from "./faqsection"


export default function ServicesPage() {
  const serviceDetails = [
    {
      icon: GraduationCap,
      title: "Career Counseling",
      description: "Personalized guidance to help you discover your strengths and choose the right career path.",
      features: ["One-on-one sessions", "Career assessment tests", "Industry insights", "Goal setting"],
    },
    {
      icon: Globe,
      title: "Study Abroad Guidance",
      description: "Expert assistance in selecting universities and programs that align with your goals.",
      features: ["University selection", "Application support", "Essay guidance", "Interview prep"],
    },
    {
      icon: Users,
      title: "Professional Training",
      description: "Skill development programs to prepare you for the global workforce.",
      features: ["Soft skills training", "Technical workshops", "Leadership programs", "Industry certifications"],
    },
    {
      icon: FileCheck,
      title: "University Placement",
      description: "End-to-end support for securing admission to top universities worldwide.",
      features: ["Document preparation", "Application tracking", "Scholarship guidance", "Offer evaluation"],
    },
    {
      icon: Briefcase,
      title: "Post-Study Support",
      description: "Assistance with career placement and professional development after graduation.",
      features: ["Job placement", "Resume building", "Interview coaching", "Networking support"],
    },
    {
      icon: Plane,
      title: "Visa Assistance",
      description: "Complete visa processing support to make your international journey smooth.",
      features: ["Documentation help", "Application filing", "Interview preparation", "Follow-up support"],
    },
  ]

  return (
    <main className="">

      <ServicesHero />

      {/* Services Hero */}
      <section className="pt-12 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive solutions designed to support you at every stage of your educational and career journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceDetails.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-card p-8 rounded-2xl shadow-lg border border-border/50 hover:shadow-2xl hover:border-primary/30 transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProgramsServicesSection />
      <HowWeGuide />
      <HolisticLearning />
      <UniversitiesSection />
      <Testimonials />
      <FAQSection />
    </main>
  )
}
