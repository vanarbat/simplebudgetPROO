"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Jessica D.",
      location: "United States",
      image: "/images/profile-jessica.jpeg",
      stars: 5,
      text: "This budget planner changed my financial life. For the first time, I feel in control of my money. I've saved over $400 in my first month just by seeing where my money was going! I'm now on track to save over $4,800 this year!",
      highlight: "saved $4,800 in one year",
    },
    {
      id: 2,
      name: "Michael T.",
      location: "Canada",
      image: "/images/profile-michael.jpeg",
      stars: 5,
      text: "I've tried many budget tools, but this one is by far the simplest and most effective. The customizable categories made it perfect for my freelance income which varies month to month. I've finally been able to build an emergency fund and start investing!",
      highlight: "built emergency fund & started investing",
    },
    {
      id: 3,
      name: "Amanda L.",
      location: "United Kingdom",
      image: "/images/profile-amanda.jpeg",
      stars: 5,
      text: "The 50 Quick Wins eBook alone was worth the price. I implemented just 5 of the tips and immediately saved $150 on my monthly expenses. The budget planner makes everything so clear and simple. I've paid off $12,000 in debt in just 8 months!",
      highlight: "paid off $12,000 in 8 months",
    },
    {
      id: 4,
      name: "Rebecca M.",
      location: "Australia",
      image: "/images/profile-rebecca.jpeg",
      stars: 5,
      text: "Tremendous head start for financial success. I purchased this program two years ago when I was drowning in debt! It is fun and easy to use and kept me very engaged. I was able to pay off $15,000 in credit card debt in just 14 months. I'm now building my emergency fund and have started investing for retirement. This program changed my life!",
      highlight: "paid off $15,000 in 14 months",
    },
    {
      id: 5,
      name: "James T.",
      location: "Germany",
      image: "/images/profile-james.jpeg",
      stars: 5,
      text: "It's incredible. I have 2 kids now in college who always struggled with money so when I found myself in $30,000 of debt, I knew I needed help. This planner helped me create a plan that worked for my family. We're now debt-free and saving for our future!",
      highlight: "eliminated $30,000 of debt",
    },
  ]

  useEffect(() => {
    // Auto-advance the slider every 5 seconds
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-[#22b97d]/10">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.location}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="ml-auto">
                    <div className="bg-[#22b97d]/10 text-[#22b97d] font-semibold px-3 py-1 rounded-full text-sm">
                      {testimonial.highlight}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
      >
        <ChevronLeft className="h-6 w-6 text-gray-600" />
      </button>

      <button
        onClick={goToNext}
        className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
      >
        <ChevronRight className="h-6 w-6 text-gray-600" />
      </button>

      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-[#22b97d]" : "bg-gray-300"}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
