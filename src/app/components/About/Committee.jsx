"use client"

import React from "react"
import Image from "next/image"

const ExecutiveCommittee = () => {
  const committeeMembers = [
    {
      id: 1,
      name: "Alice Johnson",
      title: "President",
      description: "Documenting meetings and maintaining communication among members. Managing our finances and ensuring transparency in budgeting.",
      image: "/assets/president.jpg"
    },
    {
      id: 2,
      name: "Alice Johnson",
      title: "President",
      description: "Leads monthly meetings and networking communication. Solving problems efficiently.",
      image: "/assets/president.jpg"
    },
    {
      id: 3,
      name: "Alice Johnson",
      title: "President",
      description: "Leads monthly meetings and networking communication. Solving problems efficiently.",
      image: "/assets/president.jpg"
    },
    {
      id: 4,
      name: "Alice Johnson",
      title: "President",
      description: "Leads monthly meetings and networking communication. Solving problems efficiently.",
      image: "/assets/president.jpg"
    }
  ]

  return (
    <div className="max-w-7xl container mx-auto h-auto py-8 px-4">
      {/* Header */}
      <div className="mb-8 text-center md:text-left">
        <p className="text-sm font-medium mb-2 text-primary/80">Committee</p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mt-1 mb-4">Executive Committee</h1>
        <p className="text-gray-600">Leading initiatives to enhance student engagement and representation.</p>
      </div>

      {/* Desktop Layout - Hidden on Mobile */}
      <div className="hidden md:flex md:flex-row md:gap-4 md:h-[calc(100vh-200px)]">
        {/* Large Cell */}
        <div className="w-2/3 rounded-lg overflow-hidden relative group">
          {/* Multiple gradient layers for enhanced effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-primary/50 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/30 to-black/50 z-10" />
          <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
            <h2 className="text-xl font-semibold">{committeeMembers[0].name}</h2>
            <p className="text-sm text-white/80 mt-1">{committeeMembers[0].title}</p>
            <p className="text-sm mt-2 max-w-md">{committeeMembers[0].description}</p>
          </div>
          <div className="w-full h-full bg-gray-300 relative">
            <Image 
              src={committeeMembers[0].image} 
              alt={committeeMembers[0].name}
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover" 
            />
          </div>
          <div className="absolute top-0 left-0 w-2 h-full" />
        </div>

        {/* Column with 3 Small Cells */}
        <div className="w-1/3 flex flex-col gap-4">
          {committeeMembers.slice(1, 4).map((member, index) => (
            <div key={member.id} className="h-1/3 rounded-lg overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 p-4 z-20 text-white">
                <h2 className="text-lg font-semibold">{member.name}</h2>
                <p className="text-xs text-white/80 mt-0.5">{member.title}</p>
                <p className="text-xs mt-1 line-clamp-2">{member.description}</p>
              </div>
              <div className="w-full h-full bg-gray-400 relative">
                <div className="absolute top-0 right-0 w-1/2 h-full">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 16vw"
                    className="object-cover" 
                  />
                </div>
              </div>
              <div className="absolute top-0 left-0 w-2 h-full " />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Grid Layout - Hidden on Desktop */}
      <div className="md:hidden grid grid-cols-2 gap-4">
        {committeeMembers.map((member) => (
          <div key={member.id} className="flex flex-col">
            <div className="aspect-square bg-gray-200 relative rounded-lg overflow-hidden">
              <Image 
                src={member.image} 
                alt={member.name}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover" 
              />
            </div>
            <h3 className="mt-2 font-medium text-sm">{member.name}</h3>
            <p className="text-xs text-gray-600">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExecutiveCommittee