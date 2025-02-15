"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X, User, Newspaper, Briefcase, ImageIcon } from "lucide-react"
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

  return (
    <header className="relative border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between container">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-8">
          <Image src="/assets/Logo-vcc.png" alt="Logo" height={100} width={70} />
          <div className="flex flex-col text-lg leading-5 font-bold text-primary">
            <span className="block">VEYANGODA CENTRAL</span>
            <span className="block">COLLEGE PAST STUDENT <br/> ASSOCIATION</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
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
        </div>

        {/* Desktop  */}
        <div className="hidden items-center space-x-4 lg:flex">
          <Link href="/reg">
            <button className="rounded-md bg-primary w-28 px-4 py-2 text-sm text-white shadow hover:bg-primary/80 transition-colors  font-medium">Join</button>
          </Link>
          {/* <Link href="/dashboard">
            <button className="rounded-full bg-gray-100 p-2">
              <User className="h-5 w-5" />
            </button>
          </Link> */}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden">
          {isMobileMenuOpen ? <X className="h-6 w-6 mr-2" /> : <Menu className="h-6 w-6 mr-2" />}
        </button>
      </nav>

      {/* Full-width Explore Dropdown (Desktop) */}
      {isExploreOpen && (
        <div className="absolute left-0 top-full z-50 hidden w-full border-b bg-white shadow-lg lg:block">
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full z-50 w-full border-b bg-primary lg:hidden">
          <div className="flex flex-col space-y-4 p-4">
            <Link href="/" className="text-lg font-medium text-white">
              Home
            </Link>
            <Link href="/about" className="text-lg font-medium text-white hover:text-gray-900">
              About Us
            </Link>
            <Link href="/donations" className="text-lg font-medium text-white hover:text-gray-900">
              Donations
            </Link>
            <Link href="/contact" className="text-lg font-medium text-white hover:text-gray-900">
              Contact Us
            </Link>
            <div className="space-y-4">
              <button
                onClick={() => setIsMobileExploreOpen(!isMobileExploreOpen)}
                className="flex w-full items-center justify-between text-lg font-medium text-white"
              >
                <span>Explore</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${isMobileExploreOpen ? "-rotate-180" : ""}`}
                />
              </button>
              {isMobileExploreOpen && (
                <div className="space-y-4 pl-4">
                  {exploreItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center space-x-2 text-white hover:text-gray-900"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="mt-4 border-t pt-4 text-sm flex justify-start gap-1 text-white">
              Looking for new opportunities?
              <Link href="/contact" className="font-medium hover:underline text-white">
                Contact Our Team
              </Link>
            </div>
            <Link href="/register">
              <button className="w-full rounded-md bg-black px-4 py-2 text-sm font-medium text-white">Join</button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}