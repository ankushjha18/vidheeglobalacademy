"use client"

import { motion } from "framer-motion"

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="space-y-8 text-foreground/80">
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                At ViDHEE Global Academy, we collect information that you provide directly to us when you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Register for our services or consultations</li>
                <li>Subscribe to our newsletter or communications</li>
                <li>Contact us through our website or phone</li>
                <li>Participate in surveys, webinars, or events</li>
              </ul>
              <p className="mt-4">
                This may include your name, email address, phone number, educational background, career goals, and other
                information relevant to providing our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide personalized education and career counseling services</li>
                <li>Process your applications and facilitate admissions to educational institutions</li>
                <li>Send you relevant information about courses, programs, and opportunities</li>
                <li>Improve our services and develop new offerings</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">3. Information Sharing</h2>
              <p className="mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Educational institutions you wish to apply to</li>
                <li>Service providers who assist us in operating our business</li>
                <li>Professional partners in India and UAE who help facilitate your educational journey</li>
                <li>Legal authorities when required by law</li>
              </ul>
              <p className="mt-4">We do not sell your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">5. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent where we rely on it</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">6. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or how we handle your information, please contact us at:
              </p>
              <p className="mt-4">
                <strong>Email:</strong> info@vidheeglobalacademy.com
                <br />
                <strong>Phone:</strong> +91 98711 14591
                <br />
                <strong>Website:</strong> www.vidheeglobalacademy.com
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
