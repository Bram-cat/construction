"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { QuoteDialog } from "@/components/QuoteDialog"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  HardHat, Shield, Users, ThumbsUp, Award, Clock, Handshake,
  CheckCircle, Phone, Mail, MapPin, Star, Building2, Wrench
} from "lucide-react"
import Image from "next/image"

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We believe in honest, transparent service. Clear communication, fair pricing, and reliable work you can count on.",
    color: "from-blue-600 to-blue-400"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We&apos;re committed to delivering exceptional craftsmanship on every project. Quality work is our signature.",
    color: "from-indigo-600 to-blue-500"
  },
  {
    icon: Handshake,
    title: "Reliability",
    description: "Your project matters to you, and it matters to us. We deliver on time, on budget, with the quality you deserve.",
    color: "from-cyan-600 to-blue-500"
  },
  {
    icon: Users,
    title: "Community",
    description: "As a locally operated business in PEI, we&apos;re invested in our community and dedicated to building lasting relationships.",
    color: "from-blue-500 to-indigo-500"
  }
]

const stats = [
  { number: "10+", label: "Years Combined Experience", icon: Award },
  { number: "100+", label: "Projects Completed", icon: CheckCircle },
  { number: "5.0", label: "Star Rating", icon: Star },
  { number: "100%", label: "Client Satisfaction", icon: ThumbsUp }
]

export default function AboutPage() {
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <Navigation onGetQuote={() => setIsQuoteDialogOpen(true)} />

      {/* About Hero Banner */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/4.png"
            alt="BernMar Construction Projects"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/80 via-primary/60 to-primary/80"></div>
        <motion.div
          className="relative z-10 text-center text-white container mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/30">
            <HardHat className="w-5 h-5 text-blue-300" />
            <span className="text-sm font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">Serving PEI Since Day One</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-technor drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">About BernMar</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Your trusted partner for quality construction services across Prince Edward Island
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-technor">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  <span className="font-semibold text-primary">BernMar Construction</span> is a locally operated construction company proudly serving Prince Edward Island. Located at 345 Brackley Point Road, Route 15, we specialize in both residential and commercial construction projects.
                </p>
                <p>
                  From the start, our mission has been simple: to deliver quality construction services with integrity, professionalism, and a commitment to excellence. Whether you&apos;re building your dream home, renovating an existing space, or developing a commercial property, we bring the expertise and dedication needed to bring your vision to life.
                </p>
                <p>
                  Our team combines years of construction experience with a deep understanding of local building requirements and conditions. We take pride in using quality materials, proven construction methods, and maintaining clear communication throughout every phase of your project.
                </p>
                <p className="font-semibold text-primary">
                  At BernMar Construction, we don&apos;t just build structures—we build lasting relationships with our clients and our community.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/images/5.png"
                alt="BernMar Construction work"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-secondary to-blue-400 flex items-center justify-center shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-technor">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-technor">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do, from how we interact with clients to
              the quality of work we deliver
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/40">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-4 font-technor">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-technor">Get In Touch</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to start your project? We&apos;re here to help bring your vision to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-technor">Phone</h3>
                  <a href="tel:9023703112" className="text-blue-200 hover:text-white transition-colors">
                    (902) 370-3112
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-technor">Email</h3>
                  <a href="mailto:mark@bernmarconstruction.com" className="text-blue-200 hover:text-white transition-colors break-all">
                    mark@bernmarconstruction.com
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-technor">Location</h3>
                  <p className="text-blue-200">
                    345 Brackley Point Road<br />
                    Rte 15, PEI
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-technor">Why Choose BernMar?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here&apos;s what sets us apart from other construction companies in PEI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Fully Licensed & Insured",
                description: "Your peace of mind is our priority. We&apos;re fully licensed and insured to protect you and your property."
              },
              {
                icon: Clock,
                title: "On-Time Delivery",
                description: "We respect your time and budget. Our projects are completed on schedule without compromising quality."
              },
              {
                icon: ThumbsUp,
                title: "Quality Guaranteed",
                description: "We stand behind our work with a commitment to excellence. If it&apos;s not right, we&apos;ll make it right."
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/40">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-secondary to-blue-400 flex items-center justify-center shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-4 font-technor">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-technor">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Experience the BernMar difference. Contact us today for a free consultation and see why PEI
              property owners trust us with their construction projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setIsQuoteDialogOpen(true)}
                className="bg-secondary text-white hover:bg-secondary/90 text-lg px-8 py-6 h-auto font-semibold shadow-xl hover:shadow-2xl transition-all"
              >
                Get a Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 h-auto font-semibold backdrop-blur-sm"
              >
                <a href="tel:9023703112">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <QuoteDialog open={isQuoteDialogOpen} onOpenChange={setIsQuoteDialogOpen} />
    </main>
  )
}
