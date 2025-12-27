'use client';

import { BookOpen, Users, Globe, BarChart3, Puzzle, Grid2X2 , Activity} from 'lucide-react';
import { act } from 'react';

export default function HolisticLearning() {
  const features = [
    {
      icon: BookOpen,
      title: "Self-Paced Online Modules",
      description: "Learn at your own pace through expertly curated video lessons and reading materials, accessible anytime on any device—allowing you to balance learning with your personal and professional commitments.",
      color: "bg-blue-50 dark:bg-blue-950/30",
      iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: Users,
      title: "Weekly Group-Based Live Classes",
      description: "Participate in interactive group sessions that include discussions, workshops, and collaborative activities—encouraging shared learning, peer interaction, and diverse perspectives.",
      color: "bg-purple-50 dark:bg-purple-950/30",
      iconColor: "text-purple-600 dark:text-purple-400"
    },
    {
      icon: Globe,
      title: "Live Classes by International Professors",
      description: "Engage directly with experienced international faculty through live, interactive sessions designed to deepen subject understanding and encourage meaningful academic dialogue.",
      color: "bg-indigo-50 dark:bg-indigo-950/30",
      iconColor: "text-indigo-600 dark:text-indigo-400"
    },
    {
      icon: BarChart3,
      title: "Regular Assessments",
      description: "Track your progress through structured assessments that help you reflect on learning outcomes, strengthen understanding, and improve continuously.",
      color: "bg-emerald-50 dark:bg-emerald-950/30",
      iconColor: "text-emerald-600 dark:text-emerald-400"
    },
    {
      icon: Puzzle,
      title: "Skill-Evidence Assignments",
      description: "Apply your learning through real-world assignments, projects, and case studies—building practical skills and demonstrating measurable outcomes.",
      color: "bg-amber-50 dark:bg-amber-950/30",
      iconColor: "text-amber-600 dark:text-amber-400"
    },
    {
      icon: Activity,
      title: "Personalized Mentorship & Feedback",
      description: "Receive guided support and constructive feedback from experienced mentors, helping you identify strengths, address gaps, and stay aligned with your academic or professional goals.",
      color: "bg-amber-50 dark:bg-amber-950/30",
      iconColor: "text-amber-600 dark:text-amber-400"
    },

  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-2xl">🌱</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Holistic Learning Experience
            </h2>
          </div>
          
        </div>

        {/* Features Grid - Asymmetric Layout */}
        <div className="grid md:grid-cols-2 gap-3 lg:gap-8 items-start">
          {/* Left Column - 3 Cards */}
          <div className="space-y-6 lg:space-y-8">
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 ${feature.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column - 2 Cards */}
          <div className="space-y-6 lg:space-y-8">
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 ${feature.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      
        
      </div>
    </section>
  );
}