"use client"

import { Award, Users, Globe2, Shield } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export function TrustStripSection() {
  const [hoveredTrust, setHoveredTrust] = useState<number | null>(null)
  
  const trustItems = [
    { icon: Award, text: "Years of Experience" },
    { icon: Users, text: "One-to-One Mentoring" },
    { icon: Globe2, text: "India–UAE Expertise" },
    { icon: Shield, text: "Ethical Guidance" }
  ]
  
  return (
    <section className="border-t border-border bg-muted/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {trustItems.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                onHoverStart={() => setHoveredTrust(i)}
                onHoverEnd={() => setHoveredTrust(null)}
                className="relative group cursor-default"
              >
                {/* Hover background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl -m-4 p-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: hoveredTrust === i ? 1 : 0,
                    scale: hoveredTrust === i ? 1 : 0.9
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative flex flex-col items-center text-center space-y-3">
                  {/* Icon container with multiple effects */}
                  <div className="relative">
                    {/* Pulsing ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-primary/30"
                      animate={{
                        scale: hoveredTrust === i ? [1, 1.4, 1.4] : 1,
                        opacity: hoveredTrust === i ? [0.5, 0, 0] : 0,
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: hoveredTrust === i ? Infinity : 0,
                        ease: "easeOut"
                      }}
                    />
                    
                    {/* Rotating border */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "conic-gradient(from 0deg, transparent, var(--primary), transparent)",
                        padding: "2px",
                      }}
                      animate={{
                        rotate: hoveredTrust === i ? 360 : 0,
                        opacity: hoveredTrust === i ? 0.5 : 0,
                      }}
                      transition={{
                        rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                        opacity: { duration: 0.3 }
                      }}
                    />
                    
                    {/* Icon */}
                    <motion.div
                      className="relative w-14 h-14 rounded-full bg-background border border-border flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      animate={{
                        y: hoveredTrust === i ? [0, -4, 0] : 0,
                      }}
                      transition={{
                        y: { duration: 0.6, repeat: hoveredTrust === i ? Infinity : 0 }
                      }}
                    >
                      <motion.div
                        animate={{
                          rotate: hoveredTrust === i ? [0, 10, -10, 0] : 0,
                        }}
                        transition={{
                          duration: 0.5,
                          repeat: hoveredTrust === i ? Infinity : 0,
                          repeatDelay: 0.5
                        }}
                      >
                        <Icon className="w-6 h-6 text-primary" />
                      </motion.div>
                    </motion.div>
                    
                    {/* Sparkles */}
                    {hoveredTrust === i && (
                      <>
                        {[...Array(4)].map((_, j) => (
                          <motion.div
                            key={j}
                            className="absolute w-1 h-1 bg-primary rounded-full"
                            style={{
                              top: "50%",
                              left: "50%",
                            }}
                            initial={{ scale: 0, x: 0, y: 0 }}
                            animate={{
                              scale: [0, 1, 0],
                              x: [0, Math.cos(j * Math.PI / 2) * 30],
                              y: [0, Math.sin(j * Math.PI / 2) * 30],
                            }}
                            transition={{
                              duration: 0.8,
                              repeat: Infinity,
                              delay: j * 0.1
                            }}
                          />
                        ))}
                      </>
                    )}
                  </div>
                  
                  {/* Text with letter animation */}
                  <motion.p 
                    className="text-sm font-medium text-foreground"
                    animate={{
                      color: hoveredTrust === i ? "var(--primary)" : "var(--foreground)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.text.split(' ').map((word, wordIndex) => (
                      <motion.span
                        key={wordIndex}
                        className="inline-block"
                        animate={{
                          y: hoveredTrust === i ? [0, -2, 0] : 0,
                        }}
                        transition={{
                          duration: 0.4,
                          delay: wordIndex * 0.05,
                          repeat: hoveredTrust === i ? Infinity : 0,
                          repeatDelay: 0.5
                        }}
                      >
                        {word}
                        {wordIndex < item.text.split(' ').length - 1 && ' '}
                      </motion.span>
                    ))}
                  </motion.p>
                  
                  {/* Bottom accent line */}
                  <motion.div
                    className="h-0.5 bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: hoveredTrust === i ? "100%" : 0 
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}