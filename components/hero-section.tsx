"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export function HeroSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  
  const cards = [
    { 
      title: "Education Guidance", 
      subtitle: "Strategic academic planning",
      image: "https://media.istockphoto.com/id/1175911679/photo/leadership-concept-with-paper-airplanes.jpg?s=612x612&w=0&k=20&c=2RySVG82WQF8oi2AIpEnbJEnpfpOW0pwVNaAT1bSH9U="
    },
    { 
      title: "Career Growth", 
      subtitle: "Professional development pathways",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },
    { 
      title: "India–UAE Bridge", 
      subtitle: "Cross-border opportunities",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80"
    }
  ]
  
  return (
    <section className="relative bg-background min-h-screen flex items-center py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          
          {/* LEFT SIDE - TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* 1. Identity Line */}
            <div className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-light">
              Education • Careers • Global Pathways
            </div>

            {/* 2. Main Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] text-foreground tracking-tight">
              Guiding education and careers beyond borders
            </h1>

            {/* 3. Supporting Line */}
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Strategic pathways connecting Indian ambition with UAE opportunities through expert guidance and proven results.
            </p>

            {/* 4. CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {/* Primary Button - Magnetic + Ripple Effect */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg" 
                  className="relative bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base font-medium rounded-lg group overflow-hidden transition-all shadow-lg hover:shadow-xl"
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%]"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                  
                  {/* Particles effect */}
                  <motion.div
                    className="absolute inset-0"
                    initial="rest"
                    whileHover="hover"
                  >
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/50 rounded-full"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: "50%",
                        }}
                        variants={{
                          rest: { y: 0, opacity: 0 },
                          hover: {
                            y: [0, -20, -40],
                            opacity: [0, 1, 0],
                            transition: {
                              duration: 1,
                              delay: i * 0.1,
                              repeat: Infinity,
                            }
                          }
                        }}
                      />
                    ))}
                  </motion.div>
                  
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                  </span>
                </Button>
              </motion.div>
              
              {/* Secondary Button - Border Animation + Glow */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  className="relative border-2 border-border hover:border-primary text-foreground px-8 h-14 text-base font-medium rounded-lg transition-all group overflow-hidden backdrop-blur-sm"
                >
                  {/* Rotating border gradient */}
                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "conic-gradient(from 0deg, transparent, var(--primary), transparent)",
                      padding: "2px",
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Inner glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent rounded-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Morphing background shapes */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial="rest"
                    whileHover="hover"
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-20 h-20 bg-accent/10 rounded-full blur-xl"
                        style={{
                          left: `${i * 30}%`,
                          top: "50%",
                        }}
                        variants={{
                          rest: { scale: 0, y: 0 },
                          hover: {
                            scale: [0, 1.5, 0],
                            y: [0, -10, 0],
                            transition: {
                              duration: 2,
                              delay: i * 0.2,
                              repeat: Infinity,
                            }
                          }
                        }}
                      />
                    ))}
                  </motion.div>
                  
                  <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                    Learn More
                  </span>
                  
                  {/* Corner accents */}
                  <motion.div
                    className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary rounded-tl-lg opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary rounded-br-lg opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - CONCEPT CARD STACK */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full max-w-lg ml-auto">
              {/* Card Stack Container */}
              <div className="relative h-[500px]">
                {cards.map((card, i) => {
                  const baseRotation = (i - 1) * 4
                  const baseTranslateY = i * 20
                  
                  return (
                    <motion.div
                      key={i}
                      className="absolute inset-0 cursor-pointer"
                      style={{
                        zIndex: hoveredCard === i ? 50 : 10 - i,
                      }}
                      initial={{
                        rotate: baseRotation,
                        y: baseTranslateY,
                      }}
                      animate={{
                        rotate: hoveredCard === i ? 0 : baseRotation,
                        y: hoveredCard === i ? -20 : baseTranslateY,
                        scale: hoveredCard === i ? 1.02 : 1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                      onHoverStart={() => setHoveredCard(i)}
                      onHoverEnd={() => setHoveredCard(null)}
                    >
                      {/* Card */}
                      <div className="w-full h-full bg-card border-2 border-border rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden transition-all">
                        {/* Card Image */}
                        <div className="relative h-48 overflow-hidden">
                          <motion.img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-full object-cover"
                            animate={{
                              scale: hoveredCard === i ? 1.05 : 1,
                            }}
                            transition={{ duration: 0.4 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>

                        {/* Card Content */}
                        <div className="p-10 flex flex-col justify-between h-[calc(100%-12rem)]">
                          {/* Card Number */}
                          <div className="flex items-start justify-between mb-6">
                            <div className="text-7xl font-bold text-muted">
                              {String(i + 1).padStart(2, '0')}
                            </div>
                            <div className={`w-12 h-12 rounded-full border-2 transition-all ${
                              hoveredCard === i 
                                ? 'border-primary bg-primary' 
                                : 'border-border'
                            }`}>
                              <div className={`w-full h-full rounded-full transition-all ${
                                hoveredCard === i 
                                  ? 'bg-primary-foreground scale-50' 
                                  : 'bg-transparent'
                              }`} />
                            </div>
                          </div>

                          {/* Text Content */}
                          <div className="space-y-3">
                            <h3 className="text-2xl font-semibold text-card-foreground tracking-tight">
                              {card.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {card.subtitle}
                            </p>
                          </div>

                          {/* Bottom Accent Line */}
                          <motion.div 
                            className="h-1 bg-primary rounded-full mt-6"
                            initial={{ width: "30%" }}
                            animate={{ 
                              width: hoveredCard === i ? "100%" : "30%" 
                            }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Subtle Background Element */}
              <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-gray-100 rounded-full -z-10 opacity-50" />
            </div>
          </motion.div>

          {/* Mobile Card Display */}
          <div className="lg:hidden space-y-6">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm"
              >
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-3xl font-bold text-gray-300">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {card.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}