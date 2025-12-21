"use client"

import { motion } from "framer-motion"
import { GraduationCap, Users, Briefcase, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CorePillars() {
  const pillars = [
    {
      icon: GraduationCap,
      title: "For Students",
      description: "Education choices & Study Abroad guidance",
      features: ["University Selection", "Application Support", "Visa Assistance", "Scholarship Guidance"],
      color: "from-blue-500/10 to-blue-600/10",
      iconColor: "text-blue-600",
    },
    {
      icon: Users,
      title: "For Educators",
      description: "Professional growth & Certifications",
      features: ["UAE Teaching License", "Professional Development", "Career Coaching", "Interview Preparation"],
      color: "from-primary/10 to-primary/20",
      iconColor: "text-primary",
    },
    {
      icon: Briefcase,
      title: "For Professionals",
      description: "Career transitions & UAE licensing",
      features: ["Resume Optimization", "LinkedIn Branding", "Job Search Strategy", "Credential Evaluation"],
      color: "from-accent/10 to-accent/20",
      iconColor: "text-accent-foreground",
    },
  ]

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Who We Serve</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Tailored pathways for students, educators, and professionals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl group overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <CardHeader className="relative">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <pillar.icon className={`h-7 w-7 ${pillar.iconColor}`} />
                  </div>
                  <CardTitle className="text-2xl">{pillar.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-2 mb-6">
                    {pillar.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group/btn bg-transparent">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
