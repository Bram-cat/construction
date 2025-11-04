"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu, X, HardHat, Home, Building, Wrench, Hammer, Paintbrush } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface NavigationProps {
  onGetQuote: () => void
}

export function Navigation({ onGetQuote }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  const servicesDropdown = [
    { label: "Residential Construction", href: "/services#residential", icon: Home },
    { label: "Commercial Construction", href: "/services#commercial", icon: Building },
    { label: "Renovations", href: "/services#renovations", icon: Wrench },
    { label: "Custom Builds", href: "/services#custom-builds", icon: Hammer },
    { label: "Finishing & Design", href: "/services#finishing", icon: Paintbrush },
  ]

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-primary shadow-lg" : "bg-primary/95 backdrop-blur-md"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-blue-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <HardHat className="w-5 h-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-lg text-white font-technor drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">BernMar</div>
                <div className="text-xs text-blue-200 -mt-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">Construction</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <NavigationMenu>
                <NavigationMenuList>
                  {navItems.map((item) => (
                    <NavigationMenuItem key={item.href}>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "font-medium transition-colors",
                            pathname === item.href
                              ? "text-white bg-secondary drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                              : "text-white/95 hover:text-white hover:bg-white/10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                          )}
                        >
                          {item.label}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}

                  {/* Services Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={cn(
                      "font-medium transition-colors",
                      pathname.startsWith("/services")
                        ? "text-white bg-secondary drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                        : "text-white/95 hover:text-white hover:bg-white/10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                    )}>
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-white">
                        {servicesDropdown.map((service) => {
                          const Icon = service.icon
                          return (
                            <li key={service.href}>
                              <Link href={service.href} legacyBehavior passHref>
                                <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/10 hover:text-primary focus:bg-secondary/10 focus:text-primary group">
                                  <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors">
                                      <Icon className="w-4 h-4" />
                                    </div>
                                    <div className="text-sm font-medium leading-none text-primary">{service.label}</div>
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-gray-600 mt-2">
                                    Professional {service.label.toLowerCase()} services
                                  </p>
                                </NavigationMenuLink>
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Button
                onClick={onGetQuote}
                className="bg-secondary hover:bg-secondary/90 text-white ml-2"
              >
                Get a Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-primary md:hidden"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-semibold hover:text-secondary transition-colors ${
                    pathname === item.href ? 'text-secondary' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
            >
              <Button
                onClick={() => {
                  onGetQuote()
                  setIsMobileMenuOpen(false)
                }}
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white"
              >
                Get a Quote
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Spacer */}
      <div className="h-16 md:h-20"></div>
    </>
  )
}
