"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    { title: "Our Services", href: "/services" },
    { title: "Programs", href: "/services#Programs" },
    { title: "Learning Experience", href: "/services#LearningExperience" },
    { title: "FAQ", href: "/services#Faq  " },
  ]

  const careerObjectives = [
    { title: "Start Teaching", href: "/resources/start-teaching", icon: "✦" },
    { title: "Teach Abroad", href: "/resources/teach-abroad", icon: "🌍" },
    { title: "Get Promotions", href: "/resources/get-promotions", icon: "📈" },
    { title: "Professional Development", href: "/resources/professional-development", icon: "💡" },
    { title: "Find High-Paying Jobs", href: "/resources/high-paying-jobs", icon: "💰" },
  ]

 /* const resourceTypes = [
    { title: "Blog", href: "/resources/blog", icon: "📄" },
    { title: "Masterclasses", href: "/resources/masterclasses", icon: "🖥️" },
    { title: "Admissions Webinars", href: "/resources/admissions-webinars", icon: "👥" },
    { title: "Newsletter", href: "/resources/newsletter", icon: "✉️" },
    { title: "Podcast", href: "/resources/podcast", icon: "🎙️" },
    { title: "Videos", href: "/resources/videos", icon: "▶️" },
    { title: "In the News", href: "/resources/news", icon: "📰" },
  ]*/

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isScrolled ? 8 : 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "px-4 md:px-8" : ""}`}
    >
      <div
        className={`transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
           <Link href="/" className="flex items-center gap-2">
            <img
              src="/vidheelogo.png"
              alt="ViDHEE Global Academy"
              className="h-27 w-auto"
            />
          </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              

              <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors relative group">
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors group">
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-background/95 backdrop-blur-xl rounded-xl shadow-2xl border border-border/50 overflow-hidden"
                    >
                      {services.map((service, i) => (
                        <Link
                          key={i}
                          href={service.href}
                          className="block px-4 py-3 text-sm hover:bg-primary/10 hover:text-primary transition-all border-b border-border/30 last:border-0"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/india-uae"
                className="text-sm font-medium text-accent hover:text-accent/80 transition-colors relative group"
              >
                India–UAE Pathway
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </Link>

              <Link
                href="/success-stories"
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                Success Stories
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors group">
                  Resources
                  <ChevronDown className={`h-4 w-4 transition-transform ${isResourcesOpen ? "rotate-180" : ""}`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </button>

                <AnimatePresence>
                  {isResourcesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-[600px] bg-background/95 backdrop-blur-xl rounded-xl shadow-2xl border border-border/50 overflow-hidden p-6"
                    >
                      <div className="grid grid-cols-2 gap-6">
                        {/* Career Objectives */}
                        <div>
                          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                            Career Objective
                          </h3>
                          <div className="space-y-1">
                            {careerObjectives.map((item, i) => (
                              <Link
                                key={i}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-all rounded-lg"
                              >
                                <span className="text-lg">{item.icon}</span>
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Resource Types *}
                        <div>
                          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                            Resource Type
                          </h3>
                          <div className="space-y-1">
                            {resourceTypes.map((item, i) => (
                              <Link
                                key={i}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-all rounded-lg"
                              >
                                <span className="text-lg">{item.icon}</span>
                                {item.title}
                              </Link>
                            ))}
                          </div>
                          <Link
                            href="/resources"
                            className="block mt-4 text-sm text-primary hover:underline font-medium"
                          >
                            See All Resources →
                          </Link>
                        </div>*/}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 shadow-lg hover:shadow-xl rounded-full">
                  Book a Consultation
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden py-4 border-t"
              >
                <div className="flex flex-col gap-4">
                  <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                    Home
                  </Link>
                  <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
                    About Us
                  </Link>
                  <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
                    Services
                  </Link>
                  <Link
                    href="/india-uae"
                    className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                  >
                    India–UAE Pathway
                  </Link>
                  <Link href="/success-stories" className="text-sm font-medium hover:text-primary transition-colors">
                    Success Stories
                  </Link>
                  <Link href="/resources" className="text-sm font-medium hover:text-primary transition-colors">
                    Resources
                  </Link>
                  <Link href="/contact">
                    <Button className="bg-primary text-primary-foreground w-full rounded-full">
                      Book a Consultation
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  )
}
