"use client"

import { GraduationCap, Users, Briefcase, Building2 } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export function WhoWeHelpSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  
  const audience = [
    {
      icon: GraduationCap,
      title: "Students",
      description: "Clarity on education choices, career direction, and future opportunities.",
      color: "blue"
    },
    {
      icon: Users,
      title: "Educators",
      description: "Professional development, global exposure, and career advancement guidance.",
      color: "purple"
    },
    {
      icon: Briefcase,
      title: "Working Professionals",
      description: "Career transitions, skill alignment, and international readiness.",
      color: "pink"
    },
    {
      icon: Building2,
      title: "Institutions",
      description: "Academic support, training solutions, and international collaboration guidance.",
      color: "orange"
    }
  ]
  
  const colorClasses = {
    blue: {
      gradient: "from-blue-500/10 to-blue-600/10",
      border: "border-blue-500/20",
      hoverBorder: "group-hover:border-blue-400/40",
      icon: "text-blue-500",
      iconBg: "bg-blue-500/10",
      accent: "bg-blue-500"
    },
    purple: {
      gradient: "from-purple-500/10 to-purple-600/10",
      border: "border-purple-500/20",
      hoverBorder: "group-hover:border-purple-400/40",
      icon: "text-purple-500",
      iconBg: "bg-purple-500/10",
      accent: "bg-purple-500"
    },
    pink: {
      gradient: "from-pink-500/10 to-pink-600/10",
      border: "border-pink-500/20",
      hoverBorder: "group-hover:border-pink-400/40",
      icon: "text-pink-500",
      iconBg: "bg-pink-500/10",
      accent: "bg-pink-500"
    },
    orange: {
      gradient: "from-orange-500/10 to-orange-600/10",
      border: "border-orange-500/20",
      hoverBorder: "group-hover:border-orange-400/40",
      icon: "text-orange-500",
      iconBg: "bg-orange-500/10",
      accent: "bg-orange-500"
    }
  }
  
  return (
    <section className="relative bg-muted/30 py-24 lg:py-32 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--muted-foreground) / 0.15) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>
      
      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border mb-6"
            >
              <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
                Our Community
              </span>
            </motion.div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground tracking-tight mb-4">
              Who We Help
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Supporting diverse individuals and organizations on their global journey
            </p>
          </motion.div>

          {/* 4-Card Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {audience.map((item, i) => {
              const Icon = item.icon
              const colors = colorClasses[item.color as keyof typeof colorClasses]
              
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
                    className={`relative h-full bg-card border-2 ${colors.border} ${colors.hoverBorder} rounded-2xl p-8 overflow-hidden transition-all duration-500`}
                    whileHover={{ 
                      y: -12,
                      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)"
                    }}
                  >
                    {/* Gradient background on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0`}
                      animate={{
                        opacity: hoveredCard === i ? 1 : 0,
                      }}
                      transition={{ duration: 0.4 }}
                    />
                    
                    {/* Animated corner decoration */}
                    <motion.div
                      className={`absolute -top-12 -right-12 w-32 h-32 ${colors.iconBg} rounded-full blur-2xl`}
                      animate={{
                        scale: hoveredCard === i ? 1.5 : 1,
                        opacity: hoveredCard === i ? 0.6 : 0.3,
                      }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    {/* Content */}
                    <div className="relative z-10 space-y-6 flex flex-col h-full">
                      {/* Icon */}
                      <div className="relative">
                        {/* Pulsing ring */}
                        <motion.div
                          className={`absolute inset-0 rounded-2xl border-2 ${colors.border}`}
                          animate={{
                            scale: hoveredCard === i ? [1, 1.2, 1.2] : 1,
                            opacity: hoveredCard === i ? [0.5, 0, 0] : 0,
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: hoveredCard === i ? Infinity : 0,
                            ease: "easeOut"
                          }}
                        />
                        
                        {/* Icon container */}
                        <motion.div
                          className={`relative w-16 h-16 rounded-2xl ${colors.iconBg} border ${colors.border} flex items-center justify-center`}
                          animate={{
                            rotate: hoveredCard === i ? [0, -5, 5, 0] : 0,
                            scale: hoveredCard === i ? 1.1 : 1,
                          }}
                          transition={{
                            rotate: { duration: 0.5 },
                            scale: { duration: 0.3 }
                          }}
                        >
                          <Icon className={`w-8 h-8 ${colors.icon}`} />
                        </motion.div>
                        
                        {/* Floating particles */}
                        {hoveredCard === i && (
                          <>
                            {[...Array(4)].map((_, j) => (
                              <motion.div
                                key={j}
                                className={`absolute w-1.5 h-1.5 ${colors.accent} rounded-full`}
                                style={{
                                  top: "50%",
                                  left: "50%",
                                }}
                                initial={{ scale: 0, x: 0, y: 0 }}
                                animate={{
                                  scale: [0, 1, 0],
                                  x: [0, Math.cos(j * Math.PI / 2) * 40],
                                  y: [0, Math.sin(j * Math.PI / 2) * 40],
                                }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  delay: j * 0.15
                                }}
                              />
                            ))}
                          </>
                        )}
                      </div>

                      {/* Title */}
                      <motion.h3 
                        className="text-2xl font-semibold text-card-foreground tracking-tight"
                        animate={{
                          y: hoveredCard === i ? -4 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p 
                        className="text-muted-foreground leading-relaxed flex-grow"
                        animate={{
                          y: hoveredCard === i ? -4 : 0,
                        }}
                        transition={{ duration: 0.3, delay: 0.05 }}
                      >
                        {item.description}
                      </motion.p>

                      {/* Bottom accent line */}
                      <motion.div
                        className={`h-1 ${colors.accent} rounded-full mt-auto`}
                        initial={{ width: "30%" }}
                        animate={{
                          width: hoveredCard === i ? "100%" : "30%"
                        }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>

                    {/* Shine effect on hover */}
                    {hoveredCard === i && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
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