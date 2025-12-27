'use client';

import { UserSearch, MapPin, GraduationCap, FileText, BookOpen, Plane, TrendingUp } from 'lucide-react';

export default function PathwayProcess() {
  const steps = [
    {
      icon: UserSearch,
      number: "01",
      title: "Profile Assessment & Career Mapping",
      description: "We begin with a detailed evaluation of academic background, skills, interests, and career goals to identify the most suitable education or career pathway aligned with UAE opportunities.",
      keywords: ["career assessment", "academic profiling", "UAE career guidance"]
    },
    {
      icon: MapPin,
      number: "02",
      title: "Personalized Pathway Planning",
      description: "Based on the assessment, we create a customized roadmap covering program selection, skill requirements, timelines, and future career outcomes—ensuring clarity at every stage.",
      keywords: ["personalized education plan", "career roadmap", "study pathway UAE"]
    },
    {
      icon: GraduationCap,
      number: "03",
      title: "Program & Institution Selection",
      description: "We assist in shortlisting accredited programs, universities, and training institutions in India and the UAE that match your profile and long-term goals.",
      keywords: ["UAE universities", "international programs", "global education options"]
    },
    {
      icon: FileText,
      number: "04",
      title: "Application & Documentation Support",
      description: "Our team provides end-to-end support for applications, documentation, and compliance—ensuring accuracy, completeness, and timely submissions.",
      keywords: ["application support", "UAE admissions", "documentation assistance"]
    },
    {
      icon: BookOpen,
      number: "05",
      title: "Skill Development & Academic Preparation",
      description: "Learners gain access to structured learning modules, live sessions, and practical assignments to build academic readiness and industry-relevant skills.",
      keywords: ["skill development", "professional training", "career readiness"]
    },
    {
      icon: Plane,
      number: "06",
      title: "Visa & Transition Guidance",
      description: "We offer expert guidance on visa processes, transition planning, and cultural readiness to ensure a smooth move from India to the UAE.",
      keywords: ["UAE visa assistance", "international transition support"]
    },
    {
      icon: TrendingUp,
      number: "07",
      title: "Ongoing Mentorship & Career Support",
      description: "Even after enrollment or transition, we provide continuous mentorship, progress tracking, and career guidance to support long-term success.",
      keywords: ["career mentorship", "ongoing support", "professional guidance"]
    }
  ];

  return (
    <section 
      className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30"
      itemScope 
      itemType="https://schema.org/HowTo"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Our Process
            </span>
          </div>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            itemProp="name"
          >
            Our India–UAE Pathway Process
          </h2>
          <p 
            className="text-lg text-muted-foreground leading-relaxed"
            itemProp="description"
          >
            A structured, transparent, and personalized process designed to guide students and professionals from India to global education and career opportunities in the UAE.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary -translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                itemProp="step"
                itemScope
                itemType="https://schema.org/HowToStep"
              >
                {/* Content Card */}
                <div className="flex-1">
                  <div 
                    className={`bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    }`}
                    data-keywords={step.keywords.join(', ')}
                  >
                    {/* Mobile Number Badge */}
                    <div className="lg:hidden inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full font-bold text-lg mb-4">
                      {step.number}
                    </div>

                    <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="hidden lg:block">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-2xl">
                          <step.icon className="w-8 h-8 text-accent-foreground" strokeWidth={2} />
                        </div>
                      </div>

                      <div className="flex-1 lg:hidden">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/20 rounded-2xl mb-4">
                          <step.icon className="w-7 h-7 text-accent-foreground" strokeWidth={2} />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 
                          className="text-2xl font-bold text-foreground mb-3"
                          itemProp="name"
                        >
                          {step.title}
                        </h3>
                        <p 
                          className="text-muted-foreground leading-relaxed"
                          itemProp="text"
                        >
                          {step.description}
                        </p>
                        
                        {/* SEO Keywords - Hidden but indexed */}
                        <meta itemProp="keywords" content={step.keywords.join(', ')} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Number Badge - Desktop Only */}
                <div className="hidden lg:flex items-center justify-center flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-background">
                    {step.number}
                  </div>
                </div>

                {/* Empty Space for Alignment */}
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Let us guide you through every step from India to the UAE with personalized support and expert guidance.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-semibold hover:bg-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span>Start Your Assessment</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}