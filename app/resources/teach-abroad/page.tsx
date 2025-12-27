'use client';

import Image from 'next/image';
import { GraduationCap, Globe, Users, FileCheck, MessageCircle, Award, TrendingUp, BookOpen, Target, CheckCircle, Play } from 'lucide-react';
import { Testimonials } from '@/components/testimonials';
import FAQSection from './faqteachabroad';
import { IndiaUaePathwaysSection } from '@/components/india-uae-pathway';

export default function TeachAbroadPage() {
  const targetAudience = [
    {
      icon: GraduationCap,
      title: "Qualified Teachers & Educators",
      description: "Licensed professionals seeking international opportunities"
    },
    {
      icon: Globe,
      title: "Academic Professionals",
      description: "Experts looking for global exposure and growth"
    },
    {
      icon: Users,
      title: "Trainers & Subject Experts",
      description: "Specialists ready to share knowledge worldwide"
    },
    {
      icon: TrendingUp,
      title: "Education Professionals",
      description: "Career-focused educators aiming for global impact"
    }
  ];

  const pathwaySteps = [
    {
      icon: FileCheck,
      number: "01",
      title: "Profile Evaluation & Eligibility Check",
      description: "We assess your academic background, teaching experience, certifications, and career goals to identify suitable international teaching opportunities."
    },
    {
      icon: Globe,
      number: "02",
      title: "Country & Institution Mapping",
      description: "Educators receive guidance on teaching opportunities across global destinations, aligned with qualifications, subject expertise, and career aspirations."
    },
    {
      icon: BookOpen,
      number: "03",
      title: "Skill & Curriculum Alignment",
      description: "We support educators in aligning teaching methodologies, curriculum standards, and classroom practices with international education systems."
    },
    {
      icon: FileCheck,
      number: "04",
      title: "Application & Documentation Support",
      description: "Our team assists with applications, documentation, and professional profiling required for international teaching roles."
    },
    {
      icon: MessageCircle,
      number: "05",
      title: "Interview & Placement Guidance",
      description: "Educators receive interview preparation, teaching demonstration support, and placement guidance to improve success in global recruitment processes."
    }
  ];

  const benefits = [
    "Personalized guidance for educators",
    "Global education insights and mentorship",
    "Structured, step-by-step career pathway",
    "Focus on long-term professional growth",
    "Support for smooth international transition"
  ];

  const outcomes = [
    {
      icon: Globe,
      title: "International Teaching Placements",
      description: "Secure positions in prestigious institutions worldwide"
    },
    {
      icon: Users,
      title: "Global Classroom Experience",
      description: "Gain valuable cross-cultural teaching expertise"
    },
    {
      icon: Award,
      title: "Professional Skill Enhancement",
      description: "Develop advanced pedagogical competencies"
    },
    {
      icon: TrendingUp,
      title: "Career Advancement",
      description: "Accelerate your education career globally"
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-green-50 via-emerald-100 to-teal-50 overflow-hidden">
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
                  Global Teaching Careers
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                TEACH
                <br />
                <span className="text-primary">ABROAD</span>
              </h1>

              <p className="text-2xl font-semibold text-foreground mb-4">
                Expand Your Teaching Career Globally
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Vidhee Global Academy enables educators and academic professionals to explore international teaching opportunities through structured guidance, global partnerships, and career-focused preparation.
              </p>

              {/* Stats */}
              <div className="flex items-center gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold text-foreground">2.8K+</div>
                  <div className="text-sm text-muted-foreground">Educators Placed</div>
                </div>
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 border-2 border-background"></div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-foreground text-background rounded-full font-semibold hover:bg-foreground/90 transition-all duration-300 shadow-lg">
                  Start Your Journey
                </button>
                <button className="flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition-all duration-300">
                  <Play className="w-5 h-5" />
                  <span>Watch Success Stories</span>
                </button>
              </div>
            </div>

            {/* Right - Educator Images Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-64 rounded-3xl overflow-hidden bg-emerald-200">
                    <Image src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400" alt="Educator" fill className="object-cover" />
                  </div>
                  <div className="relative h-48 rounded-3xl overflow-hidden bg-teal-200">
                    <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" alt="Educator" fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="relative h-48 rounded-3xl overflow-hidden bg-green-200">
                    <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" alt="Educator" fill className="object-cover" />
                  </div>
                  <div className="relative h-64 rounded-3xl overflow-hidden bg-cyan-200">
                    <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" alt="Educator" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Bar */}
          <div className="mt-16 grid grid-cols-3 gap-8 bg-gradient-to-r from-emerald-500/90 to-teal-500/90 backdrop-blur-sm rounded-2xl p-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2">45+</div>
              <div className="text-white/90 font-medium">Partner Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">320+</div>
              <div className="text-white/90 font-medium">Global Institutions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-white/90 font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This Program For? */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Who Is This Program For?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our teach abroad pathway is designed for educators at every stage of their career seeking international opportunities and global impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudience.map((audience, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
                  <audience.icon className="w-7 h-7 text-emerald-600" strokeWidth={2} />
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

      {/* Our Teach Abroad Pathway */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Teach Abroad Pathway
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A structured, step-by-step process designed to help educators transition confidently into global classrooms.
            </p>
          </div>

          {/* Timeline Steps */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-emerald-500 -translate-x-1/2"></div>

            {/* Steps */}
            <div className="space-y-12">
              {pathwaySteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className="flex-1">
                    <div 
                      className={`bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                        index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                      }`}
                    >
                      <div className="lg:hidden inline-flex items-center justify-center w-12 h-12 bg-emerald-500 text-white rounded-full font-bold text-lg mb-4">
                        {step.number}
                      </div>

                      <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="hidden lg:block">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-2xl">
                            <step.icon className="w-8 h-8 text-emerald-600" strokeWidth={2} />
                          </div>
                        </div>

                        <div className="flex-1 lg:hidden">
                          <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-500/20 rounded-2xl mb-4">
                            <step.icon className="w-7 h-7 text-emerald-600" strokeWidth={2} />
                          </div>
                        </div>

                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-foreground mb-3">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Number Badge - Desktop Only */}
                  <div className="hidden lg:flex items-center justify-center flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-background">
                      {step.number}
                    </div>
                  </div>

                  {/* Empty Space for Alignment */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <IndiaUaePathwaysSection />

      {/* Why Choose Vidhee */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Why Choose Vidhee Global Academy?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We provide comprehensive support to help educators achieve their global teaching aspirations with confidence and clarity.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-foreground text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 shadow-xl">
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800"
                    alt="Global Teaching"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-background/80 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-emerald-600 mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Support Coverage</div>
                  </div>
                  <div className="bg-background/80 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-emerald-600 mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Guidance Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Career Outcomes
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Transform your teaching career with international opportunities that offer growth, experience, and global impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <outcome.icon className="w-8 h-8 text-emerald-600" strokeWidth={2} />
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
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Ready to Take Your Teaching Career Global?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Join thousands of educators who have successfully transitioned to international teaching roles with our guidance.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-semibold hover:bg-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                <span>Begin Your Application</span>
                <Target className="w-5 h-5" />
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