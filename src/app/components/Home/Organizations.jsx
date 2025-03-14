// 'use client'

// import Image from "next/image";
// import { useEffect, useState } from 'react';
// import Marquee from 'react-fast-marquee';

// export default function Organizations() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Check if window is defined (client-side)
//     if (typeof window !== 'undefined') {
//       const checkIfMobile = () => {
//         setIsMobile(window.innerWidth < 768);
//       };
      
//       // Initial check
//       checkIfMobile();
      
//       // Add event listener
//       window.addEventListener('resize', checkIfMobile);
      
//       // Cleanup
//       return () => window.removeEventListener('resize', checkIfMobile);
//     }
//   }, []);

//   const logoItems = [
//     { src: "/assets/img1.png", alt: "Logo 1" },
//     { src: "/assets/img2.png", alt: "Logo 2" },
//     { src: "/assets/img3.png", alt: "Logo 3" },
//     { src: "/assets/img4.png", alt: "Logo 4" },
//   ];

//   if (isMobile) {
//     return (
//       <div className="flex flex-col items-center max-w-7xl  container mx-auto pb-6">
//         <div className="text-xl font-bold mb-4 text-primary text-center mt-12">
//           Student Clubs & Organizations
//         </div>
//         <div className="w-full mt-2">
//           <Marquee speed={40} gradient={false} className="h-32">
//             {logoItems.map((logo, index) => (
//               <div key={index} className="relative h-24 w-24 mx-6">
//                 <Image
//                   src={logo.src}
//                   alt={logo.alt}
//                   layout="fill"
//                   style={{ objectFit: 'contain' }}
//                 />
//               </div>
//             ))}
//           </Marquee>
//         </div>
//       </div>
//     );
//   }

//   // Original desktop layout
//   return (
//     <div className="flex flex-col md:flex-row gap-52 items-center h-60 md:px-8 lg:px-0 max-w-7xl  container mx-auto">
//       <div className="text-xl font-bold mb-2 md:mb-0 text-primary">
//         Student Clubs & Organizations
//       </div>
//       <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-end items-center">
//         <div className="relative h-32 w-24 mx-6 md:mx-10">
//           <Image
//             src="/assets/img1.png"
//             alt="Logo 1"
//             layout="fill"
//             style={{ objectFit: 'contain' }}
//           />
//         </div>
//         <div className="relative h-32 w-24 mx-6 md:mx-10">
//           <Image
//             src="/assets/img2.png"
//             alt="Logo 2"
//             layout="fill"
//             style={{ objectFit: 'contain' }}
//           />
//         </div>
//         <div className="relative h-32 w-24 mx-6 md:mx-10">
//           <Image
//             src="/assets/img3.png"
//             alt="Logo 3"
//             layout="fill"
//             style={{ objectFit: 'contain' }}
//           />
//         </div>
//         <div className="relative h-32 w-24 mx-6 md:mx-10">
//           <Image
//             src="/assets/img4.png"
//             alt="Logo 4"
//             layout="fill"
//             style={{ objectFit: 'contain' }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }



'use client'

import Image from "next/image";
import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

export default function Organizations() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      const checkScreenSize = () => {
        setIsSmallScreen(window.innerWidth < 1024); 
      };
      
      // Initial check
      checkScreenSize();
      
      // Add event listener
      window.addEventListener('resize', checkScreenSize);
      
      // Cleanup
      return () => window.removeEventListener('resize', checkScreenSize);
    }
  }, []);
  
  const logoItems = [
    { src: "/assets/img1.png", alt: "Logo 1" },
    { src: "/assets/img2.png", alt: "Logo 2" },
    { src: "/assets/img3.png", alt: "Logo 3" },
    { src: "/assets/img4.png", alt: "Logo 4" },
  ];
  
  if (isSmallScreen) {
    return (
      <div className="flex flex-col items-center max-w-7xl container mx-auto pb-6">
        <div className="text-xl font-bold mb-4 text-primary text-center">
          Student Clubs & Organizations
        </div>
        <div className="w-full mt-2">
          <Marquee speed={40} gradient={false} className="h-32">
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
      </div>
    );
  }
  
  // Original desktop layout (now only for large screens)
  return (
    <div className="flex flex-col lg:flex-row gap-52 items-center h-60 lg:px-0 max-w-7xl container mx-auto">
      <div className="text-xl font-bold mb-2 lg:mb-0 text-primary">
        Student Clubs & Organizations
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-end items-center">
        <div className="relative h-32 w-24 mx-6 lg:mx-10">
          <Image
            src="/assets/img1.png"
            alt="Logo 1"
            layout="fill"
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="relative h-32 w-24 mx-6 lg:mx-10">
          <Image
            src="/assets/img2.png"
            alt="Logo 2"
            layout="fill"
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="relative h-32 w-24 mx-6 lg:mx-10">
          <Image
            src="/assets/img3.png"
            alt="Logo 3"
            layout="fill"
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="relative h-32 w-24 mx-6 lg:mx-10">
          <Image
            src="/assets/img4.png"
            alt="Logo 4"
            layout="fill"
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  );
}