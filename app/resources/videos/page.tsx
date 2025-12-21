"use client"

import { motion } from "framer-motion"
import { Video, Play, Eye, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function VideosPage() {
  const videos = [
    {
      title: "Complete Guide to UAE University Applications",
      views: "12.5K",
      duration: "18:32",
      thumbnail: "/modern-university-campus.png",
      category: "Study Abroad",
    },
    {
      title: "5 Tips for Successful Career Transitions",
      views: "8.2K",
      duration: "12:45",
      thumbnail: "/university-building-architecture.jpg",
      category: "Career Advice",
    },
    {
      title: "International Teaching Certification Explained",
      views: "15.1K",
      duration: "22:18",
      thumbnail: "/education-campus-aerial-view.jpg",
      category: "Professional Dev",
    },
    {
      title: "Scholarship Application Masterclass",
      views: "20.3K",
      duration: "35:20",
      thumbnail: "/international-university.jpg",
      category: "Financial Aid",
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
            <Video className="h-4 w-4" />
            Resource Type
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Videos
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Watch comprehensive video guides covering education, career planning, and global opportunities.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group">
                <div className="relative h-56 w-full">
                  <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {video.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-black/80 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {video.duration}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Eye className="h-4 w-4" />
                    <span>{video.views} views</span>
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
