'use client';

import Image from 'next/image';
import { ArrowRight, Download, BookOpen, Award } from 'lucide-react';

export default function SuccessStoriesHero() {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Grid Layout */}
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Section - Brand & Large Text */}
        <div className="relative bg-gradient-to-br from-amber-50 to-yellow-50 flex items-center justify-center p-12">
          {/* Brand Name (Top Left) */}
          <div className="absolute top-8 left-8">
            <h1 className="text-2xl font-bold text-foreground">
              Vidhee<span className="text-primary">.</span>
            </h1>
            <p className="text-sm text-muted-foreground">Global Academy</p>
          </div>

          {/* Large Typography */}
          

          {/* Decorative Elements */}
          <div className="absolute bottom-12 left-12 flex gap-4">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <div className="w-2 h-2 rounded-full bg-foreground/20"></div>
          </div>
        </div>

        {/* Right Section - Image & Content */}
        <div className="relative bg-gradient-to-br from-orange-100 to-amber-100">
          {/* Social Icons (Top Right) */}
          <div className="absolute top-8 right-8 flex gap-4 z-20">
            <a href="#" className="w-8 h-8 flex items-center justify-center hover:text-primary transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center hover:text-primary transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>

          {/* Main Image */}
          
        </div>
      </div>

      {/* Content Card - Positioned at Border */}
      <div className="absolute bottom-15 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6 pb-12 z-30">
        <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-border">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight text-center">
            Student Success Stories & Global Career Outcomes
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6 text-center max-w-3xl mx-auto">
            Discover how our students transformed their careers and achieved their dreams through personalized guidance, expert mentorship, and global opportunities.
          </p>
          
          <div className="flex justify-center mb-8">
            <button className="group inline-flex items-center gap-2 text-foreground font-semibold border-b-2 border-foreground pb-1 hover:gap-3 transition-all duration-300">
              <span>Explore Stories</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Navigation */}
          <div className="flex flex-wrap justify-center gap-8">
           
            <button className="group flex items-center gap-2 text-foreground font-semibold border-b-2 border-foreground pb-1 hover:text-primary hover:border-primary transition-colors">
              <BookOpen className="w-4 h-4" />
              <span>Career Paths</span>
            </button>
            <button className="group flex items-center gap-2 text-foreground font-semibold border-b-2 border-foreground pb-1 hover:text-primary hover:border-primary transition-colors">
              <Award className="w-4 h-4" />
              <span>Alumni Network</span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 2px rgba(0, 0, 0, 0.1);
          paint-order: stroke fill;
        }
      `}</style>
    </section>
  );
}