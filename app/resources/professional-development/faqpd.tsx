'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

const faqs = [
  {
    question: "Who can enroll in Professional Development programs?",
    answer:
      "Our Professional Development programs are designed for working professionals, educators, graduates, and career aspirants seeking skill enhancement, career advancement, and global exposure."
  },
  {
    question: "Are these programs suitable for working professionals?",
    answer:
      "Yes, the programs follow a flexible learning model with self-paced modules and live sessions, allowing professionals to balance learning with work commitments."
  },
  {
    question: "What skills do learners gain from these programs?",
    answer:
      "Learners gain industry-relevant skills, practical knowledge, leadership abilities, and global career readiness through assignments, projects, and expert-led sessions."
  },
  {
    question: "Do the programs support global or India–UAE career pathways?",
    answer:
      "Yes, our Professional Development programs are aligned with international standards and support global career pathways, including India–UAE professional opportunities."
  },
  {
    question: "Will learners receive certification after completion?",
    answer:
      "Yes, learners receive a certificate upon successful completion of the program, subject to participation and assessment requirements."
  }
]



  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-32 bg-background" id="Faq">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our programs
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className="text-lg font-semibold text-foreground pr-8 group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-primary' : ''
                  }`}
                />
              </button>
              
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

       
        
      </div>
    </section>
  );
}