'use client';

import Image from 'next/image';
import { Briefcase, TrendingUp, Users, Globe, Target, Award, BookOpen, Clock, MessageSquare, CheckCircle, Play, Lightbulb, BarChart, Shield } from 'lucide-react';
import { Testimonials } from '@/components/testimonials';
import FAQSection from './faqpd';
import { WhyVidhee } from '@/components/why-vidhee';


export default function ProfessionalDevelopmentPage() {
  const targetAudience = [
    {
      icon: TrendingUp,
      title: "Working Professionals",
      description: "Seeking career advancement and skill enhancement"
    },
    {
      icon: BookOpen,
      title: "Educators & Trainers",
      description: "Upgrading professional skills and methodologies"
    },
    {
      icon: Target,
      title: "Graduates",
      description: "Preparing for global career opportunities"
    },
    {
      icon: Users,
      title: "Career Switchers",
      description: "Exploring new professional pathways"
    },
    {
      icon: Globe,
      title: "International Aspirants",
      description: "Aiming for India–UAE or global careers"
    }
  ];

  const focusAreas = [
    {
      icon: Target,
      title: "Global Standards Alignment",
      description: "Skill enhancement aligned with international industry standards"
    },
    {
      icon: TrendingUp,
      title: "Career-Focused Pathways",
      description: "Strategic learning designed for professional advancement"
    },
    {
      icon: Briefcase,
      title: "Industry Exposure",
      description: "Real-world application and practical experience"
    },
    {
      icon: Users,
      title: "Personalized Mentorship",
      description: "One-on-one guidance tailored to your goals"
    }
  ];

  const learningFeatures = [
    {
      icon: Clock,
      title: "Flexible Learning Model",
      description: "Learn at your own pace with self-paced online modules supported by live interactive sessions—designed to fit around professional commitments.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Award,
      title: "Expert-Led Sessions",
      description: "Programs are guided by experienced educators, industry professionals, and international faculty with real-world expertise.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageSquare,
      title: "Collaborative Learning",
      description: "Engage in group discussions, workshops, panel talks, and peer-learning activities that encourage diverse perspectives.",
      color: "from-amber-500 to-orange-500"
    }
  ];

  const skillGains = [
    {
      icon: Briefcase,
      title: "Practical Skills",
      description: "Through assignments and hands-on projects"
    },
    {
      icon: BarChart,
      title: "Case Studies",
      description: "Based on real industry scenarios"
    },
    {
      icon: Lightbulb,
      title: "Applied Learning",
      description: "For immediate professional impact"
    },
    {
      icon: Shield,
      title: "Skill Evidence",
      description: "Through structured assessments"
    }
  ];

  const outcomes = [
    {
      icon: TrendingUp,
      title: "Enhanced Professional Skills",
      description: "Master competencies that matter in your industry"
    },
    {
      icon: Target,
      title: "Career Advancement",
      description: "Unlock new opportunities and promotions"
    },
    {
      icon: Globe,
      title: "Global Exposure",
      description: "Gain international readiness and perspective"
    },
    {
      icon: Award,
      title: "Increased Confidence",
      description: "Develop leadership and decision-making abilities"
    },
    {
      icon: Briefcase,
      title: "Long-term Growth",
      description: "Build sustainable career momentum"
    },
    {
      icon: Users,
      title: "Industry-Recognized Certification",
      description: "Validate your skills with globally valued credentials"
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-indigo-50 via-purple-100 to-blue-50 overflow-hidden">
        {/* Decorative Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-background/80 px-4 py-2 rounded-full">
                  Professional Development
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                EMPOWER
                <br />
                YOUR <span className="text-primary">CAREER</span>
              </h1>

              <p className="text-2xl font-semibold text-foreground mb-4">
                Empowering Professionals for Global Career Growth
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our Professional Development programs combine expert guidance, flexible learning, and practical skill development to support long-term career success in an evolving international job market.
              </p>

              {/* Stats */}
              <div className="flex items-center gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold text-foreground">4.2K+</div>
                  <div className="text-sm text-muted-foreground">Professionals Trained</div>
                </div>
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 border-2 border-background"></div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-foreground text-background rounded-full font-semibold hover:bg-foreground/90 transition-all duration-300 shadow-lg">
                  Explore Programs
                </button>
                <button className="flex items-center gap-2 px-8 py-4 bg-indigo-500 text-white rounded-full font-semibold hover:bg-indigo-600 transition-all duration-300">
                  <Play className="w-5 h-5" />
                  <span>View Success Stories</span>
                </button>
              </div>
            </div>

            {/* Right - Professional Images Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-64 rounded-3xl overflow-hidden bg-indigo-200">
                    <Image src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400" alt="Professional" fill className="object-cover" />
                  </div>
                  <div className="relative h-48 rounded-3xl overflow-hidden bg-purple-200">
                    <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" alt="Professional" fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="relative h-48 rounded-3xl overflow-hidden bg-blue-200">
                    <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" alt="Professional" fill className="object-cover" />
                  </div>
                  <div className="relative h-64 rounded-3xl overflow-hidden bg-violet-200">
                    <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" alt="Professional" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Bar */}
          <div className="mt-16 grid grid-cols-3 gap-8 bg-gradient-to-r from-indigo-500/90 to-purple-500/90 backdrop-blur-sm rounded-2xl p-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2">250+</div>
              <div className="text-white/90 font-medium">Professional Programs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-white/90 font-medium">Career Advancement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">85+</div>
              <div className="text-white/90 font-medium">Industry Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Who These Programs Are For */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Who These Programs Are For
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our professional development programs serve diverse career aspirants seeking growth, skills, and global opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetAudience.map((audience, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-4">
                  <audience.icon className="w-7 h-7 text-indigo-600" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-muted/30 to-muted/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Professional Development Approach
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We follow a structured, outcome-driven approach that focuses on practical skills, industry relevance, and global career readiness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <area.icon className="w-7 h-7 text-indigo-600" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Experience */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Learning Experience
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Designed for working professionals who need flexibility without compromising quality.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {learningFeatures.map((feature, index) => (
              <div
                key={index}
                className="relative bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`}></div>
                
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyVidhee />

      {/* Skill Development & Practical Training */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Skill Development & Practical Training
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Professional development at Vidhee Global Academy focuses on real-world relevance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGains.map((skill, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <skill.icon className="w-8 h-8 text-indigo-600" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Career Outcomes
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By completing our Professional Development programs, learners can achieve transformative career results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <outcome.icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {outcome.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Ready to Accelerate Your Professional Growth?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Join professionals worldwide who have transformed their careers through structured skill development and global exposure.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-semibold hover:bg-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                <span>Start Your Development Journey</span>
                <TrendingUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <Testimonials />
        <FAQSection />

      </section>
    </div>
  );
}