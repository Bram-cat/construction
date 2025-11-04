"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { QuoteDialog } from "@/components/QuoteDialog"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Building, Wrench, Hammer, Paintbrush, Check, ArrowRight, HardHat, Shield, Clock } from "lucide-react"
import Image from "next/image"

const services = [
  {
    id: "residential",
    icon: Home,
    title: "Residential Construction",
    description: "Build your dream home with our comprehensive residential construction services. From custom homes to additions, we bring your vision to life with quality craftsmanship and attention to detail.",
    features: [
      "Custom Home Building",
      "Home Additions & Extensions",
      "Foundation & Framing",
      "Structural Modifications",
      "Garage Construction",
      "Basement Development"
    ],
    benefits: [
      "Personalized design",
      "Quality materials",
      "Expert craftsmanship",
      "Timely completion"
    ],
    image: "/images/1.png",
    color: "from-blue-600 to-blue-400"
  },
  {
    id: "commercial",
    icon: Building,
    title: "Commercial Construction",
    description: "Professional commercial construction services for businesses of all sizes. We deliver projects on time and within budget while maintaining the highest quality standards.",
    features: [
      "Office Building Construction",
      "Retail Space Development",
      "Industrial Facilities",
      "Warehouse Construction",
      "Restaurant & Hospitality",
      "Mixed-Use Development"
    ],
    benefits: [
      "Professional expertise",
      "Budget management",
      "Minimal disruption",
      "Code compliance"
    ],
    image: "/images/2.png",
    color: "from-slate-700 to-slate-500"
  },
  {
    id: "renovations",
    icon: Wrench,
    title: "Renovations & Remodeling",
    description: "Transform your existing space with our expert renovation services. Whether it&apos;s a kitchen upgrade or whole-home renovation, we make your vision a reality.",
    features: [
      "Kitchen Remodeling",
      "Bathroom Renovations",
      "Whole Home Renovations",
      "Interior Modifications",
      "Historic Restoration",
      "Accessibility Upgrades"
    ],
    benefits: [
      "Increased home value",
      "Modern functionality",
      "Energy efficiency",
      "Personal satisfaction"
    ],
    image: "/images/3.png",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "custom-builds",
    icon: Hammer,
    title: "Custom Builds",
    description: "Bring your unique vision to life with our custom build services. We work closely with you to create spaces that perfectly match your needs and style.",
    features: [
      "Custom Design Consultation",
      "Architectural Coordination",
      "Unique Features & Details",
      "Premium Material Selection",
      "Energy-Efficient Solutions",
      "Smart Home Integration"
    ],
    benefits: [
      "One-of-a-kind design",
      "Tailored solutions",
      "Quality assurance",
      "Long-term value"
    ],
    image: "/images/4.png",
    color: "from-indigo-600 to-blue-600"
  },
  {
    id: "finishing",
    icon: Paintbrush,
    title: "Finishing & Design",
    description: "Complete your project with our professional finishing and design services. From trim work to custom cabinetry, we handle every detail with precision.",
    features: [
      "Interior Trim & Millwork",
      "Custom Cabinetry",
      "Flooring Installation",
      "Painting & Staining",
      "Tile & Stone Work",
      "Fixture Installation"
    ],
    benefits: [
      "Professional finish",
      "Attention to detail",
      "Quality materials",
      "Beautiful results"
    ],
    image: "/images/5.png",
    color: "from-purple-600 to-indigo-500"
  }
]

export default function ServicesPage() {
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Navigation onGetQuote={() => setIsQuoteDialogOpen(true)} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6">
              <HardHat className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium font-technor">COMPREHENSIVE CONSTRUCTION SERVICES</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-technor">
              Our Services
            </h1>

            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              From residential homes to commercial buildings, we deliver excellence in every project we undertake.
            </p>

            <div className="flex flex-wrap justify-center gap-8 text-sm">
              {[
                { icon: Shield, text: "Licensed & Insured" },
                { icon: Clock, text: "On-Time Delivery" },
                { icon: Check, text: "Quality Guaranteed" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <item.icon className="w-5 h-5 text-secondary" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0

            return (
              <div key={service.id} id={service.id} className="mb-24 last:mb-0">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`relative h-[400px] rounded-2xl overflow-hidden shadow-2xl ${!isEven ? 'lg:order-2' : ''}`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`}></div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={!isEven ? 'lg:order-1' : ''}
                  >
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-4xl font-bold text-primary font-technor">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-primary mb-4 font-technor">What We Offer:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-primary mb-4 font-technor">Key Benefits:</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((benefit, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={() => setIsQuoteDialogOpen(true)}
                      size="lg"
                      className="bg-secondary hover:bg-secondary/90 text-white group"
                    >
                      Get a Quote for {service.title}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-technor">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let&apos;s discuss your construction needs and turn your vision into reality.
            </p>
            <Button
              onClick={() => setIsQuoteDialogOpen(true)}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6"
            >
              Get Your Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <QuoteDialog open={isQuoteDialogOpen} onOpenChange={setIsQuoteDialogOpen} />

      <style jsx>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(to right, #ffffff20 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff20 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  )
}
