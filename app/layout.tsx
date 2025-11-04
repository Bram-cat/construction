import type { Metadata, Viewport } from "next"
import "./globals.css"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "BernMar Construction | Quality Construction Services in PEI",
  description: "Professional construction services in Prince Edward Island. Specializing in residential and commercial projects, renovations, custom builds, and more. Quality craftsmanship you can trust.",
  keywords: [
    "construction PEI",
    "renovations Prince Edward Island",
    "home building PEI",
    "commercial construction",
    "residential construction",
    "custom builds",
    "construction services PEI",
    "BernMar Construction"
  ],
  authors: [{ name: "BernMar Construction" }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://bernmarconstruction.com",
    title: "BernMar Construction | Quality Construction Services in PEI",
    description: "Professional construction services in Prince Edward Island. Building excellence with quality craftsmanship and dedicated service.",
    siteName: "BernMar Construction",
  },
  twitter: {
    card: "summary_large_image",
    title: "BernMar Construction | Quality Construction Services in PEI",
    description: "Professional construction services in Prince Edward Island. Quality craftsmanship you can trust.",
  },
  robots: "index, follow",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" style={{ fontFamily: 'Chillax, sans-serif' }}>
      <body>{children}</body>
    </html>
  )
}
