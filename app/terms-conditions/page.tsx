"use client"

import { motion } from "framer-motion"

export default function TermsConditionsPage() {
  return (
    <div className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Terms and Conditions</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="space-y-8 text-foreground/80">
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the services of ViDHEE Global Academy, you accept and agree to be bound by the
                terms and provisions of this agreement. If you do not agree to these terms, please do not use our
                services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">2. Services Provided</h2>
              <p className="mb-4">ViDHEE Global Academy provides the following services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Career counseling and guidance for students and professionals</li>
                <li>Study abroad consultation and application assistance</li>
                <li>Professional training and skill development programs</li>
                <li>UAE teacher licensing and credential evaluation support</li>
                <li>Education and career pathway guidance between India and UAE</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">3. User Responsibilities</h2>
              <p className="mb-4">As a user of our services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not misrepresent your qualifications or background</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">4. Service Fees and Payment</h2>
              <p className="mb-4">
                Fees for our services vary depending on the type and scope of assistance required. Payment terms
                include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fees must be paid as specified in the service agreement</li>
                <li>Refunds are subject to our refund policy</li>
                <li>We reserve the right to modify our fees with advance notice</li>
                <li>Additional charges may apply for expedited services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">5. No Guarantee of Admission</h2>
              <p>
                While we provide professional guidance and support, ViDHEE Global Academy does not guarantee admission
                to any educational institution, job placement, or visa approval. Final decisions rest with the
                respective institutions and authorities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">6. Intellectual Property</h2>
              <p>
                All content, materials, and resources provided by ViDHEE Global Academy, including but not limited to
                documents, guides, templates, and educational materials, are our intellectual property and may not be
                reproduced without permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">7. Limitation of Liability</h2>
              <p>
                ViDHEE Global Academy shall not be liable for any indirect, incidental, special, or consequential
                damages arising from the use of our services. Our liability is limited to the amount paid for the
                specific service in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">8. Termination</h2>
              <p>
                We reserve the right to terminate or suspend access to our services for any user who violates these
                terms or engages in conduct that we deem inappropriate or harmful.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">9. Governing Law</h2>
              <p>
                These terms and conditions are governed by the laws of India. Any disputes arising from these terms
                shall be subject to the exclusive jurisdiction of the courts in India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">10. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of our services after changes
                constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">Contact Us</h2>
              <p>For questions about these Terms and Conditions, please contact us at:</p>
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
