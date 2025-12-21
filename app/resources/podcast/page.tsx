"use client"

import { motion } from "framer-motion"
import { Mic, Play, Clock, Calendar } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PodcastPage() {
  const episodes = [
    {
      title: "Navigating Career Transitions: From India to UAE",
      guest: "Rajesh Patel, Education Consultant",
      duration: "45 min",
      date: "Jan 18, 2025",
      description: "A deep dive into successful career transitions and the strategies that work.",
    },
    {
      title: "The Future of International Education",
      guest: "Dr. Sarah Johnson, University Dean",
      duration: "52 min",
      date: "Jan 11, 2025",
      description: "Exploring emerging trends and what students should prepare for.",
    },
    {
      title: "Scholarship Success Stories",
      guest: "Multiple Students",
      duration: "38 min",
      date: "Jan 4, 2025",
      description: "Real stories from students who secured full scholarships abroad.",
    },
    {
      title: "Teaching in International Schools",
      guest: "Emily Roberts, IB Coordinator",
      duration: "41 min",
      date: "Dec 28, 2024",
      description: "Insights into teaching careers at international institutions.",
    },
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
            <Mic className="h-4 w-4" />
            Resource Type
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Podcast
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Listen to inspiring conversations with educators, students, and professionals shaping the future of
            education.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {episodes.map((episode, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-24 lg:h-24 w-full h-32 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{episode.title}</h3>
                    <p className="text-muted-foreground mb-3">{episode.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Mic className="h-4 w-4" />
                        {episode.guest}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {episode.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {episode.date}
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-32 flex items-center">
                    <Button className="w-full rounded-full">
                      <Play className="mr-2 h-4 w-4" />
                      Listen
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
