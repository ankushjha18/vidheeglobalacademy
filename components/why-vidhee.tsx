"use client"

import { motion } from "framer-motion"
import { Shield, Globe, UserCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function WhyVidhee() {
  const features = [
    {
      icon: Shield,
      title: "Trusted Guidance",
      description: "Experienced subject experts and career counsellors providing reliable academic and career guidance for students and educators.",
    },
    {
      icon: Globe,
      title: "Global Exposure",
      description: "Academic excellence combined with international exposure, connecting learners to opportunities across India and the UAE.",
    },
    {
      icon: UserCheck,
      title: "Personalized Mentoring",
      description: "Personalised tuition and one-to-one mentoring tailored to individual goals, learning styles, and aspirations.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Why Choose ViDHEE?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            We bring together expertise, dedication, and a global network to guide you toward success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group cursor-default">
                <CardContent className="pt-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-balance">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
