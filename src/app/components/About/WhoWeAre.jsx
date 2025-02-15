import Image from "next/image";

export default function WhoWeAre() {
  return (
    <div className="flex flex-col max-w-7xl h-screen mt-10 md:mt-20 pl-8 pr-8 sm:pl-0 sm:pr-0 container mx-auto">
      <p className="md:mb-4 text-sm font-medium mb-2 text-primary/80">Who we are</p>

      <div className="flex flex-col md:flex-row md:gap-8 lg:gap-16">
        <div className="w-full md:w-1/2 mb-3 md:mb-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
            Empowering students through community, leadership, and advocacy since our inception.
          </h2>
        </div>

        <div className="w-full md:w-1/2">
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-grow w-full rounded-sm mt-6 sm:mt-10 overflow-hidden relative">
        <Image
          src="https://images.unsplash.com/photo-1570975640108-2292d83390ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHVuaXZlcnNpdHklMjBhYXJjaGl0ZWN1dHJlfGVufDB8fDB8fHww"
          alt="who we are"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
