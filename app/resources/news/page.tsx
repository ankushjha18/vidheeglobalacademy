"use client"

import { motion } from "framer-motion"
import { Newspaper, ExternalLink, Calendar } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function NewsPage() {
  const newsItems = [
    {
      title: "ViDHEE Global Academy Partners with Top UAE Universities",
      source: "Gulf News Education",
      date: "Jan 20, 2025",
      excerpt:
        "Leading education consultancy ViDHEE Global Academy announces strategic partnerships with prestigious universities in the UAE...",
    },
    {
      title: "Record Number of Indian Students Choose UAE for Higher Education",
      source: "Education Times",
      date: "Jan 15, 2025",
      excerpt:
        "Latest data shows a 40% increase in Indian students enrolling in UAE institutions, with ViDHEE playing a key role...",
    },
    {
      title: "New Scholarship Programs Launched for International Students",
      source: "The National",
      date: "Jan 10, 2025",
      excerpt:
        "UAE government announces expanded scholarship opportunities for international students across multiple disciplines...",
    },
    {
      title: "Career Counseling Goes Digital: The ViDHEE Approach",
      source: "EdTech Review",
      date: "Jan 5, 2025",
      excerpt:
        "How ViDHEE Global Academy is revolutionizing career counseling through innovative digital platforms and personalized guidance...",
    },
    {
      title: "International Teaching Opportunities Surge in Middle East",
      source: "Teacher Magazine",
      date: "Dec 28, 2024",
      excerpt:
        "Growing demand for qualified international teachers creates unprecedented opportunities in the region...",
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
            <Newspaper className="h-4 w-4" />
            Resource Type
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            In the News
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Stay updated with ViDHEE's impact and the latest developments in international education.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {newsItems.map((news, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Newspaper className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{news.source}</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {news.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors cursor-pointer">
                      {news.title}
                    </h3>
                    <p className="text-muted-foreground">{news.excerpt}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="flex-shrink-0">
                    Read More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
