import Image from "next/image";

export default function ExecutiveCommittee() {
  const memberData = [
    {
      name: "Alice Johnson",
      title: "President",
      description: "Documenting meetings and maintaining communication among members. Managing our finances and ensuring transparency in budgeting.",
      image: "/assets/president.jpg"
    },
    {
      name: "Bob Smith",
      title: "Vice President",
      description: "Leads weekly meetings and maintains communication among members effectively.",
      image: "/assets/president.jpg"
    },
    {
      name: "Cathy Brown",
      title: "Secretary",
      description: "Responsible for documenting meetings and ensuring smooth communication.",
      image: "/assets/president.jpg"
    },
    {
      name: "David Lee",
      title: "Treasurer",
      description: "Manages finances and ensures transparency in budgeting.",
      image: "/assets/president.jpg"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto min-h-screen mt-10 md:mt-20 px-8 sm:px-0 container">
      <div className="mb-8 text-center md:text-left">
        <p className="text-sm font-medium mb-2 text-primary/80">Committee</p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">Executive Committee</h1>
        <p className="text-gray-600">Leading initiatives to enhance student engagement and representation.</p>
      </div>

      {/* Mobile view (grid of equal cards) */}
      <div className="grid grid-cols-2 gap-4 md:hidden">
        {memberData.map((member, index) => (
          <div key={index} className="rounded-lg overflow-hidden flex flex-col">
            <div className="h-32 relative">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="p-3 text-center">
              <h3 className="font-bold text-sm">{member.name}</h3>
              <p className="text-gray-600 text-xs">{member.title}</p>
              {/* Description removed from mobile view */}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop view (original layout) */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-12 gap-8 mt-8">
        {/* Large member card */}
        <div className="md:col-span-7 bg-gray-200 rounded-lg relative h-[380px] overflow-hidden">
          {/* Full-size background image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={memberData[0].image}
              alt={memberData[0].name}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Text content at bottom with semi-transparent background */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/40 text-white z-10">
            <h3 className="text-xl font-bold">{memberData[0].name}</h3>
            <p className="text-white/80">{memberData[0].title}</p>
            <p className="mt-2 text-sm">{memberData[0].description}</p>
          </div>
        </div>

        {/* Smaller member cards */}
        <div className="md:col-span-5 grid grid-cols-1 gap-6 content-between h-[380px]">
          {memberData.slice(1).map((member, index) => (
            <div key={index} className="bg-gray-500 rounded-lg flex items-center h-28 overflow-hidden relative">
              {/* Background image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-black/40"></div>
              
              {/* Text content */}
              <div className="px-4 relative z-10 w-full">
                <h3 className="font-bold text-white">{member.name}</h3>
                <p className="text-white/80 text-sm">{member.title}</p>
                <p className="mt-1 text-xs text-white/70">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}