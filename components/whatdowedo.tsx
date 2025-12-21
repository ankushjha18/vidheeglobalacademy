"use client"

import { GraduationCap, TrendingUp, Globe2, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export function WhatWeDoSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  
  const services = [
    {
      icon: GraduationCap,
      title: "Education Guidance",
      description: "Helping learners make informed education choices aligned with their goals, strengths, and future opportunities."
    },
    {
      icon: TrendingUp,
      title: "Career Transitions",
      description: "Supporting students and professionals through confident career decisions and long-term growth planning."
    },
    {
      icon: Globe2,
      title: "Global Pathways",
      description: "Guidance on international education and career pathways, with a strong focus on India–UAE opportunities."
    },
    {
      icon: Users,
      title: "Personalised Mentorship",
      description: "One-to-one mentoring tailored to individual aspirations, backgrounds, and career stages."
    }
  ]
  
  return (
    <section className="relative bg-background py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-6"
            >
              <span className="text-sm font-medium text-muted-foreground tracking-wide">
                OUR SERVICES
              </span>
            </motion.div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground tracking-tight mb-4">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive guidance for your education and career journey
            </p>
          </motion.div>

          {/* 4-Card Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  onHoverStart={() => setHoveredCard(i)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="group relative"
                >
                  {/* Card */}
                  <motion.div
                    className="relative h-full bg-card border border-border rounded-2xl p-8 lg:p-10 overflow-hidden transition-all duration-300"
                    whileHover={{ 
                      y: -8,
                      boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)"
                    }}
                  >
                    {/* Animated gradient background on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0"
                      animate={{
                        opacity: hoveredCard === i ? 1 : 0,
                      }}
                      transition={{ duration: 0.4 }}
                    />
                    
                    {/* Animated corner accents */}
                    <motion.div
                      className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[100px] opacity-0"
                      animate={{
                        opacity: hoveredCard === i ? 1 : 0,
                        scale: hoveredCard === i ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.4 }}
                    />
                    
                    {/* Content */}
                    <div className="relative z-10 space-y-6">
                      {/* Icon */}
                      <div className="relative inline-block">
                        {/* Pulsing circle behind icon */}
                        <motion.div
                          className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl"
                          animate={{
                            scale: hoveredCard === i ? [1, 1.2, 1] : 1,
                            opacity: hoveredCard === i ? [0.5, 0.8, 0.5] : 0,
                          }}
                          transition={{
                            duration: 2,
                            repeat: hoveredCard === i ? Infinity : 0,
                          }}
                        />
                        
                        {/* Icon container */}
                        <motion.div
                          className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border flex items-center justify-center"
                          animate={{
                            rotate: hoveredCard === i ? [0, -10, 10, 0] : 0,
                            scale: hoveredCard === i ? 1.1 : 1,
                          }}
                          transition={{
                            rotate: { duration: 0.6 },
                            scale: { duration: 0.3 }
                          }}
                        >
                          <Icon className="w-8 h-8 text-primary" />
                        </motion.div>
                        
                        {/* Orbiting dot */}
                        <motion.div
                          className="absolute -right-1 -top-1 w-3 h-3 bg-accent rounded-full"
                          animate={{
                            scale: hoveredCard === i ? [1, 1.3, 1] : 1,
                            opacity: hoveredCard === i ? [0.8, 1, 0.8] : 0.8,
                          }}
                          transition={{
                            duration: 1,
                            repeat: hoveredCard === i ? Infinity : 0,
                          }}
                        />
                      </div>

                      {/* Title */}
                      <motion.h3 
                        className="text-2xl font-semibold text-card-foreground tracking-tight"
                        animate={{
                          x: hoveredCard === i ? 4 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p 
                        className="text-muted-foreground leading-relaxed"
                        animate={{
                          x: hoveredCard === i ? 4 : 0,
                        }}
                        transition={{ duration: 0.3, delay: 0.05 }}
                      >
                        {service.description}
                      </motion.p>

                      {/* Bottom accent line */}
                      <motion.div
                        className="h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                        initial={{ width: 0 }}
                        animate={{
                          width: hoveredCard === i ? "100%" : 0
                        }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>

                    {/* Floating particles on hover */}
                    {hoveredCard === i && (
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(5)].map((_, j) => (
                          <motion.div
                            key={j}
                            className="absolute w-1 h-1 bg-primary/40 rounded-full"
                            style={{
                              left: `${20 + j * 15}%`,
                              bottom: "20%",
                            }}
                            initial={{ y: 0, opacity: 0 }}
                            animate={{
                              y: [-20, -60],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              delay: j * 0.1,
                              repeat: Infinity,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}