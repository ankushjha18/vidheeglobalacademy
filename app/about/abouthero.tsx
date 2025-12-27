'use client';

import { ArrowRight } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="relative flex flex-col">
      {/* Hero Content Section */}
      <div className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022"
            alt="Students learning"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
          {/* Small Header */}
          <div className="mb-4">
            <p className="text-white/90 text-xs sm:text-sm tracking-[0.2em] font-light">
              Vidhee Global Academy
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-light text-white mb-6 sm:mb-8 leading-tight px-4">
            Education Beyond Borders
          </h1>

          {/* CTA Button */}
          <button className="group relative inline-flex items-center gap-3 px-6 sm:px-10 py-3 sm:py-4 bg-red-700 text-white text-sm sm:text-base font-semibold tracking-wide hover:bg-red-800 transition-all duration-300 hover:scale-105 shadow-xl">
            <span>LEARN MORE</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Bottom Cards Section - Now in its own container */}
      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {/* MIND Card */}
          <div className="bg-gray-900/90 backdrop-blur-sm p-6 sm:p-8 text-center border-t-4 border-blue-500 hover:bg-gray-900 transition-colors">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4 tracking-wider">MIND</h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Academic excellence that encourages critical thinking and innovation.
            </p>
          </div>

          {/* BODY Card */}
          <div className="bg-gray-900/90 backdrop-blur-sm p-6 sm:p-8 text-center border-t-4 border-green-500 hover:bg-gray-900 transition-colors">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4 tracking-wider">BODY</h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Healthy habits that promote strength, discipline, and teamwork.
            </p>
          </div>

          {/* SPIRIT Card */}
          <div className="bg-gray-900/90 backdrop-blur-sm p-6 sm:p-8 text-center border-t-4 border-purple-500 hover:bg-gray-900 transition-colors">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4 tracking-wider">SPIRIT</h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Confidence and purpose for balanced personal growth.
            </p>
          </div>

          {/* CHARACTER Card */}
          <div className="bg-gray-900/90 backdrop-blur-sm p-6 sm:p-8 text-center border-t-4 border-red-500 hover:bg-gray-900 transition-colors">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4 tracking-wider">CHARACTER</h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Values and integrity that shape responsible global citizens.
            </p>
          </div>
        </div>
      </div>

      {/* Accessibility Button */}
      <button className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-red-700 rounded-full flex items-center justify-center text-white hover:bg-red-800 transition-colors shadow-lg">
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
        </svg>
      </button>
    </section>
  );
}