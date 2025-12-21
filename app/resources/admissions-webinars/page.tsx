"use client"

import { motion } from "framer-motion"
import { Video, Calendar, Users, Clock, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AdmissionsWebinarsPage() {
  const upcomingWebinars = [
    {
      title: "Getting Into Top UAE Universities",
      date: "January 25, 2025",
      time: "6:00 PM GST",
      host: "Dr. Fatima Al-Mazrouei",
      attendees: "250+ registered",
      topics: ["Application process", "Scholarship opportunities", "Visa requirements", "Campus life"],
    },
    {
      title: "Study Abroad: UK & European Universities",
      date: "February 1, 2025",
      time: "7:00 PM GMT",
      host: "Prof. David Thompson",
      attendees: "180+ registered",
      topics: ["University selection", "UCAS applications", "Funding options", "Student experiences"],
    },
    {
      title: "Master's Programs: Career Advancement Guide",
      date: "February 8, 2025",
      time: "5:00 PM IST",
      host: "Dr. Priya Sharma",
      attendees: "300+ registered",
      topics: ["Program selection", "Career ROI", "Work-study balance", "Industry connections"],
    },
  ]

  const pastWebinars = [
    "Navigating MBA Admissions",
    "Scholarship Secrets for International Students",
    "Career Transition Through Education",
    "Professional Certifications Guide",
  ]

  return (
    <div className=" pt-32 pb-20">
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
            Admissions Webinars
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Join live sessions with admissions experts and get your questions answered in real-time.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Upcoming Webinars</h2>
        <div className="space-y-6">
          {upcomingWebinars.map((webinar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3">{webinar.title}</h3>
                    <div className="grid md:grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{webinar.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{webinar.attendees}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Video className="h-4 w-4 text-primary" />
                        <span>Hosted by {webinar.host}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {webinar.topics.map((topic, i) => (
                        <span key={i} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:w-48">
                    <Button className="w-full rounded-full">
                      Register Free <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Past Webinar Recordings</h2>
        <Card className="p-8">
          <div className="grid md:grid-cols-2 gap-4">
            {pastWebinars.map((title, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer"
              >
                <Video className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{title}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline" className="rounded-full bg-transparent">
              View All Recordings
            </Button>
          </div>
        </Card>
      </section>
    </div>
  )
}
