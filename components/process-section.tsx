"use client"

import { motion } from "framer-motion"
import { MessageSquare, FileSearch, GraduationCap, Plane, CheckCircle2 } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Initial Consultation",
      description: "Discuss your goals, preferences, and explore opportunities tailored to you",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FileSearch,
      title: "Profile Assessment",
      description: "Comprehensive evaluation of your academic background and career aspirations",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: GraduationCap,
      title: "University Selection",
      description: "Curated list of universities matching your profile and preferences",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: FileSearch,
      title: "Application Support",
      description: "End-to-end guidance for applications, essays, and documentation",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Plane,
      title: "Visa Assistance",
      description: "Complete support for visa applications and pre-departure preparation",
      color: "from-red-500 to-rose-500",
    },
    {
      icon: CheckCircle2,
      title: "Post-Landing Support",
      description: "Continued guidance for settling in and academic success abroad",
      color: "from-indigo-500 to-violet-500",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Your Journey With Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A seamless step-by-step process designed to make your study abroad dreams a reality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-border/50 h-full">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all`}
                >
                  <step.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
