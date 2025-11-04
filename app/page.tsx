"use client"

import { useState } from "react"
import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { FeaturedServices } from "@/components/FeaturedServices"
import { About } from "@/components/About"
import { Footer } from "@/components/Footer"
import { QuoteDialog } from "@/components/QuoteDialog"

export default function Home() {
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false)

  return (
    <main className="min-h-screen">
      <Navigation onGetQuote={() => setIsQuoteDialogOpen(true)} />
      <Hero onGetQuote={() => setIsQuoteDialogOpen(true)} />
      <FeaturedServices onGetQuote={() => setIsQuoteDialogOpen(true)} />
      <About />
      <Footer />
      <QuoteDialog open={isQuoteDialogOpen} onOpenChange={setIsQuoteDialogOpen} />
    </main>
  )
}
