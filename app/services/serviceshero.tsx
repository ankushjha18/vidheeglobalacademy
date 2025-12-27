'use client';

import Image from 'next/image';
import { ArrowRight, Globe, Award, Users } from 'lucide-react';

export default function ServicesHero() {
  return (
    <section className="relative  bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <div className="flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-foreground">Our Services</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Inspiring
              <br />
              <span className="text-primary">Education</span>
              <br />
              Exploration
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Comprehensive solutions designed to support you at every stage of your educational and career journey.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-semibold hover:bg-foreground/90 transition-all duration-300 hover:gap-3 shadow-lg">
                <span>Getting Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="flex items-center gap-2 px-8 py-4 border-2 border-foreground text-foreground rounded-full font-semibold hover:bg-foreground hover:text-background transition-all duration-300">
                <span>Learn More</span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8">
              <div>
                <div className="text-4xl font-bold text-foreground">99k+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <div className="text-4xl font-bold text-foreground">10k+</div>
                <div className="text-sm text-muted-foreground">Courses</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Section */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative">
              {/* Yellow Blob Background */}
              <div className="absolute -top-10 -left-10 w-96 h-96 bg-accent rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-pulse"></div>
              
              {/* Green Blob */}
              <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-primary/30 rounded-[40%_60%_70%_30%/40%_70%_30%_60%]"></div>

              {/* Student Image */}
              <div className="relative z-10 ml-10 mt-10">
                <div className="relative w-full aspect-[3/4] max-w-md rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800"
                    alt="Student"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating Cards 
              <div className="absolute top-32 -right-4 bg-background rounded-2xl shadow-xl p-4 border border-border animate-bounce">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Course Certified</div>
                    <div className="text-xs text-muted-foreground">Verified Achievement</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 -left-8 bg-background rounded-2xl shadow-xl p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">99+ online</div>
                    <div className="text-xs text-muted-foreground">courses for you</div>
                  </div>
                </div>
              </div>

              {/* Counter Display /}
              <div className="absolute bottom-32 mt-20 right-8 bg-background rounded-2xl    shadow-xl    p-4 border border-border">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  <div className="flex gap-1">
                    {[2, 4, 3, 0, 0].map((num, i) => (
                      <div key={i} className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center font-bold text-foreground">
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}
            </div>

            {/* Bottom Info Card /}
            <div className="absolute -bottom-8 left-0 right-0 max-w-md mx-auto bg-background rounded-2xl shadow-xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400"
                    alt="Team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-foreground mb-1">
                    We have 99+ online courses for you year
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div key={star} className="w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-xs text-accent-foreground">★</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Optional: Service Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-24">
          <div className="bg-background/80 backdrop-blur rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-2">📚</div>
            <h3 className="font-semibold text-foreground mb-1">Academic Support</h3>
            <p className="text-sm text-muted-foreground">Expert guidance</p>
          </div>
          <div className="bg-background/80 backdrop-blur rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="font-semibold text-foreground mb-1">Career Counseling</h3>
            <p className="text-sm text-muted-foreground">Path planning</p>
          </div>
          <div className="bg-background/80 backdrop-blur rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-2">🌍</div>
            <h3 className="font-semibold text-foreground mb-1">Study Abroad</h3>
            <p className="text-sm text-muted-foreground">Global opportunities</p>
          </div>
          <div className="bg-background/80 backdrop-blur rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-2">💼</div>
            <h3 className="font-semibold text-foreground mb-1">Job Placement</h3>
            <p className="text-sm text-muted-foreground">Career success</p>
          </div>
        </div>
      </div>
    </section>
  );
}