import Link from "next/link";

export default function ContactIntro() {
  return (
    <div className="flex flex-col items-center justify-center text-center pl-8 pr-8 sm:pl-0 sm:pr-0 min-h-[450px] max-w-7xl mx-auto">
      <p className="text-sm font-medium mb-2 text-primary/80 ">Contact Us</p>
      
      <h1 className="text-3xl md:text-5xl font-bold text-primary mb-1 mt-4">
        Get in Touch
      </h1>
      
      <div className="max-w-xs sm:max-w-sm md:max-w-2xl mx-auto mb-6 mt-4 ">
        <p className="text-gray-600">
          We are here to help you with any questions or concerns tou may have
        </p>
      </div>
      <div className=" w-full flex justify-center space-x-8">
      <Link href="/reg">
            <button className="rounded-md bg-primary w-28 px-4 py-2 text-sm text-white shadow hover:bg-primary/80 transition-colors  font-medium">Button</button>
        </Link>
        <Link href="/reg">
            <button className="rounded-md  w-28 px-4 py-2 text-sm  shadow transition-colors  font-medium bg-white border-2 border-primary text-primary">Button</button>
        </Link>
      </div>
    </div>
  );
}