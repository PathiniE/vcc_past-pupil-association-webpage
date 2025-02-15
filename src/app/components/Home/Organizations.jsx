'use client'

import Image from "next/image";
import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

export default function Organizations() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      // Initial check
      checkIfMobile();
      
      // Add event listener
      window.addEventListener('resize', checkIfMobile);
      
      // Cleanup
      return () => window.removeEventListener('resize', checkIfMobile);
    }
  }, []);

  const logoItems = [
    { src: "/assets/img1.png", alt: "Logo 1" },
    { src: "/assets/img2.png", alt: "Logo 2" },
    { src: "/assets/img3.png", alt: "Logo 3" },
    { src: "/assets/img4.png", alt: "Logo 4" },
  ];

  return (
    <div className="flex flex-col items-center max-w-7xl mt-10 pl-8 pr-8 sm:pl-0 sm:pr-0 container mx-auto pb-6">
      <div className="text-xl font-bold mb-4 text-primary text-center mt-10">
        Student Clubs & Organizations
      </div>
      
      {isMobile ? (
        <div className="w-full mt-2">
          <Marquee
            speed={40}
            gradient={false}
            className="h-32"
          >
            {logoItems.map((logo, index) => (
              <div key={index} className="relative h-24 w-24 mx-6">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  layout="fill"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </Marquee>
        </div>
      ) : (
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-end items-center mt-4">
          {logoItems.map((logo, index) => (
            <div key={index} className="relative h-32 w-24 mx-6 md:mx-10">
              <Image
                src={logo.src}
                alt={logo.alt}
                layout="fill"
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}