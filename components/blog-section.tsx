"use client"

import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function BlogSection() {
  const blogs = [
    {
      title: "Complete Guide to Studying in UAE for Indian Students",
      excerpt: "Everything you need to know about pursuing higher education in the United Arab Emirates",
      date: "March 15, 2024",
      image: "/modern-library-study.png",
      category: "Study Guide",
    },
    {
      title: "Top Career Opportunities in UAE After Graduation",
      excerpt: "Explore the most in-demand career paths and industries in the UAE job market",
      date: "March 12, 2024",
      image: "/modern-dubai-skyline-business.jpg",
      category: "Career",
    },
    {
      title: "Scholarship Opportunities for International Students",
      excerpt: "Discover funding options and scholarships available for your education journey",
      date: "March 8, 2024",
      image: "/graduation-celebration-success.jpg",
      category: "Scholarships",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Latest Insights & Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends, guides, and tips for your education journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-border/50 h-full flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="h-4 w-4" />
                    {blog.date}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">{blog.excerpt}</p>
                  <button className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 hover:bg-primary/5 transition-all hover:scale-105 bg-transparent"
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
