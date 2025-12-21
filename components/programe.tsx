"use client"

import { BookOpen, Award, TrendingUp, Globe, ArrowRight, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ProgramsServicesSection() {
  const [hoveredProgram, setHoveredProgram] = useState<number | null>(null)
  
  const programs = [
    {
      icon: BookOpen,
      title: "Student Guidance Programs",
      description: "Structured support for academic planning, career exploration, and global readiness.",
      features: ["Academic Planning", "Career Exploration", "Global Readiness"],
      color: "blue"
    },
    {
      icon: Award,
      title: "Educator Development Programs",
      description: "Training and mentoring designed to strengthen teaching careers and international prospects.",
      features: ["Professional Training", "Career Mentoring", "International Prospects"],
      color: "purple"
    },
    {
      icon: TrendingUp,
      title: "Career Transition Programs",
      description: "Guidance for professionals planning role changes, industry shifts, or global career moves.",
      features: ["Role Changes", "Industry Shifts", "Global Moves"],
      color: "pink"
    },
    {
      icon: Globe,
      title: "International Pathway Programs",
      description: "End-to-end mentoring for education and career opportunities across borders.",
      features: ["End-to-End Support", "Cross-Border Opportunities", "Comprehensive Guidance"],
      color: "orange"
    }
  ]
  
  const colorClasses = {
    blue: {
      bg: "from-blue-500/5 to-blue-600/5",
      border: "border-blue-500/20",
      icon: "text-blue-500",
      iconBg: "bg-blue-500/10",
      accent: "bg-blue-500",
      dot: "bg-blue-500"
    },
    purple: {
      bg: "from-purple-500/5 to-purple-600/5",
      border: "border-purple-500/20",
      icon: "text-purple-500",
      iconBg: "bg-purple-500/10",
      accent: "bg-purple-500",
      dot: "bg-purple-500"
    },
    pink: {
      bg: "from-pink-500/5 to-pink-600/5",
      border: "border-pink-500/20",
      icon: "text-pink-500",
      iconBg: "bg-pink-500/10",
      accent: "bg-pink-500",
      dot: "bg-pink-500"
    },
    orange: {
      bg: "from-orange-500/5 to-orange-600/5",
      border: "border-orange-500/20",
      icon: "text-orange-500",
      iconBg: "bg-orange-500/10",
      accent: "bg-orange-500",
      dot: "bg-orange-500"
    }
  }
  
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-6"
            >
              <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
                What We Offer
              </span>
            </motion.div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground tracking-tight mb-4">
              Programs & Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive programs designed to support your unique journey
            </p>
          </motion.div>

          {/* Programs Grid */}
          <div className="space-y-6">
            {programs.map((program, i) => {
              const Icon = program.icon
              const colors = colorClasses[program.color as keyof typeof colorClasses]
              
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  onHoverStart={() => setHoveredProgram(i)}
                  onHoverEnd={() => setHoveredProgram(null)}
                  className="group relative"
                >
                  <motion.div
                    className={`relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500`}
                    whileHover={{ 
                      y: -4,
                      boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)"
                    }}
                  >
                    {/* Gradient overlay on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0`}
                      animate={{
                        opacity: hoveredProgram === i ? 1 : 0,
                      }}
                      transition={{ duration: 0.4 }}
                    />
                    
                    {/* Content Container */}
                    <div className="relative z-10 p-8 lg:p-10">
                      <div className="grid lg:grid-cols-12 gap-8 items-start">
                        
                        {/* Left: Icon & Title (4 cols) */}
                        <div className="lg:col-span-4 space-y-4">
                          {/* Icon */}
                          <div className="relative inline-block">
                            {/* Pulsing background */}
                            <motion.div
                              className={`absolute inset-0 ${colors.iconBg} rounded-2xl blur-xl`}
                              animate={{
                                scale: hoveredProgram === i ? [1, 1.3, 1] : 1,
                                opacity: hoveredProgram === i ? [0.5, 0.8, 0.5] : 0,
                              }}
                              transition={{
                                duration: 2,
                                repeat: hoveredProgram === i ? Infinity : 0,
                              }}
                            />
                            
                            <motion.div
                              className={`relative w-20 h-20 rounded-2xl ${colors.iconBg} border ${colors.border} flex items-center justify-center`}
                              animate={{
                                rotate: hoveredProgram === i ? [0, -10, 10, -10, 0] : 0,
                                scale: hoveredProgram === i ? 1.05 : 1,
                              }}
                              transition={{
                                rotate: { duration: 0.6 },
                                scale: { duration: 0.3 }
                              }}
                            >
                              <Icon className={`w-10 h-10 ${colors.icon}`} />
                            </motion.div>
                          </div>
                          
                          {/* Title */}
                          <motion.h3
                            className="text-2xl lg:text-3xl font-semibold text-card-foreground tracking-tight"
                            animate={{
                              x: hoveredProgram === i ? 4 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {program.title}
                          </motion.h3>
                        </div>
                        
                        {/* Subtle divider */}
                        <div className="hidden lg:block lg:col-span-1">
                          <motion.div 
                            className={`w-px h-full ${colors.accent} mx-auto`}
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 + 0.3, duration: 0.6 }}
                          />
                        </div>
                        
                        {/* Right: Description & Features (7 cols) */}
                        <div className="lg:col-span-7 space-y-6">
                          {/* Description */}
                          <motion.p
                            className="text-lg text-muted-foreground leading-relaxed"
                            animate={{
                              x: hoveredProgram === i ? 4 : 0,
                            }}
                            transition={{ duration: 0.3, delay: 0.05 }}
                          >
                            {program.description}
                          </motion.p>
                          
                          {/* Features */}
                          <div className="grid md:grid-cols-3 gap-4">
                            {program.features.map((feature, j) => (
                              <motion.div
                                key={j}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 + j * 0.05 + 0.4 }}
                                className="flex items-center gap-2"
                              >
                                <motion.div
                                  animate={{
                                    scale: hoveredProgram === i ? [1, 1.2, 1] : 1,
                                  }}
                                  transition={{
                                    duration: 0.5,
                                    delay: j * 0.1
                                  }}
                                >
                                  <CheckCircle2 className={`w-4 h-4 ${colors.icon} flex-shrink-0`} />
                                </motion.div>
                                <span className="text-sm text-muted-foreground font-medium">
                                  {feature}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                          
                          {/* CTA */}
                          <motion.div
                            animate={{
                              x: hoveredProgram === i ? 8 : 0,
                              opacity: hoveredProgram === i ? 1 : 0.7,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <Button
                              variant="ghost"
                              className={`group/btn ${colors.icon} hover:bg-transparent p-0 h-auto font-medium`}
                            >
                              Learn More
                              <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom accent line */}
                    <motion.div
                      className={`h-1 ${colors.accent}`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.5, duration: 0.8 }}
                      style={{ transformOrigin: "left" }}
                    />
                    
                    {/* Shine effect on hover */}
                    {hoveredProgram === i && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
                        initial={{ x: "-100%" }}
                        animate={{ x: "200%" }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    )}
                  </motion.div>
                  
                  {/* Decorative corner element */}
                  <motion.div
                    className={`absolute -top-2 -right-2 w-4 h-4 ${colors.accent} rounded-full opacity-0`}
                    animate={{
                      opacity: hoveredProgram === i ? 1 : 0,
                      scale: hoveredProgram === i ? [0, 1.2, 1] : 0,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              )
            })}
          </div>
          
          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base font-medium rounded-lg group shadow-lg"
              >
                View All Programs
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}