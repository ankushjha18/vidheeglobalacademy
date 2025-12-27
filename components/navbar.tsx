"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

export  function Navbar() {
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
    { title: "FAQ", href: "/services#Faq" },
  ]

  const careerObjectives = [
    { title: "Start Teaching", href: "/resources/start-teaching", icon: "✦" },
    { title: "Teach Abroad", href: "/resources/teach-abroad", icon: "🌍" },
    { title: "Professional Development", href: "/resources/professional-development", icon: "💡" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "px-4 md:px-8 pt-2" : ""
      }`}
    >
      <div
        className={`transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-200"
            : "bg-white/95 backdrop-blur-xl"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <img
                src="/vidheelogo.png"
                alt="ViDHEE Global Academy"
                className="h-12 w-auto"
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="/about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors relative group">
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
              </a>

              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors group">
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                    {services.map((service, i) => (
                      <a
                        key={i}
                        href={service.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all border-b border-gray-100 last:border-0"
                      >
                        {service.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="/india-uae"
                className="text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors relative group"
              >
                India–UAE Pathway
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full" />
              </a>

              <a
                href="/success-stories"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors relative group"
              >
                Success Stories
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
              </a>

              <div
                className="relative"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors group">
                  Resources
                  <ChevronDown className={`h-4 w-4 transition-transform ${isResourcesOpen ? "rotate-180" : ""}`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
                </button>

                {isResourcesOpen && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200 overflow-hidden p-6">
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Career Objective
                      </h3>
                      <div className="space-y-1">
                        {careerObjectives.map((item, i) => (
                          <a
                            key={i}
                            href={item.href}
                            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all rounded-lg"
                          >
                            <span className="text-lg">{item.icon}</span>
                            {item.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a href="/contact">
                <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all hover:scale-105 shadow-lg hover:shadow-xl font-medium text-sm">
                  Book a Consultation
                </button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-700" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden pb-4 border-t border-gray-200 bg-white/95 backdrop-blur-xl">
              <div className="flex flex-col gap-4 pt-4">
                <a href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors px-2">
                  Home
                </a>
                <a href="/about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors px-2">
                  About Us
                </a>
                
                {/* Services Dropdown Mobile */}
                <div className="px-2">
                  <button 
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Services
                    <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isServicesOpen && (
                    <div className="mt-2 pl-4 space-y-2">
                      {services.map((service, i) => (
                        <a
                          key={i}
                          href={service.href}
                          className="block text-sm text-gray-600 hover:text-blue-600 transition-colors py-1"
                        >
                          {service.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                
                <a
                  href="/india-uae"
                  className="text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors px-2"
                >
                  India–UAE Pathway
                </a>
                <a href="/success-stories" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors px-2">
                  Success Stories
                </a>
                
                {/* Resources Dropdown Mobile */}
                <div className="px-2">
                  <button 
                    onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                    className="flex items-center justify-between w-full text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Resources
                    <ChevronDown className={`h-4 w-4 transition-transform ${isResourcesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isResourcesOpen && (
                    <div className="mt-2 pl-4 space-y-2">
                      {careerObjectives.map((item, i) => (
                        <a
                          key={i}
                          href={item.href}
                          className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors py-1"
                        >
                          <span>{item.icon}</span>
                          {item.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                
                <a href="/contact" className="px-2">
                  <button className="bg-blue-600 text-white w-full py-3 rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg">
                    Book a Consultation
                  </button>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}