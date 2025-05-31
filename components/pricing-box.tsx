"use client"

import { useState } from "react"
import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingBox() {
  const [couponCode, setCouponCode] = useState("")
  const [couponApplied, setCouponApplied] = useState(false)
  const [showCouponMessage, setShowCouponMessage] = useState(false)

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === "MARI") {
      setCouponApplied(true)
      setShowCouponMessage(true)
    } else {
      setCouponApplied(false)
      setShowCouponMessage(true)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-xl border border-[#22b97d]/20 overflow-hidden relative">
          <div className="bg-[#22b97d] text-white p-6 relative overflow-hidden">
            {/* Add subtle pattern overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "url('data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='1' fillRule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E')",
              }}
            ></div>

            <h3 className="text-2xl font-bold mb-2 relative">Simple Budget Planner</h3>
            <div className="flex items-baseline relative">
              <span className="text-4xl font-bold">$7.87</span>
              <span className="text-lg line-through ml-2 opacity-70">$73</span>
              <span className="ml-2 bg-white text-[#22b97d] px-2 py-1 rounded-full text-xs font-bold">88% OFF</span>
            </div>
            <p className="mt-2 opacity-90 relative">One-time payment, lifetime access</p>

            {/* Add decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-white/10 rounded-full"></div>
          </div>

          <div className="p-6">
            <h4 className="font-bold text-lg mb-4">What's Included:</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#22b97d] mt-0.5 mr-3 flex-shrink-0" />
                <span>Complete Budget Planner System (Excel & Google Sheets)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#22b97d] mt-0.5 mr-3 flex-shrink-0" />
                <span>50 Quick Wins eBook</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#22b97d] mt-0.5 mr-3 flex-shrink-0" />
                <span>Goal Tracker System</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#22b97d] mt-0.5 mr-3 flex-shrink-0" />
                <span>Debt Reduction Plan</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#22b97d] mt-0.5 mr-3 flex-shrink-0" />
                <span>Investment Starter Guide</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#22b97d] mt-0.5 mr-3 flex-shrink-0" />
                <span>Lifetime Updates</span>
              </li>
            </ul>

            <div className="mb-6">
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-lg border-2 border-dashed border-yellow-400 relative overflow-hidden">
                {/* Add a subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shine_3s_ease-in-out_infinite]"></div>

                <div className="flex items-center mb-2">
                  <div className="bg-yellow-400 p-1 rounded-full mr-2">
                    <span className="text-yellow-800 font-bold text-sm">$</span>
                  </div>
                  <h4 className="font-bold text-yellow-800">SPECIAL DISCOUNT CODE</h4>
                </div>
                <p className="text-sm mb-2">For sales in the next 15 minutes:</p>
                <div className="bg-white p-3 rounded-md text-center mb-2 relative overflow-hidden">
                  <span className="font-bold text-xl text-yellow-700">MARI</span>
                  {/* Add a subtle pulse effect */}
                  <div className="absolute inset-0 bg-yellow-400/20 animate-pulse rounded-md opacity-50"></div>
                </div>
                <p className="text-xs text-gray-600 text-center">Use this code for an additional discount!</p>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="w-full bg-gradient-to-r from-[#22b97d] to-[#1a9063] hover:from-[#1ea06c] hover:to-[#157a53] text-white relative overflow-hidden group"
            >
              <Link
                href="https://payhip.com/u1726849691488409912277"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <span className="relative z-10 flex items-center">
                  Get Started Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#22b97d]/0 via-[#22b97d]/20 to-[#22b97d]/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-0 transition-all duration-700"></span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="bg-gray-50 rounded-xl p-6 mb-6 shadow-md border border-gray-200 transform hover:scale-105 transition-all duration-300">
            <h4 className="font-bold text-lg mb-4">Why People Love Our Budget Planner:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#22b97d] mt-0.5 mr-3 flex-shrink-0" />
                <span>
                  "I've tried so many budgeting apps, but this simple spreadsheet works better than all of them!"
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#22b97d] mt-0.5 mr-3 flex-shrink-0" />
                <span>"The visual progress trackers keep me motivated to stick with my budget."</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#22b97d] mt-0.5 mr-3 flex-shrink-0" />
                <span>"I love that I can customize it to fit my specific financial situation."</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#22b97d] mt-0.5 mr-3 flex-shrink-0" />
                <span>"The 50 Quick Wins eBook alone saved me hundreds of dollars!"</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#22b97d]/10 rounded-xl p-6 shadow-md border border-[#22b97d]/20 transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
            {/* Add decorative corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#22b97d] rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#22b97d] rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#22b97d] rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#22b97d] rounded-br-lg"></div>

            <h4 className="font-bold text-lg mb-4 flex items-center">
              <span className="bg-[#22b97d] text-white p-1 rounded-full mr-2">
                <CheckCircle className="h-5 w-5" />
              </span>
              Our 60-Day Money-Back Guarantee
            </h4>
            <p className="mb-4">
              If you're not completely satisfied with the Simple Budget Planner, simply let us know within 60 days and
              we'll refund your purchase. No questions asked.
            </p>
            <p className="font-medium">Try it risk-free and see the difference it can make in your financial life!</p>

            {/* Add a subtle shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shine_3s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
