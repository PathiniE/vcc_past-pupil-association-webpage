import Link from "next/link"
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
    <div className="w-full p-4 md:p-6 lg:p-8 min-h-screen h-auto flex flex-col border-b-2 border-gray-300 container mx-auto">
      <div className="mb-6 p-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center sm:text-start">Our Featured Projects</h1>
        <p className="text-gray-600 mt-2 text-center sm:text-start">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <div key={project.id} className="border-b-4 border-gray-300 flex flex-col md:flex-row flex-1 gap-4 md:gap-6 p-6 md:p-8">
            <div className="w-full md:w-1/2">
              <Image
                src={project.image}
                alt={project.name}
                width={300}
                height={200}
                className="w-full h-[250px] object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 ml-4">
              <h3 className="text-xl font-bold text-primary">{project.name}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={'/projects'}
                className="text-primary hover:font-bold flex items-center text-sm gap-2"
              >
                View Project<ChevronRightIcon className="h-4 w-4 hover:font-bold" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
      <Link
            href="/news"
            className="inline-flex items-center justify-center px-6 py-2 text-white bg-primary text-primary-foreground border rounded-md hover:bg-primary/80 transition-colors"
          >
            <span>View All</span>
            <ChevronRightIcon className="w-4 h-4 ml-1" />
          </Link>
      </div>
    </div>
  )
}

