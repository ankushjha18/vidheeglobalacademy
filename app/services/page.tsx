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
import { IndiaUaePathwaysSection } from "@/components/india-uae-pathway"


export default function ServicesPage() {
  const serviceDetails = [
    {
      icon: GraduationCap,
      title: "Personalised Academic Coaching",
      description: "One-on-one and small group tuition designed to build strong concepts, exam confidence, and consistent academic performance across major boards.",
      features: ["Science: Physics, Chemistry, Biology", "Commerce: Accountancy, Economics, Business Studies", "English (CBSE / ISC / IGCSE)", "IELTS coaching for global study pathways"],
    },
    {
      icon: Globe,
      title: "Career Counselling & College Guidance",
      description: "Expert-led career counselling for students and parents to support informed academic and career decisions in India and abroad.",
      features: ["Stream selection after Class 10", "Career planning after Class 12", "College & university shortlisting", "Admission and application guidance"],
    },
    {
      icon: Users,
      title: "Study Abroad & University Placement",
      description: "End-to-end guidance to help students secure admissions to universities worldwide with clarity and confidence.",
      features: ["University and course selection", "Application and documentation support", "Statement of Purpose & essay guidance", "Interview preparation and timelines"],
    },
    {
      icon: FileCheck,
      title: "International Teaching Opportunities",
      description: "Career support for qualified educators seeking teaching roles in UAE and global schools.",
      features: ["Profile and CV enhancement", "Application and interview support", "Overseas career transition mentoring", "Guidance for global education pathways"],
    },
    {
      icon: Briefcase,
      title: "Student Mentorship & Personal Development",
      description: "Holistic mentoring focused on emotional well-being, motivation, and personal growth alongside academics.",
      features: ["Academic stress and exam pressure support", "Confidence building and motivation", "Goal setting and personal challenges", "Long-term student development guidance"],
    },
    {
      icon: Plane,
      title: "Professional Training & Skill Development",
      description: "Programs designed to prepare students and professionals for global academic and workplace success",
      features: ["Soft skills and communication training", "Leadership and personality development", "Career readiness programs", "Global professional exposure"],
    },
  ]

  return (
    <main className="">

      <ServicesHero />

      {/* Services Hero */}
      <section className="pt-12 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5" id="Programs">
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
      <IndiaUaePathwaysSection />
      <HowWeGuide />
      <HolisticLearning />
      <UniversitiesSection />
      <Testimonials />
      <FAQSection />
    </main>
  )
}
