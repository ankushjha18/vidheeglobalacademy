"use client"

import { ArrowRight, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function IndiaUaePathwaysSection() {
  const [hoveredFocus, setHoveredFocus] = useState<number | null>(null)
  
  const focusAreas = [
    "Education and career system alignment",
    "Skill readiness and professional positioning",
    "Long-term global career planning"
  ]
  
  return (
    <section className="relative bg-gray-900 dark:bg-gray-950 py-24 lg:py-32 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-500/10 to-transparent" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/10 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* LEFT COLUMN - Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
              >
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white/90 tracking-wide">
                  SIGNATURE EXPERTISE
                </span>
              </motion.div>
              
              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight tracking-tight"
              >
                India–UAE
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Global Pathways
                </span>
              </motion.h2>
              
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="space-y-6"
              >
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                  The India–UAE corridor presents growing opportunities across education, teaching, and professional careers.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  At ViDHEE Global Academy, we help individuals understand systems, align skills, and prepare for global pathways with confidence and clarity.
                </p>
              </motion.div>
              
              {/* Focus Areas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="space-y-4 pt-4"
              >
                <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-6">
                  Focus Areas
                </h3>
                {focusAreas.map((area, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    onHoverStart={() => setHoveredFocus(i)}
                    onHoverEnd={() => setHoveredFocus(null)}
                    className="group relative"
                  >
                    <motion.div
                      className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300"
                      animate={{
                        backgroundColor: hoveredFocus === i ? "rgba(255,255,255,0.05)" : "transparent",
                        x: hoveredFocus === i ? 8 : 0,
                      }}
                    >
                      <motion.div
                        animate={{
                          scale: hoveredFocus === i ? 1.2 : 1,
                          rotate: hoveredFocus === i ? 360 : 0,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                      </motion.div>
                      <p className="text-gray-300 leading-relaxed">
                        {area}
                      </p>
                      
                      {/* Hover line */}
                      <motion.div
                        className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400 rounded-r-full"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: hoveredFocus === i ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="pt-6"
              >
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 px-8 h-14 text-base font-medium rounded-lg group shadow-lg hover:shadow-xl transition-all"
                >
                  Explore Pathways
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
            
            {/* RIGHT COLUMN - Symbolic Global Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                
                {/* Central connecting line */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-3/4 h-0.5 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    background: "linear-gradient(to right, #60a5fa, #a78bfa, #ec4899)"
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                
                {/* Left circle - India */}
                <motion.div
                  className="absolute left-0 top-1/2 -translate-y-1/2"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="relative">
                    {/* Pulsing rings */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-blue-400/30"
                      animate={{
                        scale: [1, 1.5, 1.5],
                        opacity: [0.5, 0, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-blue-400/30"
                      animate={{
                        scale: [1, 1.5, 1.5],
                        opacity: [0.5, 0, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: 1
                      }}
                    />
                    
                    {/* Main circle */}
                    <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-4 border-white/20 flex items-center justify-center backdrop-blur-sm shadow-2xl">
                      <div className="text-center">
                        <div className="text-3xl mb-1">🇮🇳</div>
                        <div className="text-xs font-semibold text-white uppercase tracking-wider">
                          India
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Right circle - UAE */}
                <motion.div
                  className="absolute right-0 top-1/2 -translate-y-1/2"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="relative">
                    {/* Pulsing rings */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-purple-400/30"
                      animate={{
                        scale: [1, 1.5, 1.5],
                        opacity: [0.5, 0, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: 0.5
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-purple-400/30"
                      animate={{
                        scale: [1, 1.5, 1.5],
                        opacity: [0.5, 0, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: 1.5
                      }}
                    />
                    
                    {/* Main circle */}
                    <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-4 border-white/20 flex items-center justify-center backdrop-blur-sm shadow-2xl">
                      <div className="text-center">
                        <div className="text-3xl mb-1">🇦🇪</div>
                        <div className="text-xs font-semibold text-white uppercase tracking-wider">
                          UAE
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Animated particles along the path */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/4 w-2 h-2 bg-white rounded-full"
                    style={{
                      left: `${25 + (i * 6.25)}%`,
                    }}
                    animate={{
                      x: ["0%", "100%"],
                      opacity: [0, 1, 1, 0],
                      scale: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
                
                {/* Orbiting elements */}
                <motion.div
                  className="absolute top-1/4 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="w-4 h-4 bg-blue-400 rounded-full blur-sm" />
                </motion.div>
                
                <motion.div
                  className="absolute bottom-1/4 left-1/2 w-16 h-16 -translate-x-1/2 translate-y-1/2"
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="w-4 h-4 bg-purple-400 rounded-full blur-sm" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}