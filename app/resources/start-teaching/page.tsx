'use client';

import Image from 'next/image';
import { BookOpen, Users, Clock, Globe, Target, CheckCircle, Play, Calendar, Briefcase } from 'lucide-react';
import FAQSection from './faqteaching';
import { Testimonials } from '@/components/testimonials';


export default function TeachingApproachPage() {
  const approaches = [
    {
      icon: BookOpen,
      title: "Learner-Centric",
      description: "Personalized learning paths designed around individual goals and pace"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Support from experienced educators and international faculty"
    },
    {
      icon: Target,
      title: "Real-World Relevance",
      description: "Practical application through projects and case studies"
    },
    {
      icon: CheckCircle,
      title: "Measurable Outcomes",
      description: "Track progress with assessments and skill-based evidence"
    }
  ];

  const experts = [
    {
      name: "Dr. Sarah Johnson",
      role: "International Faculty",
      expertise: "Business Management",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
    },
    {
      name: "Prof. Michael Chen",
      role: "Senior Educator",
      expertise: "Technology & Innovation",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      name: "Dr. Priya Sharma",
      role: "Academic Director",
      expertise: "Global Education",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"
    }
  ];

  const skills = [
    {
      icon: Briefcase,
      title: "Industry Projects",
      description: "Work on real business cases and scenarios"
    },
    {
      icon: Target,
      title: "Case Studies",
      description: "Analyze real-world challenges and solutions"
    },
    {
      icon: CheckCircle,
      title: "Practical Assignments",
      description: "Apply learning through hands-on tasks"
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section - Inspired by the image */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-50 overflow-hidden">
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
                  Start Teaching
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                LEARN WITH
                <br />
                <span className="text-primary">EXCELLENCE</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Stay Informed, Stay Ahead: Unveiling the Future of Education and Innovation
              </p>
              <p className="text-muted-foreground mb-8">
                Your Gateway to Global Learning - Where Innovation Meets Insight
              </p>

              {/* Stats */}
              <div className="flex items-center gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold text-foreground">5.1K</div>
                  <div className="text-sm text-muted-foreground">Students Worldwide</div>
                </div>
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-background"></div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-foreground text-background rounded-full font-semibold hover:bg-foreground/90 transition-all duration-300 shadow-lg">
                  Book Your Seat
                </button>
                <button className="flex items-center gap-2 px-8 py-4 bg-orange-400 text-white rounded-full font-semibold hover:bg-orange-500 transition-all duration-300">
                  <Play className="w-5 h-5" />
                  <span>See Journey</span>
                </button>
              </div>
            </div>

            {/* Right - Student Images Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-64 rounded-3xl overflow-hidden bg-blue-200">
                    <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" alt="Student" fill className="object-cover" />
                  </div>
                  <div className="relative h-48 rounded-3xl overflow-hidden bg-orange-200">
                    <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" alt="Student" fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="relative h-48 rounded-3xl overflow-hidden bg-purple-200">
                    <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" alt="Student" fill className="object-cover" />
                  </div>
                  <div className="relative h-64 rounded-3xl overflow-hidden bg-yellow-200">
                    <Image src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400" alt="Student" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Bar */}
          <div className="mt-16 grid grid-cols-3 gap-8 bg-gradient-to-r from-orange-400/90 to-orange-500/90 backdrop-blur-sm rounded-2xl p-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2">6409</div>
              <div className="text-white/90 font-medium">Success Stories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">124</div>
              <div className="text-white/90 font-medium">Expert Instructors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">54,749</div>
              <div className="text-white/90 font-medium">Hours Tutored</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Our Teaching Approach */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Teaching Approach
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We follow a learner-centric teaching model that combines academic clarity, expert guidance, and real-world relevance. Our approach ensures flexible learning, meaningful engagement, and measurable outcomes for students and professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approaches.map((approach, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <approach.icon className="w-7 h-7 text-primary" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {approach.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Flexible Learning Model */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-muted/30 to-muted/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Flexible Learning Model
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Learn at your own pace through self-paced modules supported by live interactive sessions. Our flexible structure allows learners to balance education with personal and professional commitments.
              </p>

              {/* Timeline Steps */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Self-Paced Modules</h3>
                    <p className="text-muted-foreground">Access pre-recorded content anytime, anywhere</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Live Interactive Sessions</h3>
                    <p className="text-muted-foreground">Engage in real-time with instructors and peers</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/70 rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Flexible Schedule</h3>
                    <p className="text-muted-foreground">Balance learning with your lifestyle</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="bg-card border border-border rounded-3xl p-8 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
                    <Clock className="w-8 h-8 text-primary" />
                    <div>
                      <div className="font-semibold text-foreground">Self-Paced Learning</div>
                      <div className="text-sm text-muted-foreground">Available 24/7</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
                    <Calendar className="w-8 h-8 text-accent" />
                    <div>
                      <div className="font-semibold text-foreground">Live Classes</div>
                      <div className="text-sm text-muted-foreground">Weekly sessions</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
                    <Globe className="w-8 h-8 text-primary/70" />
                    <div>
                      <div className="font-semibold text-foreground">Global Access</div>
                      <div className="text-sm text-muted-foreground">Learn from anywhere</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Expert-Led Instruction */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Expert-Led Instruction
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our programs are led by experienced educators and international faculty who bring global perspectives, academic depth, and practical insights into every session.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 bg-gradient-to-br from-blue-100 to-purple-100">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {expert.name}
                  </h3>
                  <div className="text-sm text-primary font-semibold mb-2">
                    {expert.role}
                  </div>
                  <div className="text-muted-foreground">
                    {expert.expertise}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Practical Skill Development */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Practical Skill Development
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Assignments, projects, and case studies help learners apply concepts in real-world scenarios, building confidence and industry-relevant skills.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-6">
                  <skill.icon className="w-8 h-8 text-accent-foreground" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {skill.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                  <span>Learn more</span>
                  <Play className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <Testimonials />
        <FAQSection />
      </section>
    </div>
  );
}