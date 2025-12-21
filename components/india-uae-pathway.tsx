"use client"

import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useState, useRef, MouseEvent } from "react"
import { Button } from "@/components/ui/button"

export function IndiaUaePathwaysSection() {
  const [hoveredFocus, setHoveredFocus] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Mouse tracking for interactive effects
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 150 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["2deg", "-2deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-2deg", "2deg"])
  
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseXPos = e.clientX - rect.left
    const mouseYPos = e.clientY - rect.top
    const xPct = mouseXPos / width - 0.5
    const yPct = mouseYPos / height - 0.5
    mouseX.set(xPct)
    mouseY.set(yPct)
  }
  
  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }
  
  const focusAreas = [
    "Education and career system alignment",
    "Skill readiness and professional positioning",
    "Long-term global career planning"
  ]
  
  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24 lg:py-32 overflow-hidden"
    >
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Grid pattern with parallax */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
          rotateX,
          rotateY,
        }}
      />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
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
                <Sparkles className="w-4 h-4 text-blue-400" />
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
                  Focus areas include:
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
                      className="relative flex items-start gap-4 p-5 rounded-xl transition-all duration-300 overflow-hidden"
                      animate={{
                        backgroundColor: hoveredFocus === i ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.02)",
                        x: hoveredFocus === i ? 8 : 0,
                      }}
                    >
                      {/* Animated gradient border on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-xl opacity-0"
                        style={{
                          background: "linear-gradient(90deg, rgba(59,130,246,0.5), rgba(168,85,247,0.5), rgba(236,72,153,0.5))",
                          padding: "2px",
                          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                          WebkitMaskComposite: "xor",
                          maskComposite: "exclude",
                        }}
                        animate={{
                          opacity: hoveredFocus === i ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Shimmer effect */}
                      {hoveredFocus === i && (
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
                      
                      <motion.div
                        className="relative z-10"
                        animate={{
                          scale: hoveredFocus === i ? 1.2 : 1,
                          rotate: hoveredFocus === i ? [0, -10, 10, 0] : 0,
                        }}
                        transition={{ 
                          scale: { duration: 0.3 },
                          rotate: { duration: 0.5 }
                        }}
                      >
                        <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                      </motion.div>
                      
                      <p className="text-gray-300 leading-relaxed relative z-10">
                        {area}
                      </p>
                      
                      {/* Particle burst on hover */}
                      {hoveredFocus === i && (
                        <div className="absolute left-8 top-1/2 -translate-y-1/2">
                          {[...Array(5)].map((_, j) => (
                            <motion.div
                              key={j}
                              className="absolute w-1 h-1 bg-blue-400 rounded-full"
                              initial={{ x: 0, y: 0, opacity: 0 }}
                              animate={{
                                x: [0, Math.cos(j * 72 * Math.PI / 180) * 30],
                                y: [0, Math.sin(j * 72 * Math.PI / 180) * 30],
                                opacity: [1, 0],
                                scale: [1, 0],
                              }}
                              transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                delay: j * 0.1
                              }}
                            />
                          ))}
                        </div>
                      )}
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
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="relative bg-white text-gray-900 hover:bg-gray-100 px-8 h-14 text-base font-medium rounded-lg group shadow-2xl overflow-hidden"
                  >
                    {/* Animated gradient background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      style={{ backgroundSize: "200% 100%" }}
                    />
                    <span className="relative z-10">Explore Pathways</span>
                    <ArrowRight className="relative z-10 ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </motion.div>
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
              <div className="relative w-full max-w-md mx-auto h-[600px]">
                
                {/* Vertical connecting line with gradient */}
                <motion.div
                  className="absolute left-1/2 top-[20%] bottom-[20%] w-1 -translate-x-1/2 rounded-full overflow-hidden"
                  style={{
                    background: "linear-gradient(to bottom, #60a5fa, #a78bfa, #ec4899)"
                  }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  {/* Flowing light effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent"
                    animate={{
                      y: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>
                
                {/* Top circle - India */}
                <motion.div
                  className="absolute left-1/2 top-0 -translate-x-1/2"
                  initial={{ scale: 0, opacity: 0, y: -50 }}
                  whileInView={{ scale: 1, opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -8 }}
                >
                  <div className="relative cursor-pointer group">
                    {/* Pulsing rings */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 rounded-3xl border-2 border-blue-400/30"
                        animate={{
                          scale: [1, 1.3, 1.3],
                          opacity: [0.6, 0, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeOut",
                          delay: i * 1
                        }}
                      />
                    ))}
                    
                    {/* Main card with flag image */}
                    <div className="relative w-72 h-48 rounded-3xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-2 border-white/20 backdrop-blur-xl shadow-2xl overflow-hidden group-hover:border-blue-400/40 transition-colors">
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0"
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      
                      {/* Flag Image */}
                      <div className="relative w-full h-full p-6 flex flex-col items-center justify-center">
                        <motion.img
                          src="https://flagcdn.com/w320/in.png"
                          alt="India Flag"
                          className="w-full h-24 object-contain rounded-lg shadow-lg mb-4"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white uppercase tracking-wider mb-1">
                            India
                          </div>
                          <div className="text-sm text-gray-300">
                            Education Hub
                          </div>
                        </div>
                      </div>
                      
                      {/* Corner accent */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/30 to-transparent rounded-bl-3xl" />
                    </div>
                  </div>
                </motion.div>
                
                {/* Center connecting element */}
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1, type: "spring" }}
                >
                  <motion.div
                    className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center shadow-2xl"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <div className="absolute inset-1 rounded-full bg-gray-900 flex items-center justify-center">
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      >
                        <ArrowRight className="w-6 h-6 text-white rotate-90" />
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Bottom circle - UAE */}
                <motion.div
                  className="absolute left-1/2 bottom-0 -translate-x-1/2"
                  initial={{ scale: 0, opacity: 0, y: 50 }}
                  whileInView={{ scale: 1, opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                  whileHover={{ scale: 1.05, y: 8 }}
                >
                  <div className="relative cursor-pointer group">
                    {/* Pulsing rings */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 rounded-3xl border-2 border-purple-400/30"
                        animate={{
                          scale: [1, 1.3, 1.3],
                          opacity: [0.6, 0, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeOut",
                          delay: 0.5 + i * 1
                        }}
                      />
                    ))}
                    
                    {/* Main card with flag image */}
                    <div className="relative w-72 h-48 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-white/20 backdrop-blur-xl shadow-2xl overflow-hidden group-hover:border-purple-400/40 transition-colors">
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0"
                        animate={{
                          rotate: [360, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      
                      {/* Flag Image */}
                      <div className="relative w-full h-full p-6 flex flex-col items-center justify-center">
                        <motion.img
                          src="https://flagcdn.com/w320/ae.png"
                          alt="UAE Flag"
                          className="w-full h-24 object-contain rounded-lg shadow-lg mb-4"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white uppercase tracking-wider mb-1">
                            UAE
                          </div>
                          <div className="text-sm text-gray-300">
                            Career Opportunities
                          </div>
                        </div>
                      </div>
                      
                      {/* Corner accent */}
                      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tl from-purple-400/30 to-transparent rounded-tr-3xl" />
                    </div>
                  </div>
                </motion.div>
                
                {/* Animated particles flowing between countries */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                    style={{
                      background: `linear-gradient(45deg, ${i % 2 === 0 ? '#60a5fa' : '#a78bfa'}, ${i % 2 === 0 ? '#a78bfa' : '#ec4899'})`,
                      boxShadow: `0 0 10px ${i % 2 === 0 ? '#60a5fa' : '#a78bfa'}`,
                    }}
                    animate={{
                      y: ["20%", "80%"],
                      x: [
                        0,
                        Math.sin(i * 0.8) * 30,
                        Math.sin(i * 0.8 + Math.PI) * 30,
                        0
                      ],
                      opacity: [0, 1, 1, 0],
                      scale: [0, 1.5, 1.5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.4,
                      ease: "easeInOut"
                    }}
                  />
                ))}
                
                {/* Orbiting stars */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`star-${i}`}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: "50%",
                      top: "50%",
                    }}
                    animate={{
                      x: Math.cos(i * 60 * Math.PI / 180) * 150,
                      y: Math.sin(i * 60 * Math.PI / 180) * 250,
                      opacity: [0.2, 1, 0.2],
                      scale: [0.5, 1.5, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}