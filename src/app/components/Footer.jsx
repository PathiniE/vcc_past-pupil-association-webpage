


// import {Link } from 'next-view-transitions';
// import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
// import Image from "next/image";

// export default function Footer() {
//   return (
//     <footer className="w-full mt-20">
//       <div className="max-w-7xl mx-auto container px-8 md:px-0">
        
//         {/* Logo Section - Separate */}
//         <div className="flex mb-6">
//           <Link href="/">
//             <Image src="/assets/Logo-vcc.png" alt="Logo" width={90} height={90} />
//           </Link>
//         </div>

//         {/* Address & Navigation Section in One Div */}
//         <div className="hidden md:flex justify-between items-start w-full">
//           {/* Left Section: Address */}
//           <div className="w-1/2">
//             <div className="space-y-1 text-sm text-primary">
//               <p className="font-semibold">Address:</p>
//               <p>Level 1, 12 Sample St, Sydney NSW 2000</p>
//               <p className="font-semibold">Contact:</p>
//               <p>1800 123 4567</p>
//               <p>info@studentassociation.org</p>
//             </div>
//           </div>

//           {/* Right Section: Navigation Links */}
//           <div className="flex gap-12 w-1/2 justify-end">
//             <div className="space-y-4">
//               <Link href="/" className="block hover:text-primary/80 font-semibold text-primary">
//                 Home
//               </Link>
//               <Link href="/about" className="block hover:text-primary/80 text-primary font-semibold">
//                 About Us
//               </Link>
//               <Link href="/donations" className="block hover:text-primary/80 text-primary font-semibold">
//                 Donations
//               </Link>
//               <Link href="/contact" className="block hover:text-primary/80 text-primary font-semibold">
//                 Contact Us
//               </Link>
//             </div>
//             <div className="space-y-4">
//               <Link href="/projects" className="block hover:text-primary/80 text-primary font-semibold">
//                 Projects
//               </Link>
//               <Link href="/gallery" className="block hover:text-primary/80 text-primary font-semibold">
//                 Gallery
//               </Link>
//               <Link href="/news" className="block hover:text-primary/80 text-primary font-semibold">
//                 News & Events
//               </Link>
//               <Link href="/registration" className="block hover:text-primary/80 text-primary font-semibold">
//                 Join Us
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Layout */}
//         <div className="md:hidden space-y-6">
//           {/* Address and Contact */}
//           <div className="space-y-1 text-sm text-primary">
//             <p className="font-semibold">Address:</p>
//             <p>Level 1, 12 Sample St, Sydney NSW 2000</p>
//             <p className="font-semibold">Contact:</p>
//             <p>1800 123 4567</p>
//             <p>info@studentassociation.org</p>
//           </div>

//           {/* Navigation Links */}
//           <div className="space-y-4 pt-4">
//             <Link href="/" className="block hover:text-primary/80 text-primary">Home</Link>
//             <Link href="/about" className="block hover:text-primary/80 text-primary">About Us</Link>
//             <Link href="/donations" className="block hover:text-primary/80 text-primary">Donations</Link>
//             <Link href="/contact" className="block hover:text-primary/80 text-primary">Contact Us</Link>
//             <Link href="/projects" className="block hover:text-primary/80 text-primary">Projects</Link>
//             <Link href="/gallery" className="block hover:text-primary/80 text-primary">Gallery</Link>
//             <Link href="/news" className="block hover:text-primary/80 text-primary">News & Events</Link>
//             <Link href="/registration" className="block hover:text-primary/80 text-primary">Join Us</Link>
//           </div>

//           {/* Social Icons */}
//           <div className="flex space-x-4 pt-4 ">
//             <Link href="#" className="hover:text-primary/80  text-primary">
//               <Facebook className="w-5 h-5" />
//             </Link>
//             <Link href="#" className="hover:text-primary/80 text-primary">
//               <Instagram className="w-5 h-5" />
//             </Link>
//             <Link href="#" className="hover:text-primary/80 text-primary">
//               <Twitter className="w-5 h-5" />
//             </Link>
//             <Link href="#" className="hover:text-primary/80 text-primary">
//               <Linkedin className="w-5 h-5" />
//             </Link>
//             <Link href="#" className="hover:text-primary/80 text-primary">
//               <Youtube className="w-5 h-5" />
//             </Link>
//           </div>

//           {/* Join Button */}
//           <div className="pt-4">
//             <Link href="/registration" className="block w-full py-2 text-white text-center rounded hover:bg-primary/80 bg-primary">
//               Join
//             </Link>
//           </div>
//         </div>

