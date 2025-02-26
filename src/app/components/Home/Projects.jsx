import {Link } from 'next-view-transitions'
import Image from "next/image"
import { ChevronDown, ChevronRightIcon } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Project name here",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nulla dolor amet.",
      tags: ["Tag one", "Tag two", "Tag three"],
      image: "/assets/p1.jpg",
    },
    {
      id: 2,
      name: "Project name here",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nulla dolor amet.",
      tags: ["Tag one", "Tag two", "Tag three"],
      image: "/assets/p2.jpg",
    },
    {
      id: 3,
      name: "Project name here",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nulla dolor amet.",
      tags: ["Tag one", "Tag two", "Tag three"],
      image: "/assets/p3.jpg",
    },
  ]

  return (
    <div className="w-full  max-w-7xl pl-8 pr-8 md:pl-0 md:pr-0 min-h-screen h-auto flex flex-col container mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center sm:text-start">Our Featured Projects</h1>
        <p className="text-gray-600 mt-2 text-center sm:text-start">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex flex-col gap-6 max-w-7xl container mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="border-b-2 border-gray-300 flex flex-col md:flex-row flex-1 gap-4 pb-6">
            <div className="w-full md:w-1/2 transition-all hover:shadow-lg hover:-translate-y-1 hover:cursor-pointer ">
              <Image
                src={project.image}
                alt={project.name}
                width={300}
                height={200}
                className="w-full h-[250px] object-cover rounded-md border-2 border-gray-200"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 ml-0 sm:ml-6">
              <h3 className="text-xl font-semibold text-primary">{project.name}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 text-xs bg-green-300/25 text-primary rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={'/projects'}
                className="text-primary hover:font-bold flex items-center text-sm gap-2"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
      <Link
            href="/news"
            className="inline-flex items-center justify-center px-6 py-2 mt-4 sm:mt-6 text-white bg-primary text-primary-foreground border rounded-md hover:bg-primary/80 transition-colors"
          >
            <span>View All</span>
            <ChevronRightIcon className="w-4 h-4 ml-1" />
          </Link>
      </div>
    </div>
  )
}

