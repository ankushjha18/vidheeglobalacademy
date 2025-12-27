import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">ViDHEE Global Academy</h3>
            <p className="text-sm text-background/80">
              Your trusted partner for education and career pathways between India and the UAE.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#india-uae" className="hover:text-accent transition-colors">
                  India-UAE Pathway
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-accent transition-colors">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Career Counseling
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Study Abroad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Professional Training
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  UAE Licensing
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Connected</h4>
            <p className="text-sm text-background/80 mb-4">Get global career insights in your inbox</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-sm text-background/80">© 2025 ViDHEE Global Academy. All rights reserved. Developed by <a href="https://www.digitrixsolutions.in/">digitrixsolutions.in</a></p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
            <a href="/privacy-policy" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <span className="text-background/40">|</span>
            <a href="/cookie-policy" className="hover:text-accent transition-colors">
              Cookie Policy
            </a>
            <span className="text-background/40">|</span>
            <a href="/terms-conditions" className="hover:text-accent transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
export default Footer
