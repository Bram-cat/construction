"use client"

import { HardHat, Phone, MapPin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-blue-400 rounded-full flex items-center justify-center">
                <HardHat className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg font-technor">BernMar</div>
                <div className="text-xs text-blue-200 -mt-1">Construction</div>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Professional construction services that build excellence. Proudly serving Prince Edward Island with quality craftsmanship and dedicated service.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary font-technor">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:9029401234"
                    className="block text-blue-100 hover:text-white transition-colors mb-1"
                  >
                    (902) 940-1234
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:info@bernmarconstruction.com"
                    className="block text-blue-100 hover:text-white transition-colors"
                  >
                    info@bernmarconstruction.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-blue-100">
                  Prince Edward Island,<br />
                  Canada
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary font-technor">Our Services</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li className="hover:text-white transition-colors">
                <Link href="/services#residential">Residential Construction</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/services#commercial">Commercial Projects</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/services#renovations">Renovations</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/services#custom-builds">Custom Builds</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/services#finishing">Finishing & Design</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-400/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200">
            <div>
              &copy; {currentYear} BernMar Construction. All rights reserved.
            </div>
            <div className="flex items-center gap-2">
              <HardHat className="w-4 h-4 text-secondary" />
              <span className="font-medium text-secondary font-technor">Building Excellence Together</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
