"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import {
  CheckCircle,
  Star,
  Shield,
  DollarSign,
  ArrowRight,
  Clock,
  Users,
  Lock,
  CreditCard,
  ChevronRight,
  Gift,
  FileText,
  BarChart,
  Play,
  Infinity,
  Zap,
  TrendingUp,
  Sparkles,
  X,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import CountdownTimer from "@/components/countdown-timer"
import SocialProofPopup from "@/components/social-proof-popup"
import TestimonialSlider from "@/components/testimonial-slider"
import FallingDollars from "@/components/falling-dollars"

export default function BudgetPlannerLanding() {
  const [scrolled, setScrolled] = useState(false)
  const [showExitIntent, setShowExitIntent] = useState(false)

  // Handle exit intent and scroll
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !showExitIntent) {
        setShowExitIntent(true)
      }
    }

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [showExitIntent])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#f0f9ff] to-white">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-500 to-red-500 text-white py-2 px-4 text-center relative z-50">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <Clock className="h-4 w-4 animate-pulse" />
          <span className="font-bold">88% OFF for the next 37 people only!</span>
        </div>
      </div>

      {/* Sticky Header */}
      <header
        className={`bg-white sticky top-0 z-40 transition-all duration-300 ${scrolled ? "shadow-md" : "shadow-sm"}`}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="font-bold text-xl text-[#22b97d] flex items-center">
            <span className="bg-[#22b97d] text-white p-1 rounded-md mr-2">
              <DollarSign className="h-5 w-5" />
            </span>
            SimpleBudget
          </div>
          <Button
            asChild
            size="sm"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
          >
            <Link href="https://payhip.com/u1726849691488409912277" target="_blank" rel="noopener noreferrer">
              <span>Get Started</span>
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section - Mobile Optimized */}
        <section className="pt-6 pb-10 bg-gradient-to-b from-[#e8fff3] to-[#f0f9ff] relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#22b97d]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-6">
              <div className="inline-block bg-red-100 text-red-600 font-semibold px-3 py-1 rounded-full mb-3">
                <span className="flex items-center justify-center">
                  <Clock className="h-4 w-4 mr-1 animate-pulse" /> Special Offer
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-3">
                How to Easily Transform Your Financial Life in Just 10 Minutes a Day!
              </h1>

              <p className="text-lg text-gray-700 mb-3">Tired of money disappearing with no explanation?</p>

              <p className="text-xl font-semibold text-[#22b97d] mb-4">
                ...Give Yourself the Skills and Confidence to Achieve Your Financial Goals.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                <p className="text-red-600 font-bold text-sm flex items-center justify-center">
                  ⚠️ WARNING: Price increases after timer expires!
                </p>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="mb-6">
              <h3 className="text-center font-bold mb-2">Special Offer Ends In:</h3>
              <CountdownTimer />
            </div>

            {/* Mobile-Optimized Product Showcase with Falling Dollars */}
            <div className="relative mb-6">
              <div className="relative bg-gradient-to-br from-[#f0f9ff] to-[#e8fff3] p-4 md:p-6 rounded-xl shadow-xl border border-[#22b97d]/20 overflow-hidden">
                {/* Money-related decorative elements - enhanced for better visibility */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#22b97d]/10 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl"></div>

                {/* Falling dollar signs animation - UPDATED to be more visible */}
                <FallingDollars count={30} />

                {/* Coin-like circles - more visible */}
                <div className="absolute top-1/4 right-1/3 w-16 h-16 rounded-full border-2 border-[#22b97d]/20"></div>
                <div className="absolute bottom-1/4 left-1/3 w-12 h-12 rounded-full border-2 border-[#22b97d]/20"></div>
                <div className="absolute top-2/3 right-1/4 w-10 h-10 rounded-full border-2 border-[#22b97d]/20"></div>

                {/* Make image smaller on desktop */}
                <div className="max-w-full md:max-w-[80%] mx-auto relative z-20">
                  <Image
                    src="/images/product-mockup-transparent.png"
                    alt="Simple Budget Planner - Google Sheets Edition"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Price and CTA */}
            <div className="bg-gradient-to-br from-white to-[#f0f9ff] p-6 rounded-lg shadow-xl border border-[#22b97d]/20 mb-6">
              <p className="text-center font-medium mb-3">
                Order Now and Get Instant Access to the Simple Budget Planner (ONLY{" "}
                <span className="line-through">$73</span> <span className="text-[#22b97d] font-bold">$7.87 USD</span>):
              </p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                <p className="text-red-600 font-bold text-sm flex items-center justify-center">
                  ⏰ This offer expires soon! Don't miss out!
                </p>
              </div>

              <Button
                asChild
                size="lg"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-5 text-xl rounded-full shadow-lg"
              >
                <Link
                  href="https://payhip.com/u1726849691488409912277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  START FINANCIAL FREEDOM NOW <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <p className="text-center text-[#22b97d] font-medium mt-2">YES! Give Me The Best Tools To Succeed!</p>

              <div className="mt-4 flex justify-center">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="flex items-center justify-center gap-3">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/paypal-oymPWwJF5zozYi6iYbSXDz8HsTqsqz.png"
                      alt="PayPal"
                      width={60}
                      height={30}
                      className="h-6 object-contain"
                    />
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/visa-goNJRQLFPjS3LAqrkbabh9qSVkScYP.png"
                      alt="Visa"
                      width={60}
                      height={30}
                      className="h-6 object-contain"
                    />
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/credit-ys7hnvRrACyTCEhSRzy2qWsZGW8Uz2.png"
                      alt="Mastercard"
                      width={60}
                      height={30}
                      className="h-6 object-contain"
                    />
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-DPhuYPsin0b4FksOfMXd1LUhOqVzVj.png"
                      alt="American Express"
                      width={60}
                      height={30}
                      className="h-6 object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-3 flex justify-center space-x-4">
                <div className="flex items-center text-xs text-gray-600">
                  <Lock className="h-3 w-3 mr-1" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center text-xs text-gray-600">
                  <CreditCard className="h-3 w-3 mr-1" />
                  <span>Instant Access</span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
              <div className="flex items-center bg-white px-3 py-1 rounded-full text-xs shadow-sm">
                <Shield className="h-4 w-4 text-[#22b97d] mr-1" />
                <span>60-Day Guarantee</span>
              </div>
              <div className="flex items-center bg-white px-3 py-1 rounded-full text-xs shadow-sm">
                <Users className="h-4 w-4 text-[#22b97d] mr-1" />
                <span>10,000+ Happy Customers</span>
              </div>
              <div className="flex items-center bg-white px-3 py-1 rounded-full text-xs shadow-sm">
                <div className="flex mr-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span>4.9/5 Rating (300+ Reviews)</span>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get - Visual Section */}
        <section className="py-8 bg-gradient-to-b from-[#f0f9ff] to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-6">Here's EVERYTHING Included (ALL For Just $7.87)</h2>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gradient-to-br from-[#22b97d]/10 to-[#22b97d]/5 p-4 rounded-lg shadow-sm transform hover:scale-105 transition-all duration-300">
                <div className="bg-white rounded-lg shadow-md p-2 mb-3">
                  <div className="md:max-w-[80%] md:mx-auto">
                    <Image
                      src="/images/budget-dashboard-december.png"
                      alt="Budget Dashboard"
                      width={200}
                      height={150}
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#22b97d]/20 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                    <FileText className="h-4 w-4 text-[#22b97d]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Complete Budget Planner</h3>
                    <p className="text-xs text-gray-600">Take control of your finances</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#22b97d]/10 to-[#22b97d]/5 p-4 rounded-lg shadow-sm transform hover:scale-105 transition-all duration-300">
                <div className="bg-white rounded-lg shadow-md p-2 mb-3">
                  <div className="md:max-w-[80%] md:mx-auto">
                    <Image
                      src="/images/expense-tracker.png"
                      alt="Expense Tracker"
                      width={200}
                      height={150}
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#22b97d]/20 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                    <BarChart className="h-4 w-4 text-[#22b97d]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Expense Tracker</h3>
                    <p className="text-xs text-gray-600">Track where your money goes</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-4 rounded-lg shadow-sm border border-yellow-200 transform hover:scale-105 transition-all duration-300">
                <div className="bg-white rounded-lg shadow-md p-2 mb-3">
                  <div className="md:max-w-[80%] md:mx-auto">
                    <Image
                      src="/images/bonus-goal-tracker.png"
                      alt="Goal Tracker"
                      width={200}
                      height={150}
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-200 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                    <Gift className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Goal Tracker System</h3>
                    <p className="text-xs text-yellow-700">BONUS #1: FREE</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-4 rounded-lg shadow-sm border border-yellow-200 transform hover:scale-105 transition-all duration-300">
                <div className="bg-white rounded-lg shadow-md p-2 mb-3">
                  <div className="md:max-w-[80%] md:mx-auto">
                    <Image
                      src="/images/bonus-ebook.png"
                      alt="50 Quick Wins eBook"
                      width={200}
                      height={150}
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-200 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                    <Gift className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">50 Quick Wins eBook</h3>
                    <p className="text-xs text-yellow-700">BONUS #2: FREE</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-4 rounded-lg shadow-sm border border-yellow-200 transform hover:scale-105 transition-all duration-300">
                <div className="bg-white rounded-lg shadow-md p-2 mb-3">
                  <div className="aspect-video relative bg-gray-100 flex items-center justify-center">
                    <div className="md:max-w-[80%] md:mx-auto w-full">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simple%20Budget%20Video%20Instruction-degGOi64HAvTK9L7nEogCgHkUqI9lQ.png"
                        alt="Video Tutorials"
                        width={200}
                        height={150}
                        className="w-full h-auto rounded"
                        unoptimized
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                      <div className="bg-white/80 rounded-full p-2">
                        <Play className="h-4 w-4 text-[#22b97d]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-200 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                    <Gift className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Video Tutorials</h3>
                    <p className="text-xs text-yellow-700">BONUS #3: FREE</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-4 rounded-lg shadow-sm border border-yellow-200 transform hover:scale-105 transition-all duration-300">
                <div className="bg-white rounded-lg shadow-md p-2 mb-3 overflow-hidden">
                  <div className="md:max-w-[80%] md:mx-auto">
                    <div className="bg-gradient-to-br from-[#22b97d]/10 to-blue-500/5 p-4 flex items-center justify-center">
                      <Infinity className="h-16 w-16 text-[#22b97d] opacity-80" />
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-200 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                    <Gift className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Unlimited Access</h3>
                    <p className="text-xs text-yellow-700">BONUS #4: FREE</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                asChild
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-full shadow-md"
              >
                <Link
                  href="https://payhip.com/u1726849691488409912277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  Get Instant Access <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="py-8 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-6">Perfect For:</h2>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gradient-to-br from-white to-[#f0f9ff] p-4 rounded-lg shadow-md border border-gray-200 flex items-start transform hover:scale-105 transition-all duration-300">
                <div className="bg-[#22b97d]/10 p-1 rounded-full mr-2 mt-1">
                  <CheckCircle className="h-4 w-4 text-[#22b97d]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Anyone stressed about money</h3>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-[#f0f9ff] p-4 rounded-lg shadow-md border border-gray-200 flex items-start transform hover:scale-105 transition-all duration-300">
                <div className="bg-[#22b97d]/10 p-1 rounded-full mr-2 mt-1">
                  <CheckCircle className="h-4 w-4 text-[#22b97d]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Busy parents and freelancers</h3>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-[#f0f9ff] p-4 rounded-lg shadow-md border border-gray-200 flex items-start transform hover:scale-105 transition-all duration-300">
                <div className="bg-[#22b97d]/10 p-1 rounded-full mr-2 mt-1">
                  <CheckCircle className="h-4 w-4 text-[#22b97d]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Beginners with $0 saved</h3>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-[#f0f9ff] p-4 rounded-lg shadow-md border border-gray-200 flex items-start transform hover:scale-105 transition-all duration-300">
                <div className="bg-[#22b97d]/10 p-1 rounded-full mr-2 mt-1">
                  <CheckCircle className="h-4 w-4 text-[#22b97d]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">People tired of living paycheck to paycheck</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Tutorials & Demo Section (Combined) */}
        <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">See How Easy It Is To Use (Video Tutorials Included)</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our comprehensive video tutorials guide you through every aspect of using the Simple Budget Planner.
                Never feel lost or confused!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-white to-[#f0f9ff] rounded-xl shadow-lg overflow-hidden border border-gray-200 transform hover:scale-105 transition-all duration-300">
                <div className="aspect-video relative bg-gray-100 flex items-center justify-center">
                  <div className="md:max-w-[80%] md:mx-auto w-full">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simple%20Budget%20Video%20Instruction-degGOi64HAvTK9L7nEogCgHkUqI9lQ.png"
                      alt="Video Tutorial"
                      width={500}
                      height={300}
                      className="w-full h-auto"
                      unoptimized
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <div className="bg-white/80 rounded-full p-3 transform hover:scale-110 transition-all duration-300 cursor-pointer">
                      <Play className="h-8 w-8 text-[#22b97d] fill-[#22b97d]/20" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">5:23</div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">Simple Budget Video Instruction</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Learn how to set up your budget, track expenses, and manage your savings—all in one
                    beginner-friendly Google Sheet.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-[#f0f9ff] rounded-xl shadow-lg overflow-hidden border border-gray-200 transform hover:scale-105 transition-all duration-300">
                <div className="aspect-video relative bg-gray-100 flex items-center justify-center">
                  <div className="md:max-w-[80%] md:mx-auto w-full">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Add%20Row%20for%20More%20Categories-ipd1FoxCtNLi30y8ScuQiXG3sv6LDr.png"
                      alt="Add Row for More Categories"
                      width={500}
                      height={300}
                      className="w-full h-auto"
                      unoptimized
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <div className="bg-white/80 rounded-full p-3 transform hover:scale-110 transition-all duration-300 cursor-pointer">
                      <Play className="h-8 w-8 text-[#22b97d] fill-[#22b97d]/20" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">3:45</div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">Add Row for More Categories</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Learn how to easily add a new row for more categories in your Simple Budget Sheet to customize your
                    budget to fit your needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#22b97d]/10 p-3 rounded-lg inline-block mb-4">
                <p className="text-[#22b97d] font-medium text-sm">
                  All video tutorials are included FREE with your purchase!
                </p>
              </div>
              <Button
                asChild
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-full shadow-md"
              >
                <Link
                  href="https://payhip.com/u1726849691488409912277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  Get Access Now <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Mobile Showcase */}
        <section className="py-8 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-3">Access Your Budget Anywhere</h2>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#22b97d] mt-0.5 mr-2 flex-shrink-0" />
                    <span>Track expenses on your phone</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#22b97d] mt-0.5 mr-2 flex-shrink-0" />
                    <span>Sync across all your devices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#22b97d] mt-0.5 mr-2 flex-shrink-0" />
                    <span>Free Google Sheets app</span>
                  </li>
                </ul>
              </div>

              <div className="md:w-1/2">
                <div className="bg-gradient-to-br from-[#22b97d]/10 to-[#22b97d]/5 p-3 rounded-xl shadow-md border border-[#22b97d]/20 transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  {/* Dollar sign decorations */}
                  <div className="absolute top-4 left-4 text-[#22b97d]/20 text-2xl font-bold">$</div>
                  <div className="absolute top-8 right-8 text-[#22b97d]/20 text-3xl font-bold">$</div>
                  <div className="absolute bottom-12 left-10 text-[#22b97d]/20 text-2xl font-bold">$</div>
                  <div className="absolute bottom-6 right-6 text-[#22b97d]/20 text-4xl font-bold">$</div>
                  <div className="absolute top-1/2 left-1/3 text-[#22b97d]/20 text-3xl font-bold">$</div>

                  {/* Coin-like circles */}
                  <div className="absolute top-1/4 right-4 w-8 h-8 rounded-full border-2 border-[#22b97d]/20"></div>
                  <div className="absolute bottom-1/4 left-4 w-6 h-6 rounded-full border-2 border-[#22b97d]/20"></div>
                  <div className="absolute top-3/4 right-1/4 w-10 h-10 rounded-full border-2 border-[#22b97d]/20"></div>

                  <div className="md:max-w-[70%] md:mx-auto relative z-10">
                    <Image
                      src="/images/budget-mobile.png"
                      alt="Budget Planner on Mobile"
                      width={250}
                      height={500}
                      className="mx-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-6">Why People Love Our Budget Planner</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-br from-white to-[#f0f9ff] p-4 rounded-lg shadow-md border border-[#22b97d]/10 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-[#22b97d]/10 p-2 rounded-full mr-3 flex-shrink-0">
                    <Zap className="h-5 w-5 text-[#22b97d]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1">Save More Money</h3>
                    <p className="text-xs text-gray-600">Our users save an average of $350 per month</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-[#f0f9ff] p-4 rounded-lg shadow-md border border-[#22b97d]/10 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-[#22b97d]/10 p-2 rounded-full mr-3 flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-[#22b97d]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1">Achieve Your Goals</h3>
                    <p className="text-xs text-gray-600">Clear path to becoming debt-free</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-[#f0f9ff] p-4 rounded-lg shadow-md border border-[#22b97d]/10 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-[#22b97d]/10 p-2 rounded-full mr-3 flex-shrink-0">
                    <Sparkles className="h-5 w-5 text-[#22b97d]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1">Easy to Use</h3>
                    <p className="text-xs text-gray-600">Takes just 10 minutes a day</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-[#f0f9ff] p-4 rounded-lg shadow-md border border-[#22b97d]/10 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-[#22b97d]/10 p-2 rounded-full mr-3 flex-shrink-0">
                    <Shield className="h-5 w-5 text-[#22b97d]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1">Peace of Mind</h3>
                    <p className="text-xs text-gray-600">Financial clarity and confidence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-8 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-6">How We Compare</h2>

            <div className="overflow-x-auto">
              <div className="min-w-[600px]">
                <div className="grid grid-cols-4 gap-2">
                  {/* Header Row */}
                  <div className="p-3 font-bold">Features</div>
                  <div className="p-3 bg-gradient-to-br from-[#22b97d]/20 to-[#22b97d]/5 rounded-t-lg text-center">
                    <div className="font-bold text-[#22b97d]">Simple Budget Planner</div>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-gray-100 to-gray-50 rounded-t-lg text-center">
                    <div className="font-bold">Typical Budget Apps</div>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-gray-100 to-gray-50 rounded-t-lg text-center">
                    <div className="font-bold">DIY Spreadsheets</div>
                  </div>

                  {/* Feature Rows */}
                  <div className="p-3 bg-gray-50 font-medium">One-time payment</div>
                  <div className="p-3 bg-[#22b97d]/5 text-center">
                    <CheckCircle className="h-5 w-5 text-[#22b97d] mx-auto" />
                    <div className="text-xs text-[#22b97d] font-medium mt-1">Just $7.87</div>
                  </div>
                  <div className="p-3 bg-gray-50 text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                    <div className="text-xs text-gray-500 mt-1">$5-15/month</div>
                  </div>
                  <div className="p-3 bg-gray-50 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    <div className="text-xs text-gray-500 mt-1">Free (your time)</div>
                  </div>

                  <div className="p-3 bg-white font-medium">Easy to use</div>
                  <div className="p-3 bg-white text-center">
                    <CheckCircle className="h-5 w-5 text-[#22b97d] mx-auto" />
                    <div className="text-xs text-[#22b97d] font-medium mt-1">10 min setup</div>
                  </div>
                  <div className="p-3 bg-white text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    <div className="text-xs text-gray-500 mt-1">Learning curve</div>
                  </div>
                  <div className="p-3 bg-white text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                    <div className="text-xs text-gray-500 mt-1">Complex setup</div>
                  </div>

                  <div className="p-3 bg-gray-50 font-medium">Visual progress tracking</div>
                  <div className="p-3 bg-[#22b97d]/5 text-center">
                    <CheckCircle className="h-5 w-5 text-[#22b97d] mx-auto" />
                    <div className="text-xs text-[#22b97d] font-medium mt-1">Built-in charts</div>
                  </div>
                  <div className="p-3 bg-gray-50 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    <div className="text-xs text-gray-500 mt-1">Basic visuals</div>
                  </div>
                  <div className="p-3 bg-gray-50 text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                    <div className="text-xs text-gray-500 mt-1">Manual creation</div>
                  </div>

                  <div className="p-3 bg-white font-medium">50 Quick Wins eBook</div>
                  <div className="p-3 bg-white text-center">
                    <CheckCircle className="h-5 w-5 text-[#22b97d] mx-auto" />
                    <div className="text-xs text-[#22b97d] font-medium mt-1">Included FREE</div>
                  </div>
                  <div className="p-3 bg-white text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                    <div className="text-xs text-gray-500 mt-1">Not included</div>
                  </div>
                  <div className="p-3 bg-white text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                    <div className="text-xs text-gray-500 mt-1">Not included</div>
                  </div>

                  {/* Bottom Row - CTA */}
                  <div className="p-3 font-bold text-lg">Best Choice For:</div>
                  <div className="p-3 bg-[#22b97d]/10 rounded-b-lg text-center">
                    <div className="font-bold text-[#22b97d] text-sm">
                      Anyone who wants a simple, effective budget system without monthly fees
                    </div>
                  </div>
                  <div className="p-3 bg-gray-100 rounded-b-lg text-center">
                    <div className="text-gray-700 text-sm">
                      People who prefer mobile apps and don't mind ongoing costs
                    </div>
                  </div>
                  <div className="p-3 bg-gray-100 rounded-b-lg text-center">
                    <div className="text-gray-700 text-sm">
                      Spreadsheet experts who have time to build their own system
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button
                asChild
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-full shadow-md"
              >
                <Link
                  href="https://payhip.com/u1726849691488409912277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  Get The Best Budget Solution Now <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Results & Testimonials - Visual */}
        <section className="py-8 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-6">Real Results From Real Customers</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                {
                  name: "Jessica D.",
                  image: "/images/profile-jessica.jpeg",
                  result: "Saved $4,800 in one year",
                  before: "$0 saved",
                  after: "$4,800",
                  quote:
                    "This budget planner changed my financial life. For the first time, I feel in control of my money.",
                },
                {
                  name: "Michael T.",
                  image: "/images/profile-michael.jpeg",
                  result: "Built emergency fund",
                  before: "$0 saved",
                  after: "$3,500",
                  quote: "I've tried many budget tools, but this one is by far the simplest and most effective.",
                },
                {
                  name: "Amanda L.",
                  image: "/images/profile-amanda.jpeg",
                  result: "Paid off $12,000 in 8 months",
                  before: "$12,000 debt",
                  after: "$0 debt",
                  quote:
                    "The 50 Quick Wins eBook alone was worth the price. I implemented just 5 of the tips and immediately saved $150.",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-[#f0f9ff] rounded-lg shadow-md p-4 border border-gray-200 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center mb-3">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#22b97d]/10 text-[#22b97d] font-semibold px-2 py-1 rounded-full text-xs inline-block mb-2">
                    {testimonial.result}
                  </div>
                  <p className="text-sm text-gray-600 italic mb-3">"{testimonial.quote}"</p>
                  <div className="space-y-2 mt-2">
                    <div className="flex items-center text-xs">
                      <span className="w-16 font-medium">Before:</span>
                      <div className="flex-1 h-2 bg-red-100 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 w-full"></div>
                      </div>
                      <span className="w-16 text-right font-medium text-red-600">{testimonial.before}</span>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="w-16 font-medium">After:</span>
                      <div className="flex-1 h-2 bg-green-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#22b97d] w-full"></div>
                      </div>
                      <span className="w-16 text-right font-medium text-[#22b97d]">{testimonial.after}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mb-8">
              <Button
                asChild
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-full shadow-md"
              >
                <Link
                  href="https://payhip.com/u1726849691488409912277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  Start My Success Story Today <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-center mb-4">More Success Stories</h3>
              <TestimonialSlider />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  question: "What format is the spreadsheet in?",
                  answer:
                    "The Simple Budget Planner comes in both Excel (.xlsx) and Google Sheets formats, so you can use whichever you prefer. Both versions include all the same features and functionality.",
                },
                {
                  question: "Do I need to be good with spreadsheets to use this?",
                  answer:
                    "Not at all! The spreadsheet is designed to be user-friendly with clear instructions. You just enter your numbers, and all calculations are done automatically. We've made it simple enough for anyone to use.",
                },
                {
                  question: "Will this work on my phone/tablet?",
                  answer:
                    "Yes! If you use the Google Sheets version, you can access and update your budget from any device with the Google Sheets app. This makes it easy to track expenses on the go.",
                },
                {
                  question: "How do I receive the spreadsheet?",
                  answer:
                    "Immediately after purchase, you'll receive an email with download links for all files. You'll have instant access to start using your new budget planner and all the bonus materials.",
                },
                {
                  question: "Is there a guarantee?",
                  answer:
                    "Yes! We offer a 60-day money-back guarantee. If you're not completely satisfied with the Simple Budget Planner, simply let us know and we'll refund your purchase. No questions asked.",
                },
                {
                  question: "What are the bonuses included?",
                  answer:
                    "You'll receive the 50 Quick Wins eBook, Goal Tracker System, Video Tutorials, and Unlimited Access to all future updates - all included FREE with your purchase!",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md border border-gray-200 p-4 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="font-bold text-lg flex items-center">
                    <span className="bg-[#22b97d]/10 text-[#22b97d] p-1 rounded-full mr-2">
                      <MessageCircle className="h-4 w-4" />
                    </span>
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-gray-600 pl-8">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="mb-4 text-gray-600">
                Still have questions? Contact our friendly support team at{" "}
                <a
                  href="mailto:support@smartsheetsolotions.store"
                  className="text-[#22b97d] hover:underline font-medium"
                >
                  support@smartsheetsolotions.store
                </a>
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-full shadow-md"
              >
                <Link
                  href="https://payhip.com/u1726849691488409912277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  Get Started Now <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-10 bg-gradient-to-r from-[#22b97d] to-[#1a9063] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Your Financial Freedom Starts Today</h2>

            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg mb-6">
              <CountdownTimer light={true} />
            </div>

            <div className="flex justify-center items-center gap-6 mb-6">
              <div className="text-center">
                <p className="text-sm opacity-80">Regular</p>
                <p className="text-xl line-through opacity-70">$73</p>
              </div>
              <div className="text-center">
                <p className="text-sm opacity-80">Today Only</p>
                <p className="text-3xl font-bold">$7.87</p>
              </div>
            </div>

            <p className="mb-6 text-sm">
              Remember to use coupon code "<span className="font-bold">MARI</span>" for an additional discount!
            </p>

            <Button
              asChild
              size="lg"
              className="bg-white text-[#22b97d] hover:bg-gray-100 px-8 py-4 text-xl rounded-full shadow-lg"
            >
              <Link
                href="https://payhip.com/u1726849691488409912277"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                YES! I WANT FINANCIAL FREEDOM! <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <div className="flex justify-center mt-4">
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-full text-sm">
                <Shield className="h-4 w-4 mr-2" />
                <span>60-Day Money Back Guarantee</span>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <div className="bg-white/20 rounded-lg p-3">
                <div className="flex items-center justify-center gap-3">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/paypal-oymPWwJF5zozYi6iYbSXDz8HsTqsqz.png"
                    alt="PayPal"
                    width={60}
                    height={30}
                    className="h-6 object-contain"
                  />
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/visa-goNJRQLFPjS3LAqrkbabh9qSVkScYP.png"
                    alt="Visa"
                    width={60}
                    height={30}
                    className="h-6 object-contain"
                  />
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/credit-ys7hnvRrACyTCEhSRzy2qWsZGW8Uz2.png"
                    alt="Mastercard"
                    width={60}
                    height={30}
                    className="h-6 object-contain"
                  />
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-DPhuYPsin0b4FksOfMXd1LUhOqVzVj.png"
                    alt="American Express"
                    width={60}
                    height={30}
                    className="h-6 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <a href="mailto:support@smartsheetsolotions.store" className="text-gray-400 hover:text-white text-sm">
              support@smartsheetsolotions.store
            </a>
            <span className="text-gray-500">|</span>
            <a href="https://wa.me/+447376242539" className="text-gray-400 hover:text-white text-sm">
              WhatsApp: +44 7376 242539
            </a>
          </div>

          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/paypal-oymPWwJF5zozYi6iYbSXDz8HsTqsqz.png"
                alt="PayPal"
                width={60}
                height={30}
                className="h-6 object-contain"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/visa-goNJRQLFPjS3LAqrkbabh9qSVkScYP.png"
                alt="Visa"
                width={60}
                height={30}
                className="h-6 object-contain"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/credit-ys7hnvRrACyTCEhSRzy2qWsZGW8Uz2.png"
                alt="Mastercard"
                width={60}
                height={30}
                className="h-6 object-contain"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-DPhuYPsin0b4FksOfMXd1LUhOqVzVj.png"
                alt="American Express"
                width={60}
                height={30}
                className="h-6 object-contain"
              />
            </div>
          </div>

          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} Simple Budget Planner. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Sticky CTA */}
      {scrolled && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg py-2 px-4 z-30 animate-slideUp">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <div>
                <p className="font-bold text-base text-[#22b97d]">$7.87</p>
                <p className="text-xs text-gray-500 line-through">$73</p>
              </div>
            </div>
            <Button
              asChild
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
            >
              <Link href="https://payhip.com/u1726849691488409912277" target="_blank" rel="noopener noreferrer">
                BUY NOW
              </Link>
            </Button>
          </div>
        </div>
      )}

      {/* Exit Intent Popup */}
      {showExitIntent && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4 animate-scaleIn relative">
            <button
              onClick={() => setShowExitIntent(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-red-500" />
              </div>

              <h3 className="text-xl font-bold mb-2">Wait! Don't Miss This Offer</h3>
              <p className="text-gray-600 mb-4">
                Get an <strong>EXTRA 15% OFF</strong> if you order in the next 15 minutes!
              </p>

              <div className="bg-yellow-50 border-2 border-dashed border-yellow-400 p-4 rounded-lg mb-4">
                <p className="text-2xl font-bold text-yellow-700">MARI</p>
                <p className="text-sm text-gray-600">Use this code at checkout</p>
              </div>

              <Button
                asChild
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
              >
                <Link href="https://payhip.com/u1726849691488409912277" target="_blank" rel="noopener noreferrer">
                  Claim My Discount Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Social Proof Popup */}
      <SocialProofPopup />
    </div>
  )
}
