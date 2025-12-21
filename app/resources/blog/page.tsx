"use client"

import { motion } from "framer-motion"
import { FileText, Calendar, User, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function BlogPage() {
  const posts = [
    {
      title: "Top 10 Universities in UAE for International Students",
      excerpt: "Discover the leading universities in the UAE offering world-class education and diverse programs...",
      author: "Dr. Priya Sharma",
      date: "Jan 15, 2025",
      category: "Study Abroad",
      image: "/modern-university-campus.png",
    },
    {
      title: "Career Transition Guide: Moving from India to UAE",
      excerpt: "Everything you need to know about relocating your career from India to the United Arab Emirates...",
      author: "Rajesh Kumar",
      date: "Jan 12, 2025",
      category: "Career Guidance",
      image: "/university-building-architecture.jpg",
    },
    {
      title: "The Future of Education: Trends Shaping 2025",
      excerpt: "Explore the emerging trends in education technology, pedagogy, and global learning opportunities...",
      author: "Sarah Johnson",
      date: "Jan 10, 2025",
      category: "Education Trends",
      image: "/education-campus-aerial-view.jpg",
    },
    {
      title: "How to Prepare for International Teaching Certification",
      excerpt: "A comprehensive guide to obtaining teaching certifications recognized globally...",
      author: "Michael Chen",
      date: "Jan 8, 2025",
      category: "Professional Development",
      image: "/international-university.jpg",
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
            <FileText className="h-4 w-4" />
            Resource Type
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Insights, guides, and expert advice on education, careers, and global opportunities.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="relative h-48 w-full">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                  </div>
                  <Button variant="ghost" className="group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
