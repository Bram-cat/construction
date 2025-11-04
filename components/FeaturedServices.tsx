"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Building, Wrench, Hammer, Paintbrush, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    shortDesc: "Quality homes built with precision and care",
    features: ["Custom Home Building", "Additions & Extensions", "Foundation Work"],
    color: "#0066CC",
    bgGradient: "from-blue-600/10 to-blue-400/10",
    image: "/images/1.png",
    href: "/services#residential"
  },
  {
    icon: Building,
    title: "Commercial Projects",
    shortDesc: "Professional commercial construction services",
    features: ["Office Buildings", "Retail Spaces", "Industrial Facilities"],
    color: "#001a33",
    bgGradient: "from-slate-800/10 to-slate-600/10",
    image: "/images/2.png",
    href: "/services#commercial"
  },
  {
    icon: Wrench,
    title: "Renovations",
    shortDesc: "Transform your existing space with expert renovations",
    features: ["Kitchen Remodeling", "Bathroom Upgrades", "Whole Home Renovations"],
    color: "#0066CC",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    image: "/images/3.png",
    href: "/services#renovations"
  },
  {
    icon: Hammer,
    title: "Custom Builds",
    shortDesc: "Bring your unique vision to life",
    features: ["Design Consultation", "Custom Features", "Quality Materials"],
    color: "#003366",
    bgGradient: "from-blue-700/10 to-indigo-600/10",
    image: "/images/4.png",
    href: "/services#custom-builds"
  }
]

interface FeaturedServicesProps {
  onGetQuote: () => void
}

export function FeaturedServices({ onGetQuote }: FeaturedServicesProps) {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4 font-technor">
            WHAT WE OFFER
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 font-technor">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive construction solutions delivered with quality craftsmanship and attention to detail
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden border-2 border-gray-200 hover:border-secondary/40 transition-all duration-300 hover:shadow-2xl h-full bg-white">
                  {/* Image Background */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"></div>

                    {/* Icon */}
                    <div className="absolute bottom-4 left-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm"
                        style={{ backgroundColor: service.color }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors font-technor">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{ backgroundColor: service.color }}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Button */}
                    <Link href={service.href}>
                      <button
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 group-hover:gap-3 bg-secondary hover:bg-secondary/90"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-primary to-primary/80 text-white px-8 py-6 rounded-2xl shadow-xl">
            <div className="text-left">
              <p className="text-sm font-semibold text-blue-200 mb-1 font-technor">READY TO START?</p>
              <p className="text-2xl font-bold font-technor">Get a Free Consultation Today!</p>
            </div>
            <Button
              onClick={onGetQuote}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white font-bold shadow-lg"
            >
              Contact Us Now
            </Button>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(to right, #00000008 1px, transparent 1px),
            linear-gradient(to bottom, #00000008 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  )
}
