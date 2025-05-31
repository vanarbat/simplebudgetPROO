"use client"

import { Check, X } from "lucide-react"

export default function ComparisonTable() {
  return (
    <div className="max-w-5xl mx-auto overflow-x-auto">
      <div className="min-w-[800px]">
        <div className="grid grid-cols-4 gap-4">
          {/* Header Row */}
          <div className="p-4 font-bold text-lg">Features</div>
          <div className="p-4 bg-[#22b97d]/10 rounded-t-lg text-center">
            <div className="font-bold text-lg text-[#22b97d]">Simple Budget Planner</div>
            <div className="text-sm text-[#22b97d] font-medium">Our Solution</div>
          </div>
          <div className="p-4 bg-gray-100 rounded-t-lg text-center">
            <div className="font-bold text-lg">Typical Budget Apps</div>
            <div className="text-sm text-gray-500 font-medium">Subscription-Based</div>
          </div>
          <div className="p-4 bg-gray-100 rounded-t-lg text-center">
            <div className="font-bold text-lg">DIY Spreadsheets</div>
            <div className="text-sm text-gray-500 font-medium">Build Your Own</div>
          </div>

          {/* Feature Rows */}
          <div className="p-4 bg-gray-50 font-medium">One-time payment</div>
          <div className="p-4 bg-[#22b97d]/5 text-center">
            <Check className="h-6 w-6 text-[#22b97d] mx-auto" />
            <div className="text-sm text-[#22b97d] font-medium mt-1">Just $7.87</div>
          </div>
          <div className="p-4 bg-gray-50 text-center">
            <X className="h-6 w-6 text-red-500 mx-auto" />
            <div className="text-sm text-gray-500 mt-1">$5-15/month</div>
          </div>
          <div className="p-4 bg-gray-50 text-center">
            <Check className="h-6 w-6 text-green-500 mx-auto" />
            <div className="text-sm text-gray-500 mt-1">Free (your time)</div>
          </div>

          <div className="p-4 bg-white font-medium">Easy to use</div>
          <div className="p-4 bg-white text-center">
            <Check className="h-6 w-6 text-[#22b97d] mx-auto" />
            <div className="text-sm text-[#22b97d] font-medium mt-1">10 min setup</div>
          </div>
          <div className="p-4 bg-white text-center">
            <Check className="h-6 w-6 text-green-500 mx-auto" />
            <div className="text-sm text-gray-500 mt-1">Learning curve</div>
          </div>
          <div className="p-4 bg-white text-center">
            <X className="h-6 w-6 text-red-500 mx-auto" />
            <div className="text-sm text-gray-500 mt-1">Complex setup</div>
          </div>

          <div className="p-4 bg-gray-50 font-medium">Visual progress tracking</div>
          <div className="p-4 bg-[#22b97d]/5 text-center">
            <Check className="h-6 w-6 text-[#22b97d] mx-auto" />
            <div className="text-sm text-[#22b97d] font-medium mt-1">Built-in charts</div>
          </div>
          <div className="p-4 bg-gray-50 text-center">
            <Check className="h-6 w-6 text-green-500 mx-auto" />
            <div className="text-sm text-gray-500 mt-1">Basic visuals</div>
          </div>
          <div className="p-4 bg-gray-50 text-center">
            <X className="h-6 w-6 text-red-500 mx-auto" />
            <div className="text-sm text-gray-500 mt-1">Manual creation</div>
          </div>

          <div className="p-4 bg-white font-medium">Works offline</div>
          <div className="p-4 bg-white text-center">
            <Check className="h-6 w-6 text-[#22b97d] mx-auto" />
            <div className="text-sm text-[#22b97d] font-medium mt-1">100% offline</div>
          </div>
          <div className="p-4 bg-white text-center">
            <X className="h-6 w-6 text-red-500 mx-auto" />
            <div className="text-sm text-gray-500 mt-1">Internet required</div>
          </div>
          <div className="p-4 bg-white text-center">
            <Check className="h-6 w-6 text-green-500 mx-auto" />
            <div className="text-sm text-gray-500 mt-1">Offline capable</div>
          </div>

          <div className="p-4 bg-gray-50 font-medium">Debt reduction plan</div>
          <div className="p-4 bg-[#22b97d]/5 text-center">
            <Check className="h-6 w-6 text-[#22b97d] mx-auto" />
            <div className="text-sm text-[#22b97d] font-medium mt-1">Included</div>
          </div>
          <div className="p-4 bg-gray-50 text-center">
            <Check className="h-6 w-6 text-green-500 mx-auto" />
            <div className="text-sm text-gray-500 mt-1">Basic features</div>
          </div>
          <div className="p-4 bg-gray-50 text-center">
            <X className="h-6 w-6 text-red-500 mx-auto" />
            <div className="text-sm text-gray-500 mt-1">Not included</div>
          </div>

          <div className="p-4 bg-white font-medium">Customizable categories</div>
          <div className="p-4 bg-white text-center">
            <Check className="h-6 w-6 text-[#22b97d] mx-auto" />
            <div className="text-sm text-[#22b97d] font-medium mt-1">Fully customizable</div>
          </div>
          <div className="p-4 bg-white text-center">
            <Check className="h-6 w-6 text-green-500 mx-auto" />
            <div className="text-sm text-gray-500 mt-1">Limited options</div>
          </div>
          <div className="p-4 bg-white text-center">
            <Check className="h-6 w-6 text-green-500 mx-auto" />
            <div className="text-sm text-gray-500 mt-1">DIY setup</div>
          </div>

          <div className="p-4 bg-gray-50 font-medium">50 Quick Wins eBook</div>
          <div className="p-4 bg-[#22b97d]/5 text-center">
            <Check className="h-6 w-6 text-[#22b97d] mx-auto" />
            <div className="text-sm text-[#22b97d] font-medium mt-1">Included FREE</div>
          </div>
          <div className="p-4 bg-gray-50 text-center">
            <X className="h-6 w-6 text-red-500 mx-auto" />
            <div className="text-sm text-gray-500 mt-1">Not included</div>
          </div>
          <div className="p-4 bg-gray-50 text-center">
            <X className="h-6 w-6 text-red-500 mx-auto" />
            <div className="text-sm text-gray-500 mt-1">Not included</div>
          </div>

          <div className="p-4 bg-white font-medium">Video tutorials</div>
          <div className="p-4 bg-white text-center">
            <Check className="h-6 w-6 text-[#22b97d] mx-auto" />
            <div className="text-sm text-[#22b97d] font-medium mt-1">Step-by-step guides</div>
          </div>
          <div className="p-4 bg-white text-center">
            <Check className="h-6 w-6 text-green-500 mx-auto" />
            <div className="text-sm text-gray-500 mt-1">Basic tutorials</div>
          </div>
          <div className="p-4 bg-white text-center">
            <X className="h-6 w-6 text-red-500 mx-auto" />
            <div className="text-sm text-gray-500 mt-1">Not included</div>
          </div>

          {/* Bottom Row - CTA */}
          <div className="p-4 font-bold text-lg">Best Choice For:</div>
          <div className="p-4 bg-[#22b97d]/10 rounded-b-lg text-center">
            <div className="font-bold text-[#22b97d]">
              Anyone who wants a simple, effective budget system without monthly fees
            </div>
          </div>
          <div className="p-4 bg-gray-100 rounded-b-lg text-center">
            <div className="text-gray-700">People who prefer mobile apps and don't mind ongoing subscription costs</div>
          </div>
          <div className="p-4 bg-gray-100 rounded-b-lg text-center">
            <div className="text-gray-700">
              Spreadsheet experts who have time to build and maintain their own system
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
