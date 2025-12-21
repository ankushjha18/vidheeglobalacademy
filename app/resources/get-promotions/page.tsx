"use client"

import { motion } from "framer-motion"
import { TrendingUp, Target, Award, Users, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function GetPromotionsPage() {
  const strategies = [
    {
      title: "Leadership Development",
      description: "Build essential leadership skills through specialized training programs",
      icon: Users,
    },
    {
      title: "Advanced Certifications",
      description: "Earn recognized credentials that demonstrate your expertise and commitment",
      icon: Award,
    },
    {
      title: "Performance Excellence",
      description: "Develop strategies to consistently exceed performance expectations",
      icon: Target,
    },
    {
      title: "Career Advancement Plan",
      description: "Create a personalized roadmap for reaching your next career milestone",
      icon: TrendingUp,
    },
  ]

  const promotionTips = [
    "Document your achievements and impact",
    "Seek additional responsibilities proactively",
    "Build strong professional relationships",
    "Stay current with industry trends",
    "Demonstrate leadership potential",
    "Communicate your career goals clearly",
    "Invest in continuous learning",
    "Mentor junior colleagues",
  ]

  return (
    <div className="min-h-screen pt-32 pb-20">
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="h-4 w-4" />
            Career Objective
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get Promotions
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Accelerate your career growth with strategic guidance. Learn how to position yourself for advancement and
            achieve your professional goals.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full">
              Plan Your Advancement <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Promotion Strategies</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <strategy.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{strategy.title}</h3>
                <p className="text-muted-foreground">{strategy.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Success Factors</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {promotionTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-primary/5 transition-colors"
              >
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span>{tip}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Take the Next Step in Your Career?</h2>
          <p className="text-xl mb-8 opacity-90">Get personalized guidance to accelerate your career advancement</p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="rounded-full">
              Schedule a Career Consultation
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
