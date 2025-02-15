"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

const News = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [showAllMobile, setShowAllMobile] = useState(false)
  const scrollRef = useRef(null)

  const newsItems = [
    {
      id: 1,
      title: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.",
      image: "https://plus.unsplash.com/premium_photo-1691588961751-9a624a8033f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYwfHx8ZW58MHx8fHx8",
      layout: "left-content",
      type: "large" // Large square
    },
    {
      id: 2,
      title: "Medium length section heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "https://images.unsplash.com/photo-1455734729978-db1ae4f687fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY4fHx8ZW58MHx8fHx8",
      layout: "right-content",
      type: "small" // Small rectangle
    },
    {
      id: 3,
      title: "Medium length section heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "https://images.unsplash.com/photo-1464983308776-3c7215084895?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNjaG9vbCUyMHBsYXlncm91bmR8ZW58MHx8MHx8fDA%3D",
      layout: "left-content",
      type: "small" // Small rectangle
    },
    {
      id: 4,
      title: "Medium length section heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY3fHx8ZW58MHx8fHx8",
      layout: "right-content",
      type: "large" // Large square
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollPosition = scrollRef.current.scrollLeft
        const cardWidth = scrollRef.current.offsetWidth
        const newIndex = Math.round(scrollPosition / cardWidth)
        setActiveIndex(newIndex)
      }
    }

    const scrollContainer = scrollRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return (
    <div className="max-w-7xl container mx-auto mt-20 sm:mt-32 lg:mt-24">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3 sm:mt-0 text-primary">Latest News & Updates</h1>
        <p className="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        {/* View All button - mobile only */}
        <Link href='/news'>
        <button
          className="md:hidden flex items-center justify-center text-white mx-auto mt-4 px-6 py-2 bg-primary border  rounded-md hover:bg-primary/80 transition-colors"
        >
          View All
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
        </Link>
      </div>

      {/* Desktop Layout - Mixed Grid */}
      <div className="hidden md:block max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Large square */}
            <div className="aspect-square">
              <NewsCard {...newsItems[0]} />
            </div>
            {/* Small rectangle */}
            <div className="aspect-[2/1]">
              <NewsCard {...newsItems[2]} />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Small rectangle */}
            <div className="aspect-[2/1]">
              <NewsCard {...newsItems[1]} />
            </div>
            {/* Large square */}
            <div className="aspect-square">
              <NewsCard {...newsItems[3]} />
            </div>
          </div>
        </div>
        <Link href='/news'>
        <button className="flex items-center justify-center text-white mx-auto mt-10 px-6 py-2 bg-primary border  rounded-md hover:bg-primary/80 transition-colors">
          View all
        </button>
        </Link>
      </div>

      {/* Mobile Layout - Horizontal Swipe */}
      <div className="md:hidden">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {(showAllMobile ? newsItems : newsItems.slice(0, 3)).map((item) => (
            <div key={item.id} className="w-full flex-none snap-start">
              <MobileNewsCard {...item} />
            </div>
          ))}
        </div>
        {/* Pagination Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {(showAllMobile ? newsItems : newsItems.slice(0, 3)).map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${index === activeIndex ? "bg-primary" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const NewsCard = ({ title, description, image, layout, type }) => (
  <div className="h-full bg-white rounded-lg border-gray-200 border-2 overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
    <div className="h-full flex">
      {layout === "right-content" && (
        <div className="w-1/2">
          <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="w-1/2 p-5 flex flex-col justify-center">
        <p className="text-xs text-gray-600 mb-1">TagLine</p>
        <h2 className="text-2xl font-bold mb-1">{title}</h2>
        <p className="text-lg text-gray-600 mb-2">{description}</p>
        <button className="flex items-center text-xs">
          Button <ChevronRight className="w-3 h-3 ml-1" />
        </button>
      </div>
      {layout === "left-content" && (
        <div className="w-1/2">
          <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  </div>
)

const MobileNewsCard = ({ title, description, image }) => (
  <div className="w-full bg-white h-[400px] rounded-lg overflow-hidden flex flex-col">
    <div className="h-[200px] w-full">
      <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover bg-gray-100" />
    </div>
    <div className="p-4 flex-1 text-center flex flex-col justify-between">
      <p className="text-xs text-gray-600 mb-2">TagLine</p>
      <h2 className="text-xl font-bold mb-2 line-clamp-2">{title}</h2>
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>
    </div>
  </div>
)

export default News