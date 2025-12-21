"use client"

import { motion } from "framer-motion"

export default function CookiePolicyPage() {
  return (
    <div className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="space-y-8 text-foreground/80">
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your device when you visit our website. They help us
                provide you with a better experience by remembering your preferences and understanding how you use our
                site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">How We Use Cookies</h2>
              <p className="mb-4">ViDHEE Global Academy uses cookies for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> Necessary for the website to function properly
                </li>
                <li>
                  <strong>Performance Cookies:</strong> Help us understand how visitors interact with our website
                </li>
                <li>
                  <strong>Functional Cookies:</strong> Remember your preferences and settings
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> Track your online activity to help us deliver relevant advertising
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">Types of Cookies We Use</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Session Cookies</h3>
                  <p>These are temporary cookies that expire when you close your browser.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Persistent Cookies</h3>
                  <p>These remain on your device for a set period or until you delete them.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Third-Party Cookies</h3>
                  <p>
                    We may use third-party services like Google Analytics that set their own cookies to help us analyze
                    website traffic and improve our services.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">Managing Cookies</h2>
              <p className="mb-4">You can control and manage cookies in various ways:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Most browsers allow you to refuse or accept cookies</li>
                <li>You can delete cookies that are already stored on your device</li>
                <li>You can set your browser to notify you when you receive a cookie</li>
              </ul>
              <p className="mt-4">
                Please note that disabling cookies may affect the functionality of our website and limit your user
                experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in technology or legal
                requirements. We encourage you to review this page periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">Contact Us</h2>
              <p>If you have questions about our use of cookies, please contact us at:</p>
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
