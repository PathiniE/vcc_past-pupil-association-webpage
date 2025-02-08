
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full px-6 py-8 bg-white bg-red-500">
      <div className="container mx-auto bg-red-600">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="flex justify-between items-start mb-8">
            <div className="space-y-4 bg-yellow-400 w-full">
              <Link href="/" className="text-xl font-semibold">
                <Image src="/assets/Logo-vcc.png" alt="Logo" width={90} height={90} />
              </Link>
              <div className="space-y-1 text-sm">
                <p className="font-semibold">Address:</p>
                <p>Level 1, 12 Sample St, Sydney NSW 2000</p>
                <p className="font-semibold">Contact:</p>
                <p>1800 123 4567</p>
                <p>info@studentassociation.org</p>
              </div>
              
              {/* Social Icons & Join Button Section */}
              <div className="flex justify-between items-center w-full bg-green-500">
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-600 hover:text-black">
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    <Twitter className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    <Youtube className="w-5 h-5" />
                  </Link>
                </div>
                
                <Link href="/register" className="px-12 py-2 bg-black text-white rounded hover:bg-gray-800">
                  Join
                </Link>
              </div>
            </div>

            <nav className="flex gap-12">
              <div className="space-y-4">
                <Link href="/" className="block hover:text-gray-700 font-medium">
                  Home
                </Link>
                <Link href="/about-us" className="block hover:text-gray-700 font-medium">
                  About Us
                </Link>
                <Link href="/donations" className="block hover:text-gray-700 font-medium">
                  Donations
                </Link>
                <Link href="/contact-us" className="block hover:text-gray-700 font-medium">
                  Contact Us
                </Link>
              </div>
              <div className="space-y-4">
                <Link href="/projects" className="block hover:text-gray-700 font-medium">
                  Projects
                </Link>
                <Link href="/gallery" className="block hover:text-gray-700 font-medium">
                  Gallery
                </Link>
                <Link href="/news-events" className="block hover:text-gray-700 font-medium">
                  News & Events
                </Link>
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          <Link href="/" className="block text-xl font-semibold">
            <Image src="/assets/logo-vcc.png" alt="Logo" width={90} height={90} />
          </Link>
          <div className="space-y-2 text-sm">
            <p className="font-medium">Address:</p>
            <p>Level 1, 12 Sample St, Sydney NSW 2000</p>
            <p className="font-medium mt-4">Contact:</p>
            <p>1800 123 4567</p>
            <p>info@studentassociation.org</p>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-600 hover:text-black">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black">
              <Youtube className="w-5 h-5" />
            </Link>
          </div>
          <nav className="space-y-4">
            <Link href="/" className="block hover:text-gray-600 font-semibold">
              Home
            </Link>
            <Link href="/about-us" className="block hover:text-gray-600 font-semibold">
              About Us
            </Link>
            <Link href="/donations" className="block hover:text-gray-600 font-semibold">
              Donations
            </Link>
            <Link href="/join-us" className="block hover:text-gray-600 font-semibold">
              Join Us
            </Link>
            <Link href="/contact-us" className="block hover:text-gray-600 font-semibold">
              Contact Us
            </Link>
            <Link href="/projects" className="block hover:text-gray-600 font-semibold">
              Projects
            </Link>
            <Link href="/gallery" className="block hover:text-gray-600 font-semibold">
              Gallery
            </Link>
            <Link href="/news-events" className="block hover:text-gray-600 font-semibold">
              News & Events
            </Link>
          </nav>
          <Link href="/register" className="block w-full py-2 bg-black text-white text-center rounded hover:bg-gray-800">
            Join
          </Link>
        </div>

        {/* Footer Bottom - Same for both layouts */}
        <div className="pt-8 mt-8 border-t text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p>© 2024 Student Association. All rights reserved.</p>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <Link href="/privacy-policy" className="hover:text-black">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-black">
              Terms of Service
            </Link>
            <Link href="/cookie-settings" className="hover:text-black">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