//         {/* Social Icons and Join Button Container - Desktop Only */}
//         <div className="hidden md:block w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] mt-5">
//           <div className="max-w-7xl mx-auto flex justify-between items-center">
//             <div className="flex space-x-4">
//               <Link href="#" className="hover:text-primary/80 text-primary">
//                 <Facebook className="w-5 h-5" />
//               </Link>
//               <Link href="#" className="hover:text-primary/80 text-primary">
//                 <Instagram className="w-5 h-5" />
//               </Link>
//               <Link href="#" className="hover:text-primary/80 text-primary">
//                 <Twitter className="w-5 h-5" />
//               </Link>
//               <Link href="#" className="hover:text-primary/80 text-primary">
//                 <Linkedin className="w-5 h-5" />
//               </Link>
//               <Link href="#" className="hover:text-primary/80 text-primary">
//                 <Youtube className="w-5 h-5" />
//               </Link>
//             </div>
//             <Link href="/registration" className="w-1/6 text-center py-2  bg-primary text-white rounded hover:bg-primary/80">
//               Join
//             </Link>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="pt-8 mt-8 border-t text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//           <p>© 2024 Student Association. All rights reserved.</p>
//           <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
//             <Link href="/privacy-policy" className="hover:text-black">
//               Privacy Policy
//             </Link>
//             <Link href="/terms-of-service" className="hover:text-black">
//               Terms of Service
//             </Link>
//             <Link href="/cookie-settings" className="hover:text-black">
//               Cookie Settings
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


import {Link } from 'next-view-transitions';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full mt-20">
      <div className="max-w-7xl mx-auto container px-8 md:px-8 lg:px-0">
        
        {/* Logo Section - Separate */}
        <div className="flex mb-6">
          <Link href="/">
            <Image src="/assets/Logo-vcc.png" alt="Logo" width={90} height={90} />
          </Link>
        </div>

        {/* Address & Navigation Section in One Div */}
        <div className="hidden md:flex justify-between items-start w-full">
          {/* Left Section: Address */}
          <div className="w-1/2">
            <div className="space-y-1 text-sm text-primary">
              <p className="font-semibold">Address:</p>
              <p>Level 1, 12 Sample St, Sydney NSW 2000</p>
              <p className="font-semibold">Contact:</p>
              <p>1800 123 4567</p>
              <p>info@studentassociation.org</p>
            </div>
          </div>

          {/* Right Section: Navigation Links */}
          <div className="flex gap-12 w-1/2 justify-end">
            <div className="space-y-4">
              <Link href="/" className="block hover:text-primary/80 font-semibold text-primary">
                Home
              </Link>
              <Link href="/about" className="block hover:text-primary/80 text-primary font-semibold">
                About Us
              </Link>
              <Link href="/donations" className="block hover:text-primary/80 text-primary font-semibold">
                Donations
              </Link>
              <Link href="/contact" className="block hover:text-primary/80 text-primary font-semibold">
                Contact Us
              </Link>
            </div>
            <div className="space-y-4">
              <Link href="/projects" className="block hover:text-primary/80 text-primary font-semibold">
                Projects
              </Link>
              <Link href="/gallery" className="block hover:text-primary/80 text-primary font-semibold">
                Gallery
              </Link>
              <Link href="/news" className="block hover:text-primary/80 text-primary font-semibold">
                News & Events
              </Link>
              <Link href="/registration" className="block hover:text-primary/80 text-primary font-semibold">
                Join Us
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {/* Address and Contact */}
          <div className="space-y-1 text-sm text-primary">
            <p className="font-semibold">Address:</p>
            <p>Level 1, 12 Sample St, Sydney NSW 2000</p>
            <p className="font-semibold">Contact:</p>
            <p>1800 123 4567</p>
            <p>info@studentassociation.org</p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4 pt-4">
            <Link href="/" className="block hover:text-primary/80 text-primary">Home</Link>
            <Link href="/about" className="block hover:text-primary/80 text-primary">About Us</Link>
            <Link href="/donations" className="block hover:text-primary/80 text-primary">Donations</Link>
            <Link href="/contact" className="block hover:text-primary/80 text-primary">Contact Us</Link>
            <Link href="/projects" className="block hover:text-primary/80 text-primary">Projects</Link>
            <Link href="/gallery" className="block hover:text-primary/80 text-primary">Gallery</Link>
            <Link href="/news" className="block hover:text-primary/80 text-primary">News & Events</Link>
            <Link href="/registration" className="block hover:text-primary/80 text-primary">Join Us</Link>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 pt-4 ">
            <Link href="#" className="hover:text-primary/80  text-primary">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-primary/80 text-primary">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-primary/80 text-primary">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-primary/80 text-primary">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-primary/80 text-primary">
              <Youtube className="w-5 h-5" />
            </Link>
          </div>

          {/* Join Button */}
          <div className="pt-4">
            <Link href="/registration" className="block w-full py-2 text-white text-center rounded hover:bg-primary/80 bg-primary">
              Join
            </Link>
          </div>
        </div>

        {/* Social Icons and Join Button Container - Desktop Only */}
        <div className="hidden md:block w-full bg-gray-50 mt-5 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-8 md:px-0">
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary/80 text-primary">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-primary/80 text-primary">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-primary/80 text-primary">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-primary/80 text-primary">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-primary/80 text-primary">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
            <Link href="/registration" className="w-1/6 text-center py-2  bg-primary text-white rounded hover:bg-primary/80">
              Join
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 mt-8 border-t text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p>© 2024 Student Association. All rights reserved.</p>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <Link href="/privacy-policy" className="hover:text-primary/80">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-primary/80">
              Terms of Service
            </Link>
            <Link href="/cookie-settings" className="hover:text-primary/80">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
