"use client"

import { motion } from "framer-motion"
import { Mail, CheckCircle2, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterPage() {
  const benefits = [
    "Weekly education and career insights delivered to your inbox",
    "Exclusive scholarship opportunities and deadlines",
    "Early access to webinars and events",
    "Success stories from students and professionals",
    "Expert tips from career counselors",
    "Updates on global education trends",
  ]

  return (
    <div className="min-h-screen pt-32 pb-20">
      <section className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Mail className="h-4 w-4" />
            Resource Type
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Newsletter
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Stay informed with curated insights on education, careers, and global opportunities.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            <Mail className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-center mb-6">Subscribe to Our Newsletter</h2>
            <form className="space-y-4">
              <div>
                <Input type="text" placeholder="Your Name" className="w-full" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email Address" className="w-full" />
              </div>
              <Button type="submit" className="w-full rounded-full" size="lg">
                Subscribe Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Join 10,000+ subscribers. Unsubscribe anytime.
            </p>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What You'll Get</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 rounded-lg hover:bg-primary/5 transition-colors"
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
