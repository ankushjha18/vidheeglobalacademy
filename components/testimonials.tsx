"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [autoPlay, setAutoPlay] = useState(true)

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Teacher, Dubai",
      content:
        "ViDHEE guided me through the entire process of getting my UAE teaching license. Within 6 months, I was working at a top international school in Dubai!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    },
    {
      name: "Rahul Menon",
      role: "Engineering Student",
      content:
        "The team helped me secure admission to one of the UAE's best universities with a scholarship. Their guidance was invaluable throughout the application process.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    },
    {
      name: "Sarah Ahmed",
      role: "HR Professional",
      content:
        "Transitioning my career from India to the UAE seemed daunting, but ViDHEE made it seamless. They optimized my resume and prepared me for interviews.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    },
    {
      name: "Amit Patel",
      role: "Business Analyst",
      content:
        "From career counseling to job placement, ViDHEE's comprehensive support helped me land my dream role in Abu Dhabi. Highly recommended!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    },
    {
      name: "Neha Singh",
      role: "Medical Professional",
      content:
        "The personalized guidance I received for my UAE medical license was exceptional. ViDHEE's expertise made a complex process surprisingly smooth.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80",
    },
  ]

  const visibleCards = 3
  const canGoNext = currentIndex < testimonials.length - visibleCards
  const canGoPrev = currentIndex > 0

  const next = () => {
    if (canGoNext) {
      setCurrentIndex(prev => prev + 1)
    }
  }

  const prev = () => {
    if (canGoPrev) {
      setCurrentIndex(prev => prev - 1)
    }
  }

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return
    
    const interval = setInterval(() => {
      if (currentIndex >= testimonials.length - visibleCards) {
        setCurrentIndex(0)
      } else {
        setCurrentIndex(prev => prev + 1)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, autoPlay, testimonials.length])

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-muted/30 overflow-hidden"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border mb-6"
          >
            <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
              Testimonials
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-foreground">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Hear from those who achieved their global dreams with ViDHEE
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              onClick={prev}
              disabled={!canGoPrev}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 disabled:opacity-30 hover:scale-110 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <Button
              onClick={next}
              disabled={!canGoNext}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 disabled:opacity-30 hover:scale-110 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Carousel Track */}
          <div className="relative h-[400px] mb-8">
            <AnimatePresence mode="sync">
              {testimonials.map((testimonial, i) => {
                const position = i - currentIndex
                const isVisible = position >= 0 && position < visibleCards
                
                if (!isVisible) return null

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 300, scale: 0.8 }}
                    animate={{
                      opacity: position === 1 ? 1 : 0.6,
                      x: `${position * 105}%`,
                      scale: position === 1 ? 1 : 0.85,
                      zIndex: position === 1 ? 20 : 10,
                    }}
                    exit={{ opacity: 0, x: -300, scale: 0.8 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut"
                    }}
                    onHoverStart={() => setHoveredCard(i)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className="absolute left-0 w-[calc(95%/3)] top-0"
                    style={{
                      transformOrigin: "center center"
                    }}
                  >
                    <Card className="h-full border-2 border-border transition-all duration-300 group overflow-hidden relative">
                      {/* Animated gradient background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent opacity-0"
                        animate={{
                          opacity: hoveredCard === i ? 1 : 0,
                        }}
                        transition={{ duration: 0.4 }}
                      />
                      
                      {/* Quote decoration */}
                      <motion.div
                        className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center"
                        animate={{
                          scale: hoveredCard === i ? 1 : 0,
                          rotate: hoveredCard === i ? 0 : -180,
                        }}
                        transition={{ duration: 0.4, type: "spring" }}
                      >
                        <Quote className="w-8 h-8 text-primary" />
                      </motion.div>
                      
                      {/* Shine effect */}
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

                      <CardContent className="pt-8 pb-8 px-6 relative z-10 h-full flex flex-col">
                        {/* Stars */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, starIndex) => (
                            <motion.div
                              key={starIndex}
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ 
                                scale: 1, 
                                rotate: 0,
                                y: hoveredCard === i ? [0, -4, 0] : 0
                              }}
                              transition={{ 
                                delay: starIndex * 0.05,
                                y: { 
                                  duration: 0.4,
                                  repeat: hoveredCard === i ? Infinity : 0,
                                  repeatDelay: 0.5
                                }
                              }}
                            >
                              <Star className="h-4 w-4 fill-accent text-accent" />
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Content */}
                        <motion.p 
                          className="text-sm text-muted-foreground mb-6 italic flex-grow"
                          animate={{
                            y: hoveredCard === i ? -4 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          &quot;{testimonial.content}&quot;
                        </motion.p>
                        
                        {/* Profile */}
                        <motion.div 
                          className="flex items-center gap-3"
                          animate={{
                            y: hoveredCard === i ? -4 : 0,
                          }}
                          transition={{ duration: 0.3, delay: 0.05 }}
                        >
                          <div className="relative">
                            {/* Pulsing ring around avatar */}
                            <motion.div
                              className="absolute inset-0 rounded-full border-2 border-primary/30"
                              animate={{
                                scale: hoveredCard === i ? [1, 1.3, 1.3] : 1,
                                opacity: hoveredCard === i ? [0.5, 0, 0] : 0,
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: hoveredCard === i ? Infinity : 0,
                              }}
                            />
                            
                            <motion.img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-14 h-14 rounded-full object-cover border-2 border-border relative z-10"
                              animate={{
                                scale: hoveredCard === i ? 1.1 : 1,
                                rotate: hoveredCard === i ? [0, -5, 5, 0] : 0,
                              }}
                              transition={{
                                scale: { duration: 0.3 },
                                rotate: { duration: 0.5 }
                              }}
                            />
                          </div>
                          
                          <div>
                            <div className="font-semibold text-card-foreground">
                              {testimonial.name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {testimonial.role}
                            </div>
                          </div>
                        </motion.div>
                        
                        {/* Bottom accent line */}
                        <motion.div
                          className="absolute bottom-0 left-0 h-1 bg-primary rounded-t-full"
                          initial={{ width: 0 }}
                          animate={{
                            width: hoveredCard === i ? "100%" : 0
                          }}
                          transition={{ duration: 0.4 }}
                        />
                      </CardContent>
                      
                      {/* Corner decoration */}
                      <motion.div
                        className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent/20 to-transparent rounded-bl-3xl opacity-0"
                        animate={{
                          opacity: hoveredCard === i ? 1 : 0,
                        }}
                        transition={{ duration: 0.4 }}
                      />
                    </Card>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2">
            {Array.from({ length: testimonials.length - visibleCards + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className="group relative"
              >
                <motion.div
                  className={`h-2 rounded-full transition-all ${
                    i === currentIndex ? 'w-12 bg-primary' : 'w-2 bg-border'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}