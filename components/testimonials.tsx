"use client"

import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useState, useEffect } from "react"

export  function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Teacher, Dubai",
      content:
        "ViDHEE guided me through the entire process of getting my UAE teaching license. Within 6 months, I was working at a top international school in Dubai!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    },
    {
      name: "Rahul Menon",
      role: "Engineering Student",
      content:
        "The team helped me secure admission to one of the UAE's best universities with a scholarship. Their guidance was invaluable throughout the application process.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    },
    {
      name: "Sarah Ahmed",
      role: "HR Professional",
      content:
        "Transitioning my career from India to the UAE seemed daunting, but ViDHEE made it seamless. They optimized my resume and prepared me for interviews.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    },
    {
      name: "Amit Patel",
      role: "Business Analyst",
      content:
        "From career counseling to job placement, ViDHEE's comprehensive support helped me land my dream role in Abu Dhabi. Highly recommended!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    },
    {
      name: "Neha Singh",
      role: "Medical Professional",
      content:
        "The personalized guidance I received for my UAE medical license was exceptional. ViDHEE's expertise made a complex process surprisingly smooth.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80",
    },
  ]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const visibleCards = isMobile ? 1 : 3
  const canGoNext = currentIndex < testimonials.length - visibleCards
  const canGoPrev = currentIndex > 0

  const next = () => {
    if (canGoNext) {
      setCurrentIndex(prev => prev + 1)
    } else if (isMobile) {
      setCurrentIndex(0)
    }
  }

  const prev = () => {
    if (canGoPrev) {
      setCurrentIndex(prev => prev - 1)
    } else if (isMobile) {
      setCurrentIndex(testimonials.length - 1)
    }
  }

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex >= testimonials.length - visibleCards) {
        setCurrentIndex(0)
      } else {
        setCurrentIndex(prev => prev + 1)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, testimonials.length, visibleCards])

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 mb-6">
            <span className="text-sm font-medium text-gray-600 tracking-wide uppercase">
              Testimonials
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from those who achieved their global dreams with ViDHEE
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={prev}
              disabled={!canGoPrev && !isMobile}
              className="rounded-full w-12 h-12 border border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-30 hover:scale-110 transition-all flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={next}
              disabled={!canGoNext && !isMobile}
              className="rounded-full w-12 h-12 border border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-30 hover:scale-110 transition-all flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Carousel Track - Mobile */}
          {isMobile && (
            <div className="mb-8">
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-lg">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-blue-600" />
                </div>
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-purple-600 text-purple-600" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-sm text-gray-600 mb-6 italic">
                  &quot;{testimonials[currentIndex].content}&quot;
                </p>
                
                {/* Profile */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gray-200"
                  />
                  
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Carousel Track - Desktop */}
          {!isMobile && (
            <div className="relative h-[400px] mb-8 hidden md:block">
              {testimonials.map((testimonial, i) => {
                const position = i - currentIndex
                const isVisible = position >= 0 && position < visibleCards
                
                if (!isVisible) return null

                return (
                  <div
                    key={i}
                    className="absolute left-0 w-[calc(95%/3)] top-0 transition-all duration-500 ease-in-out"
                    style={{
                      opacity: position === 1 ? 1 : 0.6,
                      transform: `translateX(${position * 105}%) scale(${position === 1 ? 1 : 0.85})`,
                      zIndex: position === 1 ? 20 : 10,
                    }}
                  >
                    <div className="h-full bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group">
                      {/* Quote decoration */}
                      <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Quote className="w-8 h-8 text-blue-600" />
                      </div>

                      {/* Stars */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star key={starIndex} className="h-4 w-4 fill-purple-600 text-purple-600" />
                        ))}
                      </div>
                      
                      {/* Content */}
                      <p className="text-sm text-gray-600 mb-6 italic">
                        &quot;{testimonial.content}&quot;
                      </p>
                      
                      {/* Profile */}
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-gray-200"
                        />
                        
                        <div>
                          <div className="font-semibold text-gray-900">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                      
                      {/* Bottom accent line */}
                      <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 rounded-t-full group-hover:w-full transition-all duration-400" />
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2">
            {Array.from({ length: testimonials.length - (isMobile ? 0 : visibleCards - 1) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className="group relative"
              >
                <div
                  className={`h-2 rounded-full transition-all ${
                    i === currentIndex ? 'w-12 bg-blue-600' : 'w-2 bg-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}