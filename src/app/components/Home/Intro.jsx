
import Link from "next/link";

export default function Intro() {
  return (
    <div className=" w-full h-screen flex flex-col border-b-2 border-gray-300 container mx-auto">
    {/* Pathii Section with Background Image */}
    <div
      className=" bg-cover bg-center bg-no-repeat h-[60%]"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1570975640108-2292d83390ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHVuaXZlcnNpdHklMjBhYXJjaGl0ZWN1dHJlfGVufDB8fDB8fHww')" }}
    >
    </div>

    {/* Intro Section */}
    <div className="flex-1 p-8 md:p-8 flex flex-col md:grid md:grid-cols-2">
      <div className="">
        <h1 className="text-3xl md:text-5xl font-bold text-primary">Empowering Students,</h1>
        <h1 className="text-3xl md:text-5xl font-bold text-primary">Building Community </h1>
        <h1 className="text-3xl md:text-5xl font-bold text-primary">Together</h1>
      </div>
      <div className=" flex flex-col justify-between h-full">
        <div className="h-[50%] mb-8 md:mb-0 mt-5">
            <p className="text-gray-600">
                Welcome to the Student Association, where your voice matters. 
                <span className="block">
                Join us in 
                creating a vibrant campus community that supports your academic and social journey.
                </span>
            
            </p>
        </div>
        <div className=" h-[50%] flex gap-5">
            <Link href="/register">
                <button className="py-3 px-5 bg-primary text-white rounded-md hover:bg-primary/80">Join</button>
            </Link>
            <Link href="#">
                <button className="py-3 px-5 bg-white border-2 border-primary text-primary shadow-lg rounded-md ">Learn More</button>
            </Link>
        </div>
      </div>
    </div>
  </div>
  );
}