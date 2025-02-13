"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react"

const News = () => {
  const [expanded, setExpanded] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [showAllMobile, setShowAllMobile] = useState(false)
  const scrollRef = useRef(null)

  const newsItems = [
    {
      id: 1,
      title: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius erat in eros elementum tristique.",
      image: "/assets/bg.jpg",
    },
    {
      id: 2,
      title: "Medium length section heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "/assets/bg.jpg",
      isSmall: true,
    },
    {
      id: 3,
      title: "Medium length section heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "/assets/bg.jpg",
      isSmall: true,
    },
    {
      id: 4,
      title: "Medium length section heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "/assets/bg.jpg",
    },
    {
      id: 5,
      title: "Additional section heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "/assets/bg.jpg",
    },
    {
      id: 6,
      title: "Additional section heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "/assets/bg.jpg",
      isSmall: true,
    },
  ]

  const displayedItems = expanded ? newsItems : newsItems.slice(0, 4)

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

    // Reset activeIndex when toggling between 3 and all items
    setActiveIndex(0)
    if (scrollContainer) {
      scrollContainer.scrollLeft = 0
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return (
    <div className="p-8 md:p-8 lg:p-8 border-b-2  container mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3 sm:mt-0 text-primary">Latest News & Updates</h1>
        <p className="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        {/* View All button - mobile only */}
        <button
          className="md:hidden flex items-center justify-center mx-auto mt-4 px-6 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
          onClick={() => setShowAllMobile(!showAllMobile)}
        >
          <span>{showAllMobile ? "Show Less" : "View All"}</span>
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="flex gap-6">
          {/* Left Column */}
          <div className="w-1/2 space-y-4">
            <div className="aspect-[4/3]">
              <NewsCard {...displayedItems[0]} />
            </div>
            <div className="aspect-[16/9]">
              <NewsCard {...displayedItems[1]} />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-1/2 space-y-4">
            <div className="aspect-[16/9]">
              <NewsCard {...displayedItems[2]} />
            </div>
            <div className="aspect-[4/3]">
              <NewsCard {...displayedItems[3]} />
            </div>
          </div>
        </div>

        {/* Expanded Content - Desktop Only */}
        {expanded && (
          <div className="mt-4 grid grid-cols-2 gap-4">
            {displayedItems.slice(4).map((item) => (
              <div key={item.id} className={item.isSmall ? "aspect-[16/9]" : "aspect-[4/3]"}>
                <NewsCard {...item} />
              </div>
            ))}
          </div>
        )}

        {/* Show More/Less Buttons - Desktop Only */}
        {!expanded && newsItems.length > 4 && (
          <button
            onClick={() => setExpanded(true)}
            className="flex items-center justify-center w-full py-4 mt-8 space-x-2"
          >
            <span>Show More</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        )}

        {expanded && (
          <button
            onClick={() => setExpanded(false)}
            className="flex items-center justify-center w-full py-4 mt-8 space-x-2"
          >
            <span>Show Less</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        )}
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
              className={`h-2 w-2 rounded-full ${index === activeIndex ? "bg-blue-500" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const NewsCard = ({ title, description, image, isSmall }) => (
  <div className="h-full bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-sm transition-shadow flex flex-col">
    <div className="p-5 flex-grow">
      <p className="text-xs text-gray-600 mb-1">TagLine</p>
      <h2 className="text-2xl font-bold mb-1">{title}</h2>
      <p className="text-lg text-gray-600 mb-2">{description}</p>
      <button className="flex items-center text-xs">
        Button <ChevronRight className="w-3 h-3 ml-1" />
      </button>
    </div>
    <div className="relative h-1/2">
      <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover bg-gray-100" />
    </div>
  </div>
)

const MobileNewsCard = ({ title, description, image }) => (
  <div className="w-full bg-white rounded-lg overflow-hidden flex flex-col h-full">
    <div className="aspect-[16/9] w-full">
      <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover bg-gray-100" />
    </div>
    <div className=" p-4 text-center">
      <p className="text-xs text-gray-600 mb-2">TagLine</p>
      <h2 className="text-xl font-bold mb-2 line-clamp-2">{title}</h2>
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>
    </div>
  </div>
)

export default News

