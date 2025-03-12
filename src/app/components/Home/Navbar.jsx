
"use client"

import { useState, useRef, useEffect } from "react"
import {Link } from 'next-view-transitions'
import { ChevronDown, Menu, X, Newspaper, Briefcase, ImageIcon } from "lucide-react"
import Image from "next/image"

const exploreItems = [
  {
    title: "News & Events",
    description: "Latest news, upcoming events, and important updates",
    href: "/news",
    icon: Newspaper,
  },
  {
    title: "Projects",
    description: "Innovative works, case studies, and developments",
    href: "/projects",
    icon: Briefcase,
  },
  {
    title: "Gallery",
    description: "Visual highlights of events and projects",
    href: "/gallery",
    icon: ImageIcon,
  },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isExploreOpen, setIsExploreOpen] = useState(false)
  const [isMobileExploreOpen, setIsMobileExploreOpen] = useState(false)

  const mobileMenuRef = useRef(null)
  const exploreButtonRef = useRef(null)
  const exploreMenuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMobileMenuOpen])

  // Added effect for desktop explore dropdown
  useEffect(() => {
    const handleExploreClickOutside = (event) => {
      if (
        exploreButtonRef.current &&
        exploreMenuRef.current &&
        !exploreButtonRef.current.contains(event.target) &&
        !exploreMenuRef.current.contains(event.target)
      ) {
        setIsExploreOpen(false)
      }
    }

    if (isExploreOpen) {
      document.addEventListener("mousedown", handleExploreClickOutside)
    } else {
      document.removeEventListener("mousedown", handleExploreClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleExploreClickOutside)
    }
  }, [isExploreOpen])

  return (
    <header className="relative border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between container px-4 md:px-8 lg:px-0">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-8">
          <Image src="/assets/Logo-vcc.png" alt="Logo" height={100} width={70}  />
          <div className="flex flex-col text-lg leading-5 font-bold text-primary">
            <span className="block text-xs sm:text-base">VEYANGODA CENTRAL</span>
            <span className="block text-xs sm:text-base">COLLEGE PAST STUDENT <br /> ASSOCIATION</span>
          </div>
        </Link>

        {/* Desktop Navigation and Join Button */}
        <div className="hidden items-center space-x-8 lg:flex">
          <Link href="/" className="text-sm font-semibold text-primary hover-underline-animation">
            Home
          </Link>
          <Link href="/about" className="text-sm font-semibold text-primary hover-underline-animation">
            About Us
          </Link>
          <Link href="/donations" className="text-sm font-semibold text-primary hover-underline-animation">
            Donations
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-primary hover-underline-animation">
            Contact Us
          </Link>
          <div className="relative">
            <button
              ref={exploreButtonRef}
              onClick={() => setIsExploreOpen(!isExploreOpen)}
              className="flex items-center space-x-1 text-sm font-semibold text-primary hover-underline-animation"
            >
              <div className="flex items-center">
                <span>Explore</span>
                <ChevronDown 
                  className={`h-4 w-4 transition-transform duration-300 ml-1 ${
                    isExploreOpen ? "-rotate-180" : ""
                  }`} 
                />
              </div>
            </button>
          </div>
          <Link href="/registration">
            <button className="rounded-md bg-primary w-28 px-4 py-2 text-sm text-white shadow hover:bg-primary/80 transition-colors font-medium">Join</button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden">
          {isMobileMenuOpen ? <X className="h-6 w-6 mr-4 text-primary" /> : <Menu className="h-6 w-6 mr-4 text-primary" />}
        </button>
      </nav>

      {/* Full-width Explore Dropdown (Desktop) */}
      {isExploreOpen && (
        <div 
          ref={exploreMenuRef}
          className="absolute left-0 top-full z-50 hidden w-full border-b bg-white shadow-lg lg:block"
        >
          <div className="mx-auto max-w-7xl px-4 py-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {exploreItems.map((item) => (
                <Link key={item.title} href={item.href} className="block text-primary rounded-lg p-3 hover:bg-gray-100">
                  <div className="flex items-center space-x-3">
                    <item.icon className=" h-5 w-5 text-primary" />
                    <div className="font-medium">{item.title}</div>
                  </div>
                  <div className="mt-1 text-sm text-primary/65">{item.description}</div>
                </Link>
              ))}
            </div>
            <div className="mt-6 border-t pt-6 text-center text-sm gap-1 text-primary flex justify-center items-center">
              Looking for new opportunities?
              <Link href="/contact" className="font-medium hover:underline">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu - With Simple CSS Animation */}
      <div
        ref={mobileMenuRef}
        className={`absolute left-0 top-full z-50 w-full border-b bg-white lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-auto" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-4 p-4">
          <Link href="/" className="text-lg font-medium text-primary hover:text-primary/80">
            Home
          </Link>
          <Link href="/about" className="text-lg font-medium text-primary hover:text-primary/80">
            About Us
          </Link>
          <Link href="/donations" className="text-lg font-medium text-primary hover:text-primary/80">
            Donations
          </Link>
          <Link href="/contact" className="text-lg font-medium text-primary hover:text-primary/80">
            Contact Us
          </Link>
          <div className="space-y-4">
            <button
              onClick={() => setIsMobileExploreOpen(!isMobileExploreOpen)}
              className="flex w-full items-center justify-between text-lg font-medium text-primary"
            >
              <span>Explore</span>
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-200 ${isMobileExploreOpen ? "-rotate-180" : ""}`}
              />
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isMobileExploreOpen ? "max-h-60" : "max-h-0"
              }`}
            >
              <div className="space-y-4 pl-4 pt-2">
                {exploreItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-center space-x-2 text-primary hover:text-primary/80"
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 border-t pt-4 text-sm flex justify-start gap-1 text-primary">
            Looking for new opportunities?
            <Link href="/contact" className="font-medium hover:underline text-primary hover:text-primary/80">
              Contact Our Team
            </Link>
          </div>
          <Link href="/registration">
            <button className="w-full rounded-md bg-primary hover:bg-primary/80 px-4 py-3 text-sm font-medium text-white">Join</button>
          </Link>
        </div>
      </div>
    </header>
  )
}