
// import Image from "next/image";
// import Link from "next/link";

// export default function Intro() {
//   return (
//     <div className=" w-screen h-screen flex flex-col">
//     {/* Pathii Section with Background Image */}
//     <div
//       className="relative w-full h-[60%]  ">
//         <Image
//           src='https://images.unsplash.com/photo-1570975640108-2292d83390ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHVuaXZlcnNpdHklMjBhYXJjaGl0ZWN1dHJlfGVufDB8fDB8fHww'
//           alt="bg image"
//           layout="fill"
//           objectFit="cover"
          
//         />
//     </div>

//     {/* Intro Section */}
//     <div className="flex-1 flex flex-col md:grid md:grid-cols-2 max-w-7xl pl-8 pr-8 sm:pl-0 sm:pr-0 mt-20  mx-auto container">
//       <div className="">
//         <h1 className="text-3xl md:text-5xl font-bold text-primary">Empowering Students,</h1>
//         <h1 className="text-3xl md:text-5xl font-bold text-primary">Building Community </h1>
//         <h1 className="text-3xl md:text-5xl font-bold text-primary">Together</h1>
//       </div>
//       <div className=" flex flex-col justify-between h-full">
//         <div className="h-[50%] mb-8 md:mb-0 mt-5">
//             <p className="text-gray-600">
//                 Welcome to the Student Association, where your voice matters. 
//                 <span className="block">
//                 Join us in 
//                 creating a vibrant campus community that supports your academic and social journey.
//                 </span>
            
//             </p>
//         </div>
//         <div className=" h-[50%] flex gap-5">
//             <Link href="/register">
//                 <button className="py-3 px-5 bg-primary text-white rounded-md hover:bg-primary/80">Join</button>
//             </Link>
//             <Link href="#">
//                 <button className="py-3 px-5 bg-white border-2 border-primary text-primary rounded-md ">Learn More</button>
//             </Link>
//         </div>
//       </div>
//     </div>
//   </div>
//   );
// }


import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  return (
    <div className="w-screen flex flex-col">
      {/* Pathii Section with Background Image */}
      <div className="relative w-full h-[60vh]">
        <Image
          src='https://images.unsplash.com/photo-1570975640108-2292d83390ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHVuaXZlcnNpdHklMjBhYXJjaGl0ZWN1dHJlfGVufDB8fDB8fHww'
          alt="bg image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Intro Section */}
      <div className="flex-1 flex flex-col md:grid md:grid-cols-2 max-w-7xl pl-8 pr-8 md:pl-0 md:pr-0 mt-20 mx-auto container">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-primary">Empowering Students,</h1>
          <h1 className="text-3xl md:text-5xl font-bold text-primary">Building Community </h1>
          <h1 className="text-3xl md:text-5xl font-bold text-primary">Together</h1>
        </div>
        <div className="flex flex-col justify-between">
          <div className="mb-8 md:mb-0 mt-5">
            <p className="text-gray-600">
              Welcome to the Student Association, where your voice matters. 
              <span className="block">
                Join us in creating a vibrant campus community that supports your academic and social journey.
              </span>
            </p>
          </div>
          <div className="flex gap-6 md:mt-6">
            <Link href="/registration">
              <button className="py-3 px-5 bg-primary text-white rounded-md hover:bg-primary/80">Join</button>
            </Link>
            <Link href="#">
              <button className="py-3 px-5 bg-white border-2 border-primary text-primary rounded-md">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}