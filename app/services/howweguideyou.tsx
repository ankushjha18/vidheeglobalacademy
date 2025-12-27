'use client';

import { UserCircle, MapPin, FileCheck, Users } from 'lucide-react';

export default function HowWeGuide() {
  const steps = [
    {
      number: "01",
      icon: UserCircle,
      title: "Profile Assessment",
      description: "We evaluate your strengths, interests, and goals to create a foundation for success."
    },
    {
      number: "02",
      icon: MapPin,
      title: "Personalized Pathway Planning",
      description: "Custom roadmap tailored to your aspirations, from course selection to career targets."
    },
    {
      number: "03",
      icon: FileCheck,
      title: "Application & Documentation Support",
      description: "Expert help with applications, essays, and all necessary paperwork—stress-free."
    },
    {
      number: "04",
      icon: Users,
      title: "Ongoing Mentorship & Career Guidance",
      description: "Continuous support beyond admission, helping you navigate every step of your journey."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            How We Guide You
          </h2>
          <p className="text-lg text-muted-foreground">
            A clear, proven process that takes you from where you are to where you want to be.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Connector Line (except last item in each column) */}
              {index < steps.length - 2 && (
                <div className="hidden md:block absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-primary/40 to-transparent"></div>
              )}

              <div className="relative bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-6 mt-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-2xl group-hover:bg-accent/30 transition-colors">
                    <step.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA /}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-semibold hover:bg-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl">
            <span>Start Your Journey</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div> */}
      </div>
    </section>
  );
}