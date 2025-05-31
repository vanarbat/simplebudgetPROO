"use client"

import Image from "next/image"
import { Play, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function YouTubeTutorialSection() {
  const tutorials = [
    {
      id: 1,
      title: "Simple Budget Video Instruction | Quick Guide to Your Budget Sheet",
      duration: "5:23",
      thumbnail:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simple%20Budget%20Video%20Instruction-degGOi64HAvTK9L7nEogCgHkUqI9lQ.png",
      description:
        "Learn how to use the Simple Budget Sheet from SmartSheet Solutions in just a few easy steps! This video walks you through setting up your budget, tracking expenses, and managing your savings—all in one beginner-friendly Google Sheet. Perfect for those new to budgeting or looking for an organized solution.",
    },
    {
      id: 2,
      title: "Add Row for More Categories | Simple Budget Sheet Tutorial",
      duration: "3:45",
      thumbnail:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Add%20Row%20for%20More%20Categories-ipd1FoxCtNLi30y8ScuQiXG3sv6LDr.png",
      description:
        "In this quick tutorial, we'll show you how to easily add a new row for more categories in your Simple Budget Sheet. Whether you need to track additional expenses, savings, or income, this step-by-step guide makes it simple to customize your budget to fit your needs.",
    },
  ]

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Step-By-Step Video Guidance</h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Never feel lost or confused. Our comprehensive video tutorials guide you through every aspect of using the
          Simple Budget Planner.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {tutorials.map((tutorial) => (
          <div
            key={tutorial.id}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transform hover:scale-105 transition-all duration-300"
          >
            <div className="relative">
              <div className="aspect-video relative bg-gray-100 overflow-hidden">
                <Image
                  src={tutorial.thumbnail || "/placeholder.svg"}
                  alt={tutorial.title}
                  width={500}
                  height={280}
                  className="w-full h-full object-contain"
                  unoptimized
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center hover:bg-white/50 transition-all cursor-pointer">
                    <Play className="h-8 w-8 text-white fill-white" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {tutorial.duration}
                </div>
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-bold text-lg mb-2">{tutorial.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{tutorial.description}</p>
              <Button
                variant="outline"
                size="sm"
                className="w-full border-[#22b97d] text-[#22b97d] hover:bg-[#22b97d]/10 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Watch Tutorial{" "}
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#22b97d]/0 via-[#22b97d]/10 to-[#22b97d]/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-0 transition-all duration-700"></span>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <div className="bg-[#22b97d]/10 p-4 rounded-lg inline-block mb-4">
          <p className="text-[#22b97d] font-medium">All video tutorials are included FREE with your purchase!</p>
        </div>
        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-[#22b97d] to-[#1a9063] hover:from-[#1ea06c] hover:to-[#157a53] text-white relative overflow-hidden group"
        >
          <Link
            href="https://payhip.com/u1726849691488409912277"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <span className="relative z-10">Get Access to All Tutorials Now</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#22b97d]/0 via-[#22b97d]/20 to-[#22b97d]/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-0 transition-all duration-700"></span>
          </Link>
        </Button>
      </div>
    </div>
  )
}
