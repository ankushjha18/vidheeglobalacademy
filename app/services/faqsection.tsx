'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who can enroll in Vidhee Global Academy programs?",
      answer: "Our programs are designed for students, educators, and working professionals seeking academic growth, skill development, and global career opportunities."
    },
    {
      question: "How are the programs delivered?",
      answer: "We follow a blended learning approach that includes self-paced online modules, live group classes, and expert-led interactive sessions."
    },
    {
      question: "Who conducts the live classes?",
      answer: "Live classes are led by experienced educators and international faculty members with strong academic and industry expertise."
    },
    {
      question: "Do I receive personalized guidance or mentorship?",
      answer: "Yes, learners receive personalized mentorship and continuous feedback to support academic progress and career development."
    },
    {
      question: "Will I receive a certificate after completion?",
      answer: "Yes, a certificate is awarded upon successful program completion, subject to participation and assessment requirements."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-32 bg-background">
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