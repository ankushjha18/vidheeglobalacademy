"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { GraduationCap, Users, Award, Globe } from "lucide-react"

function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
      let startTime: number
      let animationFrame: number

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = (currentTime - startTime) / (duration * 1000)

        if (progress < 1) {
          setCount(Math.floor(end * progress))
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, end, duration, hasAnimated])

  return <span ref={ref}>{count}</span>
}

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: 5000,
      suffix: "+",
      label: "Students Guided",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: GraduationCap,
      value: 150,
      suffix: "+",
      label: "Partner Universities",
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      icon: Globe,
      value: 25,
      suffix: "+",
      label: "Countries Covered",
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      icon: Award,
      value: 98,
      suffix: "%",
      label: "Success Rate",
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering thousands of students to achieve their global education dreams
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-border/50 overflow-hidden">
                <div
                  className={`${stat.bg} ${stat.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6`}
                >
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold mb-2 text-foreground">
                  <Counter end={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
